import { test, expect } from '@playwright/test';

test('filename with emoji', async ({ page }) => {
  await page.goto('/index.html');  
  await page.locator('#file').setInputFiles('🍟_test.txt');
  await page.getByRole('button', { name: 'POST' }).click();
});