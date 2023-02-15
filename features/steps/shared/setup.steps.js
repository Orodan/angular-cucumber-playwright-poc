const { After, Before } = require('@cucumber/cucumber')
const playwright = require('playwright')

Before(async function() {
  this.browser = await playwright['chromium'].launch({ headless: false })
  this.page = await this.browser.newPage()
})

After(async function() {
  this.browser.close()
})