import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Method",
  description: "Voliber's method for operating the decay layer of B2B service revenue.",
};

const definitions: Array<[string, string]> = [
  ["Object types", "receivable · proposal · payment failure · dormant lead"],
  [
    "States",
    "open · aging · acted · replied · disputed · held · paid · closed",
  ],
  [
    "Ranking inputs",
    "value · age · clarity · friction · recovery probability · relationship risk",
  ],
  ["Outputs", "paid · replied · closed · escalated · held · scheduled"],
];

export default function HowItWorksPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Method
      </h1>
      <p className="mt-6 font-mono text-[13px] leading-6 text-muted">
        operating model
      </p>

      <div className="mt-12 max-w-[62ch] space-y-[1.2em] text-[19px] leading-[1.55]">
        <p>
          Revenue decay begins after commercial intent is recorded but before
          cash, closure, or decision. An invoice issued is not cash. A proposal
          sent is not a decision. A failed payment is not a closed transaction.
          A dormant lead is not a dead one. These are unresolved positions
          inside the business, and most firms do not lose revenue in a single
          visible event — they lose it through aging.
        </p>
        <p>
          The operating model is direct. Open items are inventoried from
          existing records: receivables, proposals, payment failures, CRM
          exports, inbox history, owner context. Each item is classified by
          type and current state, then ranked on a defined feature set — value,
          age, clarity, friction, recovery probability, and relationship risk.
          Action proceeds inside client-approved limits, with sensitive items
          held for owner review. Each touch is logged. Each state change is
          reported.
        </p>
        <p>
          The output is not cash alone. It is state change: paid, replied,
          closed, escalated, held, or deprioritized. Closure has value
          independent of recovery. Items that cannot move are documented and
          removed from the active queue rather than left to age silently.
        </p>
      </div>

      <table className="mt-16 w-full border-collapse border-t border-line font-mono text-[13px] tnum">
        <tbody>
          {definitions.map(([key, value]) => (
            <tr key={key} className="border-b border-line align-top">
              <th
                scope="row"
                className="w-[200px] py-6 pr-6 text-left font-normal text-muted"
              >
                {key}
              </th>
              <td className="py-6 text-foreground">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageShell>
  );
}
