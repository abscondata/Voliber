import {
  Container,
  PrimaryLink,
  SecondaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

const queueItems = [
  {
    title: "Receivables",
    text: "Open invoices reviewed by age, amount, clarity, and risk.",
  },
  {
    title: "Proposals",
    text: "Old estimates and proposals assigned a decision path or closed.",
  },
  {
    title: "Payment failures",
    text: "Failed payments routed through approved retry rules.",
  },
  {
    title: "Dormant opportunities",
    text: "Quiet leads and past conversations reviewed for reactivation or closure.",
  },
];

const deskItems = [
  "Receivables",
  "Proposals",
  "Payment failures",
  "Dormant opportunities",
];

const operatingDiscipline = [
  "Identify open revenue.",
  "Set priority.",
  "Run approved follow-up.",
  "Hold exceptions.",
  "Report changes.",
];

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                Working-capital control for unpaid invoices and stalled proposals.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                Voliber works the receivables, proposals, payment failures, and dormant opportunities already sitting inside B2B service firms.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Prioritized, approved, logged, and reported weekly.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
                <SecondaryLink href="/how-it-works">Operating Model</SecondaryLink>
              </div>
            </div>
            <TheDesk />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader title="What enters the queue">
            <p>
              Voliber starts from existing records: invoice reports, A/R aging, proposal lists, failed payment records, inboxes, and CRM exports.
            </p>
          </SectionHeader>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {queueItems.map((item) => (
              <article key={item.title} className="bg-background p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader title="Why it matters" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Revenue leakage is usually quiet. An invoice ages. A proposal sits. A failed payment is noted once. A lead stops replying.
              </p>
              <p>
                Together, those loose ends tie up cash, blur the pipeline, and leave the owner guessing.
              </p>
              <p>
                Voliber puts them under weekly control.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Discipline" />
            <ul className="divide-y divide-line border-y border-line">
              {operatingDiscipline.map((line) => (
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
            <SectionHeader title="Built for B2B service firms.">
              <p>
                For agencies, consultants, IT service providers, and professional service firms with invoice and proposal queues that no one consistently owns.
              </p>
            </SectionHeader>
            <div className="mt-10">
              <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function TheDesk() {
  return (
    <div className="border border-line bg-surface p-6 sm:p-8">
      <div className="border-b border-line pb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Operating desk</h2>
        <p className="mt-5 leading-7 text-muted">
          Voliber maintains a weekly register of open revenue.
        </p>
        <p className="mt-4 leading-7 text-muted">
          Each item is reviewed for value, age, clarity, risk, and required action. Clean items move through approved follow-up. Sensitive items are held. Every touch is recorded.
        </p>
      </div>
      <ul className="mt-6 grid gap-3 text-sm font-medium text-foreground">
        {deskItems.map((item) => (
          <li key={item} className="border-b border-line pb-3 last:border-b-0 last:pb-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
