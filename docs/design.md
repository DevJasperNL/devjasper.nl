# devjasper.nl design

Status: final. Date: 2026-10-21. Chosen design: direction D ("Blazer blue"), variant 2 ("White hero, blue as accent"). Exploration history: `archive/README.md`, tags `design-directions-v1` and `design-variants-v1`.

In one line: a clean white page where blazer blue is the accent, not the background; personality comes from a chunky, friendly display font, a personal photo and small playful motion.

## Fonts
Self-hosted via Fontsource, imported once in `BaseLayout.astro`.

| Role | Font | Package | Weights used |
| --- | --- | --- | --- |
| Display (headings, labels, buttons, nav) | Figtree Variable | `@fontsource-variable/figtree` | 600, 700, 800, 900 |
| Body | Source Sans 3 Variable | `@fontsource-variable/source-sans-3` | 400, 600, 700 |

- Figtree's latin file is preloaded; it renders the hero headline.
- Use `font-display` for anything that is a heading, label or button; everything else inherits `font-body`.
- No third font, no monospace.

## Colour tokens
Defined once in `@theme` in `src/styles/global.css`. Light only, no dark mode. These six are the whole palette.

| Token | Hex | Use |
| --- | --- | --- |
| `bg` | `#FFFFFF` | Page background, cards |
| `ink` | `#1B2430` | Body text, h3 |
| `muted` | `#4A5464` | Secondary text |
| `accent` | `#2B5BA8` | Blazer blue: h1, h2, buttons, links, borders, the availability band, quote cards, contact panel |
| `accent-deep` | `#234C8F` | Hover state of accent buttons |
| `tint` | `#EEF3FA` | Alternating section background, photo arch, illustration panels |

Contrast (WCAG): ink on white 15.7:1, on tint 14.0:1; muted on white 7.7:1, on tint 6.9:1; accent on white 6.6:1, on tint 6.0:1; white on accent 6.6:1, on accent-deep 8.4:1. All pass AA for body text. White text on accent may use `white/90` (still above 4.5:1) for captions; do not go lighter.

## Type scale
Mobile / from `md` (768px) up.

| Element | Size | Weight | Style |
| --- | --- | --- | --- |
| h1 (hero headline) | 2.7rem / 3.75rem (`md:text-6xl`) / 4.5rem (`lg:text-7xl`) | 900 | accent, `leading-[1.02]`, tight tracking, one line per question |
| Hero greeting | 1.5rem / 1.875rem | 600 | ink |
| h2 (section) | 2.25rem / 3.75rem (`text-4xl` / `text-6xl`) | 900 | accent, tight tracking |
| h3 (point, card) | 1.5rem to 2.25rem | 800 to 900 | ink, `leading-tight` |
| Lead text | 1.125rem / 1.25rem | 400 | muted, `leading-relaxed` |
| Body | 1.125rem (`text-lg`) | 400 | muted or ink, `leading-relaxed` |
| Label (client, period) | 0.875rem | 700 | accent, uppercase, wide tracking |
| Quote | 1.25rem / 1.5rem | 600, display font | white on accent, `leading-snug` |

## Spacing and layout
- Content column: `max-w-6xl` (72rem), side gutters `px-5` (1.25rem) on phones, `px-12` (3rem) from `md`.
- Section padding: `py-20` / `py-28` (5rem / 7rem). Inside a section: heading, then `mt-12` to the content.
- One page, sections stacked in the order of `docs/site-copy.md`. Backgrounds alternate white and tint so sections separate without rules.
- Hero: white, two columns from `md` (text 1.3fr, photo 1fr), single column on phones with the photo below the text. Directly under the hero sits the full-width blue availability band.
- Grids: 3 columns for short points from `md`, 2x2 for quotes, single column on phones.
- Every section leads towards the one CTA: "Email me" (mailto).

## Components
- **Buttons:** pill shaped (`rounded-full`), display font, bold. Primary is accent with white text (hover accent-deep, small lift); inverse is white with accent text, used on blue panels. Large CTA has an arrow that nudges right on hover.
- **Links:** accent, display font, bold, underline with 2px decoration and 4px offset, optional arrow.
- **Cards:** `rounded-[1.75rem]`, white, `border-2 border-accent`. Work cards stack (sticky) from `md` up and have a tint illustration panel; plain stacked on phones.
- **Quote cards:** solid accent, white text, a large display quote mark, name in bold. A horizontal swipe row with snap on phones, a 2x2 grid from `md`.
- **Availability band:** full-width accent strip with a white status dot and "Available from {availability}".
- **Contact panel:** a large accent rounded panel with white heading and inverse button; the one other place blue fills an area.
- **Header:** name (and role from `sm`) on the left, nav links from `lg` (they crowd the header below that), a small primary "Email me" pill on the right. Not sticky.
- **Focus:** every interactive element has a visible `focus-visible` outline: 2px accent with offset on white, 2px white on accent.

## Imagery
- The 2022 headshot (`src/assets/jasper.png`) in the hero, cropped 4:5 into an arch (`rounded-t-full`) over a tint arch. Optimised through `<Picture>` (avif, webp), loaded eagerly with high fetch priority.
- One abstract line illustration per work highlight (`WorkArt.astro`): camera and stream, a lock connecting apps, warehouse racks with shuttles. 3px accent strokes, tint fills, one solid accent highlight. Decorative, `aria-hidden`.
- No stock photos, no client logos, no icon walls.

## Motion
- CSS only, no JavaScript. Content is always visible without animation support.
- Hero entrance: greeting and headline lines rise in one after another, intro and CTA fade up, photo rises last.
- Scroll reveals with `animation-timeline: view()` where supported (points fade up, the rule under a section heading grows).
- Small loops in the work illustrations (camera pans, stream pulses, lock shackle, lift and shuttles move).
- Hover: buttons lift, arrows nudge.
- Everything sits inside `@media (prefers-reduced-motion: no-preference)`.

## Do
- Use the tokens; add a token before adding a one-off value.
- Keep blue as the accent: headings, buttons, links, borders, one band, quote cards, contact panel.
- Keep sections short: each should fit roughly one screen.
- Keep the copy in `src/data/site.ts`, exactly as approved in `docs/site-copy.md`.

## Don't
- No dark mode, no dark or "hacker" styling, no neon, no terminal or monospace looks.
- No extra colours (no orange or yellow markers like the archived directions).
- No blue hero panel: that was D's baseline and was replaced by the white hero.
- No em dashes in copy.
- No UI framework, no animation libraries, no client-side JavaScript for decoration.
