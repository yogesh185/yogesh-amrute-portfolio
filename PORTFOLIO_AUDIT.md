<USER_REQUEST>
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

---

## 2. Repository structure and technology

### Confirmed stack

- Next.js `^16.1.1`
- React / React DOM `^19.2.3`
- TypeScript `^5.7.0`
- Tailwind CSS `^4.1.0`
- Framer Motion `^12.23.0`
- Lucide React `^0.468.0`
- ESLint 9 / `eslint-config-next`

There is no GSAP, ScrollTrigger, Three.js, React Three Fiber, Playwright, Vitest, or Jest dependency in `package.json` as reviewed. This is not automatically a defect: Framer Motion and CSS can deliver much of the interface motion. However, the planned cinematic scroll choreography and 3D glass-ribbon work need an explicit implementation decision rather than being implied by capability labels.

### Current architecture

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
    about/page.tsx
    beyond-tech/page.tsx
    contact/page.tsx
    experiments/page.tsx
    studio/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    robots.ts
    sitemap.ts
  components/
    hero/Hero.tsx
    navigation/Navbar.tsx
    modals/ProjectModal.tsx
    sections/*
    ui/GlassRibbon.tsx
  data/
    portfolioData.ts
public/
  art/
  images/
    concepts/
    extracted/
    personal/
    profile/
    projects/
    refined/
    screens/
```

The architecture is a workable base. It needs clearer separation between content data, page composition, shared design primitives, motion primitives, and one-off case-study presentations.

---

## 3. Homepage and information architecture

### Critical: homepage currently acts as a directory

**File:** `src/app/page.tsx`

The homepage currently renders:

- `Navbar`
- `Hero`
- An availability/status strip
- A `DIRECTORY_ITEMS` list called “Selected Spaces”
- `Footer`

The homepage does not currently include the complete story we planned: selected-work presentation, capabilities, concept lab preview, YARVO studio story, About introduction, Beyond Tech photography, and the closing contact scene.

The actual experience is distributed among routes. The routes exist, but the landing page does not give visitors enough of the person and work before asking them to navigate away.

**Required correction:** rebuild the homepage as a connected, scroll-led editorial experience. Keep the supporting routes, but give the homepage a meaningful preview of every major part of the story.

### High: visible numbering and screen-reference language

Examples found in user-facing content include:

- `01 // DIRECTORY` and numbered directory items in `src/app/page.tsx`.
- `SCREEN 08 // LIFE BEYOND TECH` in `src/app/about/page.tsx`.
- `01 // MUSIC`, `02 // SPORTS`, and similar labels in `src/components/sections/BeyondTechSection.tsx`.
- README descriptions that refer to “Screen 03”, “Screen 4”, etc.

The numbering in the design reference was for annotating mockups, not for display on the actual public website. Remove screen-number language and avoid turning the landing page into a numbered sitemap. Small editorial metadata is fine when it adds meaning, but not when it exposes design-board annotations.

### Recommended homepage sequence

1. Cinematic hero: approved seated portrait, headline, cobalt glass ribbon, quiet availability note.
2. Short introduction: “Curiosity creates. Technology brings it to life.”
3. Selected work: Intrust India, Aadi Seeds, YARVO.agency, Doc AI.
4. Capabilities: Engineering, AI & Intelligence, Digital Experiences, Product Thinking.
5. Concept Lab: AVARA, ORBIT, NEXUS, each labelled as an independent concept.
6. YARVO Studio: brief founder-led venture story.
7. About: portrait, background, approach, personal voice.
8. Beyond the Pixels: music, martial arts, football/goalkeeping, chess, travel.
9. Contact: cinematic close with a clear email/social CTA.

Do not simply stack nine cards. Use a sequence of editorial compositions, large images, varied scale, and intentional transitions.

---

## 4. Hero audit

**File:** `src/components/hero/Hero.tsx`

### What is already good

- The existing hero portrait asset path `/images/profile/hero-portrait.png` exists.
- The approved black-jacket / white-T-shirt portrait direction is already represented in the asset library.
- The hero includes an SVG ribbon motif, an ambient glow, a portrait mask, and entrance transitions.
- Responsive ordering has been considered: portrait-first on narrow screens and a split layout on desktop.

### Issues

**High — duplicate ribbon implementations.** The hero draws its own inline SVG ribbon while `src/components/ui/GlassRibbon.tsx` also exists. Establish one source of truth and reuse it where appropriate. Audit whether `GlassRibbon.tsx` is actually used elsewhere before keeping both implementations.

**High — ribbon currently reads as a stroked orbit, not a convincing glass object.** The existing path and gradient are a useful placeholder, but they do not yet communicate realistic translucent glass, depth, reflection, or refraction. Improve it with layered highlights, controlled specular accents, subtle displacement, and restrained motion. Avoid a cheap neon loop.

**High — hero audio button is non-functional.** The Play/Pause button only toggles React state; no audio is started or paused. Remove it or implement a real, accessible sound interaction with an obvious mute/default-off state. Do not leave an inert control that advertises an action it does not perform.

**Medium — scroll transform is not scoped to the hero.** `useScroll()` is used without a target/container and `useTransform` moves the portrait based on global scroll. Confirm the effect is intentional and clamp it so it does not drift on long pages or mobile.

**Medium — unused import / content coupling.** `PERSONAL_DETAILS` is imported into `Hero.tsx` but is not used in the shown implementation. Clean unused imports and derive repeated copy from the central typed data file where sensible.

### Required hero direction

- Left: name/positioning and editorial headline on desktop.
- Right: supplied seated transparent portrait, naturally feathered into the scene.
- Signature ribbon behind and partly around the figure.
- Mobile: carefully composed portrait + headline without squeezing the desktop grid.
- No decorative status pills covering the face or important clothing details.
- The visual should remain legible and recognizable in both themes.

---

## 5. Project data and content accuracy

**Files:** `src/data/portfolioData.ts`, `src/components/sections/SelectedWork.tsx`, `src/app/work/[slug]/page.tsx`, `src/app/page.tsx`

### Critical: unverified metrics and delivery claims

The current data includes claims that must be checked with Yogesh before publication. Examples include:

**Intrust India**
- `12+` architecture modules
- `6K+` registered users
- `1.8L+` catalog items
- `98/100` performance score
- Lead Full-Stack Engineer & Architect
- 10-month duration / 2024 year
- High-concurrency checkout, real-time inventory locking, specific RLS architecture, microservices, and other detailed shipped claims

**Aadi Seeds**
- `40+` crop varieties
- `99` Lighthouse performance
- `100%` mobile-first
- 2024 year / three-month duration
- Offline-resilient catalogue, comparison filters, distributor locator, and specific implementation details

**Doc AI**
- Sub-second indexing
- Source-cited accuracy
- Streaming UI
- Four-month duration / 2024 year
- Chroma / FAISS, hybrid search, evaluation guardrails, and exact implementation details

Some of these statements may be true, but the codebase itself does not establish that. A public portfolio must not turn assumptions, draft copy, or concept architecture into asserted production facts.

**Required correction:** mark each field as one of:
- Verified fact (safe to publish)
- Needs Yogesh confirmation
- Remove until evidence exists

For case studies, only publish responsibilities, dates, technologies, metrics, and shipped features that Yogesh confirms. Use qualitative descriptions where metrics are not available.

### High: Doc AI uses unrelated visuals

In `src/components/sections/SelectedWork.tsx`, Doc AI points to:

`/images/concepts/nexus/nexus-mockup.png`

In `src/data/portfolioData.ts`, Doc AI uses an Intrust image as its preview and a NEXUS concept image as its detail image.

This is visibly misleading. Create or source dedicated Doc AI visuals: a document upload / library screen, a conversational answer with source citations, and a document viewer. Until then, use a neutral labelled placeholder rather than an unrelated product mockup.

### High: case-study modal is not a semantic interactive control

`SelectedWork.tsx` makes a `div` clickable to open the project modal. This is not keyboard-operable by default. Use a semantic button or link as the interactive trigger, with visible focus, `aria-haspopup`/dialog semantics where applicable, proper focus movement, Escape-to-close, and focus restoration.

### High: case-study details overstate ownership

`src/app/work/[slug]/page.tsx` contains the heading “WHAT YOGESH SPECIFICALLY ARCHITECTED & SHIPPED”. This is a strong factual claim. Retain it only after every listed highlight has been confirmed. Consider a neutral “Selected contributions” heading until then.

### Recommended project classification

**Real project / client work / venture**
- Intrust India — https://www.intrustindia.com
- Aadi Seeds — https://aadiseeds.in (user-provided domain; independently re-check before launch)
- YARVO.agency — https://yarvo.agency
- Doc AI — built project; do not imply a public production deployment unless confirmed

**Independent concepts only**
- AVARA — avatar communication
- ORBIT — personal intelligence
- NEXUS — connected lifestyle

Keep concept disclaimers visible on cards and case-study pages. Do not present concepts as launched products, clients, or shipped apps.

Exclude Krantikari and YARVO Intelligence entirely.

---

## 6. Personal story / About / Beyond Tech audit

**Files:** `src/app/about/page.tsx`, `src/components/sections/AboutSection.tsx`, `src/components/sections/BeyondTechSection.tsx`, `src/data/portfolioData.ts`

### What is already good

- Dedicated About and Beyond Tech routes exist.
- The supplied About portrait and original martial-arts photograph are in the asset tree.
- The Beyond Tech data includes guitar, judo, football/goalkeeping, chess, and exploration.
- The real martial-arts photo is separated from AI-generated imagery.

### Issues

**High — personal copy contains unverified biography and timelines.** Phrases such as “over the past several years”, “years of competitive Judo tournament training”, and hardcoded `5+ Projects / 3+ Concepts / 2+ Years` should be checked for accuracy. Keep the language warm and first-person, but do not inflate experience.

**High — About story currently leans too heavily into a technology résumé.** It should tell a personal journey and creative philosophy, then support it with real visual memories.

**High — click handlers on image tiles are inaccessible.** `BeyondTechSection.tsx` uses clickable `div` elements. Replace them with buttons or links, support keyboard activation, and provide focus styling.

**Medium — keyboard/music coverage is incomplete visually.** The current data mentions guitar and keys, but the visual grid primarily uses the guitar asset. Add a dedicated keyboard/synth image and show both instruments.

**Medium — original Judo photo needs intentional presentation.** Keep `/images/personal/martial-arts/martial-arts-original.png` authentic and do not AI-recreate the person. Use a clean editorial crop and accessible alt text.

### Recommended editorial treatment

- About: warm workspace/editorial portrait, short story, selected milestones only when true.
- Music: separate guitar and keyboard photographs.
- Martial arts: original tournament photograph.
- Sports: football/goalkeeping visual.
- Chess: understated close-up, not a generic icon.
- Travel: use real travel photographs where possible; generated landscapes may be used as atmospheric artwork only, not as evidence of places visited.

---

## 7. Navigation, theme, and accessibility

**Files:** `src/components/navigation/Navbar.tsx`, `src/app/layout.tsx`, `src/app/globals.css`

### Existing strengths

- Dark and light theme CSS variables exist.
- A pre-hydration script attempts to set `data-theme` before the first paint.
- Theme preference is stored in `localStorage`.
- Mobile menu is animated with Framer Motion.
- Reduced-motion CSS is present globally.

### Issues

**High — mobile overlay needs dialog behaviour.** Add `role="dialog"`, `aria-modal="true"`, labelled title, Escape-to-close, focus trap, initial focus, focus restoration, and body scroll locking. The current overlay opens/closes visually but does not implement a complete accessible modal-navigation pattern.

**Medium — theme state is duplicated.** The root pre-hydration script and Navbar both read/write the theme. Consolidate theme logic into one provider or a small theme controller and keep one source of truth. Avoid an icon/state flash when the app mounts.

**Medium — theme transition should be art-directed.** Existing colour transitions are a good baseline, but our agreed transition uses a smooth, cohesive transformation across background, typography, surfaces, borders, and accents. Prefer the View Transitions API as a progressive enhancement, with a clean fallback and reduced-motion handling.

**Medium — form labels and validation.** `ContactSection.tsx` uses a textarea placeholder but no visible or programmatic label. Add a real label, clear field instructions, and error/success states. Its current submit action opens a mailto link; label it accurately as an email handoff rather than implying the portfolio has a server-side message dispatcher.

### Additional accessibility requirements

- Visible `:focus-visible` states across all controls.
- Correct button/link semantics.
- No clickable non-semantic `div` elements.
- Respect `prefers-reduced-motion` in JavaScript animation hooks as well as CSS.
- Avoid auto-playing sound.
- Ensure text and icons meet contrast requirements in both themes.
- Keep mobile tap targets comfortably sized.
- Ensure dialog/menu focus cannot disappear behind overlays.

---

## 8. Motion and preloader audit

### Current state

- Framer Motion is installed and used in hero, navigation, project views, and some sections.
- CSS keyframes exist for ribbon float, glow, and status pulse.
- `GlassRibbon.tsx` exists as a shared UI component.
- Hero currently creates a separate inline ribbon SVG.
- No GSAP / ScrollTrigger dependency is present.
- No dedicated preloader component or committed animated cartoon sequence appears in the repository tree.

### Motion system required

Create one documented motion system with four levels:

1. **Signature scene motion:** hero reveal, ribbon movement, transition into/out of selected sections.
2. **Section motion:** scroll-triggered image masks, typography reveals, and controlled parallax.
3. **Component motion:** menus, project modals, filters, buttons, gallery navigation, theme control.
4. **Ambient motion:** very subtle ribbon/light movement only where it reinforces the composition.

Rules:
- Use Framer Motion for component and state transitions.
- Add GSAP + ScrollTrigger only where precise scroll choreography is genuinely needed; do not duplicate Framer Motion for the same element.
- Animate transforms and opacity where possible; avoid expensive continuous blur or layout animation on large surfaces.
- Use one consistent easing and duration scale.
- Reduce or disable parallax and ambient movement on small screens.
- Respect reduced-motion preferences in all JavaScript-driven animations.

### Preloader direction

Our agreed concept is a stylized cartoon version of Yogesh in a workspace:

1. Character enters / approaches desk.
2. Sits down and starts coding.
3. Floating development / AI symbols appear briefly.
4. Build progress completes.
5. Character looks up and gives a thumbs-up.
6. Scene resolves into the YA. wordmark and cobalt ribbon.
7. Portfolio homepage reveals.

Implementation recommendation:
- Prefer a short transparent WebM or a Rive animation for a polished character sequence.
- Use a lightweight poster PNG / static character fallback.
- Do not ship a large GIF spritesheet as the primary loader.
- Do not block the site for a fixed long duration; allow skip and reveal as soon as critical content is ready.
- Play at most once per session (or on first visit), never on every route navigation.
- Respect reduced motion: show a static brand mark and progress affordance instead.
- Keep the preloader independent from route navigation and avoid false 0–100% progress claims if no actual progress signal exists.

---

## 9. Asset inventory and cleanup

### Important assets already present

| Asset | Repository path | Use |
|---|---|---|
| Seated hero portrait | `public/images/profile/hero-portrait.png` | Main hero |
| About portrait | `public/images/profile/about-portrait.png` | About |
| Original personal portrait | `public/images/profile/me-original.jpg` | Reference / authentic photo |
| Original Judo photo | `public/images/personal/martial-arts/martial-arts-original.png` | Beyond Tech |
| Guitar | `public/images/personal/music/music-guitar.png` | Music |
| Football | `public/images/personal/sports/football-goalkeeper.png` | Sports |
| Chess | `public/images/personal/chess/chess.png` | Chess |
| Travel artwork | `public/images/personal/travel/travel-mountain.png` | Exploration / atmosphere |
| Intrust previews | `public/images/projects/intrust/` | Project showcase |
| Aadi Seeds preview | `public/images/projects/aadi-seeds/aadi-preview.png` | Project showcase |
| YARVO previews | `public/images/projects/yarvo/` | Studio showcase |
| Concept previews | `public/images/concepts/{avara,orbit,nexus}/` | Concept Lab |
| Mobile UI reference | `public/images/mobile-ui-reference.png` | Design reference only |
| Screen references | `public/images/screens/01-home.png` through `09-contact.png` | Design reference only |

### High: asset checklist is stale

`public/images/ASSET-CHECKLIST.md` asks for files such as `hero-portrait.webp`, `intrust-desktop.webp`, and `doc-ai-desktop.webp`, while the repo already contains equivalents under different names. Update the checklist to distinguish “already present”, “needs better crop/export”, and “still missing”.

### Medium: duplicate and inconsistent asset directories

The repo contains overlapping directories: `public/art/`, `public/images/extracted/`, `public/images/refined/`, `public/images/profile/`, `public/images/projects/`, and root-level legacy images. Some exact duplicates are visible from matching Git object hashes, including:

- `public/me.jpg` and `public/images/profile/me-original.jpg`
- `public/yogi.jpg` and `public/images/profile/yogesh-original.jpg`
- Several repeated files in `public/art/media_*.jpg`

Do not delete assets blindly. First create an asset manifest (filename, dimensions, file size, hash, role, and whether used in code), then consolidate references and remove only confirmed unused duplicates.

### Remaining production assets

- Dedicated Doc AI screenshots (current project image mapping is wrong).
- A keyboard/synth photograph.
- More genuine workspace / About photography if desired.
- Separate AVARA, ORBIT, and NEXUS product-screen exports, not only one mockup each.
- Transparent cartoon-character animation or Rive / WebM loader sequence.
- Separate ribbon/lighting assets if the final effect uses a raster or video layer.

Never use a full moodboard collage as a page background or as a project screenshot.

---

## 10. SEO, domain, and contact audit

**Files:** `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/data/portfolioData.ts`

### High — domain has not been selected, but metadata is hardcoded

The following files currently hardcode `https://yogeshamrute.dev`:

- `src/app/layout.tsx` (`metadataBase` and Open Graph URL)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

The final domain has not been selected. Use one environment-backed `SITE_URL` / site configuration value and set the real domain only after Yogesh confirms it. Do not publish `.dev` canonical metadata by assumption.

### High — GitHub URL mismatch

`PERSONAL_DETAILS.socials.github` currently points to `https://github.com/yogeshamrute`, while the connected GitHub identity and supplied repository owner are `yogesh185`. Update the profile link to the confirmed personal profile and review the LinkedIn / Instagram URLs before publishing.

### Contact

The code uses a placeholder-style `hello@yogeshamrute.dev` address. Confirm the public contact address with Yogesh before launch. Do not expose account emails from GitHub profile metadata as a replacement without explicit approval.

### SEO follow-up

- Use real OG artwork rather than a generic or outdated design reference.
- Ensure sitemap and robots use the configured final origin.
- Add canonical URLs after domain confirmation.
- Add meaningful alt text that describes the actual image without claiming a generated landscape is a real place Yogesh visited.
- Review metadata titles/descriptions for every route.

---

## 11. UI/UX and development skills to install

The repository currently has no `.agents/skills/` or project-specific agent skill files in the reviewed tree.

Google Antigravity supports workspace skills in `.agents/skills/<skill-folder>/`; these can be committed with the repo. See [Google Antigravity Skills documentation](https://antigravity.google/docs/skills).

### Recommended skills

**A. UI/UX Pro Max** — design-system generation, style/palette/font recommendations, responsive patterns, and framework-specific UI guidance.

From the portfolio root:

```bash
npm install -g ui-ux-pro-max-cli@latest
uipro init --ai antigravity
```

Source: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

**B. Anthropic Frontend Design** — distinctive art direction, non-generic layouts, typography and frontend craft.

```bash
npx skills add anthropics/skills --skill frontend-design -a antigravity
```

Source: [anthropics/skills](https://github.com/anthropics/skills)

**C. Vercel Web Design Guidelines** — accessibility, form semantics, focus, image handling, theme behaviour, motion, performance and interaction rules.

**D. Vercel React Best Practices** — Next.js / React rendering, bundle, component and data-fetching performance.

```bash
npx skills add vercel-labs/agent-skills \
  --skill web-design-guidelines \
  --skill react-best-practices \
  -a antigravity
```

Sources: [Vercel Agent Skills](https://vercel.com/docs/agent-resources/skills) · [Vercel Agent Skills repository](https://github.com/vercel-labs/agent-skills)

### Project-specific skills to create

Create these as small instruction-only skills in `.agents/skills/`:

```text
.agents/skills/
  yogesh-portfolio-design-system/SKILL.md
  yogesh-portfolio-motion/SKILL.md
  yogesh-portfolio-asset-curation/SKILL.md
  yogesh-portfolio-visual-qa/SKILL.md
```

Their purpose:
- `yogesh-portfolio-design-system`: enforce both palettes, typography, spacing, editorial layouts, project classifications, and no-numbered-screen UI.
- `yogesh-portfolio-motion`: enforce motion tiers, ribbon treatment, duration/easing, reduced motion, and preloader constraints.
- `yogesh-portfolio-asset-curation`: prevent generated collages from becoming page assets, preserve real photos, document image usage, and keep project imagery truthful.
- `yogesh-portfolio-visual-qa`: require screenshots at mobile/desktop widths, both themes, keyboard checks, overflow checks, and console/build checks.

Do not install random animation packs or unreviewed scripts. Keep skills instruction-focused and inspect their contents before use.

---

## 12. Recommended design-system and component architecture

### Design system documents

Create:

```text
design-system/
  MASTER.md
  pages/
    home.md
    work.md
    about.md
    experiments.md
    studio.md
    beyond-tech.md
    contact.md
  motion.md
  asset-manifest.json
```

`MASTER.md` must be the source of truth for:
- Dark/light colour tokens.
- Typography roles and font fallbacks.
- Spacing and container widths.
- Breakpoints.
- Buttons, chips, cards, dialogs, navigation, image frames.
- Border, radius, shadow, glass and ribbon conventions.

`motion.md` must define:
- Signature / section / component / ambient motion tiers.
- Duration and easing tokens.
- Scroll triggers.
- Mobile reductions.
- Reduced-motion fallbacks.
- Preloader lifecycle.

### Recommended component boundaries

```text
src/components/
  layout/
    SiteHeader.tsx
    MobileMenu.tsx
    SiteFooter.tsx
    ThemeProvider.tsx
    ThemeToggle.tsx
  motion/
    PageReveal.tsx
    ScrollReveal.tsx
    ParallaxMedia.tsx
    GlassRibbon.tsx
    ThemeTransition.tsx
  preloader/
    PortfolioPreloader.tsx
    CharacterAnimation.tsx
  hero/
    Hero.tsx
  projects/
    ProjectFeature.tsx
    ProjectCard.tsx
    ProjectDialog.tsx
    CaseStudySection.tsx
  concepts/
    ConceptFeature.tsx
    ConceptDisclaimer.tsx
  personal/
    InterestGallery.tsx
    PersonalPhotoDialog.tsx
  sections/
    IntroSection.tsx
    CapabilitiesSection.tsx
    StudioSection.tsx
    ContactSection.tsx
```

Do not refactor everything blindly. First identify actual reuse and keep component APIs small.

---

## 13. Prioritized correction backlog

### P0 — before any visual polish

1. Replace the homepage directory with the agreed narrative homepage structure.
2. Remove screen-number labels from actual UI.
3. Remove all unverified metrics, dates, durations, performance scores, and implementation claims; create a confirmation checklist.
4. Fix Doc AI image mappings.
5. Correct the GitHub profile URL and confirm public contact/social links.
6. Replace the hardcoded `.dev` origin with a configurable site URL until the final domain is chosen.
7. Remove or implement the non-functional hero play button.

### P1 — design-system and UX

1. Install UI/UX Pro Max, Anthropic Frontend Design, Vercel Web Design Guidelines, and React Best Practices.
2. Create project-specific design-system and motion skills.
3. Consolidate theme logic and ensure no flash or split state.
4. Make mobile navigation a fully accessible dialog with focus and scroll management.
5. Make project and personal-photo interactions semantic and keyboard accessible.
6. Standardize GlassRibbon and use one consistent ribbon visual system.
7. Re-compose Selected Work as large editorial project presentations rather than generic repeated cards.

### P2 — assets and animation

1. Build an asset manifest and clean duplicate references.
2. Generate dedicated Doc AI screenshots and keyboard imagery.
3. Prepare separate desktop/mobile project asset exports.
4. Build the cartoon preloader (Rive or short transparent WebM plus static fallback).
5. Add scroll choreography selectively; choose Framer Motion vs GSAP per interaction.
6. Ensure mobile motion is reduced and fast.

### P3 — production hardening

1. Run `npm install`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
2. Add Playwright visual/interaction tests.
3. Inspect at 320, 375, 390, 430, 768, 1024, 1280, and 1440px.
4. Test both themes and reduced motion.
5. Validate image paths, metadata, canonical URLs, sitemap, and robots.
6. Check browser console and network for missing assets, external font failures, and layout shift.
7. Run Lighthouse after the final assets are integrated.

---

## 14. Verification status and limitations

- GitHub repository metadata and the default-branch file tree were retrieved successfully through the GitHub connector.
- Source files and asset paths were inspected through GitHub file retrieval.
- The repository tree contains 157 entries at the time of review.
- No files were changed on GitHub.
- A local `git clone` attempt could not complete because this environment could not resolve `github.com`; therefore `npm install`, lint, TypeScript, and production build were not run.
- No live browser render or screenshots of the deployed site were available in this review. Visual issues above are inferred from source structure and the supplied UI reference, not claimed as browser-verified defects.

The next review should be a local browser audit after Antigravity has generated the first correction pass. Do not mark the site production-ready until the build and visual checks have actually passed.

---

## 15. Prompt to give Antigravity after adding this file

```text
Read PORTFOLIO_AUDIT.md completely before changing code. Treat it as the current audit and implementation contract. Inspect the actual repository and assets again. Install the listed reviewed skills into the project workspace, verifying their SKILL.md contents and that Antigravity can discover them. Do not blindly rewrite the whole app. Implement the P0 items first, then show me the revised homepage design plan and file-level change list before proceeding to P1. Preserve authentic personal photographs, clearly label AVARA/ORBIT/NEXUS as independent concepts, and do not publish unverified metrics or invented technical claims. Build and visually inspect both themes and responsive layouts; report honestly which tests ran and which could not run.
```

</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-11-12T01:01:34+05:30.
</ADDITIONAL_METADATA>