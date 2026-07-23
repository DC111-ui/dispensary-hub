import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL, INFORMATION_OFFICER_NAME } from "@/lib/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How LeafLedger collects, uses, and protects your information.",
  path: "/privacy",
});

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
            LeafLedger (&quot;we&quot;, &quot;us&quot;) operates this website from
            Pretoria, South Africa. This policy explains what information we
            collect when you use this site, and how we handle it.
          </p>

          <div>
            <h2 className="text-foreground font-semibold">What we collect</h2>
            <p className="mt-2">
              When you submit the contact form to book a demo, we collect your
              name, email address, phone number (if you provide one), business
              or store name, number of stores, the plan you&apos;re interested
              in, and any message you write. We don&apos;t collect any other
              personal information through this site, and we don&apos;t use
              tracking cookies or third-party analytics.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">How we use it</h2>
            <p className="mt-2">
              We use this information only to respond to your enquiry and set
              up your demo. It&apos;s stored in a private record accessible
              only to our team, and is never sold or shared with third parties
              for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">
              Your rights under POPIA
            </h2>
            <p className="mt-2">
              As a South African business, we handle personal information in
              line with the Protection of Personal Information Act (POPIA).
              You can ask us at any time to access, correct, or delete the
              information we hold about you. Our Information Officer is{" "}
              {INFORMATION_OFFICER_NAME}, reachable at the email address
              below.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold">Changes</h2>
            <p className="mt-2">
              If this policy changes, we&apos;ll update this page and the
              &quot;last updated&quot; year above.
            </p>
          </div>

          <p>
            Questions about this policy, or requests about your information,
            can be sent to{" "}
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
