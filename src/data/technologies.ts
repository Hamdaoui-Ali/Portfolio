export type TechCategory =
  | "Backend"
  | "Frontend"
  | "Data & BI"
  | "Automation"
  | "DevOps"
  | "AI"
  | "Testing"
  | "Full-Stack"

export interface Technology {
  key: string
  name: string
  class: string
  category: TechCategory
}

export const TECHNOLOGIES: Record<string, Technology> = {
  // ── Backend ────────────────────────────────────────────
  JAVA: {
    key: "JAVA",
    name: "Java",
    class: "bg-[#ED8B00] text-white",
    category: "Backend",
  },
  SPRING_BOOT: {
    key: "SPRING_BOOT",
    name: "Spring Boot",
    class: "bg-[#6DB33F] text-white",
    category: "Backend",
  },
  MYSQL: {
    key: "MYSQL",
    name: "MySQL",
    class: "bg-[#4479A1] text-white",
    category: "Backend",
  },
  SQL_SERVER: {
    key: "SQL_SERVER",
    name: "SQL Server",
    class: "bg-[#CC2927] text-white",
    category: "Backend",
  },
  DJANGO: {
    key: "DJANGO",
    name: "Django",
    class: "bg-[#092E20] text-white",
    category: "Backend",
  },
  FLASK: {
    key: "FLASK",
    name: "Flask",
    class: "bg-gray-700 text-white",
    category: "Backend",
  },
  FASTAPI: {
    key: "FASTAPI",
    name: "FastAPI",
    class: "bg-[#009688] text-white",
    category: "Backend",
  },

  // ── Frontend ───────────────────────────────────────────
  ANGULAR: {
    key: "ANGULAR",
    name: "Angular",
    class: "bg-[#DD0031] text-white",
    category: "Frontend",
  },
  NEXT: {
    key: "NEXT",
    name: "Next.js",
    class: "bg-black text-white",
    category: "Frontend",
  },
  ASTRO: {
    key: "ASTRO",
    name: "Astro",
    class: "bg-[#FF5D01] text-white",
    category: "Frontend",
  },
  TAILWIND: {
    key: "TAILWIND",
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    category: "Frontend",
  },
  TYPESCRIPT: {
    key: "TYPESCRIPT",
    name: "TypeScript",
    class: "bg-[#3178C6] text-white",
    category: "Frontend",
  },

  // ── Data & BI ──────────────────────────────────────────
  SSIS: {
    key: "SSIS",
    name: "SSIS",
    class: "bg-[#7FBA00] text-white",
    category: "Data & BI",
  },
  SSAS: {
    key: "SSAS",
    name: "SSAS",
    class: "bg-[#68217A] text-white",
    category: "Data & BI",
  },
  POWER_BI: {
    key: "POWER_BI",
    name: "Power BI",
    class: "bg-[#F2C811] text-black",
    category: "Data & BI",
  },

  // ── Automation ─────────────────────────────────────────
  SELENIUM: {
    key: "SELENIUM",
    name: "Selenium",
    class: "bg-[#43B02A] text-white",
    category: "Automation",
  },
  PYTHON: {
    key: "PYTHON",
    name: "Python",
    class: "bg-[#3776AB] text-white",
    category: "Automation",
  },

  // ── Testing ────────────────────────────────────────────
  PYTEST: {
    key: "PYTEST",
    name: "PyTest",
    class: "bg-[#0A9EDC] text-white",
    category: "Testing",
  },
  JUNIT: {
    key: "JUNIT",
    name: "JUnit",
    class: "bg-[#25A162] text-white",
    category: "Testing",
  },
  POSTMAN: {
    key: "POSTMAN",
    name: "Postman",
    class: "bg-[#FF6C37] text-white",
    category: "Testing",
  },

  // ── DevOps ─────────────────────────────────────────────
  DOCKER: {
    key: "DOCKER",
    name: "Docker",
    class: "bg-[#2496ED] text-white",
    category: "DevOps",
  },
  KUBERNETES: {
    key: "KUBERNETES",
    name: "Kubernetes",
    class: "bg-[#326CE5] text-white",
    category: "DevOps",
  },
  AZURE: {
    key: "AZURE",
    name: "Azure",
    class: "bg-[#0078D4] text-white",
    category: "DevOps",
  },
  AWS: {
    key: "AWS",
    name: "AWS",
    class: "bg-[#FF9900] text-black",
    category: "DevOps",
  },
  GITHUB_ACTIONS: {
    key: "GITHUB_ACTIONS",
    name: "GitHub Actions",
    class: "bg-[#2088FF] text-white",
    category: "DevOps",
  },
  VERCEL: {
    key: "VERCEL",
    name: "Vercel",
    class: "bg-black text-white",
    category: "DevOps",
  },
}

export function getTechnology(key: string): Technology | undefined {
  return TECHNOLOGIES[key]
}

export function validateProjectTags(
  projects: { title: string; tags: string[] }[]
): void {
  const allKeys = Object.keys(TECHNOLOGIES)
  let hasErrors = false

  for (const project of projects) {
    for (const tag of project.tags) {
      if (!TECHNOLOGIES[tag]) {
        console.error(
          `[technologies] Unknown technology key "${tag}" in project "${project.title}". ` +
            `Valid keys: ${allKeys.join(", ")}`
        )
        hasErrors = true
      }
    }
  }

  if (hasErrors) {
    throw new Error(
      "Invalid technology keys found in project data. See errors above for details."
    )
  }
}
