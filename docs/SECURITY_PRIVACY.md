# Security and Privacy Guardrails

**Status:** Baseline guardrails for discovery and prototyping. This document is not legal advice or a completed GDPR assessment.

## Data-minimization principle

PharmaRep should collect only the information required to coordinate professional appointments and operate the service.

The product is not intended to store patient information.

## Do not introduce without explicit validated need

- patient names or patient identifiers;
- diagnoses, treatments, prescriptions, or clinical records;
- sensitive free-text notes about patients;
- confidential employer/customer datasets;
- scraped or imported contact lists without a lawful and authorized basis;
- tracking data unrelated to operating or improving the product.

## Likely data categories to assess

Depending on the final workflow, the system may process:

- user identity/account data;
- professional role and organization;
- professional contact information;
- appointment date/time/status;
- request/response metadata;
- authentication/security logs;
- limited operational analytics.

Each category needs a purpose and retention rationale before a live pilot.

## Authorization baseline

Potential roles include:

- healthcare professional;
- representative;
- organization administrator / manager;
- system administrator.

Do not assume role membership automatically grants visibility into every appointment or profile. Access rules must be defined from the workflow and enforced by the backend.

## Security baseline for implementation

When the prototype becomes a live system:

- use HTTPS;
- use established authentication mechanisms rather than custom password/security schemes;
- enforce server-side authorization;
- validate untrusted input;
- protect secrets outside source control;
- use least privilege for infrastructure/database credentials;
- avoid exposing internal identifiers or debug information unnecessarily;
- log security-relevant events without logging sensitive payloads by default;
- keep dependencies patched and review known vulnerabilities.

## GDPR / pilot checklist

Before processing real user data in a pilot, explicitly assess:

- controller/processor roles;
- lawful basis for processing;
- privacy notice requirements;
- data retention/deletion;
- user rights handling;
- subprocessors and hosting location;
- access controls;
- breach response;
- data-processing agreements where applicable;
- whether a DPIA or other formal assessment is necessary.

Seek qualified legal/privacy advice before relying on this checklist for production compliance.
