# Portfolio Gap Closure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close the highest-impact credibility, conversion, accessibility, and quality gaps in the existing Astro portfolio using CV-backed facts.

**Architecture:** Keep the existing Astro content-collection architecture and Tailwind visual language. Add a small metadata-validation script, extend project frontmatter only where it improves truthfulness, and keep interactive behavior in the existing Header and ThemeToggle scripts.

**Tech Stack:** Astro 4, TypeScript, Tailwind CSS 3, Node 20 built-in test runner, pnpm, GitHub Actions.

## Global Constraints

- Use `C:\Users\aliha\Downloads\CV_Ali_Hamdaoui_FullStack(1).tex` as the authority for experience and Migration Factory facts.
- Do not invent project screenshots, private-client details, or unverified production metrics.
- Keep the existing section order and visual identity.
- Keep the page static and dependency-light.
- Preserve reduced-motion behavior and keyboard access.

---

### Task 1: Add failing portfolio validation tests

**Files:**
- Create: `scripts/validate-portfolio.test.mjs`
- Modify: `package.json`

- [x] **Step 1: Write the failing test**

Create Node built-in tests that read the project files and assert: exactly three featured projects, Migration Factory contains `LangGraph`, `FastAPI`, and `in-progress`, and no featured project exposes one of the known dead repository URLs.

- [x] **Step 2: Run the test to verify it fails**

Run `pnpm test:portfolio`. It should fail against the current five featured projects, outdated Migration Factory content, and dead links.

- [x] **Step 3: Add the test script**

Add `"test:portfolio": "node --test scripts/validate-portfolio.test.mjs"` to `package.json`.

### Task 2: Make facts and project visibility honest

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/data/experience.ts`
- Modify: `src/data/technologies.ts`
- Modify: `src/content/config.ts`
- Modify: `src/content/projects/ai-migration-factory.md`
- Modify: `src/content/projects/bi-adventureworks2022.md`
- Modify: `src/content/projects/erp-supermarket.md`
- Modify: `src/content/projects/rifflock-desktop.md`
- Modify: `src/content/projects/smart-solutions.md`

- [x] **Step 1: Update canonical site and experience data**

Set the CV email, `worksFor` to CGI, and the CGI role to `Software Engineer — PFE Intern` with the March–August 2026 date and CV-backed description.

- [x] **Step 2: Extend project metadata**

Add optional `visibility` and `evidence` fields to the content schema. Use `visibility: private` for dead repository entries and use evidence labels on the three featured projects.

- [x] **Step 3: Rewrite Migration Factory facts**

Use the current agentic architecture and mark status `in-progress`. State the 80% result as an estimate from the ROI study.

- [x] **Step 4: Restrict featured projects**

Keep only Migration Factory, BI AdventureWorks2022, and ERP Supermarket featured. Mark dead-link projects private and remove their public `github` URLs.

- [x] **Step 5: Add missing technology labels**

Add LangGraph, SQLAlchemy, Next.js, TypeScript, and related CV-backed labels only if not already present.

### Task 3: Improve project cards and homepage conversion

**Files:**
- Modify: `src/components/Projects.astro`
- Modify: `src/components/Hero.astro`
- Modify: `src/pages/index.astro`
- Create: `public/cv-ali-hamdaoui.html`

- [x] **Step 1: Add a visible featured-project evidence treatment**

Render evidence labels and honest private-repository text; keep non-featured projects compact.

- [x] **Step 2: Add hero CTAs**

Add a primary link to `/projects/ai-migration-factory`, a CV download link, and supporting LinkedIn/GitHub links. Use precise availability wording tied to the PFE period.

- [x] **Step 3: Add a proof strip**

Add three concise facts below the hero: current CGI PFE, AI migration focus, and CV-backed stack categories. Avoid unsupported numerical claims.

- [x] **Step 4: Add the CV asset**

Create a printable, self-contained HTML CV at `public/cv-ali-hamdaoui.html` from the authoritative CV facts. Link the hero CTA to that page with a download filename; do not claim it is a PDF.

### Task 4: Fix responsive and accessible controls

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/ThemeToggle.astro`
- Modify: `src/components/LinkButton.astro`
- Modify: `src/components/SocialPill.astro`

- [x] **Step 1: Add responsive mobile menu markup**

Render a compact menu button below the `sm` breakpoint and a hidden navigation panel with `aria-expanded`, `aria-controls`, and Escape handling.

- [x] **Step 2: Preserve desktop active-section behavior**

Keep the current scroll observer and close the mobile panel after navigation.

- [x] **Step 3: Correct theme semantics**

Use `menuitemradio`, `aria-checked`, visible focus styles, and a 44px-equivalent target around the icon.

- [x] **Step 4: Add shared focus-visible treatment**

Ensure buttons and social links have an obvious ring in light and dark themes.

### Task 5: Add quality gates and documentation fixes

**Files:**
- Modify: `.github/workflows/quality.yml`
- Modify: `README.md`
- Modify: `.prettierignore`
- Modify: `src/components/AboutMe.astro`
- Modify: `src/components/Achievements.astro`
- Modify: `src/components/Projects.astro`

- [x] **Step 1: Make formatting deterministic**

Format the three source components and ignore generated `dist` output if needed without hiding source formatting failures.

- [x] **Step 2: Extend CI**

Run `pnpm format:check` and `pnpm test:portfolio` after install, before build.

- [x] **Step 3: Correct README**

Remove the deleted license link and describe the actual CI commands.

- [x] **Step 4: Run the full verification suite**

Run `pnpm test:portfolio`, `pnpm check`, `pnpm format:check`, and `pnpm build`.
