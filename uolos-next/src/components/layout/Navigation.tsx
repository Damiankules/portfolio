"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/site";

interface Props {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
}

export default function Navigation({ className = "", linkClassName = "nav-link", onNavigate }: Props) {
  const pathname = usePathname() || "/";
  return (
    <nav aria-label="Pagrindinė navigacija" className={className}>
      {nav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} className={linkClassName} aria-current={active ? "page" : undefined} onClick={onNavigate}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
