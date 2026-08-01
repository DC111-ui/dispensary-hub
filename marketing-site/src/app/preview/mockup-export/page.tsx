import type { Metadata } from "next";

import { FEATURE_MOCKUPS } from "@/components/features/mockups";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Dev-only export sheet: every code-rendered mockup, one per section, each
 * wrapped in a `data-mockup-export="{id}"` container so it can be
 * screenshotted individually (desktop viewport for the "web" reference,
 * a narrow viewport for the "mobile" reference) as generation context for
 * the prompts in design/mockup-prompts.txt. Not linked from the live site.
 */
export default function MockupExportPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-20 px-6 py-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Mockup export</h1>
        <p className="text-muted-foreground text-sm">
          Screenshot each container below at a desktop viewport, then again
          at a narrow mobile viewport.
        </p>
      </div>

      {FEATURE_CATEGORIES.map((category) => {
        const Mockup = FEATURE_MOCKUPS[category.id];
        if (!Mockup) return null;
        return (
          <section key={category.id} className="flex flex-col gap-3">
            <h2 className="text-muted-foreground text-sm font-semibold">
              {category.title} ({category.id})
            </h2>
            <div data-mockup-export={category.id}>
              <Mockup />
            </div>
          </section>
        );
      })}
    </div>
  );
}
