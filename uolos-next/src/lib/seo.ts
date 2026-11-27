import type { Metadata } from "next";
import { site } from "@/data/site";

interface SeoInput {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

/** Builds per-page metadata with canonical URL and Open Graph tags. */
export function buildMetadata({ title, description, path = "/", image }: SeoInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.title} | ${site.name}`;
  const desc = description ?? site.description;
  const url = site.url + path;
  const img = image ?? site.ogImage;
  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      url,
      images: [{ url: img }],
    },
  };
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.replace(/\s/g, ""),
    email: site.email,
    image: site.url + site.ogImage,
    sameAs: [site.instagram],
  };
}
