"use client";

import * as React from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useReducedMotion } from "motion/react";

const VERTEX = /* glsl */ `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Three sine-wave "light strand" bands, offset by a radial distortion — the
// same technique as a classic flowing-wave shader, but recolored so each band
// drives a brand hue (ink / purple / ledger-green) instead of a literal RGB
// channel. That keeps the motion reading as one lit ribbon in the site's own
// palette instead of an RGB rainbow fringe.
const FRAGMENT = /* glsl */ `
  precision highp float;

  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec3 uColorInk;
  uniform vec3 uColorPurple;
  uniform vec3 uColorGreen;

  // A single glowing ribbon: a sine-driven line, repeated vertically (so it
  // fills a tall panel instead of only showing near one center line) with a
  // bounded Gaussian falloff instead of raw 1/x division — division blows
  // out to solid white wherever two bands nearly overlap, which is exactly
  // what happens when the whole panel shares one distortion origin. Gaussian
  // falloff keeps every ribbon within its own color's range.
  float ribbon(vec2 p, float spacing, float phase, float xScale, float amp, float width) {
    float py = fract((p.y + phase * spacing) / spacing + 0.5) - 0.5;
    py *= spacing;
    float wave = py + sin((p.x + uTime * 0.075) * xScale + phase * 5.0) * amp;
    return exp(-(wave * wave) / (2.0 * width * width));
  }

  void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);

    float purpleGlow = ribbon(p, 0.6, 0.0, 1.25, 0.2, 0.065);
    float greenGlow = ribbon(p, 0.6, 0.33, 1.05, 0.17, 0.06);

    vec3 color = uColorInk;
    color = mix(color, uColorPurple, clamp(purpleGlow * 2.0, 0.0, 1.0));
    color = mix(color, uColorGreen, clamp(greenGlow * 1.9, 0.0, 1.0));

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`;

// Ledger palette: ink navy as the base band, Stripe-blurple purple (the same
// value used for --primary elsewhere) and the olive-green already used at the
// tail of .bg-brand-glow / .brand-ribbon — so the shader draws from the same
// two brand hues as the rest of the site instead of inventing new ones.
const COLOR_INK: [number, number, number] = [0.086, 0.086, 0.184];
const COLOR_PURPLE: [number, number, number] = [0.46, 0.4, 1.0];
const COLOR_GREEN: [number, number, number] = [0.62, 0.88, 0.22];

function HeroWebglBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio || 1, 2), alpha: true });
    } catch {
      return;
    }
    const gl = renderer.gl;
    if (!gl) return;

    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: VERTEX,
      fragment: FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
        uColorInk: { value: COLOR_INK },
        uColorPurple: { value: COLOR_PURPLE },
        uColorGreen: { value: COLOR_GREEN },
      },
    });
    const mesh = new Mesh(gl, { geometry, program, frustumCulled: false });

    function resize(width: number, height: number) {
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    }
    // ResizeObserver (not a single synchronous getBoundingClientRect + window
    // "resize" listener) because the container's size isn't guaranteed to be
    // settled the instant this effect runs — a plain one-shot call can read 0x0
    // before layout completes and then never get a retry, since window only
    // fires "resize" on viewport changes, not on this element's own layout.
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      resize(width, height);
    });
    resizeObserver.observe(container);

    let tabVisible = true;
    function onVisibility() {
      tabVisible = document.visibilityState === "visible";
    }
    document.addEventListener("visibilitychange", onVisibility);

    // Scrolling the hero out of view shouldn't leave this rAF loop running
    // for the rest of the page — it's a decorative background, not worth
    // the continuous GPU/main-thread cost once it's off-screen.
    let inView = true;
    const inViewObserver = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    inViewObserver.observe(container);

    let raf = 0;
    const start = performance.now();
    function update(now: number) {
      raf = requestAnimationFrame(update);
      if (!tabVisible || !inView) return;
      program.uniforms.uTime.value = (now - start) * 0.001;
      renderer.render({ scene: mesh });
    }
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      inViewObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      container?.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [reduce]);

  // Always render the same wrapper on server and client — only the effect above
  // (which server-side rendering never runs anyway) decides whether WebGL mounts.
  // Branching the returned JSX itself on `reduce` would mismatch SSR, which can't
  // know the client's motion preference.
  return <div ref={containerRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export { HeroWebglBackground };
