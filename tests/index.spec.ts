import { expect, test } from '@playwright/test';

test('home page counter', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Vite/);

  const counterButton = page.locator('text=count is');

  await expect(counterButton).toHaveText('count is 0');

  await counterButton.click();

  await expect(counterButton).toHaveText('count is 1');
});
