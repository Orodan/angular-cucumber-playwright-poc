import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { CustomWorld } from './config/custom-world'

When('I click on the "Bombasto" link', async function(this: CustomWorld) {
  await this.page.getByRole('link', { name: 'Bombasto' }).click();
});

When('I write "Bombasta" in the hero name field', async function(this: CustomWorld) {
  await this.page.getByLabel('Hero name:').click();
  await this.page.getByLabel('Hero name:').fill('Bombasta');
});

When('I click on the "save" button', async function(this: CustomWorld) {
  await this.page.getByRole('button', { name: 'save' }).click();
});

Then('I see a link named "Bombasta"', async function(this: CustomWorld) {
  await expect(this.page.getByRole('link', { name: 'Bombasta' })).toBeVisible()
});
