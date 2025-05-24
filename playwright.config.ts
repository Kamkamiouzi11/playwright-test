import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'on',       // ✅ 失敗時スクリーンショット
    video: 'off',            // ✅ テストごとに動画を保存
  },
  reporter: [['html']],     // ✅ HTML形式のレポートを出力
});