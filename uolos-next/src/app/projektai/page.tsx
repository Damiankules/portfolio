import PageIntro from "@/components/sections/PageIntro";
import ProjectCard from "@/components/ui/ProjectCard";
import CTA from "@/components/sections/CTA";
import { realProjects, visualizations } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projektai",
  description: "Įgyvendinti dekoratyvinių uolų reljefų projektai ir koncepcijos: miegamieji, svetainės, sienos prie židinio.",
  path: "/projektai/",
});

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Projektai" title={<>Kiekvienas projektas — <em>unikalus.</em></>} text="Kiekviena kompozicija gimsta iš individualios idėjos. Kuriame reljefus, kurie tampa išskirtine interjero architektūros dalimi." />
      <section className="pb-[clamp(88px,12vw,150px)]">
        <div className="wrap">
          <div className="grid gap-14 md:grid-cols-2 md:gap-x-[clamp(28px,4vw,64px)]">
            {realProjects.map((p, i) => <ProjectCard key={p.slug} project={p} className={i % 2 ? "md:mt-[120px]" : ""} />)}
          </div>
          <div className="mt-[clamp(88px,12vw,140px)] pt-7 border-t border-[var(--line-light)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 mb-8 reveal">
            <h2 className="h3 !text-[clamp(1.6rem,4vw,2.3rem)]">Koncepcijos ir vizualizacijos</h2>
            <p className="text-stone text-[.95rem] max-w-[46ch]">Tai ne įgyvendinti objektai, o vizualizacijos — kaip panašus reljefas galėtų atrodyti jūsų erdvėje.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-[clamp(28px,4vw,64px)]">
            {visualizations.map((p) => <ProjectCard key={p.slug} project={p} compact short />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
