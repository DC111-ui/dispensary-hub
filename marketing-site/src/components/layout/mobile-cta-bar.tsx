import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_CTA } from "@/lib/constants/nav";

function MobileCtaBar() {
  return (
    <div className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t p-4 backdrop-blur-sm md:hidden">
      <Link href={NAV_CTA.href}>
        <Button size="lg" className="w-full">
          {NAV_CTA.label}
          <ArrowRight className="size-4" />
        </Button>
      </Link>
    </div>
  );
}

export { MobileCtaBar };
