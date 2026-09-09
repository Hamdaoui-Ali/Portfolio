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

test("homepage features exactly three evidence-led projects", () => {
  const featured = projectFiles.filter((filePath) =>
    /^featured:\s*true\s*$/m.test(frontmatter(filePath)),
  )

  assert.deepEqual(
    featured.map((filePath) => filePath.split(/[\\/]/).at(-1)).sort(),
    [
      "ai-migration-factory.md",
      "bi-adventureworks2022.md",
      "erp-supermarket.md",
    ],
  )
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

test("public metadata matches the current CGI engagement", () => {
  const site = read("src/data/site.ts")
  const experience = read("src/data/experience.ts")

  assert.match(site, /worksFor:\s*"CGI"/)
  assert.match(site, /alihamdaoui000@gmail\.com/)
  assert.match(experience, /Software Engineer — PFE Intern/)
  assert.match(experience, /Mar 2026 — Aug 2026/)
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

test("new projects stay grouped before legacy portfolio entries", () => {
  const expectedSortOrders = {
    jobfinder: 2,
    planops: 3,
    remindly: 4,
    portflow: 5,
    medilink: 6,
    "rifflock-desktop": 7,
    "web-scraping-automation": 8,
    "parclick-parking": 9,
    "7anoutna-ecommerce": 10,
    "it-equipment-repair": 11,
    "personal-portfolio": 12,
    "smart-solutions": 13,
    "odoo-performance-analysis": 14,
  }

  for (const [slug, sortOrder] of Object.entries(expectedSortOrders)) {
    const source = frontmatter(join(projectDirectory, `${slug}.md`))
    assert.match(source, new RegExp(`^sortOrder:\\s*${sortOrder}\\s*$`, "m"))
  }
})

test("homepage exposes a flagship case study and CV action", () => {
  const source = read("src/components/Hero.astro")

  assert.match(source, /\/projects\/ai-migration-factory/)
  assert.match(source, /Hamdaoui_Ali_CV_FR\.pdf/)
  assert.match(source, /download="Hamdaoui_Ali_CV_FR\.pdf"/)
  assert.match(source, /View Migration Factory case study/)
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
