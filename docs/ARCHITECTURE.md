# Architecture

**Status:** Proposed technical direction; subject to change after product validation.

## 1. Architecture principle

Prefer the simplest architecture that supports the validated workflow. Avoid premature distributed-system complexity.

A conventional web application is the default assumption until evidence requires something else.

## 2. Current stack preference

| Layer | Current preference | Status |
| --- | --- | --- |
| Frontend | React + TypeScript | Proposed |
| Styling | CSS; component library only if justified | To evaluate |
| Backend | ASP.NET Core Web API | Proposed |
| Database | SQL Server | Proposed |
| Authentication | Role-aware authentication/authorization | To design |
| Hosting | Undecided | Open |

## 3. Initial system shape

A reasonable starting architecture, once implementation is justified:

```text
Browser
  |
  v
React + TypeScript frontend
  |
  | HTTPS / JSON API
  v
ASP.NET Core Web API
  |
  v
Application/domain logic
  |
  v
SQL Server
```

This is a working direction, not a mandate to create unnecessary layers or projects.

## 4. Backend guidance

- Prefer a modular monolith initially.
- Keep domain behavior explicit and testable.
- Avoid microservices unless independently deployable boundaries become necessary for demonstrated operational reasons.
- Keep API endpoints aligned to user workflows rather than exposing database structure directly.
- Use authorization policies/roles deliberately; do not rely on UI hiding for access control.
- Validate input at system boundaries.
- Use migrations for schema evolution once a persistence approach is established.

## 5. Frontend guidance

- Keep API access separated from presentational concerns.
- Prefer local component state for local UI behavior.
- Introduce shared/global state only when multiple areas genuinely require the same client-side state.
- Avoid a state-management library until React's built-in patterns are insufficient.
- Keep request/loading/error handling predictable.
- Model appointment status with typed values rather than arbitrary strings.

## 6. API design guidance

Until the domain is validated, avoid freezing a broad API surface.

For implemented endpoints:

- use stable resource identifiers;
- use explicit request/response DTOs;
- return meaningful validation errors;
- treat authorization as a server-side concern;
- make status transitions intentional;
- make concurrency implications explicit when two parties can modify the same appointment.

## 7. Data model guidance

Do not store data “just in case.” Each persisted field should have a workflow, legal, operational, or product reason.

Particularly avoid:

- patient data;
- free-text sensitive notes without a validated need;
- copied employer/customer datasets obtained without authorization;
- unnecessary personal identifiers.

## 8. Architecture decisions still open

- authentication provider / identity implementation;
- organization/tenant model;
- whether healthcare professionals belong to organizations in the system;
- exact appointment state machine;
- availability model;
- notification channels;
- audit/event history requirements;
- calendar integrations;
- deployment platform;
- observability stack.

These should be decided from validated requirements rather than convenience alone.
