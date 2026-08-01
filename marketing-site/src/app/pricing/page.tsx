import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PricingCard } from "@/components/pricing/pricing-card";
import { AddonsList } from "@/components/pricing/addons-list";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
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
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Pricing"
            title="Plans that grow with your store count"
            description="Every plan includes the full platform. Bigger plans support more stores and extra features. All plans are billed annually, and every plan starts with a free demo."
            className="max-w-2xl"
          />
        </Container>
        <Container className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
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

      <section className="pb-16 sm:pb-20">
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

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-headline font-semibold text-balance">
            Ready to see it on your stores?
          </h2>
          <Link href="/contact">
            <LiquidButton
              size="lg"
              className="text-foreground border-border/60 shadow-soft rounded-full border bg-background/50 px-8 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a free demo
              <ArrowRight className="size-4" />
            </LiquidButton>
          </Link>
          <p className="text-muted-foreground text-sm">No cost, no obligation.</p>
        </Container>
      </section>
    </>
  );
}
