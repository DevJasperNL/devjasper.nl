# Archive

Design history for devjasper.nl. Nothing here is part of the site.

- This folder sits outside `src/`, so Astro never builds or routes it, and it is excluded from type checking in `tsconfig.json`.
- Never import from it or modify it unless asked.
- Each archived design keeps its files under a `src/` subfolder that mirrors the original paths. To restore one, copy that `src/` tree back into the project root and reinstall the font packages listed in its README.
- Easier: every round is tagged in git before it was archived. Check out the tag to see all options in their original working state, for example `git checkout design-directions-v1`, then `npm install` and `npm run dev`.

## Contents

| Folder | Tag | What |
| --- | --- | --- |
| `design-directions/` | `design-directions-v1` | Directions A, B and C. D ("Blazer blue") was chosen and refined in a second round of variants. |
| `design-variants/` | `design-variants-v1` | Variants 1, 3, 4 and 5 of direction D. Variant 2 ("White hero, blue as accent") was chosen and lives on in `src/`; its design is written down in `docs/design.md`. D's original blue-panel hero is only in the tag. |
