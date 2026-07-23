import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/pricing/pricing-card";
import { PRICING_TIERS } from "@/lib/constants/pricing";

function PricingTeaser() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent plans"
          description="Pick the tier that matches how many stores you run. Switch anytime."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <Link href="/pricing" className="mx-auto">
          <Button variant="outline">
            See full pricing details
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </Container>
    </section>
  );
}

export { PricingTeaser };
