import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Selective roles connected to Voliber's operating desk.",
};

const roles = [
  {
    title: "Revenue Operations Analyst",
    type: "Project-based / part-time",
    function:
      "Normalize and review receivable, proposal, payment, and CRM records.",
    responsibilities: [
      "Review A/R aging, invoice, proposal, payment, CRM, and inbox exports.",
      "Clean inconsistent records into a usable operating format.",
      "Flag duplicates, missing fields, unclear dates, disputed items, and unreliable source data.",
      "Maintain status, priority, risk, and outcome fields.",
      "Prepare short notes for items requiring review.",
    ],
    qualifications: [
      "1+ year in operations, finance operations, billing, bookkeeping, compliance, data operations, or similar.",
      "Strong Excel or Google Sheets skills: filters, lookups, pivots, conditional formatting, and basic data cleaning.",
      "Comfortable with messy exports and large spreadsheets.",
      "Strong written judgment and attention to detail.",
      "Able to follow rules without improvising sensitive decisions.",
      "Experience with QuickBooks, Xero, FreshBooks, HubSpot, Stripe, or Airtable is useful.",
    ],
  },
  {
    title: "Research & Systems Associate",
    type: "Project-based / part-time",
    function:
      "Support the internal method, review logic, reporting templates, and operating documentation.",
    responsibilities: [
      "Turn operating observations into fields, rules, templates, and checklists.",
      "Test prioritization logic against sample or anonymized data.",
      "Improve spreadsheet models, schemas, reports, and internal documentation.",
      "Research receivables, payment friction, reminder behavior, and B2B service workflows.",
      "Document assumptions, limitations, and edge cases.",
    ],
    qualifications: [
      "1+ year in analytical, research, finance, systems, data, or operations work.",
      "Strong spreadsheet ability and structured writing.",
      "Familiarity with at least one analytical tool: SQL, Python, R, Airtable, advanced Excel/Sheets, or similar.",
      "Able to work from incomplete information without overstating certainty.",
      "Strong attention to process failure, exceptions, and data quality.",
      "Experience with SOPs, schemas, QA checklists, or reporting workflows is useful.",
    ],
  },
  {
    title: "B2B Pipeline Analyst",
    type: "Project-based / part-time",
    function: "Research and qualify B2B service firms for controlled outreach.",
    responsibilities: [
      "Build prospect lists across agencies, IT services, consultants, and professional service firms.",
      "Identify owners, partners, finance, operations, and principal contacts.",
      "Collect company, website, geography, size, buyer title, email, LinkedIn, source, and fit notes.",
      "Apply qualification rules before adding prospects.",
      "Remove poor-fit companies before outreach.",
    ],
    qualifications: [
      "1+ year in B2B research, sales operations, recruiting research, market mapping, data entry, or similar.",
      "Strong web research ability across company sites, LinkedIn, directories, and search.",
      "Able to judge whether a business likely has invoice/proposal workflows.",
      "Accurate spreadsheet work and concise fit notes.",
      "Familiarity with Apollo, LinkedIn Sales Navigator, Clay, Instantly, Google Sheets, CRM exports, or email verification tools is useful.",
    ],
  },
];

const applicationNotes = [
  "Send a resume, LinkedIn profile, and a short note on the role to hello@voliber.com.",
  "For operations or research roles, include a work sample if available: cleaned spreadsheet, data-quality checklist, operating memo, schema, research note, or writing sample.",
  "For pipeline research, include a short example of how you would qualify a B2B service firm before outreach.",
  "Do not send confidential client, employer, or customer material.",
  "Voliber reviews applications selectively and may not respond to every inquiry.",
];

export default function OpportunitiesPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Opportunities
      </h1>

      <p className="mt-12 max-w-[62ch] text-[19px] leading-[1.55]">
        Voliber is building a small operating desk for unresolved B2B service
        revenue. Current searches are project-based or part-time unless
        otherwise noted.
      </p>

      <section className="mt-16">
        <h2
          className="font-display text-[26px] font-normal text-foreground"
          style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
        >
          Current searches
        </h2>
        <div className="mt-10 space-y-16">
          {roles.map((role) => (
            <article key={role.title}>
              <h3 className="text-[24px]">{role.title}</h3>
              <p className="mt-2 font-mono text-[13px] leading-6 text-muted">
                {role.type}
              </p>
              <p className="mt-5 text-[19px] leading-[1.55]">
                {role.function}
              </p>
              <RoleList title="Responsibilities" items={role.responsibilities} />
              <RoleList title="Qualifications" items={role.qualifications} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-10">
        <h2
          className="font-display text-[26px] font-normal text-foreground"
          style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
        >
          How to apply
        </h2>
        <div className="mt-6 space-y-4 text-[19px] leading-[1.55] text-muted">
          {applicationNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function RoleList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-8">
      <p className="font-mono text-[12px] uppercase leading-6 text-muted">
        {title}
      </p>
      <ul className="mt-3 space-y-3 text-[17px] leading-[1.45] text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
