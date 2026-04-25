import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  PrimaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Voliber gathers information, runs weekly follow-up, documents every touch, and escalates sensitive items.",
};

const accessItems = [
  "Open invoice or accounts receivable report",
  "Estimate, proposal, or quote export",
  "Missed-call log, lead queue, or CRM list",
  "Rules for tone, timing, and approval",
];

const weeklySteps = [
  {
    title: "Set the queue",
    text: "Open invoices, stale estimates, missed calls, and dormant leads are grouped by age, value, and next action.",
  },
  {
    title: "Run approved follow-up",
    text: "Touches go out on the agreed cadence through the channels already used by the business.",
  },
  {
    title: "Document every action",
    text: "Each touch is logged with date, channel, note, result, and next step.",
  },
  {
    title: "Hold sensitive items",
    text: "Disputes, unusual requests, and relationship-sensitive accounts are routed back for approval.",
  },
  {
    title: "Send the weekly summary",
    text: "The business sees what moved, what stalled, what needs a decision, and what remains in the queue.",
  },
];

const escalationItems = [
  "Payment disputes or disagreement about work performed",
  "Legal language, chargeback threats, or formal complaints",
  "Requests for unusual payment arrangements",
  "Strategic accounts where tone needs extra care",
  "Anything the client marks as approval-required",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="How it works" title="A procedural follow-up rhythm for revenue already in motion.">
        <p>
          Voliber works inside the systems a business already uses. The operating model is simple: define the queue, run follow-up on a fixed cadence, document the work, and keep the client in control.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow="Access and information" title="No system migration is required.">
              <p>
                The starting point is the source of truth the business already trusts. That may be accounting software, a CRM, a spreadsheet export, a shared inbox, or a call log.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {accessItems.map((item) => (
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
          <SectionHeader eyebrow="Week to week" title="The work follows a clear operating cadence." />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {weeklySteps.map((step, index) => (
              <article key={step.title} className="grid gap-6 py-8 md:grid-cols-[120px_0.7fr_1.3fr] md:items-start">
                <span className="font-mono text-sm text-accent">0{index + 1}</span>
                <h2 className="text-2xl font-semibold tracking-tight">{step.title}</h2>
                <p className="max-w-2xl text-lg leading-8 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeader eyebrow="Logging" title="Every touch leaves a record.">
              <p>
                Follow-up is recorded in the source system or a shared tracker. The log shows who was contacted, when it happened, what was said, what came back, and what happens next.
              </p>
            </SectionHeader>
            <SectionHeader eyebrow="Escalation" title="Control stays with the client.">
              <p>
                Voliber does not freelance sensitive judgment calls. Anything outside the agreed operating rules is held for review before another touch goes out.
              </p>
            </SectionHeader>
          </div>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-5">
            {escalationItems.map((item) => (
              <div key={item} className="bg-surface p-5 text-sm leading-6 text-muted">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader eyebrow="Weekly summary" title="The client sees the state of the pipeline." />
            <div className="border border-line bg-surface p-6 sm:p-8">
              <div className="grid gap-px bg-line sm:grid-cols-2">
                {[
                  "Items moved to paid or closed",
                  "Replies needing a decision",
                  "Active follow-up still in motion",
                  "Recommended next actions",
                ].map((item) => (
                  <div key={item} className="bg-surface p-5 text-lg font-medium">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-muted">
                The summary is designed for review, not noise. It gives ownership back to the business without putting the owner back into the chase.
              </p>
            </div>
          </div>
          <div className="mt-14">
            <PrimaryLink href="/contact">Talk to Us</PrimaryLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
