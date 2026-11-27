export type ProjectKind = "realizuotas" | "vizualizacija";

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  /** CSS object-position for cropped thumbnails */
  position?: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: ProjectKind;
  room: string;
  summary: string;
  description: string[];
  cover: Photo;
  hoverCover?: Photo;
  gallery: Photo[];
  beforeAfter?: { before: Photo; after: Photo };
  facts?: { label: string; value: string }[];
  service: string;
}

export interface Service {
  slug: string;
  title: string;
  short: string;
  intro: string;
  body: string[];
  points: string[];
  image: Photo;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface PageInfo {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
}

export interface ProcessStep {
  title: string;
  text: string;
}
