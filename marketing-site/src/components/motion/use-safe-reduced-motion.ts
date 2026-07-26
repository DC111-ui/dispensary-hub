"use client";

import * as React from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Reduced-motion check that's safe to use directly in render output (`initial`,
 * `animate`, `variants`, etc). Reads matchMedia via useSyncExternalStore, whose
 * server snapshot always matches SSR's "no preference" assumption — avoiding
 * the hydration mismatch that a plain `useReducedMotion()` causes for real
 * reduced-motion users, since that hook resolves synchronously from
 * matchMedia on the client's first render, before SSR could ever know it.
 */
function useSafeReducedMotion(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export { useSafeReducedMotion };
