interface Props {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  tone?: "cream" | "sand";
}

/** Large title block used at the top of inner pages. */
export default function PageIntro({ eyebrow, title, text, tone = "cream" }: Props) {
  return (
    <section className={`pt-[clamp(64px,10vw,120px)] pb-[clamp(40px,6vw,72px)] ${tone === "sand" ? "on-sand" : ""}`}>
      <div className="wrap head !mb-0">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 split">{title}</h1>
        </div>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  );
}
