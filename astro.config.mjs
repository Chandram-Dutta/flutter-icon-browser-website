import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://Chandram-Dutta.github.io',
  base: '/flutter-icon-browser-website',
});