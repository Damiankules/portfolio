"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide scroll animations: fades in every `.reveal` element when it
 * enters the viewport and splits `.split` headings into words that rise in.
 * Re-runs after each client-side navigation.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.remove("no-js");

    document.querySelectorAll<HTMLElement>(".split:not([data-split])").forEach((el) => {
      el.dataset.split = "1";
      const walk = (node: Node) =>
        Array.from(node.childNodes).forEach((n) => {
          if (n.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment();
            (n.textContent || "").split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(part));
              const w = document.createElement("span");
              w.className = "w";
              const i = document.createElement("span");
              i.textContent = part;
              w.appendChild(i);
              frag.appendChild(w);
            });
            n.parentNode?.replaceChild(frag, n);
          } else if (n.nodeType === Node.ELEMENT_NODE && (n as Element).tagName !== "BR") walk(n);
        });
      walk(el);
      el.querySelectorAll<HTMLElement>(".w > span").forEach((s, i) => (s.style.transitionDelay = `${i * 60}ms`));
    });

    const targets = document.querySelectorAll<HTMLElement>(".reveal:not(.in), .split:not(.in)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          e.target.dispatchEvent(new CustomEvent("reveal"));
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
