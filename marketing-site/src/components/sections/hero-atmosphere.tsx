"use client";

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

// Geometry and fade mask live in globals.css (`.hero-atmosphere-shape`) since
// mobile needs a genuinely different shape, not a scaled-down version of the
// desktop one: on mobile the hero collapses to a single column, so the same
// top-right 70%-width/165%-height band used on desktop would run directly
// behind the compliance-risk paragraph instead of clearing it. Below `lg` the
// shape is a short, full-width band pinned to the very top (nav + first
// headline line) that fades out well before the body copy; at `lg` and above
// it reverts to the original wide band tucked behind the nav strip and the
// HeroTiles panel.

// Same DOM shape is rendered on server and client regardless of reduced-motion
// preference (which SSR can't know). The static CSS gradient is always present
// as the base/fallback layer; HeroWebglBackground only mounts its own canvas
// client-side, and internally no-ops under reduced motion.
function HeroAtmosphere() {
  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 700], [0, 50]);

  return (
    <div className="absolute inset-0 -z-10">
      <motion.div className="hero-atmosphere-shape" style={{ y: scrollShift }}>
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
