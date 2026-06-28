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
    date: "Jan 2025 — Present",
    title: "Software Engineer",
    company: "CGI",
    description:
      "Developing and maintaining enterprise-scale applications for global clients. Working across the full stack with Java, Spring Boot, Angular, SQL Server, and cloud technologies to deliver high-quality, scalable solutions.",
    link: "https://www.cgi.com",
    current: true,
  },
  {
    date: "2023 — Dec 2024",
    title: "Software Developer",
    company: "DXC Technology Morocco",
    description:
      "Contributed to enterprise IT service management projects, building and integrating web applications with Java, Spring Boot, and Angular. Collaborated on automation initiatives and system modernization efforts.",
    link: "https://www.dxc.com",
  },
  {
    date: "2022 — 2023",
    title: "Full-Stack Developer",
    company: "Yuccainfo",
    description:
      "Designed and developed full-stack web applications using Java, Spring Boot, and MySQL. Built RESTful APIs and responsive user interfaces, managing the full development lifecycle from requirements to deployment.",
  },
  {
    date: "2021 — 2022",
    title: "Junior Developer",
    company: "3alink",
    description:
      "Developed and maintained web applications with a focus on backend services. Worked with Java and relational databases, gaining hands-on experience with agile methodologies and collaborative development practices.",
  },
  {
    date: "2020 — 2021",
    title: "Web Developer Intern",
    company: "2Peerfect",
    description:
      "Assisted in building and maintaining client websites and internal tools. Gained foundational experience in web development, database management, and software testing.",
  },
]

export default experience
