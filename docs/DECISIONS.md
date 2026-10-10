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
