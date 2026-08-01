import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Reveal } from "@/components/motion/reveal";

function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-headline max-w-2xl font-semibold text-balance">
              Ready when they walk in.
            </h2>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              Book a free demo to see your store, inspection-ready, in LeafLedger.
            </p>
            <div className="mt-2">
              <Link href="/contact">
                <LiquidButton
                  size="lg"
                  className="text-foreground border-border/60 shadow-soft rounded-full border bg-background/50 px-8 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book a free demo
                  <ArrowRight className="size-4" />
                </LiquidButton>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { FinalCta };
