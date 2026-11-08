# Current State

**Project:** PharmaRep  
**Status:** Early product discovery / prototype implementation  
**Document purpose:** Short-lived source of truth for current decisions and active work  
**Last updated:** 8 November 2026

> Update this file whenever an important product or implementation decision changes. Keep it concise. Historical decisions belong in `DECISIONS.md`.

## Product direction

PharmaRep is a proposed scheduling platform for healthcare professionals and pharmaceutical / healthcare representatives.

Initial healthcare-professional roles:

- Doctor
- Midwife

The central workflow being explored is professional appointment scheduling between healthcare professionals and representatives.

The product is not yet a validated business or finalized specification.

## Current product boundaries

Current focus:

- appointment requests,
- appointment confirmation / decline,
- rescheduling,
- cancellation,
- availability,
- notifications,
- simple appointment management.

Do not assume the following are part of the MVP unless explicitly added later:

- full CRM functionality,
- route optimization,
- analytics dashboards,
- payments,
- billing,
- chat,
- automated matching,
- complex integrations.

Avoid patient data.

## Current frontend direction

Frontend preference:

- React
- TypeScript
- CSS
- responsive dark-theme SaaS interface

The healthcare-professional dashboard is intended for both doctors and midwives.

### Current sidebar decisions

The sidebar currently contains:

- Overview
- My appointments
- Profile / account block

My availability is intended for the sidebar but is not implemented yet.

Removed from the sidebar:

- Find representatives
- standalone Settings navigation item

Settings are intended to be accessed through the profile / account area. The current profile link points to `/profile`; the profile/settings screen is not implemented yet.

The profile block interaction and hover behavior have already been implemented.

### Current top area decisions

The top area contains:

- breadcrumb / current path
- notifications

Removed:

- global representative search / search bar

### Current healthcare dashboard header

The dashboard header contains:

- greeting, e.g. `Good morning, Elena`
- Upcoming visits KPI
- Pending requests KPI

Removed:

- subtitle under the greeting
- `Visit this week` KPI

### Visual references

Mockups live under:

`design/mockups/`

Use them as visual references, not as authoritative product specifications.

Generated names, organizations, dates, appointment durations, locations, and other placeholder content in mockups must not automatically become business requirements.

## Current design-system direction

The current UI uses a dark visual system with teal / mint primary accents.

Detailed implementation guidance and tokens belong in:

`docs/UX_UI.md`

Do not duplicate the full design system here.

## Current engineering approach

The preferred stack remains:

- Frontend: React + TypeScript
- Backend: ASP.NET Core Web API
- Database: SQL Server

These are current preferences, not irreversible architecture commitments.

Keep the architecture practical and avoid premature complexity.

## Current collaboration mode

The developer implements first.

The AI acts primarily as:

- senior mentor,
- reviewer,
- explainer,
- architecture / design sounding board.

The AI should not provide full implementations by default.

See:

`docs/WORKING_AGREEMENT.md`

## Current workstream

Current focus is moving from UI implementation toward backend / database design.

For database design:

1. The developer proposes the initial entities and relationships.
2. The AI reviews them.
3. The developer revises the model.
4. Columns, constraints, indexes, EF Core mappings, and migrations are considered only after the conceptual model is understood.

Do not jump directly to a complete database schema unless explicitly requested.

## Open decisions

Still unresolved or subject to validation:

- exact appointment workflow,
- who may initiate each appointment type,
- appointment duration rules,
- availability semantics,
- rescheduling / counter-proposal behavior,
- cancellation rules,
- company / representative assignment model,
- authentication and authorization details,
- notification delivery channels,
- timezone handling,
- economic buyer and final commercial model.

When one of these becomes necessary for implementation, surface it as a decision instead of inventing a rule.

## Maintenance rule

Keep this file short.

When a current decision changes:

1. update this document,
2. add the important decision to `docs/DECISIONS.md` if it has lasting architectural or product significance,
3. update the relevant detailed document (`UX_UI.md`, `ARCHITECTURE.md`, `MVP.md`, etc.) when appropriate.
