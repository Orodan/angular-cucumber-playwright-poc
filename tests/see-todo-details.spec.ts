import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.waitForURL('http://localhost:4200/dashboard');

  await page.getByRole('link', { name: 'Bombasto' }).click();
  await expect(page.getByRole('heading', { name: 'BOMBASTO Details' })).toBeVisible();
});