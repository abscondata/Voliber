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
    "Voliber is built for B2B service firms and agencies with invoice, proposal, and dormant opportunity queues that no one consistently owns.",
};

const goodFits = [
  {
    title: "Marketing agencies",
    text: "Retainer invoices, project invoices, stale proposals, and quiet opportunities that need a weekly owner.",
  },
  {
    title: "Web design firms",
    text: "Proposal and payment queues that can age while the team is focused on delivery work.",
  },
  {
    title: "IT service providers",
    text: "Open invoices, payment failures, and service follow-up where records exist but next actions drift.",
  },
  {
    title: "Consulting firms",
    text: "Relationship-sensitive invoice and proposal queues where tone and approval rules matter.",
  },
  {
    title: "Small professional service firms",
    text: "Source-system records that need classification, priority, logging, and a weekly movement report.",
  },
];

const fitSignals = [
  "Invoice lists age between finance reviews",
  "Proposals are sent but not revisited on schedule",
  "Dormant opportunities sit in the CRM or inbox without a next action",
  "Failed payments are noted but not worked through approved retry rules",
  "The principal knows the queue matters but has no fixed weekly owner",
  "Tone, timing, and relationship context need approval rules",
];

const poorFits = [
  "Businesses needing legal pressure",
  "Businesses with no usable records or source of truth",
  "Companies seeking aggressive customer pressure",
  "One-time blast outreach campaigns",
  "Teams that do not want touches documented",
  "Organizations too large for an owner-led operating review",
];

export default function WhoItsForPage() {
  return (
    <>
      <PageIntro eyebrow="Who it's for" title="B2B service firms and agencies.">
        <p>
          Firms with invoice, proposal, and dormant opportunity queues that no one consistently owns.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <SectionHeader title="Primary fit">
            <p>
              Voliber is for service firms with existing source systems, meaningful open revenue objects, and a need for controlled weekly movement.
            </p>
          </SectionHeader>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {goodFits.map((fit) => (
              <article key={fit.title} className="bg-surface p-6 sm:p-8">
                <h2 className="text-xl font-semibold tracking-tight">{fit.title}</h2>
                <p className="mt-4 leading-7 text-muted">{fit.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title="Fit signals">
              <p>
                The problem usually looks like an open revenue queue with no consistent owner, priority order, or operating ledger.
              </p>
            </SectionHeader>
            <ul className="divide-y divide-line border-y border-line">
              {fitSignals.map((signal) => (
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
              <p>
                Voliber is narrow by design. The work requires source records, approval rules, and a client willing to keep exceptions under control.
              </p>
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
              If invoice, proposal, payment, or dormant opportunity queues are aging without ownership, request a Pipeline Review.
            </h2>
            <div className="mt-10">
              <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
