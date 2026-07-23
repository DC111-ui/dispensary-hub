import type { Metadata } from "next";

import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LeafLedger collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="text-muted-foreground mt-8 flex flex-col gap-6 text-base leading-7">
          <p>
            This is a placeholder privacy policy for the LeafLedger marketing site.
            LeafLedger is currently in an early, pre-launch phase — this page will be
            replaced with a complete privacy policy ahead of general availability.
          </p>
          <p>
            The information submitted through this site (for example, via the contact
            form) is used only to respond to your enquiry and is not shared with third
            parties for marketing purposes.
          </p>
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:hello@leafledger.example" className="text-primary underline">
              hello@leafledger.example
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
