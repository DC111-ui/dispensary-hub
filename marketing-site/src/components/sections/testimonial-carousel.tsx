"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/shared/container";
import { PLACEHOLDER_TESTIMONIALS } from "@/lib/constants/testimonials";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 6000;

// Same coverflow motif as MockupCarousel's wheelVariants: a short
// direction-aware slide + fade, so this section shares the site's one
// carousel signature instead of swapping text with no transition.
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -32 : 32, opacity: 0 }),
};

/**
 * Single-quote rotator. Wired into the homepage, deliberately showing
 * obvious placeholder copy (see testimonials.ts) since no real pilot-club
 * quotes exist yet — swap PLACEHOLDER_TESTIMONIALS for real ones as soon
 * as they exist.
 */
function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const slides = PLACEHOLDER_TESTIMONIALS;

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, reduceMotion, slides.length]);

  const goTo = useCallback(
    (next: number) => {
      const forwardDistance = (next - index + slides.length) % slides.length;
      setDirection(forwardDistance <= slides.length / 2 ? 1 : -1);
      setIndex(next);
      setPaused(true);
    },
    [index, slides.length]
  );

  const active = slides[index];
  if (!active) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container
        className="mx-auto flex max-w-3xl flex-col items-center gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="border-border/70 bg-card shadow-soft-lg w-full overflow-hidden rounded-3xl border">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={reduceMotion ? undefined : slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8 px-8 py-12 text-center sm:px-16 sm:py-16"
            >
              <span className="bg-foreground text-background flex size-16 items-center justify-center rounded-full text-base font-semibold">
                {active.authorName
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </span>

              <p className="text-headline font-semibold text-balance">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold">{active.authorName}</span>
                <span className="text-muted-foreground text-sm italic">
                  {active.authorRole} · {active.clubName}
                  {active.clubLocality ? ` · ${active.clubLocality}` : ""}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo((index - 1 + slides.length) % slides.length)}
            className="border-border/60 bg-card text-foreground hover:bg-accent flex size-9 items-center justify-center rounded-full border"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.authorName}
                type="button"
                aria-label={`Show testimonial from ${slide.authorName}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "bg-primary w-6" : "bg-border w-1.5"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo((index + 1) % slides.length)}
            className="border-border/60 bg-card text-foreground hover:bg-accent flex size-9 items-center justify-center rounded-full border"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}

export { TestimonialCarousel };
