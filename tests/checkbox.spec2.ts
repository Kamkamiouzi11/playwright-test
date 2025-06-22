test('チェックボックスの操作テスト', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox1 = page.locator('input[type="checkbox"]').first();
  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  // チェックされてなければONにする
  if (!(await checkbox1.isChecked())) {
    await checkbox1.check();
  }

  // すでにチェックされていればOFFにする
  if (await checkbox2.isChecked()) {
    await checkbox2.uncheck();
  }

  // 検証
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).not.toBeChecked();
});
