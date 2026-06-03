# ARKA - Agencia de Desarrollo Web

Sitio web de una agencia de desarrollo web tipo **One Page** con una página adicional de proyectos. Desarrollado con **Astro 4+** y **Tailwind CSS**.

## 🚀 Stack Tecnológico

- **Framework**: Astro 4+
- **Estilos**: Tailwind CSS
- **Sitemap**: @astrojs/sitemap
- **Robots.txt**: astro-robots-txt
- **Vite**: Como bundler (integrado con Astro)

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── index.astro          ← Página principal (One Page)
│   └── proyectos.astro      ← Página de casos de éxito
├── components/
│   ├── layout/
│   │   ├── Header.astro     ← Navegación principal
│   │   └── Footer.astro     ← Pie de página
│   └── sections/
│       ├── Hero.astro       ← Sección principal
│       ├── Servicios.astro  ← Servicios ofrecidos
│       ├── Precios.astro    ← Planes de precios
│       └── FAQ.astro        ← Preguntas frecuentes
├── layouts/
│   └── BaseLayout.astro     ← Layout principal con scroll suave
├── assets/
│   └── images/              ← Imágenes y assets
└── styles/
    └── global.css           ← Estilos globales de Tailwind
```

## 🎯 Secciones del Sitio

### Página Principal (index.astro)
- **Hero**: Sección de bienvenida con CTA
- **Servicios**: Grid de 6 servicios principales
- **Precios**: 3 planes (Básico, Profesional, Enterprise)
- **FAQ**: 6 preguntas frecuentes con detalles expandibles
- **Contacto**: Sección de contacto con email y teléfono

### Página de Proyectos (proyectos.astro)
- **6 Casos de Éxito** con información de:
  - Imagen del proyecto
  - Nombre y descripción
  - Tecnologías utilizadas (tags)
  - Link externo al proyecto
- Layout independiente con datos como array local

## ✨ Características

✅ **One Page Responsivo**: Diseño mobile-first y fully responsive  
✅ **Scroll Suave**: Navegación con scroll behavior smooth  
✅ **Menú Móvil**: Hamburger menu togglable para dispositivos móviles  
✅ **Sitemap Automático**: Generado en el build  
✅ **Robots.txt**: Configurado automáticamente  
✅ **SEO Optimizado**: Meta tags y structure correcta  
✅ **Diseño Moderno**: Con Tailwind CSS y gradientes  
✅ **Componentes Reutilizables**: Header, Footer, secciones independientes  

## 🔧 Configuración (astro.config.mjs)

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://tu-dominio.com',
  integrations: [
    tailwindcss(),
    sitemap(),
    robotsTxt(),
  ],
});
```

**Nota**: Cambiar `https://tu-dominio.com` por el dominio real del sitio.

## 📋 Navegación

### Header - Links internos y externos
- **Logo ARKA** → Scroll al top (href="#")
- **Servicios** → Scroll a sección #servicios
- **Proyectos** → Abre página /proyectos en nueva pestaña
- **Precios** → Scroll a sección #precios
- **FAQ** → Scroll a sección #faq
- **Contacto** → Scroll a sección #contacto (con email y teléfono)

## 🎨 Colores Principal

- **Primario**: Blue (#1e40af - Blue 700)
- **Secundario**: Indigo (#4c1d95)
- **Fondo**: White (#ffffff)
- **Texto**: Gray-900 (#111827)
- **Acentos**: Gray-50 a Gray-900

## 📦 Instalación y Ejecución

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
# Abre http://localhost:4321/
```

### Build para Producción
```bash
npm run build
# Genera archivos en carpeta /dist/
```

### Preview del Build
```bash
npm run preview
# Vista previa antes de deployar
```

## 📱 Responsive Design

- **Desktop**: Menú horizontal completo
- **Tablet**: Menú horizontal con ajustes
- **Mobile**: Hamburger menu togglable (media query md:)

## 🔄 Scroll Suave

Configurado en `BaseLayout.astro` con:
```css
html {
  scroll-behavior: smooth;
}
```

Todos los links internos (#servicios, #precios, etc.) crean scroll animado.

## 🤖 SEO

- **Sitemap**: Generado automáticamente en `/sitemap-index.xml`
- **Robots.txt**: Configurado en `/robots.txt`
- **Meta Tags**: Title, description en cada página
- **OG Tags**: Preparados para redes sociales

## 📝 Modificaciones Recomendadas

1. **Cambiar dominio en astro.config.mjs**:
   ```javascript
   site: 'https://tu-dominio-real.com'
   ```

2. **Actualizar información de contacto**:
   - Email en Header, Footer y sección Contacto
   - Teléfono en Header, Footer y sección Contacto

3. **Reemplazar datos de proyectos** en `src/pages/proyectos.astro` con proyectos reales

4. **Actualizar servicios** en `src/components/sections/Servicios.astro`

5. **Personalizar planes de precios** en `src/components/sections/Precios.astro`

## 🚀 Deployment

El proyecto está listo para deployar en:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Any static hosting**

Simplemente ejecuta `npm run build` y sube la carpeta `/dist/` a tu hosting.

## 📄 Licencia

© 2024 ARKA. Todos los derechos reservados.
