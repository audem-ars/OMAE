import { test, expect } from '@playwright/test';
 test('loads homepage and shows hero', async ({ page }) => { await page.goto('/'); await expect(page.locator('h1')).toBeVisible(); });
