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

The hero background (`src/components/TreeScene.astro`) is a real, live 3D scene rendered with [Three.js](https://threejs.org/): a procedurally generated tree on a pedestal against a blue sky gradient, slowly rotating. The tree geometry comes from [EZ-Tree](https://github.com/dgreenheck/ez-tree) (**MIT license**, free for commercial use) — a free, legal stand-in for the reference screenshot's (licensed) 3D tree render, built from the `Oak Small` preset with tweaked bark/leaf tint and gnarliness.

If you'd rather use the actual purchased template's video/3D export, drop it into `public/` and swap `<TreeScene />` in `src/components/Hero.astro` for a `<video>`/`<canvas>` pointing at it.

## Content editing

Editable via Keystatic UI at `/keystatic`:

- Announcement bar text + CTA
- Hero badge, heading (two lines), description, primary/secondary CTA labels, testimonial quote/name/title

Nav links are currently static in `src/components/Header.astro` (Menu, Our Story, Pricing, Contact, Stories, FAQ) — ask if you'd like these moved into Keystatic as well.
