import Link from "next/link";
import { Check } from "lucide-react";

import type { PricingTier } from "@/lib/constants/pricing";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col gap-8 rounded-2xl border-border/70 p-2 shadow-none transition-transform duration-300 hover:-translate-y-1",
        tier.emphasized && "bg-foreground text-background border-transparent shadow-soft-lg"
      )}
    >
      {tier.emphasized ? (
        <span className="bg-background text-foreground absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold">
          Most popular
        </span>
      ) : null}
      <CardHeader className="gap-3 px-6 pt-8">
        <CardTitle
          className={cn(
            "text-sm font-medium tracking-wide uppercase",
            tier.emphasized ? "text-background/60" : "text-muted-foreground"
          )}
        >
          {tier.name}
        </CardTitle>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
          {tier.billingNote ? (
            <span className={cn("text-sm", tier.emphasized ? "text-background/60" : "text-muted-foreground")}>
              {tier.billingNote}
            </span>
          ) : null}
        </div>
        <CardDescription
          className={cn("text-sm leading-relaxed", tier.emphasized && "text-background/70")}
        >
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 px-6">
        <ul className="flex flex-col gap-3 text-sm">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <Check
                className={cn("mt-0.5 size-4 shrink-0", tier.emphasized ? "text-background" : "text-foreground")}
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Link href={`/contact?plan=${tier.id}`} className="w-full">
          <Button
            className={cn(
              "w-full rounded-full",
              tier.emphasized
                ? "bg-background text-foreground hover:bg-background/90 shadow-soft"
                : "shadow-soft"
            )}
            variant={tier.emphasized ? undefined : "outline"}
          >
            {tier.ctaLabel}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export { PricingCard };
