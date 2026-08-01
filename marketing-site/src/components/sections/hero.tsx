"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Container } from "@/components/shared/container";
import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";

const STAGGER_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};

const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.6 },
  },
};

// The claim reads first; the consequence un-redacts a beat later, like a
// line being uncovered on a record rather than just fading in with the rest
// of the sentence.
const REVEAL_DELAY = 0.55;
const REVEAL_DURATION = 0.65;

// The phone is the proof arriving after the claim: it settles in with a
// touch of overshoot on the rotation, like something being set down for
// inspection, then holds a slow, quiet float — alive, not idle.
const SETTLE_DELAY = 0.5;
const SETTLE_DURATION = 0.85;

function Hero() {
  const reduce = useSafeReducedMotion();
  const [settled, setSettled] = useState(false);

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden py-12">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <motion.div
          initial={reduce ? "show" : "hidden"}
          animate="show"
          variants={STAGGER_CONTAINER}
          className="flex flex-col gap-7"
        >
          <motion.h1
            variants={STAGGER_ITEM}
            className="text-display text-balance font-semibold tracking-tight"
          >
            <span className="text-foreground">Run your club wrong, and </span>
            <motion.span
              initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: REVEAL_DURATION,
                delay: REVEAL_DELAY,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="from-foreground/60 to-foreground/25 inline-block bg-gradient-to-r bg-clip-text text-transparent"
            >
              SAPS can shut it down.
            </motion.span>
          </motion.h1>
          <motion.p
            variants={STAGGER_ITEM}
            className="text-muted-foreground max-w-[42ch] text-lg leading-normal"
          >
            Cannabis clubs run under real law, not a grey area — LeafLedger
            keeps every record ready to prove it.
          </motion.p>
          <motion.div variants={STAGGER_ITEM}>
            <Link href="/contact?plan=professional">
              <LiquidButton
                size="lg"
                className="text-foreground border-border/60 shadow-soft flex w-full rounded-full border bg-background/50 px-8 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
              >
                Book a free demo
                <ArrowRight className="size-4" />
              </LiquidButton>
            </Link>
          </motion.div>
          <motion.p variants={STAGGER_ITEM} className="text-muted-foreground text-sm">
            The demo is free. No cost, no obligation.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none lg:self-start">
          <motion.div
            initial={
              reduce
                ? false
                : { opacity: 0, y: 28, rotate: -8, scale: 0.92, filter: "blur(10px)" }
            }
            animate={{ opacity: 1, y: 0, rotate: -2, scale: 1, filter: "blur(0px)" }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    delay: SETTLE_DELAY,
                    duration: SETTLE_DURATION,
                    ease: [0.16, 1, 0.3, 1],
                    rotate: { type: "spring", stiffness: 120, damping: 12, delay: SETTLE_DELAY },
                  }
            }
            onAnimationComplete={() => setSettled(true)}
            className="relative mx-auto aspect-[934/1408] w-full max-w-[15.36rem] lg:max-w-[19.2rem]"
          >
            <motion.div
              animate={settled && !reduce ? { y: [0, -8, 0] } : { y: 0 }}
              transition={
                settled && !reduce
                  ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0 }
              }
              className="relative size-full"
            >
              <Image
                src="/images/hero-phone-v2.webp"
                alt="LeafLedger point-of-sale checkout screen, shown on a smartphone"
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 80vw"
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
