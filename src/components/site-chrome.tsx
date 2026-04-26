import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { href: "/how-it-works", label: "Operating Model" },
  { href: "/who-its-for", label: "Who It's For" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="group flex items-center gap-3" aria-label="Voliber home">
            <span className="flex size-8 items-center justify-center border border-foreground bg-foreground text-[11px] font-semibold tracking-[0.18em] text-background transition-colors group-hover:bg-accent">
              V
            </span>
            <span className="text-lg font-semibold tracking-[0.12em] text-foreground">
              VOLIBER
            </span>
          </Link>
          <Link
            href="/contact"
            className="border border-accent bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-foreground lg:hidden"
          >
            Request a Pipeline Review
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="hidden border border-accent bg-accent px-4 py-2 text-accent-ink transition-colors hover:bg-foreground lg:inline-flex"
          >
            Request a Pipeline Review
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border border-foreground bg-foreground text-[11px] font-semibold tracking-[0.18em] text-background">
              V
            </span>
            <span className="text-lg font-semibold tracking-[0.12em]">VOLIBER</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Working-capital control for open receivables and stalled proposals.
          </p>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-semibold text-foreground">Company</p>
            <div className="mt-4 flex flex-col gap-3 text-muted">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">Focus</p>
            <div className="mt-4 flex flex-col gap-3 text-muted">
              <span>Receivables</span>
              <span>Stalled proposals</span>
              <span>Approved follow-up</span>
              <span>Weekly reporting</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <div className="mt-4 flex flex-col gap-3 text-muted">
              <a href="mailto:hello@voliber.com" className="hover:text-foreground">
                hello@voliber.com
              </a>
              <span>Devine company</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`border-t border-line py-20 sm:py-24 ${className}`}>{children}</section>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-lg leading-8 text-muted">{children}</div> : null}
    </div>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-5 text-sm font-semibold text-accent-ink transition-colors hover:bg-foreground"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center border border-line bg-transparent px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
    >
      {children}
    </Link>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <div className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
