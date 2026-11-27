export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  file: File | null;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const MAX_FILE_MB = 5;
const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"];

export function validateContact(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (v.name.trim().length < 2) e.name = "Įrašykite vardą.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Įrašykite teisingą el. pašto adresą.";
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = "Patikrinkite telefono numerį.";
  if (v.message.trim().length < 10) e.message = "Trumpai aprašykite projektą (bent 10 simbolių).";
  if (v.file) {
    if (v.file.size > MAX_FILE_MB * 1024 * 1024) e.file = `Failas per didelis — iki ${MAX_FILE_MB} MB.`;
    else if (v.file.type && !ACCEPTED.includes(v.file.type)) e.file = "Galima pridėti JPG, PNG, WEBP, HEIC arba PDF.";
  }
  return e;
}
