import Link from "next/link";
import { Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { FeaturesNavMenu } from "@/components/layout/features-nav-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_LINKS, NAV_CTA } from "@/lib/constants/nav";

function SiteHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
            <Leaf className="size-4.5" />
          </span>
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
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href={NAV_CTA.href} className="hidden md:block">
            <Button>{NAV_CTA.label}</Button>
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
