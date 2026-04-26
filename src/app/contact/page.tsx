import type { Metadata } from "next";
import { PageShell } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Voliber.",
};

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
        For client reviews or operator inquiries, write to Voliber directly.
      </p>

      <p className="mt-6 font-mono text-[13px] leading-6 text-muted">
        <a href="mailto:hello@voliber.com">hello@voliber.com</a>
      </p>

      <a
        href="mailto:hello@voliber.com?subject=Voliber%20Inquiry"
        className="mt-16 inline-flex font-display rounded-none border border-foreground bg-transparent px-8 py-3 text-[17px] font-normal leading-none text-foreground no-underline transition-colors hover:bg-foreground hover:text-background"
      >
        Open Email Draft
      </a>
    </PageShell>
  );
}
