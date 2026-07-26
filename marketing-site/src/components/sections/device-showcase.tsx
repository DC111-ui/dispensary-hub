import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { LazyReveal } from "@/components/motion/lazy-reveal";

function DeviceShowcase() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <LazyReveal className="border-border relative flex flex-col overflow-hidden rounded-2xl border shadow-sm sm:block sm:aspect-[21/9] lg:aspect-[2.8/1]">
          {/* Text card: stacked above the photo on mobile (own solid background,
              so it's never competing with the image for contrast); becomes an
              absolutely-positioned overlay on the photo from sm: up, where
              there's enough width for the image's reserved negative space. */}
          <div className="bg-primary flex flex-col gap-4 p-6 sm:absolute sm:inset-0 sm:z-10 sm:justify-center sm:bg-transparent sm:p-10 lg:p-14">
            <div className="max-w-[20rem] sm:max-w-xs lg:max-w-sm">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                One system, on every screen
              </h2>
              <p className="mt-2 text-sm text-white/85 sm:mt-3 sm:text-base">
                At the till, in the back office, or from your phone, it&apos;s the same LeafLedger.
              </p>
            </div>
            <Link href="/contact?plan=professional" className="w-fit">
              <Button
                size="lg"
                className="bg-white text-primary shadow-sm hover:bg-white/90"
              >
                Book a free demo
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          {/* Photo: full composition below the text card on mobile (nothing
              cropped or overlapping); fills the whole card from sm: up. */}
          <div className="relative aspect-[3168/1344] w-full sm:absolute sm:inset-0 sm:aspect-auto">
            <Image
              src="/images/device-showcase.webp"
              alt="The LeafLedger dashboard shown on a desktop monitor, a laptop, and a phone"
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.62) 32%, rgba(8,8,8,0.25) 52%, rgba(8,8,8,0) 68%)",
              }}
            />
          </div>
        </LazyReveal>
      </Container>
    </section>
  );
}

export { DeviceShowcase };
