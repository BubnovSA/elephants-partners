import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://elephants.partners',
  base: '/',
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
