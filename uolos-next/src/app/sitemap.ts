import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/projektai/", "/paslaugos/", "/architektams/", "/apie-mus/", "/kontaktai/", "/privatumo-politika/"];
  return [
    ...pages.map((p) => ({ url: site.url + p, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...projects.map((p) => ({ url: `${site.url}/projektai/${p.slug}/`, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...services.map((s) => ({ url: `${site.url}/paslaugos/${s.slug}/`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
