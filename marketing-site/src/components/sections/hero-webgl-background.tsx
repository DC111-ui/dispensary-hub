"use client";

import * as React from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useReducedMotion } from "motion/react";

const VERTEX = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Domain-warped fractal noise driving a flowing gradient mesh, plus a soft
// cursor-following highlight and a slow autonomous "light" drift so the
// surface always feels lit and alive, never static.
const FRAGMENT = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform vec3 uColor4;

  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amp * snoise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 p = uv * aspect;

    // Organic domain warp — the flowing "silk" motion — perturbing a single
    // continuous diagonal sweep, not independent blobs. Full-frame coverage,
    // no dark base: every pixel is always a live blend of the four colors,
    // matching the reference's smooth streaked-silk shape instead of patchy
    // separated pools.
    float t = uTime * 0.045;
    vec2 warp = vec2(fbm(p * 1.3 + t), fbm(p * 1.3 - t + 4.2));
    float n = fbm(p * 1.0 + warp * 0.9 + t * 0.25);

    float diag = clamp(uv.x * 0.72 + (1.0 - uv.y) * 0.5 + n * 0.22, 0.0, 1.0);

    vec3 color;
    if (diag < 0.333) {
      color = mix(uColor1, uColor2, smoothstep(0.0, 0.333, diag));
    } else if (diag < 0.666) {
      color = mix(uColor2, uColor3, smoothstep(0.333, 0.666, diag));
    } else {
      color = mix(uColor3, uColor4, smoothstep(0.666, 1.0, diag));
    }

    // Fine directional streaks running parallel to the diagonal, like brushed silk.
    float streak = sin((p.x * 0.85 - p.y * 1.05) * 140.0 + n * 6.0);
    color += streak * 0.035;

    float distCursor = distance(uv, uMouse);
    float glowCursor = smoothstep(0.5, 0.0, distCursor) * 0.16;
    color += glowCursor * vec3(1.0, 0.92, 0.75);

    vec2 driftPos = vec2(0.5 + sin(uTime * 0.15) * 0.32, 0.5 + cos(uTime * 0.12) * 0.32);
    float distDrift = distance(uv, driftPos);
    float glowDrift = smoothstep(0.5, 0.0, distDrift) * 0.12;
    color += glowDrift * uColor3;

    // Maximum-vibrancy saturation punch.
    float luma = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(vec3(luma), color, 1.55);
    color = clamp(color, 0.0, 1.0);

    float dither = (fract(sin(dot(uv * uResolution.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
    color += dither;

    gl_FragColor = vec4(color, 1.0);
  }
`;

// Variant A palette (rust -> chartreuse -> green -> teal-green) at maximum saturation
// for a bold, energetic feel rather than pastel.
const COLOR_1: [number, number, number] = [0.978, 0.18, 0.123];
const COLOR_2: [number, number, number] = [0.575, 0.95, 0.05];
const COLOR_3: [number, number, number] = [0.063, 0.777, 0.361];
const COLOR_4: [number, number, number] = [0.084, 0.756, 0.554];

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
        uMouse: { value: [0.72, 0.68] },
        uColor1: { value: COLOR_1 },
        uColor2: { value: COLOR_2 },
        uColor3: { value: COLOR_3 },
        uColor4: { value: COLOR_4 },
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

    const mouseTarget = [0.72, 0.68];
    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      mouseTarget[0] = (e.clientX - rect.left) / rect.width;
      mouseTarget[1] = 1 - (e.clientY - rect.top) / rect.height;
    }
    window.addEventListener("pointermove", onPointerMove);

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
      const cur = program.uniforms.uMouse.value as number[];
      cur[0] += (mouseTarget[0] - cur[0]) * 0.04;
      cur[1] += (mouseTarget[1] - cur[1]) * 0.04;
      renderer.render({ scene: mesh });
    }
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      inViewObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
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
