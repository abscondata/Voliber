import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Voliber.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <h1 className="text-4xl sm:text-5xl">Contact</h1>
      <p>
        Pipeline reviews are scheduled directly. To request one, send a brief
        note describing your business, approximate annual revenue, and the
        records you have available.
      </p>

      <form
        action="mailto:hello@voliber.com"
        method="post"
        encType="text/plain"
        className="mt-12 space-y-6"
      >
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Company" name="company" autoComplete="organization" required />
        <label className="block">
          <span className="mb-2 block font-mono text-[13px] text-muted">Note</span>
          <textarea
            name="note"
            rows={6}
            required
            className="w-full border border-line bg-background px-3 py-2 text-foreground outline-none"
          />
        </label>
        <button
          type="submit"
          className="border border-foreground bg-background px-4 py-2 font-mono text-[13px] text-foreground"
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
      <span className="mb-2 block font-mono text-[13px] text-muted">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full border border-line bg-background px-3 py-2 text-foreground outline-none"
      />
    </label>
  );
}
