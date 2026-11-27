import { faq } from "@/data/faq";
import { pages, processSteps, site } from "@/data/site";
import { realProjects, visualizations } from "@/data/projects";
import { services } from "@/data/services";

/** llms.txt / llms-full.txt are generated from the same data as the pages (see llmstxt.org). */

const abs = (path: string) => site.url + path;
const intro = [
  `# ${site.name}`,
  "",
  `> ${site.description}`,
  "",
  "UOLOS.LT — autorinė studija Lietuvoje. Dekoratyviniai uolų reljefai kuriami rankomis tiesiai objekte; reljefo gylis 5–40 cm; kaina individuali. Svetainė lietuvių kalba.",
];
const contacts = [
  "## Kontaktai",
  "",
  `- Telefonas: ${site.phone}`,
  `- El. paštas: ${site.email}`,
  `- Instagram: ${site.instagram}`,
  `- Užklausos forma: ${abs("/kontaktai/")}`,
];

export function llmsTxt(): string {
  const main = pages.filter((p) => p.path !== "/privatumo-politika/");
  return [
    ...intro,
    "",
    "## Puslapiai",
    "",
    ...main.map((p) => `- [${p.title}](${abs(p.path)}): ${p.description}`),
    "",
    "## Paslaugos",
    "",
    ...services.map((s) => `- [${s.title}](${abs(`/paslaugos/${s.slug}/`)}): ${s.short}`),
    "",
    "## Įgyvendinti projektai",
    "",
    ...realProjects.map((p) => `- [${p.title}](${abs(`/projektai/${p.slug}/`)}): ${p.summary}`),
    "",
    ...contacts,
    "",
    "## Optional",
    "",
    ...visualizations.map((p) => `- [${p.title} (vizualizacija)](${abs(`/projektai/${p.slug}/`)}): ${p.summary}`),
    `- [Privatumo politika](${abs("/privatumo-politika/")}): Asmens duomenų tvarkymas.`,
    `- [Visas turinys vienu failu](${abs("/llms-full.txt")})`,
    "",
  ].join("\n");
}

export function llmsFullTxt(): string {
  return [
    ...intro,
    "",
    "## Apie mus",
    "",
    "UOLOS — tai individualių dekoratyvinių uolų reljefų ir akmens kompozicijų kūrimas. Kiekvieną projektą vertiname kaip atskirą kūrybinį procesą, kuriame svarbi ne tik galutinė išvaizda, bet ir kiekviena detalė. Tikslas — kurti išskirtinius, natūraliai atrodančius paviršius, suteikiančius interjerui savitą charakterį.",
    "",
    "Pagrindiniai faktai: 100 % rankų darbas; reljefo gylis 5–40 cm; kiekvienas reljefas vienetinis; kaina individuali.",
    "",
    "## Paslaugos",
    "",
    ...services.flatMap((s) => [
      `### ${s.title}`,
      `URL: ${abs(`/paslaugos/${s.slug}/`)}`,
      "",
      s.intro,
      "",
      ...s.body.flatMap((b) => [b, ""]),
      ...s.points.map((pt) => `- ${pt}`),
      "",
    ]),
    "## Įgyvendinti projektai",
    "",
    ...realProjects.flatMap((p) => [
      `### ${p.title}`,
      `URL: ${abs(`/projektai/${p.slug}/`)}`,
      `Erdvė: ${p.room}`,
      "",
      ...p.description.flatMap((d) => [d, ""]),
      ...(p.facts ?? []).map((f) => `- ${f.label}: ${f.value}`),
      "",
    ]),
    "## Vizualizacijos (ne įgyvendinti objektai)",
    "",
    ...visualizations.flatMap((p) => [`### ${p.title}`, `URL: ${abs(`/projektai/${p.slug}/`)}`, "", ...p.description, ""]),
    "## Kūrimo procesas",
    "",
    ...processSteps.map((s, i) => `${i + 1}. **${s.title}** — ${s.text}`),
    "",
    "## Architektams ir interjero dizaineriams",
    "",
    "Kviečiame bendradarbiauti architektus, interjero dizainerius ir projektavimo studijas. Reljefą kuriame pagal brėžinius, eskizą ar interjero koncepciją; atspalvius ir faktūrą deriname su visu interjeru.",
    `Daugiau: ${abs("/architektams/")}`,
    "",
    "## Dažni klausimai",
    "",
    ...faq.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    ...contacts,
    "",
  ].join("\n");
}
