import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { HeroAtmosphere } from "@/components/sections/hero-atmosphere";
import { HeroTiles } from "@/components/sections/hero-tiles";

function Hero() {
  return (
    <section className="relative isolate">
      <HeroAtmosphere />

      <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Run it wrong, and SAPS can shut your club down.
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Cannabis clubs run under real law, not a grey area. Fail an
            inspection, and you could lose your stock, your license, or your
            club. LeafLedger keeps every record ready.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?plan=professional">
              <Button
                size="lg"
                className="w-full transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                Book a free demo
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="w-full transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                See everything it does
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">
            The demo is free. No cost, no obligation.
          </p>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-sm underline underline-offset-4"
          >
            New to cannabis clubs in South Africa? See how the law works
            <ArrowRight className="size-3" />
          </Link>
        </div>

        <HeroTiles />
      </Container>
    </section>
  );
}

export { Hero };
