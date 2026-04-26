import { PageShell } from "@/components/site-chrome";

export default function Home() {
  return (
    <PageShell>
      <h1
        className="font-display text-[42px] font-normal leading-[1.1] sm:text-[64px]"
        style={{ letterSpacing: "-0.02em" }}
      >
        Revenue decay operations.
      </h1>
      <p className="mt-6 text-[19px] leading-[1.55] text-muted">
        Receivables, proposals, payment failures, dormant opportunities.
      </p>
      <p className="mt-10 font-mono text-[13px] leading-[1.7] text-muted">
        Approach and sample format available above.
      </p>
    </PageShell>
  );
}
