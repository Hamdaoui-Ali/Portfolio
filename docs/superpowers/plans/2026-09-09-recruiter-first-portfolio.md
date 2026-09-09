# Recruiter-First Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the Astro portfolio into a recruiter-first Software Engineer showcase with diverse flagship work, capability stories, and shareable project filters.

**Architecture:** Keep Astro content collections as the project source of truth. Add explicit multi-value discipline metadata plus a small dependency-free filtering state module that both Node tests and the browser UI consume; render every project server-side and progressively enhance visibility and URL state in the browser.

**Tech Stack:** Astro 4, TypeScript 5.9, Tailwind CSS 3, Node 20 built-in test runner, pnpm.

**Spec:** `docs/superpowers/specs/2026-09-09-recruiter-first-portfolio-design.md`

## Global Constraints

- Lead with “Software Engineer,” not CGI or AI migration.
- Default to JobFinder, PlanOps, Remindly, PortFlow, MediLink, and RiffLock in that order.
- Preserve every project as server-rendered content when JavaScript is unavailable.
- Keep filters keyboard accessible, dependency-free, and shareable through query parameters.
- Keep formal experience titles accurate and make the March–August 2026 CGI entry non-current.
- Preserve the direct PDF download at `/Hamdaoui_Ali_CV_FR.pdf`.
- Do not invent project metrics, clients, screenshots, or production claims.

---

### Task 1: Lock the filtering contract with failing tests

**Files:**
- Create: `src/data/project-filters.mjs`
- Create: `scripts/project-filters.test.mjs`
- Modify: `scripts/validate-portfolio.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: `DISCIPLINE_FILTERS`, `TECHNOLOGY_FILTERS`, `normalizeFilterState(input)`, `filterProjects(projects, state)`, `parseFilterSearch(search)`, and `buildFilterSearch(search, state)`.

- [ ] **Step 1: Write tests for AND filtering, technology families, default flagship selection, invalid query fallback, and query preservation.**
- [ ] **Step 2: Run `pnpm test:portfolio` and confirm failure because the filter module and six-flagship metadata do not exist.**
- [ ] **Step 3: Implement the minimal pure filtering functions and add the new test file to `test:portfolio`.**
- [ ] **Step 4: Run `pnpm test:portfolio` and confirm the filter behavior passes while content validation still identifies metadata work.**
- [ ] **Step 5: Commit the filtering contract and tests.**

### Task 2: Reclassify projects and establish diverse flagship order

**Files:**
- Modify: `src/content/config.ts`
- Modify: `src/content/projects/*.md`
- Modify: `scripts/validate-portfolio.test.mjs`

**Interfaces:**
- Consumes: discipline keys from `DISCIPLINE_FILTERS`.
- Produces: `disciplines: string[]`, exactly six approved `featured: true` entries, and stable `sortOrder` values.

- [ ] **Step 1: Extend the content schema with required multi-value disciplines.**
- [ ] **Step 2: Add evidence-based discipline metadata to every project and update the six flagship flags/order.**
- [ ] **Step 3: Update portfolio validation to assert the approved flagship set, discipline coverage, and representative recruiter queries.**
- [ ] **Step 4: Run `pnpm test:portfolio` and `pnpm check`.**
- [ ] **Step 5: Commit project classification and flagship ordering.**

### Task 3: Build the progressive project explorer

**Files:**
- Modify: `src/components/Projects.astro`

**Interfaces:**
- Consumes: project content metadata and pure filter helpers.
- Produces: `#project-explorer`, filter buttons with `data-filter-kind` and `data-filter-value`, project cards with discipline/technology datasets, a result-count live region, empty state, reset, and show-all controls.

- [ ] **Step 1: Add validation assertions for accessible filter controls, result status, URL-state integration, and direct case-study links; run them to confirm failure.**
- [ ] **Step 2: Replace alternating rows with evidence-led responsive project cards while keeping all cards server-rendered.**
- [ ] **Step 3: Add browser behavior that restores URL filters, applies AND matching, updates `aria-pressed`, manages default/show-all views, and writes query state with `history.replaceState`.**
- [ ] **Step 4: Run `pnpm test:portfolio`, `pnpm check`, and format the component.**
- [ ] **Step 5: Commit the project explorer.**

### Task 4: Reposition the homepage and experience hierarchy

**Files:**
- Modify: `src/components/Hero.astro`
- Create: `src/components/EngineeringCapabilities.astro`
- Modify: `src/components/Experience.astro`
- Modify: `src/components/AboutMe.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/data/site.ts`
- Modify: `src/data/navigation.ts`
- Modify: `src/data/experience.ts`
- Modify: `src/layouts/Layout.astro`
- Modify: `scripts/validate-portfolio.test.mjs`

**Interfaces:**
- Produces: recruiter-first hero, capability proof section, approved section order, non-current CGI history, and Software Engineer metadata.

- [ ] **Step 1: Add failing validation for hero positioning, section order, capability proof, non-current CGI status, structured data, and the unchanged PDF action.**
- [ ] **Step 2: Rewrite hero and metadata around Software Engineer breadth and selected work.**
- [ ] **Step 3: Add five capability stories linked to proof projects and replace the generic Stack section.**
- [ ] **Step 4: Reorder the homepage, remove the migration pipeline section, and update experience/About copy.**
- [ ] **Step 5: Run `pnpm test:portfolio`, `pnpm check`, and `pnpm format:check`.**
- [ ] **Step 6: Commit the recruiter-first content architecture.**

### Task 5: Verify responsive behavior and production output

**Files:**
- Modify only files required by failures found during verification.

- [ ] **Step 1: Run `pnpm test:portfolio`.**
- [ ] **Step 2: Run `pnpm check`.**
- [ ] **Step 3: Run `pnpm format:check`.**
- [ ] **Step 4: Run `pnpm build`.**
- [ ] **Step 5: Start the production preview and inspect desktop and mobile layouts, filter combinations, keyboard states, URL restoration, empty state, project links, and CV download.**
- [ ] **Step 6: Re-run the full verification suite after any correction.**
- [ ] **Step 7: Commit final responsive or accessibility corrections separately if needed.**

