import Link from "next/link";
import { site, nav } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="on-dark pt-20 pb-10 text-[.9rem]">
      <div className="wrap grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="brand !text-cream mb-5">
            <img src="/logo.svg" alt="" width={28} height={30} className="w-[28px] h-auto invert brightness-150" />
            <span>uolos<span className="!text-cream/45">.lt</span></span>
          </Link>
          <p className="text-cream/55 max-w-[34ch]">Individualūs dekoratyviniai uolų reljefai ir akmens kompozicijos, kuriamos rankomis.</p>
        </div>
        <div>
          <p className="eyebrow !mb-4">Puslapiai</p>
          <ul className="grid gap-2 text-cream/70">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-cream">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow !mb-4">Paslaugos</p>
          <ul className="grid gap-2 text-cream/70">
            {services.map((s) => <li key={s.slug}><Link href={`/paslaugos/${s.slug}/`} className="hover:text-cream">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow !mb-4">Kontaktai</p>
          <ul className="grid gap-2 text-cream/70">
            <li><a href={site.phoneHref} className="hover:text-cream">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-cream">{site.email}</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener" className="hover:text-cream">Instagram {site.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-16 pt-8 border-t border-[var(--line-dark)] flex flex-wrap justify-between gap-4 text-cream/45">
        <span>© {new Date().getFullYear()} {site.name} — dekoratyviniai uolų reljefai</span>
        <Link href="/privatumo-politika/" className="hover:text-cream">Privatumo politika</Link>
      </div>
    </footer>
  );
}
