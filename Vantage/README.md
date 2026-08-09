# Vantage

Astro + Tailwind CSS 4 + Keystatic starter, styled after the provided reference screenshot (announcement bar, floating pill nav, hero card layout).

## Stack

- **Astro 7** (server output, `@astrojs/node` adapter) — the home page itself is prerendered (`export const prerender = true`); only the Keystatic admin routes run on-demand.
- **Tailwind CSS 4** via `@tailwindcss/vite`.
- **Keystatic** (local storage mode) for editing the hero/announcement copy at `/keystatic`. Content lives in `src/content/home/index.json`.

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run dev       # site
#   /keystatic     # content editor
npm run build
npm run preview
```

## Hero background

The animated hero background (`src/components/FluidBackground.astro`) is an **original WebGL fragment shader** (fbm/domain-warp noise) written for this project — a legally safe placeholder that approximates the color-blend look of the reference screenshot without using any third-party template, video, or paid asset.

If you have a licensed 3D animation/video (e.g. from the original purchased template) to use instead, drop the file into `public/` and swap `<FluidBackground />` in `src/components/Hero.astro` for a `<video>`/`<canvas>` element pointing at it.

## Content editing

Editable via Keystatic UI at `/keystatic`:

- Announcement bar text + CTA
- Hero badge, heading (two lines), description, CTA label

Nav links are currently static in `src/components/Header.astro` (Menu, Our Story, Pricing, Contact, Stories, FAQ) — ask if you'd like these moved into Keystatic as well.
