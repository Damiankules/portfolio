# uolos.lt

Strona studia dekoratywnych reliefów skalnych **UOLOS.LT**: Next.js (App Router) + Tailwind CSS 4, eksportowana do statycznego HTML i hostowana na Netlify.

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statyczna strona w folderze out/
npm run typecheck
```

## Treści — gdzie co zmieniać

| Co | Plik |
|---|---|
| Telefon, e-mail, Instagram, menu | `src/data/site.ts` |
| Projekty (zdjęcia, opisy, prieš/po) | `src/data/projects.ts` |
| Usługi | `src/data/services.ts` |
| Pytania (DUK) | `src/data/faq.ts` |
| Zdjęcia | `public/images/{hero,projects,services,textures}/` |

Nowy projekt = nowy obiekt w `projects.ts` + zdjęcia w `public/images/projects/`. Strona `/projektai/<slug>/` powstaje automatycznie.
Wizualizacje mają `kind: "vizualizacija"` i są wyraźnie oddzielone od zrealizowanych projektów.

## Formularz (Netlify Forms)

Formularz `uzklausa` jest wykrywany przez Netlify z pliku `public/contact-form.html`.
Komponent `src/components/ui/ContactForm.tsx` wysyła te same pola (z załącznikiem) przez `fetch`.

Po pierwszym wdrożeniu w panelu Netlify:
1. **Forms → Enable form detection** (jeśli wyłączone), potem ponowne wdrożenie.
2. **Forms → Form notifications → Email notification** → `komfortas@me.com`.

Pola w obu plikach muszą mieć te same nazwy.

## Wdrożenie

- **Git**: Netlify odczyta `netlify.toml` (build `npm run build`, publish `out`).
- **Ręcznie**: `npm run build` i przeciągnij folder `out/` w **Deploys → Drag and drop**.

Zmienna `NEXT_PUBLIC_SITE_URL` (domyślnie `https://uolos.lt`) — patrz `.env.example`.
