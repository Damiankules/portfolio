"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/types";

export interface BeforeAfterPair {
  label: string;
  before: Photo;
  after: Photo;
}

/** Drag slider comparing a wall before and after; optional tabs for several pairs. */
export default function BeforeAfter({ pairs }: { pairs: BeforeAfterPair[] }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const [swapping, setSwapping] = useState(false);
  const touched = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  // One-time hint animation when the slider scrolls into view.
  useEffect(() => {
    const el = box.current;
    if (!el || !("IntersectionObserver" in window)) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const keys = [50, 76, 26, 50], seg = 900, t0 = performance.now() + 400;
      const step = (t: number) => {
        if (touched.current) return;
        const k = Math.max(0, (t - t0) / seg), i = Math.floor(k);
        if (i >= keys.length - 1) return setPos(50);
        const f = k - i, ease = f < 0.5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
        setPos(keys[i] + (keys[i + 1] - keys[i]) * ease);
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const choose = (i: number) => {
    if (i === active) return;
    setSwapping(true);
    setTimeout(() => { setActive(i); setPos(50); setSwapping(false); }, 300);
  };

  const pair = pairs[active];
  return (
    <div>
      {pairs.length > 1 && (
        <div className="flex gap-2.5 mb-5" role="tablist" aria-label="Pasirinkite projektą">
          {pairs.map((p, i) => (
            <button key={p.label} role="tab" aria-selected={i === active} className="ba-tab" onClick={() => choose(i)}>{p.label}</button>
          ))}
        </div>
      )}
      <div ref={box} className={`ba ${swapping ? "swapping" : ""}`} style={{ ["--pos" as string]: `${pos}%` }}>
        <img src={pair.before.src} alt={pair.before.alt} loading="lazy" decoding="async" style={{ objectPosition: pair.before.position }} />
        <div className="ba-after">
          <img src={pair.after.src} alt={pair.after.alt} loading="lazy" decoding="async" style={{ objectPosition: pair.after.position }} />
        </div>
        <div className="ba-line"><div className="ba-knob" aria-hidden="true">‹ ›</div></div>
        <span className="ba-label l">Prieš</span>
        <span className="ba-label r">Po</span>
        <input
          type="range" min={0} max={100} value={pos}
          aria-label="Palyginti sieną prieš ir po"
          onChange={(e) => { touched.current = true; setPos(Number(e.target.value)); }}
        />
      </div>
    </div>
  );
}
