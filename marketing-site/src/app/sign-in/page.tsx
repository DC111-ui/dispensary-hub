import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PageRibbon } from "@/components/shared/page-ribbon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Sign in",
    description: "Sign in to your LeafLedger account.",
    path: "/sign-in",
  }),
  // Design preview only — not wired up to real auth yet, so keep it out of search results.
  robots: { index: false, follow: false },
};

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4c-7.4 0-13.8 4.1-17.1 10.1z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4c-2 1.4-4.6 2.3-7.6 2.3-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.9 39.7 16.4 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.6 5.4C39.8 37.4 44 31.7 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export default function SignInPage() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-16">
      <PageRibbon className="-top-32 right-[-30%] rotate-[-10deg]" />
      <Container className="flex justify-center">
        <div className="border-border bg-card w-full max-w-sm overflow-hidden rounded-2xl border shadow-xl">
          <div className="flex flex-col gap-6 p-8">
            <h1 className="text-xl font-semibold tracking-tight">
              Sign in to your account
            </h1>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Work email
                </label>
                <Input id="email" type="email" placeholder="jane@yourstore.co.za" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <a href="#" className="text-primary text-xs font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Sign in
              </Button>
            </form>

            <div className="flex items-center gap-3">
              <div className="border-border h-px flex-1 border-t" />
              <span className="text-muted-foreground text-xs">Or continue with</span>
              <div className="border-border h-px flex-1 border-t" />
            </div>

            <Button type="button" variant="outline" size="lg" className="w-full gap-2">
              <GoogleIcon className="size-4" />
              Continue with Google
            </Button>
          </div>

          <div className="border-border bg-secondary/40 flex items-center justify-center gap-1 border-t px-8 py-4 text-sm">
            <span className="text-muted-foreground">New to LeafLedger?</span>
            <Link
              href="/contact"
              className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
            >
              Book a free demo
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
