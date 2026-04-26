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
  "Client-approved follow-up",
  "Exceptions held for review",
  "Weekly movement reporting",
];

const handled = [
  {
    title: "Open invoice queues",
    text: "Unpaid invoices are grouped by age, clarity, value, and relationship risk before follow-up begins.",
  },
  {
    title: "Stale estimate and proposal queues",
    text: "Old estimates and proposals get a fixed review rhythm instead of sitting without a next action.",
  },
  {
    title: "Dormant lead and failed payment queues",
    text: "Quiet leads and failed payments are worked through approved timing, channels, and escalation rules.",
  },
  {
    title: "Weekly movement report",
    text: "A concise report shows what was worked, what moved, and which items need a decision.",
  },
];

const previewSteps = [
  "Source data is reviewed",
  "Revenue objects are classified",
  "A/B/C priorities are set",
  "Approved follow-up is logged",
];

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <Eyebrow>Revenue follow-up operations</Eyebrow>
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                Revenue follow-up operations for open money already in motion.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                Voliber helps small businesses work the unpaid invoices, stale estimates, dormant leads, and failed payments already sitting inside their systems.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                A controlled weekly process for classification, approved follow-up, exception handling, and movement reporting.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">Request a Pipeline Review</PrimaryLink>
                <SecondaryLink href="/how-it-works">See Operating Model</SecondaryLink>
              </div>
            </div>
            <RecoveryLedger />
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
          <SectionHeader eyebrow="What Voliber handles" title="Open revenue queues that need ownership." />
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {handled.map((item) => (
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
            <SectionHeader eyebrow="Why this matters" title="Revenue leakage compounds quietly." />
            <div className="space-y-6 text-lg leading-8 text-muted">
              <p>
                Work gets done, the invoice goes out, and follow-up drifts. Proposals wait in inboxes. Failed payments get noted once. No one owns the queue, so open money ages without a clear next action.
              </p>
              <p>
                Voliber gives the queue a weekly owner, approval rules, and a record of movement. The work is calm, documented, and controlled by the business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow="Operating loop" title="A weekly rhythm for classifying and moving open revenue." />
            <ol className="grid gap-px bg-line sm:grid-cols-2">
              {previewSteps.map((step, index) => (
                <li key={step} className="bg-background p-6 sm:p-8">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <p className="mt-4 text-lg font-semibold tracking-tight">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <SectionHeader eyebrow="First focus" title="Built for B2B service firms and agencies with invoice and proposal queues.">
              <p>
                Voliber fits marketing agencies, web design firms, IT service providers, consultants, and small professional service firms.
              </p>
            </SectionHeader>
            <div className="border-l border-line pl-6 text-lg leading-8 text-muted">
              It is for firms with real records, open items, and a clear need for disciplined follow-up without aggressive tactics.
            </div>
          </div>
        </Container>
      </Section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              If unpaid invoices, old proposals, failed payments, or dormant leads are aging without an owner, request a pipeline review.
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

function RecoveryLedger() {
  const rows = [
    ["Late invoice", "A priority", "Approved touch", "Logged"],
    ["Stale proposal", "B priority", "Reply requested", "Open"],
    ["Failed payment", "A priority", "Approval needed", "Held"],
    ["Dormant lead", "C priority", "Recheck scheduled", "Monitor"],
  ];

  return (
    <div className="border border-line bg-surface p-5 shadow-[0_24px_70px_rgba(22,22,21,0.08)]">
      <div className="flex items-start justify-between gap-6 border-b border-line pb-5">
        <div>
          <p className="text-sm font-semibold">Weekly recovery docket</p>
          <p className="mt-1 text-sm text-muted">Documented operating queue</p>
        </div>
        <span className="border border-accent-soft bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          Active
        </span>
      </div>
      <div className="divide-y divide-line">
        {rows.map((row) => (
          <div key={row[0]} className="grid grid-cols-[1.15fr_0.75fr] gap-4 py-4 text-sm sm:grid-cols-[1.1fr_0.7fr_1fr_0.6fr]">
            <span className="font-medium text-foreground">{row[0]}</span>
            <span className="text-muted">{row[1]}</span>
            <span className="text-muted">{row[2]}</span>
            <span className="font-mono text-foreground">{row[3]}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 border-t border-line pt-5 text-sm leading-6 text-muted">
        Control stays with the business. Disputes, unusual requests, and sensitive accounts are held for approval.
      </div>
    </div>
  );
}
