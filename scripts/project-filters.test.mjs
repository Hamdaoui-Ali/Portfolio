import assert from "node:assert/strict"
import test from "node:test"

import {
  buildFilterSearch,
  filterProjects,
  normalizeFilterState,
  parseFilterSearch,
  selectVisibleProjects,
} from "../src/data/project-filters.mjs"

const projects = [
  {
    slug: "jobfinder",
    featured: true,
    disciplines: ["full-stack", "backend-apis", "automation-ai"],
    stack: ["PYTHON", "FASTAPI", "REACT", "TYPESCRIPT"],
  },
  {
    slug: "medilink",
    featured: true,
    disciplines: ["full-stack", "backend-apis"],
    stack: ["JAVA", "SPRING_BOOT", "ANGULAR", "TYPESCRIPT"],
  },
  {
    slug: "erp-supermarket",
    featured: false,
    disciplines: ["full-stack", "backend-apis"],
    stack: ["JAVA", "SPRING_BOOT", "ANGULAR", "MYSQL"],
  },
  {
    slug: "portflow",
    featured: true,
    disciplines: ["data-analytics"],
    stack: ["PYTHON", "POSTGRESQL", "DUCKDB", "DBT"],
  },
  {
    slug: "rifflock-desktop",
    featured: true,
    disciplines: ["security-desktop"],
    stack: ["PYTHON", "CRYPTOGRAPHY"],
  },
]

test("combines discipline and technology with AND semantics", () => {
  const visible = filterProjects(projects, {
    discipline: "full-stack",
    technology: "java",
  })

  assert.deepEqual(
    visible.map((project) => project.slug),
    ["medilink", "erp-supermarket"],
  )
})

test("technology families match every technology key in the family", () => {
  const visible = filterProjects(projects, {
    discipline: "all",
    technology: "python",
  })

  assert.deepEqual(
    visible.map((project) => project.slug),
    ["jobfinder", "portflow", "rifflock-desktop"],
  )
})

test("default view selects only flagship projects while show-all keeps every project", () => {
  const state = { discipline: "all", technology: "all" }

  assert.deepEqual(
    selectVisibleProjects(projects, state, false).map(
      (project) => project.slug,
    ),
    ["jobfinder", "medilink", "portflow", "rifflock-desktop"],
  )
  assert.equal(selectVisibleProjects(projects, state, true).length, 5)
})

test("invalid URL filters fall back to the default state", () => {
  assert.deepEqual(
    normalizeFilterState({ discipline: "mobile", technology: "cobol" }),
    { discipline: "all", technology: "all" },
  )
  assert.deepEqual(parseFilterSearch("?discipline=unknown&technology=python"), {
    discipline: "all",
    technology: "python",
  })
})

test("shareable filter URLs preserve unrelated query parameters", () => {
  assert.equal(
    buildFilterSearch("?ref=linkedin&discipline=full-stack", {
      discipline: "data-analytics",
      technology: "python",
    }),
    "?ref=linkedin&discipline=data-analytics&technology=python",
  )

  assert.equal(
    buildFilterSearch("?ref=linkedin&technology=python", {
      discipline: "all",
      technology: "all",
    }),
    "?ref=linkedin",
  )
})
