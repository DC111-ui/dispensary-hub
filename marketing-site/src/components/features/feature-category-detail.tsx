import { Check } from "lucide-react";

import type { FeatureCategory } from "@/lib/constants/features";
import { IconBadge } from "@/components/shared/icon-badge";

function FeatureCategoryDetail({ category }: { category: FeatureCategory }) {
  return (
    <div
      id={category.id}
      className="border-border bg-card grid gap-6 rounded-2xl border p-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:p-8"
    >
      <div className="flex flex-col gap-3">
        <IconBadge icon={category.icon} />
        <h3 className="text-xl font-semibold">{category.title}</h3>
        <p className="text-muted-foreground text-sm">{category.tagline}</p>
      </div>
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {category.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm">
            <Check className="text-primary mt-0.5 size-4 shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { FeatureCategoryDetail };
