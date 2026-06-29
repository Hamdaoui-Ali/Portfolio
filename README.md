# Ali Hamdaoui — Full-Stack Software Engineer Portfolio

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-FF3E00?logo=astro&logoColor=fff&style=flat)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat)](https://vercel.com)

**Live:** [ali-hamdaoui.vercel.app](https://ali-hamdaoui.vercel.app)

</div>

---

Personal portfolio of **Ali Hamdaoui**, a Full-Stack Software Engineer based in Morocco, Rabat-Salé. Built with Astro, Tailwind CSS, and TypeScript. Deployed on Vercel.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) with dark mode support
- **Language:** TypeScript
- **Package Manager:** pnpm
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel (free tier)

## Features

- Single-page static portfolio with SEO-optimized metadata
- Dynamic project detail pages with Astro Content Collections
- Technology stack showcase with categorized groups
- Professional experience timeline
- Modernization pipeline visualization
- Before/after migration comparison components
- Terminal-style code snippets
- Dark/light/system theme switcher
- Fully responsive design
- Accessibility-focused (ARIA attributes, keyboard navigation)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (installed automatically via [corepack](https://nodejs.org/api/corepack.html))

### Setup

```bash
# Clone the repository
git clone https://github.com/Hamdaoui-Ali/Portfolio.git
cd Portfolio

# Install dependencies
pnpm install --frozen-lockfile

# Start development server
pnpm dev

# Run type checking
pnpm check

# Run formatting check
pnpm format:check

# Production build
pnpm build
```

## Deployment

This portfolio is configured for automatic deployment on Vercel via the `vercel.json` configuration. The GitHub Actions quality workflow runs on every push and pull request to `main`, checking types, formatting, and the production build before deployment.

## Project Structure

```
src/
├── components/         # Astro components (Hero, Projects, TechStack, etc.)
├── content/
│   ├── config.ts       # Content collection schema (Zod)
│   └── projects/       # Project markdown entries
├── data/               # Site config, technologies registry, navigation
├── layouts/            # Page layout with SEO metadata
└── pages/
    ├── index.astro     # Homepage
    └── projects/
        └── [slug].astro # Dynamic project detail pages
```

## Credits

This portfolio is built on a template originally created by [midudev](https://github.com/midudev/porfolio.dev). The project has been extensively customized, translated to English, and personalized for Ali Hamdaoui's identity, skills, and career.

## License

[CC BY-NC 4.0](LICENSE.md)
