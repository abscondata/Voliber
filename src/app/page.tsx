import {
  Container,
  PrimaryLink,
  SecondaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

const inputItems = [
  "Value",
  "Age",
  "Status",
  "Friction",
  "Risk",
  "Required control",
];

const problemItems = [
  "Invoice aging",
  "Proposal drift",
  "Payment failure",
  "Dormant intent",
];

const methodLines = [
  "Map the open value.",
  "Classify the decay.",
  "Rank by expected movement.",
  "Act inside approved limits.",
  "Record the state change.",
];

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                Research-driven operations for revenue decay.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                Voliber works the point where commercial intent begins to decay: invoices sent, proposals issued, payments failed, and opportunities left dormant.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                The work is simple on the surface: identify the open value, rank the friction, act under control, and measure what changes.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">Request Review</PrimaryLink>
                <SecondaryLink href="/how-it-works">View Method</SecondaryLink>
              </div>
            </div>
            <ProblemSurface />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader title="Inputs">
            <p>
              Voliber starts with existing records: receivables, proposals, failed payments, inbox history, CRM exports, and owner notes.
            </p>
          </SectionHeader>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {inputItems.map((item) => (
              <div key={item} className="bg-background p-6 text-lg font-medium leading-7">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader title="Working-capital drag" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Receivables are not cash. Proposals are not decisions. Failed payments are not closed. Dormant leads are not dead.
              </p>
              <p>
                They are unresolved positions inside the business.
              </p>
              <p>
                Voliber&apos;s role is to reduce that unresolved state without creating customer or legal risk.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Method" />
            <ul className="divide-y divide-line border-y border-line">
              {methodLines.map((line) => (
                <li key={line} className="py-5 text-lg font-medium leading-7">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader title="Built for firms with unresolved commercial value.">
              <p>
                For agencies, consultants, IT service providers, and professional service firms where invoices, proposals, and payment issues age without a dedicated operating desk.
              </p>
            </SectionHeader>
            <div className="mt-10">
              <PrimaryLink href="/contact">Request Review</PrimaryLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ProblemSurface() {
  return (
    <div className="border border-line bg-surface p-6 sm:p-8">
      <div className="border-b border-line pb-6">
        <h2 className="text-2xl font-semibold tracking-tight">The problem surface</h2>
        <p className="mt-5 leading-7 text-muted">
          Most firms do not lose revenue in one visible event. They lose it through time, ambiguity, and unowned work after the first commercial signal has already appeared.
        </p>
      </div>
      <ul className="mt-6 grid gap-3 text-sm font-medium text-foreground">
        {problemItems.map((item) => (
          <li key={item} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
