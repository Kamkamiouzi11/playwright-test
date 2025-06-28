import { test, expect } from '@playwright/test';

test('数値入力フィールドへの入力と確認', async ({ page }) => {
  // 入力ページへアクセス
  await page.goto('https://the-internet.herokuapp.com/inputs');

  // 数値入力フィールドを取得
  const input = page.locator('input[type="number"]');

  // 数値を入力
  await input.fill("123");  // ここに「123」を入力するコード

  // 入力された値が「123」であることを確認
  await await expect(input).toHaveValue("123") ;  // ここにバリデーションのコード
});