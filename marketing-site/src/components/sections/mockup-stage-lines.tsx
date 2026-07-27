"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

// A fixed-ratio repeating diagonal line pattern — the actual line count/density
// is controlled separately via backgroundSize (see below), not baked in here.
const LINE_PATTERN = (color: string) =>
  `repeating-linear-gradient(115deg, ${color} 0px, ${color} 1.5px, transparent 1.5px, transparent 11px)`;

/**
 * Simple, scroll-driven diagonal line pattern filling the section behind the
 * mockup — no shaders, no time-based loop. Two corner wedges in brand colors:
 * as the section scrolls through the viewport, each wedge rotates and its
 * stripe count visibly increases or decreases (via backgroundSize scaling
 * the pattern tile), not just slides in place.
 */
function MockupStageLines({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const rotateA = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [0, -18]);

  // Wedge A: stripes start dense, spread apart (fewer visible) as you scroll.
  const tileA = useTransform(scrollYProgress, [0, 1], [6, 26]);
  const sizeA = useTransform(tileA, (v) => `${v}px ${v}px`);
  // Wedge B: opposite phase — starts sparse, packs in more stripes as you scroll.
  const tileB = useTransform(scrollYProgress, [0, 1], [24, 5]);
  const sizeB = useTransform(tileB, (v) => `${v}px ${v}px`);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-[20%] -right-[15%] h-[110%] w-[70%] origin-top-right"
        style={{
          backgroundImage: LINE_PATTERN("hsl(258 45% 45% / 0.55)"),
          backgroundSize: sizeA,
          rotate: rotateA,
          clipPath: "polygon(100% 0%, 100% 100%, 15% 0%)",
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] -left-[12%] h-[95%] w-[55%] origin-bottom-left"
        style={{
          backgroundImage: LINE_PATTERN("hsl(4 65% 55% / 0.5)"),
          backgroundSize: sizeB,
          rotate: rotateB,
          clipPath: "polygon(0% 100%, 85% 100%, 0% 10%)",
        }}
      />
    </div>
  );
}

export { MockupStageLines };
