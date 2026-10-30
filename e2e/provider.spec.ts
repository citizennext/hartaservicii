import { expect, test, type APIRequestContext } from '@playwright/test';

interface MapProvider {
  id: string;
  name: string;
}

async function providerPathFromSitemap(request: APIRequestContext, id: string): Promise<string> {
  const sitemap = await (await request.get('/sitemap-0.xml')).text();
  const match = sitemap.match(new RegExp(`<loc>https?://[^/]+(/harta/serviciu/[^<]+/${id}/)</loc>`));
  if (!match?.[1]) throw new Error(`Provider ${id} not found in sitemap`);
  return match[1];
}

test('provider page renders details and a map with tiles', async ({ page, request }) => {
  const providers = (await (await request.get('/data/providers.json')).json()) as MapProvider[];
  const provider = providers[0]!;

  await page.goto(await providerPathFromSitemap(request, provider.id));

  await expect(page.getByRole('heading', { level: 1 })).toHaveText(provider.name);
  await expect(page.locator('img.leaflet-tile-loaded').first()).toBeVisible({ timeout: 15_000 });
  await expect(page.getByRole('rowheader', { name: 'Administrator:' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Înapoi la hartă' })).toHaveAttribute('href', '/harta');
});
