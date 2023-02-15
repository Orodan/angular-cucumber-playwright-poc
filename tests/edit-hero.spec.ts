import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.waitForURL('http://localhost:4200/dashboard');

  await page.getByRole('link', { name: 'Bombasto' }).click();
  await page.getByPlaceholder('Hero name').click();
  await page.getByPlaceholder('Hero name').fill('Bombasta');
  await page.getByRole('button', { name: 'save' }).click();

  await expect(page.getByRole('link', { name: 'Bombasta' })).toBeVisible();
});