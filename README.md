# Jovan Tomašević — Digital CV

A minimalist engineering portfolio focused on architecture, distributed systems, enterprise platform modernization, and a decade of backend engineering experience.

Built with `React`, `TypeScript`, `Vite`, and `GitHub Pages`.

## Overview

The site presents experience, selected architecture work, engineering principles, career evolution, and technical capabilities. Content is stored in structured files under `src/data` so it can be updated independently from the presentation components.

## Development

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Build

```bash
npm run build
```

The production build is written to `dist/`. To inspect it locally, run `npm run preview`.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages whenever a change is pushed to the `main` branch. In the repository settings, configure **Pages → Source** to use **GitHub Actions**.

The Vite base path is `/`, matching the root deployment at `https://reverseskydiver.github.io/`.

## Project structure

```text
src/
  components/
    architecture/  Architecture case-study presentation
    experience/    Reusable experience and project cards
    layout/        Navigation and footer
    sections/      Page sections
    ui/            Shared UI primitives
  data/            Editable profile, experience, architecture, and skills content
  App.tsx           Page composition
  styles.css        Design system and responsive styles
.github/workflows/  GitHub Pages deployment workflow
```

## Configuration

Public profile links live in `src/data/profile.ts`. Add a public email address to `profile.links.email` to enable the email links; the project intentionally does not invent one.
