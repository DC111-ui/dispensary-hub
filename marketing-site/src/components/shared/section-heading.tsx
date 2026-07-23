import * as React from "react";

import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
