# PharmaRep — Product Context

**Status:** Early product discovery / concept  
**Baseline date:** 8 October 2026  
**Documentation language:** English

## 1. Product vision

PharmaRep is a proposed platform for healthcare professionals and pharmaceutical / healthcare representatives to request, schedule, confirm, reschedule, cancel, and manage professional appointments.

The initial healthcare-professional audience under consideration is:

- doctors;
- midwives.

A central product hypothesis is that healthcare professionals should be able to initiate appointment requests themselves instead of depending entirely on outreach from representatives. The platform may eventually support requests in both directions.

This is not yet a validated business or finalized product specification.

## 2. Business context

The concept emerged from conversations with the founder's spouse, who works as a medical representative at Frezyderm.

Frezyderm is a **potential** organization to approach for feedback, a demonstration, or a limited pilot. It is not a committed customer, official partner, sponsor, or source of approved proprietary requirements.

The current commercial hypothesis is a **B2B SaaS** model in which a pharmaceutical or healthcare company may be the economic buyer rather than individual doctors or midwives.

The immediate objective is to establish whether scheduling and coordinating professional visits is a sufficiently important and underserved problem before making a large engineering investment.

## 3. Candidate user roles

### Doctor

Potential needs to investigate:

- find or contact an appropriate representative;
- request an appointment;
- expose or manage relevant availability;
- reschedule or cancel a visit;
- understand the status of a request.

### Midwife

Potential needs may resemble the doctor workflow, but differences must be researched rather than assumed.

### Medical / pharmaceutical representative

Potential needs to investigate:

- receive incoming requests;
- accept or decline requests;
- propose an alternative time;
- plan upcoming visits;
- receive confirmations and changes.

### Company administrator / team manager

Potential needs to investigate:

- onboard and manage representatives;
- manage access;
- oversee adoption and scheduling activity;
- potentially administer organization-level settings.

## 4. Proposed value proposition

PharmaRep is not intended to begin as another full field-force CRM.

The proposed differentiator is a shared scheduling workflow in which healthcare professionals have meaningful control over meeting requests and availability.

Hypotheses to validate:

- Healthcare professionals value being able to initiate appointment requests.
- Shared request/confirmation/reschedule/cancel status reduces coordination friction.
- A simple workflow is preferable to a heavy CRM-like experience for busy practices.
- Greek-market workflows may contain unmet needs that justify a tailored product.

Do not claim global uniqueness. Similar two-sided appointment products exist internationally.

## 5. Current product principles

1. **Validate before scaling.** Evidence should drive scope.
2. **Minimize workflow friction.** Appointment coordination should be faster than existing calls/messages, not another administrative burden.
3. **Design for both sides.** The product succeeds only if healthcare professionals and representatives both receive value.
4. **Keep the domain narrow initially.** Professional scheduling first; broad CRM capabilities later only if validated.
5. **Avoid patient data.** The product concerns professional interactions, not patient care records.
6. **Make assumptions visible.** Unknowns should be documented rather than silently encoded into software.

## 6. Major risks

- **Demand risk:** scheduling may not be painful enough to justify another tool.
- **Two-sided adoption risk:** both healthcare professionals and representatives may need incentives to participate.
- **Competition risk:** existing local or international products may already address the workflow.
- **Privacy/compliance risk:** professional contact and scheduling data require appropriate controls and GDPR analysis before a live pilot.
- **Confidentiality risk:** employer data, internal systems, contact lists, and proprietary processes must not be used without authorization.
- **Time/cost risk:** avoid large implementation commitments before validation.

## 7. Open product questions

- What is the most important problem in the current appointment process?
- Who initiates appointments today, and through which channels?
- How often do scheduling failures, delays, interruptions, or no-shows occur?
- Would doctors or midwives actually initiate and manage requests in a new product?
- Should a healthcare professional select a named representative, a company, a topic, or a geographical area?
- What happens when a requested time is unavailable?
- Is the initial product company-specific or shared across companies?
- Who verifies and approves healthcare-professional and representative accounts?
- Who is the economic buyer?
- What measurable value would make a company pay?
- What would define success in a limited pilot?
- Which workflows genuinely differ between doctors and midwives?

## 8. Immediate direction

1. Conduct initial discovery interviews.
2. Capture evidence and recurring pain points.
3. Convert validated findings into testable user stories.
4. Define a narrow MVP from the strongest evidence.
5. Refine responsive UI mockups around the validated workflow.
6. Build incrementally with React + TypeScript and ASP.NET Core only after scope is sufficiently clear.
