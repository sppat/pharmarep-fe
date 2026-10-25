# PharmaRep UI Mockups

These images are visual references for the current PharmaRep prototype. They are not authoritative product specifications.

## Desktop

- `PharmaRep Healthcare Dashboard.png` — current doctor and midwife dashboard reference; replaces `desktop-appointment-dashboard.png`.
- `desktop-representative-directory.png` — representative discovery/directory reference.
- `desktop-book-appointment-sofia-bennett.png` — appointment booking flow reference.

## Tablet

- `tablet-scheduling-dashboard.png` — scheduling/dashboard responsive reference.
- `tablet-representative-directory.png` — representative directory responsive reference.
- `tablet-appointment-booking.png` — appointment booking responsive reference.

## Mobile

- `mobile-visit-dashboard.png` — visit/dashboard mobile reference.
- `mobile-find-representatives.png` — representative discovery mobile reference.
- `mobile-appointment-booking.png` — appointment booking mobile reference.

## How Codex should use these files

1. Inspect the relevant mockup before implementing or significantly modifying a matching UI screen.
2. Use `docs/UX_UI.md` for design tokens, accessibility rules, responsive behavior, and implementation conventions.
3. Treat mockups as visual intent, not as proof of product requirements or domain behavior.
4. Do not reproduce generated placeholder names, content, dates, counts, company details, or workflow assumptions as production data unless separately documented.
5. Preserve responsive intent rather than copying fixed pixel coordinates.
6. If a mockup conflicts with a documented product or engineering decision, flag the conflict instead of silently choosing one.
7. When no exact mockup exists, reuse the visual language of the closest reference and the tokens in `docs/UX_UI.md` rather than inventing a separate style.

## Reference viewport sizes

The source mockups currently have these approximate source dimensions:

- Desktop references: `1586 × 992`.
- Tablet references: `1048 × 1501`.
- Mobile references: `853 × 1844`.

These are source-image dimensions only. They are not CSS breakpoints and must not be hard-coded as layout targets.
