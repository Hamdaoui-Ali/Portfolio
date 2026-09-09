export interface ExperienceEntry {
  date: string
  title: string
  company: string
  description: string
  link?: string
  current?: boolean
}

const experience: ExperienceEntry[] = [
  {
    date: "Mar 2026 — Aug 2026",
    title: "Software Engineer — PFE Intern",
    company: "CGI",
    description:
      "Lead developer for two internally validated AI Migration Factory MVPs. Built agent-orchestrated workflows, backend services, tracking UI, validation gates, reporting, and DevOps integration for incremental Java/Spring Boot and Angular modernization.",
    link: "https://www.cgi.com",
    current: false,
  },
  {
    date: "Jul 2025 — Sep 2025",
    title: "Data Analyst — Intern",
    company: "Sofrecom Services Maroc",
    description:
      "Designed and delivered an AdventureWorks2022 decision-support solution with a star-schema warehouse, SSIS ETL flows, an SSAS cube, DAX measures, and Power BI dashboards.",
  },
  {
    date: "May 2025 — Jul 2025",
    title: "Full-Stack Java/Angular Developer — Intern",
    company: "Yuccainfo",
    description:
      "Contributed to a supermarket ERP by developing Spring Boot REST APIs, Angular interfaces, product, inventory, and sales modules, with MySQL persistence and Postman validation.",
  },
  {
    date: "Jul 2024 — Sep 2024",
    title: "Web Developer & Automation Intern",
    company: "2Peerfect",
    description:
      "Analyzed an existing website, built responsive interactive interfaces, and introduced web-scraping automation to extract and structure data.",
  },
  {
    date: "Jun 2024 — Jul 2024",
    title: "Web Developer Intern",
    company: "3alink",
    description:
      "Analyzed Odoo performance constraints and built a responsive prototype focused on the identified improvement areas.",
  },
]

export default experience
