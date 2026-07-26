import { Quote } from "lucide-react";

import type { Testimonial } from "@/lib/constants/testimonials";

function TestimonialCard({ quote, authorName, authorRole, clubName, clubLocality }: Testimonial) {
  return (
    <figure className="border-border bg-card flex h-full flex-col gap-4 rounded-xl border p-6">
      <Quote className="text-primary size-5" />
      <blockquote className="text-foreground flex-1 text-sm leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col gap-0.5 text-sm">
        <span className="font-semibold">{authorName}</span>
        <span className="text-muted-foreground">
          {authorRole}, {clubName}
          {clubLocality ? ` · ${clubLocality}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}

export { TestimonialCard };
