import type { NavItem } from "@/types";

export const site = {
  name: "UOLOS.LT",
  shortName: "uolos",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://uolos.lt").replace(/\/$/, ""),
  locale: "lt_LT",
  title: "Dekoratyviniai uolų reljefai, kuriami rankomis",
  description:
    "UOLOS.LT — autorinė studija, kurianti individualius dekoratyvinius uolų reljefus ir akmens kompozicijas išskirtiniams interjerams. Rankų darbas, 5–40 cm reljefo gylis.",
  phone: "+370 647 01728",
  phoneHref: "tel:+37064701728",
  email: "komfortas@me.com",
  instagram: "https://www.instagram.com/uolos.lt/",
  instagramHandle: "@uolos.lt",
  ogImage: "/images/og.jpg",
} as const;

export const nav: NavItem[] = [
  { href: "/projektai/", label: "Projektai" },
  { href: "/paslaugos/", label: "Paslaugos" },
  { href: "/architektams/", label: "Architektams" },
  { href: "/apie-mus/", label: "Apie mus" },
  { href: "/kontaktai/", label: "Kontaktai" },
];
