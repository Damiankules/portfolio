import Button from "@/components/ui/Button";

export const metadata = { title: "Puslapis nerastas | UOLOS.LT" };

export default function NotFound() {
  return (
    <section className="section min-h-[70svh] flex items-center">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="h1 mb-6">Šio puslapio <em>nėra.</em></h1>
        <p className="lead mb-9">Galbūt nuoroda pasikeitė. Grįžkite į pradžią arba peržiūrėkite mūsų projektus.</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/" arrow>Į pradžią</Button>
          <Button href="/projektai/" variant="outline">Projektai</Button>
        </div>
      </div>
    </section>
  );
}
