import Link from "next/link";
import { Leaf, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { FeaturesNavMenu } from "@/components/layout/features-nav-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_LINKS, NAV_GUIDE_CTA, NAV_SIGN_IN } from "@/lib/constants/nav";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-transparent backdrop-blur-md">
      <Container className="flex h-16 max-w-7xl items-center gap-8">
        <Link href="/" className="mr-4 flex shrink-0 items-center gap-2 font-semibold">
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

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Link href={NAV_SIGN_IN.href} className="hidden md:block">
            <Button variant="secondary">{NAV_SIGN_IN.label}</Button>
          </Link>
          <Link href={NAV_GUIDE_CTA.href} className="hidden md:block">
            <Button>
              <Sparkles className="size-4" />
              {NAV_GUIDE_CTA.label}
            </Button>
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
