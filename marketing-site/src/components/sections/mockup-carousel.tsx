"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

import { Container } from "@/components/shared/container";
import { FEATURE_CATEGORIES, HOME_FEATURED_ORDER } from "@/lib/constants/features";
import { FEATURE_MOCKUPS } from "@/components/features/mockups";
import { MockupStageLines } from "@/components/sections/mockup-stage-lines";
import { cn } from "@/lib/utils";

function homeRank(id: string) {
  const i = HOME_FEATURED_ORDER.indexOf(id);
  return i === -1 ? HOME_FEATURED_ORDER.length : i;
}

const SLIDES = [...FEATURE_CATEGORIES].sort((a, b) => homeRank(a.id) - homeRank(b.id));

const AUTO_ADVANCE_MS = 4500;

function MockupCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const paused = hoverPaused || interactionPaused || reduceMotion;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  // Any manual navigation stops autoplay for good (WCAG 2.2.2), not just while hovered/focused.
  const goTo = useCallback((next: number) => {
    setIndex(next);
    setInteractionPaused(true);
  }, []);

  const active = SLIDES[index];
  const Mockup = FEATURE_MOCKUPS[active.id];

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden py-12 sm:py-16">
      <MockupStageLines sectionRef={sectionRef} />

      <Container className="relative flex flex-col gap-6">
        <div
          className="relative"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setHoverPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setHoverPaused(false);
            }
          }}
        >
          <Link href={`/features/${active.id}`} className="group block">
            <div className="border-border bg-card rounded-2xl border p-4 shadow-sm transition-colors group-hover:border-primary/50 sm:p-6">
              {Mockup ? <Mockup /> : null}
            </div>
            <p
              className="text-muted-foreground group-hover:text-foreground mt-3 text-center text-sm font-medium transition-colors"
              aria-live="polite"
            >
              {active.title}
            </p>
          </Link>

          <button
            type="button"
            aria-label="Previous feature"
            onClick={() => goTo((index - 1 + SLIDES.length) % SLIDES.length)}
            className="border-border bg-card text-foreground hover:bg-accent absolute top-1/2 -left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm sm:-left-4"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next feature"
            onClick={() => goTo((index + 1) % SLIDES.length)}
            className="border-border bg-card text-foreground hover:bg-accent absolute top-1/2 -right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm sm:-right-4"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show ${slide.title}`}
              title={slide.title}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "bg-primary w-6" : "bg-border w-2"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { MockupCarousel };
