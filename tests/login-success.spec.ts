import { test, expect } from '@playwright/test';

test('ログイン→操作→バリデーションの一連フロー', async ({ page }) => {
  // 1. ログインページにアクセス
  await page.goto('https://the-internet.herokuapp.com/login');

  // 2. ユーザー名とパスワードを入力
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // 3. ログインボタンをクリック
  await page.click('button[type="submit"]');

  // 4. ログイン成功ページに遷移したか確認
  await expect(page).toHaveURL(/.*secure/);

  // 5. 成功メッセージが表示されていることを確認
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});
