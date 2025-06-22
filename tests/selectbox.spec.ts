import { test, expect } from '@playwright/test';

test('セレクトボックスの選択と状態確認', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // セレクトボックスを取得
  const dropdown = page.locator('#dropdown');

  // 「Option 2」を選択
  await dropdown.selectOption('Option 2');

  // 選択された値が「Option 2」であることを確認
  await expect(dropdown).toHaveValue('2');
});
