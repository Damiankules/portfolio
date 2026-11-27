import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "dark" | "light" | "ghost" | "outline";

interface Props {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

/** Pill button rendered as a link. External/tel/mailto links use a plain <a>. */
export default function Button({ href, children, variant = "dark", arrow = false, className = "" }: Props) {
  const cls = `btn btn-${variant} ${className}`.trim();
  const inner = (
    <>
      {children}
      {arrow && <span className="arr" aria-hidden="true">→</span>}
    </>
  );
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    const blank = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(blank ? { target: "_blank", rel: "noopener" } : {})}>
        {inner}
      </a>
    );
  }
  return <Link href={href} className={cls}>{inner}</Link>;
}
