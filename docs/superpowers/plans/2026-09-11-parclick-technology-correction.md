# ParClick Technology Correction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace ParClick’s inaccurate Java/Spring Boot/Angular/MySQL description with the verified Django parking application stack and behavior.

**Architecture:** Keep the existing Astro content-collection model. Store the corrected project facts in the ParClick Markdown entry, add any missing badge definitions to the shared technology registry, and protect the facts with the existing Node portfolio validator.

**Tech Stack:** Astro content collections, Markdown frontmatter, TypeScript technology registry, Node.js test runner, pnpm.

**Spec:** `docs/superpowers/specs/2026-07-30-portfolio-evidence-first-redesign-design.md` section 9.9 ParClick; public source repository `https://github.com/Hamdaoui-Ali/ParClick`.

## Global Constraints

- ParClick’s verified stack is Django 5.2, Bootstrap 5, SQLite, QRCode, Pillow, and optional ReportLab.
- Do not describe ParClick as a Java/Spring Boot/Angular/MySQL application.
- Do not claim payment integration, REST/SPA, Docker, or CI as implemented; the source README lists them as roadmap items.
- Preserve the existing Astro project schema and technology-key validation contract.

---

### Task 1: Add a ParClick technology regression contract

**Files:**
- Modify: `scripts/validate-portfolio.test.mjs`

**Interfaces:**
- Consumes: The ParClick Markdown entry through the existing `read()` helper.
- Produces: A failing test that rejects the stale stack and narrative and requires the verified public repository metadata.

- [ ] **Step 1: Write the failing test**

Add a test named `ParClick reflects the verified Django application stack` that requires the exact stack keys `PYTHON`, `DJANGO`, `BOOTSTRAP`, `SQLITE`, `QRCODE`, `PILLOW`, and `REPORTLAB`; requires the public ParClick repository URL; requires Django/Bootstrap/SQLite/QRCode/Pillow/ReportLab wording; and rejects `JAVA`, `SPRING_BOOT`, `ANGULAR`, `MYSQL`, Spring Boot, Angular, and payment integration wording.

- [ ] **Step 2: Run the test to verify it fails**

Run `pnpm test:portfolio`.

Expected: the new ParClick test fails because the current entry still declares Java/Spring Boot/Angular/MySQL and the old payment narrative.

- [ ] **Step 3: Commit the regression test**

Run:

```powershell
git add scripts/validate-portfolio.test.mjs
git commit -m "test: lock ParClick to its verified Django stack"
```

### Task 2: Correct the ParClick project facts and narrative

**Files:**
- Modify: `src/content/projects/parclick-parking.md`

**Interfaces:**
- Consumes: The verified ParClick repository README and the failing contract from Task 1.
- Produces: A public, source-linked project entry describing the Django client/employee workflows, SQLite persistence, QR tickets, time-based pricing, history, and optional PDF output.

- [ ] **Step 1: Replace the inaccurate frontmatter stack and metadata**

Set the repository to `https://github.com/Hamdaoui-Ali/ParClick`, set `visibility: public`, use `role: "Full-Stack Django Developer"`, and set the stack to:

```yaml
stack: ["PYTHON", "DJANGO", "BOOTSTRAP", "SQLITE", "QRCODE", "PILLOW", "REPORTLAB"]
```

- [ ] **Step 2: Rewrite the body to match implemented behavior**

Describe client reservations and history, employee validation and parking-place management, duration/vehicle-based pricing, QR ticket generation, SQLite by default with PostgreSQL as an option, and optional ReportLab PDF/print output. Remove the Spring Boot, Angular, real-time tracking, and payment-integration claims.

- [ ] **Step 3: Run the focused portfolio test**

Run `pnpm test:portfolio`.

Expected: the ParClick content assertions pass, while the validator may still report unknown `QRCODE`, `PILLOW`, and `REPORTLAB` keys until Task 3 registers their badge definitions.

- [ ] **Step 4: Commit the content correction**

Run:

```powershell
git add src/content/projects/parclick-parking.md
git commit -m "fix: correct ParClick project technology facts"
```

### Task 3: Register ParClick’s supporting technology badges

**Files:**
- Modify: `src/data/technologies.ts`

**Interfaces:**
- Consumes: The three supporting keys used by the corrected ParClick frontmatter.
- Produces: Validated display metadata for QRCode, Pillow, and ReportLab on project cards and detail pages.

- [ ] **Step 1: Add the missing technology definitions**

Add `QRCODE`, `PILLOW`, and `REPORTLAB` entries to `TECHNOLOGIES` with human-readable names, stable keys, readable badge classes, and the existing `Backend` category.

- [ ] **Step 2: Run the complete validation suite**

Run `pnpm test:portfolio`, `pnpm check`, `pnpm format:check`, and `pnpm build`.

Expected: every command exits with code 0; no unknown technology-key error remains; Astro check and production build complete successfully.

- [ ] **Step 3: Commit the registry correction**

Run:

```powershell
git add src/data/technologies.ts
git commit -m "feat: register ParClick supporting technologies"
```

### Task 4: Verify the commit series and working tree

- [ ] **Step 1: Inspect the final diff and history**

Run `git status --short`, `git diff HEAD~3..HEAD --check`, and `git log --oneline -4`.

- [ ] **Step 2: Confirm the three focused commits are present**

The latest three commits must be the regression test, ParClick content correction, and technology-registry correction, with no uncommitted changes.
