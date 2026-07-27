"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "motion/react";

const HeroWebglBackground = dynamic(
  () => import("@/components/sections/hero-webgl-background").then((m) => m.HeroWebglBackground),
  { ssr: false }
);

const GRADIENT =
  "linear-gradient(125deg, hsl(258 35% 20%) 0%, hsl(250 40% 30%) 33%, hsl(245 75% 55%) 66%, hsl(83 45% 45%) 100%)";

const GRAIN_IMAGE =
  "repeating-linear-gradient(115deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 1px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px, transparent 4px, transparent 7px)";

/** Fades the whole bloom to transparent so it dissolves into the page background instead of a hard edge.
 *  Centered near the container's top edge so the vivid core sits at the very top of the page,
 *  confidently behind the nav strip, not just a faint peek. */
const FADE_MASK =
  "radial-gradient(ellipse 85% 80% at 66% 4%, black 0%, rgba(0,0,0,0.85) 42%, transparent 80%)";

// Same DOM shape is rendered on server and client regardless of reduced-motion
// preference (which SSR can't know). The static CSS gradient is always present
// as the base/fallback layer; HeroWebglBackground only mounts its own canvas
// client-side, and internally no-ops under reduced motion.
function HeroAtmosphere() {
  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 700], [0, 50]);

  const maskStyle = {
    WebkitMaskImage: FADE_MASK,
    maskImage: FADE_MASK,
  } as React.CSSProperties;

  return (
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="absolute -top-[35%] right-0 h-[165%] w-[70%]"
        style={{ ...maskStyle, y: scrollShift }}
      >
        <div className="absolute inset-0" style={{ background: GRADIENT }} />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-70"
          style={{ backgroundImage: GRAIN_IMAGE }}
        />
        <HeroWebglBackground />
      </motion.div>
    </div>
  );
}

export { HeroAtmosphere };
