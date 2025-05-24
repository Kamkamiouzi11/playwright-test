import { test, expect } from '@playwright/test';

// 「Add Element」ボタンを押すとDeleteボタンが現れ、削除すると消える動作を確認するテスト
test('Add → Delete ボタンによる状態変化を検証する', async ({ page }) => {
  // ページにアクセス
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // 「Delete」ボタンが最初は存在しないことを確認
  await expect(page.locator('.added-manually')).toHaveCount(0);

  // 「Add Element」ボタンをクリック
  await page.click('button[onclick="addElement()"]');

  // 「Delete」ボタンが1つ表示されていることを確認
  await expect(page.locator('.added-manually')).toHaveCount(1);

  // 「Delete」ボタンをクリックして削除
  await page.click('.added-manually');

  // 「Delete」ボタンがなくなったことを再確認
  await expect(page.locator('.added-manually')).toHaveCount(0);
});
