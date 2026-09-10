import { existsSync, readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"
import assert from "node:assert/strict"

const root = process.cwd()
const projectDirectory = join(root, "src", "content", "projects")
const projectFiles = readdirSync(projectDirectory)
  .filter((file) => file.endsWith(".md"))
  .map((file) => join(projectDirectory, file))

const read = (relativePath) => readFileSync(join(root, relativePath), "utf8")

const frontmatter = (filePath) => {
  const source = readFileSync(filePath, "utf8")
  const match = source.match(/^---\n([\s\S]*?)\n---/)
  assert.ok(match, `${filePath} must have frontmatter`)
  return match[1]
}

test("homepage features the six diverse verified flagship projects", () => {
  const featured = projectFiles.filter((filePath) =>
    /^featured:\s*true\s*$/m.test(frontmatter(filePath)),
  )

  assert.deepEqual(
    featured.map((filePath) => filePath.split(/[\\/]/).at(-1)).sort(),
    [
      "jobfinder.md",
      "medilink.md",
      "planops.md",
      "portflow.md",
      "remindly.md",
      "rifflock-desktop.md",
    ],
  )
})

test("every project declares at least one supported engineering discipline", () => {
  const supportedDisciplines = new Set([
    "full-stack",
    "backend-apis",
    "data-analytics",
    "automation-ai",
    "security-desktop",
  ])

  for (const filePath of projectFiles) {
    const source = frontmatter(filePath)
    const match = source.match(/^disciplines:\s*\[([^\]]+)]\s*$/m)
    assert.ok(match, `${filePath} must declare inline disciplines`)

    const disciplines = match[1]
      .split(",")
      .map((value) => value.trim().replaceAll('"', ""))

    assert.ok(disciplines.length > 0, `${filePath} needs a discipline`)
    disciplines.forEach((discipline) =>
      assert.ok(
        supportedDisciplines.has(discipline),
        `${filePath} uses unsupported discipline ${discipline}`,
      ),
    )
  }
})

test("representative recruiter filters have the expected project evidence", () => {
  const projectHasDiscipline = (slug, discipline) => {
    const source = frontmatter(join(projectDirectory, `${slug}.md`))
    assert.match(source, new RegExp(`^disciplines:.*"${discipline}".*$`, "m"))
  }

  for (const slug of ["medilink", "erp-supermarket", "parclick-parking"]) {
    projectHasDiscipline(slug, "full-stack")
  }

  for (const slug of ["portflow", "bi-adventureworks2022"]) {
    projectHasDiscipline(slug, "data-analytics")
  }

  projectHasDiscipline("rifflock-desktop", "security-desktop")
})

test("Migration Factory reflects its current agentic MVP", () => {
  const source = read("src/content/projects/ai-migration-factory.md")

  assert.match(source, /^status:\s*in-progress\s*$/m)
  assert.match(source, /FastAPI/)
  assert.match(source, /LangGraph/)
  assert.match(source, /Azure OpenAI/)
  assert.match(source, /Angular 18/)
  assert.match(source, /estimated/i)
})

test("public metadata leads with Software Engineer while preserving CGI history", () => {
  const site = read("src/data/site.ts")
  const experience = read("src/data/experience.ts")

  assert.match(site, /jobTitle:\s*"Software Engineer"/)
  assert.doesNotMatch(site, /worksFor:\s*"CGI"/)
  assert.match(site, /alihamdaoui000@gmail\.com/)
  const cgiEntry = experience.match(
    /\{\s*date:\s*"Mar 2026 — Aug 2026"[\s\S]*?company:\s*"CGI"[\s\S]*?\n\s*\},/,
  )
  assert.ok(cgiEntry, "CGI experience entry must remain present")
  assert.match(cgiEntry[0], /title:\s*"Software Engineer — PFE Intern"/)
  assert.match(cgiEntry[0], /current:\s*false/)
})

test("dead repositories are represented as private, not public code links", () => {
  const deadRepositories = ["ai-migration-factory", "smart-solutions"]

  for (const slug of deadRepositories) {
    const source = read(`src/content/projects/${slug}.md`)
    assert.match(source, /^visibility:\s*private\s*$/m)
    assert.doesNotMatch(source, /github\.com\/Hamdaoui-Ali\//)
  }
})

test("new flagship projects link to their verified public GitHub repositories", () => {
  const verifiedRepositories = {
    jobfinder: "https://github.com/Hamdaoui-Ali/JobFinder",
    planops: "https://github.com/Hamdaoui-Ali/PlanOps",
    remindly: "https://github.com/Hamdaoui-Ali/Remindly",
    portflow: "https://github.com/Hamdaoui-Ali/PortFlow",
    medilink: "https://github.com/Hamdaoui-Ali/MediLink",
    "rifflock-desktop": "https://github.com/Hamdaoui-Ali/RiffLock",
  }

  for (const [slug, githubUrl] of Object.entries(verifiedRepositories)) {
    const filePath = join(projectDirectory, `${slug}.md`)
    assert.ok(existsSync(filePath), `${slug} project entry must exist`)

    const source = frontmatter(filePath)
    const escapedUrl = githubUrl.replaceAll(".", "\\.")
    assert.match(source, new RegExp(`^github:\\s*"${escapedUrl}"$`, "m"))
    assert.match(source, /^visibility:\s*public\s*$/m)
  }
})

test("RiffLock describes the current Python security product", () => {
  const source = read("src/content/projects/rifflock-desktop.md")

  assert.match(source, /Cybersecurity · Desktop · Python/)
  assert.match(source, /Python 3\.14/)
  assert.match(source, /Argon2/)
  assert.match(source, /guitar-riff/i)
  assert.doesNotMatch(source, /JAVA/)
})

test("projects use the approved recruiter-first portfolio order", () => {
  const expectedSortOrders = {
    jobfinder: 1,
    planops: 2,
    remindly: 3,
    portflow: 4,
    medilink: 5,
    "rifflock-desktop": 6,
    "ai-migration-factory": 7,
    "erp-supermarket": 8,
    "bi-adventureworks2022": 9,
    "web-scraping-automation": 10,
    "parclick-parking": 11,
    "7anoutna-ecommerce": 12,
    "it-equipment-repair": 13,
    "personal-portfolio": 14,
    "smart-solutions": 15,
    "odoo-performance-analysis": 16,
  }

  for (const [slug, sortOrder] of Object.entries(expectedSortOrders)) {
    const source = frontmatter(join(projectDirectory, `${slug}.md`))
    assert.match(source, new RegExp(`^sortOrder:\\s*${sortOrder}\\s*$`, "m"))
  }
})

test("homepage hero leads with broad Software Engineer positioning", () => {
  const source = read("src/components/Hero.astro")

  assert.match(source, /Software Engineer/)
  assert.match(source, /Explore selected work/)
  assert.match(source, /Hamdaoui_Ali_CV_FR\.pdf/)
  assert.match(source, /download="Hamdaoui_Ali_CV_FR\.pdf"/)
  assert.doesNotMatch(source, /Migration Factory case study/)
  assert.doesNotMatch(source, /Current focus/)
})

test("homepage CV action points to a real PDF asset", () => {
  const source = read("src/components/Hero.astro")
  const pdfPath = join(root, "public", "Hamdaoui_Ali_CV_FR.pdf")

  assert.match(source, /href="\/Hamdaoui_Ali_CV_FR\.pdf"/)
  assert.ok(existsSync(pdfPath), "the supplied CV PDF must exist in public")

  const signature = readFileSync(pdfPath).subarray(0, 5)
  assert.deepEqual([...signature], [0x25, 0x50, 0x44, 0x46, 0x2d])
})

test("homepage badge communicates Ali's professional identity", () => {
  const source = read("src/components/Hero.astro")

  assert.match(source, /Engineer · Builder · Innovator/)
  assert.doesNotMatch(source, /CGI PFE · Mar–Aug 2026/)
})

test("homepage profile images resolve to valid JPEG assets", () => {
  const site = read("src/data/site.ts")
  const imagePaths = [
    "/images/ali-hamdaoui-formal.jpeg",
    "/images/ali-hamdaoui-conference.jpeg",
  ]

  for (const imagePath of imagePaths) {
    assert.match(site, new RegExp(`"${imagePath}"`))

    const publicPath = join(root, "public", imagePath.slice(1))
    assert.ok(existsSync(publicPath), `${imagePath} must exist in public`)

    const signature = readFileSync(publicPath).subarray(0, 3)
    assert.deepEqual([...signature], [0xff, 0xd8, 0xff])
  }
})

test("interactive controls expose responsive and radio-menu semantics", () => {
  const header = read("src/components/Header.astro")
  const theme = read("src/components/ThemeToggle.astro")

  assert.match(header, /mobile-menu-button/)
  assert.match(header, /aria-expanded/)
  assert.match(header, /Escape/)
  assert.match(theme, /menuitemradio/)
  assert.match(theme, /aria-checked/)
})

test("project explorer wires accessible filters to shareable URL state", () => {
  const projects = read("src/components/Projects.astro")

  assert.match(projects, /id="project-explorer"/)
  assert.match(projects, /data-filter-kind="discipline"/)
  assert.match(projects, /data-filter-kind="technology"/)
  assert.match(projects, /aria-pressed=/)
  assert.match(projects, /aria-live="polite"/)
  assert.match(projects, /history\.replaceState/)
  assert.match(
    projects,
    /matchMedia\([\s\S]*?"\(prefers-reduced-motion: reduce\)"/,
  )
  assert.match(projects, /Show all projects/)
  assert.match(projects, /View case study/)
})

test("project explorer hidden state overrides card and button display utilities", () => {
  const projects = read("src/components/Projects.astro")

  assert.match(projects, /data-project-controls\s+hidden/)
  assert.match(projects, /control\.hidden = false/)
  assert.match(projects, /\[data-project-controls\]\[hidden\]/)
  assert.match(projects, /\[data-project-card\]\[hidden\]/)
  assert.match(projects, /\[data-show-all-projects\]\[hidden\]/)
  assert.match(projects, /display:\s*none\s*!important/)
})

test("homepage puts project and capability proof before experience", () => {
  const homepage = read("src/pages/index.astro")
  const projectsIndex = homepage.indexOf('id="projects"')
  const capabilitiesIndex = homepage.indexOf('id="capabilities"')
  const experienceIndex = homepage.indexOf('id="experience"')

  assert.ok(projectsIndex > -1, "projects section must exist")
  assert.ok(capabilitiesIndex > projectsIndex, "capabilities follow projects")
  assert.ok(experienceIndex > capabilitiesIndex, "experience follows proof")
  assert.doesNotMatch(homepage, /MigrationPipeline/)
  assert.doesNotMatch(homepage, /id="modernization"/)
})

test("capability stories connect engineering strengths to project evidence", () => {
  const capabilities = read("src/components/EngineeringCapabilities.astro")

  for (const heading of [
    "Product Engineering",
    "Backend & APIs",
    "Data Platforms & Analytics",
    "Automation & AI",
    "Security & Desktop",
  ]) {
    assert.match(capabilities, new RegExp(heading))
  }

  for (const slug of [
    "jobfinder",
    "planops",
    "remindly",
    "portflow",
    "medilink",
    "rifflock-desktop",
  ]) {
    assert.match(capabilities, new RegExp(`slug:\\s*"${slug}"`))
  }
})
