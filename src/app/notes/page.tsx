import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "References",
  description: "Selected public sources informing Voliber's operating thesis.",
};

const references = [
  "QuickBooks Small Business Late Payments Report",
  "Karlan et al., Getting to the Top of Mind",
  "Saulitis, personalized hospital payment reminders",
  "FTC / Florida OFR guidance",
];

export default function ReferencesPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        References
      </h1>
      <p className="mt-12 max-w-[62ch] text-[19px] leading-[1.55] text-muted">
        Selected public sources informing Voliber&apos;s operating thesis.
      </p>
      <div className="mt-16 space-y-4 border-t border-line pt-8 font-mono text-[13px] leading-6 text-muted">
        {references.map((reference) => (
          <p key={reference}>{reference}</p>
        ))}
      </div>
    </PageShell>
  );
}
