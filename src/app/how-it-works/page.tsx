import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Operating Model",
  description:
    "How Voliber works receivables, proposals, payment failures, and quiet opportunities through a controlled weekly process.",
};

const sourceSystems = [
  "Accounting systems",
  "Invoice reports",
  "A/R aging",
  "Proposal or estimate exports",
  "Payment processors",
  "CRM records",
  "Shared inboxes",
  "Owner notes and call records",
];

const classifications = [
  "Receivable",
  "Proposal",
  "Payment failure",
  "Quiet opportunity",
  "Dispute",
  "Held item",
];

const priorityInputs = [
  ["Value", "Amount at stake and commercial relevance."],
  ["Age", "Time since creation, due date, failure, or last touch."],
  ["Clarity", "Quality of the source record and next action."],
  ["Risk", "Sensitivity of the account, buyer, or context."],
  ["Approval", "Whether action is cleared, held, or escalated."],
];

const reportItems = [
  "Items worked",
  "Dollars worked",
  "Replies received",
  "Payments or closures",
  "Held items",
  "Aging items",
  "Decisions needed",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="Operating Model" title="How the work is controlled.">
        <p>
          Voliber works from existing systems. The process is weekly, documented, and governed by client authority.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader title="Revenue items" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                The queue begins with open invoices, stale proposals, payment failures, quiet opportunities, disputes, and held items.
              </p>
              <p>
                Each item needs a source, age, status, priority, and action path before work begins.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Source systems">
              <p>
                The first task is to locate the records and confirm which are reliable enough to work.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {sourceSystems.map((item) => (
                <div key={item} className="bg-background p-6 text-lg font-medium leading-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title="Classification">
              <p>
                Different item types need different timing, tone, source checks, and approval rules.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {classifications.map((item) => (
                <div key={item} className="bg-surface p-6 text-lg font-medium leading-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeader title="Priority">
              <p>
                The queue is ranked before work begins. Priority is based on practical operating judgment.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line md:grid-cols-3">
              {priorityInputs.map(([input, text]) => (
                <article key={input} className="bg-background p-6 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-tight">{input}</h2>
                  <p className="mt-4 leading-7 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Execution" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Work only begins inside agreed limits: timing, tone, contact channel, touch frequency, and stop conditions.
              </p>
              <p>
                The business keeps authority over relationship-sensitive items, exceptions, and decisions that change commercial terms.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Exceptions" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Disputes, unclear records, strategic accounts, unusual requests, discount questions, payment-plan requests, and sensitive replies are held instead of pushed forward.
              </p>
              <p>
                Exceptions are routed back with context and the decision needed from the client.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Reporting">
              <p>
                The report shows what was worked, what changed, what was held, and what needs a client decision.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {reportItems.map((item) => (
                <div key={item} className="bg-surface p-5 text-lg font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
