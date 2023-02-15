const { Given } = require('@cucumber/cucumber');

Given('I am on the application home page', async function() {
  await this.page.goto('http://localhost:4200')
});