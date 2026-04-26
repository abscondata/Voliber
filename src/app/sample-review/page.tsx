import type { Metadata } from "next";
import {
  Container,
  PageIntro,
  Section,
  SectionHeader,
} from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Sample Pipeline Review",
  description: "Illustrative Pipeline Review format from Voliber.",
};

export default function SampleReviewPage() {
  return (
    <>
      <PageIntro eyebrow="Sample" title="Sample Pipeline Review">
        <p>
          Illustrative format only. Mock data. This page shows the shape of the diagnostic a buyer receives, not client results.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <SectionHeader title="Source data reviewed" />
          <Table
            headers={["Source", "File/report/system", "Reliability", "Notes"]}
            rows={[
              ["[Source]", "[Report or export]", "[High / medium / low]", "[Notes]"],
              ["[Source]", "[Report or export]", "[High / medium / low]", "[Notes]"],
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Open revenue map" />
          <Table
            headers={["Category", "Count", "Value", "Age profile"]}
            rows={[
              ["Receivables", "[Count]", "[Value]", "[Age profile]"],
              ["Proposals", "[Count]", "[Value]", "[Age profile]"],
              ["Payment failures", "[Count]", "[Value]", "[Age profile]"],
              ["Dormant opportunities", "[Count]", "[Value]", "[Age profile]"],
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeader title="Priority items" />
          <Table
            headers={["Priority", "Item/category", "Reason", "Recommended handling"]}
            rows={[
              ["A", "[Item/category]", "[Clear value and source record]", "[Approved handling]"],
              ["B", "[Item/category]", "[Useful but requires context]", "[Measured handling]"],
              ["C", "[Item/category]", "[Low signal or unclear]", "[Close, hold, or monitor]"],
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="Aging observations" />
          <Table
            headers={["Bucket", "Count", "Value", "Risk"]}
            rows={[
              ["[Age bucket]", "[Count]", "[Value]", "[Risk]"],
              ["[Age bucket]", "[Count]", "[Value]", "[Risk]"],
            ]}
          />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <SectionHeader title="Held items" />
          <Table
            headers={["Reason held", "Item/category", "Required decision"]}
            rows={[
              ["[Dispute / sensitive account / unclear record]", "[Item/category]", "[Client decision needed]"],
              ["[Unusual terms / chargeback / legal threat]", "[Item/category]", "[Client decision needed]"],
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="45-day recommendation">
            <p>
              Normalize the records, confirm limits, work priority items first, hold sensitive items, and review state change at the end of the period.
            </p>
          </SectionHeader>
        </Container>
      </Section>
    </>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-8 overflow-x-auto border border-line">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-background text-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-b border-line px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted">
          {rows.map((row, rowIndex) => (
            <tr key={`${row.join("|")}-${rowIndex}`} className="border-b border-line last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-4 py-3 leading-6">
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
