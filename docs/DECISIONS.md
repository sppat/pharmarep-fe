# Decision Log

Use this file for durable product or technical decisions. Keep entries concise. A decision can be revised later; record the revision rather than silently rewriting history.

## Status values

- **Proposed** — preferred direction, not committed.
- **Accepted** — current decision.
- **Superseded** — replaced by a later decision.
- **Rejected** — considered and intentionally not chosen.

---

## D-001 — Validate the problem before large-scale development

**Date:** 2026-10-08  
**Status:** Accepted

### Decision

Prioritize discovery, workflow validation, and lightweight prototyping before building a broad production platform.

### Rationale

The core demand, user behavior, buyer, and willingness to pay are not yet validated.

### Consequence

Large feature sets and heavy infrastructure should be deferred until evidence justifies them.

---

## D-002 — Current frontend direction: React + TypeScript

**Date:** 2026-10-08  
**Status:** Proposed

### Decision

Use React + TypeScript for the frontend if/when implementation proceeds.

### Rationale

It fits the founder's learning goals and is a practical mainstream web stack.

### Consequence

Do not treat specific React libraries or component systems as selected yet.

---

## D-003 — Current backend direction: ASP.NET Core Web API + SQL Server

**Date:** 2026-10-08  
**Status:** Proposed

### Decision

Use ASP.NET Core Web API and SQL Server as the initial backend/data direction.

### Rationale

This aligns with the founder's .NET backend experience and keeps the stack practical.

### Consequence

Hosting, identity, deployment topology, and detailed persistence architecture remain open.

---

## D-004 — Keep patient data out of the initial product scope

**Date:** 2026-10-08  
**Status:** Accepted

### Decision

Design the initial product around professional scheduling and avoid patient data.

### Rationale

Patient data is unnecessary for testing the scheduling hypothesis and would materially increase privacy/compliance risk.

---

## D-005 — Match the prototype sidebar background to the desktop mockup

**Date:** 2026-10-18

**Status:** Superseded by D-006

### Decision

Use the charcoal sidebar background sampled from `design/mockups/desktop-appointment-dashboard.png` for the current prototype. The token value and sampling reference are documented in `docs/UX_UI.md`.

### Rationale

The founder requested that the sidebar background match the visual reference.

### Consequences

Apply the color through `--color-bg-sidebar`. This sets the prototype's sidebar surface; it does not approve changes to the remaining palette or require reproducing image texture.

---

## D-006 — Align the full prototype color palette with the desktop mockup

**Date:** 2026-10-18

**Status:** Accepted

### Decision

Use the desktop appointment dashboard mockup as the visual reference for all current color tokens. `docs/UX_UI.md` owns the values and distinguishes sampled or approximate visible colors from inferred interaction states.

### Rationale

The founder clarified that the full color palette should follow the mockup, extending the earlier sidebar-only change.

### Consequences

Use charcoal surfaces and turquoise primary actions consistently. Derive states absent from the screenshot from the same palette, and validate them when their components are implemented. Existing sidebar state variables reuse these tokens. This decision concerns color values; routing and interaction behavior remain separate work.

### Supersedes

D-005.

---

## Template for new decisions

```markdown
## D-XXX — Short decision title

**Date:** YYYY-MM-DD  
**Status:** Proposed | Accepted | Superseded | Rejected

### Context

What prompted the decision?

### Decision

What are we choosing?

### Rationale

Why?

### Consequences

What becomes easier, harder, required, or explicitly out of scope?

### Supersedes / superseded by

Optional reference to another decision.
```
