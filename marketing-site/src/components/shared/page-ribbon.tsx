import { cn } from "@/lib/utils";

/**
 * A thin diagonal band of color cutting across the page — modeled directly
 * on Stripe's signature ribbon accent (seen on stripe.com/pricing and their
 * sign-in page), using our brand hues instead of theirs. Meant to sit behind
 * real content (cards, a form), not behind headline text.
 */
function PageRibbon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 h-48 w-[170%] -rotate-6 overflow-hidden opacity-95",
        className
      )}
      aria-hidden="true"
    >
      <div className="brand-ribbon absolute inset-y-0 -inset-x-[45%]" />
    </div>
  );
}

export { PageRibbon };
