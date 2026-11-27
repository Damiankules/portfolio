import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import Gallery from "@/components/ui/Gallery";
import BeforeAfter from "@/components/ui/BeforeAfter";
import ProjectCard from "@/components/ui/ProjectCard";
import CTA from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const p = getProject((await params).slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.summary, path: `/projektai/${p.slug}/`, image: p.cover.src });
}

export default async function ProjectPage({ params }: { params: Params }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const real = p.kind === "realizuotas";
  const service = getService(p.service);
  const others = projects.filter((x) => x.slug !== p.slug && x.kind === p.kind).slice(0, 2);
  const tag = real ? "Įgyvendintas projektas" : "Vizualizacija";

  return (
    <>
      <section className="pt-[clamp(48px,8vw,96px)] pb-[clamp(40px,6vw,64px)]">
        <div className="wrap">
          <Link href="/projektai/" className="link mb-10">← Visi projektai</Link>
          <div className="head !mb-0 mt-8">
            <div>
              <p className="eyebrow">{tag} · {p.room}</p>
              <h1 className="h1 split">{p.title}</h1>
            </div>
            <div>
              {p.description.map((d) => <p key={d} className="lead">{d}</p>)}
              {!real && <p className="mt-5 inline-block text-[.7rem] tracking-[.2em] uppercase bg-ink text-cream px-3 py-2 rounded-full">Ne įgyvendintas objektas — koncepcija</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[clamp(64px,9vw,110px)]">
        <div className="wrap">
          <Gallery photos={p.gallery} title={p.title} tag={tag} />
          {p.facts && (
            <dl className="grid grid-cols-3 mt-12 border-t border-[var(--line-light)] reveal">
              {p.facts.map((f, i) => (
                <div key={f.label} className={`pt-6 pr-3 ${i ? "pl-4 border-l border-[var(--line-light)]" : ""}`}>
                  <dt className="text-[.7rem] tracking-[.2em] uppercase text-stone mb-2">{f.label}</dt>
                  <dd className="font-serif text-[clamp(1.05rem,2.6vw,1.5rem)]">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {p.beforeAfter && (
        <section className="section on-sand">
          <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,560px)_1fr] lg:items-center lg:gap-[72px]">
            <div className="reveal"><BeforeAfter pairs={[{ label: p.room, before: p.beforeAfter.before, after: p.beforeAfter.after }]} /></div>
            <div className="reveal">
              <p className="eyebrow">Prieš ir po</p>
              <h2 className="h2 !text-[clamp(1.9rem,4vw,2.8rem)] mb-5">Ta pati siena — <em>prieš ir po.</em></h2>
              <p className="lead">Patraukite slankiklį ir palyginkite.</p>
            </div>
          </div>
        </section>
      )}

      {service && (
        <section className="section">
          <div className="wrap reveal flex flex-wrap items-end justify-between gap-6 border-t border-[var(--line-light)] pt-10">
            <div>
              <p className="eyebrow">Paslauga</p>
              <h2 className="h3 !text-[clamp(1.6rem,4vw,2.3rem)]">{service.title}</h2>
              <p className="text-ink/70 mt-2 max-w-[56ch]">{service.short}</p>
            </div>
            <Link href={`/paslaugos/${service.slug}/`} className="link">Apie paslaugą <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="pb-[clamp(88px,12vw,150px)]">
          <div className="wrap">
            <h2 className="h3 !text-[clamp(1.6rem,4vw,2.3rem)] mb-8 reveal">Kiti projektai</h2>
            <div className="grid gap-10 md:grid-cols-2 md:gap-x-[clamp(28px,4vw,64px)]">
              {others.map((o) => <ProjectCard key={o.slug} project={o} compact short />)}
            </div>
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
