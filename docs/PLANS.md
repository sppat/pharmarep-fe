# Codex Execution Plans

Use an execution plan (ExecPlan) for work that is too large or risky to hold safely in a short task description.

## When an ExecPlan is required

Create a plan before implementation when the change includes one or more of the following:

- a substantial new feature spanning several modules;
- a database schema change or data migration;
- a new authentication/authorization design;
- a cross-cutting refactor;
- a new external integration;
- a major state-management or routing change;
- an architectural change;
- a workflow whose product behavior is still partly ambiguous.

Do not create an ExecPlan for a small local fix or trivial UI adjustment.

## Where plans live

Create active plans under:

```text
docs/plans/
```

Suggested filename:

```text
YYYY-MM-DD-short-feature-name.md
```

Create the directory when the first plan is needed.

## Plan requirements

A plan must be understandable by a developer who has the repository but no hidden conversation context.

Include:

1. **Goal** — observable outcome.
2. **Product status** — confirmed requirement, current preference, or hypothesis.
3. **Non-goals** — what will deliberately not be changed.
4. **Current state** — relevant files/components/endpoints/data model.
5. **Proposed approach** — implementation steps and key design choices.
6. **Data/API impact** — schemas, contracts, migrations, compatibility.
7. **UX states** — loading, empty, validation, error, success, responsive behavior where relevant.
8. **Security/privacy impact** — authorization, sensitive data, logging, secrets.
9. **Verification** — exact tests/checks/manual scenarios to run.
10. **Open questions / risks** — unresolved assumptions that could change implementation.
11. **Progress** — a short checklist updated while work proceeds.
12. **Outcome** — after completion, summarize what actually changed and deviations from the plan.

## Execution discipline

- Keep the plan updated when implementation changes direction materially.
- Do not use a plan to hide unresolved product questions; label them.
- Prefer incremental milestones that leave the repository working.
- Verify behavior at each meaningful boundary.
- Record durable decisions in `docs/DECISIONS.md`, not only inside a temporary plan.

## Template

```markdown
# <Feature / Change> ExecPlan

**Date:** YYYY-MM-DD
**Status:** Draft | Active | Complete

## Goal

...

## Product status

Confirmed / Current preference / Hypothesis

## Non-goals

- ...

## Current state

...

## Proposed approach

1. ...
2. ...

## Data / API impact

...

## UX states

...

## Security / privacy impact

...

## Verification

- [ ] ...

## Open questions / risks

- ...

## Progress

- [ ] ...

## Outcome

Complete after implementation.
```
