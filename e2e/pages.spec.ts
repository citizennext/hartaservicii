import { expect, test } from '@playwright/test';

test('hero search leads to Algolia results', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('searchbox', { name: 'Caută un serviciu social' }).fill('cluj');
  await page.getByRole('searchbox', { name: 'Caută un serviciu social' }).press('Enter');

  await expect(page).toHaveURL(/\/cautare\?query=cluj/);
  await expect(page.locator('.ais-Hits-item').first()).toContainText(/cluj/i, { timeout: 15_000 });
  await expect(page.locator('.ais-Hits-item a').first()).toHaveAttribute('href', /^\/harta\/serviciu\/.+\/.+\/$/);
});

test('news index links to articles with prev/next navigation', async ({ page }) => {
  await page.goto('/noutati');
  const firstArticle = page.locator('.blog-post-item h2 a').first();
  const title = (await firstArticle.innerText()).trim();
  await firstArticle.click();

  await expect(page.getByRole('heading', { level: 1 })).toHaveText(title);
  await expect(page.getByRole('navigation', { name: 'Alte articole' })).toBeVisible();
});

test('CMS page renders its content and partner buttons', async ({ page }) => {
  await page.goto('/despre-noi');
  await expect(page.locator('.page-header')).toContainText('despre noi');
  await expect(page.getByRole('link', { name: 'citizennext.ro' }).last()).toHaveAttribute('href', 'https://citizennext.ro');
});

test.describe('contact form', () => {
  test('shows the success message when the function accepts the message', async ({ page }) => {
    await page.route('**/api/contact', (route) => route.fulfill({ json: { success: true, error: null } }));
    await page.goto('/contact');
    await page.getByLabel('Adresa ta de email').fill('ana@example.ro');
    await page.getByLabel('Mesajul tău').fill('Datele centrului s-au schimbat.');
    await page.getByRole('button', { name: 'Trimite mesaj' }).click();

    await expect(page.getByRole('status').filter({ hasText: 'Mesaj primit' })).toBeVisible();
  });

  test('shows the error returned by the function', async ({ page }) => {
    await page.route('**/api/contact', (route) =>
      route.fulfill({ status: 400, json: { success: false, error: 'Te rugăm să confirmi că nu ești robot.' } })
    );
    await page.goto('/contact');
    await page.getByLabel('Adresa ta de email').fill('ana@example.ro');
    await page.getByLabel('Mesajul tău').fill('Datele centrului s-au schimbat.');
    await page.getByRole('button', { name: 'Trimite mesaj' }).click();

    await expect(page.getByRole('status').filter({ hasText: 'robot' })).toBeVisible();
  });
});

test('unknown URLs render the 404 page', async ({ page }) => {
  const response = await page.goto('/pagina-care-nu-exista');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Această pagină nu există');
});
