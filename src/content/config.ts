import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["completed", "in-progress", "planned"]),
    role: z.string(),
    category: z.enum([
      "Full-Stack",
      "BI & Data",
      "Automation",
      "Desktop",
      "Mobile",
      "E-commerce",
      "DevOps",
      "AI",
      "ERP",
      "Web Scraping",
    ]),
    image: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(99),
    stack: z.array(z.string()),
  }),
})

export const collections = { projects }
