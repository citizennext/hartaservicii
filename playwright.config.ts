import { defineConfig, devices } from '@playwright/test';

const PORT = 4322;

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: `http://localhost:${PORT}`, trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    // --ignore-lock keeps `astro preview` in the foreground (Astro auto-backgrounds it when it detects an AI agent).
    command: `pnpm build && pnpm preview --port ${PORT} --ignore-lock`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    // Cloudflare's always-pass Turnstile test key, so the contact form renders in tests. It ends up in
    // this build's dist/, so never deploy dist/ from an e2e run — rebuild first.
    env: { PUBLIC_TURNSTILE_SITE_KEY: '1x00000000000000000000AA' },
  },
});
