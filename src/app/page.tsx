import Link from "next/link";
import { PageShell } from "@/components/site-chrome";

export default function Home() {
  return (
    <PageShell>
      <p>
        Voliber operates the decay layer of B2B service revenue — receivables,
        proposals, payment failures, and dormant intent that age past the point
        of attention.
      </p>
      <p>
        The work locates open value, ranks it by recoverability, acts inside
        approved limits, and reports state change. Method, notes, and a sample
        review format are linked below.
      </p>
      <p className="font-mono text-[14px] leading-7">
        <Link href="/how-it-works">Method</Link> ·{" "}
        <Link href="/notes">Notes</Link> ·{" "}
        <Link href="/sample-review">Sample review</Link> ·{" "}
        <Link href="/who-its-for">Who it&apos;s for</Link> ·{" "}
        <Link href="/contact">Contact</Link>
      </p>
    </PageShell>
  );
}
