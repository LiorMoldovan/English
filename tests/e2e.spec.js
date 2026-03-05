/**
 * End-to-End Tests for Word Quest
 * Run with:
 *   npx playwright test tests/e2e.spec.js --reporter=line
 * Requires:
 *   npm install -D @playwright/test
 *   npx playwright install chromium
 *   A local server on http://localhost:8765 (e.g. npx serve -l 8765 .)
 */
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:8765/index.html';

async function freshStart(page) {
  await page.goto(BASE);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForLoadState('domcontentloaded');
}

async function goHome(page) {
  await freshStart(page);
  await page.locator('#btn-start').click();
  await expect(page.locator('#screen-home')).toBeVisible();
}

function gameCard(page, id) {
  return page.locator(`#screen-home .game-card[data-game="${id}"]`);
}

test.describe('App Initialization & Welcome', () => {
  test('shows welcome screen on first visit', async ({ page }) => {
    await freshStart(page);
    await expect(page.locator('#screen-welcome')).toBeVisible();
    await expect(page.locator('#screen-home')).toBeHidden();
  });

  test('welcome screen has Start button and restore link', async ({ page }) => {
    await freshStart(page);
    await expect(page.locator('#btn-start')).toBeVisible();
    await expect(page.locator('#btn-restore-toggle')).toBeVisible();
  });

  test('clicking Start transitions to home screen', async ({ page }) => {
    await freshStart(page);
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('#screen-welcome')).toBeHidden();
  });

  test('restore box toggles on link click', async ({ page }) => {
    await freshStart(page);
    await expect(page.locator('#restore-box')).toBeHidden();
    await page.locator('#btn-restore-toggle').click();
    await expect(page.locator('#restore-box')).toBeVisible();
  });
});

test.describe('Home Screen', () => {
  test('displays level badge and XP bar', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#level-badge')).toBeVisible();
    await expect(page.locator('#level-number')).toHaveText('1');
    await expect(page.locator('.xp-bar-container')).toBeVisible();
  });

  test('displays streak badge', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#streak-badge')).toBeVisible();
  });

  test('displays daily challenge card', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#daily-challenge')).toBeVisible();
    const dailyText = await page.locator('#daily-text').textContent();
    expect(dailyText.length).toBeGreaterThan(0);
  });

  test('displays XP and time goal cards', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#daily-xp-card')).toBeVisible();
    await expect(page.locator('#daily-time-card')).toBeVisible();
  });

  test('displays word progress bar', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#btn-word-report')).toBeVisible();
  });

  test('all game cards are visible', async ({ page }) => {
    await goHome(page);
    const gameIds = ['bubble', 'memory', 'lightning', 'scramble', 'falling', 'truefalse', 'matchup', 'bingo', 'sprint', 'wordspy', 'fillin'];
    for (const id of gameIds) {
      await expect(gameCard(page, id)).toBeVisible();
    }
  });

  test('bottom nav has Home, Words, Trophies', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('[data-nav="home"]')).toBeVisible();
    await expect(page.locator('[data-nav="words"]')).toBeVisible();
    await expect(page.locator('[data-nav="achievements"]')).toBeVisible();
  });

  test('Quick Practice and Test buttons visible', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#btn-quick-practice')).toBeVisible();
    await expect(page.locator('#btn-take-test')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('navigate to Words screen and back', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
    await page.locator('[data-nav="home"]').click();
    await expect(page.locator('#screen-home')).toBeVisible();
  });

  test('navigate to Achievements screen', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="achievements"]').click();
    await expect(page.locator('#screen-achievements')).toBeVisible();
  });

  test('navigate to Dashboard and back', async ({ page }) => {
    await goHome(page);
    await page.locator('#btn-dashboard').click();
    await expect(page.locator('#screen-dashboard')).toBeVisible();
    await page.locator('#screen-dashboard [data-back]').click();
    await expect(page.locator('#screen-home')).toBeVisible();
  });
});

test.describe('Language Toggle', () => {
  test('language toggle switches EN to HE and back', async ({ page }) => {
    await goHome(page);
    await expect(page.locator('#btn-lang')).toHaveText('עברית');
    await page.locator('#btn-lang').click();
    await expect(page.locator('#btn-lang')).toHaveText('EN');
    const dir = await page.evaluate(() => document.body.dir);
    expect(dir).toBe('rtl');

    await page.locator('#btn-lang').click();
    await expect(page.locator('#btn-lang')).toHaveText('עברית');
    const dir2 = await page.evaluate(() => document.body.dir);
    expect(dir2).toBe('ltr');
  });

  test('language preference persists in localStorage', async ({ page }) => {
    await goHome(page);
    await page.locator('#btn-lang').click();
    const lang = await page.evaluate(() => localStorage.getItem('wordquest_lang'));
    expect(lang).toBe('he');
  });
});

test.describe('Words Screen', () => {
  test('words list is populated', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
    const items = page.locator('#words-list .word-row');
    await expect(items.first()).toBeVisible({ timeout: 5000 });
    const count = await items.count();
    expect(count).toBeGreaterThan(20);
  });

  test('search filter works', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
    await page.waitForTimeout(500);
    await page.locator('#words-search').fill('bridge');
    await page.waitForTimeout(500);
    const items = page.locator('#words-list .word-row');
    const count = await items.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('can add a new word', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#screen-words')).toBeVisible();
    await page.waitForTimeout(500);
    const initialCount = await page.locator('#words-list .word-row').count();
    await page.locator('#add-english').fill('testword');
    await page.locator('#add-hebrew').fill('מילת בדיקה');
    await page.locator('#btn-add-word').click();
    await page.waitForTimeout(500);
    const newCount = await page.locator('#words-list .word-row').count();
    expect(newCount).toBe(initialCount + 1);
  });

  test('filter buttons work', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="words"]').click();
    await page.waitForTimeout(500);
    await expect(page.locator('[data-filter="all"]')).toBeVisible();
    await expect(page.locator('[data-filter="new"]')).toBeVisible();
    await page.locator('[data-filter="new"]').click();
    await page.waitForTimeout(300);
    const count = await page.locator('#words-list .word-row').count();
    expect(count).toBeGreaterThan(0);
  });

  test('archive tab exists', async ({ page }) => {
    await goHome(page);
    await page.locator('[data-nav="words"]').click();
    await expect(page.locator('#wtab-archived')).toBeVisible();
    await page.locator('#wtab-archived').click();
    await expect(page.locator('#words-archive-panel')).toBeVisible();
  });
});

test.describe('Game Screens', () => {
  test('Lightning Quiz opens with setup', async ({ page }) => {
    await goHome(page);
    await gameCard(page, 'lightning').click();
    await expect(page.locator('#screen-lightning')).toBeVisible();
    await expect(page.locator('#lightning-setup')).toBeVisible();
  });

  test('Lightning Quiz start button starts game', async ({ page }) => {
    await goHome(page);
    await gameCard(page, 'lightning').click();
    await page.locator('#lightning-start-btn').click();
    await expect(page.locator('#lightning-word')).toBeVisible({ timeout: 3000 });
  });

  test('True or False opens directly', async ({ page }) => {
    await goHome(page);
    await gameCard(page, 'truefalse').click();
    await expect(page.locator('#screen-truefalse')).toBeVisible();
    await expect(page.locator('#tf-english')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('#tf-btn-correct')).toBeVisible();
    await expect(page.locator('#tf-btn-wrong')).toBeVisible();
  });

  test('Match Up, Bingo, Sprint, WordSpy, Fillin open with setup', async ({ page }) => {
    const games = [
      { id: 'matchup', setup: '#matchup-setup' },
      { id: 'bingo', setup: '#bingo-setup' },
      { id: 'sprint', setup: '#sprint-setup' },
      { id: 'wordspy', setup: '#wordspy-setup' },
      { id: 'fillin', setup: '#fillin-setup' },
    ];
    for (const g of games) {
      await goHome(page);
      await gameCard(page, g.id).click();
      await expect(page.locator(`#screen-${g.id}`)).toBeVisible();
      await expect(page.locator(g.setup)).toBeVisible();
      await page.locator(`#screen-${g.id} [data-back]`).click();
      await expect(page.locator('#screen-home')).toBeVisible();
    }
  });

  test('Bubble Pop, Memory Match, Scramble open', async ({ page }) => {
    const games = ['bubble', 'memory', 'scramble'];
    for (const id of games) {
      await goHome(page);
      await gameCard(page, id).click();
      await expect(page.locator(`#screen-${id}`)).toBeVisible();
      await page.locator(`#screen-${id} [data-back]`).click();
      await expect(page.locator('#screen-home')).toBeVisible();
    }
  });

  test('Falling Words opens with setup', async ({ page }) => {
    await goHome(page);
    await gameCard(page, 'falling').click();
    await expect(page.locator('#screen-falling')).toBeVisible();
    await expect(page.locator('#falling-setup')).toBeVisible();
  });
});

test.describe('True/False Gameplay', () => {
  test('displays word pair and progress', async ({ page }) => {
    await goHome(page);
    await gameCard(page, 'truefalse').click();
    await expect(page.locator('#tf-english')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('#tf-hebrew')).toBeVisible();
    const en = await page.locator('#tf-english').textContent();
    const he = await page.locator('#tf-hebrew').textContent();
    expect(en.length).toBeGreaterThan(0);
    expect(he.length).toBeGreaterThan(0);
    const progress = await page.locator('#tf-progress').textContent();
    expect(progress).toMatch(/\d+\/\d+/);
  });
});

test.describe('Sound Toggle', () => {
  test('sound button toggles', async ({ page }) => {
    await goHome(page);
    const btn = page.locator('#btn-sound');
    const initialText = await btn.textContent();
    await btn.click();
    const newText = await btn.textContent();
    expect(newText).not.toBe(initialText);
  });
});

test.describe('Dashboard', () => {
  test('dashboard shows with sections', async ({ page }) => {
    await goHome(page);
    await page.locator('#btn-dashboard').click();
    await expect(page.locator('#screen-dashboard')).toBeVisible();
    await expect(page.locator('#rpt-mastery')).toBeVisible();
    await expect(page.locator('#screen-dashboard [data-wf="all"]')).toBeVisible();
    await expect(page.locator('#btn-parent-link')).toBeVisible();
  });
});

test.describe('State Persistence', () => {
  test('state persists across page reloads', async ({ page }) => {
    await freshStart(page);
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();
    await page.reload();
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('#screen-welcome')).toBeHidden();
  });

  test('cleared localStorage shows welcome again', async ({ page }) => {
    await freshStart(page);
    await page.locator('#btn-start').click();
    await expect(page.locator('#screen-home')).toBeVisible();
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await expect(page.locator('#screen-welcome')).toBeVisible();
  });
});

test.describe('Accessibility & Responsiveness', () => {
  test('viewport meta tag exists', async ({ page }) => {
    await goHome(page);
    const meta = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(meta).toContain('width=device-width');
  });

  test('app works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await goHome(page);
    await expect(page.locator('#screen-home')).toBeVisible();
    await expect(page.locator('.bottom-nav')).toBeVisible();
  });

  test('game cards are tappable size on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await goHome(page);
    const card = gameCard(page, 'lightning');
    await expect(card).toBeVisible();
    const box = await card.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
  });
});
