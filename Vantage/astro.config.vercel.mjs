import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static-only build for Vercel: same idea as astro.config.pages.mjs, but the
// Vercel project serves from the domain root (no /portfolio/ prefix), so the
// base path is just /vantage/.
export default defineConfig({
  base: '/vantage/',
  outDir: './dist-vercel',
  vite: {
    plugins: [tailwindcss()],
  },
});
