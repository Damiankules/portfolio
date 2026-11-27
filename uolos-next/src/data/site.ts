import type { NavItem, PageInfo, ProcessStep } from "@/types";

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

/** Static pages — single source for the sitemap and llms.txt. */
export const pages: PageInfo[] = [
  { path: "/", title: "Pradžia", description: "Dekoratyviniai uolų reljefai ir akmens kompozicijos, kuriamos rankomis.", priority: 1, changeFrequency: "monthly" },
  { path: "/projektai/", title: "Projektai", description: "Įgyvendinti projektai ir vizualizacijos.", priority: 0.9, changeFrequency: "monthly" },
  { path: "/paslaugos/", title: "Paslaugos", description: "Uolų reljefai sienoms, prie židinio ir individualios akmens kompozicijos.", priority: 0.9, changeFrequency: "monthly" },
  { path: "/architektams/", title: "Architektams ir dizaineriams", description: "Bendradarbiavimas su architektais, interjero dizaineriais ir studijomis.", priority: 0.7, changeFrequency: "yearly" },
  { path: "/apie-mus/", title: "Apie mus", description: "Kas yra UOLOS ir kaip dirbame.", priority: 0.6, changeFrequency: "yearly" },
  { path: "/kontaktai/", title: "Kontaktai", description: "Telefonas, el. paštas ir užklausos forma su galimybe pridėti nuotrauką.", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privatumo-politika/", title: "Privatumo politika", description: "Kaip tvarkomi per svetainę pateikti asmens duomenys.", priority: 0.2, changeFrequency: "yearly" },
];

export const processSteps: ProcessStep[] = [
  { title: "Idėja", text: "Aptariame kliento viziją, erdvę ir būsimos kompozicijos koncepciją." },
  { title: "Projektavimas", text: "Įvertiname interjero architektūrą, proporcijas ir individualius projekto poreikius." },
  { title: "Formavimas", text: "Rankomis kuriame reljefo formas, struktūrą ir natūralų paviršiaus charakterį." },
  { title: "Apdaila", text: "Išgauname norimą tekstūrą, spalvų dermę ir vizualinį gylį." },
  { title: "Įgyvendinimas", text: "Paruošiame galutinį rezultatą pagal suderintą projekto koncepciją." },
];
