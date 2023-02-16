import { Given } from '@cucumber/cucumber'

import { CustomWorld } from '../config/custom-world'

Given('I am on the application home page', async function(this: CustomWorld) {
  await this.page.goto('http://localhost:4200')
});