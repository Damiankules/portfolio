const steps = [
  { t: "Idėja", d: "Aptariame kliento viziją, erdvę ir būsimos kompozicijos koncepciją." },
  { t: "Projektavimas", d: "Įvertiname interjero architektūrą, proporcijas ir individualius projekto poreikius." },
  { t: "Formavimas", d: "Rankomis kuriame reljefo formas, struktūrą ir natūralų paviršiaus charakterį." },
  { t: "Apdaila", d: "Išgauname norimą tekstūrą, spalvų dermę ir vizualinį gylį." },
  { t: "Įgyvendinimas", d: "Paruošiame galutinį rezultatą pagal suderintą projekto koncepciją." },
];

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
            <div key={s.t} className="step reveal" style={{ ["--d" as string]: `${i * 120}ms` }}>
              <span className="step-num">0{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
