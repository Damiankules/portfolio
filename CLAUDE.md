# Portfolio — instrukcje dla Claude

Użytkownik pisze po polsku; strony dla klientów zwykle po litewsku.
Projekty: `uolos-next/` (kopia repo Damiankules/uolos — tam jest źródło), `kules/` (wizytówka), strony koncepcyjne w katalogu głównym, `Vantage/`.

## Plan tworzenia stron (obowiązkowy)

Każdą stronę robimy w tej kolejności — nie zaczynamy od generowania kodu.
Jeśli użytkownik pominie krok albo poprosi o coś z późniejszego etapu, gdy wcześniejszy nie jest zrobiony — **przypomnij mu o tym** (krótko, z listą brakujących punktów).

1. **Idea** — cel strony, grupa docelowa, funkcje, analiza konkurencji.
2. **Technologie** — hosting i język. PHP, gdy hosting/VPS go obsługuje; na Netlify/Vercel — Next.js + TypeScript.
3. **Architektura** — struktura katalogów, strony, URL-e, komponenty, backend, baza danych (jeśli potrzebna).
4. **UI/UX** — design system, kolory, fonty, nawigacja, responsywność. Unikać typowego „AI designu”.
5. **Programowanie** — najpierw szkielet, potem strony i funkcje.
6. **Technical SEO** — sitemap.xml, robots.txt, canonical, meta title, meta description, Open Graph, JSON-LD, ALT, semantyczny HTML, linki wewnętrzne, przekierowania 301, strona 404. Opcjonalnie llms.txt.
7. **Bezpieczeństwo** — HTTPS, walidacja formularzy, ochrona przed spamem, XSS, SQL injection, rate limiting, zmienne środowiskowe (.env).
8. **Prawo** — dane rejestrowe firmy, polityka prywatności, polityka cookies, zarządzanie zgodami (RODO/BDAR).
9. **Optymalizacja** — WebP/AVIF, lazy loading, cache, Core Web Vitals, Lighthouse, dostępność WCAG.
10. **Testy** — telefony, przeglądarki, formularze, linki, funkcje, bezpieczeństwo.
11. **Wdrożenie** — domena, DNS, SSL, konfiguracja produkcyjna, kopie zapasowe.
12. **Analityka** — Google Search Console, GA4, Google Tag Manager, Microsoft Clarity, Bing Webmaster Tools, śledzenie konwersji, zgłoszenie sitemap. Narzędzia śledzące uruchamiać dopiero po zgodzie użytkownika (cookie consent).
13. **Utrzymanie** — indeksacja, błędy, pozycje, konwersje, uptime, aktualizacje zależności.

Przed oddaniem pracy sprawdź, które punkty są zrobione, a które nie, i powiedz o tym użytkownikowi.
