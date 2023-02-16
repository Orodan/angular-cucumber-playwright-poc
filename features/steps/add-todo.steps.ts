import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test';

import { CustomWorld } from './config/custom-world'

When('I click on the "Heroes" link', async function(this: CustomWorld) {
  await this.page.getByRole('link', { name: 'Heroes' }).click();
});

When('I write "Ironman" in the hero name field', async function(this: CustomWorld) {
  await this.page.getByLabel('Hero name:').click();
  await this.page.getByLabel('Hero name:').fill('Ironman');
});

When('I click on the "Add hero" button', async function(this: CustomWorld) {
  await this.page.getByRole('button', { name: 'Add hero' }).click();
});

Then('I see a link named "Ironman"', async function(this: CustomWorld) {
  await expect(this.page.getByRole('link', { name: '21 Ironman' })).toBeVisible()
});