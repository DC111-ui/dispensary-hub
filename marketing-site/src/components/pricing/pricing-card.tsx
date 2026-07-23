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
import { Badge } from "@/components/ui/badge";

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={cn(
        "relative flex flex-col",
        tier.emphasized && "border-primary shadow-lg ring-1 ring-primary"
      )}
    >
      {tier.emphasized ? (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
          Most popular
        </Badge>
      ) : null}
      <CardHeader>
        <CardTitle className="text-base">{tier.name}</CardTitle>
        <div className="flex items-baseline gap-1 pt-2">
          <span className="text-3xl font-semibold tracking-tight">{tier.price}</span>
          {tier.billingNote ? (
            <span className="text-muted-foreground text-sm">{tier.billingNote}</span>
          ) : null}
        </div>
        <CardDescription>{tier.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="flex flex-col gap-2.5 text-sm">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="text-primary mt-0.5 size-4 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={`/contact?plan=${tier.id}`} className="w-full">
          <Button
            className="w-full"
            variant={tier.emphasized ? "default" : "outline"}
          >
            {tier.ctaLabel}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export { PricingCard };
