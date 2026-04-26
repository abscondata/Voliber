import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Method",
  description:
    "Voliber's method for research-driven operations around revenue decay.",
};

const inputs = [
  "Receivables",
  "Proposals",
  "Payment failures",
  "CRM records",
  "Inbox history",
  "Owner context",
];

const states = [
  "Open",
  "Aging",
  "Disputed",
  "Held",
  "Acted",
  "Replied",
  "Paid",
  "Closed",
];

const rankingInputs = [
  "Value",
  "Age",
  "Clarity",
  "Friction",
  "Risk",
  "Likely movement",
];

const outcomes = [
  "Paid",
  "Replied",
  "Closed",
  "Escalated",
  "Held",
  "Scheduled",
];

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="Method" title="Method">
        <p>
          Revenue decay begins after commercial intent is recorded but before cash, closure, or decision.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Thesis" />
            <p className="text-lg leading-8 text-muted">
              The work is to locate unresolved commercial value, reduce ambiguity, and move each item to a controlled state.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Inputs" />
            <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {inputs.map((item) => (
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
            <SectionHeader title="State">
              <p>Each item is reduced to a practical state.</p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
              {states.map((item) => (
                <div key={item} className="bg-surface p-5 text-lg font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Ranking">
              <p>
                Items are ranked by value, age, clarity, friction, risk, and likely movement.
              </p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {rankingInputs.map((item) => (
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Controlled action" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>Follow-up occurs only inside approved limits.</p>
              <p>Sensitive items are held.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title="Measurement">
              <p>The output is not cash alone. It is state change.</p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.map((item) => (
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title="Review" />
            <p className="text-lg leading-8 text-muted">
              The client sees what changed, what remained unresolved, and where a decision is needed.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
