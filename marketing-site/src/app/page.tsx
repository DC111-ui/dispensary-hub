import { Hero } from "@/components/sections/hero";
import { MockupCarousel } from "@/components/sections/mockup-carousel";
import { DeviceShowcase } from "@/components/sections/device-showcase";
import { ValueProps } from "@/components/sections/value-props";
import { FeatureHighlights } from "@/components/sections/feature-highlights";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ComplianceCallout } from "@/components/sections/compliance-callout";
import { SocialProof } from "@/components/sections/social-proof";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <MockupCarousel />
      <DeviceShowcase />
      <ValueProps />
      <FeatureHighlights />
      <HowItWorks />
      <ComplianceCallout />
      <SocialProof />
      <PricingTeaser />
      <FinalCta />
    </>
  );
}
