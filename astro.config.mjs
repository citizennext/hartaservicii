// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://serviciisociale.ro',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
  image: {
    domains: ['eu-central-1.graphassets.com', 'media.graphcms.com'],
  },
  env: {
    schema: {
      HASURA_URL: envField.string({ context: 'server', access: 'secret', url: true }),
      HASURA_ADMIN_SECRET: envField.string({ context: 'server', access: 'secret' }),
      PUBLIC_ALGOLIA_APP_ID: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_ALGOLIA_SEARCH_KEY: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_ALGOLIA_INDEX_NAME_COMMON: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_TILE_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      }),
    },
    validateSecrets: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
