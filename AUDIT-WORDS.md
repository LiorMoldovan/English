# Word Quest — words.js Audit Report

**Date:** March 8, 2026  
**Scope:** `words.js` — logic gaps, design holes, problematic strategies

---

## 1. Mastery/Confidence System

### 1.1 `masteredCorrectCount` incremented on freebies — **CRITICAL**

**Problem:** When a correct answer is a freebie (within 30s of a mistake), the code still increments `masteredCorrectCount` if the word is already mastered. Freebies should not count toward the "7 correct after mastery" threshold for auto-archive.

**Scenario:** Word is mastered. User makes a mistake, corrects within 30s (freebie). `recordAnswer` does not increment `timesCorrect` or push to `recentAnswers`, but at lines 311–314 it still runs:
```js
if (nowMastered && correct) {
  m.masteredCorrectCount = (m.masteredCorrectCount || 0) + 1;
```
Since `correct` is true and `nowMastered` remains true, the freebie counts toward auto-archive. Seven such freebies could trigger auto-archive without real progress.

**Severity:** Critical — undermines mastery and auto-archive integrity.

---

### 1.2 `_syncMasteryLevel` vs `getWordConfidence` — different systems, can disagree — **MEDIUM**

**Problem:** Two separate systems:
- `_syncMasteryLevel`: numeric `masteryLevel` 0–5, uses `timesCorrect`, `gameModesCorrect.length`, and last 6 answers.
- `getWordConfidence`: string level (`mastered`, `almost`, etc.), uses last 6 answers or accuracy fallback, and does not require game modes for mastery.

**Scenario:** Word has 20 correct, 1 game mode, last 6 correct. `_syncMasteryLevel` → level 3 (needs modes ≥ 3 for level 5). `getWordConfidence` → `'mastered'` (recentCorrect ≥ 6). Result: `masteryLevel` = 3, confidence = `'mastered'`. Reverse: 19 correct, 3 modes, but last 6 include 2 wrong → `masteryLevel` 5, confidence `'learning'`.

**Severity:** Medium — confusing but not breaking; `autoArchiveMastered` uses `masteredSince` from confidence, so behavior is consistent for archiving.

---

### 1.3 `_recentMistakes` not persisted — **LOW**

**Problem:** `_recentMistakes` is in-memory only. After refresh, all mistake timestamps are lost.

**Scenario:** User makes a mistake, refreshes, then answers correctly. The correct answer is not treated as a freebie because the mistake timestamp is gone. This is acceptable (avoids gaming via refresh). The opposite (mistake → wait 30s → refresh → correct) also behaves correctly.

**Severity:** Low — acceptable design choice.

---

### 1.4 `recentAnswers` can exceed 10 in `recordArchivedAnswer` (wrong path) — **MEDIUM**

**Problem:** On wrong answer for an archived word, `recordArchivedAnswer` pushes `false` to `recentAnswers` but never caps length before calling `restoreWord`. The restored mastery can have `recentAnswers.length > 10`.

**Scenario:** Archived word has 10 entries in `recentAnswers`. User answers wrong. Code pushes `false` (length 11), then restores. Restored mastery has 11 entries.

**Severity:** Medium — small data bloat and possible downstream assumptions about max length.

---

### 1.5 SRS interval — freebie still updates `srsNextReview` — **LOW**

**Problem:** For freebies, `srsInterval` is unchanged, but `m.srsNextReview = now + (m.srsInterval * 86400000)` still runs. The next review date moves forward even though no real progress was recorded.

**Scenario:** Word at interval 4 days. User makes mistake, corrects within 30s. `srsNextReview` is updated as if a real correct answer occurred.

**Severity:** Low — may slightly delay reviews; not a major correctness bug.

---

### 1.6 `recordMappingResult` overwrites history — **LOW**

**Problem:** On correct mapping, `timesCorrect = 4` and `recentAnswers = [true, true, true, true]` overwrite existing data. `timesWrong` is left as-is.

**Scenario:** Word had 10 wrong, 2 correct. After correct mapping: `timesCorrect: 4`, `timesWrong: 10` → total 14, accuracy 28%. Design may be intentional (mapping as baseline), but it can produce odd accuracy values.

**Severity:** Low — likely intentional; document if so.

---

### 1.7 `masteredSince` only set when `getWordConfidence` is called — **MEDIUM**

**Problem:** `masteredSince` is set in `getWordConfidence` when `level === 'mastered'`. Words that are mastered by the rules but never have `getWordConfidence` called (e.g. restored from backup) may never get `masteredSince`, so `autoArchiveMastered` will skip them.

**Scenario:** Restore backup where a word has 20 correct, 3 modes, last 6 correct. If `getWordConfidence` is never called before `autoArchiveMastered`, `masteredSince` stays unset and the word is not archived.

**Severity:** Medium — some mastered words may never auto-archive.

---

## 2. Weighted Random Selection

### 2.1 Bucket percentages and rounding — **LOW**

**Problem:** With `target = 15`, `newCount + strugCount + learnCount + almostCount + masteredCount` can sum to 14 or 16 due to rounding. `archivedCount = target - sum` can be 0 or negative. For small pools this is acceptable.

**Severity:** Low.

---

### 2.2 No duplicate or distribution bugs found — **OK**

**Analysis:** `pickFrom` uses `!selected.find(s => s.id === w.id)` to avoid duplicates. Each word is in exactly one bucket. Fallback uses remaining words. Logic is sound.

---

## 3. Archive System

### 3.1 Wrong return value and orphan mastery when restoring with ID conflict — **CRITICAL**

**Problem:** When `recordAnswer` is called for an archived word with a wrong answer, `recordArchivedAnswer` calls `restoreWord(idx)`. If the original ID is taken, `restoreWord` assigns a new ID. But `recordAnswer` returns `this.getMastery(wordId)` (original ID). That creates a new mastery for the old ID, which no longer exists in `_words`, and returns the wrong mastery.

**Scenario:** Word 5 archived. New word added, gets id 5. User answers wrong on archived word 5. `restoreWord` creates word with id 6. `recordAnswer` returns `getMastery(5)`, creating orphan `_mastery[5]` and returning it instead of `_mastery[6]`.

**Severity:** Critical — orphan mastery data and wrong return value.

---

### 3.2 `_restoreArchivedOnWrong` is dead code — **LOW**

**Problem:** `_restoreArchivedOnWrong` is never called. `recordArchivedAnswer` already restores on wrong via `restoreWord(idx)`.

**Severity:** Low — dead code; remove or wire up.

---

### 3.3 Restored words not added to selection — **LOW**

**Problem:** `restoreWord` does not add the restored word to `_selection`. With an active selection, restored words are excluded from `_getActivePool()` and may not appear in games.

**Scenario:** User has 20 words selected. Archived word is restored on wrong. Restored word is not selected and does not appear in weighted random.

**Severity:** Low — may be intentional; UX impact is minor.

---

### 3.4 `recordArchivedAnswer` has no freebie logic — **LOW**

**Problem:** Archived words do not use the 30s freebie rule. A correct answer right after a wrong one still counts.

**Severity:** Low — may be intentional for archived words.

---

## 4. Drip System

**Note:** `initDrip` and `checkDrip` do not exist. The system uses `startDrip` and `promoteDrip`.

### 4.1 Archived words in drip block promotion — **CRITICAL**

**Problem:** `archiveWord` does not remove the word from `_drip.active` or `_drip.queue`. For an archived word, `_mastery[wordId]` is deleted, so `getMastery(id)` creates a new empty mastery. `promoteDrip` then sees `total < 4` and never promotes.

**Scenario:** Drip has words [1,2,3,4,5] active. User archives word 3. `_mastery[3]` is deleted. On next game start, `promoteDrip` runs; for id 3, `getMastery(3)` returns fresh mastery with total 0. `readyForMore` is false. Promotion never happens.

**Severity:** Critical — drip can be permanently stuck.

---

### 4.2 Drip accuracy threshold — **MEDIUM**

**Problem:** `promoteDrip` requires `accuracy > 50`. With 2 right and 2 wrong (50%), promotion is blocked.

**Scenario:** Word has 4 answers, 2 correct, 2 wrong. Accuracy = 50%. Promotion never happens until the user improves.

**Severity:** Medium — may be too strict; consider `>= 50` or a different rule.

---

### 4.3 Drip does not clean up when queue is empty — **LOW**

**Problem:** When `queue` is empty, `active` is never cleared. `hasDripActive()` stays true. User may expect a "drip complete" state.

**Severity:** Low — UX/design choice.

---

## 5. Data Repair (`_repairRecentAnswers`)

### 5.1 `timesCorrect: 0, timesWrong: 5` — **OK**

**Analysis:** `total = 5`, `correctRatio = 0`, `correctCount = 0`. `recentAnswers = [false, false, false, false, false]`. Behavior is correct.

---

### 5.2 Synthetic `recentAnswers` ordering — **LOW**

**Problem:** Repair builds `recentAnswers` as `[...wrongs, ...corrects]`, so all wrongs appear before corrects. Real history is usually interleaved. This can affect `last6` and confidence.

**Scenario:** Word had 5 wrong then 5 correct. Repair produces `[f,f,f,f,f,t,t,t,t,t]`. Last 6 are all true → `'mastered'`. If true history was mixed (e.g. wrong at the end), confidence would differ.

**Severity:** Low — repair is best-effort; better than empty.

---

### 5.3 Repair does not cap `recentAnswers` length — **LOW**

**Problem:** Repair creates up to `Math.min(total, 10)` entries. For `total > 10`, it still produces 10. No issue. For `total <= 10`, length matches. No bug found.

**Severity:** N/A.

---

## Summary Table

| # | Issue | Severity |
|---|-------|----------|
| 1.1 | `masteredCorrectCount` incremented on freebies | **Critical** |
| 1.2 | `_syncMasteryLevel` vs `getWordConfidence` can disagree | Medium |
| 1.3 | `_recentMistakes` not persisted | Low |
| 1.4 | `recentAnswers` can exceed 10 in archived wrong path | Medium |
| 1.5 | Freebie still updates `srsNextReview` | Low |
| 1.6 | `recordMappingResult` overwrites history | Low |
| 1.7 | `masteredSince` only set when `getWordConfidence` called | Medium |
| 2.1 | Bucket rounding with small target | Low |
| 3.1 | Wrong return + orphan mastery on restore with ID conflict | **Critical** |
| 3.2 | `_restoreArchivedOnWrong` dead code | Low |
| 3.3 | Restored words not added to selection | Low |
| 3.4 | No freebie logic for archived words | Low |
| 4.1 | Archived words in drip block promotion | **Critical** |
| 4.2 | Drip accuracy threshold `> 50` | Medium |
| 4.3 | Drip active never cleared when queue empty | Low |
| 5.2 | Synthetic `recentAnswers` ordering in repair | Low |

---

## Recommended Fixes (Priority Order)

1. **1.1** — Add `&& !isFreebie` to the `masteredCorrectCount` condition in `recordAnswer`.
2. **3.1** — Have `recordAnswer` use the restored word’s ID (from `restoreWord`’s return) when returning mastery for wrong archived answers.
3. **4.1** — Remove archived word IDs from `_drip.active` and `_drip.queue` in `archiveWord` (and in `archiveMultiple`).
4. **1.4** — Cap `recentAnswers` before `restoreWord` in `recordArchivedAnswer` when handling wrong answers.
5. **1.7** — Ensure `masteredSince` is set when loading/restoring mastered words, or call `getWordConfidence` during init for words with mastery data.
