"use client";

import { useState } from "react";
import type { Photo } from "@/types";
import Lightbox from "./Lightbox";

interface Props {
  photos: Photo[];
  title: string;
  tag: string;
}

/** Project photo grid; clicking a photo opens it full screen. */
export default function Gallery({ photos, title, tag }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className={`grid gap-4 ${photos.length > 1 ? "md:grid-cols-2" : ""}`}>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`media reveal group cursor-zoom-in text-left ${i === 0 && photos.length > 2 ? "md:col-span-2 aspect-[16/11]" : "aspect-[4/5]"}`}
            aria-label={`Atidaryti nuotrauką: ${p.caption}`}
          >
            <img src={p.src} alt={p.alt} loading={i === 0 ? "eager" : "lazy"} decoding="async" className="transition-transform duration-[1400ms] group-hover:scale-[1.04]" style={{ objectPosition: p.position }} />
            <span className="absolute left-4 bottom-4 z-[1] text-[.66rem] tracking-[.22em] uppercase text-cream bg-ink/55 px-3 py-2 rounded-full">{p.caption}</span>
          </button>
        ))}
      </div>
      {open !== null && <Lightbox photos={photos} title={title} tag={tag} index={open} onClose={() => setOpen(null)} />}
    </>
  );
}
