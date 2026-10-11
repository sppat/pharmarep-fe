# PharmaRep — Codex Repository Instructions

## Purpose

PharmaRep is an early-stage product concept for coordinating professional appointments between healthcare professionals (initially doctors and midwives) and pharmaceutical / healthcare representatives.

This repository is still in discovery. Do not treat proposed features, workflows, customers, or technical choices as validated requirements unless a document explicitly marks them as confirmed.

## Read first

Before making product or architectural decisions, read the relevant documents under `docs/`:

- `docs/PRODUCT.md` — product vision, users, value proposition, risks, open questions.
- `docs/DISCOVERY.md` — validation plan, interview goals, and evidence handling.
- `docs/MVP.md` — candidate MVP scope and explicit non-goals.
- `docs/UX_UI.md` — current UX/UI direction and responsive design guidance.
- `docs/ARCHITECTURE.md` — proposed technical architecture and constraints.
- `docs/ENGINEERING.md` — coding conventions and implementation guidance.
- `docs/SECURITY_PRIVACY.md` — privacy, data-minimization, and security guardrails.
- `docs/DECISIONS.md` — lightweight decision log.
- `docs/PLANS.md` — when and how to write an implementation plan for substantial work.
- `design/mockups/README.md` — index and usage rules for the current desktop/tablet/mobile visual references.

When documents conflict, prefer the most recent explicit decision in `docs/DECISIONS.md`. Otherwise stop treating the disputed point as settled and surface the ambiguity.

## Product guardrails

- The product is a hypothesis under validation, not a finalized specification.
- Frezyderm is a potential source of feedback or a possible pilot organization, not a committed customer, sponsor, or partner.
- Never imply that Frezyderm has approved, endorsed, funded, or adopted PharmaRep unless the repository later contains explicit evidence.
- Do not use or request confidential employer data, internal contact lists, internal systems, proprietary workflows, or other unauthorized information.
- Avoid patient data. The intended workflow concerns professional scheduling between healthcare professionals and representatives.
- Do not describe doctor-initiated appointment requests as globally unique without evidence.
- Prefer a narrow, validated MVP over a broad platform, marketplace, CRM, or analytics suite.

## Current technical direction

These are current preferences, not irreversible decisions:

- Frontend: React + TypeScript.
- Backend: ASP.NET Core Web API (.NET).
- Database: SQL Server.
- Authentication/authorization: role-based access appropriate to user types; design is still open.
- Hosting/deployment: undecided.

Avoid introducing infrastructure, frameworks, state-management libraries, component libraries, message buses, microservices, or other dependencies before the repository demonstrates a concrete need.

## Development style

The primary developer is an experienced .NET backend engineer who is comfortable with JavaScript/TypeScript but is learning React and especially CSS.

When implementing frontend work:

1. For a screen with a matching file under `design/mockups/`, inspect that mockup before implementation. Use it as visual intent only; `docs/UX_UI.md` and documented product decisions govern behavior and constraints.
2. Act as a senior frontend mentor as well as an implementer.
3. Keep changes small and reviewable.
4. Explain important React concepts when they become relevant: component boundaries, props, state, hooks, derived state, effects, and data flow.
5. Explain CSS choices, especially Flexbox, Grid, responsive behavior, positioning, spacing, sizing, and breakpoints.
6. Prefer straightforward code over clever abstractions.
7. Do not introduce a dependency to solve something that is simple with the platform or existing stack.
8. Preserve accessibility: semantic HTML, labels, keyboard operation, focus states, sufficient contrast, and meaningful status text.

## Repository language

- Source code: English.
- Code comments: English.
- Technical documentation: English.
- Commit messages: English unless the repository later adopts another convention.
- Conversation with the founder may be in Greek.

## Working rules

### Step-by-step collaboration

- Work incrementally on the founder's current requested step. Keep each change small, understandable, and reviewable.
- Resolve product, design, and technical questions together as they become relevant to that step. Do not require all discovery questions or documentation gaps to be resolved upfront.
- Continue work that is clear and authorized. When an unresolved question materially affects the current step, explain the concrete choice and ask for the founder's input.
- Keep unrelated findings as follow-up items rather than expanding the current task to address them.
- Record durable decisions in `docs/DECISIONS.md` and update the relevant document when needed, so agreed choices carry into future sessions.
- Treat this as the standing collaboration preference; the founder does not need to repeat it for each task.

Before changing code:

1. Inspect the existing repository structure and nearby code.
2. Read the relevant `docs/` files.
3. Identify whether the requested behavior is confirmed, proposed, or still ambiguous.
4. Reuse existing patterns before creating new ones.

While changing code:

- Make the smallest coherent change that satisfies the task.
- Do not silently expand scope.
- Do not perform unrelated refactors unless required for correctness.
- Keep UI state explicit and predictable.
- Keep domain rules out of presentation-only components where practical.
- Keep API contracts typed.
- Handle loading, empty, success, validation, and error states when the feature requires them.

After changing code:

- Run the narrowest relevant checks already supported by the repository.
- For frontend work, use scripts defined in `package.json`; do not invent package-manager commands or add tools without need.
- For .NET work, use the solution/project structure already present and run relevant build/tests when feasible.
- Report what changed, what was verified, and any unresolved assumption.

## Planning rule

For a substantial feature, cross-cutting change, schema migration, architectural change, or multi-file refactor, create or update an ExecPlan following `docs/PLANS.md` before implementation.

For small, local changes, do not create process overhead.

## Definition of done

A task is done when:

- requested behavior is implemented without widening the product scope;
- code is understandable and consistent with existing patterns;
- relevant checks pass, or failures are clearly reported;
- documentation is updated when a product/architecture decision changed;
- assumptions and unresolved questions are explicit.
