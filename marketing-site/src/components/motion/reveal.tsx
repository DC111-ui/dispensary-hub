"use client";

import * as React from "react";
import { motion, type UseInViewOptions } from "motion/react";

import { useSafeReducedMotion } from "@/components/motion/use-safe-reduced-motion";

type RevealProps = Omit<
  React.ComponentProps<"div">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
> & {
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: UseInViewOptions["amount"];
};

function Reveal({
  children,
  delay = 0,
  y = 56,
  once = true,
  amount = 0.15,
  className,
  ...props
}: RevealProps) {
  const reduce = useSafeReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y, scale: 0.94, filter: "blur(6px)" }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      animate={reduce ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
      viewport={{ once, amount, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { Reveal };
