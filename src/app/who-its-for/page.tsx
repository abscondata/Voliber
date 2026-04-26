import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Who It's For",
  description: "Who Voliber is built for.",
};

const questions = [
  {
    question: "What records are required?",
    answer:
      "An A/R aging export, an open proposal or estimate list, and any failed-payment log. CRM export is optional. Format does not need to be standardized — reconciliation is part of the diagnostic.",
  },
  {
    question: "Who handles customer contact?",
    answer:
      "Contact occurs from client-owned channels under approved limits. Voliber does not assume the client's identity, assign debts, or operate as a third-party collector.",
  },
  {
    question: "What is the legal posture?",
    answer:
      "Voliber operates as a service provider on client-owned accounts. The work falls outside the FDCPA's primary scope, which addresses consumer debt, and below state licensing thresholds for third-party collection. Scope is documented at engagement.",
  },
  {
    question: "How is data handled?",
    answer:
      "Data is reviewed in the form provided by the client, not retained beyond engagement scope, and not aggregated into shared datasets without explicit consent.",
  },
  {
    question: "Who operates Voliber?",
    answer:
      "Voliber is operated directly by its founder. Engagements are not routed through account management.",
  },
];

export default function WhoItsForPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Who it&apos;s for
      </h1>

      <div className="mt-12 space-y-[1.2em] text-[19px] leading-[1.55]">
        <p>
          Voliber works with US-based B2B service firms — agencies,
          consultancies, IT service providers, and professional service firms —
          typically in the $500K–$5M annual revenue range, where invoices,
          proposals, payment failures, and dormant opportunities accumulate
          without a dedicated operating function.
        </p>
        <p>
          The work requires source records, client authority over follow-up, and
          defined approval limits.
        </p>
        <p>
          Voliber does not work with consumer debt portfolios, regulated medical
          collections, legal enforcement, dispute-heavy contractor work, or
          engagements that require pressure-based contact.
        </p>
      </div>

      <div className="mt-20">
        <p
          className="pb-3 font-mono text-[12px] uppercase leading-6 text-muted"
          style={{ letterSpacing: "0.08em" }}
        >
          Questions
        </p>
        <hr className="border-0 border-t border-line" />
        <div className="mt-12 space-y-12">
          {questions.map((item) => (
            <article key={item.question}>
              <h2
                className="font-display text-[24px] font-normal text-foreground"
                style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
              >
                {item.question}
              </h2>
              <p className="mt-3 text-[19px] leading-[1.55]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
