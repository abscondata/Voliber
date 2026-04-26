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

const questions = [
  {
    question: "Is this collections?",
    answer:
      "No. Voliber does not make legal threats, pressure customers, or act as a collection agency. The work is limited to approved business follow-up and operating review.",
  },
  {
    question: "What data do you need?",
    answer:
      "Usually invoice reports, A/R aging, proposal lists, failed payment records, CRM exports, or inbox records.",
  },
  {
    question: "Do you contact customers directly?",
    answer:
      "Only if the client approves the object type, channel, tone, and limits. Sensitive items are held.",
  },
  {
    question: "What happens with disputes?",
    answer:
      "Disputes, chargebacks, legal threats, unusual terms, and sensitive accounts are routed back to the client.",
  },
  {
    question: "Who operates Voliber?",
    answer:
      "Voliber is operated by Robin Howley through Devine. The business uses documented review, approval, and reporting processes.",
  },
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

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title="Questions before a review" />
            <div className="divide-y divide-line border-y border-line">
              {questions.map((item) => (
                <article key={item.question} className="py-6">
                  <h2 className="text-lg font-semibold tracking-tight">{item.question}</h2>
                  <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                </article>
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
