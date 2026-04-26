import Link from "next/link";
import type { ReactNode } from "react";

const headerLinks = [
  { href: "/how-it-works", label: "method" },
  { href: "/notes", label: "notes" },
  { href: "/sample-review", label: "sample" },
  { href: "/contact", label: "contact" },
];

const footerLinks = [
  { href: "/how-it-works", label: "method" },
  { href: "/notes", label: "notes" },
  { href: "/sample-review", label: "sample" },
  { href: "/who-its-for", label: "who it's for" },
  { href: "/contact", label: "contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[1040px] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <Link
          href="/"
          className="font-display text-[22px] font-normal leading-none tracking-[-0.01em] no-underline"
          aria-label="Voliber home"
        >
          VOLIBER
        </Link>
        <nav className="flex flex-wrap items-baseline gap-x-8 gap-y-2 font-mono text-[12px] lowercase leading-none text-muted">
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
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
      <div className="mx-auto grid max-w-[1040px] gap-10 px-5 pb-24 pt-16 font-mono text-[12px] leading-6 text-muted sm:grid-cols-3 sm:px-8">
        <div className="space-y-3">
          <p className="font-display text-[22px] tracking-[-0.01em] text-foreground">
            VOLIBER
          </p>
          <p className="font-body text-[14px] italic leading-[1.5] text-muted">
            Operations on the decay layer of B2B service revenue.
          </p>
        </div>
        <nav className="flex flex-col items-start gap-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="lowercase">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-start gap-2">
          <a href="mailto:hello@voliber.com">hello@voliber.com</a>
          <p className="no-underline">A Devine operating company</p>
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
      className={`mx-auto w-full px-5 pb-24 pt-16 sm:px-8 sm:pt-24 ${
        wide ? "max-w-[1040px]" : "max-w-[720px]"
      }`}
    >
      {children}
    </div>
  );
}
