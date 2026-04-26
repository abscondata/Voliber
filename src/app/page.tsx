import Link from "next/link";
import { Fragment } from "react";
import { PageShell } from "@/components/site-chrome";

const linkRow = [
  { href: "/how-it-works", label: "method" },
  { href: "/notes", label: "notes" },
  { href: "/sample-review", label: "sample review" },
  { href: "/contact", label: "request review" },
];

export default function Home() {
  return (
    <PageShell>
      <h1
        className="max-w-[720px] font-display text-[36px] font-normal leading-[1.1] sm:text-[56px]"
        style={{ letterSpacing: "-0.02em" }}
      >
        Revenue decay is a working-capital problem.
      </h1>

      <div className="mt-12 max-w-[62ch] space-y-[1.2em] text-[19px] leading-[1.55]">
        <p>
          Voliber measures and operates the unpaid invoices, stalled proposals,
          payment failures, and dormant opportunities that age after commercial
          intent has already been recorded.
        </p>
        <p>
          Open value is reviewed by age, value, friction, risk, and required
          control. The output is a short diagnostic review, an operating
          recommendation, and a controlled follow-up path.
        </p>
      </div>

      <p className="mt-12 max-w-[62ch] font-mono text-[13px] leading-[1.7] text-foreground">
        {linkRow.map((link, index) => (
          <Fragment key={link.href}>
            {index > 0 && (
              <span className="mx-2 text-muted" aria-hidden="true">
                ·
              </span>
            )}
            <Link href={link.href}>{link.label}</Link>
          </Fragment>
        ))}
      </p>

      <hr className="mt-10 max-w-[62ch] border-0 border-t border-line" />

      <section className="mt-16 max-w-[62ch] pb-8">
        <p
          className="font-mono text-[12px] uppercase leading-6 text-muted"
          style={{ letterSpacing: "0.08em" }}
        >
          Late payment is structural
        </p>
        <p className="mt-4 text-[17px] leading-[1.55] text-muted">
          QuickBooks reported that US small businesses with unpaid invoices
          were owed an average of about $17,500 in 2025. Voliber applies this
          problem to the small B2B service-firm level: receivables, proposals,
          payment failures, and dormant opportunities that remain unresolved.
        </p>
      </section>
    </PageShell>
  );
}
