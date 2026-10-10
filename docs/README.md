# PharmaRep Documentation

This folder is the durable product and engineering context for PharmaRep.

## Document map

| Document | Purpose |
| --- | --- |
| `PRODUCT.md` | Product vision, business context, users, value proposition, risks, and open questions. |
| `DISCOVERY.md` | Problem-validation plan, interview guidance, and evidence capture. |
| `MVP.md` | Candidate first-scope boundaries and explicit non-goals. |
| `UX_UI.md` | Current visual direction, responsive behavior, and UX principles. |
| `ARCHITECTURE.md` | Proposed system architecture and technical constraints. |
| `ENGINEERING.md` | Practical coding conventions for frontend, backend, API, and tests. |
| `SECURITY_PRIVACY.md` | Data minimization, GDPR-oriented guardrails, and security considerations. |
| `DECISIONS.md` | Lightweight decision log. |
| `PLANS.md` | Template and rules for larger Codex implementation plans. |

## Documentation status vocabulary

Use these labels consistently:

- **Confirmed** — explicitly decided or supported by evidence.
- **Current preference** — the preferred direction today, but reversible.
- **Hypothesis** — an idea that must be validated.
- **Open question** — unresolved and should not be silently decided by implementation.
- **Out of scope for now** — intentionally excluded from the current phase.

## Maintenance rule

Do not duplicate a decision across many files if one source of truth will do. When a decision changes, update `DECISIONS.md` and the document that owns the affected subject.
