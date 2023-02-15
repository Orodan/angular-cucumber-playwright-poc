import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.waitForURL('http://localhost:4200/dashboard')

  await page.getByRole('link', { name: 'Heroes' }).click();

  await page.getByLabel('Hero name:').click();
  await page.getByLabel('Hero name:').fill('Ironman');
  await page.getByRole('button', { name: 'Add hero' }).click();

  await expect(page.getByRole('link', { name: '21 Ironman' })).toBeVisible()
});