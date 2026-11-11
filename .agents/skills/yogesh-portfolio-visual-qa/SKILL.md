---
name: yogesh-portfolio-visual-qa
description: Visual testing, responsive audits, keyboard accessibility, and build verification.
---

# Yogesh Amrute Portfolio — Visual QA Standards

## Responsive Breakpoints to Audit
- Mobile: `320px`, `375px`, `390px`, `430px`
- Tablet: `768px`, `820px`
- Desktop: `1024px`, `1280px`, `1440px`

## Accessibility Checklist
- No interactive `div` elements without semantic roles (`button`, `a`) or keyboard event handlers.
- Visible `:focus-visible` styling on all interactive controls.
- Modal dialogs must support `Escape` key close, focus trapping, and focus restoration.
- Color contrast ratios must meet WCAG AA standards (4.5:1 for body text, 3:1 for large text) in both Dark and Light themes.
- Form inputs must have accessible programmatic labels, not just placeholders.

## Build Verification
- Always run `npm run build` or `npx tsc --noEmit` to confirm zero TypeScript and Next.js compile errors before marking tasks complete.
- Verify that every route loads with `HTTP 200 OK` and zero hydration mismatches.
