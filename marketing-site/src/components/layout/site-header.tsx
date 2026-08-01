import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { BrandMark } from "@/components/shared/brand-mark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { FeaturesNavMenu } from "@/components/layout/features-nav-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  NAV_LINKS,
  NAV_GUIDE_CTA,
  NAV_SIGN_IN,
  NAV_CONTACT_SALES,
} from "@/lib/constants/nav";

function SiteHeader() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full backdrop-blur-sm">
      <Container className="flex h-20 max-w-7xl items-center gap-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandMark />
          <span className="text-[15px] font-semibold tracking-tight">LeafLedger</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((link) =>
            link.href === "/features" ? (
              <FeaturesNavMenu key={link.href} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium tracking-tight transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href={NAV_GUIDE_CTA.href}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium tracking-tight transition-colors"
          >
            <Sparkles className="text-brand size-3.5" />
            {NAV_GUIDE_CTA.label}
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <Link
            href={NAV_SIGN_IN.href}
            className="text-foreground hover:text-muted-foreground hidden text-sm font-medium tracking-tight transition-colors md:block"
          >
            {NAV_SIGN_IN.label}
          </Link>
          <Link href={NAV_CONTACT_SALES.href} className="hidden md:block">
            <Button
              variant="outline"
              className="border-foreground/70 text-foreground hover:bg-foreground/5 rounded-full px-5"
            >
              {NAV_CONTACT_SALES.label}
            </Button>
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
