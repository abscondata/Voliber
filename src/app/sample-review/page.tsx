import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Sample Format",
  description: "Illustrative sample format from Voliber.",
};

const sections = [
  {
    title: "Sources",
    body: "The review begins with the records provided by the client.",
  },
  {
    title: "Open value",
    body: "Unresolved items are grouped by domain and current state.",
  },
  {
    title: "Ranking",
    body: "Items are ordered by recoverability, required control, and expected state change.",
  },
  {
    title: "Held items",
    body: "Sensitive, disputed, or unclear items are separated from active work.",
  },
  {
    title: "Recommendation",
    body: "The recommendation defines what can move, what should pause, and what requires review.",
  },
  {
    title: "Decision",
    body: "The client confirms whether to proceed, hold, close, or provide missing context.",
  },
];

export default function SampleReviewPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Sample format
      </h1>
      <p className="mt-12 max-w-[62ch] text-[19px] leading-[1.55] text-muted">
        Illustrative structure only.
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
