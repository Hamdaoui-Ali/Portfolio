export const DISCIPLINE_FILTERS = [
  { value: "all", label: "All Work" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "backend-apis", label: "Backend & APIs" },
  { value: "data-analytics", label: "Data & Analytics" },
  { value: "automation-ai", label: "Automation & AI" },
  { value: "security-desktop", label: "Security & Desktop" },
]

export const TECHNOLOGY_FILTERS = [
  { value: "all", label: "All Technologies", keys: [] },
  {
    value: "java",
    label: "Java / Spring Boot",
    keys: ["JAVA", "SPRING_BOOT"],
  },
  { value: "python", label: "Python", keys: ["PYTHON"] },
  { value: "php", label: "PHP / Laravel", keys: ["PHP", "LARAVEL"] },
  {
    value: "typescript-react",
    label: "TypeScript / React",
    keys: ["TYPESCRIPT", "REACT", "NEXT_JS"],
  },
  { value: "angular", label: "Angular", keys: ["ANGULAR"] },
  {
    value: "sql-bi",
    label: "SQL / BI",
    keys: [
      "SQL_SERVER",
      "SSIS",
      "SSAS",
      "POWER_BI",
      "POSTGRESQL",
      "MYSQL",
      "SQLITE",
      "DUCKDB",
      "DBT",
    ],
  },
]

const disciplineValues = new Set(
  DISCIPLINE_FILTERS.map((filter) => filter.value),
)
const technologyValues = new Set(
  TECHNOLOGY_FILTERS.map((filter) => filter.value),
)

export function normalizeFilterState(input = {}) {
  return {
    discipline: disciplineValues.has(input.discipline)
      ? input.discipline
      : "all",
    technology: technologyValues.has(input.technology)
      ? input.technology
      : "all",
  }
}

export function filterProjects(projects, inputState) {
  const state = normalizeFilterState(inputState)
  const technology = TECHNOLOGY_FILTERS.find(
    (filter) => filter.value === state.technology,
  )

  return projects.filter((project) => {
    const matchesDiscipline =
      state.discipline === "all" ||
      project.disciplines.includes(state.discipline)
    const matchesTechnology =
      state.technology === "all" ||
      technology.keys.some((key) => project.stack.includes(key))

    return matchesDiscipline && matchesTechnology
  })
}

export function selectVisibleProjects(projects, inputState, showAll = false) {
  const state = normalizeFilterState(inputState)
  const filtered = filterProjects(projects, state)
  const hasActiveFilter =
    state.discipline !== "all" || state.technology !== "all"

  if (hasActiveFilter || showAll) return filtered

  return filtered.filter((project) => project.featured)
}

export function parseFilterSearch(search = "") {
  const params = new URLSearchParams(search)

  return normalizeFilterState({
    discipline: params.get("discipline") ?? "all",
    technology: params.get("technology") ?? "all",
  })
}

export function buildFilterSearch(search = "", inputState = {}) {
  const params = new URLSearchParams(search)
  const state = normalizeFilterState(inputState)

  if (state.discipline === "all") params.delete("discipline")
  else params.set("discipline", state.discipline)

  if (state.technology === "all") params.delete("technology")
  else params.set("technology", state.technology)

  const query = params.toString()
  return query ? `?${query}` : ""
}
