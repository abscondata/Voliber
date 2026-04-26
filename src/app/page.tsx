import {
  Container,
  Eyebrow,
  PrimaryLink,
  SecondaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

const proofPoints = [
  "Classification before action",
  "Approval rules govern contact",
  "Exception control stays visible",
  "Weekly movement reporting",
];

const revenueObjects = [
  {
    title: "Receivables",
    text: "Open invoices grouped by age, amount, clarity, and risk before follow-up begins.",
  },
  {
    title: "Proposals",
    text: "Stale estimates and proposals reviewed for timing, value, and next decision.",
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

const controlLoop = [
  {
    title: "Identify",
    text: "Source open revenue from existing systems.",
  },
  {
    title: "Classify",
    text: "Separate invoices, proposals, leads, payment failures, disputes, and approval-required items.",
  },
  {
    title: "Prioritize",
    text: "Rank by value, age, clarity, movement probability, and relationship risk.",
  },
  {
    title: "Execute",
    text: "Run approved follow-up through agreed timing, tone, and channel rules.",
  },
  {
    title: "Update",
    text: "Record every touch, result, exception, and next action.",
  },
  {
    title: "Report",
    text: "Show weekly movement, unresolved risk, and decisions needed.",
  },
];

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <Eyebrow>Working-capital discipline</Eyebrow>
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                Working-capital discipline for open revenue queues.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                Voliber helps B2B service firms identify, prioritize, and work the unpaid invoices, stale proposals, failed payments, and dormant leads already sitting inside their systems.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Each item is classified, worked through approved rules, logged, escalated when needed, and reported back as weekly movement.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
                <SecondaryLink href="/how-it-works">View Operating Model</SecondaryLink>
              </div>
            </div>
            <RevenueQueueLedger />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point} className="bg-surface px-5 py-6 text-sm font-medium text-foreground">
                {point}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader title="Revenue objects under management">
            <p>
              Voliber works the revenue objects that usually sit between accounting, sales, and owner memory.
            </p>
          </SectionHeader>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {revenueObjects.map((item) => (
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
            <SectionHeader title="The cost of unmanaged revenue" />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Revenue leakage rarely appears as one obvious failure. It appears as aging invoices, old proposals, missed replies, and failed payments with no assigned next action.
              </p>
              <p>
                The longer those objects sit unworked, the more uncertainty compounds. Voliber gives the queue ownership, priority, controls, and a weekly record of movement.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Control loop" />
            <ol className="grid gap-px bg-line sm:grid-cols-2">
              {controlLoop.map((step, index) => (
                <li key={step.title} className="bg-background p-6 sm:p-8">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <p className="mt-4 text-lg font-semibold tracking-tight">{step.title}</p>
                  <p className="mt-3 leading-7 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionHeader title="Built for B2B service firms and agencies.">
              <p>
                Voliber fits firms with invoice, proposal, and dormant opportunity queues that no one consistently owns.
              </p>
            </SectionHeader>
            <div className="border-l border-line pl-6 text-lg leading-8 text-muted">
              The model is narrow by design: existing source systems, defined approval rules, controlled execution, and weekly movement reporting.
            </div>
          </div>
        </Container>
      </Section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              If open revenue queues are aging without ownership, request a Pipeline Review.
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

function RevenueQueueLedger() {
  const rows = [
    ["Invoice", "12 days aged", "Clean record", "Approved touch sent"],
    ["Proposal", "21 days idle", "Medium value", "Decision requested"],
    ["Failed payment", "Retry needed", "Approval required", "Held"],
    ["Dormant lead", "Low signal", "Recheck scheduled", "Monitor"],
  ];

  return (
    <div className="border border-line bg-surface p-5 shadow-[0_24px_70px_rgba(22,22,21,0.08)]">
      <div className="flex items-start justify-between gap-6 border-b border-line pb-5">
        <div>
          <p className="text-sm font-semibold">Revenue queue ledger</p>
          <p className="mt-1 text-sm text-muted">Controlled weekly operating record</p>
        </div>
        <span className="border border-accent-soft bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          Active
        </span>
      </div>
      <div className="divide-y divide-line">
        {rows.map((row) => (
          <div key={row[0]} className="grid grid-cols-[1.15fr_0.75fr] gap-4 py-4 text-sm sm:grid-cols-[0.75fr_0.85fr_1fr_1fr]">
            <span className="font-medium text-foreground">{row[0]}</span>
            <span className="text-muted">{row[1]}</span>
            <span className="text-muted">{row[2]}</span>
            <span className="font-mono text-foreground">{row[3]}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-line pt-5 text-sm leading-6 text-muted">
        Control stays with the business. Disputes, unusual requests, and sensitive accounts are held under approval rules.
      </div>
    </div>
  );
}
