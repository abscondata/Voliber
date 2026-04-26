import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  PrimaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "Voliber is built for B2B service firms where commercial value decays after intent.",
};

const examples = [
  "Agencies",
  "IT service providers",
  "Consultants",
  "Professional service firms",
];

const signals = [
  "Receivables age between finance reviews",
  "Proposals are issued and then drift",
  "Payment failures lack a controlled path",
  "Quiet opportunities sit in inboxes or CRM records",
];

const poorFits = [
  "Legal pressure",
  "Aggressive customer pressure",
  "No usable records",
  "One-time blast campaigns",
  "Undocumented work",
  "Enterprise procurement programs",
];

export default function WhoItsForPage() {
  return (
    <>
      <PageIntro eyebrow="Who it's for" title="For firms where revenue decays after intent.">
        <p>
          Voliber is built for B2B service firms with invoices, proposals, payment failures, and quiet opportunities that age without a dedicated operating desk.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <SectionHeader title="Examples" />
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {examples.map((item) => (
              <div key={item} className="bg-surface p-6 text-lg font-medium leading-7">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title="Signals">
              <p>The pattern is unresolved commercial value with no operating owner.</p>
            </SectionHeader>
            <ul className="divide-y divide-line border-y border-line">
              {signals.map((signal) => (
                <li key={signal} className="py-5 text-lg font-medium leading-7">
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title="Not a fit">
              <p>The work requires source records, client authority, and controlled limits.</p>
            </SectionHeader>
            <div className="grid gap-px bg-line sm:grid-cols-2">
              {poorFits.map((item) => (
                <div key={item} className="bg-surface p-6 text-lg font-medium leading-7 text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              If unresolved commercial value is aging.
            </h2>
            <div className="mt-10">
              <PrimaryLink href="/contact">Request Review</PrimaryLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
