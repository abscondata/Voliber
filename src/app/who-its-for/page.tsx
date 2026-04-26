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
    "Voliber is built for B2B service firms and agencies with invoices, proposals, and dormant leads that need ownership.",
};

const goodFits = [
  {
    title: "Marketing agencies",
    text: "Retainer invoices, project invoices, old proposals, and dormant prospects that need a weekly owner.",
  },
  {
    title: "Web design firms",
    text: "Proposal and payment follow-up that can stall while the team is focused on active delivery work.",
  },
  {
    title: "IT service providers",
    text: "Open invoices, failed payments, and service follow-up where records exist but next actions drift.",
  },
  {
    title: "Consulting firms",
    text: "Relationship-sensitive invoice and proposal follow-up where tone and approval rules matter.",
  },
  {
    title: "Small professional service firms",
    text: "Email-native revenue queues that need classification, priority, logging, and a weekly report.",
  },
];

const fitSignals = [
  "The open invoice list grows between finance reviews",
  "Proposals are sent but not revisited on schedule",
  "Dormant leads sit in the CRM or inbox without a next action",
  "Failed payments are noted but not worked through a defined queue",
  "The principal knows follow-up matters but has no fixed weekly owner",
  "Tone and relationship context matter",
];

const poorFits = [
  "Businesses needing legal collections",
  "Businesses with no usable records or source of truth",
  "Companies seeking aggressive sales tactics",
  "One-time blast outreach campaigns",
  "Teams that do not want follow-up documented",
];

export default function WhoItsForPage() {
  return (
    <>
      <PageIntro eyebrow="Who it's for" title="For B2B service firms and agencies with open revenue no one consistently owns.">
        <p>
          Voliber is built for firms with invoices, proposals, failed payments, and dormant leads already sitting inside their systems.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <SectionHeader eyebrow="Primary fit" title="Agencies and service firms with clean workflows and aging next actions." />
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
            <SectionHeader eyebrow="Fit signals" title="The problem usually looks like an unmanaged queue." />
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
            <SectionHeader eyebrow="Not a fit" title="Voliber is narrow by design.">
              <p>
                The work is disciplined follow-up for revenue already in the pipeline. It is not legal recovery, high-pressure selling, or a substitute for basic records.
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
              If invoices, proposals, failed payments, or dormant leads keep aging without an owner, request a pipeline review.
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
