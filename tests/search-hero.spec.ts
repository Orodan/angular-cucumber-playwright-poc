import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.waitForURL('http://localhost:4200/dashboard')

  await page.getByLabel('Hero Search').click();
  await page.getByLabel('Hero Search').fill('Celeritas');
  await page.locator('#search-component').getByRole('link', { name: 'Celeritas' }).click();

  await expect(page.getByRole('heading', { name: 'CELERITAS Details' })).toBeVisible();
});