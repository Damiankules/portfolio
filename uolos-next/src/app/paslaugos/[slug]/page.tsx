import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const s = getService((await params).slug);
  if (!s) return {};
  return buildMetadata({ title: s.title, description: s.intro, path: `/paslaugos/${s.slug}/`, image: s.image.src });
}

export default async function ServicePage({ params }: { params: Params }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = projects.filter((p) => p.service === s.slug);

  return (
    <>
      <section className="pt-[clamp(48px,8vw,96px)] pb-[clamp(64px,9vw,110px)]">
        <div className="wrap">
          <Link href="/paslaugos/" className="link">← Visos paslaugos</Link>
          <div className="grid gap-10 mt-10 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
            <div>
              <p className="eyebrow">Paslauga</p>
              <h1 className="h1 split mb-6">{s.title}</h1>
              <p className="font-serif text-[clamp(1.2rem,3vw,1.45rem)] leading-snug mb-6">{s.intro}</p>
              {s.body.map((b) => <p key={b} className="lead">{b}</p>)}
              <ul className="mt-8 border-t border-[var(--line-light)]">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-4 py-4 border-b border-[var(--line-light)]"><span className="text-clay-deep">—</span>{pt}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-9">
                <Button href="/kontaktai/" arrow>Aptarkime jūsų idėją</Button>
              </div>
            </div>
            <div className="media aspect-[4/5] reveal">
              <img src={s.image.src} alt={s.image.alt} decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section on-sand">
          <div className="wrap">
            <h2 className="h2 mb-10 reveal">Susiję <em>projektai</em></h2>
            <div className="grid gap-10 md:grid-cols-2 md:gap-x-[clamp(28px,4vw,64px)]">
              {related.map((p) => <ProjectCard key={p.slug} project={p} compact />)}
            </div>
          </div>
        </section>
      )}
      <CTA />
    </>
  );
}
