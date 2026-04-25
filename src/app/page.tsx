import {
  Container,
  Eyebrow,
  PrimaryLink,
  SecondaryLink,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

const proofPoints = [
  "Work done inside your existing tools",
  "Every touch documented",
  "Fixed weekly cadence",
  "Sensitive escalations held for approval",
];

const handled = [
  {
    title: "Unpaid invoice follow-up",
    text: "Polite, persistent reminders for open balances before they become old problems.",
  },
  {
    title: "Stale estimate follow-up",
    text: "Clear check-ins on quotes that were sent, discussed, then allowed to sit.",
  },
  {
    title: "Missed-call and dormant lead follow-up",
    text: "Callbacks and reactivation touches for people who already showed intent.",
  },
  {
    title: "Weekly revenue recovery summary",
    text: "A concise report showing what moved, what stalled, and what needs your decision.",
  },
];

const previewSteps = [
  "You provide access or exports",
  "Voliber runs follow-up on a set schedule",
  "Every action is documented",
  "You get a weekly summary and keep control",
];

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <Eyebrow>Voliber revenue recovery</Eyebrow>
              <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                Unpaid invoices. Stale estimates. Missed revenue.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-muted">
                Voliber runs the follow-up process for small businesses so money already in your pipeline does not sit untouched.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/contact">Tell Us About Your Business</PrimaryLink>
                <SecondaryLink href="/how-it-works">See How It Works</SecondaryLink>
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
          <SectionHeader eyebrow="What Voliber handles" title="Focused follow-up for money already near the business." />
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
                Work gets done, the invoice goes out, and follow-up drifts. Estimates wait in inboxes. Missed calls get logged once. No one owns the rhythm, so the owner ends up chasing old balances after hours.
              </p>
              <p>
                Voliber gives the process an operator, a schedule, and a paper trail. The work is calm, documented, and controlled by the business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow="How it works" title="A fixed rhythm, not another loose task list." />
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
            <SectionHeader eyebrow="Who it is for" title="Built for small businesses where follow-up matters but no one owns it consistently.">
              <p>
                Voliber fits contractors, agencies, consultants, B2B service firms, and clinics with self-pay balances.
              </p>
            </SectionHeader>
            <div className="border-l border-line pl-6 text-lg leading-8 text-muted">
              It is for businesses with real records, real open items, and a clear need for disciplined follow-up without aggressive tactics.
            </div>
          </div>
        </Container>
      </Section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              If revenue is sitting in overdue invoices, stale estimates, or untouched follow-up queues, let us take a look.
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

function RecoveryLedger() {
  const rows = [
    ["Open invoices", "Aged", "Touch logged", "In motion"],
    ["Sent estimates", "Stale", "Reply requested", "Review"],
    ["Missed calls", "Recent", "Callback logged", "Queued"],
    ["Dormant leads", "Older", "Recheck scheduled", "Monitor"],
  ];

  return (
    <div className="border border-line bg-surface p-5 shadow-[0_24px_70px_rgba(22,22,21,0.08)]">
      <div className="flex items-start justify-between gap-6 border-b border-line pb-5">
        <div>
          <p className="text-sm font-semibold">Weekly recovery docket</p>
          <p className="mt-1 text-sm text-muted">Documented follow-up queue</p>
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
