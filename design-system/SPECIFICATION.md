# Yogesh Amrute Portfolio — Design System Specification

## 1. Color System & Palettes

The portfolio supports two first-class themes with identical contrast fidelity and no arbitrary inversion.

### Dark Mode (Primary Palette)
- **Canvas / Background**: `#080D1B` (Deep galactic cobalt-black)
- **Card Surface**: `rgba(15, 23, 42, 0.7)` with `backdrop-blur-md`
- **Subtle Surface**: `rgba(255, 255, 255, 0.04)`
- **Border Default**: `rgba(255, 255, 255, 0.08)`
- **Border Highlight**: `rgba(59, 130, 246, 0.4)`
- **Primary Text**: `#F8FAFC`
- **Muted Text**: `#94A3B8`
- **Accent Primary**: `#3B82F6` (Electric Cobalt)
- **Accent Secondary**: `#00F2FE` (Cyan Luminescence)

### Light Mode (Secondary Palette)
- **Canvas / Background**: `#F8F9FA` (Clean architectural off-white)
- **Card Surface**: `rgba(255, 255, 255, 0.85)` with `backdrop-blur-md`
- **Subtle Surface**: `rgba(0, 0, 0, 0.03)`
- **Border Default**: `rgba(0, 0, 0, 0.08)`
- **Border Highlight**: `rgba(37, 99, 235, 0.35)`
- **Primary Text**: `#0F172A`
- **Muted Text**: `#64748B`
- **Accent Primary**: `#2563EB`
- **Accent Secondary**: `#0EA5E9`

---

## 2. Typography

- **Display & Headings**: Inter / System Sans Serif with tight tracking (`tracking-tight` / `tracking-tighter`), high-impact font weights (`font-semibold`, `font-bold`).
- **Body**: Fluid, high-legibility sans-serif with comfortable line height (`leading-relaxed`).
- **Labels & Metadata**: Monospace (`font-mono`, `text-xs`, `tracking-widest`, `uppercase`). Never use raw mockup annotations like `Screen 01` or `01 // DIRECTORY`.

---

## 3. Motion System & Hierarchy

1. **Signature Scene Motion (Hero Reveal & Ribbon)**:
   - Ribbon uses fluid cubic-bezier easing `[0.16, 1, 0.3, 1]` with slow ambient float.
   - Framer Motion manages transform and opacity; no layout thrashing or unbounded scroll drift.
2. **Section Transitions**:
   - Scroll reveals fade in with slight `y: 20 -> 0` translation and staggered children.
3. **Component Interactions**:
   - Buttons and cards use subtle hover lift `scale: 1.015` or `-translate-y-1`.
   - Modals and overlays trap focus, lock body scroll, and support `Escape` dismiss.
4. **Preloader Lifecycle**:
   - Plays at most once per session via `sessionStorage` (`ya_preloader_seen_v1`).
   - Skippable via keyboard `Escape` or prominent skip pill.
   - Automatically bypassed if user has `prefers-reduced-motion` enabled.
   - Max duration capped at 2.4s.

---

## 4. Asset & Imagery Integrity

- **Uncontainerized Portraits**: Human portraits must be feathered smoothly into background gradients rather than framed in hard card boxes.
- **Authentic Only**: Only Yogesh's verified tournament Judo photograph, acoustic guitar, sports, and chess photography are permitted. No generic AI stock models.
- **Concept Prototype Boundary**: All experimental labs (AVARA, ORBIT, NEXUS) must feature explicit "Concept Study" / "Research Prototype" badges to preserve engineering credibility.
