import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  PrimaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Operating Model",
  description:
    "Voliber applies working-capital discipline to open revenue queues inside B2B service firms.",
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
  "Dormant opportunity",
  "Dispute",
  "Approval-required item",
];

const priorityInputs = [
  ["Value", "Amount at stake and commercial relevance."],
  ["Aging", "Time since creation, due date, failure, or last touch."],
  ["Clarity", "Quality of the source record and next action."],
  ["Movement probability", "Likelihood that a controlled touch can advance the item."],
  ["Relationship risk", "Sensitivity of the account, buyer, or context."],
  ["Approval posture", "Whether action is cleared, held, or escalated."],
];

const reportItems = [
  "Items worked",
  "Dollars worked",
  "Replies received",
  "Payments or closures",
  "Approval-required exceptions",
  "Open items still aging",
  "Client decisions needed",
  "Recommended next actions",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="Working-capital discipline" title="Operating Model">
        <p>
          Small B2B service firms often have revenue objects sitting across accounting, sales, inboxes, CRMs, and owner memory. Voliber identifies, normalizes, classifies, prioritizes, works, logs, escalates, and reports those objects through a controlled weekly process.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader title="Revenue objects" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                A revenue object is an open invoice, stale proposal, failed payment, dormant opportunity, dispute, or approval-required item that still needs an operating decision.
              </p>
              <p>
                Voliber treats those objects as a queue, not a loose collection of reminders. Each object needs a type, source, age, status, priority, approval posture, next action, and record of movement.
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
                The operating ledger starts with the systems already in use. The first task is to locate the open objects and confirm which records are reliable enough to work.
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
                Classification keeps the queue controlled. Different object types need different timing, tone, source checks, and approval rules.
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
                The queue is ranked before work begins. Priority is based on operating judgment, not fake precision.
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
            <SectionHeader title="Approved execution" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Work only begins inside agreed rules: timing, tone, contact channel, touch frequency, and stop conditions. Voliber can send or prepare follow-up only where the client has approved the object type and action.
              </p>
              <p>
                The point is controlled movement. The business keeps authority over relationship-sensitive items, exceptions, and decisions that change commercial terms.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Exception control" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Disputes, unclear records, strategic accounts, unusual requests, discount questions, payment-plan requests, and sensitive replies are held instead of pushed forward.
              </p>
              <p>
                Exceptions are routed back with context, recommended next action, and the decision needed from the client.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Movement reporting">
              <p>
                The weekly report is the operating record: what was worked, what moved, what aged, what was held, and what decisions are needed next.
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
          <div className="mt-14">
            <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
