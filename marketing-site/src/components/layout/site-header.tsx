import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-transparent">
      <Container className="flex h-16 max-w-7xl items-center gap-8">
        <Link href="/" className="mr-4 flex shrink-0 items-center gap-2 font-semibold">
          <BrandMark />
          <span className="text-lg">LeafLedger</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.href === "/features" ? (
              <FeaturesNavMenu key={link.href} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <span className="bg-border mx-2 h-5 w-px" aria-hidden="true" />
          <Link
            href={NAV_GUIDE_CTA.href}
            className="text-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors"
          >
            <Sparkles className="text-primary size-4" />
            {NAV_GUIDE_CTA.label}
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Link href={NAV_SIGN_IN.href} className="hidden md:block">
            <Button variant="secondary" className="rounded-full">
              {NAV_SIGN_IN.label}
            </Button>
          </Link>
          <Link href={NAV_CONTACT_SALES.href} className="hidden md:block">
            <Button className="rounded-full">
              {NAV_CONTACT_SALES.label}
              <ChevronRight className="size-4" />
            </Button>
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
