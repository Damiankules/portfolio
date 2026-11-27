import type { Project } from "@/types";

const P = "/images/projects/";

export const projects: Project[] = [
  {
    slug: "sviesaus-akmens-reljefas",
    title: "Šviesaus akmens reljefas",
    kind: "realizuotas",
    room: "Miegamasis",
    service: "uolu-reljefai-sienoms",
    summary:
      "Natūralių uolienų struktūros įkvėptas reljefas, sukurtas individualiam interjerui.",
    description: [
      "Miegamojo akcentinė siena, suformuota rankomis tiesiai objekte. Įstrižos plokštumos ir gilūs plyšiai primena natūralią uolieną.",
      "Sieniniai šviestuvai vakare išryškina reljefą — kiekvienas šešėlis pabrėžia paviršiaus gylį ir faktūrą.",
    ],
    cover: { src: P + "miegamasis-po.webp", alt: "Šviesaus akmens reljefas miegamajame", caption: "Visa siena", position: "center 50%" },
    hoverCover: { src: P + "miegamasis-lempos.webp", alt: "", caption: "", position: "center 40%" },
    gallery: [
      { src: P + "miegamasis-po.webp", alt: "Šviesaus akmens reljefas miegamajame", caption: "Visa siena" },
      { src: P + "miegamasis-lempos.webp", alt: "Šviestuvų šviesa ant uolos reljefo", caption: "Šviestuvų šviesa ant reljefo" },
      { src: P + "miegamasis-pries.webp", alt: "Ta pati siena prieš darbus", caption: "Prieš darbus" },
    ],
    beforeAfter: {
      before: { src: P + "miegamasis-pries.webp", alt: "Miegamojo siena prieš darbus", caption: "Prieš" },
      after: { src: P + "miegamasis-lempos.webp", alt: "Ta pati siena po darbų — uolos reljefas", caption: "Po", position: "center 55%" },
    },
    facts: [
      { label: "Erdvė", value: "Miegamasis" },
      { label: "Atlikimas", value: "Rankų darbas objekte" },
      { label: "Tonas", value: "Šviesus akmuo" },
    ],
  },
  {
    slug: "grafito-uola-prie-zidinio",
    title: "Grafito uola prie židinio",
    kind: "realizuotas",
    room: "Svetainė su židiniu",
    service: "reljefai-prie-zidinio",
    summary:
      "Tamsaus akmens reljefas, apgaubiantis židinį. Gilios formos ir ugnies šviesa sukuria ramią, monumentalią nuotaiką.",
    description: [
      "Plytelėmis išklota siena už židinio virto tamsia, grafito spalvos uola.",
      "Ugnies šviesa nuolat keičia reljefo šešėlius, todėl siena atrodo gyva bet kuriuo paros metu.",
    ],
    cover: { src: P + "zidinys-po.webp", alt: "Tamsaus grafito spalvos uolos reljefas už židinio", caption: "Uola ir židinys", position: "center 45%" },
    hoverCover: { src: "/images/textures/hero.webp", alt: "", caption: "", position: "center 40%" },
    gallery: [
      { src: P + "zidinys-po.webp", alt: "Tamsus uolos reljefas už židinio", caption: "Uola ir židinys" },
      { src: "/images/textures/hero.webp", alt: "Reljefo gylis prie židinio", caption: "Reljefo gylis" },
      { src: P + "zidinys-pries.webp", alt: "Siena už židinio prieš darbus", caption: "Prieš darbus" },
    ],
    beforeAfter: {
      before: { src: P + "zidinys-pries.webp", alt: "Siena su plytelėmis prieš darbus", caption: "Prieš" },
      after: { src: P + "zidinys-po.webp", alt: "Ta pati siena — tamsi uola po darbų", caption: "Po", position: "center 60%" },
    },
    facts: [
      { label: "Erdvė", value: "Svetainė" },
      { label: "Atlikimas", value: "Rankų darbas objekte" },
      { label: "Tonas", value: "Grafitas" },
    ],
  },
  {
    slug: "miegamojo-uola-vizualizacija",
    title: "Miegamojo uola",
    kind: "vizualizacija",
    room: "Koncepcija",
    service: "uolu-reljefai-sienoms",
    summary: "Vizualizacija — kaip panašus reljefas galėtų atrodyti jūsų miegamajame.",
    description: [
      "Tai ne įgyvendintas objektas, o koncepcija. Ji padeda iš anksto pamatyti, kaip reljefas derės su baldais, šviesa ir spalvomis.",
    ],
    cover: { src: P + "miegamasis-viz.webp", alt: "Vizualizacija: uolos reljefas miegamajame", caption: "Koncepcija", position: "center 40%" },
    gallery: [{ src: P + "miegamasis-viz.webp", alt: "Vizualizacija: uolos reljefas miegamajame", caption: "Koncepcija" }],
  },
  {
    slug: "sviesi-uola-prie-zidinio-vizualizacija",
    title: "Šviesi uola prie židinio",
    kind: "vizualizacija",
    room: "Koncepcija",
    service: "reljefai-prie-zidinio",
    summary: "Vizualizacija — šviesaus akmens reljefas su paslėptu apšvietimu.",
    description: [
      "Tai ne įgyvendintas objektas, o koncepcija. Ji parodo, kaip šviesesnis tonas ir apšvietimas iš viršaus keičia erdvės nuotaiką.",
    ],
    cover: { src: P + "zidinys-viz.webp", alt: "Vizualizacija: šviesus uolos reljefas už židinio", caption: "Koncepcija", position: "center 50%" },
    gallery: [{ src: P + "zidinys-viz.webp", alt: "Vizualizacija: šviesus uolos reljefas už židinio", caption: "Koncepcija" }],
  },
];

export const realProjects = projects.filter((p) => p.kind === "realizuotas");
export const visualizations = projects.filter((p) => p.kind === "vizualizacija");
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
