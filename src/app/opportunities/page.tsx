import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Selective roles connected to Voliber's operating desk.",
};

const roles = [
  {
    title: "Operations Analyst",
    body: "Revenue review, source-record normalization, queue maintenance, and weekly operating support. Suitable for a detail-oriented operator with strong written judgment.",
    type: "Project-based / part-time",
  },
  {
    title: "Research & Systems Associate",
    body: "Applied research, workflow design, scoring logic, and internal tooling for revenue decay operations. Suitable for someone comfortable with data, writing, and controlled tooling.",
    type: "Project-based / part-time",
  },
  {
    title: "B2B Pipeline Analyst",
    body: "Prospect research, qualification, list building, and market mapping for B2B service firms.",
    type: "Project-based / part-time",
  },
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
        Voliber is built as a small operating desk. We are interested in people
        who can work with precision, discretion, and unusual attention to
        unresolved commercial value.
      </p>

      <section className="mt-16">
        <h2
          className="font-display text-[26px] font-normal text-foreground"
          style={{ letterSpacing: "-0.015em", lineHeight: 1.2 }}
        >
          Current searches
        </h2>
        <div className="mt-8 space-y-12">
          {roles.map((role) => (
            <article key={role.title}>
              <h3 className="text-[22px]">{role.title}</h3>
              <p className="mt-3 text-[19px] leading-[1.55] text-muted">
                {role.body}
              </p>
              <p className="mt-4 font-mono text-[13px] leading-6 text-muted">
                {role.type}
              </p>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-16 font-mono text-[13px] leading-6 text-muted">
        Send a short note and relevant work to{" "}
        <a href="mailto:hello@voliber.com">hello@voliber.com</a>.
      </p>
    </PageShell>
  );
}
