# Yogesh Amrute Portfolio — Repository Audit

**Repository:** https://github.com/yogesh185/yogesh-amrute-portfolio  
**Default branch reviewed:** `main`  
**Review date:** 12 November 2026  
**Review type:** GitHub source and asset-tree review  
**Status:** Source review completed; local build and live browser inspection not completed.

---

## 1. Executive summary

The repository is not an empty or fundamentally broken project. It already has a useful Next.js foundation, dedicated pages, reusable components, a defined dark/light palette, several custom SVG/3D-style visual assets, a substantial image library, and nine mobile reference screens.

The main problem is **design intent drift**: the codebase has accumulated a collection of individually styled sections and reference-driven labels, but the homepage does not yet tell the immersive personal story we agreed on. The current homepage is mostly a hero, availability strip, numbered directory, and footer. The deeper project, concept, studio, and personal-story experiences are separate routes, so the landing page reads more like a site index than a cinematic personal portfolio.

The most important corrections are:

1. Recompose the homepage as one continuous editorial story rather than a numbered directory.
2. Remove or verify every unsubstantiated project metric, role, date, duration, architecture claim, and performance claim.
3. Repair mismatched project imagery and replace illustrative mockups with real screenshots wherever possible.
4. Establish a single motion system and a reusable signature ribbon component; the hero currently draws its own inline SVG ribbon while a separate `GlassRibbon` component also exists.
5. Add the cartoon-character preloader as a deliberately short, skippable, non-blocking experience. No dedicated preloader component or animated character sequence is present in the repository tree.
6. Install and use focused UI/UX, frontend-design, React performance, and web-design-guideline skills.
7. Complete a real desktop/mobile, theme, accessibility, and production-build test pass before declaring the portfolio ready.

### Overall assessment

| Area | Assessment | Priority |
|---|---|---|
| Next.js foundation | Good starting point | Medium |
| Homepage storytelling | Does not yet match the agreed vision | Critical |
| Project accuracy | Several unverified claims and at least one wrong image mapping | Critical |
| Design-system consistency | Tokens exist, but component and motion usage is fragmented | High |
| Animation system | Framer Motion is present; no unified choreography or dedicated loader | High |
| Mobile navigation/accessibility | Functional baseline; keyboard and focus behaviour need work | High |
| Assets | Rich starting library; duplicates and inconsistent naming | Medium |
| SEO/domain configuration | Domain is hardcoded before final domain choice | High |
| Tests/build verification | No test suite found in the reviewed tree; build not run | High |
