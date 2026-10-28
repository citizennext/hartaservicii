# Harta Serviciilor Sociale din România

Static site for [serviciisociale.ro](https://serviciisociale.ro): a map and directory of ~4,100 licensed social services in Romania, plus news, statistics and search.

Built with **Astro 7** (static output) and **React 19 islands**, deployed to **Cloudflare Pages**.

## How it works

- **All data is fetched at build time** from Hasura (`HASURA_URL`), authenticated with `HASURA_ADMIN_SECRET`. The secret is server-only (`astro:env`) and never reaches the browser; CI fails if it appears in `dist/`.
  - Providers, suppliers and statistics come from the Hasura tables.
  - News and pages come from the GraphCMS remote schema, namespaced under `cms { … }`.
- Every provider gets a prerendered page at `/harta/serviciu/<slug>/<id>/` (same URLs as the old Gatsby site).
- The map (`/harta`) is a React island that loads `/data/providers.json` (generated at build) and filters client-side.
- Search (`/cautare`) uses Algolia directly from the browser with the search-only key.
- The contact form posts to a Cloudflare Pages Function (`functions/api/contact.ts`): Turnstile + honeypot, delivered via Resend.

Because the site is static, **content changes appear after a rebuild**. A nightly GitHub Action triggers a Cloudflare build and refreshes the Algolia index (see below).

## Development

Requires Node 24 (`.nvmrc`) and pnpm.

```sh
cp .env.example .env   # fill in HASURA_ADMIN_SECRET and the Algolia keys
pnpm install
pnpm dev               # http://localhost:4321
```

| Command                        | What it does                                          |
| ------------------------------ | ----------------------------------------------------- |
| `pnpm dev`                     | Dev server                                            |
| `pnpm build` / `pnpm preview`  | Production build into `dist/` / serve it              |
| `pnpm check`                   | Astro + TypeScript type-check                         |
| `pnpm lint` / `pnpm format`    | ESLint / Prettier                                     |
| `pnpm test` / `test:coverage`  | Vitest unit tests (`src/lib`, `functions`)            |
| `pnpm test:e2e`                | Playwright (builds, previews, tests desktop + mobile) |
| `pnpm index:algolia --dry-run` | Build Algolia records without touching the index      |
| `pnpm index:algolia`           | Replace the Algolia index (needs `ALGOLIA_API_KEY`)   |

> When Astro detects it is run by an AI agent it backgrounds `dev`/`preview`; use `astro dev logs` / `astro dev stop`. Playwright passes `--ignore-lock` to keep the preview server in the foreground.

## Project layout

```
src/
  pages/            routes (Astro); harta/serviciu/[slug]/[id].astro prerenders every provider
  islands/          React islands: map (MapApp, ProviderMap), search (SearchApp)
  components/       Astro components (layout chrome, home sections, stats charts)
  lib/              pure, unit-tested logic: hasura client + queries, filters, statistics, search, contact
  data/             static data: site copy/navigation, district centres and SVG paths
  styles/           Tailwind 4 entry (global.css) + legacy theme compiled from the old Sass
functions/api/      Cloudflare Pages Functions (contact form)
scripts/            Algolia indexing
e2e/                Playwright tests
public/             static files incl. Cloudflare _headers/_redirects and the sw.js kill switch
```

## Deployment (Cloudflare Pages)

Build settings: command `pnpm build`, output directory `dist`, Node version from `.nvmrc`.

Environment variables in the Pages project:

| Variable                           | Used by                 | Notes                                                |
| ---------------------------------- | ----------------------- | ---------------------------------------------------- |
| `HASURA_URL`                       | build                   | `https://servicii-sociale.hasura.app/v1/graphql`     |
| `HASURA_ADMIN_SECRET`              | build                   | encrypted                                            |
| `PUBLIC_ALGOLIA_APP_ID`            | build (browser)         |                                                      |
| `PUBLIC_ALGOLIA_SEARCH_KEY`        | build (browser)         | search-only key                                      |
| `PUBLIC_ALGOLIA_INDEX_NAME_COMMON` | build (browser)         |                                                      |
| `PUBLIC_TURNSTILE_SITE_KEY`        | build (browser)         | defaults to Cloudflare's always-pass test key        |
| `TURNSTILE_SECRET_KEY`             | `functions/api/contact` | encrypted                                            |
| `RESEND_API_KEY`                   | `functions/api/contact` | encrypted; sending domain must be verified in Resend |
| `CONTACT_TO`, `CONTACT_FROM`       | `functions/api/contact` | optional overrides                                   |
| `PUBLIC_TILE_URL`                  | build (browser)         | optional; swap OSM for a commercial tile provider    |

### GitHub Actions

- **CI** (`ci.yml`): lint, type-check, unit tests with coverage, build + Playwright e2e, and a check that the Hasura secret is not in `dist/`.
- **Content refresh** (`content-refresh.yml`): nightly, on push to `main` and on demand — rebuilds the Algolia index and triggers the Cloudflare deploy hook.

Repository secrets: `HASURA_URL`, `HASURA_ADMIN_SECRET`, `ALGOLIA_API_KEY`, `CLOUDFLARE_PAGES_DEPLOY_HOOK`.
Repository variables: `PUBLIC_ALGOLIA_APP_ID`, `PUBLIC_ALGOLIA_SEARCH_KEY`, `PUBLIC_ALGOLIA_INDEX_NAME_COMMON`.

## Map tiles

Tiles come from OpenStreetMap, whose [tile usage policy](https://operations.osmfoundation.org/policies/tiles/) requires a valid `Referer`. The tile layer sets `referrerPolicy="strict-origin-when-cross-origin"` and `_headers` sends the same `Referrer-Policy` (the old Netlify `same-origin` policy stripped the Referer and blanked the map). For heavy traffic, point `PUBLIC_TILE_URL` at a commercial provider.
