import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="bg-primary text-primary-foreground flex flex-col items-center gap-6 rounded-2xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to bring your store onto LeafLedger?
          </h2>
          <p className="max-w-xl text-primary-foreground/90 text-lg">
            Book a demo and see how sales, inventory, and compliance come together
            in one dashboard.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Book a demo
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { FinalCta };
