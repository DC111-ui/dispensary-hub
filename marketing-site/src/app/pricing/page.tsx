import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageRibbon } from "@/components/shared/page-ribbon";
import { PricingCard } from "@/components/pricing/pricing-card";
import { AddonsList } from "@/components/pricing/addons-list";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PRICING_TIERS, PRICING_FAQ } from "@/lib/constants/pricing";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Simple, transparent LeafLedger pricing, from a single store to a chain with many branches. Every plan starts with a free demo.",
  path: "/pricing",
});

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const OFFERS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: PRICING_TIERS.filter((tier) => /^R[\d,]+$/.test(tier.price)).map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price.replace(/[^0-9]/g, ""),
    priceCurrency: "ZAR",
    description: tier.description,
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFERS_JSON_LD) }}
      />
      <section className="bg-page-tint relative isolate overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
        <PageRibbon className="top-[55%] right-[-30%]" />
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Plans that grow with your store count"
            titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold"
            description="Every plan includes the full platform. Bigger plans support more stores and extra features. All plans are billed annually, and every plan starts with a free demo."
            className="max-w-2xl"
          />
        </Container>
        <Container className="relative mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Add-ons"
            title="Extend any plan"
            align="center"
            className="mx-auto"
          />
          <AddonsList />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            align="center"
            className="mx-auto"
          />
          <PricingFaq />
        </Container>
      </section>
    </>
  );
}
