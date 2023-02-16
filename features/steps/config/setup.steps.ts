
import { After, Before } from '@cucumber/cucumber'
import { chromium } from 'playwright'

import { CustomWorld } from './custom-world'

Before(async function(this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false })
  this.page = await this.browser.newPage()
})

After(async function(this: CustomWorld) {
  this.browser.close()
})