const { test, expect } = require('@playwright/test');

test('トップページにタイトルがあること', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
