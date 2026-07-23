import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function IconBadge({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-accent text-accent-foreground flex size-11 shrink-0 items-center justify-center rounded-lg",
        className
      )}
    >
      <Icon className="size-5" />
    </div>
  );
}

export { IconBadge };
