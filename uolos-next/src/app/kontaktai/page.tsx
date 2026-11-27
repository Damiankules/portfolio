import ContactForm from "@/components/ui/ContactForm";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kontaktai",
  description: "Papasakokite apie savo idėją — aptarsime individualaus uolų reljefo projekto galimybes. Telefonas, el. paštas ir užklausos forma.",
  path: "/kontaktai/",
});

export default function ContactPage() {
  const items = [
    { label: "Telefonas", value: site.phone, href: site.phoneHref },
    { label: "El. paštas", value: site.email, href: `mailto:${site.email}` },
    { label: "Instagram", value: site.instagramHandle, href: site.instagram },
  ];
  return (
    <section className="on-dark pt-[clamp(64px,10vw,120px)] pb-[clamp(88px,12vw,150px)] min-h-[calc(100svh-78px)]">
      <div className="wrap grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-[88px] items-start">
        <div>
          <p className="eyebrow">Kontaktai</p>
          <h1 className="h1 split mb-6">Papasakokite apie <em>savo idėją.</em></h1>
          <p className="lead">Turite viziją, kurią norėtumėte įgyvendinti savo interjere? Susisiekite su mumis ir aptarkime individualaus projekto galimybes.</p>
          <ul className="mt-10 border-t border-[var(--line-dark)]">
            {items.map((it) => (
              <li key={it.label}>
                <a href={it.href} {...(it.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})} className="group block py-5 border-b border-[var(--line-dark)]">
                  <small className="block text-[.68rem] tracking-[.24em] uppercase text-cream/50 mb-1.5">{it.label}</small>
                  <span className="inline-block font-serif text-[clamp(1.4rem,4.4vw,1.9rem)] transition-[transform,color] duration-500 group-hover:text-clay group-hover:translate-x-2 break-all">{it.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-9 font-serif italic text-[1.25rem] text-clay">Kiekvienas projektas prasideda nuo idėjos.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
