import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { GuideChat } from "@/components/guide/guide-chat";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Guide me",
  description:
    "A preview of the LeafLedger assistant — ask questions about the product, its features, and pricing in plain language.",
  path: "/guide",
});

export default function GuidePage() {
  return (
    <section className="bg-page-tint py-16 sm:py-20">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="AI Assistant"
          title="Ask about LeafLedger"
          titleClassName="text-4xl sm:text-5xl font-bold"
          description="Not sure which plan fits, or whether a feature covers your workflow? Ask in plain language instead of digging through the site."
          className="max-w-2xl"
        />

        <GuideChat />
      </Container>
    </section>
  );
}
