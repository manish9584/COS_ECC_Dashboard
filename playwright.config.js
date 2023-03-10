// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  timeout: 100 * 1000,
  expect: {
    
    timeout: 5000
  },
  
  reporter: 'html',
 
  use: {
    browserName: 'chromium',
    headless : false,
    screenshot: 'on',
    trace: 'on'
  },

};

module.exports = config;
