import { expect, test } from '@playwright/test';

test('production build boots GTM and the Facebook pixel with their IDs', async ({ page }) => {
  const trackerUrls: string[] = [];
  await page.route(/googletagmanager\.com|connect\.facebook\.net/, (route) => {
    trackerUrls.push(route.request().url());
    return route.abort();
  });

  await page.goto('/');

  await expect.poll(() => trackerUrls.some((url) => url.includes('gtm.js?id=GTM-KNQ9RQZ'))).toBe(true);
  await expect.poll(() => trackerUrls.some((url) => url.includes('fbevents.js'))).toBe(true);
  const queuedPixelInit = await page.evaluate(() =>
    JSON.stringify((window as unknown as { fbq: { queue: unknown[] } }).fbq.queue)
  );
  expect(queuedPixelInit).toContain('226417208680464');
});
