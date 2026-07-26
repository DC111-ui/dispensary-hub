import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type IconTone = "rust" | "chartreuse" | "green" | "teal";

const TONE_CLASSES: Record<IconTone, string> = {
  rust: "bg-[hsl(4_70%_92%)] text-[hsl(4_65%_32%)] dark:bg-[hsl(4_35%_22%)] dark:text-[hsl(4_70%_82%)]",
  chartreuse:
    "bg-[hsl(85_60%_90%)] text-[hsl(85_45%_26%)] dark:bg-[hsl(85_30%_20%)] dark:text-[hsl(85_60%_78%)]",
  green:
    "bg-[hsl(145_50%_90%)] text-[hsl(145_45%_26%)] dark:bg-[hsl(145_30%_20%)] dark:text-[hsl(145_55%_78%)]",
  teal: "bg-[hsl(162_50%_90%)] text-[hsl(162_45%_26%)] dark:bg-[hsl(162_30%_20%)] dark:text-[hsl(162_55%_78%)]",
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
        "flex size-11 shrink-0 items-center justify-center rounded-lg",
        tone ? TONE_CLASSES[tone] : "bg-accent text-accent-foreground",
        className
      )}
    >
      <Icon className="size-5" />
    </div>
  );
}

export { IconBadge };
export type { IconTone };
