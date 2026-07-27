"use client";

import { motion } from "motion/react";
import { ShieldCheck, Boxes, Users, Store, type LucideIcon } from "lucide-react";

import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";

const HERO_TILES: { icon: LucideIcon; label: string }[] = [
  { icon: Store, label: "Point of Sale" },
  { icon: Boxes, label: "Stock Tracking" },
  { icon: Users, label: "Customers & Loyalty" },
  { icon: ShieldCheck, label: "Records & Inspections" },
];

function FloatingTile({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  const reduce = useSafeReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      className="border-border/60 bg-card/70 flex cursor-default flex-col items-start gap-3 rounded-xl border p-5 backdrop-blur-md"
    >
      <span className="border-foreground/15 bg-card text-foreground/80 flex size-9 items-center justify-center rounded-md border">
        <Icon className="size-4.5" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium">{label}</span>
    </motion.div>
  );
}

function HeroTiles() {
  return (
    <div className="border-border/60 bg-card/40 grid grid-cols-2 gap-4 rounded-2xl border p-6 shadow-xl backdrop-blur-md">
      {HERO_TILES.map(({ icon, label }) => (
        <FloatingTile key={label} icon={icon} label={label} />
      ))}
    </div>
  );
}

export { HeroTiles };
