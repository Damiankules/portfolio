import PageIntro from "@/components/sections/PageIntro";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Paslaugos",
  description: "Dekoratyviniai uolų reljefai sienoms, reljefai prie židinio ir individualios akmens kompozicijos. Rankų darbas, 5–40 cm reljefo gylis.",
  path: "/paslaugos/",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Paslaugos" title={<>Ką <em>kuriame.</em></>} text="Nuo akcentinės sienos iki individualios akmens kompozicijos — kiekvienas sprendimas pritaikomas konkrečiai erdvei, jos architektūrai ir estetiniam sumanymui." />
      <div className="-mt-[clamp(88px,12vw,150px)]"><Services showHead={false} /></div>
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
