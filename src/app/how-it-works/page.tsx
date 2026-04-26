import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Method",
  description: "Voliber's method for operating the decay layer of B2B service revenue.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <h1 className="text-4xl sm:text-5xl">Method</h1>
      <p>
        Revenue decay begins after commercial intent is recorded but before
        cash, closure, or decision. An invoice issued is not cash. A proposal
        sent is not a decision. A failed payment is not a closed transaction. A
        dormant lead is not a dead one. These are unresolved positions inside
        the business, and most firms do not lose revenue in a single visible
        event — they lose it through aging.
      </p>
      <p>
        The operating model is direct. Open items are inventoried from existing
        records: receivables, proposals, payment failures, CRM exports, inbox
        history, owner context. Each item is classified by type and current
        state, then ranked on a defined feature set — value, age, clarity,
        friction, recovery probability, and relationship risk. Action proceeds
        inside client-approved limits, with sensitive items held for owner
        review. Each touch is logged. Each state change is reported.
      </p>
      <p>
        The output is not cash alone. It is state change: paid, replied, closed,
        escalated, held, or deprioritized. Closure has value independent of
        recovery. Items that cannot move are documented and removed from the
        active queue rather than left to age silently.
      </p>
      <pre className="mt-12 overflow-x-auto border-t border-line pt-6 font-mono text-[13px] leading-7 text-foreground tnum">
{`Object types     receivable · proposal · payment failure · dormant lead
States           open · aging · acted · replied · disputed · held · paid · closed
Ranking inputs   value · age · clarity · friction · recovery probability · relationship risk
Outputs          paid · replied · closed · escalated · held · scheduled`}
      </pre>
    </PageShell>
  );
}
