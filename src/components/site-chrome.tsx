import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/how-it-works", headerLabel: "method", footerLabel: "Method" },
  { href: "/notes", headerLabel: "notes", footerLabel: "Notes" },
  { href: "/who-its-for", headerLabel: "who it's for", footerLabel: "Who it's for" },
  { href: "/contact", headerLabel: "contact", footerLabel: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[960px] flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="font-mono text-[14px] uppercase leading-none tracking-[0.08em]"
          aria-label="Voliber home"
        >
          VOLIBER
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[14px] lowercase leading-none text-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.headerLabel}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[960px] gap-10 px-5 py-10 font-mono text-[12px] leading-6 text-muted sm:grid-cols-3 sm:px-8">
        <div>
          <p className="tracking-[0.08em]">VOLIBER</p>
          <p>Operations on the decay layer of B2B service revenue.</p>
        </div>
        <nav className="flex flex-col items-start">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.footerLabel}
            </Link>
          ))}
        </nav>
        <div>
          <a href="mailto:hello@voliber.com">hello@voliber.com</a>
          <p>A Devine operating company</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 pb-24 pt-14 sm:px-8 sm:pt-24 ${
        wide ? "max-w-[960px]" : "max-w-[62ch]"
      }`}
    >
      {children}
    </div>
  );
}
