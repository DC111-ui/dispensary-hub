import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Book your free demo or get in touch with the LeafLedger team.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[] }>;
}) {
  const { plan } = await searchParams;
  const defaultPlan = Array.isArray(plan) ? plan[0] : plan;

  return (
    <section className="py-16 sm:py-20">
      <Container className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Contact"
          title="Book your free demo"
          description="Tell us a little about your store. We'll set up a free walkthrough made just for you. No cost, no obligation."
          align="center"
          className="mx-auto mb-10"
        />
        <ContactForm defaultPlan={defaultPlan} />
      </Container>
    </section>
  );
}
