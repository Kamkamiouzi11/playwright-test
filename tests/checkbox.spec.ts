import { test, expect } from '@playwright/test';

test('チェックボックスの操作と状態確認', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // 1つ目のチェックボックスを取得（チェックされていないことを確認）
  const firstCheckbox = page.locator('input[type="checkbox"]').first();
  await expect(firstCheckbox).not.toBeChecked();

  // チェックを入れる
  await firstCheckbox.check();

  // チェックが入ったことを確認
  await expect(firstCheckbox).toBeChecked();
});
