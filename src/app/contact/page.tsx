import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Voliber.",
};

const inputClass =
  "w-full rounded-none border border-[#cccccc] bg-transparent px-3 py-3 text-[17px] leading-[1.4] text-foreground outline-none focus:border-[#111111]";

const labelClass =
  "mb-3 block font-mono text-[12px] uppercase leading-none text-muted";

const labelStyle = { letterSpacing: "0.08em" } as const;

export default function ContactPage() {
  return (
    <PageShell>
      <h1
        className="font-display text-[56px] font-normal sm:text-[88px]"
        style={{ letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Contact
      </h1>

      <p className="mt-12 max-w-[62ch] text-[19px] leading-[1.55]">
        For review requests, send the systems and unresolved items that need
        review.
      </p>

      <p className="mt-6 font-mono text-[13px] leading-6 text-muted">
        <a href="mailto:hello@voliber.com">hello@voliber.com</a>
      </p>

      <form
        action="mailto:hello@voliber.com"
        method="post"
        encType="text/plain"
        className="mt-16 space-y-8"
      >
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Company" name="company" autoComplete="organization" required />
        <label className="block">
          <span className={labelClass} style={labelStyle}>
            Note
          </span>
          <textarea
            name="note"
            rows={6}
            required
            className={inputClass}
          />
        </label>
        <button
          type="submit"
          className="font-display rounded-none border border-foreground bg-transparent px-8 py-3 text-[17px] font-normal leading-none text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Send
        </button>
      </form>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass} style={labelStyle}>
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={inputClass}
      />
    </label>
  );
}
