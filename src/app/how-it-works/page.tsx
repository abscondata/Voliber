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
    "Voliber classifies, prioritizes, works, logs, escalates, and reports open revenue already in motion.",
};

const sourceData = [
  "Open invoice reports",
  "A/R aging",
  "Estimate or proposal exports",
  "Dormant lead lists",
  "Failed payment records",
  "Shared inbox or call-log records",
  "Client tone, timing, and approval rules",
];

const classifications = [
  "Clean invoice",
  "Late invoice",
  "Stale estimate",
  "Dormant lead",
  "Failed payment",
  "Disputed or approval-required item",
];

const operatingSteps = [
  {
    title: "Source data",
    text: "Voliber starts from the systems the business already uses, then turns scattered open items into a working queue.",
  },
  {
    title: "Classification",
    text: "Every open item is treated as a revenue object with a type, state, next action, and approval posture.",
  },
  {
    title: "Priority",
    text: "The queue is grouped by value, age, clarity, likelihood of movement, and relationship risk.",
  },
  {
    title: "Approved follow-up",
    text: "Follow-up runs through client-approved rules, templates, timing, and channels.",
  },
  {
    title: "Logging and exceptions",
    text: "Every touch is logged. Disputes, chargebacks, unusual requests, and sensitive accounts are held for review.",
  },
  {
    title: "Weekly movement report",
    text: "The business sees what was worked, what moved, what needs approval, and what is still aging.",
  },
];

const reportItems = [
  "Items worked",
  "Dollars worked",
  "Replies received",
  "Payments or closures",
  "Approval-required exceptions",
  "Open items still aging",
  "Recommended next actions",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="Operating Model" title="A measured operating model for open revenue already in motion.">
        <p>
          Voliber turns unmanaged revenue objects into a weekly operating queue. Each item is classified, prioritized, worked through approved follow-up, logged, escalated when needed, and reported back to the business.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader eyebrow="The operating problem" title="Open revenue leaks through unmanaged next actions." />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Open revenue does not disappear all at once. It leaks through unpaid invoices, old estimates, dormant leads, failed payments, and missed follow-up.
              </p>
              <p>
                The issue is usually not effort. It is the absence of a controlled queue, a priority order, and a weekly reporting rhythm.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow="Source data" title="Voliber starts from the systems already in use.">
              <p>
                The first pass is practical: identify the source records, confirm what can be worked, and define what requires approval.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {sourceData.map((item) => (
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
            <SectionHeader eyebrow="Classification" title="Every open item becomes a revenue object.">
              <p>
                Classification keeps the queue from becoming a loose task list. Different objects need different timing, tone, and approval rules.
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
            <SectionHeader eyebrow="Priority" title="The queue is not worked randomly.">
              <p>
                Voliber uses A/B/C priority buckets based on value, age, clarity, likelihood of movement, and relationship risk. No fake score is needed.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line md:grid-cols-3">
              {[
                ["A priority", "High-clarity items that should move first or need fast approval."],
                ["B priority", "Useful follow-up opportunities with moderate age, value, or uncertainty."],
                ["C priority", "Lower-risk or lower-clarity items kept in view without crowding the week."],
              ].map(([bucket, text]) => (
                <article key={bucket} className="bg-background p-6 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-tight">{bucket}</h2>
                  <p className="mt-4 leading-7 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeader eyebrow="Weekly loop" title="Approved action, observable movement, controlled escalation." />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {operatingSteps.map((step, index) => (
              <article key={step.title} className="grid gap-6 py-8 md:grid-cols-[120px_0.75fr_1.25fr] md:items-start">
                <span className="font-mono text-sm text-accent">0{index + 1}</span>
                <h2 className="text-2xl font-semibold tracking-tight">{step.title}</h2>
                <p className="max-w-2xl text-lg leading-8 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader eyebrow="Weekly movement report" title="The business sees the state of the queue.">
              <p>
                The report is built for review and decisions. It should show work performed, movement created, exceptions held, and the next operating recommendation.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {reportItems.map((item) => (
                <div key={item} className="bg-background p-5 text-lg font-medium">
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
