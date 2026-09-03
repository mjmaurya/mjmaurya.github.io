# mjmaurya.github.io

Personal portfolio of **Manoj Kumar** — live at **[mjmaurya.github.io](https://mjmaurya.github.io)**.

## Stack

| | |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 (`@theme` tokens, no config file) |
| Animation | Motion (`motion/react`) |
| Icons | lucide-react |
| Hosting | GitHub Pages via GitHub Actions |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Editing content

**All copy and links live in [`src/data/site.js`](src/data/site.js).** Components read
from it and never hardcode content, so adding a project or changing a headline is a
one-file edit.

| Export | Controls |
|---|---|
| `person` | Name, role, location, email, availability badge |
| `hero` | Headline, the serif-accented `emphasis` word, intro, buttons |
| `stats` | The three figures under the hero |
| `experience` | Roles in *Experience* — **contains placeholders, see below** |
| `spotlight` | The CodeScript feature section and its tool list |
| `projects` | Rows in *Selected work* |
| `stack` | Technology groups |
| `about` | About heading, prose, and the four principles |
| `contact` / `socials` | Contact section and the social grid |
| `nav` | Header links (must match section `id`s) |

## ⚠️ Unfilled placeholders

`experience` in `src/data/site.js` is scaffolded with `<bracketed>` values and `20XX`
dates. A guard blocks the build until they are replaced:

```bash
npm run check    # lists every remaining placeholder with its line number
```

`npm run build` runs this first, and CI runs it as its own step — so a half-filled
entry cannot reach the live site. Delete the second entry entirely if you only want
to show the current role.

## Theming

Colours are CSS custom properties in [`src/index.css`](src/index.css) — one block for
light on `:root`, one for dark on `.dark`. Tailwind reads them through `@theme inline`,
so changing `--accent` in both blocks reskins the whole site.

The theme class is applied by a small inline script in `index.html` *before* first
paint, so the correct theme never flashes. Choice persists in `localStorage`.

Every text/background pair meets **WCAG AA** (4.5:1 for body text). If you change a
colour, re-check it.

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes `dist/` to Pages. Build output is **not** committed.

> **One-time setup:** in **Settings → Pages**, set *Source* to **GitHub Actions**.
> Until that is switched, Pages keeps serving the old branch contents.

## History

The previous Bootstrap 5 site is preserved on the **`legacy-site-2026`** branch,
including the skill icons and images this version no longer uses.
