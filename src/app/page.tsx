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
    text: "Old estimates and proposals assigned a next action or closed.",
  },
  {
    title: "Payment failures",
    text: "Failed or declined payments routed through approved retry and contact rules.",
  },
  {
    title: "Dormant opportunities",
    text: "Quiet leads and past conversations scheduled for measured reactivation or closure.",
  },
];

const deskItems = [
  "Open receivables",
  "Stalled proposals",
  "Failed payments",
  "Dormant opportunities",
];

const operatingDiscipline = [
  "Identify open revenue.",
  "Assign priority and next action.",
  "Run approved follow-up.",
  "Hold exceptions for review.",
  "Report what changed.",
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
                Voliber helps B2B service firms work the receivables, proposals, failed payments, and dormant opportunities already sitting inside their systems.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Prioritized. Approved. Logged. Reported weekly.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
                <SecondaryLink href="/how-it-works">View Operating Model</SecondaryLink>
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
              Voliber starts with the records already inside the business: invoice reports, A/R aging, proposal lists, failed payment records, inboxes, and CRM exports.
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
                None of these is dramatic by itself. Together, they tie up cash, blur the pipeline, and leave the owner guessing.
              </p>
              <p>
                Voliber turns those loose ends into a controlled weekly process.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Operating discipline" />
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
                Voliber is built for agencies, consultants, IT service providers, and professional service firms with invoice and proposal queues that no one consistently owns.
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
        <h2 className="text-2xl font-semibold tracking-tight">The desk</h2>
        <p className="mt-5 leading-7 text-muted">
          Voliber operates a weekly desk for open revenue.
        </p>
        <p className="mt-4 leading-7 text-muted">
          Each item is reviewed for value, age, clarity, risk, and next action. Clean items are worked through approved follow-up. Sensitive items are held for review. Every touch is recorded.
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
