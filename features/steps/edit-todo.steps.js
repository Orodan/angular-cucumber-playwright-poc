const { When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');

When('I click on the "Bombasto" link', async function() {
  await this.page.getByRole('link', { name: 'Bombasto' }).click();
});

When('I write "Bombasta" in the hero name field', async function() {
  await this.page.getByLabel('Hero name:').click();
  await this.page.getByLabel('Hero name:').fill('Bombasta');
});

When('I click on the "save" button', async function() {
  await this.page.getByRole('button', { name: 'save' }).click();
});

Then('I see a link named "Bombasta"', async function() {
  await expect(this.page.getByRole('link', { name: 'Bombasta' })).toBeVisible()
});
