"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/types";

interface Props {
  photos: Photo[];
  title: string;
  tag: string;
  index: number;
  onClose: () => void;
}

export default function Lightbox({ photos, title, tag, index, onClose }: Props) {
  const [i, setI] = useState(index);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const n = photos.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    document.body.classList.add("lb-lock");
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      document.body.classList.remove("lb-lock");
      prev?.focus({ preventScroll: true });
    };
  }, [go, onClose]);

  const p = photos[i];
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`${title} — galerija`}>
      <div className="lb-backdrop" onClick={onClose} />
      <figure className="lb-fig">
        <div
          className="lb-media"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          }}
        >
          <img key={p.src} src={p.src} alt={p.alt} decoding="async" />
        </div>
        <figcaption className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 text-cream">
          <div>
            <p className="tag !text-clay">{tag} · {p.caption}</p>
            <h3 className="h3">
              {title}
              {n > 1 && <span className="ml-3 font-sans text-[.74rem] tracking-[.2em] text-cream/50">{i + 1} / {n}</span>}
            </h3>
          </div>
          <a href="/kontaktai/" className="btn btn-light">Aptarkime panašų projektą <span className="arr">→</span></a>
        </figcaption>
      </figure>
      <button ref={closeRef} className="lb-btn top-3 right-[var(--gutter)]" onClick={onClose} aria-label="Uždaryti">✕</button>
      {n > 1 && (
        <>
          <button className="lb-btn left-3 md:left-6 top-1/2 -mt-[50px]" onClick={() => go(-1)} aria-label="Ankstesnė nuotrauka">←</button>
          <button className="lb-btn right-3 md:right-6 top-1/2 -mt-[50px]" onClick={() => go(1)} aria-label="Kita nuotrauka">→</button>
        </>
      )}
    </div>
  );
}
