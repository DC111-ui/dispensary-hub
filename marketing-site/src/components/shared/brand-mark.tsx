import { cn } from "@/lib/utils";

/**
 * Three ascending "ledger row" bars on a solid mark — a bespoke shape
 * instead of a generic icon-in-a-colored-square, so the logo doesn't read
 * as another cannabis-leaf-in-a-green-badge like every competitor in this
 * category.
 */
function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "bg-brand flex size-8 shrink-0 flex-col items-start justify-center gap-[3px] rounded-lg px-[7px]",
        className
      )}
      aria-hidden="true"
    >
      <span className="bg-brand-foreground h-[2px] w-[7px] rounded-full" />
      <span className="bg-brand-foreground h-[2px] w-[12px] rounded-full" />
      <span className="bg-brand-foreground h-[2px] w-[16px] rounded-full" />
    </span>
  );
}

export { BrandMark };
