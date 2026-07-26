"use client";

import * as React from "react";
import { AlertTriangle, ArrowUp, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const MAX_LENGTH = 500;

const DEMO_QUESTIONS = [
  "How much does the Growth plan cost?",
  "Does LeafLedger support WhatsApp ordering?",
  "Can I run more than one store on one account?",
  "What happens during a compliance inspection?",
];

const TYPE_MS = 32;
const DELETE_MS = 18;
const HOLD_MS = 1500;
const GAP_MS = 400;

function GuideChat() {
  const [value, setValue] = React.useState("");
  const [isUserEditing, setIsUserEditing] = React.useState(false);
  const [showNotice, setShowNotice] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  React.useEffect(() => {
    if (isUserEditing) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      timerRef.current = setTimeout(() => setValue(DEMO_QUESTIONS[0]), 0);
      return () => clearTimeout(timerRef.current);
    }

    let questionIndex = 0;
    let charIndex = 0;
    let phase: "typing" | "holding" | "deleting" = "typing";

    function tick() {
      const question = DEMO_QUESTIONS[questionIndex];

      if (phase === "typing") {
        charIndex += 1;
        setValue(question.slice(0, charIndex));
        if (charIndex >= question.length) {
          phase = "holding";
          timerRef.current = setTimeout(tick, HOLD_MS);
        } else {
          timerRef.current = setTimeout(tick, TYPE_MS);
        }
        return;
      }

      if (phase === "holding") {
        phase = "deleting";
        timerRef.current = setTimeout(tick, DELETE_MS);
        return;
      }

      // deleting
      charIndex -= 1;
      setValue(question.slice(0, charIndex));
      if (charIndex <= 0) {
        questionIndex = (questionIndex + 1) % DEMO_QUESTIONS.length;
        phase = "typing";
        timerRef.current = setTimeout(tick, GAP_MS);
      } else {
        timerRef.current = setTimeout(tick, DELETE_MS);
      }
    }

    timerRef.current = setTimeout(tick, GAP_MS);
    return () => clearTimeout(timerRef.current);
  }, [isUserEditing]);

  function stopDemo() {
    if (isUserEditing) return;
    clearTimeout(timerRef.current);
    setIsUserEditing(true);
    setValue("");
  }

  function handleSend(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim().length === 0) return;
    setShowNotice(true);
  }

  return (
    <div className="border-border bg-card mx-auto mt-12 flex max-w-xl flex-col overflow-hidden rounded-2xl border shadow-xl">
      <div className="border-border flex items-center gap-2.5 border-b px-5 py-3.5">
        <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg">
          <Sparkles className="size-3.5" />
        </span>
        <span className="text-sm font-semibold">LeafLedger Guide</span>
      </div>

      <div className="flex flex-col gap-2 px-5 py-6">
        <p className="text-sm leading-relaxed">
          Ask about LeafLedger&apos;s features, pricing, or whether it fits how your store runs —
          I&apos;ll help you find the answer.
        </p>
        <p className="text-muted-foreground text-xs">
          Responses are generated using AI and may contain mistakes.
        </p>
      </div>

      {showNotice ? (
        <div className="border-destructive/30 bg-destructive/10 mx-5 mb-4 flex items-start gap-2 rounded-lg border px-3 py-2.5 text-sm">
          <AlertTriangle className="text-destructive mt-0.5 size-4 shrink-0" />
          <p className="text-destructive">AI assistance will be available soon.</p>
        </div>
      ) : null}

      <form onSubmit={handleSend} className="border-border flex flex-col gap-2 border-t p-3">
        <div className="flex items-end gap-2">
          <textarea
            value={value}
            onFocus={stopDemo}
            onChange={(event) => setValue(event.target.value.slice(0, MAX_LENGTH))}
            placeholder="Ask something..."
            aria-label="Ask the assistant"
            rows={2}
            className={cn(
              "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex-1 resize-none rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2"
            )}
          />
          <button
            type="submit"
            disabled={value.trim().length === 0}
            aria-label="Send"
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-md transition-colors",
              value.trim().length > 0
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-secondary-foreground opacity-60"
            )}
          >
            <ArrowUp className="size-4" />
          </button>
        </div>
        <span className="text-muted-foreground self-end text-xs tabular-nums">
          {value.length}/{MAX_LENGTH}
        </span>
      </form>
    </div>
  );
}

export { GuideChat };
