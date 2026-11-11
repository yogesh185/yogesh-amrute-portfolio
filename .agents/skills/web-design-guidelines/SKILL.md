---
name: web-design-guidelines
description: Web design and accessibility guidelines for production frontend engineering.
---

# Web Design & Accessibility Guidelines

## Semantic HTML & Interactive Elements
- Interactive elements must be `<button>` or `<a>` tags with appropriate `type` and `href` attributes.
- Custom modal overlays must use `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and trap focus.
- Support `Escape` key close on all modals and dialogs.
- Restore focus to the trigger element when closing modals.

## Color Contrast & Form Usability
- WCAG AA contrast ratio (4.5:1 for body copy, 3:1 for large text and icons) must be maintained across both Dark and Light themes.
- Form inputs must have persistent or programmatic labels linked via `htmlFor`/`id`.
- Clear user-facing instructions and transparent handoff states for client-side actions.
