import { expect, test } from '@playwright/test';

const OSM_TILE = /tile\.openstreetmap\.org/;

test.describe('/harta', () => {
  test('loads OpenStreetMap tiles with a Referer header', async ({ page }) => {
    const tileStatuses: number[] = [];
    const tileReferers: (string | undefined)[] = [];
    page.on('response', async (response) => {
      if (!OSM_TILE.test(response.url())) return;
      tileStatuses.push(response.status());
      tileReferers.push((await response.request().headerValue('referer')) ?? undefined);
    });

    await page.goto('/harta');
    const tile = page.locator('img.leaflet-tile-loaded').first();
    await expect(tile).toBeVisible({ timeout: 15_000 });

    expect(await tile.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    expect(tileStatuses.length).toBeGreaterThan(0);
    expect(tileStatuses.every((status) => status === 200)).toBe(true);
    expect(tileReferers.every((referer) => referer?.startsWith('http://localhost'))).toBe(true);
  });

  test('renders provider clusters', async ({ page }) => {
    await page.goto('/harta');
    // The theme collapses the cluster wrapper to width:auto, so assert on its drawn SVG.
    await expect(page.locator('.marker-cluster-medium svg').first()).toBeVisible({ timeout: 15_000 });
  });

  test('district filter updates the URL and the total', async ({ page, isMobile }) => {
    await page.goto('/harta');
    if (isMobile) await page.getByRole('button', { name: 'Filtre' }).click();
    const total = page.locator('.pin-number');
    await expect(total).not.toContainText(/^\s*Total centre\s*0\s*$/);
    const before = await total.innerText();

    await page.getByLabel('Județ').selectOption('Cluj');

    await expect(page).toHaveURL(/district=Cluj/);
    await expect(total).not.toHaveText(before);
  });

  test('restores filters from the URL', async ({ page, isMobile }) => {
    await page.goto('/harta?administrator=false&district=Ilfov');
    if (isMobile) await page.getByRole('button', { name: 'Filtre' }).click();
    await expect(page.getByLabel('Județ')).toHaveValue('Ilfov');
    await expect(page.getByLabel('Administrator')).toHaveValue('false');
  });
});
