import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ComplianceCallout } from "@/components/sections/compliance-callout";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeatureHighlights />
      <HowItWorks />
      <ComplianceCallout />
      <PricingTeaser />
      <FinalCta />
    </>
  );
}
