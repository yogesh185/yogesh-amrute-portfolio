---
name: react-best-practices
description: React 19 and Next.js App Router performance and rendering best practices.
---

# React 19 & Next.js Performance Guidelines

## Server & Client Component Boundaries
- Keep pages as Server Components where possible; restrict `"use client"` to interactive leaf components.
- Avoid duplicate global scroll listeners. Scope scroll observers to section container refs.

## Rendering & Animation Efficiency
- Animate `transform` and `opacity` exclusively; avoid continuous animating `filter: blur()` or layout dimensions on broad canvas areas.
- Wrap SVG paths and icons in memoized structures where appropriate.
- Protect against theme flashes by establishing a single source of truth for `data-theme`.
