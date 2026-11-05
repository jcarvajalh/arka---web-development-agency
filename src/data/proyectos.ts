// src/data/proyectos.ts
// Fuente única de datos de los proyectos destacados + contenido del caso de estudio.

export interface ResultadoMetrica {
  value: string;
  label: string;
}

export interface DecisionDiseno {
  title: string;
  description: string;
}

/** Una captura del desarrollo terminado del proyecto. */
export interface CapturaGaleria {
  src: string;
  alt: string;
  /** Texto corto que acompaña a la captura (opcional). */
  caption?: string;
}

/**
 * Layout de la galería de capturas. Cada variante comparte el mismo sistema
 * visual (fondo oscuro, bordes #1e1e1e, radios y acento azul) pero cambia la
 * composición para que cada caso se sienta distinto sin romper la armonía.
 *  - "mosaico": una captura grande + capturas pequeñas en cuadrícula.
 *  - "apilado": capturas grandes a todo el ancho, una sobre otra.
 *  - "duo":     imagen + texto alternados lado a lado.
 */
export type GaleriaLayout = "mosaico" | "apilado" | "duo";

export interface Proyecto {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  summary: string;
  tecnologias: string[];
  externalUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  design: DecisionDiseno[];
  results: ResultadoMetrica[];
  /** Layout de la galería de capturas. Si se omite, no se muestra galería. */
  galleryLayout?: GaleriaLayout;
  /** Capturas del desarrollo terminado. */
  gallery?: CapturaGaleria[];
}

export const proyectos: Proyecto[] = [
  {
    slug: "la-casa-de-los-libros",
    title: "La Casa de los Libros",
    category: "E-commerce & Eventos culturales",
    year: "2025",
    image: "/la-casa-de-los-libros.webp",
    alt: "La Casa De Los Libros",
    summary:
      "Librería cultural en Colombia. Diseñamos y desarrollamos su sitio web con sistema de venta de entradas para eventos, integración de pagos y SEO técnico desde cero.",
    tecnologias: ["Shopify", "Tixator"],
    externalUrl: "https://lacasadeloslibros.org/",
    overview:
      "La Casa de los Libros es un espacio cultural que combina librería, café y una agenda constante de eventos. Necesitaban una presencia digital que transmitiera su identidad cálida y, al mismo tiempo, funcionara como una herramienta real de venta de entradas y difusión.",
    challenge:
      "El cliente no contaba con un canal propio para vender entradas a sus eventos ni para mostrar su catálogo. Dependían de redes sociales y mensajería, lo que hacía lento el proceso de compra y difícil de medir. El reto fue construir, desde cero, una plataforma rápida que centralizara eventos, pagos y contenido sin perder el carácter artesanal de la marca.",
    solution:
      "Desarrollamos el sitio con Astro para lograr una carga casi instantánea, integramos una pasarela de pagos para la venta de entradas y estructuramos todo el contenido con SEO técnico desde la base. El diseño prioriza la tipografía editorial, los espacios amplios y una navegación que invita a explorar la agenda cultural.",
    design: [
      {
        title: "Identidad editorial",
        description:
          "Tipografía con carácter literario y una paleta sobria que respeta la esencia cultural de la marca.",
      },
      {
        title: "Venta de entradas integrada",
        description:
          "Flujo de compra simple con pasarela de pagos: del evento al pago en pocos pasos.",
      },
      {
        title: "Arquitectura orientada a SEO",
        description:
          "Estructura semántica, metadatos y rendimiento optimizados para posicionar desde el lanzamiento.",
      },
      {
        title: "Velocidad como prioridad",
        description:
          "Sitio estático con Astro: imágenes optimizadas y cero peso innecesario.",
      },
    ],
    results: [
      { value: "4 sem", label: "Del concepto al lanzamiento" },
      { value: "98/100", label: "PageSpeed en móvil" },
      { value: "100%", label: "Venta de entradas en línea" },
    ],
    galleryLayout: "mosaico",
    gallery: [
      {
        src: "/la-casa-de-los-libros-home.png",
        alt: "Home del sitio de La Casa de los Libros",
        caption: "Home con una vista cultural en primer plano.",
      },
      {
        src: "/la-casa-de-los-libros-proceso-compra.png",
        alt: "Proceso de compra de entradas de La Casa de los Libros",
        caption: "Flujo de compra de entradas.",
      },
      {
        src: "/la-casa-de-los-libros-espacios-limpios.png",
        alt: "Diseño de espacios limpios de La Casa de los Libros",
        caption: "Tipografía editorial y espacios amplios.",
      },
    ],
  },
  {
    slug: "clinica-dental-dentinos",
    title: "Clínica Dental Dentinos",
    category: "Salud & Odontología",
    year: "2025",
    image: "/clinica-dental-dentinos.jpg",
    alt: "Clínica Dental Dentinos",
    summary:
      "Clínica odontológica con un sitio optimizado para transmitir confianza médica y captar nuevos pacientes mediante SEO local y agendamiento.",
    tecnologias: ["Astro"],
    overview:
      "Dentinos es una clínica dental enfocada en la experiencia del paciente. Buscaban un sitio que proyectara profesionalismo y confianza, y que convirtiera las visitas en citas agendadas.",
    challenge:
      "En el sector salud, la confianza lo es todo. La clínica necesitaba diferenciarse de la competencia local y facilitar que un paciente pasara de 'estoy buscando dentista' a 'ya agendé mi cita', sin fricción y desde el móvil.",
    solution:
      "Diseñamos una interfaz limpia y de primera clase que comunica seguridad médica, con llamados a la acción claros hacia el agendamiento. Implementamos SEO local para aparecer en las búsquedas de la zona y optimizamos el rendimiento para que cada página cargue al instante.",
    design: [
      {
        title: "Confianza médica",
        description:
          "Jerarquía visual limpia, colores serenos y pruebas sociales que transmiten profesionalismo.",
      },
      {
        title: "Agendamiento sin fricción",
        description:
          "Rutas de conversión claras hacia la reserva de cita, pensadas primero para móvil.",
      },
      {
        title: "SEO Local",
        description:
          "Optimización para búsquedas de la zona, para captar pacientes que buscan cerca.",
      },
      {
        title: "Rendimiento impecable",
        description:
          "Carga instantánea e imágenes optimizadas para no perder a ningún visitante.",
      },
    ],
    results: [
      { value: "5 sem", label: "Del concepto al lanzamiento" },
      { value: "99/100", label: "PageSpeed en móvil y desktop" },
      { value: "SEO Local", label: "Visibilidad en la zona" },
    ],
    galleryLayout: "apilado",
    gallery: [
      {
        src: "/encabezado-clinica-dentinos.png",
        alt: "Encabezado del sitio web de la Clínica Dental Dentinos",
        caption: "Encabezado que transmite confianza médica.",
      },
      {
        src: "/ruta-conversion-clinica-dentinos.png",
        alt: "Ruta de conversión hacia el agendamiento de citas de la Clínica Dental Dentinos",
        caption: "Rutas de conversión claras hacia la reserva de cita.",
      },
    ],
  },
  {
    slug: "solution-systems",
    title: "Solution systems",
    category: "Tecnología & Servicios",
    year: "2025",
    image: "/solution-systems.png",
    alt: "Solution systems",
    summary:
      "Sitio web para una compañía dedicada a la venta de servicios tecnológicos, construido para proyectar autoridad y generar oportunidades comerciales.",
    tecnologias: ["Astro", "SEO", "CRO"],
    externalUrl: "https://solution-systems.pages.dev/",
    overview:
      "Solution systems ofrece soluciones y servicios tecnológicos a empresas. Necesitaban un sitio que posicionara su marca como un socio confiable y que convirtiera el tráfico en contactos comerciales.",
    challenge:
      "El mercado tecnológico es competido y técnico. El reto fue comunicar un portafolio de servicios de forma clara y persuasiva, evitando el exceso de jerga, y guiar al visitante hacia el contacto.",
    solution:
      "Creamos una web rápida y moderna con una narrativa orientada a beneficios, no a características. La estructura guía al usuario por los servicios y lo lleva de forma natural hacia la conversión, con SEO técnico para atraer tráfico cualificado.",
    design: [
      {
        title: "Narrativa de beneficios",
        description:
          "Mensajes centrados en el valor para el cliente, no en tecnicismos.",
      },
      {
        title: "Diseño moderno y limpio",
        description:
          "Estética tech profesional que proyecta autoridad y confianza.",
      },
      {
        title: "Arquitectura orientada a CRO",
        description:
          "Recorridos pensados para convertir visitantes en oportunidades comerciales.",
      },
      {
        title: "SEO técnico",
        description:
          "Base sólida para atraer tráfico cualificado desde buscadores.",
      },
    ],
    results: [
      { value: "6 sem", label: "Del concepto al lanzamiento" },
      { value: "98/100", label: "PageSpeed en móvil" },
      { value: "Alcance", label: "Captación de más publico corporativo" },
    ],
    galleryLayout: "duo",
    gallery: [
      {
        src: "/app-solution-systems.png",
        alt: "Aplicación web de Solution Systems para servicios tecnológicos",
        caption:
          "Narrativa orientada a beneficios: el valor para el cliente por delante de los tecnicismos.",
      },
      {
        src: "/ruta-solution-systems.png",
        alt: "Ruta de navegación por los servicios tecnológicos de Solution Systems",
        caption:
          "Estructura que guía al visitante por los servicios hasta la conversión.",
      },
      {
        src: "/3-imagen-solution-systems.png",
        alt: "Sección de contacto de Solution Systems para facilitar la comunicación con clientes",
        caption:
          "Facilidad de contacto con clientes: canales directos que convierten el interés en oportunidades comerciales.",
      },
    ],
  },
];

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
