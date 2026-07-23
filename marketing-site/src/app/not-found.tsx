import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">
          404
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="text-muted-foreground max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/">
          <Button size="lg">
            Back to home
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </Container>
    </section>
  );
}
