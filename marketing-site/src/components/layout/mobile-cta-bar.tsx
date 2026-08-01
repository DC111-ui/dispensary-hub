import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { NAV_CTA } from "@/lib/constants/nav";

function MobileCtaBar() {
  return (
    <div className="border-border/70 bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t p-4 backdrop-blur-sm md:hidden">
      <Link href={NAV_CTA.href}>
        <LiquidButton
          size="lg"
          className="text-foreground border-border/60 shadow-soft flex w-full rounded-full border bg-background/50"
        >
          {NAV_CTA.label}
          <ArrowRight className="size-4" />
        </LiquidButton>
      </Link>
    </div>
  );
}

export { MobileCtaBar };
