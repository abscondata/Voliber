import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Sample Review Format",
  description: "Illustrative sample review format from Voliber.",
};

const headerBlock: Array<[string, string]> = [
  ["Client", "[Redacted agency, LLC]"],
  ["Period", "14-day diagnostic"],
  ["Prepared", "[Date]"],
  ["Prepared by", "Voliber"],
];

const openValueRows = [
  ["Receivables", "47", "$182,400", "38"],
  ["Proposals open", "12", "$310,000", "21"],
  ["Payment failures", "3", "$9,200", "16"],
  ["Dormant leads", "28", "n/a", "94"],
];

const agingRows = [
  ["1–30 days", "22", "$84,100", "46%"],
  ["31–60 days", "14", "$54,800", "30%"],
  ["61–90 days", "7", "$28,500", "16%"],
  ["91+ days", "4", "$15,000", "8%"],
];

const priorityRows = [
  ["R-104", "Receivable", "$24,500", "42", "A"],
  ["P-019", "Proposal", "$48,000", "14", "A"],
  ["R-091", "Receivable", "$11,200", "67", "B"],
  ["P-007", "Proposal", "$22,000", "31", "B"],
  ["R-118", "Receivable", "$6,800", "19", "B"],
];

export default function SampleReviewPage() {
  return (
    <PageShell wide>
      <div className="max-w-[62ch]">
        <h1
          className="font-display text-[40px] font-normal sm:text-[56px]"
          style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}
        >
          Sample review format
        </h1>
        <p className="mt-4 text-[17px] italic leading-[1.5] text-muted">
          Illustrative format. All figures, names, and references are fabricated.
        </p>
      </div>

      <div className="mt-16 border-y border-line">
        <table className="w-full border-collapse font-mono text-[13px] tnum">
          <tbody>
            <tr>
              <td
                colSpan={2}
                className="py-3 font-mono text-[12px] uppercase text-muted"
                style={{ letterSpacing: "0.08em" }}
              >
                Pipeline review
              </td>
            </tr>
            {headerBlock.map(([key, value]) => (
              <tr key={key}>
                <th
                  scope="row"
                  className="w-[200px] py-3 pr-6 text-left font-normal text-muted"
                >
                  {key}
                </th>
                <td className="py-3 text-foreground">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Section number="1." title="Open value summary">
        <DataTable
          headers={["Object type", "Count", "Total value", "Median age (days)"]}
          rows={openValueRows}
          numericColumns={[1, 2, 3]}
        />
      </Section>

      <Section number="2." title="Aging distribution — receivables">
        <DataTable
          headers={["Bucket", "Count", "Value", "Share"]}
          rows={agingRows}
          numericColumns={[1, 2, 3]}
        />
      </Section>

      <Section number="3." title="Priority items — top 10 (excerpt)">
        <p className="max-w-[62ch] text-[19px] leading-[1.55]">
          Ranked by value × recovery probability, less relationship-risk
          adjustment.
        </p>
        <DataTable
          headers={["ID", "Type", "Value", "Age", "Priority"]}
          rows={priorityRows}
          numericColumns={[2, 3, 4]}
        />
      </Section>

      <Section number="4." title="Held items">
        <p className="max-w-[62ch] text-[19px] leading-[1.55]">
          Three items held from active follow-up: one disputed receivable, one
          strategic-account proposal, one item with insufficient context for
          clean action. Detailed in appendix.
        </p>
      </Section>

      <Section number="5." title="45-day operating recommendation">
        <p className="max-w-[62ch] text-[19px] leading-[1.55]">
          Cadence and channel recommendations by object type. Approval gates
          defined. Exception-handling protocol noted. Reporting cadence weekly,
          with a 45-day close-out review.
        </p>
      </Section>
    </PageShell>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2
        className="font-display text-[24px] font-normal text-foreground"
        style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
      >
        <span className="mr-3 inline-block w-7 text-muted">{number}</span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function DataTable({
  headers,
  rows,
  numericColumns,
}: {
  headers: string[];
  rows: string[][];
  numericColumns: number[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[640px] border-collapse font-mono text-[13px] tnum">
        <thead>
          <tr className="border-b border-line">
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                className="py-3 font-normal uppercase text-muted"
                style={{
                  letterSpacing: "0.06em",
                  paddingLeft: numericColumns.includes(index) ? "1.5rem" : 0,
                  paddingRight: numericColumns.includes(index) ? 0 : "1.5rem",
                  textAlign: numericColumns.includes(index) ? "right" : "left",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")} className="border-b border-line">
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${cell}-${index}`}
                  className="py-3 text-foreground"
                  style={{
                    paddingLeft: numericColumns.includes(index) ? "1.5rem" : 0,
                    paddingRight: numericColumns.includes(index) ? 0 : "1.5rem",
                    textAlign: numericColumns.includes(index) ? "right" : "left",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
