import Button from "@/components/ui/Button";
import { site } from "@/data/site";

interface Props {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: string[];
}

export default function CTA({
  eyebrow = "Individualūs sprendimai",
  title = <>Jūsų erdvė. Jūsų vizija. <em>Mūsų meistriškumas.</em></>,
  text = [
    "Kiekvienas interjeras yra skirtingas, todėl nenaudojame vieno universalaus sprendimo visiems projektams.",
    "Kuriame individualius dekoratyvinius uolų reljefus, pritaikytus konkrečiai erdvei, jos architektūrai ir estetiniam sumanymui.",
  ],
}: Props) {
  return (
    <section className="section on-clay band">
      <div className="wrap reveal grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2 max-w-[16ch]">{title}</h2>
        </div>
        <div>
          {text.map((t) => <p key={t} className="lead">{t}</p>)}
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href="/kontaktai/" arrow>Aptarkime jūsų projektą</Button>
            <Button href={site.phoneHref} variant="ghost">Skambinti</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
