import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PricingCard } from "@/components/pricing/pricing-card";
import { AddonsList } from "@/components/pricing/addons-list";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { PRICING_TIERS } from "@/lib/constants/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent LeafLedger pricing for regulated retailers — from a single store to a multi-store enterprise operation.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Plans that grow with your store count"
            description="Every plan includes the core platform. Higher tiers unlock more stores and deeper compliance features."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
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
