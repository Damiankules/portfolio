import { processSteps as steps } from "@/data/site";
export default function Process() {
  return (
    <section className="section on-dark" id="procesas">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">Kūrimo procesas</p>
          <h2 className="h2 split">Nuo idėjos iki <em>išskirtinio rezultato.</em></h2>
        </div>
        <div className="steps grid mt-[clamp(48px,7vw,80px)]">
          {steps.map((s, i) => (
            <div key={s.title} className="step reveal" style={{ ["--d" as string]: `${i * 120}ms` }}>
              <span className="step-num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
