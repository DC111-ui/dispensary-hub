const GRADIENT =
  "radial-gradient(circle, hsl(85 60% 70%) 0%, hsl(150 55% 58%) 42%, hsl(165 50% 55%) 68%, transparent 88%)";

const GRAIN_IMAGE =
  "repeating-linear-gradient(115deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 1px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px, transparent 4px, transparent 7px)";

/** Fades the blob to transparent so it dissolves into the page background
 *  instead of a hard-edged circle — same technique as the homepage hero. */
const FADE_MASK =
  "radial-gradient(ellipse 75% 75% at 78% 15%, black 0%, rgba(0,0,0,0.7) 40%, transparent 78%)";

/**
 * A restrained, static (no motion, no WebGL) version of the homepage hero's
 * atmosphere: one soft glowing blob tucked in a corner, fading into the page,
 * rather than a flat gradient banner filling the whole section.
 */
function PageHeaderGlow() {
  const maskStyle = {
    WebkitMaskImage: FADE_MASK,
    maskImage: FADE_MASK,
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-32 right-[-12%] h-[560px] w-[560px]" style={maskStyle}>
        <div
          className="absolute inset-0 opacity-80 blur-[70px] dark:opacity-45"
          style={{ background: GRADIENT }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-50"
          style={{ backgroundImage: GRAIN_IMAGE }}
        />
      </div>
    </div>
  );
}

export { PageHeaderGlow };
