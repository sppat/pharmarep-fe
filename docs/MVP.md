# Candidate MVP

**Status:** Hypothesis — not approved.

The first implementation should remain narrow enough to test the core scheduling hypothesis without becoming a full CRM or marketplace.

## Candidate core workflow

1. A healthcare professional has an account/profile.
2. A representative has an account/profile.
3. The healthcare professional creates an appointment request.
4. The representative can:
   - accept;
   - decline;
   - propose a different time.
5. Both sides can see the appointment/request status.
6. Confirmed appointments appear in a simple list and/or calendar.
7. A confirmed or pending appointment can be rescheduled or cancelled according to defined rules.
8. Basic confirmations/notifications may be added if feasible and justified by privacy/operational needs.

## Candidate entities

These are conceptual, not final database tables:

- User
- HealthcareProfessionalProfile
- RepresentativeProfile
- Organization / Company
- AppointmentRequest / Appointment
- Availability (only if discovery proves explicit availability management is needed)
- Notification (only if required)

Do not create a rich domain model prematurely. Refine entities from validated workflows and concrete use cases.

## Candidate appointment states

A minimal state model may include:

- Requested
- Accepted / Confirmed
- Declined
- AlternativeProposed
- Cancelled

Whether rescheduling is a state, a new request, or a revision of an existing appointment is still an implementation/domain decision to make once the workflow is clearer.

## In scope only if validated

- Basic profiles.
- Appointment requests.
- Accept / decline / alternative-time response.
- Appointment list/calendar.
- Status tracking.
- Rescheduling.
- Cancellation.
- Essential confirmation/notification behavior.

## Explicitly out of scope for the first narrow iteration

Unless new evidence changes the decision, do not add:

- full pharmaceutical CRM functionality;
- sales-force performance management;
- route optimization;
- complex territory management;
- automated matching/recommendation systems;
- advanced analytics dashboards;
- billing or payments;
- multi-company marketplace complexity;
- deep external integrations;
- patient records or patient-related scheduling;
- AI features added only for novelty.

## MVP success is not “feature complete”

The MVP should answer product questions. Success criteria should eventually be expressed in measurable terms such as:

- percentage of invited users who complete the scheduling flow;
- time/back-and-forth reduced compared with the current process;
- request acceptance/alternative-time completion rate;
- repeat usage;
- qualitative evidence that both sides prefer the workflow to current coordination;
- buyer interest in continuing or funding a pilot.

Exact metrics remain open until discovery clarifies the workflow and pilot context.
