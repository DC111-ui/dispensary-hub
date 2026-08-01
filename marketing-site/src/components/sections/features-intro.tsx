import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

function FeaturesIntro() {
  return (
    <section className="pt-16 sm:pt-20">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="See your club clearly, all in one place"
          description="Everything you need to run day to day, and everything an inspector could ask to see — in the same simple system."
          align="center"
          className="mx-auto max-w-2xl"
        />
      </Container>
    </section>
  );
}

export { FeaturesIntro };
