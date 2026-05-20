// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  site: 'https://diff.devcito.org',
  vite: {
    plugins: [tailwindcss()],
  },
});
