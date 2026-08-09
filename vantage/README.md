# Vantage

Futurystyczny hero + sekcja funkcji dla fikcyjnej marki tech/SaaS "Vantage".
Zbudowane na Astro + Tailwind CSS v4 + Keystatic CMS.

## Stack

- **Astro 7** — `output: 'server'` z adapterem `@astrojs/node`, strona główna jest
  prerenderowana statycznie (`export const prerender = true` w `src/pages/index.astro`),
  a trasy `/keystatic` i `/api/keystatic/*` (wstrzykiwane przez integrację Keystatic)
  działają on-demand po stronie serwera.
- **Tailwind CSS v4** — podpięty przez `@tailwindcss/vite`, konfiguracja motywu w
  `src/styles/global.css` (`@theme`).
- **Keystatic** — CMS z lokalnym storage (`keystatic.config.ts`), zarządza kolekcją
  `features` (karty funkcji) zapisywaną jako JSON w `src/content/features/*.json`.
  Panel admina dostępny pod `/keystatic`.

## Rozwój

```bash
npm install
npm run dev       # http://127.0.0.1:4321
npm run build
npm run preview
```

## Struktura

- `src/components/AnimatedBackground.astro` — canvas z animowanym "aurora field"
  (blend `screen`, poświata w kolorach marki), perspektywiczna siatka horyzontu (CSS)
  i unoszące się cząsteczki — czysto CSS/JS, bez wideo.
- `src/components/Hero.astro` — nagłówek z animacją wejścia (fade-in + translate,
  sterowaną przez `[data-reveal]` w `src/scripts/reveal.js`), CTA, pasek statystyk.
- `src/components/FeatureCards.astro` — karty funkcji czytane w czasie builda z
  Keystatic reader (`@keystatic/core/reader`), z animacją scroll-reveal
  (`IntersectionObserver`).
- `src/scripts/reveal.js` — współdzielona logika reveal (respektuje
  `prefers-reduced-motion`).
