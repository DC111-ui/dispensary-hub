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
            Book a free demo and see how easy it is to run your whole store in
            one place.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Book a free demo
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { FinalCta };
