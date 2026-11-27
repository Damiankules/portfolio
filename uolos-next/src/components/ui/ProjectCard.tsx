import Link from "next/link";
import type { Project } from "@/types";

interface Props {
  project: Project;
  compact?: boolean;
  className?: string;
  /** hide the long summary (used in tight grids) */
  short?: boolean;
}

export default function ProjectCard({ project: p, compact = false, className = "", short = false }: Props) {
  const real = p.kind === "realizuotas";
  return (
    <Link href={`/projektai/${p.slug}/`} className={`pcard reveal group ${compact ? "compact" : ""} ${className}`}>
      <div className="media">
        <img src={p.cover.src} alt={p.cover.alt} loading="lazy" decoding="async" style={{ objectPosition: p.cover.position }} />
        {p.hoverCover && (
          <img className="alt" src={p.hoverCover.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: p.hoverCover.position }} />
        )}
        <span className={`chip ${real ? "" : "viz"}`}>{real ? "Įgyvendintas projektas" : "Vizualizacija"}</span>
        {p.gallery.length > 1 && (
          <span className="absolute z-[1] right-[18px] bottom-[18px] text-[.68rem] tracking-[.14em] px-3 py-2 rounded-full bg-ink/60 text-cream backdrop-blur-sm">
            {p.gallery.length} nuotraukos
          </span>
        )}
      </div>
      <div>
        <p className="tag">{p.room}</p>
        <h3 className="h3 mb-2.5">{p.title}</h3>
        {!short && <p className="text-ink/70 max-w-[46ch] mb-5">{p.summary}</p>}
        <span className="link">{real ? "Peržiūrėti projektą" : "Peržiūrėti koncepciją"} <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}
