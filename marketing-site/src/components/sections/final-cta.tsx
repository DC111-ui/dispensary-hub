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
            Don&apos;t wait for an inspection to find out your records aren&apos;t ready.
          </h2>
          <p className="max-w-xl text-primary-foreground/90 text-lg">
            Book a free demo and see exactly what LeafLedger would show an
            inspector, using your own store.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Book a free demo
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link
              href="/compliance"
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm underline underline-offset-4"
            >
              See how compliance works
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { FinalCta };
