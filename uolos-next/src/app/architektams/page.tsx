import PageIntro from "@/components/sections/PageIntro";
import Process from "@/components/sections/Process";
import ContactForm from "@/components/ui/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Architektams ir interjero dizaineriams",
  description: "Bendradarbiaujame su architektais, interjero dizaineriais ir projektavimo studijomis — individualūs uolų reljefai pagal jūsų projektą.",
  path: "/architektams/",
});

const points = [
  ["Pagal jūsų projektą", "Reljefą kuriame pagal brėžinius, eskizą ar interjero koncepciją."],
  ["Spalva ir faktūra", "Atspalvius ir paviršiaus charakterį deriname su visu interjeru."],
  ["Kruopštus atlikimas", "Rankų darbas objekte — tiksliai pagal suderintą sprendimą."],
];

export default function ArchitectsPage() {
  return (
    <>
      <PageIntro eyebrow="Architektams ir dizaineriams" title={<>Kurkime išskirtines erdves <em>kartu.</em></>} text="Kviečiame bendradarbiauti architektus, interjero dizainerius ir projektavimo studijas." />
      <section className="pb-[clamp(88px,12vw,150px)]">
        <div className="wrap grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:items-center">
          <div className="media aspect-[4/5] reveal">
            <img src="/images/projects/miegamasis-lempos.webp" alt="Uolos reljefo ir šviesos sąveika interjere" loading="lazy" decoding="async" />
          </div>
          <div className="reveal">
            <p className="lead">Padedame įgyvendinti nestandartinius interjero sprendimus, kuriuose svarbus individualumas, natūralių formų estetika ir profesionalus atlikimas.</p>
            <div className="mt-10 border-t border-[var(--line-light)]">
              {points.map(([t, d], i) => (
                <div key={t} className="grid grid-cols-[48px_1fr] gap-x-4 py-6 border-b border-[var(--line-light)]">
                  <span className="font-serif italic text-clay-deep text-xl">0{i + 1}</span>
                  <div><h2 className="h3 !text-[1.35rem] mb-1">{t}</h2><p className="text-ink/70">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Process />
      <section className="section on-dark" id="uzklausa">
        <div className="wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-[88px] items-start">
          <div className="reveal">
            <p className="eyebrow">Bendradarbiavimas</p>
            <h2 className="h2 mb-6">Aptarkime <em>bendradarbiavimą.</em></h2>
            <p className="lead">Papasakokite apie projektą — objektą, terminus ir idėją. Galite pridėti brėžinį ar vizualizaciją.</p>
          </div>
          <div className="reveal"><ContactForm topic="Bendradarbiavimas (architektas / dizaineris)" /></div>
        </div>
      </section>
    </>
  );
}
