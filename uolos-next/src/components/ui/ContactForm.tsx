"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { MAX_FILE_MB, validateContact, type ContactErrors } from "@/lib/validation";

/**
 * Enquiry form handled by Netlify Forms.
 * Netlify detects the form from /public/contact-form.html at deploy time;
 * this component posts the same fields there with fetch (multipart, so the
 * attached photo is included).
 */
export default function ContactForm({ topic = "Privatus projektas" }: { topic?: string }) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fileName, setFileName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("failas");
    const values = {
      name: String(data.get("vardas") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("telefonas") || ""),
      message: String(data.get("aprasymas") || ""),
      file: file instanceof File && file.size > 0 ? file : null,
    };
    const errs = validateContact(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(".invalid input, .invalid textarea")?.focus();
      return;
    }
    if (!values.file) data.delete("failas");
    setStatus("sending");
    try {
      const res = await fetch("/contact-form.html", { method: "POST", body: data });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-ink-2 p-8 md:p-12 text-cream" role="status">
        <p className="eyebrow !text-clay">Užklausa išsiųsta</p>
        <h3 className="h3 mb-4">Ačiū! Jūsų užklausa gauta.</h3>
        <p className="text-cream/70">Susisieksime artimiausiu metu. Jei skubu — skambinkite <a className="underline" href={site.phoneHref}>{site.phone}</a>.</p>
      </div>
    );
  }

  const field = (key: keyof ContactErrors) => `field ${errors[key] ? "invalid" : ""}`;

  return (
    <form
      name="uzklausa"
      method="POST"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      noValidate
      className="bg-ink-2 p-6 md:p-12 grid gap-6 text-cream"
    >
      <input type="hidden" name="form-name" value="uzklausa" />
      <input type="hidden" name="tema" value={topic} />
      <p className="hidden"><label>Nepildykite: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

      {status === "error" && (
        <p className="border-l-2 border-clay bg-clay/15 px-4 py-3" role="alert">
          Nepavyko išsiųsti. Bandykite dar kartą arba parašykite: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className={field("name")}>
          <label htmlFor="f-name">Vardas *</label>
          <input id="f-name" name="vardas" autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="err">{errors.name}</span>}
        </div>
        <div className={field("phone")}>
          <label htmlFor="f-phone">Telefono numeris</label>
          <input id="f-phone" name="telefonas" type="tel" autoComplete="tel" placeholder="+370" aria-invalid={!!errors.phone} />
          {errors.phone && <span className="err">{errors.phone}</span>}
        </div>
      </div>
      <div className={field("email")}>
        <label htmlFor="f-email">El. paštas *</label>
        <input id="f-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>
      <div className={field("message")}>
        <label htmlFor="f-desc">Projekto aprašymas *</label>
        <textarea id="f-desc" name="aprasymas" placeholder="Kokia erdvė, apytikslis sienos dydis, pageidaujamas stilius…" aria-invalid={!!errors.message} />
        {errors.message && <span className="err">{errors.message}</span>}
      </div>
      <div className={field("file")}>
        <label className="file !text-cream !normal-case !tracking-normal !text-base">
          <input type="file" name="failas" accept="image/*,.pdf" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] flex-none stroke-clay fill-none" strokeWidth={1.5} aria-hidden="true"><path d="M21 12.5 12.6 21a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6L15 8.2" /></svg>
          <span>
            <b className="block font-medium text-[.92rem] break-all">{fileName || "Pridėti interjero nuotrauką arba projektą"}</b>
            <small className="text-cream/50 text-[.8rem]">JPG, PNG arba PDF, iki {MAX_FILE_MB} MB</small>
          </span>
        </label>
        {errors.file && <span className="err">{errors.file}</span>}
      </div>
      <button type="submit" className="btn btn-light justify-self-start" disabled={status === "sending"}>
        {status === "sending" ? "Siunčiama…" : <>Siųsti užklausą <span className="arr">→</span></>}
      </button>
      <p className="text-[.8rem] text-cream/45">
        Siųsdami sutinkate, kad jūsų duomenys būtų naudojami atsakyti į užklausą. <a href="/privatumo-politika/" className="underline">Privatumo politika</a>
      </p>
    </form>
  );
}
