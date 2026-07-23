import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL } from "@/lib/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing use of the LeafLedger website.",
  path: "/terms",
});

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
            These terms govern your use of this website. By using this site,
            you agree to them.
          </p>

          <div>
            <h2 className="text-foreground font-semibold">Using this site</h2>
            <p className="mt-2">
              You agree not to misuse this site: no scraping, no attempting to
              disrupt or damage it, and no impersonating anyone in the contact
              form.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">Booking a demo</h2>
            <p className="mt-2">
              Submitting the contact form books you a free walkthrough of
              LeafLedger. It doesn&apos;t create a contract, subscription, or
              any payment obligation. Any agreement to use LeafLedger as a
              customer would be covered by a separate agreement at that time.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">Content</h2>
            <p className="mt-2">
              The text, design, and branding on this site belong to
              LeafLedger and may not be copied or reused without permission.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">No warranty</h2>
            <p className="mt-2">
              This site is provided as-is. We try to keep information
              accurate and up to date, but we don&apos;t guarantee the site
              will always be available or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of South Africa.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">Changes</h2>
            <p className="mt-2">
              If these terms change, we&apos;ll update this page and the
              &quot;last updated&quot; year above.
            </p>
          </div>

          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
