"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/hero/miegamasis-viz.webp", alt: "Vizualizacija: uolos reljefas miegamajame su šviestuvais", tag: "Vizualizacija · Miegamasis", pos: "center 35%", fx: "-1.5%", fy: "1%" },
  { src: "/images/hero/miegamasis-lempos.webp", alt: "Įgyvendintas projektas: šviestuvų šviesa ant uolos reljefo", tag: "Įgyvendintas projektas · Miegamasis", pos: "center 30%", fx: "1.5%", fy: "-1%" },
  { src: "/images/hero/zidinys-viz.webp", alt: "Vizualizacija: šviesi uola prie židinio", tag: "Vizualizacija · Svetainė su židiniu", pos: "center 45%", fx: "-1%", fy: "-1.5%" },
  { src: "/images/hero/akmeniskumas.webp", alt: "Uolos paviršiaus faktūra iš arti", tag: "Detalė · Paviršiaus faktūra", pos: "center 50%", fx: "1%", fy: "1.5%" },
];
const DUR = 6500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [intro, setIntro] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((n: number) => {
    setI((n + slides.length) % slides.length);
    setCycle((c) => c + 1);
  }, []);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => go(i + 1), DUR);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [i, cycle, go]);

  useEffect(() => { const t = setTimeout(() => setIntro(true), 120); return () => clearTimeout(t); }, []);

  return (
    <section className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:min-h-[calc(100svh-78px)] bg-cream" aria-label="Įvadas">
      <div
        className="hero-media lg:order-2"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        }}
      >
        {slides.map((s, k) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={k === i ? "on" : ""}
            fetchPriority={k === 0 ? "high" : undefined}
            loading={k === 0 ? "eager" : "lazy"}
            style={{ objectPosition: s.pos, ["--fx" as string]: s.fx, ["--fy" as string]: s.fy }}
          />
        ))}
        <span className="hero-tag" key={`t${i}`}>{slides[i].tag}</span>
        <div className="hero-dots" aria-label="Nuotraukos">
          {slides.map((s, k) => (
            <button
              key={`${k}-${k === i ? cycle : 0}`}
              type="button"
              aria-label={`Nuotrauka ${k + 1}`}
              className={k === i ? "on" : k < i ? "done" : ""}
              style={{ ["--dur" as string]: `${DUR}ms` }}
              onClick={() => go(k)}
            />
          ))}
        </div>
      </div>
      <div className="lg:order-1 self-center px-[var(--gutter)] pt-11 pb-16 lg:py-14 lg:pr-14 lg:pl-[var(--edge)]">
        <p className={`eyebrow fade-up ${intro ? "in" : ""}`}>Dekoratyviniai uolų reljefai</p>
        <h1 className="h1 split mb-6">Gamta, atgimstanti <em>jūsų erdvėje.</em></h1>
        <p className={`fade-up font-serif text-[clamp(1.2rem,3.4vw,1.5rem)] leading-snug mb-4 max-w-[34ch] ${intro ? "in" : ""}`} style={{ transitionDelay: ".45s" }}>
          Unikalūs uolų reljefai ir dekoratyvinės akmens kompozicijos, kuriamos rankomis.
        </p>
        <p className={`fade-up lead !text-base mb-9 ${intro ? "in" : ""}`} style={{ transitionDelay: ".55s" }}>
          Kuriame išskirtinius, natūraliai atrodančius uolų reljefus, įkvėptus gamtos formų, tekstūrų ir akmens struktūros. Kiekvienas projektas kuriamas individualiai, atsižvelgiant į interjero architektūrą ir kliento viziją.
        </p>
        <div className={`fade-up flex flex-wrap gap-3 ${intro ? "in" : ""}`} style={{ transitionDelay: ".7s" }}>
          <Link href="/projektai/" className="btn btn-dark lg:!px-6">Peržiūrėti projektus <span className="arr">→</span></Link>
          <Link href="/kontaktai/" className="btn btn-outline lg:!px-6">Aptarkime jūsų idėją</Link>
        </div>
        <div className={`fade-up flex flex-wrap gap-x-6 gap-y-2.5 mt-11 pt-6 border-t border-[var(--line-light)] text-[.7rem] tracking-[.2em] uppercase text-stone ${intro ? "in" : ""}`} style={{ transitionDelay: ".85s" }}>
          <span>Rankų darbas</span><span>Individualūs projektai</span><span>5–40 cm reljefas</span>
        </div>
      </div>
    </section>
  );
}
