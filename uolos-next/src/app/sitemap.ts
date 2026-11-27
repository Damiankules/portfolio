import type { MetadataRoute } from "next";
import { pages, site } from "@/data/site";
import { realProjects, visualizations } from "@/data/projects";
import { services } from "@/data/services";

export const dynamic = "force-static";

const abs = (path: string) => site.url + path;

/**
 * Order: main pages → services → real projects → visualizations → legal.
 * Each entry lists its images so they can appear in image search.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const main = pages.filter((p) => p.path !== "/privatumo-politika/");
  const legal = pages.filter((p) => p.path === "/privatumo-politika/");

  return [
    ...main.map((p) => ({
      url: abs(p.path),
      lastModified,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      ...(p.path === "/" ? { images: [abs("/images/hero/miegamasis-lempos.webp"), abs("/images/projects/zidinys-po.webp")] } : {}),
    })),
    ...services.map((s) => ({
      url: abs(`/paslaugos/${s.slug}/`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [abs(s.image.src)],
    })),
    ...realProjects.map((p) => ({
      url: abs(`/projektai/${p.slug}/`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: p.gallery.map((g) => abs(g.src)),
    })),
    ...visualizations.map((p) => ({
      url: abs(`/projektai/${p.slug}/`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
      images: p.gallery.map((g) => abs(g.src)),
    })),
    ...legal.map((p) => ({ url: abs(p.path), lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
  ];
}
