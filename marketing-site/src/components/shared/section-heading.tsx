import * as React from "react";

import { cn } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Override the title's default size/weight — for pages that need a bigger, bolder, Stripe-style display heading. */
  titleClassName?: string;
  /** Use "h1" for a page's primary heading; defaults to "h2" for section headings. */
  as?: "h1" | "h2";
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
      <Heading className={cn("text-3xl font-semibold tracking-tight sm:text-4xl", titleClassName)}>
        {title}
      </Heading>
      {description ? (
        <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
