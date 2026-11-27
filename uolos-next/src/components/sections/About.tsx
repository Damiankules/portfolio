"use client";

import { useEffect, useRef } from "react";

/** "Tikrovė slypi detalėse" — texture mosaic with two looping videos and key facts. */
export default function About() {
  const mosaic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mosaic.current;
    if (!el) return;
    const vids = Array.from(el.querySelectorAll("video"));
    const play = () => vids.forEach((v) => { v.muted = true; if (v.paused) v.play().catch(() => {}); });
    const stop = () => vids.forEach((v) => v.pause());
    if (!("IntersectionObserver" in window)) return play();
    const pre = new IntersectionObserver(([e]) => { if (e.isIntersecting) vids.forEach((v) => { v.preload = "auto"; }); }, { rootMargin: "900px 0px" });
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? play() : stop()), { rootMargin: "150px 0px" });
    pre.observe(el); io.observe(el);
    const kick = () => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) play(); };
    addEventListener("touchstart", kick, { passive: true });
    return () => { pre.disconnect(); io.disconnect(); removeEventListener("touchstart", kick); };
  }, []);

  const tiles = [
    { kind: "img", src: "/images/textures/akmeniskumas.webp", label: "Paviršiaus struktūra", tall: true },
    { kind: "video", src: "/images/textures/sviesa.mp4", poster: "/images/textures/sviesa.webp", label: "Šoninė šviesa", tall: true },
    { kind: "video", src: "/images/textures/hero.mp4", poster: "/images/textures/hero.webp", label: "Reljefo gylis", tall: true },
    { kind: "img", src: "/images/textures/detale-sviesi.webp", label: "Sluoksniai" },
    { kind: "img", src: "/images/textures/detale-tamsi.webp", label: "Faktūra" },
  ] as const;

  return (
    <section className="section" id="detales">
      <div className="wrap">
        <div className="head reveal">
          <div>
            <p className="eyebrow">Meistriškumas ir detalės</p>
            <h2 className="h2 split">Tikrovė slypi <em>detalėse.</em></h2>
          </div>
          <div>
            <p className="lead">Natūralus akmuo išsiskiria savo unikaliomis formomis, sluoksniais, faktūromis ir atspalviais.</p>
            <p className="lead">Savo darbuose siekiame perteikti šį natūralų charakterį, ypatingą dėmesį skirdami reljefo gyliui, paviršiaus struktūrai ir spalvų dermėms.</p>
          </div>
        </div>
        <div ref={mosaic} className="mosaic reveal">
          {tiles.map((t) => (
            <figure key={t.src} className={`tile ${"tall" in t && t.tall ? "tall" : ""}`}>
              {t.kind === "img" ? (
                <img src={t.src} alt={t.label} loading="lazy" decoding="async" />
              ) : (
                <video src={t.src} poster={t.poster} muted loop playsInline preload="metadata" aria-label={t.label} />
              )}
              <figcaption>{t.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="grid grid-cols-3 mt-[clamp(48px,7vw,72px)] border-t border-[var(--line-light)] reveal">
          {[["5–40 cm", "reljefo gylis"], ["100%", "rankų darbas"], ["1 / 1", "kiekvienas — vienetinis"]].map(([v, l], i) => (
            <div key={l} className={`pt-7 pr-3 ${i ? "pl-4 border-l border-[var(--line-light)]" : ""}`}>
              <b className="block font-serif font-normal text-[clamp(1.6rem,5vw,3.2rem)] leading-tight text-clay-deep">{v}</b>
              <span className="text-[.82rem] text-stone">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
