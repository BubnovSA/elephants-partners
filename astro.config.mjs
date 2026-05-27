import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://elephants.partners',
  base: process.env.BASE_PATH || '/',
  integrations: [],
  output: 'static',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
