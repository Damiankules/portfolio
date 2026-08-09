import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static-only build for GitHub Pages: no Keystatic admin UI (that needs a
// server) and no Node adapter — just the public marketing homepage, served
// under /portfolio/vantage/ alongside the rest of the existing site.
export default defineConfig({
  base: '/portfolio/vantage/',
  outDir: './dist-pages',
  vite: {
    plugins: [tailwindcss()],
  },
});
