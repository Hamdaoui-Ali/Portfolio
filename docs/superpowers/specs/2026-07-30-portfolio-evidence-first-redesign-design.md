# Evidence-First Portfolio Redesign

Date: 30 July 2026  
Status: Approved design  
Owner: Ali Hamdaoui  
Implementation target: Existing Astro 4 and Tailwind CSS 3 portfolio

## 1. Purpose

Redesign Ali Hamdaoui's portfolio from a broad online résumé into an evidence-first engineering portfolio that attracts:

- Engineering recruiters and hiring managers evaluating technical depth, ownership, and delivery readiness.
- Clients and collaborators evaluating business relevance, credibility, and engagement fit.

The site must fascinate without becoming theatrical. Its distinctive idea is evidence: real screenshots, architecture, decision records, validation results, and precise boundaries around estimates, private work, and unfinished work.

## 2. Success criteria

The redesign is successful when:

1. The first viewport communicates Ali's positioning, strongest proof, availability, and two clear conversion paths.
2. All ten approved projects are visible, linkable, and documented as full case studies.
3. Professional information matches the updated résumé.
4. Public repository links work; private or unavailable repositories are labeled instead of linked.
5. English is the default language and every public page has a complete French equivalent.
6. Desktop and 390 px mobile layouts have no clipping, horizontal overflow, or unusable navigation.
7. Keyboard, focus, theme, language, motion, and menu behavior meet the accessibility requirements in this document.
8. Claims are traceable to the updated résumé, a public repository, a visible artifact, or an explicit "estimated," "reported," "prototype," or "in progress" label.
9. The production build passes formatting, content, link, accessibility, responsive browser, and Lighthouse quality gates.

## 3. Source-of-truth hierarchy

When sources disagree, use this order:

1. `CV_Ali_Hamdaoui_FullStack_Overleaf_Updated (1).zip`
2. Public GitHub repository implementation
3. Public GitHub repository README
4. Existing portfolio content

The updated résumé is authoritative for identity, contact details, education, experience titles, dates, locations, and professional responsibilities. Repository implementation is authoritative for project stacks and current behavior.

## 4. Corrected professional identity

Use the following public information:

- Name: Ali Hamdaoui
- Title: Full-Stack Software Engineer
- Location: Rabat, Morocco
- Email: `alihamdaoui000@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/ali-hamdaoui/`
- GitHub: `https://github.com/Hamdaoui-Ali`
- Availability: "Open to full-time roles and available for selected freelance work."

Do not publish an availability date.

Do not show the phone number in the website interface. It may remain in the downloadable résumé.

## 5. Positioning and core copy

### Primary positioning

> I modernize complex systems and build software people can trust.

### Supporting copy

> Full-Stack Software Engineer working across Java/Spring Boot, Angular, data platforms, and agentic migration workflows—with clear decisions, human controls, and evidence.

### Hero actions

1. Primary: "Explore selected work"
2. Secondary: "Download CV"
3. Tertiary text links: LinkedIn and GitHub

The CV action exposes English and French downloads without turning the hero into a button cluster.

### Availability line

> Open to full-time roles · Available for selected freelance work

## 6. Visual direction

The approved direction is **Evidence-first editorial**.

### Visual character

- Clean editorial hierarchy with generous whitespace and restrained surfaces.
- Dark graphite is the signature presentation; light mode uses neutral near-white rather than cream or beige.
- Amber is a controlled action and evidence accent, not a decorative wash.
- Open layouts, full-width bands, evidence rails, diagrams, and compact lists replace repeated card and pill grids.
- Real screenshots and code-native technical diagrams carry more visual weight than decorative illustrations.
- Migration-command-center motifs appear inside relevant evidence artifacts, not across the entire site.

### Color tokens

| Token | Dark | Light | Use |
|---|---|---|---|
| Page background | `#0A0D13` | `#F7F7F5` | Main page |
| Surface | `#11161D` | `#FFFFFF` | Purposeful panels |
| Primary text | `#F3F5F8` | `#171A1F` | Headings and body |
| Muted text | `#929CA9` | `#626B75` | Secondary copy |
| Border | `#2A303B` | `#D7D8D6` | Dividers and frames |
| Amber accent | `#F0B94B` | `#B56C00` | Primary action and evidence |
| Verified | `#72D494` | `#278653` | Verified/completed states |
| Warning/private | `#D3A85C` | `#8B6826` | Estimates, private state |

Semantic colors must pass contrast checks in both themes. Green is reserved for verified or successful states. Red is reserved for actual errors or failed evidence.

### Typography

- Primary family: Onest Variable, already installed.
- Evidence family: system monospace stack for commands, diffs, artifact labels, identifiers, and structured evidence only.
- Headings use tight but readable tracking and large editorial scale.
- Body copy targets a 65–75 character line length.
- Controls receive explicit sizes, weights, line heights, and tracking.
- No browser-default typography remains on buttons, menus, selectors, or form controls.

### Geometry and motion

- Primary container: approximately 72–76rem for editorial sections.
- Reading container: approximately 46–50rem for long-form case-study prose.
- Default radii: 10–16 px; pills only for statuses or compact choices.
- Motion: short opacity/translation reveals and state transitions under 250 ms.
- All motion is removed or reduced under `prefers-reduced-motion`.

## 7. Identity imagery

Remove `public/photo.svg` and all "coming soon" identity language from public pages.

Until Ali supplies a real portrait, use a deliberate `AH` monogram and omit a portrait from the About section. Do not generate a fake likeness. The About layout must remain complete without a photograph.

The social preview image must be a production 1200 × 630 PNG or JPEG, not the current placeholder-like SVG.

## 8. Homepage information architecture

### 8.1 Header

Desktop header:

- `AH` identity mark
- Work
- Experience
- Capabilities
- About
- English/French control
- Light/Dark/System control
- "Let's talk" action

Mobile header:

- `AH` mark
- Current language
- One menu button with at least a 44 × 44 px target
- Theme and contact actions inside the menu

The header may become subtly translucent after scrolling, but it must not use the current fixed rounded pill containing every navigation item.

### 8.2 Hero

The hero contains:

- Approved primary positioning
- Supporting copy
- Primary and secondary actions
- Exact availability line
- Restrained LinkedIn and GitHub links
- A code-native AI Migration Factory workflow artifact showing Analyze, Plan, Transform, Validate, and a human-approval state

The first viewport must show a preview of the proof strip or selected-work section on a typical small laptop.

### 8.3 Proof strip

Use only verified or explicitly qualified proof:

- "2 internally presented and validated MVPs"
- ">80% estimated time gain in the migration ROI study"
- "10 evidence-led case studies across modernization, data, full-stack systems, NLP, and security"

The `>80%` value must always appear with "estimated" and its ROI-study context.

### 8.4 Selected work

Give the strongest first visual weight to:

1. AI Migration Factory
2. AdventureWorks2022 BI Solution
3. MediLink
4. RiffLock

The remaining six projects remain visible in the same homepage work section as concise editorial rows with a clear route to their full case study:

5. ERP Supermarket
6. Web & Scraping Automation
7. Odoo Performance Prototype
8. Twitter Sentiment Analysis
9. ParClick
10. Sentiment Analysis Dashboard

All ten also appear on a dedicated `/projects/` index grouped by domain. The homepage does not render ten equally large cards.

### 8.5 Experience

Replace the current generic timeline with résumé-aligned entries:

1. CGI — Software Engineer, PFE Internship — March 2026 to August 2026 — Sala Al Jadida, Morocco
2. DXC — Data Analyst Intern — July 2025 to September 2025 — Sala Al Jadida, Morocco
3. Yuccainfo — Full-Stack Java/Angular Developer Intern — May 2025 to July 2025 — Remote, Tunisia
4. 2Peerfect — Web & Automation Developer Intern — July 2024 to September 2024 — Rabat, Morocco
5. 3alink — Web Developer Intern — June 2024 to July 2024 — Casablanca, Morocco

Each entry highlights scope and links to its related case study. Do not imply that internships were permanent employment.

### 8.6 Capabilities

Replace the colorful technology-pill wall with four responsibility-based rows:

1. Full-stack systems: Java, Spring Boot, Spring Security, Angular, TypeScript, REST, SQL, testing.
2. Modernization and AI: LangGraph, Azure OpenAI, agent orchestration, static analysis, workflow state, human approvals.
3. Data and BI: SQL Server, SSIS, SSAS, Power BI, DAX, ETL, data modeling.
4. Platform and delivery: Docker, CI/CD, GitHub Actions, Azure, AWS, observability, automated validation.

Each row links to projects that demonstrate the capability.

### 8.7 Education, distinctions, and languages

Use concise verified entries:

- State Engineering Degree in Computer Science, MIAGE option, EMSI Rabat, 2021–2026; final diploma validation in progress.
- Arabic: native.
- French: C1.
- English: B2 professional.

Distinctions remain visible but must include organizer/context:

- First prize — ERC EMSI Robotics Competition — EMSI Rabat
- Second prize — Moroccan Robotics Newbie Contest — ENSET Mohammedia
- Third prize — Moroccan Robotics Challenge — ENIM Rabat

Do not invent dates or verification links that were not supplied.

### 8.8 About and contact

The About section covers:

- Builder mindset
- Interest in modernization, AI, data, and reliable systems
- Working style: autonomy, analysis, technical communication, teamwork, client presentation
- Education and spoken languages

The final contact block asks one clear question and provides:

- Email
- LinkedIn
- GitHub
- CV downloads

No contact form or backend is required.

## 9. Project inventory and evidence requirements

Every project gets a full English and French case study using the template in Section 10.

### 9.1 AI Migration Factory

- Context: CGI PFE internship
- Status: two internally presented and validated MVPs
- Role: principal designer and end-to-end developer
- Correct stack: Java, Spring Boot, Angular, Python, FastAPI, LangGraph, Azure OpenAI, React, Next.js, TypeScript, Pydantic, SQLAlchemy, SQLite, Git, Docker, CI/CD
- Evidence: staged workflow, agent boundaries, backend-authoritative state, approval gates, synthetic diffs, logs, reports, snapshots, rollback controls
- Modernization scope: Angular 18 → 19 → 20 → 21; Java/Spring Boot staged modernization where applicable
- Visibility: private/sanitized
- Outcome language: `>80% estimated time gain` in the ROI study

Do not call the product completed. Do not describe it as a Django/PyTest machine-learning platform.

### 9.2 AdventureWorks2022 BI Solution

- Context: DXC Data Analyst internship
- Stack: SQL Server, SSIS, SSAS, Power BI, DAX, SQL, ETL
- Evidence: star schema, ETL lineage, quality controls, cube design, measures, dashboards, presentation outcome
- Visibility: professional/sanitized

### 9.3 ERP Supermarket

- Context: Yuccainfo internship and team delivery
- Stack: Java, Spring Boot, Angular, TypeScript, MySQL, REST, Git, Postman
- Evidence: product, stock, and sales modules; API contracts; data model; functional validation; team scope
- Visibility: professional/sanitized

The case study must distinguish Ali's contribution from the team's work.

### 9.4 Web & Scraping Automation

- Context: 2Peerfect internship
- Stack: HTML, CSS, JavaScript, Bootstrap, Python, BeautifulSoup, Selenium
- Evidence: responsive interface, extraction flow, sanitized data sample, reliability limitations
- Visibility: professional/sanitized

Do not claim a FastAPI product unless implementation evidence is supplied.

### 9.5 Odoo Performance Prototype

- Context: 3alink internship
- Stack: Odoo, HTML, CSS, JavaScript, Bootstrap
- Evidence: performance observations, identified improvement areas, responsive prototype, before/after rationale
- Visibility: professional/sanitized

Do not describe this as a Flask/PyTest benchmark service.

### 9.6 MediLink

- Context: individual project
- Stack: Java 21, Spring Boot 4, Spring Security, Angular 21, MySQL, Flyway, Testcontainers
- Evidence: patient, doctor, and administrator flows; availability and booking; JWT authentication; role-based access; data model; API boundaries; Testcontainers validation
- Repository visibility: unverified until Ali supplies a working public URL; otherwise label private

### 9.7 RiffLock

- Context: individual Windows desktop project
- Correct stack: Python 3.14, CustomTkinter, SQLite, `cryptography`, `librosa`, PyTest, PyInstaller
- Evidence: threat model, Argon2id key derivation, AES-256-GCM encryption/restoration flow, optional guitar-riff second factor, desktop screens, tests, packaging
- Repository visibility: current link is unusable; remove it or label private

Do not describe this as a Java/Spring Boot/MySQL application.

### 9.8 Twitter Sentiment Analysis

- Public repository: `https://github.com/Hamdaoui-Ali/Twitter-Sentiment-Analysis`
- Stack: Python, Streamlit, scikit-learn, NLTK, pandas, NumPy, `ntscraper`
- Evidence: Sentiment140 dataset, 1.6 million tweets, TF-IDF vectorization, Logistic Regression, 79.9% reported accuracy, preprocessing pipeline, public screenshots
- Current limitations: Twitter/Nitter access can fail; README live-demo and clone URLs are placeholders; no repository test suite was found

Do not publish a live-demo button until a working deployment exists. Escape external tweet content before any unsafe HTML rendering is presented as production-ready.

### 9.9 ParClick

- Public repository: `https://github.com/Hamdaoui-Ali/ParClick`
- Correct stack: Django 5.2, Bootstrap 5, SQLite, QRCode, Pillow, optional ReportLab
- Evidence: client and employee workflows, reservations, time-based pricing, QR tickets, history, validation, public screenshots, model design
- Current limitations: separate Client and Employee models, no transactional double-booking guard, no repository test suite, payment and CI remain roadmap items

The current Java/Spring Boot/Angular project entry must be replaced.

### 9.10 Sentiment Analysis Dashboard

- Public repository: `https://github.com/Hamdaoui-Ali/Sentiment-Analysis`
- Stack: React 19, Material UI, Chakra UI, FastAPI, Hugging Face Transformers/BERT, VADER, TextBlob, scikit-learn, pandas, NumPy, PRAW, YouTube API, Plotly
- Evidence: multi-model comparison, word cloud, Reddit/YouTube ingestion, trend charts, Ridge/polynomial forecast path, public screenshots, API endpoints
- Current limitations: no repository test suite was found; CORS currently allows every origin; API credentials are required for live sources; README performance numbers are not independently measured

Do not repeat unverified performance claims as portfolio outcomes.

### 9.11 Existing entries outside the approved inventory

Keep source content recoverable, but do not publicly list these existing entries until equivalent evidence is supplied:

- 7anoutna E-commerce
- IT Equipment Repair & Tracking
- Personal Portfolio
- Smart Solutions

Implement this with an explicit unpublished/draft state rather than deleting user content.

The existing ParClick entry is not draft; it is rewritten to match the public Django repository.

## 10. Case-study page template

Every project page answers these questions in order:

1. What was the problem and why did it matter?
2. What was Ali's role and exact scope?
3. What constraints existed?
4. What architecture or workflow was chosen?
5. What decisions and trade-offs mattered?
6. What did Ali implement personally?
7. How was it tested or validated?
8. What changed as a result?
9. What remains incomplete, private, or unverified?
10. What was learned?

### Facts panel

Every page includes:

- Role
- Context or team
- Duration or year when verified
- Status
- Stack
- Repository visibility
- Demo/deployment state
- Evidence type

### Evidence gallery

Evidence is domain-specific:

- Architecture and data-flow diagrams
- Real or sanitized product screenshots
- Before/after views
- Synthetic diffs and logs
- Data models and schemas
- Test results
- Dashboards and reports
- Threat models
- Explicit limitation notes

Screenshots from Ali's public repositories may be downloaded into the portfolio source and optimized locally. Do not hotlink GitHub user-attachment assets in production.

### Navigation

Each case study includes:

- Back to all projects
- Previous/next project
- Related capabilities
- Public repository action, or a non-clickable private-repository state
- English/French route counterpart

## 11. English/French architecture

### Routes

- English homepage: `/`
- French homepage: `/fr/`
- English project index: `/projects/`
- French project index: `/fr/projects/`
- English case study: `/projects/[slug]/`
- French case study: `/fr/projects/[slug]/`

English remains the default and is not prefixed.

### Content model

Use:

- `src/data/project-facts.ts` for canonical non-translated facts and links.
- `src/content/case-studies/en/*.md` for English narratives.
- `src/content/case-studies/fr/*.md` for French narratives.
- `src/i18n/ui.ts` for navigation, controls, status strings, metadata templates, and shared interface copy.

Each localized case study declares a stable `projectId` matching `project-facts.ts`.

Build-time validation must fail when:

- A published project lacks either locale.
- Project IDs are duplicated or unknown.
- A published public-repository state lacks a valid URL.
- A localized route has no valid title, summary, or SEO description.

The language switch preserves the current route.

### SEO

Every page includes:

- Unique localized title and description
- Canonical URL
- English/French `hreflang` alternates
- Localized Open Graph fields
- Production social image
- Breadcrumb structured data
- Person schema with corrected professional data
- Project/CreativeWork schema with status and repository visibility represented truthfully

## 12. Component architecture

Keep components small and responsibility-focused.

### Global shell

- `SiteHeader`
- `MobileMenu`
- `LanguageSwitcher`
- `ThemeSwitcher`
- `SiteFooter`
- `SkipLink`

### Homepage

- `Hero`
- `MigrationEvidenceArtifact`
- `ProofStrip`
- `SelectedProjects`
- `ProjectArchiveRows`
- `ExperienceTimeline`
- `CapabilityRows`
- `EducationAndAwards`
- `About`
- `ContactCTA`

### Project surfaces

- `ProjectIndex`
- `ProjectHero`
- `ProjectFacts`
- `ProjectEvidenceGallery`
- `ArchitectureDiagram`
- `DecisionList`
- `ValidationPanel`
- `LimitationsPanel`
- `ProjectNavigation`

### Shared primitives

- `ButtonLink`
- `InlineLink`
- `StatusLabel`
- `EvidenceFrame`
- `SectionHeading`
- `LocaleLink`
- `Icon`

The main page and route files compose these components; they do not contain large one-off markup blocks.

## 13. Data flow

1. `project-facts.ts` supplies canonical stack, role, status, dates, visibility, links, and evidence metadata.
2. The route determines locale.
3. The route loads the matching localized case-study content by `projectId`.
4. Shared UI strings come from `ui.ts`.
5. Reusable components receive the merged canonical and localized model.
6. Metadata generation uses the same merged model.
7. Build validation checks locale parity, visibility rules, URLs, and required metadata before output.

No client-side data fetching is required for portfolio content.

## 14. Interaction behavior

### Header and mobile menu

- Menu button uses `aria-expanded` and `aria-controls`.
- Escape closes the menu.
- Focus moves into the opened menu and returns to the trigger on close.
- Background scrolling is disabled while the mobile drawer is open.
- Navigation never produces horizontal page overflow.

### Theme

- Options: Light, Dark, System.
- Use radio-group or menuitem-radio semantics with `aria-checked`.
- Arrow keys move between options.
- The active choice is announced.
- The theme survives page navigation and storage failures without breaking rendering.

### Language

- English and French choices are explicit.
- The switch preserves the equivalent page and anchor where practical.
- The current language is announced.

### Project index

- Projects are grouped by domain rather than hidden behind mandatory filtering.
- Optional client-side filtering may be added only if it remains keyboard accessible and every project is visible without JavaScript.

## 15. Error and edge-state handling

- Broken public repository URLs: fail validation or render a private/unavailable state; never render a dead Code link.
- Placeholder live-demo URLs: omit the action.
- Missing project image: render a project-specific code-native evidence artifact; never render a generic placeholder.
- Image loading: reserve aspect ratios, provide descriptive alt text, and use Astro image optimization.
- Missing locale: fail the build for published content.
- Invalid project slug: render a real 404 page, not a redirect to the homepage.
- Storage unavailable: theme defaults to System without console errors.
- JavaScript unavailable: core content, locale routes, project navigation, email, and repository links still work.
- Motion reduction: content remains immediately visible.
- External API credentials: project case studies explain the dependency; the portfolio itself does not require those APIs.

## 16. Accessibility requirements

- One logical `h1` per page and ordered heading levels.
- Skip link visible on focus.
- Full keyboard operation.
- Visible `focus-visible` styling in light and dark modes.
- At least 44 × 44 px targets for icon-only and mobile navigation controls.
- No information conveyed by color alone.
- Text and controls meet WCAG AA contrast.
- Descriptive alternative text for screenshots and diagrams.
- Decorative graphics are hidden from assistive technology.
- Reduced-motion support for reveal, hover, scroll, and menu transitions.
- Menu, theme, language, status, and current-page states have correct semantics.

## 17. Performance and asset pipeline

- Store project images under `src/assets/projects/`.
- Render them through Astro's image pipeline with explicit dimensions and stable aspect ratios.
- Use AVIF/WebP where supported and retain appropriate fallbacks.
- Lazy-load below-the-fold images.
- Keep hero assets small enough for the first viewport budget.
- Do not hotlink portfolio-critical media.
- Avoid shipping heavyweight client-side frameworks for static content.
- Retain Vercel Speed Insights.

## 18. CV deliverables

Create two downloadable PDFs from the updated résumé facts:

- `/cv/ali-hamdaoui-full-stack-en.pdf`
- `/cv/ali-hamdaoui-full-stack-fr.pdf`

The French version follows the supplied LaTeX source. The English version is a faithful translation using the same facts and claim qualifiers.

Both files must:

- Use the same current contact details.
- Preserve internship labels.
- Preserve "estimated" around the migration ROI result.
- Avoid unsupported project claims.
- Download with clear filenames.

## 19. Verification strategy

### Static and content checks

- `pnpm format:check`
- `pnpm check`
- `pnpm build`
- Locale parity validation
- Project link and asset validation

### Browser tests

Add Playwright coverage for:

1. English homepage loads with correct title and H1.
2. French homepage and project routes render fully translated UI.
3. Language switching preserves the page.
4. Desktop navigation works.
5. Mobile menu opens, traps focus, closes with Escape, and restores focus.
6. Theme choices update state and semantics.
7. All ten project routes render in both locales: twenty localized case-study routes.
8. Public repository actions point to the approved working URLs.
9. Private projects expose no broken Code action.
10. CV files return successfully.
11. There is no horizontal overflow at 390 px.
12. Reduced-motion mode suppresses nonessential animation.

### Accessibility checks

Run automated axe checks on:

- English and French homepages
- Project index
- One private/sanitized case study
- One public-repository case study
- Mobile menu open state

Perform manual keyboard and screen-reader-semantic checks for header, theme, language, and project navigation.

### Visual checks

Capture and review:

- 1440 × 1000 desktop homepage
- 390 × 844 mobile homepage
- Desktop and mobile case study
- Light and dark themes
- English and French versions

The accepted evidence-first concept and latest browser screenshots must be inspected side by side before handoff.

### Lighthouse budgets

Targets on production output:

- Performance: 95 or higher
- Accessibility: 95 or higher
- SEO: 95 or higher
- Best Practices: 90 or higher

## 20. CI quality gates

Expand the GitHub Actions workflow to run:

1. Frozen dependency install
2. Formatting check
3. Astro/type check
4. Content and locale validation
5. Production build
6. Internal/external link validation
7. Playwright desktop/mobile smoke tests
8. Axe accessibility tests
9. Lighthouse CI against production output
10. Appropriate dependency/security audit

Do not claim CI runs a check until the workflow actually runs it.

## 21. Scope boundaries

Included:

- Evidence-first visual redesign
- Corrected professional content
- Ten English/French full case studies
- English/French routing
- CV downloads
- Responsive navigation
- Theme semantics
- SEO and social assets
- Automated quality gates

Excluded from this redesign:

- Astro major-version upgrade
- Tailwind major-version upgrade
- CMS
- Contact form backend
- Authentication
- New deployments for the showcased projects
- Production hardening of the showcased project repositories
- Invented project metrics, award dates, or private client details

Astro and Tailwind upgrades remain a separate tested engineering change after the redesign is stable.

## 22. Implementation sequence

The implementation plan must stage the work in this order:

1. Canonical facts, content schema, and locale validation
2. English and French UI shell
3. Design tokens and shared primitives
4. Header, mobile menu, theme, and language behavior
5. Homepage in evidence-first slices
6. Project index and reusable case-study template
7. Ten localized project case studies
8. Image and evidence assets
9. CV files, metadata, structured data, and social previews
10. Automated tests and CI gates
11. Browser, accessibility, visual-fidelity, and copy-diff verification

Each stage must keep the site buildable and must be verified before the next major surface is added.
