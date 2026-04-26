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
        Receivables. Proposals. Payment failures. Dormant intent.
      </p>
    </PageShell>
  );
}
