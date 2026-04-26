import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Approach",
  description: "Voliber's approach to unresolved B2B service revenue.",
};

const sections = [
  {
    title: "Domain",
    body: "Receivables, proposals, payment failures, and dormant intent inside B2B service firms.",
  },
  {
    title: "Signal",
    body: "Each item carries age, value, friction, risk, and evidence of intent.",
  },
  {
    title: "Ranking",
    body: "The work is ordered by recoverability, required control, and expected state change.",
  },
  {
    title: "Action",
    body: "Follow-up occurs only inside operating limits. Sensitive items are held.",
  },
  {
    title: "Output",
    body: "The output is state change: paid, replied, closed, escalated, held, or scheduled.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Approach
      </h1>

      <p className="mt-12 max-w-[62ch] text-[19px] leading-[1.55]">
        Voliber operates unresolved commercial value after intent has been
        recorded but before cash, closure, or decision.
      </p>

      <div className="mt-16 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2
              className="font-display text-[26px] font-normal text-foreground"
              style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
            >
              {section.title}
            </h2>
            <p className="mt-3 max-w-[62ch] text-[19px] leading-[1.55] text-muted">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
