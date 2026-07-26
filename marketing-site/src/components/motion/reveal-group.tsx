"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";

type RevealGroupProps = Omit<
  React.ComponentProps<"div">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
> & {
  stagger?: number;
};

function RevealGroup({ children, className, stagger = 0.15, ...props }: RevealGroupProps) {
  const reduce = useSafeReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: reduce ? 0 : 0.1 } },
  };

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      animate={reduce ? "show" : undefined}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -15% 0px" }}
      variants={container}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = Omit<
  React.ComponentProps<"div">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
> & {
  y?: number;
};

function RevealItem({ children, className, y = 48, ...props }: RevealItemProps) {
  const reduce = useSafeReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, scale: reduce ? 1 : 0.92, filter: reduce ? "blur(0px)" : "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div variants={item} className={className} {...props}>
      {children}
    </motion.div>
  );
}

export { RevealGroup, RevealItem };
