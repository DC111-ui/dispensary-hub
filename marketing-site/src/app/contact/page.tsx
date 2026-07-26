import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageRibbon } from "@/components/shared/page-ribbon";
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
    <section className="bg-page-tint relative isolate min-h-[calc(100vh-4rem)] overflow-hidden py-16 sm:py-20">
      <PageRibbon className="top-[75%] left-[-25%] rotate-[8deg]" />
      <Container className="relative flex justify-center">
        <div className="border-border bg-card w-full max-w-2xl rounded-2xl border p-8 shadow-xl sm:p-10">
          <div className="mb-8 flex flex-col gap-2 text-center">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Contact
            </span>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Book your free demo
            </h1>
            <p className="text-muted-foreground">
              Tell us a little about your store. We&apos;ll set up a free walkthrough made just
              for you. No cost, no obligation.
            </p>
          </div>
          <ContactForm defaultPlan={defaultPlan} />
        </div>
      </Container>
    </section>
  );
}
