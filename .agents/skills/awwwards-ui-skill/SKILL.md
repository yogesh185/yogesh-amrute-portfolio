---
name: awwwards-ui-skill
description: Open-source design engineering skill enforcing Awwwards-caliber visual craft, choreographed motion, physics, dynamic layout hierarchy, and 60fps performance standards.
---

# Awwwards UI & Motion Engineering Standards

## 1. Intentional Art Direction & Visual Atmosphere
- **Reject Generic Component Layouts:** Avoid default SaaS card grids, unstyled flat rectangles, or template-like interfaces. Build with strong architectural intent, dramatic whitespace, and layered depth.
- **Dynamic Viewport Composition:** Treat the entire viewport as a cinematic canvas. Utilize full-bleed editorial heroes, dynamic split viewports, asymmetric bento layouts, and controlled depth planes.
- **Materiality & Light:** Layer translucent caustics, backdrop blurs (`backdrop-blur-md` to `backdrop-blur-xl`), specular edge highlights, and subtle ambient gradients. Never use harsh flat solid panels when depth can be established organically.

## 2. Advanced Motion Choreography & Physics
- **Physics-Based Transitions:** Replace abrupt linear or basic ease-in-out transitions with tuned cubic-bezier curves (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.25, 1, 0.5, 1)`) or spring dynamics with matched damping/stiffness.
- **Hierarchical Staggering:** Elements must never enter simultaneously as a flat block. Choreograph reveals with intentional offsets (20ms–60ms per child) to guide the viewer's eye.
- **Scroll Choreography:** Utilize scroll velocity, progress interpolation, and pinned section sequences. Avoid scroll hijacking; enhance native scroll mechanics with smooth interpolation (e.g., Lenis or Framer Motion `useScroll`).

## 3. High-Contrast Editorial Typography
- **Architectural Scale:** Create extreme visual contrast between dramatic display headlines (serif or geometric grotesk) and precise monospace metadata.
- **Tracking & Leading:** Tighten display headings (`tracking-tighter` / `tracking-tight`) and air out small mono labels (`tracking-widest` / `tracking-[0.2em]`).
- **Interactive Type:** Subtle letter-spacing shifts, underline slide physics, or kinetic typography reveals on scroll and hover.

## 4. Tactile Micro-Interactions
- **Magnetic Surfaces:** Interactive buttons, pills, and cursor anchors pull slightly toward the pointer when hovering within activation thresholds.
- **Multi-State Feedback:** Buttons and cards react across idle, hover, active (press), focus, and success states with tactile transform scaling (`scale(0.98)` on press).
- **Smooth Cursor Dynamics:** Fluid cursor tracking with lerp interpolation, contextual label badges ("Explore", "Drag", "View"), and `mix-blend-mode` interaction where appropriate.

## 5. UI-Max Scorecard Criteria (Target: 90+/100)
- `MOTION-01`: Cohesive easing curves across all components.
- `LAYOUT-01`: Viewport-tailored negative space and asymmetric balance.
- `DEPTH-01`: Multi-plane parallax or caustics without layout thrashing.
- `A11Y-01`: WCAG AA contrast (4.5:1 text, 3:1 graphical) and keyboard navigation.
- `PERF-01`: Zero jank, hardware-accelerated transforms (`transform`, `opacity`), clean RAF / timer teardowns, and strict `prefers-reduced-motion` compliance.
