import { test, expect } from '@playwright/test';

test('go to channel and subscribe', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('AieePro');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Aiee @Aiee•1.1K subscribers' }).click();
  await page.locator('#page-header').getByRole('button', { name: 'Subscribe' }).click();
  
});