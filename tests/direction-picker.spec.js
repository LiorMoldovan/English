/**
 * Direction Picker Verification Test
 * Run with: npx playwright test direction-picker.spec.js
 * Requires: npm init -y && npm install -D @playwright/test
 */
const { test, expect } = require('@playwright/test');

test.describe('Direction Pickers', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8765/index.html');
  });

  test('1. Welcome screen - click Start to reach home', async ({ page }) => {
    await expect(page.locator('#screen-welcome')).toBeVisible();
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();
  });

  test('2. Bubble Pop - direction picker visible and functional', async ({ page }) => {
    await page.locator('#btn-start').click();
    await page.locator('[data-game="bubble"]').click();

    const dirPicker = page.locator('#bubble-direction-picker');
    await expect(dirPicker).toBeVisible();
    await expect(dirPicker.locator('button:has-text("עברית → English")')).toBeVisible();
    await expect(dirPicker.locator('button:has-text("English → עברית")')).toBeVisible();

    // Click English → עברית
    await dirPicker.locator('[data-dir="en-to-he"]').click();

    // After clicking, game should start - picker hides, target bar shows
    await expect(page.locator('#bubble-target-bar')).toBeVisible();
    const targetText = await page.locator('#bubble-target').textContent();
    // In en-to-he mode, target should be English (Latin chars)
    expect(targetText).toMatch(/[a-zA-Z]/);

    // Bubbles should show Hebrew
    const bubbles = page.locator('.bubble');
    await expect(bubbles.first()).toBeVisible({ timeout: 3000 });
  });

  test('3. Word Scramble - direction picker visible and functional', async ({ page }) => {
    await page.locator('#btn-start').click();
    await page.locator('[data-game="scramble"]').click();

    const dirPicker = page.locator('#scramble-direction-picker');
    await expect(dirPicker).toBeVisible();
    await expect(dirPicker.locator('button:has-text("עברית → English")')).toBeVisible();
    await expect(dirPicker.locator('button:has-text("English → עברית")')).toBeVisible();

    await dirPicker.locator('[data-dir="en-to-he"]').click();

    await expect(page.locator('#scramble-clue-area')).toBeVisible();
    const clueText = await page.locator('#scramble-clue-text').textContent();
    // In en-to-he, clue is English
    expect(clueText).toMatch(/[a-zA-Z]/);
  });

  test('4. Falling Words - direction picker visible and functional', async ({ page }) => {
    await page.locator('#btn-start').click();
    await page.locator('[data-game="falling"]').click();

    const dirPicker = page.locator('#falling-direction-picker');
    await expect(dirPicker).toBeVisible();
    await expect(dirPicker.locator('button:has-text("עברית → English")')).toBeVisible();
    await expect(dirPicker.locator('button:has-text("English → עברית")')).toBeVisible();

    await dirPicker.locator('[data-dir="he-to-en"]').click();

    // Game starts - falling words appear
    await page.waitForSelector('.falling-word', { timeout: 5000 });
  });
});
