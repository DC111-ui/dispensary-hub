import dynamic from "next/dynamic";

export const LazyReveal = dynamic(() => import("./reveal").then((m) => m.Reveal));
export const LazyRevealGroup = dynamic(() => import("./reveal-group").then((m) => m.RevealGroup));
export const LazyRevealItem = dynamic(() => import("./reveal-group").then((m) => m.RevealItem));
