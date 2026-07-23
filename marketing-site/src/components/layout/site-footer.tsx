import Link from "next/link";
import { Leaf } from "lucide-react";

import { Container } from "@/components/shared/container";
import { FOOTER_LINKS } from "@/lib/constants/nav";

function SiteFooter() {
  return (
    <footer className="border-border bg-secondary/40 border-t">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <Leaf className="size-4.5" />
            </span>
            <span className="text-lg">LeafLedger</span>
          </Link>
          <p className="text-muted-foreground max-w-sm text-sm">
            The cloud platform for regulated retailers — one dashboard for sales,
            inventory, and compliance.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-col">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="border-border text-muted-foreground border-t py-6 text-sm">
        © {new Date().getFullYear()} LeafLedger. All rights reserved.
      </Container>
    </footer>
  );
}

export { SiteFooter };
