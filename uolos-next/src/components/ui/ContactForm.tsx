"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { MAX_FILE_MB, validateContact, type ContactErrors } from "@/lib/validation";

/**
 * Enquiry form sent by FormSubmit (formsubmit.co) to the e-mail in site.ts.
 * Fields are checked in the browser first; then the form is submitted
 * normally (multipart, so the attached photo is included) and FormSubmit
 * redirects back here with ?issiusta=1.
 * First submission: FormSubmit e-mails an "Activate Form" link to that address.
 */
export default function ContactForm({ topic = "Privatus projektas" }: { topic?: string }) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    const here = location.href.split("#")[0].split("?")[0];
    setNext(`${here}?issiusta=1#uzklausa`);
    if (/[?&]issiusta=1/.test(location.search)) {
      setSent(true);
      setTimeout(() => document.getElementById("uzklausa")?.scrollIntoView(), 200);
    }
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
    const file = data.get("Failas");
    const errs = validateContact({
      name: String(data.get("Vardas") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("Telefonas") || ""),
      message: String(data.get("Projekto aprašymas") || ""),
      file: file instanceof File && file.size > 0 ? file : null,
    });
    setErrors(errs);
    if (Object.keys(errs).length) {
      e.preventDefault();
      setTimeout(() => e.currentTarget?.querySelector<HTMLElement>(".invalid input, .invalid textarea")?.focus(), 0);
      return;
    }
    setSending(true); // let the browser submit the form to FormSubmit
  }

  if (sent) {
    return (
      <div id="uzklausa" className="bg-ink-2 p-8 md:p-12 text-cream" role="status">
        <p className="eyebrow !text-clay">Užklausa išsiųsta</p>
        <h3 className="h3 mb-4">Ačiū! Jūsų užklausa gauta.</h3>
        <p className="text-cream/70">Susisieksime artimiausiu metu. Jei skubu — skambinkite <a className="underline" href={site.phoneHref}>{site.phone}</a>.</p>
      </div>
    );
  }

  const field = (key: keyof ContactErrors) => `field ${errors[key] ? "invalid" : ""}`;

  return (
    <form
      id="uzklausa"
      className="form bg-ink-2 p-6 md:p-12 grid gap-6 text-cream scroll-mt-24"
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="_subject" value={`Nauja užklausa iš uolos.lt — ${topic}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={next} />
      <input type="hidden" name="Tema" value={topic} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className={field("name")}>
          <label htmlFor="f-name">Vardas *</label>
          <input id="f-name" name="Vardas" autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="err">{errors.name}</span>}
        </div>
        <div className={field("phone")}>
          <label htmlFor="f-phone">Telefono numeris</label>
          <input id="f-phone" name="Telefonas" type="tel" autoComplete="tel" placeholder="+370" aria-invalid={!!errors.phone} />
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
        <textarea id="f-desc" name="Projekto aprašymas" placeholder="Kokia erdvė, apytikslis sienos dydis, pageidaujamas stilius…" aria-invalid={!!errors.message} />
        {errors.message && <span className="err">{errors.message}</span>}
      </div>
      <div className={field("file")}>
        <label className="file !text-cream !normal-case !tracking-normal !text-base">
          <input type="file" name="Failas" accept="image/*,.pdf" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
          <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] flex-none stroke-clay fill-none" strokeWidth={1.5} aria-hidden="true"><path d="M21 12.5 12.6 21a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6L15 8.2" /></svg>
          <span>
            <b className="block font-medium text-[.92rem] break-all">{fileName || "Pridėti interjero nuotrauką arba projektą"}</b>
            <small className="text-cream/50 text-[.8rem]">JPG, PNG arba PDF, iki {MAX_FILE_MB} MB</small>
          </span>
        </label>
        {errors.file && <span className="err">{errors.file}</span>}
      </div>
      <button type="submit" className="btn btn-light justify-self-start" disabled={sending}>
        {sending ? "Siunčiama…" : <>Siųsti užklausą <span className="arr">→</span></>}
      </button>
      <p className="text-[.8rem] text-cream/45">
        Siųsdami sutinkate, kad jūsų duomenys būtų naudojami atsakyti į užklausą. <a href="/privatumo-politika/" className="underline">Privatumo politika</a>
      </p>
    </form>
  );
}
