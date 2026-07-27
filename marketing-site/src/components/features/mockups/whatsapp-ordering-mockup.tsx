import { ChevronLeft, Phone, Video } from "lucide-react";

import { PhoneFrame } from "./shell";
import { DEMO_BUSINESS } from "@/lib/constants/demo-data";
import { cn } from "@/lib/utils";

// This depicts WhatsApp itself, not LeafLedger's own UI — WhatsApp's real
// teal header and green outgoing bubbles are the accurate colors here,
// independent of LeafLedger's own brand palette.
function Bubble({ from, children }: { from: "customer" | "store"; children: React.ReactNode }) {
  const outgoing = from === "store";
  return (
    <div className={outgoing ? "flex justify-end" : "flex justify-start"}>
      <div
        className={cn(
          "max-w-[85%] rounded-lg px-2.5 py-1.5 text-[11px] leading-snug text-[#111b21] shadow-sm dark:text-[#e9edef]",
          outgoing
            ? "rounded-tr-none bg-[#d9fdd3] dark:bg-[#005c4b]"
            : "rounded-tl-none bg-white dark:bg-[#202c33]"
        )}
      >
        {children}
      </div>
    </div>
  );
}

function WhatsappOrderingMockup() {
  return (
    <PhoneFrame
      header={
        <div className="flex items-center gap-2 bg-[#075e54] px-3 pt-7 pb-2.5 dark:bg-[#1f2c34]">
          <ChevronLeft className="size-4 shrink-0 text-white/90" />
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold text-white">
            {DEMO_BUSINESS.slice(0, 2).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">{DEMO_BUSINESS}</p>
            <p className="text-[10px] text-white/70">online</p>
          </div>
          <Video className="size-4 shrink-0 text-white/90" />
          <Phone className="size-3.5 shrink-0 text-white/90" />
        </div>
      }
    >
      <div
        className="flex h-full flex-col gap-2 bg-[#efeae2] bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:14px_14px] p-3 dark:bg-[#0b141a] dark:bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]"
      >
        <Bubble from="customer">Hi, is Blue Dream in stock?</Bubble>
        <Bubble from="store">
          Yes! Blue Dream 3.5g is R280, 34 units in stock at Cape Town CBD.
        </Bubble>
        <Bubble from="customer">Great, I&apos;ll take one plus 2x OG Kush pre-rolls</Bubble>
        <Bubble from="store">
          <div className="space-y-1">
            <p className="font-semibold">Order #4821</p>
            <p>Blue Dream 3.5g: R280</p>
            <p>OG Kush Pre-Roll ×2: R130</p>
            <p className="mt-1 border-t border-black/10 pt-1 font-semibold dark:border-white/10">
              Total: R410
            </p>
          </div>
        </Bubble>
        <Bubble from="store">Ready for pickup in 20 minutes. See you soon 🌿</Bubble>
      </div>
    </PhoneFrame>
  );
}

export { WhatsappOrderingMockup };
