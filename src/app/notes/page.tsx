import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Notes",
  description: "Working notes on revenue decay and recovery operations.",
};

const notes = [
  {
    header: "Note 01 — April 2026",
    title: "Late payment as a structural condition in US small-business revenue",
    body: "US small businesses with outstanding invoices are owed approximately $17,000 on average; 47% report invoices overdue by 30 days or more. Late payment is not a behavioral anomaly but a structural feature of B2B service economics — firms operate downstream of customers with their own working-capital constraints. The operational implication is that receivables aging is endemic, predictable, and addressable through process rather than enforcement.",
    sources:
      "Sources: Intuit QuickBooks Small Business Late Payments Report, 2025; Federation of Small Businesses (UK); Xero Small Business Insights.",
  },
  {
    header: "Note 02 — April 2026",
    title: "Reminder cadence and payment behavior — evidence from controlled experiments",
    body: "Field experiments on payment reminders consistently find that timing and framing dominate intensity. A randomized study of 17,545 fintech borrowers (Huang, 2024) found that reminders incorporating social or financial framing outperformed neutral notices, with response moderated by demographic features. A separate randomized controlled trial of hospital-debt collection in Latvia (n = 9,196) showed that personalization — addressing the recipient by name — meaningfully improved payment rates, while moral and prosocial appeals did not. Cadence design is empirical, not intuitive, and small framing variants produce measurable lift.",
    sources:
      "Sources: Huang (2024), SSRN Working Paper 3641282; Saulītis & Šūpule (2024), hospital debt collection field experiment.",
  },
  {
    header: "Note 03 — April 2026",
    title: "Recovery probability and aging buckets",
    body: "Recovery probability decays non-linearly with invoice age. Industry data and academic work on trade credit converge on a working heuristic: items 1–30 days past due retain most of their face value as expected recovery; items 61–90 days drop materially; items beyond 120 days approach option value rather than receivable value and are better handled through structured closure than continued contact. The point of operating discipline is to act inside the window where probability remains high.",
    sources:
      "Sources: Sage / The Data Foundry, AR benchmarks, 2024; Peel, Wilson & Howorth (2000), International Small Business Journal; Mittal & Monika (2020), SEDME.",
  },
  {
    header: "Note 04 — April 2026",
    title: "Operating posture vs. enforcement posture",
    body: "The US Fair Debt Collection Practices Act primarily addresses third-party collection of consumer debts and is not the operative framework for B2B receivables. State-level licensing varies and turns on activity, not framing. The operating distinction Voliber maintains: structured follow-up on client-owned accounts under approved limits is a service activity; assignment of debts, identity transfer, or threat-based contact is a regulated activity. Voliber operates the former and does not engage in the latter.",
    sources:
      "Sources: FTC guidance on FDCPA scope; Florida Office of Financial Regulation, consumer collection agency licensing.",
  },
];

export default function NotesPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Notes
      </h1>
      <p className="mt-6 text-[17px] italic leading-[1.5] text-muted">
        Working notes on revenue decay and recovery operations. Updated as
        material evolves.
      </p>

      <div className="mt-16">
        {notes.map((note, index) => (
          <article
            key={note.header}
            className={
              index === 0
                ? "pb-16"
                : "border-t border-line py-16"
            }
          >
            <p
              className="font-mono text-[12px] uppercase leading-6 text-muted"
              style={{ letterSpacing: "0.08em" }}
            >
              {note.header}
            </p>
            <h2
              className="mt-4 font-display text-[32px] font-normal text-foreground"
              style={{ letterSpacing: "-0.015em", lineHeight: 1.15 }}
            >
              {note.title}
            </h2>
            <p className="mt-5 text-[19px] leading-[1.55]">{note.body}</p>
            <p className="mt-4 text-[15px] italic leading-[1.5] text-muted">
              {note.sources}
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
