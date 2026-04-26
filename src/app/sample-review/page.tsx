import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Sample Review Format",
  description: "Illustrative sample review format from Voliber.",
};

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
        <h1 className="text-4xl sm:text-5xl">Sample review format</h1>
        <p className="italic text-muted">
          Illustrative format. All figures, names, and references are fabricated.
        </p>
      </div>

      <pre className="mt-12 overflow-x-auto border-y border-line py-6 font-mono text-[13px] leading-7 text-foreground tnum">
{`PIPELINE REVIEW
Client            [Redacted agency, LLC]
Period            14-day diagnostic
Prepared          [Date]
Prepared by       Voliber`}
      </pre>

      <section className="mt-12">
        <h2 className="text-2xl">1. Open value summary</h2>
        <DataTable
          headers={["Object type", "Count", "Total value", "Median age (days)"]}
          rows={openValueRows}
          numericColumns={[1, 2, 3]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">2. Aging distribution — receivables</h2>
        <DataTable
          headers={["Bucket", "Count", "Value", "Share"]}
          rows={agingRows}
          numericColumns={[1, 2, 3]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">3. Priority items — top 10 (excerpt)</h2>
        <p className="max-w-[62ch]">
          Ranked by value × recovery probability, less relationship-risk
          adjustment.
        </p>
        <DataTable
          headers={["ID", "Type", "Value", "Age", "Priority"]}
          rows={priorityRows}
          numericColumns={[2, 3, 4]}
        />
      </section>

      <section className="mt-12 max-w-[62ch]">
        <h2 className="text-2xl">4. Held items</h2>
        <p>
          Three items held from active follow-up: one disputed receivable, one
          strategic-account proposal, one item with insufficient context for
          clean action. Detailed in appendix.
        </p>
      </section>

      <section className="mt-12 max-w-[62ch]">
        <h2 className="text-2xl">5. 45-day operating recommendation</h2>
        <p>
          Cadence and channel recommendations by object type. Approval gates
          defined. Exception-handling protocol noted. Reporting cadence weekly,
          with a 45-day close-out review.
        </p>
      </section>
    </PageShell>
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
    <div className="mt-5 overflow-x-auto">
      <table className="min-w-[640px] border-collapse font-mono text-[13px] leading-6 tnum">
        <thead>
          <tr className="border-b border-line">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`py-2 font-normal ${
                  numericColumns.includes(index) ? "pl-6 text-right" : "pr-6 text-left"
                }`}
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
                  className={`py-2 ${
                    numericColumns.includes(index) ? "pl-6 text-right" : "pr-6 text-left"
                  }`}
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
