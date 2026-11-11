// src/data/servicios.ts
// Fuente única de datos de los servicios: alimenta la lista de la home
// (Servicios.astro) y la página individual de cada servicio (/servicios/[slug]).

export interface Fase {
  title: string;
  description: string;
}

export interface Pregunta {
  q: string;
  a: string;
}

export interface Servicio {
  slug: string;
  /** Nombre corto que aparece en la lista de la home. */
  nombre: string;
  /** Frase corta (columna derecha de la lista). */
  resumen: string;
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Hero */
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Problema → solución */
  problemaTitulo: string;
  problema: string;
  sintomas: string[];
  solucionTitulo: string;
  solucion: string;
  /** Qué incluye */
  incluye: Fase[];
  /** 4 fases del servicio */
  fases: Fase[];
  faqs: Pregunta[];
}

export const CAL_URL = "https://cal.com/arkaagency/reunion-acercamiento";
export const WHATSAPP_URL = "https://wa.link/r77o0d";

export const servicios: Servicio[] = [
  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "diseno-desarrollo-web",
    nombre: "Diseño y Desarrollo Web",
    resumen:
      "Sitios rápidos, medibles y pensados para convertir, no solo para gustar.",
    metaTitle: "Diseño de Páginas Web y Desarrollo Web a Medida | ARKA",
    metaDescription:
      "Agencia de desarrollo web en Cali. Diseño web profesional y desarrollo web a medida con Astro y Next.js: sitios rápidos, optimizados para SEO y orientados a conversión.",
    keywords: [
      "diseño de páginas web",
      "desarrollo web a medida",
      "agencia de desarrollo web",
      "diseño web profesional",
    ],
    eyebrow: "Diseño de páginas web",
    h1: "Diseño y desarrollo web a medida que convierte visitas en clientes",
    intro:
      "Somos una agencia de desarrollo web que diseña y programa sitios a la medida de startups, empresas tech y clínicas: rápidos, fáciles de usar y construidos para que cada visita tenga un siguiente paso claro.",
    image: "/diseño-personalizado.webp",
    imageAlt: "Diseño web profesional a medida por ARKA",
    problemaTitulo: "Una web bonita que no vende es un gasto, no una inversión.",
    problema:
      "Muchas empresas tienen un sitio hecho con plantillas genéricas, lento en celulares y sin una estructura pensada para el cliente. El resultado: visitas que llegan, no entienden qué haces y se van sin escribirte.",
    sintomas: [
      "Tu sitio tarda más de 3 segundos en cargar",
      "Se ve igual que el de tu competencia",
      "Recibes visitas pero casi ningún contacto",
      "Cada cambio depende de un tercero o de un plugin",
    ],
    solucionTitulo: "Diseño web profesional con una base técnica sólida.",
    solucion:
      "Partimos de tus objetivos comerciales para definir la arquitectura, el mensaje y las llamadas a la acción. Después diseñamos una interfaz propia y la desarrollamos con tecnologías modernas como Astro y Next.js, con SEO técnico y analítica integrados desde el primer día.",
    incluye: [
      {
        title: "Arquitectura de información",
        description:
          "Estructura de páginas y contenidos pensada para el recorrido de tu cliente.",
      },
      {
        title: "Diseño UX/UI a medida",
        description:
          "Interfaz única para tu marca, sin plantillas, en desktop y móvil.",
      },
      {
        title: "Desarrollo con Astro o Next.js",
        description:
          "Código limpio, rápido y escalable, preparado para crecer contigo.",
      },
      {
        title: "Responsive y rendimiento",
        description:
          "Optimización de imágenes, carga y Core Web Vitals en todos los dispositivos.",
      },
      {
        title: "SEO técnico de base",
        description:
          "Metadatos, sitemap, datos estructurados e indexación correctamente configurados.",
      },
      {
        title: "Medición y conversión",
        description:
          "Google Analytics 4, Tag Manager y Clarity para entender qué funciona.",
      },
    ],
    fases: [
      {
        title: "Descubrimiento",
        description:
          "Entendemos tu negocio, tu cliente ideal y tus objetivos para definir alcance y estructura del sitio.",
      },
      {
        title: "Diseño",
        description:
          "Wireframes y diseño visual de alta fidelidad, con rondas de revisión antes de escribir código.",
      },
      {
        title: "Desarrollo",
        description:
          "Programación a medida, integraciones, optimización de rendimiento y pruebas en dispositivos reales.",
      },
      {
        title: "Lanzamiento",
        description:
          "Publicación, configuración de analítica, redirecciones y acompañamiento después de salir en vivo.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta diseñar y desarrollar una página web profesional?",
        a: "El precio de una página web profesional depende de su complejidad, cantidad de secciones, funcionalidades y nivel de personalización. Un sitio corporativo puede tener necesidades diferentes a una plataforma con integraciones o funcionalidades específicas. En ARKA analizamos los objetivos de cada negocio para desarrollar sitios web a medida, equilibrando diseño, rendimiento, experiencia de usuario y escalabilidad.",
      },
      {
        q: "¿Qué incluye el diseño y desarrollo de una página web?",
        a: "El diseño y desarrollo de una página web incluye la planificación de su estructura, diseño de interfaz, adaptación a dispositivos móviles, programación, optimización de rendimiento y configuración técnica para buscadores. En ARKA también contemplamos aspectos como arquitectura de información, experiencia de usuario, llamadas a la acción y herramientas de medición, buscando que cada sitio web cumpla objetivos comerciales concretos.",
      },
      {
        q: "¿Es mejor crear una página web a medida o utilizar una plantilla?",
        a: "Depende de las necesidades del negocio. Una plantilla puede ser suficiente para proyectos sencillos, pero un desarrollo a medida permite mayor control sobre el diseño, la arquitectura, las funcionalidades y el rendimiento. En ARKA utilizamos tecnologías como Astro y Next.js para crear experiencias web personalizadas cuando los objetivos del proyecto requieren flexibilidad, optimización y una base técnica preparada para evolucionar.",
      },
      {
        q: "¿Cuánto tiempo tarda el desarrollo de una página web?",
        a: "El tiempo de desarrollo depende del alcance del proyecto, la cantidad de páginas, las funcionalidades y la disponibilidad de contenidos. Una página corporativa sencilla puede desarrollarse en pocas semanas, mientras que proyectos con integraciones y funcionalidades personalizadas requieren más tiempo. En ARKA definimos cada etapa del proyecto para organizar el diseño, las revisiones, el desarrollo y la publicación del sitio.",
      },
      {
        q: "¿Mi página web funcionará correctamente en celulares y tablets?",
        a: "Sí. Los sitios web que desarrolla ARKA utilizan un enfoque responsive, lo que significa que su diseño y contenido se adaptan a diferentes tamaños de pantalla. Optimizamos la navegación, los elementos visuales, la legibilidad y la interacción para ofrecer una experiencia consistente en celulares, tablets y computadores.",
      },
      {
        q: "¿Puedo rediseñar mi página web actual sin perder mi posicionamiento en Google?",
        a: "Sí. Es posible renovar el diseño y la tecnología de una página web conservando elementos importantes para su posicionamiento orgánico. Para reducir riesgos es necesario revisar las URLs existentes, implementar redirecciones 301 cuando corresponda, conservar contenido relevante y verificar los aspectos técnicos antes y después de la migración. En ARKA consideramos estos factores durante los proyectos de rediseño web.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "posicionamiento-seo",
    nombre: "Posicionamiento SEO",
    resumen: "Que te encuentren los que ya te están buscando.",
    metaTitle: "Posicionamiento SEO y SEO Local | Agencia SEO en Cali | ARKA",
    metaDescription:
      "Agencia SEO en Cali. Estrategias de posicionamiento SEO, SEO técnico y SEO local para posicionar tu página web en Google y atraer clientes que ya te están buscando.",
    keywords: [
      "posicionamiento SEO",
      "agencia SEO",
      "posicionar página web en Google",
      "SEO local",
    ],
    eyebrow: "Agencia SEO",
    h1: "Posicionamiento SEO para que tus clientes te encuentren en Google",
    intro:
      "Trabajamos el SEO técnico, el contenido y el SEO local de tu sitio para posicionar tu página web en Google frente a las búsquedas que realmente traen clientes.",
    image: "/SEO-CRO.webp",
    imageAlt: "Posicionamiento SEO en Google por ARKA",
    problemaTitulo: "Si no estás en la primera página, para tu cliente no existes.",
    problema:
      "Tu competencia aparece cuando alguien busca lo que vendes y tú no. Un sitio con problemas de indexación, palabras clave mal elegidas o contenido que no responde a la intención de búsqueda pierde clientes todos los días sin darse cuenta.",
    sintomas: [
      "No apareces cuando buscan tu servicio en tu ciudad",
      "Tienes tráfico, pero no son clientes potenciales",
      "Google no indexa varias de tus páginas",
      "Dependes 100% de la publicidad pagada",
    ],
    solucionTitulo: "Una estrategia SEO con datos, no con suposiciones.",
    solucion:
      "Auditamos tu sitio, investigamos cómo busca tu cliente y corregimos lo que impide que Google te entienda. Luego construimos contenido y señales de autoridad alrededor de las búsquedas con intención comercial, y medimos el avance con Search Console y GA4.",
    incluye: [
      {
        title: "Auditoría SEO",
        description:
          "Diagnóstico técnico, de contenido y de competencia de tu sitio actual.",
      },
      {
        title: "Investigación de palabras clave",
        description:
          "Búsquedas con intención comercial priorizadas por volumen y dificultad.",
      },
      {
        title: "SEO técnico",
        description:
          "Velocidad, indexación, sitemap, robots.txt, URLs y datos estructurados.",
      },
      {
        title: "SEO local",
        description:
          "Perfil de Empresa en Google, páginas por ubicación y datos consistentes.",
      },
      {
        title: "Contenido optimizado",
        description:
          "Páginas y artículos que responden a lo que tu cliente busca (SEO, AEO y GEO).",
      },
      {
        title: "Reportes de rendimiento",
        description:
          "Seguimiento de posiciones, tráfico orgánico y conversiones mes a mes.",
      },
    ],
    fases: [
      {
        title: "Auditoría",
        description:
          "Revisamos el estado técnico, el contenido y la autoridad de tu sitio frente a tu competencia.",
      },
      {
        title: "Estrategia",
        description:
          "Definimos palabras clave, arquitectura y prioridades según el impacto en tu negocio.",
      },
      {
        title: "Optimización",
        description:
          "Corregimos lo técnico, optimizamos páginas existentes y creamos contenido nuevo.",
      },
      {
        title: "Medición y crecimiento",
        description:
          "Seguimos posiciones y conversiones, y ajustamos la estrategia de forma continua.",
      },
    ],
    faqs: [
      {
        q: "¿Cómo posicionar mi página web en los primeros resultados de Google?",
        a: "Para mejorar el posicionamiento de una página web en Google es necesario trabajar el SEO técnico, la investigación de palabras clave, la calidad del contenido, la arquitectura del sitio y la autoridad del dominio. También es importante analizar la competencia y comprender qué buscan los clientes potenciales. En ARKA desarrollamos estrategias SEO orientadas a mejorar la visibilidad orgánica y atraer tráfico relevante para cada negocio.",
      },
      {
        q: "¿Cuánto tiempo tarda una estrategia SEO en dar resultados?",
        a: "El posicionamiento SEO es un proceso de mediano y largo plazo. Los primeros avances pueden aparecer durante los primeros meses, pero alcanzar posiciones competitivas suele requerir trabajo constante. El tiempo depende de la competencia, el estado inicial del sitio, la autoridad del dominio y la estrategia implementada. En ARKA trabajamos con objetivos de optimización progresivos y seguimiento del rendimiento orgánico.",
      },
      {
        q: "¿Qué es el SEO técnico y por qué es importante para una página web?",
        a: "El SEO técnico comprende las optimizaciones que permiten a los motores de búsqueda rastrear, interpretar e indexar correctamente un sitio web. Incluye aspectos como velocidad de carga, arquitectura, URLs, etiquetas, sitemap XML, archivos robots.txt, indexación y datos estructurados. En ARKA trabajamos estos elementos para construir una base técnica que facilite el posicionamiento orgánico.",
      },
      {
        q: "¿Qué es el SEO local y cómo puede ayudar a conseguir clientes en mi ciudad?",
        a: "El SEO local permite mejorar la visibilidad de un negocio cuando las personas realizan búsquedas relacionadas con servicios y ubicaciones específicas. Incluye la optimización del Perfil de Empresa en Google, información de contacto, páginas orientadas a ubicaciones, contenido local y consistencia de los datos comerciales. En ARKA trabajamos estrategias para ayudar a los negocios a conectar con clientes potenciales de su zona geográfica.",
      },
      {
        q: "¿Por qué mi página web recibe visitas, pero no aparece en Google o no consigue clientes?",
        a: "Recibir visitas no garantiza un buen posicionamiento ni la generación de oportunidades comerciales. Puede haber problemas de indexación, palabras clave poco relevantes, contenido que no responde a la intención de búsqueda o una experiencia de usuario deficiente. En ARKA analizamos el rendimiento orgánico mediante herramientas como Google Search Console y Google Analytics 4 para identificar problemas y oportunidades de optimización.",
      },
      {
        q: "¿Se puede mejorar el posicionamiento SEO de una página web que ya está desarrollada?",
        a: "Sí. No es necesario crear una página web nueva para mejorar su posicionamiento en Google. Es posible realizar una auditoría SEO, corregir problemas técnicos, optimizar contenidos, mejorar la estructura de URLs y desarrollar nuevas páginas orientadas a búsquedas relevantes. En ARKA evaluamos el estado actual del sitio y definimos acciones de optimización de acuerdo con las oportunidades de cada negocio.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "desarrollo-ecommerce",
    nombre: "Desarrollo de E-commerce",
    resumen:
      "Tiendas online rápidas, seguras y diseñadas para que comprar sea fácil.",
    metaTitle: "Desarrollo de Tiendas Online y E-commerce Personalizado | ARKA",
    metaDescription:
      "Desarrollo e-commerce en Colombia: creamos tu tienda online personalizada con Shopify o a medida, pasarelas de pago como Wompi, PayU y Mercado Pago, e integraciones de inventario.",
    keywords: [
      "desarrollo de tiendas online",
      "crear tienda online",
      "desarrollo e-commerce",
      "tienda online personalizada",
    ],
    eyebrow: "Desarrollo e-commerce",
    h1: "Desarrollo de tiendas online diseñadas para vender más",
    intro:
      "Creamos tu tienda online personalizada, con Shopify o a medida, conectada a tus pasarelas de pago, inventario y envíos, y pensada para que comprar sea rápido y sin fricciones.",
    image: "/ecommerce.webp",
    imageAlt: "Desarrollo de tienda online personalizada por ARKA",
    problemaTitulo: "Cada paso de más en tu checkout es una venta perdida.",
    problema:
      "Tiendas lentas, fichas de producto poco claras, procesos de pago confusos y operación manual de pedidos e inventario. Los clientes abandonan el carrito y tu equipo pierde horas en tareas que podrían automatizarse.",
    sintomas: [
      "Alta tasa de carritos abandonados",
      "Actualizas inventario y pedidos a mano",
      "Tu tienda no transmite confianza para pagar",
      "La plataforma actual limita cómo quieres vender",
    ],
    solucionTitulo: "Un e-commerce construido alrededor de tu operación.",
    solucion:
      "Analizamos tu catálogo, tus procesos y tus clientes para elegir la tecnología correcta. Diseñamos una experiencia de compra orientada a conversión, integramos pasarelas de pago locales y conectamos la tienda con tus sistemas de inventario, facturación y envíos.",
    incluye: [
      {
        title: "Shopify o desarrollo a medida",
        description:
          "Recomendamos la plataforma según tu catálogo, integraciones y crecimiento.",
      },
      {
        title: "Diseño orientado a conversión",
        description:
          "Fichas de producto, filtros y checkout pensados para reducir fricción.",
      },
      {
        title: "Pasarelas de pago",
        description:
          "Integración con Wompi, Mercado Pago, PayU y otros medios disponibles en Colombia.",
      },
      {
        title: "Inventario, facturación y envíos",
        description:
          "Conexión con tus sistemas para sincronizar existencias y automatizar pedidos.",
      },
      {
        title: "Automatizaciones",
        description:
          "Recuperación de carritos, correos transaccionales y flujos post-compra.",
      },
      {
        title: "SEO y analítica e-commerce",
        description:
          "Fichas indexables y medición del embudo de compra de punta a punta.",
      },
    ],
    fases: [
      {
        title: "Análisis comercial",
        description:
          "Revisamos catálogo, procesos de venta, logística e integraciones para definir la plataforma.",
      },
      {
        title: "Experiencia de compra",
        description:
          "Diseñamos navegación, fichas de producto y checkout enfocados en conversión.",
      },
      {
        title: "Desarrollo e integraciones",
        description:
          "Construimos la tienda y conectamos pagos, inventario, facturación y envíos.",
      },
      {
        title: "Lanzamiento y optimización",
        description:
          "Salimos en vivo, medimos el embudo y optimizamos la tasa de conversión.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta desarrollar una tienda online profesional?",
        a: "El precio de desarrollar una tienda online depende del número de productos, funcionalidades, integraciones y nivel de personalización. Una tienda básica tiene necesidades diferentes a un e-commerce con inventario sincronizado, múltiples pasarelas de pago y automatizaciones comerciales. En ARKA analizamos cada negocio para desarrollar soluciones de comercio electrónico adaptadas a sus procesos y objetivos de venta.",
      },
      {
        q: "¿Qué necesita una tienda online para vender más?",
        a: "Una tienda online necesita una experiencia de compra intuitiva, fotografías de calidad, descripciones claras, navegación sencilla y un proceso de pago seguro. También debe transmitir confianza mediante políticas de envío, devoluciones, información de contacto y medios de pago reconocidos. En ARKA priorizamos el diseño orientado a conversión, el rendimiento y la experiencia del usuario para reducir fricciones durante la compra.",
      },
      {
        q: "¿Es mejor crear una tienda online personalizada o utilizar Shopify?",
        a: "Depende de los objetivos y necesidades operativas del negocio. Shopify ofrece herramientas integradas para gestionar productos, pedidos y ventas, mientras que un desarrollo personalizado permite mayor control sobre la arquitectura, el diseño y las funcionalidades. En ARKA evaluamos el catálogo, las integraciones y los procesos comerciales para recomendar la tecnología que mejor se adapte a cada proyecto.",
      },
      {
        q: "¿Qué pasarelas de pago se pueden integrar en una tienda online en Colombia?",
        a: "Una tienda online en Colombia puede integrar pasarelas de pago como Wompi, Mercado Pago y PayU, entre otras alternativas disponibles. Estas plataformas permiten habilitar diferentes métodos de pago, como tarjetas y otros medios electrónicos, según las condiciones de cada proveedor. En ARKA implementamos integraciones de pago considerando los requisitos técnicos y comerciales del negocio.",
      },
      {
        q: "¿Se puede integrar una tienda online con inventarios, facturación y sistemas de envíos?",
        a: "Sí. Una tienda online puede conectarse con sistemas de inventario, plataformas de facturación electrónica, operadores logísticos y herramientas de gestión empresarial. Estas integraciones permiten automatizar tareas, sincronizar existencias y mejorar la administración de pedidos. En ARKA desarrollamos estas conexiones según las herramientas que utilice cada negocio y las capacidades de integración de sus proveedores.",
      },
      {
        q: "¿Cómo mejorar la tasa de conversión de una tienda online?",
        a: "Para mejorar la conversión de una tienda online es necesario analizar el comportamiento de los usuarios e identificar obstáculos durante la compra. Se pueden optimizar las fichas de producto, simplificar el proceso de pago, mejorar la velocidad y reforzar los elementos de confianza. En ARKA aplicamos principios de experiencia de usuario y optimización de conversiones para ayudar a transformar más visitas en compras.",
      },
    ],
  },
];

export const getServicio = (slug: string) =>
  servicios.find((s) => s.slug === slug)!;
