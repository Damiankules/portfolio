import PageIntro from "@/components/sections/PageIntro";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apie mus",
  description: "UOLOS — individualių dekoratyvinių uolų reljefų ir akmens kompozicijų kūrimas. Kiekvienas projektas — atskiras kūrybinis procesas.",
  path: "/apie-mus/",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Apie mus" title={<>Meistriškumas, kuris atgimsta <em>formuose.</em></>} />
      <section className="pb-[clamp(64px,9vw,110px)]">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="reveal">
            <p className="font-serif text-[clamp(1.4rem,3.4vw,2rem)] leading-snug">UOLOS — tai individualių dekoratyvinių uolų reljefų ir akmens kompozicijų kūrimas.</p>
          </div>
          <div className="reveal">
            <p className="lead">Kiekvieną projektą vertiname kaip atskirą kūrybinį procesą, kuriame svarbi ne tik galutinė išvaizda, bet ir kiekviena detalė.</p>
            <p className="lead">Mūsų tikslas — kurti išskirtinius, natūraliai atrodančius paviršius, suteikiančius interjerui savitą charakterį.</p>
          </div>
        </div>
      </section>
      <About />
      <CTA />
    </>
  );
}
