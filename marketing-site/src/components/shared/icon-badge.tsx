import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconTone = "rust" | "chartreuse" | "green" | "teal";

// A small "sealing wax" dot in the corner carries the tone instead of a
// pastel-filled background — the badge itself stays ink-on-paper, like a
// stamped record, and the dot is the only per-category color signal.
const TONE_DOT_CLASSES: Record<IconTone, string> = {
  rust: "bg-rust",
  chartreuse: "bg-gold",
  green: "bg-primary",
  teal: "bg-teal",
};

function IconBadge({
  icon: Icon,
  tone,
  className,
}: {
  icon: LucideIcon;
  tone?: IconTone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-foreground/15 bg-card text-foreground/80 relative flex size-11 shrink-0 items-center justify-center rounded-md border",
        className
      )}
    >
      <Icon className="size-5" strokeWidth={1.75} />
      {tone ? (
        <span
          className={cn(
            "ring-background absolute -top-1 -right-1 size-2.5 rounded-full ring-2",
            TONE_DOT_CLASSES[tone]
          )}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}

export { IconBadge };
export type { IconTone };
