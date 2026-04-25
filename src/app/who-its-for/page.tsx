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
    "Voliber is built for small businesses with recurring invoicing, quoting, slow follow-up, and owner-led admin pressure.",
};

const goodFits = [
  {
    title: "Contractors and trades",
    text: "Open balances, sent estimates, and missed calls that need steady follow-up without changing field operations.",
  },
  {
    title: "Agencies and studios",
    text: "Project invoices, proposal follow-up, and old opportunities that drift when delivery work gets busy.",
  },
  {
    title: "Consultants and professional firms",
    text: "Relationship-sensitive follow-up where tone, documentation, and approval rules matter.",
  },
  {
    title: "B2B service firms",
    text: "Recurring invoice and quote workflows where no one owns the weekly revenue recovery queue.",
  },
  {
    title: "Clinics with self-pay balances",
    text: "Patient balance follow-up that needs discipline, documentation, and clear escalation boundaries.",
  },
];

const fitSignals = [
  "The open invoice list grows between admin days",
  "Quotes are sent but not revisited on schedule",
  "Missed calls are logged once and then buried",
  "The owner knows follow-up matters but has no fixed time for it",
  "The team is focused on delivery and current work",
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
      <PageIntro eyebrow="Who it's for" title="For businesses where money is close, but follow-up keeps slipping.">
        <p>
          Voliber is built for small businesses with recurring invoicing, steady quoting, or follow-up queues that matter financially but do not have a consistent owner.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <SectionHeader eyebrow="Good fit" title="Small firms with real records and real follow-up pressure." />
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
            <SectionHeader eyebrow="Fit signals" title="The problem usually looks operational before it looks financial." />
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
              If your records are usable and the follow-up queue keeps aging, Voliber may be the right operator.
            </h2>
            <div className="mt-10">
              <PrimaryLink href="/contact">Tell Us About Your Business</PrimaryLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
