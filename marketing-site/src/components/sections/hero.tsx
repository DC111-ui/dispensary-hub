"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { HeroAtmosphere } from "@/components/sections/hero-atmosphere";
import { HeroTiles } from "@/components/sections/hero-tiles";
import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";

const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
};

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 30, mass: 0.6 },
  },
};

function Hero() {
  const reduce = useSafeReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <HeroAtmosphere />

      <Container className="relative flex flex-col py-20 lg:py-28">
        <motion.div
          initial={reduce ? "show" : "hidden"}
          animate="show"
          variants={STAGGER_CONTAINER}
          className="flex max-w-3xl flex-col gap-6"
        >
          <motion.h1 variants={STAGGER_ITEM} className="flex flex-col gap-1 tracking-tight">
            <span className="text-muted-foreground [text-shadow:0_0_18px_var(--background),0_0_36px_var(--background)] text-2xl font-medium sm:text-3xl lg:text-4xl">
              Run your club wrong, and
            </span>
            <span className="text-primary [text-shadow:0_0_18px_var(--background),0_0_36px_var(--background)] text-5xl leading-[0.98] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              SAPS can shut it down.
            </span>
          </motion.h1>
          <motion.p variants={STAGGER_ITEM} className="text-muted-foreground max-w-xl text-lg">
            Cannabis clubs run under real law, not a grey area. Fail an
            inspection, and you could lose your stock, your license, or your
            club. LeafLedger keeps every record ready.
          </motion.p>
          <motion.div variants={STAGGER_ITEM} className="flex flex-col gap-3 sm:flex-row">
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
          </motion.div>
          <motion.p variants={STAGGER_ITEM} className="text-muted-foreground text-sm">
            The demo is free. No cost, no obligation.
          </motion.p>
          <motion.div variants={STAGGER_ITEM}>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-sm underline underline-offset-4"
            >
              New to cannabis clubs in South Africa? See how the law works
              <ArrowRight className="size-3" />
            </Link>
          </motion.div>
        </motion.div>

        <HeroTiles />
      </Container>
    </section>
  );
}

export { Hero };
