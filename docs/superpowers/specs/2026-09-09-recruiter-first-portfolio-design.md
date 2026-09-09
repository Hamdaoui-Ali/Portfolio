# Recruiter-First Portfolio Design

**Date:** 9 September 2026  
**Scope:** Homepage positioning, project discovery, capability proof, and experience hierarchy

## Goal

Position Ali Hamdaoui as a Software Engineer who can deliver reliable products across web applications, backend systems, data engineering, automation, AI, and desktop security. The first page must help recruiters assess fit quickly while giving freelance clients enough product and delivery evidence to start a conversation.

## Audience and decision order

The primary audience is software-engineering recruiters and hiring managers. Freelance clients are the secondary audience. The page should answer, in order:

1. What kind of engineer is Ali?
2. What has he built across different technical contexts?
3. Which projects prove the skills relevant to my role or problem?
4. How does he approach engineering work?
5. What professional experience and external validation support that work?
6. How can I contact him or download his CV?

## Positioning

- Use **Software Engineer** as the lead professional identity.
- Describe the range as web products, backend APIs, data platforms, automation and AI, and local-first security software.
- Keep “Engineer · Builder · Innovator” as a compact personal badge.
- Remove migration-first language from the hero, metadata, primary CTA, proof strip, and About section.
- Preserve the AI Migration Factory as one valid project and experience outcome, without giving it structural priority over the rest of the portfolio.
- Do not claim unsupported commercial metrics, user counts, or production scale.

## Homepage architecture

Use this section order:

1. Hero
2. Selected Work
3. Engineering Capabilities
4. Engineering Experience
5. Achievements
6. About
7. Contact

Remove the dedicated Modernization Pipeline section. Its process is too narrow for the new positioning and duplicates evidence already available in the Migration Factory case study.

## Hero

The hero should communicate breadth without becoming vague:

- Headline: software that holds up in real workflows.
- Supporting copy: Java/Spring Boot, Laravel, TypeScript/React, Python, data pipelines, automation, and security are examples of delivery range rather than an exhaustive keyword list.
- Primary action: explore selected work.
- Secondary action: download the supplied French PDF CV directly.
- Supporting actions: email, LinkedIn, and GitHub.
- Proof strip: six flagship builds; four core languages; five engineering contexts. These are portfolio inventory counts, not business-impact metrics.

## Project explorer

### Default state

Show six verified public flagship projects first:

1. JobFinder
2. PlanOps
3. Remindly
4. PortFlow
5. MediLink
6. RiffLock

Offer a clear “Show all projects” control for the remaining portfolio. Without JavaScript, all projects remain present and readable.

### Primary discipline filters

- All Work
- Full-Stack
- Backend & APIs
- Data & Analytics
- Automation & AI
- Security & Desktop

### Technology refinements

- Java / Spring Boot
- Python
- PHP / Laravel
- TypeScript / React
- Angular
- SQL / BI

Projects can belong to multiple disciplines. Technology refinements derive from the project stack through explicit, stable mappings. Discipline and technology selections combine using AND logic, while a project may match any technology key within the selected technology family.

### Interaction behavior

- Use accessible buttons with `aria-pressed`.
- Show the visible result count and an empty-state message.
- A Reset control restores the default selected-work view.
- Clicking a technology badge on a project activates the matching technology refinement when one exists.
- Persist selections in query parameters, for example `?discipline=data-analytics&technology=python`, so tailored project views can be shared in applications and messages.
- Use `history.replaceState` so filtering does not create a noisy browser history.
- Preserve unrelated query parameters and the page hash.
- Keep filtering dependency-free and progressively enhanced.

## Project cards

Project cards should be recruiter-scannable rather than image-led. Each card should expose:

- product name and status;
- role and problem domain;
- short outcome-oriented summary;
- up to two concrete engineering evidence points;
- a concise technology list;
- case-study and verified repository or preview links.

The six flagship cards receive stronger visual emphasis. Legacy projects remain available through “Show all” and filters but do not dominate the default view.

## Engineering capabilities

Replace the generic stack grid with five capability stories linked to proof projects:

- Product Engineering — JobFinder, PlanOps, Remindly
- Backend & APIs — MediLink, JobFinder, Remindly
- Data Platforms & Analytics — PortFlow, BI AdventureWorks2022
- Automation & AI — JobFinder, AI Migration Factory
- Security & Desktop — RiffLock

Each story should state the engineering outcome, relevant practices, and project evidence. Technology names remain visible, but capability and judgment lead the section.

## Experience and biography

- Rename “Work Experience” to “Engineering Experience.”
- Keep formal internship titles and dates accurate.
- Mark the March–August 2026 CGI engagement as completed; do not publish CGI as the current employer in structured data.
- Emphasize delivered systems and engineering decisions in each experience description.
- Update About copy to describe cross-context product building, reliability, data quality, testing, and pragmatic architecture.

## Visual direction

Retain the existing dark charcoal, warm amber, Onest typography, portrait photography, and accessible light/dark themes. Shift from long alternating project rows and repeated generic cards to a denser editorial layout with:

- a broader hero composition;
- compact evidence-led project cards;
- restrained discipline accents;
- clearer labels and hierarchy;
- generous whitespace without hiding useful proof below oversized sections.

No generated visual concept is required because the user explicitly requested immediate implementation without mockups.

## Accessibility and performance

- All filters and disclosure controls are keyboard operable.
- Visible focus styles remain in light and dark themes.
- Status updates use a polite live region.
- Hidden project cards use the native `hidden` attribute.
- Reduced-motion preferences continue to disable entrance animation.
- Do not add a client framework or runtime dependency for filtering.

## Success criteria

- The first viewport leads with “Software Engineer” and a selected-work CTA, not CGI or migration.
- The default project view contains the six diverse flagships in the approved order.
- Discipline and technology filters combine correctly and can be restored from the URL.
- “Full-Stack + Java / Spring Boot” includes MediLink, ERP Supermarket, ParClick, and other correctly tagged matching projects.
- Data & Analytics exposes PortFlow and BI AdventureWorks2022.
- Security & Desktop exposes RiffLock.
- Experience appears after projects and capabilities, and CGI is not represented as current employment.
- The supplied PDF CV still downloads directly.
- Portfolio tests, Astro checks, formatting checks, and the production build pass.

