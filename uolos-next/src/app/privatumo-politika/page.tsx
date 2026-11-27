import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privatumo politika",
  description: "Kaip UOLOS.LT tvarko per svetainę pateiktus asmens duomenis.",
  path: "/privatumo-politika/",
});

// NOTE: generic template — the client should add the legal entity name /
// company code and confirm the retention period before launch.
export default function PrivacyPage() {
  return (
    <section className="pt-[clamp(64px,10vw,120px)] pb-[clamp(88px,12vw,150px)]">
      <div className="wrap max-w-[820px]">
        <p className="eyebrow">Dokumentai</p>
        <h1 className="h1 mb-10">Privatumo politika</h1>
        <div className="prose">
          <p>Ši privatumo politika paaiškina, kaip {site.name} (toliau — „mes“) tvarko asmens duomenis, kuriuos pateikiate naudodamiesi svetaine {site.url.replace(/^https?:\/\//, "")}.</p>

          <h2>Kokius duomenis renkame</h2>
          <ul>
            <li>Užklausos formoje pateiktus duomenis: vardą, el. pašto adresą, telefono numerį, projekto aprašymą ir, jei pridedate, interjero nuotrauką ar projekto failą.</li>
            <li>Duomenis, kuriuos pateikiate susisiekę telefonu ar el. paštu.</li>
          </ul>

          <h2>Kam naudojame duomenis</h2>
          <p>Duomenis naudojame tik tam, kad atsakytume į jūsų užklausą, parengtume pasiūlymą ir susisiektume dėl projekto. Duomenų tvarkymo pagrindas — jūsų sutikimas ir veiksmai prieš sudarant sutartį (BDAR 6 str. 1 d. a ir b punktai).</p>

          <h2>Kas gali matyti duomenis</h2>
          <p>Svetainė talpinama „Netlify, Inc.“ serveriuose, o užklausų forma siunčiama el. paštu per „FormSubmit“ (formsubmit.co) paslaugą. Duomenų neparduodame ir neperduodame tretiesiems asmenims rinkodaros tikslais.</p>

          <h2>Kiek laiko saugome</h2>
          <p>Duomenis saugome tik tiek, kiek reikia atsakyti į užklausą ir vykdyti projektą, arba tiek, kiek reikalauja teisės aktai.</p>

          <h2>Jūsų teisės</h2>
          <p>Turite teisę susipažinti su savo duomenimis, juos ištaisyti, ištrinti, apriboti jų tvarkymą ar atšaukti sutikimą. Taip pat galite pateikti skundą Valstybinei duomenų apsaugos inspekcijai (vdai.lrv.lt).</p>

          <h2>Slapukai</h2>
          <p>Svetainė nenaudoja reklaminių ar analitinių slapukų.</p>

          <h2>Kontaktai</h2>
          <p>Dėl duomenų tvarkymo kreipkitės el. paštu <a href={`mailto:${site.email}`}>{site.email}</a> arba telefonu <a href={site.phoneHref}>{site.phone}</a>.</p>
        </div>
      </div>
    </section>
  );
}
