import type { Metadata } from "next";
import { Container, PageIntro, Section } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a review with Voliber.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Request Review">
        <p>
          Send the systems and unresolved items that need review. Voliber will respond with next steps for a Pipeline Review. The form opens an email draft to hello@voliber.com.
        </p>
      </PageIntro>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="max-w-md leading-7 text-muted">
                For direct email, use{" "}
                <a href="mailto:hello@voliber.com" className="font-medium text-foreground underline decoration-line underline-offset-4">
                  hello@voliber.com
                </a>
                .
              </p>
            </div>
            <form
              action="mailto:hello@voliber.com?subject=Review%20Request"
              method="post"
              encType="text/plain"
              className="border border-line bg-background p-5 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" autoComplete="name" />
                <Field label="Company" name="company" autoComplete="organization" />
                <Field label="Email" name="email" type="email" autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="mt-6">
                <Field label="What system do you use?" name="system" />
              </div>
              <label className="mt-6 block">
                <span className="text-sm font-semibold text-foreground">
                  Which unresolved items need review?
                </span>
                <textarea
                  name="unresolved_items"
                  rows={7}
                  className="mt-3 w-full border border-line bg-surface px-4 py-3 text-base leading-7 outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                  placeholder="Receivables, proposals, failed payments, dormant opportunities, source systems, or context."
                />
              </label>
              <p className="mt-5 text-sm leading-6 text-muted">
                Submitting opens an email draft addressed to Voliber. Review it, then send from your email client.
              </p>
              <button
                type="submit"
                className="mt-8 inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-5 text-sm font-semibold text-accent-ink transition-colors hover:bg-foreground"
              >
                Open Email Draft
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="mt-3 w-full border border-line bg-surface px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
      />
    </label>
  );
}
