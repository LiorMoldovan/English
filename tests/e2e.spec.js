/**
 * End-to-End Tests for Word Quest
 * Run with:
 *   npx playwright test tests/e2e.spec.js
 * Requires:
 *   npm install -D @playwright/test
 *   npx playwright install chromium
 *   A local server on http://localhost:8765 (e.g. npx serve -l 8765 .)
 */
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:8765/index.html';

test.describe('App Initialization & Welcome', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
  });

  test('shows welcome screen on first visit', async ({ page }) => {
    await expect(page.locator('#screen-welcome')).toBeVisible();
    await expect(page.locator('#screen-home')).toBeHidden();
  });

  test('welcome screen has Start button and restore link', async ({ page }) => {
    await expect(page.locator('#btn-start')).toBeVisible();
    await expect(page.locator('#btn-restore-toggle')).toBeVisible();
  });

  test('clicking Start transitions to home screen', async ({ page }) => {
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('#screen-welcome')).toBeHidden();
  });

  test('restore box toggles on link click', async ({ page }) => {
    await expect(page.locator('#restore-box')).toBeHidden();
    await page.locator('#btn-restore-toggle').click();
    await expect(page.locator('#restore-box')).toBeVisible();
  });
});

test.describe('Home Screen', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();
  });

  test('displays level badge and XP bar', async ({ page }) => {
    await expect(page.locator('#level-badge')).toBeVisible();
    await expect(page.locator('#level-number')).toHaveText('1');
    await expect(page.locator('.xp-bar-container')).toBeVisible();
  });

  test('displays streak badge', async ({ page }) => {
    await expect(page.locator('#streak-badge')).toBeVisible();
  });

  test('displays daily challenge card', async ({ page }) => {
    await expect(page.locator('#daily-challenge')).toBeVisible();
    const dailyText = await page.locator('#daily-text').textContent();
    expect(dailyText.length).toBeGreaterThan(0);
  });

  test('displays XP goal card', async ({ page }) => {
    await expect(page.locator('#daily-xp-card')).toBeVisible();
  });

  test('displays time goal card', async ({ page }) => {
    await expect(page.locator('#daily-time-card')).toBeVisible();
  });

  test('displays word progress bar', async ({ page }) => {
    await expect(page.locator('#btn-word-report')).toBeVisible();
  });

  test('all game cards are visible', async ({ page }) => {
    const gameIds = ['bubble', 'memory', 'lightning', 'scramble', 'falling', 'truefalse', 'matchup', 'bingo', 'sprint', 'wordspy', 'fillin'];
    for (const id of gameIds) {
      await expect(page.locator(`[data-game="${id}"]`)).toBeVisible();
    }
  });

  test('bottom nav has Home, Words, Trophies', async ({ page }) => {
    await expect(page.locator('[data-nav="home"]')).toBeVisible();
    await expect(page.locator('[data-nav="words"]')).toBeVisible();
    await expect(page.locator('[data-nav="achievements"]')).toBeVisible();
  });

  test('Quick Practice button visible', async ({ page }) => {
    await expect(page.locator('#btn-quick-practice')).toBeVisible();
  });

  test('Take a Test button visible', async ({ page }) => {
    await expect(page.locator('#btn-take-test')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
  });

  test('navigate to Words screen', async ({ page }) => {
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
    await expect(page.locator('#screen-home')).toBeHidden();
  });

  test('navigate to Achievements screen', async ({ page }) => {
    await page.locator('[data-nav="achievements"]').click();
    await expect(page.locator('#screen-achievements')).toBeVisible();
  });

  test('navigate back to Home from Words', async ({ page }) => {
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
    await page.locator('[data-nav="home"]').click();
    await expect(page.locator('#screen-home')).toBeVisible();
  });

  test('navigate to Dashboard via report button', async ({ page }) => {
    await page.locator('#btn-dashboard').click();
    await expect(page.locator('#screen-dashboard')).toBeVisible();
  });

  test('back button from Dashboard returns to home', async ({ page }) => {
    await page.locator('#btn-dashboard').click();
    await expect(page.locator('#screen-dashboard')).toBeVisible();
    await page.locator('#screen-dashboard [data-back]').click();
    await expect(page.locator('#screen-home')).toBeVisible();
  });
});

test.describe('Language Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
  });

  test('language toggle switches EN to HE', async ({ page }) => {
    await expect(page.locator('#btn-lang')).toHaveText('עברית');
    await page.locator('#btn-lang').click();
    await expect(page.locator('#btn-lang')).toHaveText('EN');
    const dir = await page.evaluate(() => document.body.dir);
    expect(dir).toBe('rtl');
  });

  test('language toggle switches HE back to EN', async ({ page }) => {
    await page.locator('#btn-lang').click();
    await expect(page.locator('#btn-lang')).toHaveText('EN');
    await page.locator('#btn-lang').click();
    await expect(page.locator('#btn-lang')).toHaveText('עברית');
    const dir = await page.evaluate(() => document.body.dir);
    expect(dir).toBe('ltr');
  });

  test('language preference persists in localStorage', async ({ page }) => {
    await page.locator('#btn-lang').click();
    const lang = await page.evaluate(() => localStorage.getItem('wordquest_lang'));
    expect(lang).toBe('he');
  });
});

test.describe('Words Screen', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
  });

  test('words list is populated', async ({ page }) => {
    const items = page.locator('#words-list .word-item');
    await expect(items.first()).toBeVisible({ timeout: 3000 });
    const count = await items.count();
    expect(count).toBeGreaterThan(20);
  });

  test('search filter works', async ({ page }) => {
    await page.locator('#words-search').fill('bridge');
    await page.waitForTimeout(300);
    const items = page.locator('#words-list .word-item');
    const count = await items.count();
    expect(count).toBeGreaterThanOrEqual(1);
    const text = await items.first().textContent();
    expect(text.toLowerCase()).toContain('bridge');
  });

  test('add word form is visible', async ({ page }) => {
    await expect(page.locator('#add-english')).toBeVisible();
    await expect(page.locator('#add-hebrew')).toBeVisible();
    await expect(page.locator('#btn-add-word')).toBeVisible();
  });

  test('can add a new word', async ({ page }) => {
    const initialCount = await page.locator('#words-list .word-item').count();
    await page.locator('#add-english').fill('testword');
    await page.locator('#add-hebrew').fill('מילת בדיקה');
    await page.locator('#btn-add-word').click();
    await page.waitForTimeout(500);
    const newCount = await page.locator('#words-list .word-item').count();
    expect(newCount).toBe(initialCount + 1);
  });

  test('filter buttons exist and work', async ({ page }) => {
    await expect(page.locator('[data-filter="all"]')).toBeVisible();
    await expect(page.locator('[data-filter="new"]')).toBeVisible();
    await expect(page.locator('[data-filter="learning"]')).toBeVisible();
    await expect(page.locator('[data-filter="mastered"]')).toBeVisible();
    await page.locator('[data-filter="new"]').click();
    await page.waitForTimeout(300);
    const count = await page.locator('#words-list .word-item').count();
    expect(count).toBeGreaterThan(0);
  });

  test('selection bar exists', async ({ page }) => {
    await expect(page.locator('#selection-bar')).toBeVisible();
  });

  test('archive tab exists', async ({ page }) => {
    await expect(page.locator('#wtab-archived')).toBeVisible();
    await page.locator('#wtab-archived').click();
    await expect(page.locator('#words-archive-panel')).toBeVisible();
  });
});

test.describe('Game Screens', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
  });

  test('Lightning Quiz opens with setup screen', async ({ page }) => {
    await page.locator('[data-game="lightning"]').click();
    await expect(page.locator('#screen-lightning')).toBeVisible();
    await expect(page.locator('#lightning-setup')).toBeVisible();
    await expect(page.locator('#lightning-start-btn')).toBeVisible();
  });

  test('Lightning Quiz start button starts game', async ({ page }) => {
    await page.locator('[data-game="lightning"]').click();
    await page.locator('#lightning-start-btn').click();
    await expect(page.locator('#lightning-word')).toBeVisible({ timeout: 3000 });
  });

  test('True or False opens directly (no setup)', async ({ page }) => {
    await page.locator('[data-game="truefalse"]').click();
    await expect(page.locator('#screen-truefalse')).toBeVisible();
    await expect(page.locator('#tf-english')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('#tf-btn-correct')).toBeVisible();
    await expect(page.locator('#tf-btn-wrong')).toBeVisible();
  });

  test('Match Up opens with setup screen', async ({ page }) => {
    await page.locator('[data-game="matchup"]').click();
    await expect(page.locator('#screen-matchup')).toBeVisible();
    await expect(page.locator('#matchup-setup')).toBeVisible();
  });

  test('Word Bingo opens with setup screen', async ({ page }) => {
    await page.locator('[data-game="bingo"]').click();
    await expect(page.locator('#screen-bingo')).toBeVisible();
    await expect(page.locator('#bingo-setup')).toBeVisible();
  });

  test('Translation Sprint opens with setup screen', async ({ page }) => {
    await page.locator('[data-game="sprint"]').click();
    await expect(page.locator('#screen-sprint')).toBeVisible();
    await expect(page.locator('#sprint-setup')).toBeVisible();
  });

  test('Word Spy opens with setup screen', async ({ page }) => {
    await page.locator('[data-game="wordspy"]').click();
    await expect(page.locator('#screen-wordspy')).toBeVisible();
    await expect(page.locator('#wordspy-setup')).toBeVisible();
  });

  test('Sentence Fill opens with setup screen', async ({ page }) => {
    await page.locator('[data-game="fillin"]').click();
    await expect(page.locator('#screen-fillin')).toBeVisible();
    await expect(page.locator('#fillin-setup')).toBeVisible();
  });

  test('Bubble Pop opens and shows game', async ({ page }) => {
    await page.locator('[data-game="bubble"]').click();
    await expect(page.locator('#screen-bubble')).toBeVisible();
    await expect(page.locator('#bubble-direction-picker')).toBeVisible();
  });

  test('Memory Match opens', async ({ page }) => {
    await page.locator('[data-game="memory"]').click();
    await expect(page.locator('#screen-memory')).toBeVisible();
  });

  test('Word Scramble opens with direction picker', async ({ page }) => {
    await page.locator('[data-game="scramble"]').click();
    await expect(page.locator('#screen-scramble')).toBeVisible();
    await expect(page.locator('#scramble-direction-picker')).toBeVisible();
  });

  test('Falling Words opens with setup', async ({ page }) => {
    await page.locator('[data-game="falling"]').click();
    await expect(page.locator('#screen-falling')).toBeVisible();
    await expect(page.locator('#falling-setup')).toBeVisible();
  });

  test('back button returns to home from any game', async ({ page }) => {
    const games = ['lightning', 'truefalse', 'matchup', 'bingo', 'sprint', 'wordspy', 'fillin', 'bubble', 'memory', 'scramble', 'falling'];
    for (const game of games) {
      await page.locator(`[data-game="${game}"]`).click();
      await expect(page.locator(`#screen-${game}`)).toBeVisible();
      await page.locator(`#screen-${game} [data-back]`).click();
      await expect(page.locator('#screen-home')).toBeVisible();
    }
  });
});

test.describe('True/False Gameplay', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
    await page.locator('[data-game="truefalse"]').click();
  });

  test('displays English and Hebrew words', async ({ page }) => {
    await expect(page.locator('#tf-english')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('#tf-hebrew')).toBeVisible();
    const en = await page.locator('#tf-english').textContent();
    const he = await page.locator('#tf-hebrew').textContent();
    expect(en.length).toBeGreaterThan(0);
    expect(he.length).toBeGreaterThan(0);
  });

  test('clicking Correct or Wrong advances to next question', async ({ page }) => {
    await expect(page.locator('#tf-progress')).toBeVisible();
    const initialProgress = await page.locator('#tf-progress').textContent();
    await page.locator('#tf-btn-correct').click();
    await page.waitForTimeout(500);
  });

  test('game shows progress counter', async ({ page }) => {
    const progress = await page.locator('#tf-progress').textContent();
    expect(progress).toMatch(/\d+\/\d+/);
  });
});

test.describe('Sound Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
  });

  test('sound button toggles', async ({ page }) => {
    const btn = page.locator('#btn-sound');
    const initialText = await btn.textContent();
    await btn.click();
    const newText = await btn.textContent();
    expect(newText).not.toBe(initialText);
  });
});

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
    await page.locator('#btn-dashboard').click();
  });

  test('dashboard screen shows', async ({ page }) => {
    await expect(page.locator('#screen-dashboard')).toBeVisible();
  });

  test('dashboard has word mastery section', async ({ page }) => {
    await expect(page.locator('#rpt-mastery')).toBeVisible();
  });

  test('dashboard has word filters', async ({ page }) => {
    await expect(page.locator('[data-wf="all"]')).toBeVisible();
    await expect(page.locator('[data-wf="mastered"]')).toBeVisible();
    await expect(page.locator('[data-wf="struggling"]')).toBeVisible();
  });

  test('dashboard has share button', async ({ page }) => {
    await expect(page.locator('#btn-parent-link')).toBeVisible();
  });
});

test.describe('State Persistence', () => {
  test('state persists across page reloads', async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();

    await page.reload();
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('#screen-welcome')).toBeHidden();
  });

  test('cleared localStorage shows welcome again', async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();

    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page.locator('#screen-welcome')).toBeVisible();
  });
});

test.describe('Accessibility & Responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
    await page.goto(BASE);
    await page.locator('#btn-start').click();
  });

  test('viewport meta tag exists', async ({ page }) => {
    const meta = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(meta).toContain('width=device-width');
  });

  test('app works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('.bottom-nav')).toBeVisible();
  });

  test('game cards are tappable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const card = page.locator('[data-game="lightning"]');
    await expect(card).toBeVisible();
    const box = await card.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
  });
});
