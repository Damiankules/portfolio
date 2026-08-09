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

The animated hero background (`src/components/FluidBackground.astro`) is a real-time WebGL fluid simulation — colorful "paint" that swirls and blends, matching the reference screenshot's look. It's vendored from [PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) (**MIT license**, free for commercial use) into `src/lib/fluid-simulation.js`, with:

- demo-page-only glue removed (mobile promo popup, app-store links, dat.GUI debug panel, Google Analytics calls — none of it applies to this site),
- background color and palette tuned to the Vantage cream/orange/purple/lime look instead of the original's black background + full-rainbow neon,
- a periodic auto-splat loop so it keeps animating on its own (dragging on it still works too, as in the original demo).

The MIT license text is kept intact at the top of `src/lib/fluid-simulation.js` per its terms. If you'd rather use the actual purchased template's video/animation file, drop it into `public/` and swap `<FluidBackground />` in `src/components/Hero.astro` for a `<video>`/`<canvas>` pointing at it.

## Content editing

Editable via Keystatic UI at `/keystatic`:

- Announcement bar text + CTA
- Hero badge, heading (two lines), description, CTA label

Nav links are currently static in `src/components/Header.astro` (Menu, Our Story, Pricing, Contact, Stories, FAQ) — ask if you'd like these moved into Keystatic as well.
