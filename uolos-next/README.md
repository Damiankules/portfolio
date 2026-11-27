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

## Formularz (FormSubmit)

Formularz (`src/components/ui/ContactForm.tsx`) wysyła zapytania przez **FormSubmit** na adres z `src/data/site.ts` (`email`), razem z załącznikiem (do 5 MB).
Po wysłaniu wraca na tę samą stronę z `?issiusta=1` i pokazuje podziękowanie.

Przy **pierwszym** wysłaniu FormSubmit wyśle na ten adres e-mail z przyciskiem **„Activate Form”** — trzeba go raz kliknąć.

## Wdrożenie

- **Git**: Netlify odczyta `netlify.toml` (build `npm run build`, publish `out`).
- **Ręcznie**: `npm run build` i przeciągnij folder `out/` w **Deploys → Drag and drop**.

Zmienna `NEXT_PUBLIC_SITE_URL` (domyślnie `https://uolos.lt`) — patrz `.env.example`.

### Autor commitów

Netlify (darmowy plan, prywatne repo) buduje tylko commity od członków zespołu Netlify.
Commity muszą być podpisane kontem GitHub **Damiankules** — inaczej deploy kończy się błędem
„Unrecognized Git contributor”.
