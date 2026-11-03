// ray-burst.js — Abanico de rayos 3D animado (Three.js, fondo transparente)
// - Rayos rectos que "respiran" y van y vienen en profundidad
// - Los rayos que se van hacia el fondo se desvanecen; los que vienen al frente no
// - Las puntas que quedan cerca del origen (en pantalla) se desvanecen: sin punto blanco central
// - Se apartan suave y lentamente del cursor
//
// Uso:
//   import { RayBurst } from './ray-burst.js';
//   const burst = new RayBurst(document.querySelector('#hero'), { color: '#ffffff' });
//   burst.setColor('#ff00aa');  // cambiar color
//   burst.dispose();            // limpiar
import * as THREE from 'three';

const DEFAULTS = {
  count: 350,          // número de rayos
  color: '#ffffff',    // color de líneas y puntas
  opacity: 1.5,        // opacidad global
  radius: 1.0,         // longitud máxima base de los rayos
  pointSize: 3.5,      // tamaño de las puntas (px CSS)
  dotRatio: 0.67,      // proporción de rayos con punto en la punta
  faintRatio: 0.25,    // proporción de rayos tenues de fondo (sin punto)
  pulseSpeed: 0.55,    // velocidad de la "respiración" de las longitudes
  depthAmp: 0.30,      // cuánto van y vienen los rayos en profundidad
  depthSpeed: 0.25,    // velocidad del vaivén en profundidad
  backFade: 1.2,       // cuánto se desvanecen los rayos que se van al fondo (0-1)
  hoverRadius: 0.2,    // radio de influencia del cursor (en pantalla)
  hoverForce: 0.15,    // cuánto se aparta cada rayo
  follow: 7.0,         // qué tan rápido reaccionan al cursor (más bajo = más suave)
  fade: 2.0,           // velocidad con la que aparece/desaparece el efecto del cursor
  rotationSpeed: 0,    // giro sobre el eje vertical (rad/s). 0 = sin giro
  fov: 32,
  seed: 0.07,
};

// PRNG determinista para que el patrón sea siempre igual
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const vertexShader = /* glsl */ `
  attribute vec3 aDir;
  attribute vec4 aParams;   // x: largo base, y: amplitud, z: velocidad, w: fase
  attribute float aT;       // 0 = origen, 1 = punta
  attribute float aBright;  // brillo por rayo
  uniform float uTime;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform float uDepthAmp;
  uniform float uDepthSpeed;
  uniform float uBackFade;
  uniform vec2  uMouse;
  uniform float uAspect;
  uniform float uRadius;
  uniform float uForce;
  uniform float uStrength;
  varying float vAlpha;

  vec2 toScreen(vec4 c) { vec2 n = c.xy / c.w; n.x *= uAspect; return n; }

  void main() {
    // "Respiración": dos senos de distinta frecuencia
    float s = uTime * aParams.z + aParams.w;
    float wave = 0.5 + 0.5 * sin(s) * 0.7 + 0.5 * sin(s * 2.31 + 1.7) * 0.3;
    float len = aParams.x + aParams.y * wave;

    // Vaivén en profundidad (cada rayo a su ritmo)
    float sway = sin(uTime * uDepthSpeed * (0.6 + 0.4 * aParams.z) + aParams.w * 1.7);
    vec3 dir = normalize(aDir + vec3(0.0, 0.0, sway * uDepthAmp));

    // Origen y punta en pantalla
    mat4 pmv = projectionMatrix * modelViewMatrix;
    vec2 A = toScreen(pmv * vec4(0.0, 0.0, 0.0, 1.0));
    vec2 B = toScreen(pmv * vec4(dir * len, 1.0));
    vec2 AB = B - A;

    // Repulsión del cursor: el rayo gira rígido alrededor del origen
    vec2 M = vec2(uMouse.x * uAspect, uMouse.y);
    float h = clamp(dot(M - A, AB) / max(dot(AB, AB), 1e-6), 0.0, 1.0);
    vec2 v = (A + AB * h - M) / uRadius;
    vec2 push = v * exp(-dot(v, v)) * 2.33 * uForce * uStrength;

    vec3 pos = dir * len * aT;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    vec4 clip = projectionMatrix * mv;
    push.x /= uAspect;
    clip.xy += push * aT * clip.w;   // lineal en aT => el rayo sigue recto
    gl_Position = clip;
    gl_PointSize = uPointSize * uPixelRatio;

    // --- Opacidad ---
    // Profundidad: los más lejanos bajan al ~35 %
    vec4 o = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float depth = clamp((o.z - mv.z + 0.7) / 1.4, 0.0, 1.0);
    float depthA = mix(1.0, 0.35, depth);

    // A lo largo del rayo: transparente en el origen, 100 % en la punta
    float along = pow(aT, 0.9) * smoothstep(0.0, 0.35, aT);

    // Rayos que apuntan al fondo se desvanecen; los que vienen al frente no
    vec3 vDir = normalize(mat3(modelViewMatrix) * dir);
    float front = smoothstep(-0.45, 0.15, vDir.z);
    float backA = mix(1.0 - uBackFade, 1.0, front);

    // Puntas que en pantalla quedan cerca del origen se desvanecen
    float tipA = smoothstep(0.04, 0.22, length(AB));

    vAlpha = aBright * depthA * along * backA * tipA;
  }
`;

const lineFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;
  void main() {
    gl_FragColor = vec4(uColor, vAlpha * uOpacity);
  }
`;

const pointFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float a = smoothstep(0.5, 0.32, d);
    if (a <= 0.0) discard;
    gl_FragColor = vec4(uColor, a * min(1.0, vAlpha * 1.25) * uOpacity);
  }
`;

export class RayBurst {
  constructor(container, options = {}) {
    this.opts = { ...DEFAULTS, ...options };
    this.container = container;
    const o = this.opts;

    // Renderer con fondo transparente
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(o.fov, 1, 0.1, 100);

    this.uniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(o.color) },
      uOpacity: { value: o.opacity },
      uPointSize: { value: o.pointSize },
      uPixelRatio: { value: this.renderer.getPixelRatio() },
      uDepthAmp: { value: o.depthAmp },
      uDepthSpeed: { value: o.depthSpeed },
      uBackFade: { value: o.backFade },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: 1 },
      uRadius: { value: o.hoverRadius },
      uForce: { value: o.hoverForce },
      uStrength: { value: 0 },
    };

    this.group = new THREE.Group();
    this.scene.add(this.group);
    this._build();

    // Cursor
    this._target = new THREE.Vector2(0, 0);
    this._inside = false;
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerOut = this._onPointerOut.bind(this);
    this._onPointerUp = (e) => { if (e.pointerType !== 'mouse') this._onPointerOut(); };
    window.addEventListener('pointermove', this._onPointerMove, { passive: true });
    window.addEventListener('pointerup', this._onPointerUp);
    document.addEventListener('pointerleave', this._onPointerOut);
    window.addEventListener('blur', this._onPointerOut);

    // Tamaño
    this._onResize = this._onResize.bind(this);
    this._ro = new ResizeObserver(this._onResize);
    this._ro.observe(container);
    this._onResize();

    // Animación (se pausa cuando el contenedor no está en pantalla)
    this.clock = new THREE.Clock();
    this._time = 0;
    this._visible = true;
    this._loop = this._loop.bind(this);
    this._raf = requestAnimationFrame(this._loop);

    this._io = new IntersectionObserver(([entry]) => {
      this._visible = entry.isIntersecting;
      if (this._visible && !this._raf) {
        this.clock.getDelta();
        this._raf = requestAnimationFrame(this._loop);
      }
    });
    this._io.observe(container);
  }

  _build() {
    const o = this.opts;
    const rand = mulberry32(o.seed);
    const L = { dir: [], par: [], t: [], b: [] };
    const P = { dir: [], par: [], t: [], b: [] };
    const push = (g, d, par, t, br) => {
      g.dir.push(d[0], d[1], d[2]);
      g.par.push(par[0], par[1], par[2], par[3]);
      g.t.push(t);
      g.b.push(br);
    };

    for (let i = 0; i < o.count; i++) {
      // Semiesfera superior: más densidad cerca de la vertical
      const phi = rand() * Math.PI * 2;
      const cosTheta = Math.pow(rand(), 0.85);
      const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
      const d = [sinTheta * Math.cos(phi), cosTheta, sinTheta * Math.sin(phi) * 0.75];

      const par = [
        o.radius * (0.45 + rand() * 0.45),    // largo base
        o.radius * (0.08 + rand() * 0.28),    // amplitud
        o.pulseSpeed * (0.35 + rand() * 0.9), // velocidad
        rand() * Math.PI * 2,                 // fase
      ];

      // ~25 % de rayos tenues de fondo, sin punto
      const faint = rand() < o.faintRatio;
      const bright = faint ? 0.25 + rand() * 0.2 : 0.55 + rand() * 0.45;

      push(L, d, par, 0, bright);
      push(L, d, par, 1, bright);
      // ~2/3 del total llevan punto (solo entre los no tenues)
      if (!faint && rand() < o.dotRatio / (1 - o.faintRatio)) push(P, d, par, 1, bright);
    }

    const makeGeo = (g) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(g.dir.length), 3));
      geo.setAttribute('aDir', new THREE.Float32BufferAttribute(g.dir, 3));
      geo.setAttribute('aParams', new THREE.Float32BufferAttribute(g.par, 4));
      geo.setAttribute('aT', new THREE.Float32BufferAttribute(g.t, 1));
      geo.setAttribute('aBright', new THREE.Float32BufferAttribute(g.b, 1));
      geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), o.radius * 2);
      return geo;
    };

    const common = {
      uniforms: this.uniforms,
      vertexShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    };

    this.lines = new THREE.LineSegments(
      makeGeo(L),
      new THREE.ShaderMaterial({ ...common, fragmentShader: lineFragment })
    );
    this.points = new THREE.Points(
      makeGeo(P),
      new THREE.ShaderMaterial({ ...common, fragmentShader: pointFragment })
    );
    this.lines.frustumCulled = false;
    this.points.frustumCulled = false;
    this.group.add(this.lines, this.points);
  }

  _onPointerMove(e) {
    const r = this.container.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    this._inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
    this._target.set(x * 2 - 1, -(y * 2 - 1));
  }

  _onPointerOut() {
    this._inside = false;
  }

  _onResize() {
    const w = this.container.clientWidth || 1;
    const h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.uniforms.uPixelRatio.value = this.renderer.getPixelRatio();
    this.uniforms.uAspect.value = w / h;

    const cam = this.camera;
    cam.aspect = w / h;
    // En pantallas estrechas alejamos la cámara para que quepa el abanico
    const halfFov = THREE.MathUtils.degToRad(cam.fov) / 2;
    const z = Math.max(2.4, 0.8 / (Math.tan(halfFov) * cam.aspect));
    const y = 0.16 * z;   // cámara un poco elevada
    cam.position.set(0, y, z);
    // Inclinamos la cámara para que el origen quede justo en el borde inferior
    const pitch = -Math.atan2(y, z) + halfFov;
    cam.rotation.set(pitch, 0, 0);
    cam.updateProjectionMatrix();
  }

  _loop() {
    if (!this._visible) { this._raf = null; return; }
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const o = this.opts;
    const u = this.uniforms;

    this._time += dt;
    u.uTime.value = this._time;
    if (o.rotationSpeed) this.group.rotation.y += dt * o.rotationSpeed;

    // Seguimiento lento y amortiguado del cursor (independiente de los FPS)
    u.uMouse.value.lerp(this._target, 1 - Math.exp(-dt * o.follow));
    u.uStrength.value += ((this._inside ? 1 : 0) - u.uStrength.value) * (1 - Math.exp(-dt * o.fade));

    this.renderer.render(this.scene, this.camera);
    this._raf = requestAnimationFrame(this._loop);
  }

  setColor(c) { this.uniforms.uColor.value.set(c); }

  dispose() {
    cancelAnimationFrame(this._raf);
    this._raf = null;
    this._ro.disconnect();
    this._io.disconnect();
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    document.removeEventListener('pointerleave', this._onPointerOut);
    window.removeEventListener('blur', this._onPointerOut);
    this.lines.geometry.dispose();
    this.lines.material.dispose();
    this.points.geometry.dispose();
    this.points.material.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}