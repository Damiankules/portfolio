import Link from "next/link";
import { services } from "@/data/services";

export default function Services({ showHead = true }: { showHead?: boolean }) {
  return (
    <section className="section" id="paslaugos">
      <div className="wrap">
        {showHead && (
          <div className="head reveal">
            <div>
              <p className="eyebrow">Paslaugos</p>
              <h2 className="h2 split">Ką <em>kuriame.</em></h2>
            </div>
            <p className="lead">Nuo akcentinės sienos iki individualios akmens kompozicijos — kiekvienas sprendimas pritaikomas konkrečiai erdvei.</p>
          </div>
        )}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/paslaugos/${s.slug}/`} className="group reveal grid gap-5 content-start" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="media aspect-[4/3]">
                <img src={s.image.src} alt={s.image.alt} loading="lazy" decoding="async" className="transition-transform duration-[1400ms] group-hover:scale-105" />
              </div>
              <div>
                <p className="tag">0{i + 1}</p>
                <h3 className="h3 mb-2">{s.title}</h3>
                <p className="text-ink/70 mb-4">{s.short}</p>
                <span className="link">Plačiau <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
