import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind LeafLedger: how cannabis retail in South Africa got here, how clubs can operate legally, and why we built this platform.",
};

const CLUB_CHECKLIST = [
  "Membership only. Cannabis is shared among verified adult members, not sold to the public.",
  "Real ID checks. Every member's age and identity are verified before they join.",
  "Clear records. Growing, stock, and distribution are logged, not tracked on paper or from memory.",
  "Staying within the limits. The law sets limits on how much can be grown and held. Clubs need to know theirs and stay inside them.",
  "Ready for an inspection. If a club is ever asked to show its records, it can, quickly and completely.",
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our story"
            title="Why we built LeafLedger"
            description="A short history of how cannabis retail in South Africa got here, and how we help stores and clubs run responsibly within it."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">How South Africa got here</h2>
          <div className="text-muted-foreground flex flex-col gap-4 text-base leading-7">
            <p>
              In 2018, South Africa&apos;s Constitutional Court ruled in
              Minister of Justice and Constitutional Development v Prince that
              adults have the right to use, possess, and grow cannabis in
              private for their own personal use. That ruling struck down the
              old blanket ban and gave Parliament a deadline to update the law.
            </p>
            <p>
              In 2024, Parliament passed the Cannabis for Private Purposes
              Act, turning that court ruling into formal law. It confirms
              that adults can grow and use cannabis privately, and sets out
              rules for how much can be grown and held.
            </p>
            <p>
              These changes opened the door for cannabis social clubs: groups
              where adult members grow and share cannabis together, rather
              than a shop selling to the general public. Clubs have grown
              quickly across the country, but the rules for running one
              properly are still new, and often misunderstood.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Staying on the right side of the law"
            title="How clubs can operate legally"
            description="Clubs that take compliance seriously share a few things in common."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {CLUB_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="text-primary mt-0.5 size-4 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm">
            This is a general overview, not legal advice. Cannabis law is
            still developing in South Africa, and the details that apply to
            your club or store can vary. Speak to a lawyer who knows this
            space before you open your doors.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">About LeafLedger</h2>
          <div className="text-muted-foreground flex flex-col gap-4 text-base leading-7">
            <p>
              We&apos;re a software development company, started in 2024. We
              build LeafLedger because we saw how much stores and clubs were
              struggling to keep up: membership lists in notebooks, stock
              counted by hand, and no easy way to prove compliance if someone
              came asking.
            </p>
            <p>
              LeafLedger gives you one simple system to run your store and
              keep the records regulators and inspectors expect, without the
              paperwork.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See LeafLedger for yourself
          </h2>
          <Link href="/contact">
            <Button size="lg">
              Book a free demo
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">No cost, no obligation.</p>
        </Container>
      </section>
    </>
  );
}
