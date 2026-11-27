import Link from "next/link";
import { realProjects, visualizations } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import BeforeAfter from "@/components/ui/BeforeAfter";
import Button from "@/components/ui/Button";

export default function Projects() {
  const pairs = realProjects
    .filter((p) => p.beforeAfter)
    .map((p) => ({ label: p.room.split(" ")[0], before: p.beforeAfter!.before, after: p.beforeAfter!.after }));

  return (
    <section className="section on-sand" id="projektai">
      <div className="wrap">
        <div className="head reveal">
          <div>
            <p className="eyebrow">Projektai</p>
            <h2 className="h2 split">Kiekvienas projektas — <em>unikalus.</em></h2>
          </div>
          <p className="lead">Kiekviena kompozicija gimsta iš individualios idėjos. Kuriame reljefus, kurie tampa išskirtine interjero architektūros dalimi.</p>
        </div>

        <div className="grid gap-14 md:grid-cols-2 md:gap-x-[clamp(28px,4vw,64px)]">
          {realProjects.map((p, i) => <ProjectCard key={p.slug} project={p} className={i === 1 ? "md:mt-[120px]" : ""} />)}
        </div>

        <div className="mt-[clamp(88px,12vw,140px)] pt-7 border-t border-[var(--line-light)] grid gap-8 lg:grid-cols-[minmax(0,560px)_1fr] lg:items-center lg:gap-[72px]">
          <div className="reveal"><BeforeAfter pairs={pairs} /></div>
          <div className="reveal">
            <p className="eyebrow">Prieš ir po</p>
            <h3 className="h2 !text-[clamp(1.9rem,4vw,2.8rem)] mb-5">Ta pati siena — <em>prieš ir po.</em></h3>
            <p className="lead">Reljefas formuojamas tiesiai ant esamos sienos. Paprastas paviršius tampa erdvės akcentu, kurį norisi paliesti. Patraukite slankiklį.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/kontaktai/" arrow>Noriu tokio sprendimo</Button>
              <Button href="/projektai/" variant="outline">Visi projektai</Button>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(88px,12vw,140px)] pt-7 border-t border-[var(--line-light)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 mb-8 reveal">
          <h3 className="h3 !text-[clamp(1.6rem,4vw,2.3rem)]">Koncepcijos ir vizualizacijos</h3>
          <p className="text-stone text-[.95rem] max-w-[46ch]">Tai ne įgyvendinti objektai, o vizualizacijos — kaip panašus reljefas galėtų atrodyti jūsų erdvėje.</p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-[clamp(28px,4vw,64px)]">
          {visualizations.map((p) => <ProjectCard key={p.slug} project={p} compact short />)}
        </div>
        <p className="sr-only"><Link href="/projektai/">Visi projektai</Link></p>
      </div>
    </section>
  );
}
