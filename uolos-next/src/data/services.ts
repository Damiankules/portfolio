import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "uolu-reljefai-sienoms",
    title: "Uolų reljefai sienoms",
    short: "Akcentinės sienos miegamajame, svetainėje ar laiptinėje.",
    intro:
      "Rankomis formuojami uolų reljefai, kurie paprastą sieną paverčia pagrindiniu interjero akcentu.",
    body: [
      "Reljefas kuriamas tiesiai ant esamos sienos — formos, plyšiai ir sluoksniai išgaunami rankomis, todėl kiekvienas paviršius yra vienetinis.",
      "Reljefo gylis parenkamas pagal erdvę ir pageidaujamą efektą — nuo subtilios faktūros iki monumentalių formų.",
    ],
    points: ["Reljefo gylis 5–40 cm", "Spalva ir faktūra pagal interjerą", "Derinama su apšvietimu"],
    image: { src: "/images/services/sienos.webp", alt: "Uolos reljefas ant sienos su šviestuvais", caption: "" },
  },
  {
    slug: "reljefai-prie-zidinio",
    title: "Reljefai prie židinio",
    short: "Akmens kompozicijos, apgaubiančios židinį.",
    intro:
      "Uolų reljefas aplink židinį sukuria natūralią, šiltą ir monumentalią erdvės nuotaiką.",
    body: [
      "Kompozicija pritaikoma prie židinio formos ir erdvės proporcijų. Ugnies šviesa ypač išryškina reljefo gylį.",
      "Galima rinktis tamsius grafito ar šviesius smėlio atspalvius.",
    ],
    points: ["Pritaikoma prie esamo židinio", "Tamsūs ir šviesūs atspalviai", "Individuali kompozicija"],
    image: { src: "/images/services/zidiniai.webp", alt: "Tamsus uolos reljefas aplink židinį", caption: "" },
  },
  {
    slug: "individualios-akmens-kompozicijos",
    title: "Individualios akmens kompozicijos",
    short: "Nestandartiniai sprendimai pagal jūsų ar architekto idėją.",
    intro:
      "Kai reikia išskirtinio sprendimo — kuriame akmens kompoziciją pagal jūsų viziją arba architekto projektą.",
    body: [
      "Kiekvienas projektas prasideda nuo idėjos: aptariame erdvę, proporcijas ir norimą charakterį, tada formuojame reljefą rankomis.",
      "Bendradarbiaujame su architektais ir interjero dizaineriais.",
    ],
    points: ["Pagal projektą ar eskizą", "Bendradarbiavimas su architektais", "Vienetinis rezultatas"],
    image: { src: "/images/services/kompozicijos.webp", alt: "Akmens reljefo sluoksniai iš arti", caption: "" },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
