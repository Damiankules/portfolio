import { faq } from "@/data/faq";

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="section on-sand" id="duk">
      <div className="wrap grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 items-start">
        <div className="reveal lg:sticky lg:top-[120px]">
          <p className="eyebrow">Dažni klausimai</p>
          <h2 className="h2 split">Prieš <em>pradedant.</em></h2>
        </div>
        <div className="faq reveal border-t border-[var(--line-light)]">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
