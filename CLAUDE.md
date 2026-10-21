# CLAUDE.md

Guidance for AI coding sessions (Claude Code) working in this repository.

## Project

Professional website for a freelance senior software engineer. Sweet and simple: a small number of pages, light and to the point. Fully static output, hosted on Cloudflare Pages.
Priorities, in order: fast load times, strong SEO, clean and maintainable code. Keep it small; do not add sections, pages or features that were not asked for.

## Tech stack

- **Framework:** Astro (static output, `output: 'static'`, the default)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 via the `@tailwindcss/vite` plugin (CSS-first config, no `tailwind.config.js`)
- **SEO:** `@astrojs/sitemap`; `site` must be set in `astro.config.mjs`
- **Runtime:** Node.js LTS, pinned in `.nvmrc`
- **Package manager:** npm (commit `package-lock.json`)

Ship zero client-side JavaScript by default. Only add interactivity with a `<script>` tag in a component, or an island (`client:visible` / `client:idle`) when truly needed. Do not add a UI framework (React, Vue, Svelte) without asking first.

## Scripts

| Command           | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Local dev server at http://localhost:4321 (HMR) |
| `npm run build`   | Production build into `dist/`                   |
| `npm run preview` | Serve the built `dist/` locally to verify       |
| `npm run check`   | Type-check `.astro` and `.ts` files             |

Always run `npm run build` (and `npm run check` if available) before considering a change done. A failing build means a failing deploy.

## Project structure

```
/
├── public/              # Static assets copied as-is (favicon, robots.txt, og images)
├── src/
│   ├── components/      # Reusable .astro components (PascalCase.astro)
│   ├── layouts/         # Page shells (BaseLayout.astro holds <head>, meta, SEO tags)
│   ├── pages/           # File-based routing; each file = one URL
│   └── styles/
│       └── global.css   # @import "tailwindcss"; plus @theme design tokens
├── archive/             # Design history, outside the build
├── astro.config.mjs
├── tsconfig.json
├── .nvmrc
└── CLAUDE.md
```

`archive/` holds design history; never import from it or modify it unless asked.

## Conventions

- Components: one component per file, PascalCase names, typed `Props` interface in the frontmatter.
- Pages stay thin: compose layouts and components, no large inline markup blocks.
- Every page sets a unique `title` and `description` through `BaseLayout` (Open Graph and canonical URL included).
- Design tokens (colors, fonts, spacing) live in `@theme` in `src/styles/global.css`. Avoid arbitrary one-off values when a token fits.
- Images: use Astro's `<Image />` / `<Picture />` from `astro:assets` for local images so they get optimized. Always provide `alt` text.
- Semantic HTML and accessibility first: landmarks, heading order, focus states, sufficient contrast.
- Fonts: self-host (e.g. Fontsource) rather than loading from third-party CDNs.
- Keep dependencies minimal. Ask before adding a new package.
- Writing style for site copy: do not use em dashes.

## Build and deploy

- **Host:** Cloudflare Pages, connected to the private GitHub repo.
- **Trigger:** every push to `main` builds and deploys to production. Pushes to other branches create preview deployments.
- **Cloudflare Pages settings:**
  - Framework preset: Astro
  - Build command: `npm run build`
  - Build output directory: `dist`
  - Node version: taken from `.nvmrc` (or the `NODE_VERSION` environment variable)
- No adapter is needed (pure static). Do not add `@astrojs/cloudflare` unless server-side rendering is explicitly requested.
- Redirects and headers go in `public/_redirects` and `public/_headers` (Cloudflare Pages format).

## Git workflow

- Work on feature branches; merge to `main` only when `npm run build` passes locally.
- Never commit `dist/`, `.astro/`, `node_modules/`, or `.env*` files.
- Small, descriptive commits.