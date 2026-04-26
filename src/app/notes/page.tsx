import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes on revenue decay and the research behind Voliber's method.",
};

const notes = [
  {
    title: "Late payment is a working-capital problem",
    body: "QuickBooks' 2025 Small Business Late Payments Report found that over half of surveyed US small businesses with unpaid invoices reported being owed money, averaging about $17.5K among those with outstanding invoices. It also reported that 47% had invoices overdue more than 30 days.",
    source: "QuickBooks 2025 Small Business Late Payments Report",
    href: "https://quickbooks.intuit.com/r/small-business-data/small-business-late-payments-report-2025/",
  },
  {
    title: "Reminders and salience matter, but generic reminders are weak",
    body: "Karlan, McConnell, Mullainathan, and Zinman found in randomized field experiments that reminders increased saving behavior, especially when the reminder made a specific goal salient.",
    source: "NBER Working Paper 16205",
    href: "https://www.nber.org/papers/w16205",
  },
  {
    title: "Personalization can outperform generic messaging",
    body: "Andris Saulitis' 2024 field experiment with 9,196 individuals found that personalized reminders improved payment rates versus generic reminders, while social or prosocial appeals did not meaningfully improve payment rates.",
    source: "Personalized messaging enhances hospital debt collection while prosocial appeals fail",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11443582/",
  },
  {
    title: "Legal and relationship control matter",
    body: "The FTC notes that business debts are not covered by the FDCPA. Florida OFR also describes registration requirements for commercial collection agencies collecting or soliciting commercial claims owed to another person. Voliber avoids debt-collection posture and keeps sensitive items under client control.",
    source: "FTC debt collection FAQs and Florida OFR commercial collection agencies",
    href: "https://consumer.ftc.gov/debt-collection-faqs",
    secondaryHref: "https://flofr.gov/divisions-offices/division-of-consumer-finance/commercial-collection-agencies",
  },
];

export default function NotesPage() {
  return (
    <>
      <PageIntro eyebrow="Notes" title="Notes on revenue decay">
        <p>
          Voliber applies existing research on late payments, reminders, receivables, and controlled communication to a narrow operating problem: unresolved revenue after commercial intent has already appeared.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-px bg-line">
            {notes.map((note) => (
              <article key={note.title} className="bg-surface p-6 sm:p-8">
                <SectionHeader title={note.title}>
                  <p>{note.body}</p>
                  <p className="text-base leading-7">
                    Source:{" "}
                    <a
                      href={note.href}
                      className="font-medium text-foreground underline decoration-line underline-offset-4"
                    >
                      {note.source}
                    </a>
                    {note.secondaryHref ? (
                      <>
                        {" "}
                        /{" "}
                        <a
                          href={note.secondaryHref}
                          className="font-medium text-foreground underline decoration-line underline-offset-4"
                        >
                          Florida OFR
                        </a>
                      </>
                    ) : null}
                  </p>
                </SectionHeader>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            Voliber does not treat this research as a proprietary model. It uses it to discipline a narrow operating process: identify unresolved value, rank friction, act under limits, and measure state change.
          </p>
        </Container>
      </Section>
    </>
  );
}
