"use client";

import { motion } from "motion/react";
import { ShieldCheck, Boxes, Users, Store, type LucideIcon } from "lucide-react";

import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";
import { IconBadge, type IconTone } from "@/components/shared/icon-badge";

// Same four-tone rotation used by ValueProps and the features grid
// (src/lib/constants/features.ts's TONE_CYCLE) — reusing it here instead of
// a fifth ad-hoc palette keeps the hero's first colored moment consistent
// with every other icon grid on the site.
const HERO_TILES: { icon: LucideIcon; label: string; tone: IconTone }[] = [
  { icon: Store, label: "Point of Sale", tone: "rust" },
  { icon: Boxes, label: "Stock Tracking", tone: "chartreuse" },
  { icon: Users, label: "Customers & Loyalty", tone: "green" },
  { icon: ShieldCheck, label: "Records & Inspections", tone: "teal" },
];

function FloatingTile({
  icon,
  label,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  tone: IconTone;
}) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      className="border-border/60 bg-card/70 flex cursor-default flex-col items-start gap-3 rounded-xl border p-5 backdrop-blur-md"
    >
      <IconBadge icon={icon} tone={tone} className="size-9 [&_svg]:size-4.5" />
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}

function HeroTiles() {
  return (
    <div className="border-border/60 bg-card/40 mt-10 grid grid-cols-2 gap-4 rounded-2xl border p-6 shadow-xl backdrop-blur-md sm:max-w-md">
      {HERO_TILES.map(({ icon, label, tone }) => (
        <FloatingTile key={label} icon={icon} label={label} tone={tone} />
      ))}
    </div>
  );
}

export { HeroTiles };
