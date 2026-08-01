"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/shared/container";
import { FEATURE_CATEGORIES, HOME_FEATURED_ORDER } from "@/lib/constants/features";
import {
  DEVICE_MOCKUPS,
  AVAILABLE_MOCKUP_ASSETS,
  mockupAssetKey,
} from "@/lib/constants/device-mockups";
import { cn } from "@/lib/utils";

function homeRank(id: string) {
  const i = HOME_FEATURED_ORDER.indexOf(id);
  return i === -1 ? HOME_FEATURED_ORDER.length : i;
}

const SLIDES = [...FEATURE_CATEGORIES].sort((a, b) => homeRank(a.id) - homeRank(b.id));

const AUTO_ADVANCE_MS = 1300;

const wheelVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
};

/**
 * Web + mobile visual for one category's generated mockup pair (see
 * design/mockup-prompts.txt). Renders the real photo for whichever variant
 * is listed in AVAILABLE_MOCKUP_ASSETS. When both are available they're
 * layered (large web shot + overlapping mobile inset); when only one is
 * available it's shown alone, full-frame; a category with neither yet
 * falls back to the text placeholder.
 */
function MockupVisual({ id, title }: { id: string; title: string }) {
  const paths = DEVICE_MOCKUPS[id];
  const hasWeb = AVAILABLE_MOCKUP_ASSETS.has(mockupAssetKey(id, "web"));
  const hasMobile = AVAILABLE_MOCKUP_ASSETS.has(mockupAssetKey(id, "mobile"));

  if (hasWeb && !hasMobile) {
    return (
      <div className="shadow-soft-lg border-border/60 bg-secondary/40 relative aspect-[16/10] w-full overflow-hidden rounded-3xl border">
        <Image
          src={paths.web}
          alt={`${title}, shown on a laptop`}
          fill
          sizes="(min-width: 640px) 48rem, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (hasMobile && !hasWeb) {
    return (
      <div className="relative flex aspect-[16/10] w-full items-center justify-center">
        <div className="shadow-soft-lg border-border/60 bg-card relative aspect-[9/16] w-[30%] overflow-hidden rounded-2xl border">
          <Image
            src={paths.mobile}
            alt={`${title}, shown on a smartphone`}
            fill
            sizes="30vw"
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full">
      <div className="shadow-soft-lg border-border/60 bg-secondary/40 absolute inset-0 overflow-hidden rounded-3xl border">
        {hasWeb ? (
          <Image
            src={paths.web}
            alt={`${title}, shown on a laptop`}
            fill
            sizes="(min-width: 640px) 48rem, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="text-muted-foreground/50 flex h-full w-full items-center justify-center text-sm">
            {title} — web
          </div>
        )}
      </div>
      <div className="shadow-soft-lg border-border/60 bg-card absolute -right-4 -bottom-8 w-[30%] overflow-hidden rounded-2xl border sm:-right-6 sm:-bottom-10">
        {hasMobile ? (
          <Image
            src={paths.mobile}
            alt={`${title}, shown on a smartphone`}
            width={280}
            height={498}
            sizes="30vw"
            className="aspect-[9/16] w-full object-cover"
          />
        ) : (
          <div className="text-muted-foreground/50 flex aspect-[9/16] w-full items-center justify-center text-center text-xs">
            {title} — mobile
          </div>
        )}
      </div>
    </div>
  );
}

function MockupCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const paused = hoverPaused || interactionPaused || reduceMotion;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  // Any manual navigation stops autoplay for good (WCAG 2.2.2), not just while hovered/focused.
  const goTo = useCallback(
    (next: number) => {
      // Shortest rotational direction, so jumping via dots still spins the
      // right way instead of always defaulting forward.
      const forwardDistance = (next - index + SLIDES.length) % SLIDES.length;
      setDirection(forwardDistance <= SLIDES.length / 2 ? 1 : -1);
      setIndex(next);
      setInteractionPaused(true);
    },
    [index]
  );

  const active = SLIDES[index];
  const prevIndex = (index - 1 + SLIDES.length) % SLIDES.length;
  const nextIndex = (index + 1) % SLIDES.length;
  const prev = SLIDES[prevIndex];
  const next = SLIDES[nextIndex];

  return (
    <section ref={sectionRef} className="pt-8 pb-16 sm:pt-10 sm:pb-20">
      <Container>
        <div
          className="relative mx-auto w-full max-w-5xl pb-10 sm:pb-14"
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setHoverPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setHoverPaused(false);
            }
          }}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={reduceMotion ? undefined : wheelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center gap-3 sm:gap-6"
              >
                <button
                  type="button"
                  aria-label={`Show ${prev.title}`}
                  onClick={() => goTo(prevIndex)}
                  className="hidden w-[18%] shrink-0 scale-90 opacity-40 transition-all duration-300 ease-out hover:opacity-70 sm:block"
                >
                  <MockupVisual id={prev.id} title={prev.title} />
                </button>

                <Link
                  href={`/features/${active.id}`}
                  className="group block w-[80%] shrink-0 transition-all duration-300 ease-out sm:w-[54%]"
                >
                  <MockupVisual id={active.id} title={active.title} />
                  <p
                    className="text-muted-foreground group-hover:text-foreground mt-6 text-center text-sm font-medium transition-colors"
                    aria-live="polite"
                  >
                    {active.title}
                  </p>
                </Link>

                <button
                  type="button"
                  aria-label={`Show ${next.title}`}
                  onClick={() => goTo(nextIndex)}
                  className="hidden w-[18%] shrink-0 scale-90 opacity-40 transition-all duration-300 ease-out hover:opacity-70 sm:block"
                >
                  <MockupVisual id={next.id} title={next.title} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Previous feature"
            onClick={() => goTo(prevIndex)}
            className="border-border/60 bg-card text-foreground hover:bg-accent shadow-soft absolute top-[38%] left-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border sm:left-2"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next feature"
            onClick={() => goTo(nextIndex)}
            className="border-border/60 bg-card text-foreground hover:bg-accent shadow-soft absolute top-[38%] right-0 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border sm:right-2"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.title}`}
                title={slide.title}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "bg-primary w-6" : "bg-border w-1.5"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { MockupCarousel };
