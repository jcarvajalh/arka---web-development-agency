// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    robotsTxt(),
  ],
});