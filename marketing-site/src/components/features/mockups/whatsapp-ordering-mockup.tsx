import { PhoneFrame } from "./shell";
import { DEMO_BUSINESS } from "@/lib/constants/demo-data";

function Bubble({
  from,
  children,
}: {
  from: "customer" | "store";
  children: React.ReactNode;
}) {
  return (
    <div className={from === "customer" ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          from === "customer"
            ? "bg-primary text-primary-foreground max-w-[85%] rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] leading-snug"
            : "bg-secondary text-secondary-foreground max-w-[85%] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] leading-snug"
        }
      >
        {children}
      </div>
    </div>
  );
}

function WhatsappOrderingMockup() {
  return (
    <PhoneFrame label={`${DEMO_BUSINESS} · WhatsApp`}>
      <div className="flex h-full flex-col gap-2.5 overflow-hidden bg-[oklch(0.97_0.01_155)] p-3 dark:bg-[oklch(0.22_0.02_155)]">
        <Bubble from="customer">Hi, is Blue Dream in stock?</Bubble>
        <Bubble from="store">
          Yes! Blue Dream 3.5g is R280, 34 units in stock at Cape Town CBD.
        </Bubble>
        <Bubble from="customer">Great, I&apos;ll take one plus 2x OG Kush pre-rolls</Bubble>
        <Bubble from="store">
          <div className="space-y-1">
            <p className="font-semibold">Order #4821</p>
            <p>Blue Dream 3.5g — R280</p>
            <p>OG Kush Pre-Roll ×2 — R130</p>
            <p className="border-border/40 mt-1 border-t pt-1 font-semibold">Total: R410</p>
          </div>
        </Bubble>
        <Bubble from="store">Ready for pickup in 20 minutes. See you soon 🌿</Bubble>
      </div>
    </PhoneFrame>
  );
}

export { WhatsappOrderingMockup };
