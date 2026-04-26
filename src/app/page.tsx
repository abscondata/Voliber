import Link from "next/link";
import { PageShell } from "@/components/site-chrome";

const linkRow = [
  { href: "/how-it-works", label: "method" },
  { href: "/notes", label: "notes" },
  { href: "/sample-review", label: "sample review" },
  { href: "/who-its-for", label: "who it's for" },
  { href: "/contact", label: "contact" },
];

export default function Home() {
  return (
    <PageShell>
      <section className="mb-20">
        <p
          className="font-display font-normal text-[56px] leading-none text-foreground sm:text-[88px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          $17,000
        </p>
        <p className="mt-4 max-w-[52ch] text-[17px] italic leading-[1.5] text-muted">
          Average outstanding receivables held by US small businesses with
          overdue invoices, 2025. Voliber operates this layer.
        </p>
      </section>

      <div className="space-y-[1.4em] text-[19px] leading-[1.55]">
        <p>
          Voliber operates the decay layer of B2B service revenue — receivables,
          proposals, payment failures, and dormant intent that age past the
          point of attention.
        </p>
        <p>
          The work locates open value, ranks it by recoverability, acts inside
          approved limits, and reports state change. Method, notes, and a sample
          review format are linked below.
        </p>
      </div>

      <ul className="mt-12 flex flex-col font-mono text-[13px] leading-[2.4] text-foreground">
        {linkRow.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
