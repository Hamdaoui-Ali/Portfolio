---
title: "Remindly"
summary: "Production-oriented reminder platform with Supabase authentication, durable notification records, and a retry-safe delivery engine built for failure recovery."
status: in-progress
role: "Full-Stack Reliability Engineer"
category: "SaaS · Reliability Engineering · Full-Stack"
disciplines: ["full-stack", "backend-apis"]
github: "https://github.com/Hamdaoui-Ali/Remindly"
visibility: public
evidence:
  - "Durable notification ledger with atomic claims, leases, retries, and idempotency"
  - "Protected processor API with Supabase Cron and GitHub Actions fallback"
  - "Dry-run backfills, reconciliation checks, health endpoints, and end-to-end tests"
featured: true
sortOrder: 3
stack:
  [
    "NEXT_JS",
    "REACT",
    "TYPESCRIPT",
    "PRISMA",
    "POSTGRESQL",
    "SUPABASE",
    "DOCKER",
    "VITEST",
    "PLAYWRIGHT",
  ]
---

## Overview

Remindly is designed around a reliability question: what should happen when a reminder worker crashes halfway through delivery, an email provider times out, or an application restarts with notifications still due?

Users create deadline reminders against their authenticated Supabase profile. Timezone-aware scheduling determines urgency and notification timing, while durable notification records keep delivery state in PostgreSQL instead of leaving it in process memory.

## Durable notification engine

- **Atomic claims** prevent two workers from processing the same pending notification at once.
- **Processing leases** make reservations recoverable when a worker becomes stale.
- **Idempotent delivery** reuses the notification UUID as the provider idempotency key.
- **Retry budgets** cap delivery attempts and isolate individual failures.
- **Circuit-breaker behavior** protects the provider boundary after repeated failures.
- **Rolling email budgets** prevent a burst of reminders from exhausting the provider allowance.

The processor is provider-neutral. Gmail and Resend are delivery options, while the notification ledger remains the source of truth for whether a reminder is pending, sent, or exhausted.

## Safe operations

Remindly treats migrations and data correction as operational workflows rather than one-off scripts. Alert backfills and reconciliation commands default to dry-run mode, validate consistency before modifying data, and are designed to be safely rerun. A protected internal processor endpoint can be called by Supabase scheduling infrastructure, with a GitHub Actions workflow available as a fallback.

## Technology stack

Next.js 16, React 19, TypeScript, Prisma 7, PostgreSQL, Supabase Auth, Gmail, Resend, Zod, Recharts, Vitest, Playwright, Testing Library, Docker, and GitHub Actions.

The project includes unit, integration, and end-to-end coverage for the reminder lifecycle, processor behavior, protected boundaries, and recovery paths.
