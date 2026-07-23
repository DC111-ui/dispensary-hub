import type { Metadata } from "next";

import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the LeafLedger website.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="text-muted-foreground mt-8 flex flex-col gap-6 text-base leading-7">
          <p>
            This is a placeholder terms of service page for the LeafLedger marketing
            site. Full terms of service will be published soon.
          </p>
          <p>
            By using this website, you agree not to misuse it or attempt to access it
            in a way that could disrupt or damage the site.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
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
