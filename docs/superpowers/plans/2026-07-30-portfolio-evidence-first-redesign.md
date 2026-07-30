# Evidence-First Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Ali Hamdaoui's Astro portfolio as an evidence-first, English-first/French-enabled site with ten verified full case studies, accurate résumé content, accessible responsive navigation, downloadable CVs, and automated quality gates.

**Architecture:** Canonical, non-translated project facts live in TypeScript; localized UI strings and case-study narratives are layered onto those facts at build time. Shared Astro components render the English and French homepage, project index, and case-study routes from the same design system, while build-time validators prevent missing translations, broken visibility states, placeholder links, and unsupported project inventory.

**Tech Stack:** Astro 4.16.19, Tailwind CSS 3.4.17, TypeScript 5.9.3, Astro Content Collections, Onest Variable, Vitest, Playwright Chromium, `@axe-core/playwright`, Linkinator, Lighthouse CI, GitHub Actions, Vercel.

## Global Constraints

- Keep Astro at `4.16.19` and Tailwind CSS at `3.4.17`; framework upgrades are outside this plan.
- English routes are unprefixed; French routes use `/fr/`.
- Publish exactly ten approved case studies in both languages: twenty localized case-study routes.
- The homepage highlights four projects but visibly links all ten.
- Use the résumé at `C:\Users\aliha\Downloads\CV_Ali_Hamdaoui_FullStack_Overleaf_Updated (1).zip` as the authority for identity, contact, education, experience, and professional responsibilities.
- Use public repository implementation before README copy when project claims disagree.
- Use `alihamdaoui000@gmail.com`; do not expose the résumé phone number in website UI.
- Availability copy is exactly: `Open to full-time roles · Available for selected freelance work`.
- The migration ROI claim always includes `estimated` and its ROI-study context.
- Do not render dead Code links or placeholder Live Demo links.
- Do not generate a fake portrait; use the approved `AH` monogram until a real portrait is supplied.
- Use Onest Variable for content and a system monospace stack only for technical evidence.
- Dark signature colors are `#0A0D13`, `#11161D`, `#F3F5F8`, `#929CA9`, and `#F0B94B`; light mode uses `#F7F7F5`, `#FFFFFF`, `#171A1F`, `#626B75`, and `#B56C00`.
- Mobile validation uses at least `390 × 844`; no page may have horizontal overflow.
- Icon-only and mobile navigation targets are at least `44 × 44` CSS pixels.
- Respect `prefers-reduced-motion`.
- Keep existing unapproved project source recoverable and unpublished.
- Use Astro image optimization and local assets; do not hotlink GitHub user-attachment images in production.
- Do not claim a check runs in CI until the workflow executes it.
- Use `apply_patch` for repository file edits.

---

## Planned File Structure

### Design artifacts

- `docs/design/portfolio-concepts/home-hero.png` — approved hero and first-viewport concept.
- `docs/design/portfolio-concepts/home-projects.png` — approved selected-work and all-projects concept.
- `docs/design/portfolio-concepts/home-experience-capabilities.png` — approved experience and capabilities concept.
- `docs/design/portfolio-concepts/home-about-contact.png` — approved closing sections concept.
- `docs/design/portfolio-concepts/case-study-desktop.png` — approved case-study desktop concept.
- `docs/design/portfolio-concepts/home-mobile.png` — approved 390 px mobile concept.
- `docs/design/portfolio-design-inventory.md` — copy lock, tokens, asset inventory, component families, and section fidelity rules.

### Canonical data and localization

- `src/data/project-facts.ts` — canonical project IDs, order, stack, status, visibility, links, source, and evidence metadata.
- `src/data/experience.ts` — résumé-aligned professional timeline.
- `src/data/site.ts` — corrected identity, contact, locale, and metadata.
- `src/i18n/config.ts` — locale types and route helpers.
- `src/i18n/ui.ts` — complete English/French UI dictionaries.
- `src/lib/projects.ts` — merge and query localized content with canonical facts.
- `src/lib/validation.ts` — pure content and project validation functions.
- `src/lib/seo.ts` — canonical, alternate-language, breadcrumb, Person, and project structured data helpers.

### Localized content

- `src/content/case-studies/en/*.md` — ten English case studies.
- `src/content/case-studies/fr/*.md` — ten French case studies.
- `src/content/config.ts` — legacy-project and localized-case-study schemas.

### Layout and styling

- `src/styles/global.css` — color tokens, typography, focus, reduced motion, layout utilities, and prose rules.
- `src/layouts/Layout.astro` — locale-aware page shell and SEO.
- `src/layouts/CaseStudyLayout.astro` — reusable long-form project composition.

### Shell components

- `src/components/shell/SkipLink.astro`
- `src/components/shell/SiteHeader.astro`
- `src/components/shell/MobileMenu.astro`
- `src/components/shell/LanguageSwitcher.astro`
- `src/components/shell/ThemeSwitcher.astro`
- `src/components/shell/SiteFooter.astro`

### Homepage components

- `src/components/home/Hero.astro`
- `src/components/home/MigrationEvidenceArtifact.astro`
- `src/components/home/ProofStrip.astro`
- `src/components/home/SelectedProjects.astro`
- `src/components/home/ProjectArchiveRows.astro`
- `src/components/home/ExperienceTimeline.astro`
- `src/components/home/CapabilityRows.astro`
- `src/components/home/EducationAwards.astro`
- `src/components/home/About.astro`
- `src/components/home/ContactCTA.astro`
- `src/components/home/HomePage.astro`

### Project components

- `src/components/projects/ProjectIndex.astro`
- `src/components/projects/ProjectHero.astro`
- `src/components/projects/ProjectFacts.astro`
- `src/components/projects/EvidenceGallery.astro`
- `src/components/projects/ArchitectureDiagram.astro`
- `src/components/projects/DecisionList.astro`
- `src/components/projects/ValidationPanel.astro`
- `src/components/projects/LimitationsPanel.astro`
- `src/components/projects/ProjectNavigation.astro`

### Evidence components

- `src/components/evidence/MigrationWorkflow.astro`
- `src/components/evidence/DataPipeline.astro`
- `src/components/evidence/FullStackFlow.astro`
- `src/components/evidence/ScrapingPipeline.astro`
- `src/components/evidence/OdooBeforeAfter.astro`
- `src/components/evidence/SecurityFlow.astro`
- `src/components/evidence/ModelEvaluation.astro`
- `src/components/evidence/ParkingWorkflow.astro`
- `src/components/evidence/MultiModelPipeline.astro`

### Routes

- `src/pages/index.astro`
- `src/pages/fr/index.astro`
- `src/pages/projects/index.astro`
- `src/pages/fr/projects/index.astro`
- `src/pages/projects/[slug].astro`
- `src/pages/fr/projects/[slug].astro`
- `src/pages/404.astro`

### Assets and downloads

- `src/assets/projects/twitter-sentiment-analysis/` — optimized Streamlit screenshots.
- `src/assets/projects/parclick/` — optimized client, QR, and employee workflow screenshots.
- `src/assets/projects/sentiment-analysis-dashboard/` — optimized React dashboard screenshots.
- `public/cv/ali-hamdaoui-full-stack-en.pdf`
- `public/cv/ali-hamdaoui-full-stack-fr.pdf`
- `public/og/portfolio-en.png`
- `public/og/portfolio-fr.png`
- `public/og/projects/` — twenty localized per-project social images named from the canonical slug and locale.

### Validation and tests

- `vitest.config.ts`
- `playwright.config.ts`
- `lighthouserc.json`
- `scripts/validate-content.ts`
- `tests/unit/project-facts.test.ts`
- `tests/unit/i18n.test.ts`
- `tests/unit/validation.test.ts`
- `tests/unit/seo.test.ts`
- `tests/e2e/home.spec.ts`
- `tests/e2e/navigation.spec.ts`
- `tests/e2e/projects.spec.ts`
- `tests/e2e/accessibility.spec.ts`
- `.github/workflows/quality.yml`

---

### Task 1: Produce and Approve the Production Visual Concepts

**Files:**

- Modify: `.gitignore`
- Create: `docs/design/portfolio-concepts/home-hero.png`
- Create: `docs/design/portfolio-concepts/home-projects.png`
- Create: `docs/design/portfolio-concepts/home-experience-capabilities.png`
- Create: `docs/design/portfolio-concepts/home-about-contact.png`
- Create: `docs/design/portfolio-concepts/case-study-desktop.png`
- Create: `docs/design/portfolio-concepts/home-mobile.png`
- Create: `docs/design/portfolio-design-inventory.md`

**Interfaces:**

- Consumes: Approved evidence-first design specification at `docs/superpowers/specs/2026-07-30-portfolio-evidence-first-redesign-design.md`.
- Produces: Six accepted concept images and a written inventory that every UI task uses as its fidelity source.

- [ ] **Step 1: Read the frontend visual-generation instructions**

Read the complete `imagegen` skill and `build-web-apps:frontend-app-builder` website-concept reference before generating any concept.

- [ ] **Step 2: Generate coordinated section concepts**

Generate one fresh, readable image for each listed surface. Use the exact approved copy, all visible controls as code-native implementation targets, the locked graphite/amber palette, Onest-like editorial typography, open layouts, no decorative badge above the hero, no generic bento grid, and no invented metrics.

The six prompts must preserve:

```text
Hero H1: I modernize complex systems and build software people can trust.
Hero support: Full-Stack Software Engineer working across Java/Spring Boot,
Angular, data platforms, and agentic migration workflows—with clear decisions,
human controls, and evidence.
Primary CTA: Explore selected work
Secondary CTA: Download CV
Availability: Open to full-time roles · Available for selected freelance work
```

- [ ] **Step 3: Inspect every generated concept**

Use `view_image` on all six images. Reject concepts containing unreadable text, fake metrics, extra hero badges, excessive cards, warm cream backgrounds, unapproved gradients, generic stock imagery, or inconsistent component families.

- [ ] **Step 4: Present the concept set for user approval**

Show the six images together. Record requested changes and regenerate only the affected sections with the same system. Do not start production UI code until the user approves the complete set.

- [ ] **Step 5: Write the implementation inventory**

Create `docs/design/portfolio-design-inventory.md` with:

```markdown
# Portfolio Design Inventory

## Accepted concepts
- Hero: `docs/design/portfolio-concepts/home-hero.png`
- Projects: `docs/design/portfolio-concepts/home-projects.png`
- Experience and capabilities: `docs/design/portfolio-concepts/home-experience-capabilities.png`
- About and contact: `docs/design/portfolio-concepts/home-about-contact.png`
- Case study: `docs/design/portfolio-concepts/case-study-desktop.png`
- Mobile: `docs/design/portfolio-concepts/home-mobile.png`

## Allowed first-viewport copy
- AH
- Work
- Experience
- Capabilities
- About
- EN / FR
- Let's talk
- I modernize complex systems and build software people can trust.
- Full-Stack Software Engineer working across Java/Spring Boot, Angular,
  data platforms, and agentic migration workflows—with clear decisions,
  human controls, and evidence.
- Explore selected work
- Download CV
- Open to full-time roles · Available for selected freelance work
- LinkedIn
- GitHub

## Color lock
- Dark background: `#0A0D13`
- Dark surface: `#11161D`
- Dark text: `#F3F5F8`
- Dark muted: `#929CA9`
- Dark accent: `#F0B94B`
- Light background: `#F7F7F5`
- Light surface: `#FFFFFF`
- Light text: `#171A1F`
- Light muted: `#626B75`
- Light accent: `#B56C00`

## Component families
- Full-width editorial header
- Text/link buttons with primary and secondary variants
- Evidence frames
- Status labels only for real states
- Editorial project rows
- Open timeline
- Capability rows
- Long-form case-study sections

## Prohibited deviations
- No placeholder portrait
- No decorative hero pill or kicker
- No equal-weight ten-card homepage grid
- No invented metrics
- No dead repository or demo action
- No color overlay over real screenshots
```

- [ ] **Step 6: Keep companion artifacts local**

Add `.superpowers/` to `.gitignore` so visual-companion sessions, browser profiles, and other temporary review artifacts cannot be staged with the production portfolio.

- [ ] **Step 7: Commit the accepted visual specification**

```powershell
git add -- .gitignore docs/design/portfolio-concepts docs/design/portfolio-design-inventory.md
git commit -m "docs: add accepted portfolio visual concepts"
```

---

### Task 2: Add the Test Harness and Canonical Project Facts

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `vitest.config.ts`
- Create: `src/data/project-facts.ts`
- Create: `tests/unit/project-facts.test.ts`

**Interfaces:**

- Consumes: Project inventory from the design specification.
- Produces: `ProjectId`, `ProjectFact`, `PROJECT_FACTS`, `getProjectFact()`, `PUBLIC_PROJECT_IDS`, and a Vitest test command used by later tasks.

- [ ] **Step 1: Add unit and browser-test dependencies**

Run:

```powershell
pnpm add -D vitest @playwright/test @axe-core/playwright linkinator @lhci/cli tsx gray-matter
```

Add scripts:

```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "test:e2e": "playwright test",
  "validate:content": "tsx scripts/validate-content.ts",
  "test:links": "linkinator ./dist --recurse --skip \"mailto:*\" --skip \"tel:*\"",
  "quality": "pnpm format:check && pnpm check && pnpm test && pnpm build"
}
```

- [ ] **Step 2: Configure Vitest**

Create:

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
    coverage: { reporter: ["text", "html"] },
  },
})
```

- [ ] **Step 3: Write the failing project inventory test**

```ts
// tests/unit/project-facts.test.ts
import { describe, expect, it } from "vitest"
import {
  FEATURED_PROJECT_IDS,
  PROJECT_FACTS,
  PUBLIC_PROJECT_IDS,
  getProjectFact,
} from "../../src/data/project-facts"

describe("project facts", () => {
  it("publishes exactly ten unique projects", () => {
    expect(PROJECT_FACTS).toHaveLength(10)
    expect(new Set(PROJECT_FACTS.map((project) => project.id)).size).toBe(10)
    expect(new Set(PROJECT_FACTS.map((project) => project.slug)).size).toBe(10)
  })

  it("keeps the approved four featured projects in order", () => {
    expect(FEATURED_PROJECT_IDS).toEqual([
      "ai-migration-factory",
      "adventureworks-bi",
      "medilink",
      "rifflock",
    ])
  })

  it("exposes only the three verified public repositories", () => {
    expect(PUBLIC_PROJECT_IDS).toEqual([
      "twitter-sentiment-analysis",
      "parclick",
      "sentiment-analysis-dashboard",
    ])
  })

  it("does not attach placeholder demos", () => {
    expect(PROJECT_FACTS.every((project) => project.demoUrl === undefined)).toBe(true)
  })

  it("fails clearly for an unknown project", () => {
    expect(() => getProjectFact("unknown" as never)).toThrow(
      "Unknown project: unknown",
    )
  })
})
```

- [ ] **Step 4: Run the test and confirm the failure**

Run:

```powershell
pnpm test -- tests/unit/project-facts.test.ts
```

Expected: failure because `src/data/project-facts.ts` does not exist.

- [ ] **Step 5: Implement the canonical types and inventory**

Create `ProjectFact` with this exact shape:

```ts
export const PROJECT_IDS = [
  "ai-migration-factory",
  "adventureworks-bi",
  "medilink",
  "rifflock",
  "erp-supermarket",
  "web-scraping-automation",
  "odoo-performance-prototype",
  "twitter-sentiment-analysis",
  "parclick",
  "sentiment-analysis-dashboard",
] as const

export type ProjectId = (typeof PROJECT_IDS)[number]
export type ProjectVisibility =
  | "public"
  | "private"
  | "professional-sanitized"
  | "unverified"
export type ProjectStatus =
  | "validated-mvp"
  | "completed"
  | "prototype"

export interface ProjectFact {
  id: ProjectId
  slug: string
  order: number
  featuredOrder?: number
  status: ProjectStatus
  visibility: ProjectVisibility
  stack: readonly string[]
  evidence: readonly string[]
  source: "resume" | "github"
  repositoryUrl?: string
  demoUrl?: string
}
```

Populate all ten entries with the exact stacks and visibility states in Section 9 of the design specification. Export:

```ts
export const FEATURED_PROJECT_IDS: readonly ProjectId[]
export const PUBLIC_PROJECT_IDS: readonly ProjectId[]
export function getProjectFact(id: ProjectId): ProjectFact
```

- [ ] **Step 6: Run the unit test**

Run:

```powershell
pnpm test -- tests/unit/project-facts.test.ts
```

Expected: five passing tests.

- [ ] **Step 7: Commit**

```powershell
git add -- package.json pnpm-lock.yaml vitest.config.ts src/data/project-facts.ts tests/unit/project-facts.test.ts
git commit -m "test: define verified portfolio project inventory"
```

---

### Task 3: Implement Locale Routing and Complete UI Dictionaries

**Files:**

- Modify: `astro.config.mjs`
- Create: `src/i18n/config.ts`
- Create: `src/i18n/ui.ts`
- Create: `tests/unit/i18n.test.ts`

**Interfaces:**

- Consumes: `ProjectId` from `src/data/project-facts.ts`.
- Produces: `Locale`, `LOCALES`, `DEFAULT_LOCALE`, `localizedPath()`, `alternateLocale()`, `UI_COPY`, and `getUiCopy()`.

- [ ] **Step 1: Write failing locale tests**

```ts
// tests/unit/i18n.test.ts
import { describe, expect, it } from "vitest"
import {
  DEFAULT_LOCALE,
  LOCALES,
  alternateLocale,
  localizedPath,
} from "../../src/i18n/config"
import { UI_COPY } from "../../src/i18n/ui"

describe("locale routing", () => {
  it("keeps English unprefixed and French prefixed", () => {
    expect(DEFAULT_LOCALE).toBe("en")
    expect(LOCALES).toEqual(["en", "fr"])
    expect(localizedPath("en", "/projects/parclick/")).toBe(
      "/projects/parclick/",
    )
    expect(localizedPath("fr", "/projects/parclick/")).toBe(
      "/fr/projects/parclick/",
    )
  })

  it("switches between the two supported locales", () => {
    expect(alternateLocale("en")).toBe("fr")
    expect(alternateLocale("fr")).toBe("en")
  })

  it("keeps dictionary keys identical", () => {
    expect(Object.keys(UI_COPY.en).sort()).toEqual(
      Object.keys(UI_COPY.fr).sort(),
    )
  })

  it("locks the availability copy in both languages", () => {
    expect(UI_COPY.en.availability).toBe(
      "Open to full-time roles · Available for selected freelance work",
    )
    expect(UI_COPY.fr.availability).toBe(
      "Ouvert aux postes à temps plein · Disponible pour des missions freelance sélectionnées",
    )
  })
})
```

- [ ] **Step 2: Run the tests and confirm failure**

Run:

```powershell
pnpm test -- tests/unit/i18n.test.ts
```

Expected: module-not-found failures.

- [ ] **Step 3: Implement locale helpers**

```ts
// src/i18n/config.ts
export const LOCALES = ["en", "fr"] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = "en"

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "fr" : "en"
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`
  if (locale === DEFAULT_LOCALE) return normalized
  return normalized === "/" ? "/fr/" : `/fr${normalized}`
}
```

- [ ] **Step 4: Implement complete dictionaries**

`UI_COPY.en` and `UI_COPY.fr` must contain identical keys for:

```ts
type UiCopy = {
  navWork: string
  navExperience: string
  navCapabilities: string
  navAbout: string
  navContact: string
  menuOpen: string
  menuClose: string
  languageLabel: string
  themeLabel: string
  themeLight: string
  themeDark: string
  themeSystem: string
  heroTitle: string
  heroSupport: string
  exploreWork: string
  downloadCv: string
  availability: string
  selectedWork: string
  allProjects: string
  experience: string
  capabilities: string
  educationAwards: string
  about: string
  contactTitle: string
  backToProjects: string
  repositoryPublic: string
  repositoryPrivate: string
  repositoryUnavailable: string
  statusValidatedMvp: string
  statusCompleted: string
  statusPrototype: string
  factsRole: string
  factsContext: string
  factsStatus: string
  factsStack: string
  factsRepository: string
  factsEvidence: string
  problem: string
  constraints: string
  architecture: string
  decisions: string
  implementation: string
  validation: string
  outcome: string
  limitations: string
  learning: string
  previousProject: string
  nextProject: string
}
```

Use the approved English copy and natural professional French, not literal word-for-word fragments.

Export:

```ts
export function getUiCopy(locale: Locale): UiCopy {
  return UI_COPY[locale]
}
```

- [ ] **Step 5: Configure Astro locales**

Add:

```js
i18n: {
  defaultLocale: "en",
  locales: ["en", "fr"],
  routing: {
    prefixDefaultLocale: false,
  },
},
```

Preserve the existing sitemap and robots integrations.

- [ ] **Step 6: Run tests and Astro check**

Run:

```powershell
pnpm test -- tests/unit/i18n.test.ts
pnpm check
```

Expected: all locale tests pass and Astro check exits 0.

- [ ] **Step 7: Commit**

```powershell
git add -- astro.config.mjs src/i18n/config.ts src/i18n/ui.ts tests/unit/i18n.test.ts
git commit -m "feat: add English and French locale foundation"
```

---

### Task 4: Add Localized Content Schemas and Build-Time Validation

**Files:**

- Modify: `src/content/config.ts`
- Modify: `src/content/projects/*.md`
- Create: `src/lib/validation.ts`
- Create: `scripts/validate-content.ts`
- Create: `tests/unit/validation.test.ts`

**Interfaces:**

- Consumes: `PROJECT_IDS`, `ProjectFact`, and locale constants.
- Produces: `LocalizedCaseStudyData`, `validateCaseStudyInventory()`, and `pnpm validate:content`.

Define:

```ts
export interface LocalizedCaseStudyData {
  projectId: string
  locale: "en" | "fr"
  slug: string
}
```

- [ ] **Step 1: Write failing validator tests**

```ts
// tests/unit/validation.test.ts
import { describe, expect, it } from "vitest"
import { validateCaseStudyInventory } from "../../src/lib/validation"
import type { ProjectFact } from "../../src/data/project-facts"

const fact: ProjectFact = {
  id: "parclick",
  slug: "parclick",
  order: 9,
  status: "prototype",
  visibility: "public",
  stack: ["Django 5.2", "Bootstrap 5", "SQLite"],
  evidence: ["QR workflow", "Public screenshots"],
  source: "github",
  repositoryUrl: "https://github.com/Hamdaoui-Ali/ParClick",
}

describe("case-study inventory validation", () => {
  it("requires English and French for every published project", () => {
    expect(() =>
      validateCaseStudyInventory([fact], [
        { projectId: "parclick", locale: "en", slug: "parclick" },
      ]),
    ).toThrow("Missing fr case study for parclick")
  })

  it("rejects unknown project IDs", () => {
    expect(() =>
      validateCaseStudyInventory([fact], [
        { projectId: "unknown", locale: "en", slug: "unknown" },
        { projectId: "unknown", locale: "fr", slug: "unknown" },
      ]),
    ).toThrow("Unknown case-study projectId: unknown")
  })

  it("rejects placeholder public URLs", () => {
    expect(() =>
      validateCaseStudyInventory(
        [{ ...fact, repositoryUrl: "https://github.com/yourusername/app" }],
        [
          { projectId: "parclick", locale: "en", slug: "parclick" },
          { projectId: "parclick", locale: "fr", slug: "parclick" },
        ],
      ),
    ).toThrow("Placeholder URL for parclick")
  })
})
```

- [ ] **Step 2: Run the validator test and confirm failure**

Run:

```powershell
pnpm test -- tests/unit/validation.test.ts
```

Expected: module-not-found failure.

- [ ] **Step 3: Extend the content schemas**

Keep the existing `projects` collection as a legacy archive and add:

```ts
const caseStudies = defineCollection({
  schema: z.object({
    projectId: z.enum(PROJECT_IDS),
    locale: z.enum(LOCALES),
    title: z.string().min(1),
    summary: z.string().min(1),
    seoDescription: z.string().min(80).max(170),
    role: z.string().min(1),
    context: z.string().min(1),
    duration: z.string().min(1),
    outcomeLabel: z.string().min(1),
    evidenceAlt: z.array(z.string().min(1)).min(1),
  }),
})
```

Add `published: z.boolean().default(false)` to the legacy schema and explicitly add `published: false` to every file in `src/content/projects/`.

- [ ] **Step 4: Implement the pure validator**

`validateCaseStudyInventory()` must:

- Require exactly one English and one French entry per project fact.
- Reject duplicate locale/project pairs.
- Reject unknown IDs.
- Require slug equality with the canonical fact.
- Reject `your-app-url`, `yourusername`, `localhost`, and empty public repository URLs.
- Reject repository URLs on `private`, `professional-sanitized`, or `unverified` visibility unless explicitly verified later.
- Reject any `demoUrl` that is not HTTPS.

- [ ] **Step 5: Add the filesystem validation script**

Use `fast-glob` behavior through Node's recursive directory walk, `gray-matter`, and the pure validator:

```ts
// scripts/validate-content.ts
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { PROJECT_FACTS } from "../src/data/project-facts"
import { validateCaseStudyInventory } from "../src/lib/validation"

// Read src/content/case-studies/en and fr, parse frontmatter, validate inventory,
// print "Validated 20 localized case studies for 10 projects." on success,
// and set process.exitCode = 1 with the exact validation error on failure.
```

Do not add `validate:content` to the default `quality` path until all twenty files exist in Task 10. Unit tests cover the validator meanwhile.

- [ ] **Step 6: Run validation tests and Astro check**

Run:

```powershell
pnpm test -- tests/unit/validation.test.ts
pnpm check
```

Expected: unit tests pass; the current site still builds because the new routes are not wired.

- [ ] **Step 7: Commit**

```powershell
git add -- src/content/config.ts src/content/projects src/lib/validation.ts scripts/validate-content.ts tests/unit/validation.test.ts
git commit -m "feat: validate localized case-study content"
```

---

### Task 5: Build the Global Design System and Locale-Aware Layout

**Files:**

- Create: `src/styles/global.css`
- Modify: `src/layouts/Layout.astro`
- Create: `src/components/shell/SkipLink.astro`
- Create: `src/components/shell/SiteFooter.astro`
- Create: `tests/e2e/home.spec.ts`
- Create: `playwright.config.ts`

**Interfaces:**

- Consumes: `Locale`, UI copy, site data, and accepted design inventory.
- Produces: Global CSS tokens, localized metadata props, skip-link behavior, and a Playwright web-server harness.

- [ ] **Step 1: Configure Playwright**

```ts
// playwright.config.ts
import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  use: {
    baseURL: "http://127.0.0.1:4321",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "pnpm dev --host 127.0.0.1 --port 4321",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: true,
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    {
      name: "chromium-mobile",
      use: { browserName: "chromium", viewport: { width: 390, height: 844 } },
    },
  ],
})
```

Install the browser:

```powershell
pnpm exec playwright install chromium
```

- [ ] **Step 2: Write the failing shell test**

```ts
// tests/e2e/home.spec.ts
import { expect, test } from "@playwright/test"

test("English shell exposes the approved identity and skip link", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Ali Hamdaoui/)
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeAttached()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
})
```

- [ ] **Step 3: Run the shell tests and record the current failure**

Run:

```powershell
pnpm exec playwright test tests/e2e/home.spec.ts --project=chromium-mobile
```

Expected: the skip-link assertion fails because the current shell has no skip link.

- [ ] **Step 4: Extract global styling from `Layout.astro`**

Create `src/styles/global.css` with:

- Approved CSS custom properties for light and dark themes.
- Onest Variable and system monospace stacks.
- `box-sizing: border-box`.
- `overflow-x: clip` as a defensive boundary, while component tests still require intrinsic no-overflow.
- Focus-visible ring using amber plus a contrasting offset.
- Reduced-motion rules.
- Editorial containers and reading widths.
- Explicit button/control typography.
- Screen-reader-only utility.

Remove obsolete duplicate keyframes and the current gradient-name utility unless the accepted concept contains it.

- [ ] **Step 5: Rebuild `Layout.astro`**

Add props:

```ts
interface Props {
  locale: Locale
  title: string
  description: string
  image?: string
  canonicalPath: string
  alternatePath: string
  pageType?: "website" | "article"
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}
```

The layout must:

- Set `lang`.
- Generate canonical and `hreflang` links.
- Use localized Open Graph locale.
- Render production image URLs.
- Add `SkipLink`, header slot/component, main slot, and footer.
- Preserve Speed Insights.
- Remove `public/photo.svg` from any rendered path.

- [ ] **Step 6: Implement skip link and footer**

The skip link targets `#main-content`. The footer contains copyright, language summary, email, LinkedIn, GitHub, and CV actions without repeating a second `id="contact"`.

- [ ] **Step 7: Run checks**

Run:

```powershell
pnpm check
pnpm exec playwright test tests/e2e/home.spec.ts
```

Expected: shell identity and skip-link tests pass on desktop and mobile.

- [ ] **Step 8: Commit**

```powershell
git add -- playwright.config.ts src/styles/global.css src/layouts/Layout.astro src/components/shell/SkipLink.astro src/components/shell/SiteFooter.astro tests/e2e/home.spec.ts
git commit -m "feat: establish portfolio design system and page shell"
```

---

### Task 6: Replace Navigation, Theme, and Language Controls

**Files:**

- Create: `src/components/shell/SiteHeader.astro`
- Create: `src/components/shell/MobileMenu.astro`
- Create: `src/components/shell/LanguageSwitcher.astro`
- Create: `src/components/shell/ThemeSwitcher.astro`
- Modify: `src/layouts/Layout.astro`
- Create: `tests/e2e/navigation.spec.ts`
- Retire from rendering: `src/components/Header.astro`
- Retire from rendering: `src/components/ThemeToggle.astro`

**Interfaces:**

- Consumes: `locale`, `alternatePath`, localized UI strings.
- Produces: Accessible desktop/mobile navigation and `data-theme` behavior.

- [ ] **Step 1: Write failing navigation tests**

```ts
// tests/e2e/navigation.spec.ts
import { expect, test } from "@playwright/test"

test("mobile menu manages focus and Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  const trigger = page.getByRole("button", { name: "Open menu" })
  await trigger.click()
  await expect(trigger).toHaveAttribute("aria-expanded", "true")
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(trigger).toHaveAttribute("aria-expanded", "false")
  await expect(trigger).toBeFocused()
})

test("theme choices expose radio semantics", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: "Choose theme" }).click()
  const dark = page.getByRole("menuitemradio", { name: "Dark" })
  await dark.click()
  await expect(dark).toHaveAttribute("aria-checked", "true")
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark")
})

test("language switch points to the equivalent page", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: "Français" })).toHaveAttribute(
    "href",
    "/fr/",
  )
})

test("mobile navigation has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  const sizes = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }))
  expect(sizes.scrollWidth).toBe(sizes.clientWidth)
})
```

- [ ] **Step 2: Run tests and confirm failure**

Run:

```powershell
pnpm exec playwright test tests/e2e/navigation.spec.ts
```

Expected: role and route assertions fail against the current components.

- [ ] **Step 3: Implement the responsive header**

Desktop: `AH`, Work, Experience, Capabilities, About, language, theme, and "Let's talk".
Mobile: `AH`, current language, and a 44 px menu trigger. Theme and contact move inside the modal drawer.

Use current-page and current-section semantics without mutating text color classes imperatively.

- [ ] **Step 4: Implement the mobile dialog**

The dialog must:

- Use `role="dialog"` and `aria-modal="true"`.
- Move focus to the first navigation link.
- Loop Tab and Shift+Tab within the open drawer.
- Close on Escape, backdrop click, navigation, and Astro page swap.
- Restore focus to the trigger.
- Lock body scrolling while open.

- [ ] **Step 5: Implement theme radio semantics**

Persist `light`, `dark`, or `system` under `theme`. Apply an inline head initializer before paint to avoid theme flash. Use `menuitemradio` and `aria-checked`; ArrowUp/ArrowDown moves between options.

- [ ] **Step 6: Implement language switching**

Render real links to `alternatePath`, labeled `English`/`Français`. Do not replace navigation with client-side state.

- [ ] **Step 7: Run navigation and overflow tests**

Run:

```powershell
pnpm exec playwright test tests/e2e/navigation.spec.ts tests/e2e/home.spec.ts
```

Expected: all tests pass on both configured viewports.

- [ ] **Step 8: Commit**

```powershell
git add -- src/components/shell src/layouts/Layout.astro tests/e2e/navigation.spec.ts
git commit -m "feat: add accessible responsive portfolio navigation"
```

---

### Task 7: Build the Reusable Project Model, Routes, and Case-Study Template

**Files:**

- Create: `src/lib/projects.ts`
- Create: `src/layouts/CaseStudyLayout.astro`
- Create: `src/components/projects/ProjectHero.astro`
- Create: `src/components/projects/ProjectFacts.astro`
- Create: `src/components/projects/EvidenceGallery.astro`
- Create: `src/components/projects/ArchitectureDiagram.astro`
- Create: `src/components/projects/DecisionList.astro`
- Create: `src/components/projects/ValidationPanel.astro`
- Create: `src/components/projects/LimitationsPanel.astro`
- Create: `src/components/projects/ProjectNavigation.astro`
- Rewrite: `src/pages/projects/[slug].astro`
- Create: `src/pages/fr/projects/[slug].astro`
- Create: `src/content/case-studies/en/ai-migration-factory.md`
- Create: `src/content/case-studies/fr/ai-migration-factory.md`
- Create: `src/components/evidence/MigrationWorkflow.astro`
- Create: `tests/e2e/projects.spec.ts`

**Interfaces:**

- Consumes: `ProjectFact`, `Locale`, `UI_COPY`, and `caseStudies` content.
- Produces: `LocalizedProject`, `getLocalizedProjects()`, `getLocalizedProject()`, `getProjectStaticPaths()`, and the shared case-study route.

- [ ] **Step 1: Write failing route tests**

```ts
// tests/e2e/projects.spec.ts
import { expect, test } from "@playwright/test"

test("Migration Factory renders in English", async ({ page }) => {
  await page.goto("/projects/ai-migration-factory/")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "AI Migration Factory",
  )
  await expect(page.getByText("Private repository")).toBeVisible()
  await expect(page.getByRole("link", { name: /Source Code/ })).toHaveCount(0)
  await expect(page.getByText(/estimated time gain/i)).toBeVisible()
})

test("Migration Factory renders in French", async ({ page }) => {
  await page.goto("/fr/projects/ai-migration-factory/")
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
  await expect(page.getByRole("heading", { name: "Problème et enjeux" })).toBeVisible()
  await expect(page.getByRole("link", { name: "English" })).toHaveAttribute(
    "href",
    "/projects/ai-migration-factory/",
  )
})
```

- [ ] **Step 2: Run the tests and confirm route failure**

Run:

```powershell
pnpm exec playwright test tests/e2e/projects.spec.ts
```

Expected: French route is missing and English page contains outdated content.

- [ ] **Step 3: Implement the localized project model**

```ts
export interface LocalizedProject {
  fact: ProjectFact
  locale: Locale
  title: string
  summary: string
  seoDescription: string
  role: string
  context: string
  duration: string
  outcomeLabel: string
  evidenceAlt: string[]
  entry: CollectionEntry<"caseStudies">
}

export async function getLocalizedProjects(
  locale: Locale,
): Promise<LocalizedProject[]>

export async function getLocalizedProject(
  locale: Locale,
  slug: string,
): Promise<LocalizedProject | undefined>

export async function getProjectStaticPaths(locale: Locale)
```

Sort using `fact.order`. Throw on content/fact mismatch.

- [ ] **Step 4: Author the English Migration Factory case study**

Use exact frontmatter:

```yaml
---
projectId: ai-migration-factory
locale: en
title: AI Migration Factory
summary: Two internally validated MVPs for incremental Java/Spring Boot and Angular modernization using agentic workflows, human approvals, and durable evidence.
seoDescription: Case study of two AI Migration Factory MVPs for staged Java and Angular modernization, with agents, approval gates, test evidence, and rollback controls.
role: Principal designer and end-to-end developer
context: CGI PFE internship
duration: March–August 2026
outcomeLabel: Two internally presented and validated MVPs
evidenceAlt:
  - Agentic migration workflow from analysis through validated output
  - Sanitized migration plan with approval and rollback states
  - Example build and test evidence report
---
```

Write all ten approved sections. Use `>80% estimated time gain in the migration ROI study`; do not call the system completed.

- [ ] **Step 5: Author the French equivalent**

Use the same `projectId` and claims. Required title and terms:

```yaml
title: AI Migration Factory
summary: Deux MVP validés en interne pour moderniser progressivement des applications Java/Spring Boot et Angular grâce à des workflows agentiques, des validations humaines et des preuves durables.
role: Concepteur principal et développeur de bout en bout
context: Stage PFE chez CGI
duration: Mars–août 2026
outcomeLabel: Deux MVP présentés et validés en interne
```

Translate every narrative section; keep identifiers and stack names unchanged.

- [ ] **Step 6: Build the shared case-study components**

The layout order is fixed:

1. Hero and status/visibility
2. Facts rail
3. Problem and stakes
4. Role and scope
5. Constraints
6. Architecture/workflow
7. Decisions and trade-offs
8. Implementation evidence
9. Validation
10. Outcome, limitations, and learning
11. Previous/next navigation

`MigrationWorkflow.astro` renders Analyze, Plan, Transform, Validate, and Approval Gate as accessible HTML/SVG with a text description.

- [ ] **Step 7: Replace both dynamic routes**

English and French routes call `getProjectStaticPaths(locale)`, merge the localized content, pass locale-aware SEO to `Layout`, and render `CaseStudyLayout`.

Unknown slugs must produce the real 404 output, not redirect to `/#projects`.

- [ ] **Step 8: Run tests**

Run:

```powershell
pnpm check
pnpm exec playwright test tests/e2e/projects.spec.ts
```

Expected: both Migration Factory routes pass.

- [ ] **Step 9: Commit**

```powershell
git add -- src/lib/projects.ts src/layouts/CaseStudyLayout.astro src/components/projects src/components/evidence/MigrationWorkflow.astro src/pages/projects src/pages/fr/projects src/content/case-studies tests/e2e/projects.spec.ts
git commit -m "feat: add bilingual evidence-led case-study system"
```

---

### Task 8: Add the Remaining Three Flagship Case Studies

**Files:**

- Create: `src/content/case-studies/en/adventureworks-bi.md`
- Create: `src/content/case-studies/fr/adventureworks-bi.md`
- Create: `src/content/case-studies/en/medilink.md`
- Create: `src/content/case-studies/fr/medilink.md`
- Create: `src/content/case-studies/en/rifflock.md`
- Create: `src/content/case-studies/fr/rifflock.md`
- Create: `src/components/evidence/DataPipeline.astro`
- Create: `src/components/evidence/FullStackFlow.astro`
- Create: `src/components/evidence/SecurityFlow.astro`
- Modify: `tests/e2e/projects.spec.ts`

**Interfaces:**

- Consumes: Shared case-study model and components from Task 7.
- Produces: Six localized content entries and three project-specific evidence diagrams.

- [ ] **Step 1: Add failing flagship inventory tests**

Add:

```ts
for (const [slug, title] of [
  ["adventureworks-bi", "AdventureWorks2022 BI Solution"],
  ["medilink", "MediLink"],
  ["rifflock", "RiffLock"],
] as const) {
  test(`${slug} renders in both locales`, async ({ page }) => {
    await page.goto(`/projects/${slug}/`)
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title)
    await page.goto(`/fr/projects/${slug}/`)
    await expect(page.locator("html")).toHaveAttribute("lang", "fr")
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })
}
```

- [ ] **Step 2: Run the tests and confirm 404 failures**

Run:

```powershell
pnpm exec playwright test tests/e2e/projects.spec.ts
```

Expected: six new routes fail.

- [ ] **Step 3: Author AdventureWorks English and French content**

Use:

```yaml
projectId: adventureworks-bi
title: AdventureWorks2022 BI Solution
role: Data Analyst
context: DXC internship
duration: July–September 2025
outcomeLabel: End-to-end BI solution delivered and presented
```

Both locales cover star schema, SSIS extraction/transformation/quality/loading, SSAS cube, DAX measures, Power BI dashboards, validation, limits, and learning. `DataPipeline.astro` shows Source → SSIS → Star Schema → SSAS → Power BI.

- [ ] **Step 4: Author MediLink English and French content**

Use the verified résumé stack:

```yaml
projectId: medilink
title: MediLink
role: Sole full-stack developer
context: Individual project
duration: "2026"
outcomeLabel: Role-based medical appointment platform
```

Cover patient/doctor/admin workflows, Java 21, Spring Boot 4, Spring Security, Angular 21, MySQL, Flyway, Testcontainers, JWT, role-based authorization, booking constraints, validation, and repository status as unverified/private.

- [ ] **Step 5: Author RiffLock English and French content**

Use:

```yaml
projectId: rifflock
title: RiffLock
role: Sole desktop application developer
context: Individual project
duration: "2026"
outcomeLabel: Local-first encrypted file protection workflow
```

Cover Python 3.14, CustomTkinter, SQLite, Argon2id, AES-256-GCM, optional guitar-riff second factor, `cryptography`, `librosa`, PyTest, PyInstaller, threat boundaries, recovery limitations, and private repository state.

- [ ] **Step 6: Run tests and content rendering**

Run:

```powershell
pnpm check
pnpm exec playwright test tests/e2e/projects.spec.ts
```

Expected: eight localized flagship routes pass.

- [ ] **Step 7: Commit**

```powershell
git add -- src/content/case-studies src/components/evidence tests/e2e/projects.spec.ts
git commit -m "feat: add bilingual flagship engineering case studies"
```

---

### Task 9: Add Three Résumé-Backed Professional Case Studies

**Files:**

- Create: `src/content/case-studies/en/erp-supermarket.md`
- Create: `src/content/case-studies/fr/erp-supermarket.md`
- Create: `src/content/case-studies/en/web-scraping-automation.md`
- Create: `src/content/case-studies/fr/web-scraping-automation.md`
- Create: `src/content/case-studies/en/odoo-performance-prototype.md`
- Create: `src/content/case-studies/fr/odoo-performance-prototype.md`
- Create: `src/components/evidence/ScrapingPipeline.astro`
- Create: `src/components/evidence/OdooBeforeAfter.astro`
- Modify: `src/components/evidence/FullStackFlow.astro`
- Modify: `tests/e2e/projects.spec.ts`

**Interfaces:**

- Consumes: Shared case-study system.
- Produces: Six localized professional case studies with sanitized evidence components.

- [ ] **Step 1: Add failing route tests**

Assert both locale routes for:

```ts
[
  ["erp-supermarket", "ERP Supermarket"],
  ["web-scraping-automation", "Web & Scraping Automation"],
  ["odoo-performance-prototype", "Odoo Performance Prototype"],
]
```

Also assert each page contains `Sanitized professional evidence` and no Source Code action.

- [ ] **Step 2: Run tests and confirm route failures**

Run:

```powershell
pnpm exec playwright test tests/e2e/projects.spec.ts
```

- [ ] **Step 3: Author ERP Supermarket in both languages**

Facts:

```yaml
role: Full-Stack Java/Angular Developer Intern
context: Yuccainfo internship
duration: May–July 2025
outcomeLabel: Functional ERP modules integrated and demonstrated
```

Content distinguishes Ali's product, stock, and sales module work from the team's complete ERP. Stack is Java, Spring Boot, Angular, TypeScript, MySQL, REST, Git, and Postman.

- [ ] **Step 4: Author Web & Scraping Automation in both languages**

Facts:

```yaml
role: Web and Automation Developer Intern
context: 2Peerfect internship
duration: July–September 2024
outcomeLabel: Responsive interfaces and automated structured-data extraction
```

Stack is HTML, CSS, JavaScript, Bootstrap, Python, BeautifulSoup, and Selenium. Do not mention FastAPI. The evidence diagram covers input site, browser/static extraction, cleaning, structured output, and change/error limits.

- [ ] **Step 5: Author Odoo Performance Prototype in both languages**

Facts:

```yaml
role: Web Developer Intern
context: 3alink internship
duration: June–July 2024
outcomeLabel: Performance findings translated into an optimized responsive prototype
```

Stack is Odoo, HTML, CSS, JavaScript, and Bootstrap. Do not mention Flask, Postman, or PyTest. Show observation → finding → design response → prototype rather than fabricated benchmark numbers.

- [ ] **Step 6: Run checks**

Run:

```powershell
pnpm check
pnpm exec playwright test tests/e2e/projects.spec.ts
```

Expected: fourteen localized routes pass.

- [ ] **Step 7: Commit**

```powershell
git add -- src/content/case-studies src/components/evidence tests/e2e/projects.spec.ts
git commit -m "feat: add sanitized professional project case studies"
```

---

### Task 10: Add the Three Public GitHub Case Studies and Local Screenshots

**Files:**

- Create: `src/content/case-studies/en/twitter-sentiment-analysis.md`
- Create: `src/content/case-studies/fr/twitter-sentiment-analysis.md`
- Create: `src/content/case-studies/en/parclick.md`
- Create: `src/content/case-studies/fr/parclick.md`
- Create: `src/content/case-studies/en/sentiment-analysis-dashboard.md`
- Create: `src/content/case-studies/fr/sentiment-analysis-dashboard.md`
- Create: `src/components/evidence/ModelEvaluation.astro`
- Create: `src/components/evidence/ParkingWorkflow.astro`
- Create: `src/components/evidence/MultiModelPipeline.astro`
- Create: `src/assets/projects/twitter-sentiment-analysis/*`
- Create: `src/assets/projects/parclick/*`
- Create: `src/assets/projects/sentiment-analysis-dashboard/*`
- Modify: `tests/e2e/projects.spec.ts`

**Interfaces:**

- Consumes: Public GitHub repositories and shared case-study system.
- Produces: Six localized public-project entries, local screenshots, and public repository actions.

- [ ] **Step 1: Add failing public-project tests**

```ts
for (const [slug, repo] of [
  [
    "twitter-sentiment-analysis",
    "https://github.com/Hamdaoui-Ali/Twitter-Sentiment-Analysis",
  ],
  ["parclick", "https://github.com/Hamdaoui-Ali/ParClick"],
  [
    "sentiment-analysis-dashboard",
    "https://github.com/Hamdaoui-Ali/Sentiment-Analysis",
  ],
] as const) {
  test(`${slug} exposes a working public repository in both locales`, async ({
    page,
  }) => {
    await page.goto(`/projects/${slug}/`)
    await expect(page.getByRole("link", { name: "View source code" })).toHaveAttribute(
      "href",
      repo,
    )
    await page.goto(`/fr/projects/${slug}/`)
    await expect(page.getByRole("link", { name: "Voir le code source" })).toHaveAttribute(
      "href",
      repo,
    )
  })
}
```

Add assertions that no page contains `your-app-url`, `yourusername`, or a Live Demo action.

- [ ] **Step 2: Run tests and confirm route failures**

Run:

```powershell
pnpm exec playwright test tests/e2e/projects.spec.ts
```

- [ ] **Step 3: Download and inspect Twitter Sentiment screenshots**

Download the three README images into `src/assets/projects/twitter-sentiment-analysis/` using meaningful filenames. Inspect each with `view_image`; retain only screenshots that clearly show text input, result state, or Twitter analysis.

Write the case study around:

- Sentiment140, 1.6 million tweets
- TF-IDF with 16,092 reported features
- Logistic Regression
- 79.9% reported accuracy
- Streamlit, scikit-learn, NLTK, pandas, NumPy, `ntscraper`
- Twitter/Nitter access limitations
- No test suite found
- Placeholder live-demo URL removed
- Unsafe external tweet HTML identified as a hardening concern

- [ ] **Step 4: Download and inspect ParClick screenshots**

Download README screenshots into `src/assets/projects/parclick/`. Select four that show landing/client flow, reservation/pricing, QR ticket, and employee validation/dashboard.

Write the case study around:

- Django 5.2, Bootstrap 5, SQLite, QRCode, Pillow, ReportLab
- Separate client and employee flows
- Reservation duration and time-based pricing
- QR ticket generation
- History and employee validation
- Separate Client/Employee model trade-off
- Missing transactional double-booking guard
- No repository tests
- Payment, REST/SPA, Docker, and CI as roadmap items

- [ ] **Step 5: Download and inspect Sentiment Dashboard screenshots**

Download README screenshots into `src/assets/projects/sentiment-analysis-dashboard/`. Select views for text analysis, live-source analysis, charts, and word cloud.

Write the case study around:

- React 19, Material UI, Chakra UI, FastAPI
- BERT, VADER, TextBlob
- Reddit and YouTube ingestion
- Word cloud and multi-model comparison
- Ridge/polynomial forecast path
- API credential dependency
- `allow_origins=["*"]` hardening concern
- No repository test suite
- README performance numbers not treated as verified outcomes

- [ ] **Step 6: Implement domain evidence components**

`ModelEvaluation.astro` shows Dataset → Preprocessing → TF-IDF → Logistic Regression → Evaluation.
`ParkingWorkflow.astro` shows Browse → Reserve → Price → QR Ticket → Employee Validate → History.
`MultiModelPipeline.astro` shows Input/Social Sources → FastAPI → BERT/VADER/TextBlob → Aggregation → Charts/Forecast.

All diagrams include a visible caption and accessible text equivalent.

- [ ] **Step 7: Run the complete content validator**

Now that all twenty files exist, run:

```powershell
pnpm validate:content
```

Expected:

```text
Validated 20 localized case studies for 10 projects.
```

Wire `pnpm validate:content` into the `quality` script if it was temporarily excluded.

- [ ] **Step 8: Run project and build checks**

Run:

```powershell
pnpm check
pnpm test
pnpm validate:content
pnpm exec playwright test tests/e2e/projects.spec.ts
pnpm build
```

Expected: twenty localized case-study routes build and pass.

- [ ] **Step 9: Commit**

```powershell
git add -- src/content/case-studies src/components/evidence src/assets/projects tests/e2e/projects.spec.ts package.json pnpm-lock.yaml
git commit -m "feat: add verified public repository case studies"
```

---

### Task 11: Build the English and French Project Indexes

**Files:**

- Create: `src/components/projects/ProjectIndex.astro`
- Rewrite: `src/pages/projects/index.astro`
- Create: `src/pages/fr/projects/index.astro`
- Modify: `tests/e2e/projects.spec.ts`

**Interfaces:**

- Consumes: `getLocalizedProjects(locale)`.
- Produces: Grouped, complete project indexes with ten visible routes in each locale.

- [ ] **Step 1: Add failing project-index tests**

```ts
test("project index lists all ten projects without JavaScript", async ({ page }) => {
  await page.goto("/projects/")
  await expect(page.locator("article[data-project-id]")).toHaveCount(10)
  await expect(page.getByText("AI Migration Factory")).toBeVisible()
  await expect(page.getByText("Sentiment Analysis Dashboard")).toBeVisible()
})

test("French project index has route parity", async ({ page }) => {
  await page.goto("/fr/projects/")
  await expect(page.locator("article[data-project-id]")).toHaveCount(10)
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
})
```

- [ ] **Step 2: Run and confirm index failure**

Run:

```powershell
pnpm exec playwright test tests/e2e/projects.spec.ts
```

- [ ] **Step 3: Implement `ProjectIndex.astro`**

Group projects under:

- AI & Modernization
- Data & NLP
- Full-Stack Systems
- Automation & Prototypes
- Security

Each editorial row shows title, one-sentence summary, stack excerpt, visibility, and a case-study link. The HTML contains all ten projects before JavaScript. Do not use a ten-card bento grid.

- [ ] **Step 4: Implement both index routes**

Use locale-aware title, description, canonical, alternate URL, and breadcrumb schema. English and French route files only load data and compose `ProjectIndex`.

- [ ] **Step 5: Run tests and commit**

```powershell
pnpm exec playwright test tests/e2e/projects.spec.ts
pnpm check
git add -- src/components/projects/ProjectIndex.astro src/pages/projects/index.astro src/pages/fr/projects/index.astro tests/e2e/projects.spec.ts
git commit -m "feat: add complete bilingual project index"
```

---

### Task 12: Rebuild the Homepage from Verified Data

**Files:**

- Rewrite: `src/pages/index.astro`
- Create: `src/pages/fr/index.astro`
- Create: `src/components/home/Hero.astro`
- Create: `src/components/home/MigrationEvidenceArtifact.astro`
- Create: `src/components/home/ProofStrip.astro`
- Create: `src/components/home/SelectedProjects.astro`
- Create: `src/components/home/ProjectArchiveRows.astro`
- Create: `src/components/home/ExperienceTimeline.astro`
- Create: `src/components/home/CapabilityRows.astro`
- Create: `src/components/home/EducationAwards.astro`
- Create: `src/components/home/About.astro`
- Create: `src/components/home/ContactCTA.astro`
- Create: `src/components/home/HomePage.astro`
- Rewrite: `src/data/experience.ts`
- Modify: `src/data/site.ts`
- Modify: `tests/e2e/home.spec.ts`

**Interfaces:**

- Consumes: localized projects, UI dictionary, corrected experience, and accepted visual concepts.
- Produces: Complete English and French homepages with all ten project links.

- [ ] **Step 1: Extend the failing homepage tests**

Add exact assertions:

```ts
test("English homepage presents approved conversion and proof", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "I modernize complex systems and build software people can trust.",
  )
  await expect(page.getByText(
    "Open to full-time roles · Available for selected freelance work",
  )).toBeVisible()
  await expect(page.getByRole("link", { name: "Explore selected work" })).toHaveAttribute(
    "href",
    "#work",
  )
  await expect(page.locator("[data-project-link]")).toHaveCount(10)
  await expect(page.getByText(/>80% estimated time gain/)).toBeVisible()
})

test("French homepage is fully localized", async ({ page }) => {
  await page.goto("/fr/")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Je modernise des systèmes complexes et je construis des logiciels dignes de confiance.",
  )
  await expect(page.locator("[data-project-link]")).toHaveCount(10)
  await expect(page.locator("html")).toHaveAttribute("lang", "fr")
})

test("homepage ships no placeholder portrait", async ({ page }) => {
  await page.goto("/")
  await expect(page.locator("body")).not.toContainText(
    "Professional photo coming soon",
  )
  await expect(page.locator('img[src="/photo.svg"]')).toHaveCount(0)
})
```

- [ ] **Step 2: Run tests and confirm content failure**

Run:

```powershell
pnpm exec playwright test tests/e2e/home.spec.ts
```

- [ ] **Step 3: Correct identity and experience data**

Set:

```ts
email: "alihamdaoui000@gmail.com"
location: "Rabat, Morocco"
worksFor: "CGI"
jobTitle: "Full-Stack Software Engineer"
```

Replace the experience entries with the five résumé-authoritative internships and exact dates from Section 8.5 of the design specification.

- [ ] **Step 4: Implement the hero and proof strip**

Use the copy lock exactly. The hero artifact is code-native and uses no photo. The proof strip contains:

- 2 internally presented and validated MVPs
- >80% estimated time gain in the migration ROI study
- 10 evidence-led case studies

- [ ] **Step 5: Implement selected and remaining work**

Render the four featured projects at larger editorial scale, followed by six compact rows. Every item uses localized content and links to a working case-study route.

- [ ] **Step 6: Implement experience and capabilities**

Experience links CGI, DXC, Yuccainfo, 2Peerfect, and 3alink to related projects. Capability rows map evidence:

- Full-stack systems → MediLink, ERP, ParClick
- Modernization and AI → Migration Factory
- Data and BI → AdventureWorks, both sentiment projects
- Platform and delivery → Migration Factory, RiffLock, public repos

- [ ] **Step 7: Implement education, distinctions, About, and contact**

Do not invent award dates. Do not render `photo.svg`. Contact includes email, LinkedIn, GitHub, and two CV download links.

- [ ] **Step 8: Implement the shared homepage composition**

`HomePage.astro` receives `locale` and the localized project collection. English and French route files only fetch data, set SEO, and render `HomePage`.

- [ ] **Step 9: Compare each homepage slice to accepted concepts**

At desktop width, capture hero, projects, experience/capabilities, and about/contact screenshots. Use `view_image` on each accepted concept and corresponding render; fix copy, scale, spacing, palette, and container drift before proceeding.

- [ ] **Step 10: Run homepage and navigation tests**

Run:

```powershell
pnpm exec playwright test tests/e2e/home.spec.ts tests/e2e/navigation.spec.ts
pnpm check
```

- [ ] **Step 11: Commit**

```powershell
git add -- src/pages/index.astro src/pages/fr/index.astro src/components/home src/data/experience.ts src/data/site.ts tests/e2e/home.spec.ts
git commit -m "feat: rebuild bilingual evidence-first homepage"
```

---

### Task 13: Add CVs, SEO, Structured Data, Social Images, and 404 Handling

**Files:**

- Create: `src/lib/seo.ts`
- Create: `tests/unit/seo.test.ts`
- Modify: `src/layouts/Layout.astro`
- Create: `src/pages/404.astro`
- Create: `public/cv/ali-hamdaoui-full-stack-en.pdf`
- Create: `public/cv/ali-hamdaoui-full-stack-fr.pdf`
- Create: `public/og/portfolio-en.png`
- Create: `public/og/portfolio-fr.png`
- Create: `public/og/projects/*`
- Modify: project and homepage routes

**Interfaces:**

- Consumes: canonical facts, localized content, supplied résumé source, and accepted visuals.
- Produces: locale-aware metadata, two CV downloads, Person/CreativeWork/Breadcrumb schema, project social images, and a real 404 page.

- [ ] **Step 1: Write failing SEO tests**

```ts
// tests/unit/seo.test.ts
import { describe, expect, it } from "vitest"
import { buildAlternateLinks, buildPersonSchema } from "../../src/lib/seo"

describe("SEO helpers", () => {
  it("builds English and French alternates", () => {
    expect(buildAlternateLinks("/projects/parclick/")).toEqual([
      { locale: "en", href: "https://ali-hamdaoui.vercel.app/projects/parclick/" },
      { locale: "fr", href: "https://ali-hamdaoui.vercel.app/fr/projects/parclick/" },
    ])
  })

  it("uses corrected professional identity", () => {
    const schema = buildPersonSchema()
    expect(schema.email).toBe("mailto:alihamdaoui000@gmail.com")
    expect(schema.worksFor).toEqual({ "@type": "Organization", name: "CGI" })
  })
})
```

- [ ] **Step 2: Run test and confirm module failure**

Run:

```powershell
pnpm test -- tests/unit/seo.test.ts
```

- [ ] **Step 3: Implement SEO helpers**

Implement canonical and alternates, Person schema, BreadcrumbList schema, and CreativeWork project schema. Project schema includes repository URL only for public projects.

- [ ] **Step 4: Produce French and English CV PDFs**

Extract the supplied `main.tex` into a temporary working directory outside the repository. Produce:

- A corrected French PDF using the supplied facts.
- An English translation with identical facts, internship labels, stack names, and qualified ROI wording.

Compile through an available LaTeX/PDF workflow. Inspect both PDFs visually and extract their text to verify email, dates, titles, and the word `estimated`/`estimé`.

Copy only the final PDFs into `public/cv/`.

- [ ] **Step 5: Generate production social images**

Create 1200 × 630 PNG images for:

- English portfolio
- French portfolio
- Each project in English and French

Use the approved palette, project title, concise localized descriptor, `AH` mark, and project-specific evidence motif. Verify exact text visually; regenerate any image with corrupted text.

- [ ] **Step 6: Add the 404 page**

Create a localized-neutral 404 with English and French labels, home links, project-index links, and no redirect.

- [ ] **Step 7: Wire route metadata**

Every route supplies canonical path, alternate path, localized OG image, page type, and structured data.

- [ ] **Step 8: Test assets and SEO**

Run:

```powershell
pnpm test -- tests/unit/seo.test.ts
pnpm build
```

Verify:

```powershell
Test-Path -LiteralPath 'dist/cv/ali-hamdaoui-full-stack-en.pdf'
Test-Path -LiteralPath 'dist/cv/ali-hamdaoui-full-stack-fr.pdf'
```

Expected: both return `True`.

- [ ] **Step 9: Commit**

```powershell
git add -- src/lib/seo.ts tests/unit/seo.test.ts src/layouts/Layout.astro src/pages public/cv public/og
git commit -m "feat: add bilingual CV downloads and portfolio metadata"
```

---

### Task 14: Add Accessibility, Link, Lighthouse, and CI Quality Gates

**Files:**

- Create: `tests/e2e/accessibility.spec.ts`
- Create: `lighthouserc.json`
- Modify: `package.json`
- Modify: `.github/workflows/quality.yml`
- Modify: `README.md`

**Interfaces:**

- Consumes: completed production routes.
- Produces: automated accessibility, link, performance, and CI enforcement.

- [ ] **Step 1: Write the accessibility tests**

```ts
// tests/e2e/accessibility.spec.ts
import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

for (const path of [
  "/",
  "/fr/",
  "/projects/",
  "/projects/ai-migration-factory/",
  "/projects/parclick/",
]) {
  test(`${path} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(path)
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
    expect(
      results.violations.filter((violation) =>
        ["serious", "critical"].includes(violation.impact ?? ""),
      ),
    ).toEqual([])
  })
}

test("mobile menu open state has no serious violations", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")
  await page.getByRole("button", { name: "Open menu" }).click()
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations.filter((item) => item.impact === "critical")).toEqual([])
})
```

- [ ] **Step 2: Run accessibility tests and fix every serious/critical result**

Run:

```powershell
pnpm exec playwright test tests/e2e/accessibility.spec.ts
```

Do not suppress rules. Fix semantics, names, focus, contrast, headings, or landmarks at the source.

- [ ] **Step 3: Configure Lighthouse CI**

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist",
      "url": ["/", "/fr/", "/projects/", "/projects/ai-migration-factory/"]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:seo": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

Add:

```json
"test:lighthouse": "lhci autorun"
```

- [ ] **Step 4: Run link validation**

Run:

```powershell
pnpm build
pnpm test:links
```

Fix 404/410 links. Treat access-controlled 403/429 responses as reachable only when the URL is a known LinkedIn or GitHub page and the browser path works.

- [ ] **Step 5: Expand GitHub Actions**

The workflow must execute:

```yaml
- run: pnpm install --frozen-lockfile
- run: pnpm format:check
- run: pnpm check
- run: pnpm validate:content
- run: pnpm test
- run: pnpm build
- run: pnpm exec playwright install --with-deps chromium
- run: pnpm test:e2e
- run: pnpm test:links
- run: pnpm test:lighthouse
- run: pnpm audit --audit-level high
```

Use Node 20 and pnpm 9.15.0.

- [ ] **Step 6: Correct the README**

Update the feature list, bilingual routes, quality commands, project count, content architecture, CI claims, and CV paths. Remove the deleted `LICENSE.md` link unless a valid license file is restored through a separate user decision.

- [ ] **Step 7: Run the complete quality suite**

Run:

```powershell
pnpm format:check
pnpm check
pnpm validate:content
pnpm test
pnpm build
pnpm test:e2e
pnpm test:links
pnpm test:lighthouse
pnpm audit --audit-level high
```

Expected: every command exits 0.

- [ ] **Step 8: Commit**

```powershell
git add -- tests/e2e/accessibility.spec.ts lighthouserc.json package.json pnpm-lock.yaml .github/workflows/quality.yml README.md
git commit -m "ci: enforce portfolio accessibility and quality gates"
```

---

### Task 15: Perform Final Fidelity, Content, and Interaction Verification

**Files:**

- Modify: only files required to fix discovered mismatches.
- Do not retain temporary screenshots, traces, browser profiles, or validation scripts in the repository.

**Interfaces:**

- Consumes: Accepted concepts, complete implementation, and all automated checks.
- Produces: Agency-signoff implementation with a written fidelity ledger in the final handoff.

- [ ] **Step 1: Verify the clean repository scope**

Run:

```powershell
git status --short
git diff --check
```

Confirm no visual-companion `.superpowers/` files, browser profiles, temporary PDFs, or generated QA screenshots are staged.

- [ ] **Step 2: Run the full verification suite from a clean build**

Run:

```powershell
pnpm format:check
pnpm check
pnpm validate:content
pnpm test
pnpm build
pnpm test:e2e
pnpm test:links
pnpm test:lighthouse
pnpm audit --audit-level high
```

Record command exit codes and test totals.

- [ ] **Step 3: Exercise the core interaction path**

The flow under test is:

```text
English homepage → open mobile menu → navigate to Work → open a public project
→ verify repository action → switch to French → navigate next project
→ change theme → download French CV
```

Verify URL, focus, selected states, scroll behavior, download response, and absence of relevant console errors after each action.

- [ ] **Step 4: Capture native comparison screenshots**

Capture:

- Homepage at 1440 × 1000
- Homepage at 390 × 844
- Case study at the accepted desktop concept dimensions
- Case study at 390 × 844
- Light homepage
- French homepage

- [ ] **Step 5: Inspect accepted concepts and implementation screenshots**

Use `view_image` on each accepted concept and each matching browser screenshot in the same QA pass.

Check at least:

1. Exact hero/nav/CTA/availability copy
2. First-viewport balance and next-section visibility
3. Graphite/amber and light neutral palette fidelity
4. Onest scale, weight, line height, and control typography
5. Open editorial container model
6. Project screenshot framing and absence of overlays
7. Desktop/mobile header behavior
8. Case-study facts, evidence, and long-form rhythm
9. English/French visual parity
10. Focus, menu, theme, and reduced-motion states

- [ ] **Step 6: Write and resolve the fidelity ledger**

For every mismatch, record:

```text
Mismatch | Concept evidence | Render evidence | Fix made
```

Fix all issues that would receive a design-review comment. Intentional deviations require a concrete technical or content reason.

- [ ] **Step 7: Run the above-the-fold copy diff**

Compare rendered text with `docs/design/portfolio-design-inventory.md`. Remove added labels, badges, metrics, or explanatory copy not in the allowed list.

- [ ] **Step 8: Final commit**

Stage only verified production fixes:

```powershell
git add -u -- src tests public docs/design package.json pnpm-lock.yaml
git commit -m "fix: complete portfolio fidelity and responsive QA"
```

- [ ] **Step 9: Final status**

Run:

```powershell
git status --short
git log -15 --oneline
```

The final handoff must report:

- Accepted concept paths
- Browser/Playwright verification method
- Native viewports checked
- Automated commands and results
- At least five concrete fidelity comparisons
- Above-the-fold copy diff result
- Material mismatches fixed
- Core interaction path result
- Remaining intentional deviations
- Explicit statement that the implementation was faithfully verified against the accepted design
