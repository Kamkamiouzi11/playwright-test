import { test, expect } from '@playwright/test';
// Playwrightのテスト関数とアサーションを読み込む

test('ログイン失敗時にエラーメッセージが表示されること', async ({ page }) => {
  // テストケース名：意図的に失敗するパスワードでログイン

  await page.goto('https://the-internet.herokuapp.com/login');
  // ログイン画面にアクセスする

  await page.fill('#username', 'tomsmith');
  // 正しいユーザー名を入力

  await page.fill('#password', 'WrongPassword');
  // 間違ったパスワードを入力

  await page.click('button[type="submit"]');
  // ログインボタンをクリック

  await expect(page).not.toHaveURL(/.*secure/);
  // ログイン成功画面（/secure）に遷移していないことを確認

  await expect(page.locator('#flash')).toContainText('Your password is invalid!');
  // エラーメッセージに「Your password is invalid!」が含まれることを検証
});
