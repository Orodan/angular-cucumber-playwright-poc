const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');

When('I click on the "Heroes" link', async function() {
  await this.page.getByRole('link', { name: 'Heroes' }).click();
});

When('I write "Ironman" in the hero name field', async function() {
  await this.page.getByLabel('Hero name:').click();
  await this.page.getByLabel('Hero name:').fill('Ironman');
});

When('I click on the "Add hero" button', async function() {
  await this.page.getByRole('button', { name: 'Add hero' }).click();
});

Then('I see a link named "Ironman"', async function() {
  await expect(this.page.getByRole('link', { name: '21 Ironman' })).toBeVisible()
});
