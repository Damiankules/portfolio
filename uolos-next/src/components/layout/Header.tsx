"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import Navigation from "./Navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [fab, setFab] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      setScrolled(y > 10);
      setHidden(y > last && y > 500);
      last = y;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      const footer = document.querySelector("footer");
      setFab(y > innerHeight * 0.7 && (!footer || footer.getBoundingClientRect().top > innerHeight));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <div ref={bar} className="progress" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${hidden && !open ? "hide" : ""}`}>
        <div className="wrap flex items-center justify-between h-[78px] gap-4">
          <Link href="/" className="brand" aria-label="UOLOS.LT — pradžia">
            <img src="/logo.svg" alt="" width={34} height={37} className="w-[34px] h-auto" />
            <span>uolos<span className="tld">.lt</span></span>
          </Link>
          <Navigation className="hidden lg:flex gap-8" />
          <div className="flex items-center gap-3">
            <Link href="/kontaktai/" className="btn btn-dark !px-5 !py-3 max-[420px]:!px-4">Užklausa</Link>
            <button
              type="button"
              className="menu-btn lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Uždaryti meniu" : "Atidaryti meniu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>
      <div id="mobile-nav" className={`mobile-nav lg:hidden ${open ? "open" : ""}`} aria-hidden={!open}>
        <Navigation className="flex flex-col" linkClassName="m-link" onNavigate={() => setOpen(false)} />
        <div className="mt-8 grid gap-2 text-stone">
          <a href={site.phoneHref} className="text-ink text-xl">{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.instagram} target="_blank" rel="noopener">Instagram {site.instagramHandle}</a>
        </div>
      </div>
      <a href={site.phoneHref} className={`fab ${fab ? "show" : ""}`} aria-label="Skambinti">
        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-none stroke-current" strokeWidth={1.6} aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
        Skambinti
      </a>
    </>
  );
}
