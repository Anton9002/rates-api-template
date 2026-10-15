const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://shop.tl-academy.ee',
    extraHTTPHeaders: { Accept: 'application/json' },
  },
});
