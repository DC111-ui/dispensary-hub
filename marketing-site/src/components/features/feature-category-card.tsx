import Link from "next/link";

import type { FeatureCategory } from "@/lib/constants/features";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBadge } from "@/components/shared/icon-badge";

function FeatureCategoryCard({ category }: { category: FeatureCategory }) {
  return (
    <Link href={`/features/${category.id}`}>
      <Card className="hover:border-primary/50 h-full transition-colors">
        <CardHeader>
          <IconBadge icon={category.icon} />
          <CardTitle className="pt-2">{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{category.tagline}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export { FeatureCategoryCard };
