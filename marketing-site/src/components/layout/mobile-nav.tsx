"use client";

import Link from "next/link";
import { MenuIcon, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS, NAV_GUIDE_CTA, NAV_SIGN_IN, NAV_CTA } from "@/lib/constants/nav";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-3/4 sm:max-w-xs">
        <SheetHeader>
          <SheetTitle>LeafLedger</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2.5 text-base font-medium"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Link
              href={NAV_GUIDE_CTA.href}
              className="hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-base font-medium"
            >
              <Sparkles className="text-brand size-4" />
              {NAV_GUIDE_CTA.label}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={NAV_SIGN_IN.href}
              className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2.5 text-base font-medium"
            >
              {NAV_SIGN_IN.label}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href={NAV_CTA.href} className="mt-2">
              <LiquidButton className="text-foreground border-border/60 w-full border bg-background/50">
                {NAV_CTA.label}
              </LiquidButton>
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
