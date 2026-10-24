# CLAUDE.md

Guidance for AI coding sessions (Claude Code) working in this repository.

## Project

Professional website for a freelance senior software engineer. Sweet and simple: a small number of pages, light and to the point. Fully static output, hosted on Cloudflare Workers (static assets).
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

## Design system

The full spec is `docs/design.md`; follow it strictly. Copy lives in `src/data/site.ts` and must match `docs/site-copy.md`.

- **Look:** clean white page, blazer blue as the accent (headings, buttons, links, borders, availability band, quote cards, contact panel). Never a blue hero panel. Light only, no dark mode.
- **Fonts:** Figtree Variable for display (headings, labels, buttons), Source Sans 3 Variable for body. No other fonts.
- **Tokens:** `bg`, `ink`, `muted`, `accent`, `accent-deep`, `tint` in `@theme`. No other colours; no arbitrary hex values in components.
- **Layout:** `max-w-6xl` column, gutters `px-5` / `md:px-12`, sections `py-20` / `md:py-28`, white and tint sections alternate.
- **Components:** pill buttons, `rounded-[1.75rem]` cards with a 2px accent border, visible `focus-visible` outlines everywhere.
- **Motion:** CSS only, always inside `prefers-reduced-motion: no-preference`, content visible without it.

## Build and deploy

- **Host:** Cloudflare Workers with static assets (Worker `devjasper-nl`), built by Workers Builds from the private GitHub repo. Not Cloudflare Pages.
- **Trigger:** every push to `main` (the production branch) builds and deploys to production.
- **Build settings** live in the Cloudflare dashboard (Workers & Pages → `devjasper-nl` → Settings → Build); the repo has no Wrangler config. Check the dashboard before assuming build or deploy commands.
- **Domain:** `devjasper.nl` is a Worker custom domain. `www` (proxied `AAAA 100::`) and plain `http` are redirected to `https://devjasper.nl` by a Cloudflare Redirect Rule and Always Use HTTPS, configured in the zone, not in this repo.
- No adapter is needed (pure static). Do not add `@astrojs/cloudflare` unless server-side rendering is explicitly requested.
- Redirects and headers go in `public/_redirects` and `public/_headers` (same format as Pages; Workers static assets reads both).

## Git workflow

- Commit directly on `main`; no feature branches or pull requests. Every push to `main` deploys to production, so commit only when `npm run build` and `npm run check` pass locally.
- Never commit `dist/`, `.astro/`, `node_modules/`, or `.env*` files.
- Small, descriptive commits.