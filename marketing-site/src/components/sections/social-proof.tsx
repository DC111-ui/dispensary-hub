import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { LazyRevealGroup, LazyRevealItem } from "@/components/motion/lazy-reveal";
import { PLACEHOLDER_CLUB_LOGOS, PLACEHOLDER_TESTIMONIALS } from "@/lib/constants/testimonials";

function SocialProof() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Pilot clubs"
          title="Built with the clubs already running on it"
          description="LeafLedger is live with a small group of pilot clubs today. Here's what running compliance this way looks like for them."
        />

        <LazyRevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_TESTIMONIALS.map((testimonial) => (
            <LazyRevealItem key={testimonial.authorName}>
              <TestimonialCard {...testimonial} />
            </LazyRevealItem>
          ))}
        </LazyRevealGroup>

        <div className="border-border flex flex-wrap items-center gap-3 border-t pt-8">
          <span className="text-muted-foreground text-sm font-medium">Pilot clubs include</span>
          {PLACEHOLDER_CLUB_LOGOS.map((logo) => (
            <span
              key={logo.name}
              className="border-border bg-secondary/40 text-muted-foreground rounded-md border px-3 py-1.5 text-sm font-medium"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { SocialProof };
