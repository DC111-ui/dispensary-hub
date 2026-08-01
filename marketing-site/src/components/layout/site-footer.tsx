import Link from "next/link";

import { Container } from "@/components/shared/container";
import { BrandMark } from "@/components/shared/brand-mark";
import { FOOTER_LINKS } from "@/lib/constants/nav";
import { BUSINESS_LOCALITY, BUSINESS_COUNTRY, CONTACT_EMAIL } from "@/lib/constants/site";

function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const copyrightRange = currentYear > 2024 ? `2024–${currentYear}` : "2024";

  return (
    <footer className="border-border/70 border-t pb-24 md:pb-0">
      <Container className="flex max-w-7xl flex-col gap-10 py-16 sm:flex-row sm:items-start sm:justify-between sm:py-20">
        <div className="flex max-w-sm flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="text-[15px] font-semibold tracking-tight">LeafLedger</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            One simple place to run your store: sales, stock, and paperwork, all together.
          </p>
          <p className="text-muted-foreground text-sm">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground transition-colors">
              {CONTACT_EMAIL}
            </a>
            {" · "}
            {BUSINESS_LOCALITY}, {BUSINESS_COUNTRY}
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-col sm:gap-y-2.5">
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
      <Container className="border-border/70 text-muted-foreground flex max-w-7xl flex-col gap-2 border-t py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span>© {copyrightRange} LeafLedger. All rights reserved.</span>
        <a
          href="https://darlingtonchanakira.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Built by darlingtonchanakira.com
        </a>
      </Container>
    </footer>
  );
}

export { SiteFooter };
