import type { FeatureCategory } from "@/lib/constants/features";
import { FEATURE_MOCKUPS } from "@/components/features/mockups";

function FeatureVisual({ category }: { category: FeatureCategory }) {
  const Mockup = FEATURE_MOCKUPS[category.id];

  if (Mockup) {
    return <Mockup />;
  }

  const Icon = category.icon;
  return (
    <div className="border-border bg-card relative overflow-hidden rounded-2xl border p-10 shadow-sm sm:p-16">
      <div className="from-accent/60 via-background to-background pointer-events-none absolute inset-0 bg-gradient-to-br" />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <span className="bg-accent text-accent-foreground flex size-20 items-center justify-center rounded-2xl">
          <Icon className="size-10" />
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {category.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="border-border bg-background/80 text-muted-foreground rounded-full border px-3 py-1 text-xs"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export { FeatureVisual };
