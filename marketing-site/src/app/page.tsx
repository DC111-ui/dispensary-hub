import { Hero } from "@/components/sections/hero";
import { FeaturesIntro } from "@/components/sections/features-intro";
import { MockupCarousel } from "@/components/sections/mockup-carousel";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesIntro />
      <MockupCarousel />
      <PricingPreview />
      <TestimonialCarousel />
      <FinalCta />
    </>
  );
}
