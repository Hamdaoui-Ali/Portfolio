# Portfolio Gap Closure Design

**Date:** 1 August 2026  
**Scope:** Focused P0/P1 credibility, conversion, accessibility, and quality pass

## Goal

Make the existing Astro portfolio trustworthy and recruiter-ready without starting the larger bilingual redesign: align public facts with the authoritative CV, make the AI Migration Factory the primary proof point, expose honest project visibility, and close the highest-impact accessibility and quality gaps.

## Source of truth

The CV at `C:\Users\aliha\Downloads\CV_Ali_Hamdaoui_FullStack(1).tex` is authoritative for the current public experience and technology facts. It identifies the current CGI role as a March–August 2026 PFE internship, the Migration Factory stack as Java/Spring Boot, Angular, Python, FastAPI, LangGraph, Azure OpenAI, React, Next.js, TypeScript, SQLAlchemy, SQLite, Docker, and CI/CD, and the public CV contact email as `alihamdaoui000@gmail.com`.

## Design decisions

### 1. Credibility-first data model

- Update `SITE_CONFIG` and experience data to match the CV.
- Mark the CGI engagement as an internship in progress, not a generic permanent role.
- Rewrite Migration Factory as an in-progress agentic migration MVP; include staged Angular and Java/Spring modernization, agent orchestration, validation gates, evidence artifacts, and the estimated 80% time saving as explicitly estimated.
- Add missing technology registry entries only when the CV names them.
- Convert broken public repository links to honest `visibility: "private"` metadata and render “Private repository” instead of a dead Code link.

### 2. Evidence-led homepage

- Keep the existing section order and visual language.
- Replace the hero’s generic lead with enterprise modernization / agentic migration positioning.
- Add a primary Migration Factory case-study CTA and CV download CTA.
- Feature exactly three projects on the homepage: Migration Factory, BI AdventureWorks2022, and ERP Supermarket, using current CV-backed work.
- Add a compact facts/evidence strip to featured project cards rather than inventing screenshots or metrics.

### 3. Accessible controls

- Add a responsive mobile menu with a real button, dialog-like navigation state, Escape handling, and focus-visible styling.
- Preserve desktop navigation behavior.
- Change the theme choices to `menuitemradio` with `aria-checked`, a visible focus ring, and a larger touch target.
- Keep existing reduced-motion rules and extend them to the new menu animation.

### 4. Quality gates

- Add a dependency-free Node validation script for project metadata, featured count, broken-link policy, and required Migration Factory facts.
- Add `pnpm test:portfolio` and run it in CI.
- Add `pnpm format:check` to CI.
- Remove the README’s missing-license link and correct its CI claim.

## Out of scope

- Full bilingual routing and French content.
- Invented project screenshots, private client screenshots, or unverified public metrics.
- Astro/Tailwind upgrades.
- A new visual design system.

## Success criteria

- `pnpm check`, `pnpm build`, `pnpm format:check`, and `pnpm test:portfolio` pass.
- Homepage has a direct case-study CTA and CV download link.
- No featured project renders a dead repository link.
- Migration Factory metadata and content match the CV-backed architecture and status.
- Mobile navigation and theme semantics are present in source and build output.
