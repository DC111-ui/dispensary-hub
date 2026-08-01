import Link from "next/link";
import { ArrowRight, Check, Gem, User } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { PRICING_TIERS } from "@/lib/constants/pricing";
import { cn } from "@/lib/utils";

const PREVIEW_TIER_IDS = ["starter", "enterprise"] as const;
const PREVIEW_ICONS = { starter: User, enterprise: Gem };

function PricingPreview() {
  const tiers = PREVIEW_TIER_IDS.map((id) => PRICING_TIERS.find((tier) => tier.id === id)).filter(
    (tier): tier is NonNullable<typeof tier> => Boolean(tier)
  );

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent plans"
          description="Pick the plan that matches how many stores you run. Every plan starts with a free demo."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <Reveal>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {tiers.map((tier) => {
              const Icon = PREVIEW_ICONS[tier.id as keyof typeof PREVIEW_ICONS];
              return (
                <div
                  key={tier.id}
                  className="border-border/70 bg-card flex flex-col gap-6 rounded-3xl border p-8 sm:p-10"
                >
                  <span className="bg-foreground text-background flex size-10 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </span>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold">{tier.name} Plan</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                      {tier.billingNote ? (
                        <span className="text-muted-foreground text-sm">{tier.billingNote}</span>
                      ) : null}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {tier.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check className="text-muted-foreground mt-0.5 size-4 shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/contact?plan=${tier.id}`} className="mt-auto w-full">
                    <Button
                      className={cn(
                        "w-full rounded-full",
                        tier.id === "enterprise"
                          ? "bg-foreground text-background hover:bg-foreground/90"
                          : ""
                      )}
                      variant={tier.id === "enterprise" ? undefined : "outline"}
                    >
                      {tier.ctaLabel}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Link
          href="/pricing"
          className="text-foreground hover:text-muted-foreground mx-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        >
          See all tiers
          <ArrowRight className="size-3.5" />
        </Link>
      </Container>
    </section>
  );
}

export { PricingPreview };
