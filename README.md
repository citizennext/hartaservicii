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

Because the site is static, **content changes appear after a rebuild**. A nightly GitHub Action rebuilds and redeploys the site and refreshes the Algolia index (see below).

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

The site is built in **GitHub Actions** and uploaded to the Cloudflare Pages project `harta-servicii` (Direct Upload, account `cezar.neaga@civictech.ro`). Cloudflare does not build it.

- `deploy.yml` builds, refuses to publish if `dist/` contains the Hasura secret or the Turnstile test key, then runs `wrangler pages deploy`.
- **CI** (`ci.yml`) runs lint, type-check, unit tests, build + Playwright e2e on every PR, and calls `deploy.yml` after a push to `main` passes.
- **Content refresh** (`content-refresh.yml`) rebuilds the Algolia index nightly, on push to `main` and on demand; the nightly/manual runs also redeploy so Hasura/CMS changes go live.
- To deploy by hand: Actions → Deploy → Run workflow (or `pnpm build && pnpm exec wrangler pages deploy dist --project-name harta-servicii --branch main`).

> Always deploy from a fresh `pnpm build`: `pnpm test:e2e` writes its own build to `dist/` with Cloudflare's Turnstile _test_ key.
> Without `PUBLIC_TURNSTILE_SITE_KEY` the contact page hides the form and shows the email address instead.

GitHub repository secrets: `HASURA_URL`, `HASURA_ADMIN_SECRET`, `ALGOLIA_API_KEY`, `CLOUDFLARE_API_TOKEN` (custom token: Account → Cloudflare Pages → Edit).

GitHub repository variables: `PUBLIC_ALGOLIA_APP_ID`, `PUBLIC_ALGOLIA_SEARCH_KEY`, `PUBLIC_ALGOLIA_INDEX_NAME_COMMON`, `PUBLIC_TURNSTILE_SITE_KEY`, `CLOUDFLARE_ACCOUNT_ID`. Optional: `PUBLIC_TILE_URL` to swap OSM for a commercial tile provider.

Cloudflare Pages project secrets (read at runtime by `functions/api/contact`, set with `wrangler pages secret put`): `RESEND_API_KEY` (sending domain must be verified in Resend), `TURNSTILE_SECRET_KEY`; optional `CONTACT_TO`, `CONTACT_FROM`.

## Map tiles

Tiles come from OpenStreetMap, whose [tile usage policy](https://operations.osmfoundation.org/policies/tiles/) requires a valid `Referer`. The tile layer sets `referrerPolicy="strict-origin-when-cross-origin"` and `_headers` sends the same `Referrer-Policy` (the old Netlify `same-origin` policy stripped the Referer and blanked the map). For heavy traffic, point `PUBLIC_TILE_URL` at a commercial provider.
