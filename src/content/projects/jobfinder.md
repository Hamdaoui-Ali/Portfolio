---
title: "JobFinder"
summary: "Morocco-first federated job-discovery engine that normalizes, deduplicates, ranks, and tracks opportunities from approved public recruitment sources."
status: in-progress
role: "Full-Stack Product Engineer"
category: "Full-Stack · Search · Automation"
github: "https://github.com/Hamdaoui-Ali/JobFinder"
visibility: public
evidence:
  - "Greenhouse and Lever connectors with source failure isolation"
  - "Deterministic filtering, relevance scoring, and deduplication"
  - "Local-first SQLite metadata with original-source redirection"
featured: false
sortOrder: 2
stack:
  [
    "PYTHON",
    "FASTAPI",
    "REACT",
    "TYPESCRIPT",
    "SQLITE",
    "HTTPX",
    "PYDANTIC",
    "RAPIDFUZZ",
    "PYTEST",
    "PLAYWRIGHT",
  ]
---

## Overview

JobFinder is a local-first, Morocco-first job-discovery application for people who are tired of repeating the same search across multiple recruitment platforms. A single search profile captures the desired position, technologies, location, experience level, contract type, workplace preference, publication period, and inclusion or exclusion keywords.

The application then queries supported public sources through dedicated connectors and turns their responses into one consistent opportunity feed. The original offer remains authoritative: JobFinder stores only the metadata needed to search, rank, and revisit an opportunity.

## Product problem

Job discovery becomes noisy when the same criteria must be entered on many sites and the same offer appears in several formats. A useful tool needs to reduce repetition without pretending that every website is an approved automation target.

## Architecture

- **Federated connectors**: Greenhouse and Lever integrations run independently and can fail without taking down the complete search.
- **Normalization pipeline**: titles, companies, locations, contract terms, and URLs are normalized before matching.
- **Controlled matching**: explicit aliases and fuzzy matching improve recall while hard filters protect precision.
- **Deterministic scoring**: relevance and confidence scores are calculated from the search profile rather than opaque ranking behavior.
- **Minimal persistence**: SQLite stores the smallest useful metadata set instead of copying complete pages or HTML.
- **Local-first boundary**: the MVP is single-user, zero-cost, and does not require a hosted database, queue, or scheduler.

## Opportunity lifecycle

Every discovered opportunity can move through `NEW`, `SEEN`, `SAVED`, and `DISMISSED` states. This gives the user a durable personal inbox instead of another search page that forgets what was already reviewed.

## Source-access policy

Automated connectors are enabled only for sources whose access mechanism has been explicitly approved. Restricted platforms are treated as restricted; they are not converted into generic scraping targets. When a user opens an opportunity, JobFinder redirects to the original source URL.

## Technology stack

Python 3.14, FastAPI, SQLAlchemy, SQLite, HTTPX, Pydantic, RapidFuzz, PyYAML, Uvicorn, React 19, TypeScript, React Query, React Router, Vite, Vitest, Playwright, Testing Library, and ESLint.

The backend is covered by pytest, the frontend by unit and lint/build checks, and the end-to-end workflow by Playwright.
