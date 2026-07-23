"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS, NAV_CTA } from "@/lib/constants/nav";

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
            <Link href={NAV_CTA.href} className="mt-2">
              <Button className="w-full">{NAV_CTA.label}</Button>
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
