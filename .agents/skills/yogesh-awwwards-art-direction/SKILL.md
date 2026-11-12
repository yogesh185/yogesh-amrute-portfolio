---
name: yogesh-awwwards-art-direction
description: High-tier Awwwards-caliber creative direction, intentional motion choreography, immersive storytelling, and technical excellence specifically tailored for the Yogesh Amrute portfolio.
---

# Yogesh Amrute Portfolio — Awwwards Art Direction & Engineering Standards

## 1. Award-Winning Creative Direction
- **Atmospheric Palette Preservation:**
  - **Dark (Midnight Cinema):** Base `#080D1B`, Deep Navy `#0D1428`, Elevated Surfaces `#111B33` / `#162442`, Electric Cobalt `#315CFF` (accents), Cyan Luminescence `#00F2FE`, Lime Highlight `#B7FF4A` (availability/active states), Pure Text `#F8FAFC`, Muted Slate `#94A3B8`.
  - **Light (Architectural Editorial Studio):** Base `#F3F0E9`, Studio Warm Paper `#EBE8E1`, Crisp Card Surfaces `#FFFEFA`, Dark Ink `#17191D`, Muted Stone `#686C75`, Royal Cobalt `#2563EB`, Lime Accent `#A5E83E`.
- **Materiality & Light:** Layer subtle caustic refractions, ambient gradient meshes, and frosted glass borders (`rgba(255,255,255,0.08)` dark, `rgba(0,0,0,0.06)` light). Never use heavy flat gray containers or muddy gradients.
- **Uncontainerized Subject Philosophy:** Human portraits (seated Yogesh hero, profile portrait, and tournament Judo action) must NEVER be enclosed within hard-bordered card boxes or heavy rounded containers. They must blend organically into the scene via feathered radial masks, gradient dissolves, and atmospheric back-glow.

## 2. Immersive Storytelling & Narrative Flow
- **Single Continuous Journey:** The homepage unfolds as a cohesive editorial story rather than a modular directory or catalog grid:
  1. *Hero Scene:* Statement of intent + seated Yogesh portrait entwined with the signature cobalt glass ribbon.
  2. *Live Availability Bar:* Quiet engineering status with lime pulse.
  3. *Editorial Introduction:* Monographic philosophy statement (*"Curiosity creates. Technology brings it to life."*) + profile portrait.
  4. *Selected Work:* Alternating full-bleed flagship case studies (Intrust India, Aadi Seeds, YARVO.agency, Doc AI).
  5. *Capabilities:* Architectural disciplines with interactive focus states.
  6. *Concept Lab:* Futuristic research prototypes (AVARA, ORBIT, NEXUS) with explicit prototype disclosures.
  7. *YARVO Studio:* The venture story centered around the 3D crystal asset.
  8. *Life Beyond Tech:* Multi-dimensional humanity (authentic tournament Judo, guitar, football, chess, mountain sunset).
  9. *Closing Contact Canvas:* Direct email/social dialogue without artificial forms.
- **No Mockup Annotations:** Never expose design board numbers (`Screen 01`, `01 // DIRECTORY`, `SCREEN 08 // LIFE BEYOND TECH`). All metadata must read as refined editorial typography.

## 3. Experimental Layouts & Navigation
- **Editorial Asymmetry:** Break rigid symmetrical columns with dynamic editorial rhythms: alternating image-text visual weights, offset typography baselines, and generous negative space.
- **Full-Screen Staggered Navigation Dialog:**
  - Semantic dialog overlay (`role="dialog"`, `aria-modal="true"`).
  - Trapped keyboard focus and `Escape` key close.
  - Large-scale editorial typography with hover magnetic drift and accent line expansion.
  - Smooth View Transitions API for theme switches without layout jumps.
- **Quick-Jump Route Continuity:** Maintain dedicated deep routes (`/work/[slug]`, `/experiments`, `/studio`, `/about`, `/beyond-tech`, `/contact`) while preserving the homepage as the primary narrative spine.

## 4. Advanced Motion Choreography & Scroll-Driven Animation
- **Purpose-Driven Motion Rule:** Zero gratuitous animation. Every motion must orient the user, express weight/physics, or signal interactive potential.
- **4-Tier Motion Hierarchy:**
  - *Tier 1 (Signature Scene):* Glass ribbon floating caustics, hero reveal choreography, preloader resolve.
  - *Tier 2 (Scroll Choreography):* Scroll-driven image reveals via CSS clip-path or Framer Motion `useScroll`, clamped to container refs to prevent runaway parallax.
  - *Tier 3 (Component Micro-Interactions):* Magnetic pull on buttons, filter pill sliding active indicators, modal spring scales.
  - *Tier 4 (Ambient Life):* Quiet breathing glow on status indicators, subtle caustics.
- **Signature Physics & Easing:**
  - Smooth custom bezier: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) for natural deceleration.
  - Spring dynamics: `stiffness: 260, damping: 20` for responsive tactile controls.
- **Single Source of Truth for Glass Ribbon:** All ribbon instances use `src/components/ui/GlassRibbon.tsx` with layered specular highlights, dynamic gradients, and pointer micro-tilt.

## 5. 3D, WebGL & Asset Materiality
- **Asset Authenticity Doctrine:** Never replace genuine photographs with generic AI-generated imagery. Preserve Yogesh's actual tournament Judo photo, personal hero portrait, guitar, sports, and chess photography.
- **Lightweight 3D Craft:**
  - YARVO 3D Crystal: High-resolution rendered crystal with CSS/WebGL lighting accents.
  - Glass Ribbon: Multi-layered SVG with layered specular path highlights, linear caustic stops, and radial ambient back-glow.
  - Optimized vector schematics: SVG interface diagrams for Doc AI rather than unverified screenshots.
- **GPU-Friendly Rendering:** Animate exclusively `transform` and `opacity`. Avoid continuous filter blurs or layout-triggering properties (`width`, `height`, `margin`) during scroll.

## 6. Premium Editorial Typography
- **Contrast of Scale:** Dramatic scale differential between editorial display headings (tight tracking, optical line-heights) and monospace technical tags (`font-mono`, `text-xs`, `tracking-[0.2em]`, uppercase).
- **Type Pairing:**
  - Display/Headings: Clean modern geometric sans with tight tracking (`tracking-tight` / `tracking-tighter`) or editorial serif accents.
  - Technical & Metadata: Monospace with letter-spacing for dates, architectural categories, and tech pills.
  - Body: High-readability sans with `leading-relaxed` (1.65–1.75 line-height).

## 7. Tactile Micro-Interactions
- **Magnetic Buttons & Links:** Subtle translation towards pointer when hovering within activation threshold.
- **Tactile Active Feedback:** Subtly depress on click (`scale(0.97)` to `scale(0.98)`).
- **Smooth Theme Transition:** Theme toggle triggers circular or smooth cross-fade via CSS view transitions.

## 8. Preloader Lifecycle
- **Cartoon Character Experience (`PortfolioPreloader.tsx` + `CharacterAnimation.tsx`):**
  - Crisp animated SVG of Yogesh at desk coding $\rightarrow$ looks up $\rightarrow$ celebratory thumbs-up 👍 $\rightarrow$ resolves into `YA.` monogram and glass ribbon.
  - Runs at most once per session (`sessionStorage`).
  - Capped at 2.4s max duration.
  - Prominent `Skip [Esc]` button and keyboard `Escape` dismiss.
  - Instant bypass for `prefers-reduced-motion`.

## 9. Responsive Adaptation
- **Full Viewport Spectrum:**
  - Compact Mobile: `320px`, `375px`, `390px`, `430px` (single-column fluid stacking, zero horizontal overflow, touch targets $\ge 44\text{px}$).
  - Tablet: `768px`, `820px` (balanced split grids, scaled display typography).
  - Desktop & Ultrawide: `1024px`, `1280px`, `1440px`, `1920px` (generous margins, max-w-7xl containers, asymmetric balance).
- **Reduced Parallax on Touch:** Disable heavy scroll-linked parallax on touch devices to avoid frame drops and battery drain.

## 10. Performance, Accessibility & Verification (UI-Max Scorecard $\ge 90/100$)
- **A11y:**
  - 100% semantic interactive elements (`<button>`, `<a>`, `<dialog>`).
  - WCAG AA contrast compliance in both Dark and Light themes.
  - Visible focus rings (`focus-visible:ring-2 focus-visible:ring-[var(--blue)]`).
  - ARIA dialog, status, and alert semantics.
- **Zero Hydration Mismatch & Strict Type Safety:**
  - Verified static compilation with Next.js and TypeScript (`next build --webpack`).
  - All routes must return `HTTP 200 OK`.
