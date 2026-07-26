import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Landmark, Scale, ExternalLink } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

const SOURCES = [
  {
    icon: Scale,
    title:
      "Minister of Justice and Constitutional Development and Others v Prince (Clarke and Others Intervening); National Director of Public Prosecutions and Others v Rubin; National Director of Public Prosecutions and Others v Acton",
    citation: "(CCT108/17) [2018] ZACC 30 (18 September 2018)",
    note: "Constitutional Court of South Africa. Unanimous judgment.",
    href: "https://www.saflii.org/za/cases/ZACC/2018/30.html",
    linkLabel: "Read the full judgment on SAFLII",
  },
  {
    icon: Landmark,
    title: "Cannabis for Private Purposes Act",
    citation: "Act 7 of 2024 (Government Gazette No. 50744, 3 June 2024)",
    note: "Signed into law by the President on 28 May 2024.",
    href: "https://www.parliament.gov.za/storage/app/media/Acts/2024/Act_7_of_2024_Cannabis_for_Private_Purposes_Act.pdf",
    linkLabel: "Read the full Act (Parliament of South Africa)",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "The story behind LeafLedger: how cannabis retail in South Africa got here, how clubs can operate legally, and why we built this platform.",
  path: "/about",
});

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
      <section className="bg-page-tint py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our story"
            title="Why we built LeafLedger"
            titleClassName="text-4xl sm:text-5xl font-bold"
            description="A short history of how cannabis retail in South Africa got here, and how we help stores and clubs run responsibly within it."
            className="max-w-2xl"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">How South Africa got here</h2>
          <div className="text-muted-foreground flex flex-col gap-4 text-base leading-7">
            <p>
              On 18 September 2018, the Constitutional Court of South Africa
              handed down a unanimous judgment in Minister of Justice and
              Constitutional Development and Others v Prince (Clarke and
              Others Intervening), together with two related appeals, National
              Director of Public Prosecutions and Others v Rubin and National
              Director of Public Prosecutions and Others v Acton (CCT108/17)
              [2018] ZACC 30. The Court found that the blanket criminal
              prohibition on the private use, possession, and cultivation of
              cannabis by adults for their own personal consumption violated
              the constitutional right to privacy. It struck down the
              relevant sections of the Drugs and Drug Trafficking Act and the
              Medicines and Related Substances Control Act, and gave
              Parliament 24 months to fix the law.
            </p>
            <p>
              Parliament responded with the Cannabis for Private Purposes Act,
              7 of 2024, published in Government Gazette No. 50744 and signed
              into law by the President on 28 May 2024. The Act formally
              recognizes an adult&apos;s right to grow, possess, and transport
              cannabis for private, personal use, sets limits on how much can
              be grown and held, and puts specific protections in place for
              children. It does not create a general licence to sell cannabis
              to the public.
            </p>
            <p>
              These changes opened the door for cannabis social clubs: groups
              where adult members grow and share cannabis together, rather
              than a shop selling to the general public. Clubs have grown
              quickly across the country, but the rules for running one
              properly are still new, and often misunderstood.
            </p>
          </div>

          <div className="border-border bg-card mt-2 flex flex-col gap-4 rounded-2xl border p-6">
            <p className="text-sm font-semibold">Primary sources</p>
            {SOURCES.map((source) => (
              <div key={source.href} className="flex gap-3">
                <source.icon className="text-primary mt-0.5 size-5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium leading-snug">{source.title}</p>
                  <p className="text-muted-foreground text-xs">
                    {source.citation}. {source.note}
                  </p>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex w-fit items-center gap-1 text-xs font-medium hover:underline"
                  >
                    {source.linkLabel}
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            ))}
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
