---
name: yogesh-portfolio-motion
description: Animation tiers, ribbon rendering guidelines, and preloader requirements for the portfolio.
---

# Yogesh Amrute Portfolio — Motion Standards

## 4 Motion Tiers
1. **Tier 1 — Signature Scene Motion:**
   - Hero entrance choreography, signature iridescent cobalt ribbon flow, and section transitions.
   - Restrained, cinematic; never distract from readability.
2. **Tier 2 — Section Motion:**
   - Scroll-triggered typography reveals and subtle image parallax.
   - Smooth staggered entrances (`opacity: 0, y: 20` to `opacity: 1, y: 0`).
3. **Tier 3 — Component Motion:**
   - Nav overlay with dialog semantics, filter pills, button hover lifts (`translateY(-2px)`), modal entrance.
4. **Tier 4 — Ambient Motion:**
   - Micro-pulse on availability indicator, subtle caustic lighting on the glass ribbon.

## Single Source of Truth for Glass Ribbon
- Standardize on `src/components/ui/GlassRibbon.tsx`.
- Avoid separate, competing inline SVG implementations.
- Features: Realistic specular reflections, translucent cobalt blue caustic gradients, subtle pointer micro-parallax.

## Accessibility & Reduced Motion
- Respect `prefers-reduced-motion` across both CSS and Framer Motion JavaScript hooks.
- Set transition durations to `0.01ms` when reduced motion is preferred.
