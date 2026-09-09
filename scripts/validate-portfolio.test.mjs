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
  const deadRepositories = [
    "ai-migration-factory",
    "rifflock-desktop",
    "smart-solutions",
  ]

  for (const slug of deadRepositories) {
    const source = read(`src/content/projects/${slug}.md`)
    assert.match(source, /^visibility:\s*private\s*$/m)
    assert.doesNotMatch(source, /github\.com\/Hamdaoui-Ali\//)
  }
})

test("homepage exposes a flagship case study and CV action", () => {
  const source = read("src/components/Hero.astro")

  assert.match(source, /\/projects\/ai-migration-factory/)
  assert.match(source, /cv-ali-hamdaoui/)
  assert.match(source, /View Migration Factory case study/)
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
