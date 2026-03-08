// Logic tests for Word Quest core systems
// Run with: node tests/logic-tests.js

let passed = 0, failed = 0;
function assert(condition, name) {
  if (condition) { passed++; console.log(`  PASS: ${name}`); }
  else { failed++; console.error(`  FAIL: ${name}`); }
}

// ===== Mock localStorage =====
const storage = {};
const localStorage = {
  getItem(k) { return storage[k] || null; },
  setItem(k, v) { storage[k] = v; },
  removeItem(k) { delete storage[k]; },
  clear() { Object.keys(storage).forEach(k => delete storage[k]); }
};
global.localStorage = localStorage;
global.Date._real = Date;

// ===== Load source files =====
const fs = require('fs');

const wordsSource = fs.readFileSync('words.js', 'utf8');
const wrappedSource = `(function(localStorage) { ${wordsSource}; return { DEFAULT_WORDS, WordManager }; })`;
const factory = eval(wrappedSource);
const { DEFAULT_WORDS, WordManager: WM } = factory(localStorage);

// ===== TEST 1: WordManager Initialization =====
console.log('\n=== TEST 1: WordManager Init ===');
WM.init();
assert(WM.getAll().length > 0, 'Words loaded');
assert(WM.getCount() > 20, 'Has more than 20 words');
assert(WM._selection.size === 0, 'Empty selection on init');

// ===== TEST 2: Mastery defaults =====
console.log('\n=== TEST 2: Mastery Defaults ===');
const m = WM.getMastery(0);
assert(m.timesCorrect === 0, 'timesCorrect starts at 0');
assert(m.timesWrong === 0, 'timesWrong starts at 0');
assert(m.masteryLevel === 0, 'masteryLevel starts at 0');
assert(Array.isArray(m.gameModesCorrect), 'gameModesCorrect is array');
assert(m.lastSeen === null, 'lastSeen starts null');
assert(Array.isArray(m.recentAnswers), 'recentAnswers is array');

// ===== TEST 3: Record correct answer =====
console.log('\n=== TEST 3: Record Correct Answer ===');
WM.recordAnswer(0, true, 'lightning');
const m2 = WM.getMastery(0);
assert(m2.timesCorrect === 1, 'timesCorrect incremented');
assert(m2.timesWrong === 0, 'timesWrong unchanged');
assert(m2.lastSeen !== null, 'lastSeen updated');
assert(m2.recentAnswers.length === 1, 'recentAnswers has 1 entry');
assert(m2.recentAnswers[0] === true, 'recentAnswers[0] is true');
assert(m2.gameModesCorrect.includes('lightning'), 'game mode recorded');

// ===== TEST 4: Record wrong answer =====
console.log('\n=== TEST 4: Record Wrong Answer ===');
WM.recordAnswer(1, false, 'bubble');
const m3 = WM.getMastery(1);
assert(m3.timesWrong === 1, 'timesWrong incremented');
assert(m3.timesCorrect === 0, 'timesCorrect unchanged');
assert(m3.recentAnswers[0] === false, 'recentAnswers[0] is false');

// ===== TEST 5: Freebie logic (correct within 30s of mistake) =====
console.log('\n=== TEST 5: Freebie Logic ===');
WM.recordAnswer(5, false, 'scramble');
const before = WM.getMastery(5);
const wrongCount = before.timesWrong;
const correctBefore = before.timesCorrect;
WM.recordAnswer(5, true, 'scramble'); // within 30s — should be freebie
const after = WM.getMastery(5);
assert(after.timesCorrect === correctBefore, 'Freebie: timesCorrect NOT incremented');
assert(after.timesWrong === wrongCount, 'Freebie: timesWrong unchanged after freebie');
assert(!after.recentAnswers.includes(true) || after.recentAnswers.filter(a => a === true).length === correctBefore,
  'Freebie: true not added to recentAnswers');

// ===== TEST 6: Non-freebie correct (after 30s) =====
console.log('\n=== TEST 6: Non-Freebie (>30s) ===');
WM._recentMistakes = {}; // clear
WM._recentMistakes[10] = Date.now() - 60000; // mistake 60s ago
WM.recordAnswer(10, true, 'truefalse');
const m6 = WM.getMastery(10);
assert(m6.timesCorrect === 1, 'Non-freebie: timesCorrect incremented');

// ===== TEST 7: Word Strength — unseen =====
console.log('\n=== TEST 7: Word Strength ===');
const s1 = WM.getWordStrength(99); // never answered
assert(s1.label === 'unseen', 'Unseen word gets unseen label');
assert(s1.score === 0, 'Unseen word score is 0');

// ===== TEST 8: Word Strength — 1 correct should NOT be mastered =====
console.log('\n=== TEST 8: Strength after 1 correct ===');
localStorage.clear();
WM.init();
WM.recordAnswer(0, true, 'lightning');
const s2 = WM.getWordStrength(0);
assert(s2.label !== 'mastered', 'Word with 1 correct is NOT mastered');
assert(s2.accuracy === 100, 'Accuracy is 100%');

// ===== TEST 9: Mastery requires 6 recent correct =====
console.log('\n=== TEST 9: Mastery Criteria ===');
localStorage.clear();
WM.init();
WM._recentMistakes = {};
// 6 correct in mode 1 — confidence checks recentCorrect >= 6
for (let i = 0; i < 6; i++) {
  WM._recentMistakes = {};
  WM.recordAnswer(3, true, 'lightning');
}
const c1 = WM.getWordConfidence(3);
assert(c1.level === 'mastered', 'Mastered with 6 recent correct');
assert(c1.streak >= 6, 'Streak is 6');
assert(c1.modesCount === 1, 'Only 1 mode');
assert(c1.pctToMastery === 100, 'pctToMastery is 100');

const s3 = WM.getWordStrength(3);
assert(s3.label === 'mastered', 'getWordStrength also returns mastered');

// ===== TEST 10: Mastery lost after wrong answer =====
console.log('\n=== TEST 10: Mastery Lost on Wrong ===');
WM._recentMistakes = {};
WM.recordAnswer(3, false, 'lightning');
const c3 = WM.getWordConfidence(3);
assert(c3.level !== 'mastered', 'No longer mastered after wrong answer');
assert(c3.streak < 6, 'Streak below mastery threshold');

// ===== TEST 11: Selection mechanics =====
console.log('\n=== TEST 11: Selection ===');
localStorage.clear();
WM.init();
assert(!WM.hasActiveSelection(), 'No selection initially');
WM.toggleSelection(0);
WM.toggleSelection(1);
WM.toggleSelection(2);
assert(WM.getSelectionCount() === 3, '3 words selected');
assert(WM.isSelected(0), 'Word 0 selected');
WM.toggleSelection(0); // deselect
assert(!WM.isSelected(0), 'Word 0 deselected');
assert(WM.getSelectionCount() === 2, '2 words after deselect');

// ===== TEST 12: TempPool =====
console.log('\n=== TEST 12: TempPool ===');
WM.clearSelection(); // clear leftovers from TEST 11
const word5 = WM.getAll().find(w => w.id === 5);
const word6 = WM.getAll().find(w => w.id === 6);
WM.setTempPool([word5, word6]);
const pool = WM._getActivePool();
assert(pool.length === 2, 'TempPool has 2 words');
assert(pool.find(w => w.id === 5), 'TempPool contains word 5');
WM.clearTempPool();
const pool2 = WM._getActivePool();
assert(pool2.length > 2, 'Pool restored after clearTempPool');

// ===== TEST 13: TempPool takes priority over selection =====
console.log('\n=== TEST 13: TempPool priority over selection ===');
WM.selectAll();
const selCount = WM.getSelectionCount();
assert(selCount > 0, 'Selection active');
WM.setTempPool([word5]);
const pool3 = WM._getActivePool();
assert(pool3.length === 1, 'TempPool overrides selection');
WM.clearTempPool();
const pool4 = WM._getActivePool();
assert(pool4.length === selCount, 'Selection restored after clearing tempPool');
WM.clearSelection();

// ===== TEST 14: getWeightedRandom returns correct count =====
console.log('\n=== TEST 14: getWeightedRandom ===');
localStorage.clear();
WM.init();
const wr1 = WM.getWeightedRandom(10);
assert(wr1.length >= 10, 'getWeightedRandom returns at least requested count');
const ids = wr1.map(w => w.id);
const unique = new Set(ids);
assert(unique.size === wr1.length, 'All returned words are unique');

// ===== TEST 15: getWeightedRandom with exclude =====
console.log('\n=== TEST 15: getWeightedRandom exclude ===');
const wr2 = WM.getWeightedRandom(5, [{ id: 0 }, { id: 1 }, { id: 2 }]);
const excludedFound = wr2.find(w => w.id === 0 || w.id === 1 || w.id === 2);
assert(!excludedFound, 'Excluded words not in result');

// ===== TEST 16: getRandom distractor similarity =====
console.log('\n=== TEST 16: getRandom distractors ===');
const target = WM.getAll().find(w => w.english === 'bridge');
const distractors = WM.getRandom(3, [target]);
assert(distractors.length === 3, 'getRandom returns 3 distractors');
const hasTarget = distractors.find(w => w.id === target.id);
assert(!hasTarget, 'Target not in distractors');

// ===== TEST 17: Word CRUD =====
console.log('\n=== TEST 17: Word CRUD ===');
localStorage.clear();
WM.init();
const initialCount = WM.getCount();
const newWord = WM.addWord('test', 'בדיקה');
assert(newWord.id > 0, 'New word has ID');
assert(WM.getCount() === initialCount + 1, 'Count increased after add');
const edited = WM.editWord(newWord.id, 'tested', 'נבדק');
assert(edited, 'editWord returns true');
const found = WM.getAll().find(w => w.id === newWord.id);
assert(found.english === 'tested', 'Word edited successfully');

// ===== TEST 18: deleteWord minimum constraint =====
console.log('\n=== TEST 18: Delete minimum constraint ===');
// Should not delete if count <= 20
localStorage.clear();
WM.init();
// Delete words until we have exactly 21
while (WM.getCount() > 21) {
  const last = WM.getAll()[WM.getAll().length - 1];
  WM.deleteWord(last.id);
}
assert(WM.getCount() === 21, 'Down to 21 words');
const del1 = WM.deleteWord(WM.getAll()[0].id);
assert(del1 === true, 'Can delete when > 20');
assert(WM.getCount() === 20, 'Now at 20');
const del2 = WM.deleteWord(WM.getAll()[0].id);
assert(del2 === false, 'Cannot delete when at 20');
assert(WM.getCount() === 20, 'Still at 20');

// ===== TEST 19: Confidence levels progression =====
console.log('\n=== TEST 19: Confidence progression ===');
localStorage.clear();
WM.init();
const c0 = WM.getWordConfidence(0);
assert(c0.level === 'not_started', 'Not started initially');

WM._recentMistakes = {};
WM.recordAnswer(0, false, 'lightning');
const c0a = WM.getWordConfidence(0);
assert(c0a.level === 'struggling', 'Struggling after wrong answer');

WM._recentMistakes = {};
WM.recordAnswer(0, true, 'lightning');
const c0b = WM.getWordConfidence(0);
assert(c0b.level === 'learning' || c0b.level === 'struggling', 'Learning or struggling after 1 right 1 wrong');

// ===== TEST 20: recentAnswers cap at 8 =====
console.log('\n=== TEST 20: recentAnswers cap ===');
localStorage.clear();
WM.init();
for (let i = 0; i < 12; i++) {
  WM._recentMistakes = {};
  WM.recordAnswer(0, true, 'lightning');
}
const m20 = WM.getMastery(0);
assert(m20.recentAnswers.length === 10, 'recentAnswers capped at 10');

// ===== TEST 21: SRS interval growth =====
console.log('\n=== TEST 21: SRS interval ===');
localStorage.clear();
WM.init();
WM._recentMistakes = {};
WM.recordAnswer(0, true, 'lightning');
const srs1 = WM.getMastery(0).srsInterval;
WM._recentMistakes = {};
WM.recordAnswer(0, true, 'lightning');
const srs2 = WM.getMastery(0).srsInterval;
assert(srs2 > srs1, 'SRS interval grows on correct');
assert(srs2 <= 30, 'SRS interval capped at 30');

WM._recentMistakes = {};
WM.recordAnswer(0, false, 'lightning');
const srs3 = WM.getMastery(0).srsInterval;
assert(srs3 === 1, 'SRS interval resets to 1 on wrong');

// ===== TEST 22: Stale words detection =====
console.log('\n=== TEST 22: Stale words ===');
localStorage.clear();
WM.init();
const oldTime = Date.now() - (10 * 86400000); // 10 days ago
WM._mastery[0] = { timesCorrect: 3, timesWrong: 1, masteryLevel: 1, gameModesCorrect: ['lightning'], lastSeen: oldTime, srsInterval: 1, srsNextReview: oldTime + 86400000, recentAnswers: [true, true, true] };
WM._saveMastery();
const stale = WM.getStaleWords(7);
assert(stale.find(w => w.id === 0), 'Word 0 detected as stale (10 days > 7 days)');
const notStale = WM.getStaleWords(14);
assert(!notStale.find(w => w.id === 0), 'Word 0 not stale with 14 day threshold');

// ===== TEST 23: Strength score reflects confidence =====
console.log('\n=== TEST 23: Strength reflects confidence ===');
localStorage.clear();
WM.init();
WM._mastery[0] = { timesCorrect: 5, timesWrong: 0, masteryLevel: 1, gameModesCorrect: ['lightning'], lastSeen: Date.now(), srsInterval: 4, srsNextReview: null, recentAnswers: [true, true, true, true, true] };
const s23 = WM.getWordStrength(0);
assert(s23.score > 0, 'Score is positive for practiced word');
assert(s23.label === 'good', 'Label is good with 5 recent correct');
WM._mastery[0].recentAnswers = [true, true, true, true, true, true];
const s23b = WM.getWordStrength(0);
assert(s23b.score === 100, 'Score is 100 when mastered');
assert(s23b.label === 'mastered', 'Label is mastered with 6 recent correct');

// ===== TEST 24: Bulk selection by status =====
console.log('\n=== TEST 24: Bulk selection helpers ===');
localStorage.clear();
WM.init();
WM.selectAll();
assert(WM.getSelectionCount() === WM.getCount(), 'selectAll selects all');
WM.clearSelection();
assert(WM.getSelectionCount() === 0, 'clearSelection clears all');

// ===== TEST 25: getSelectedWordsProgress with no selection =====
console.log('\n=== TEST 25: SelectedWordsProgress empty ===');
localStorage.clear();
WM.init();
const sp = WM.getSelectedWordsProgress();
assert(sp.total === 0, 'No words in progress when no selection');
assert(sp.ready === false, 'Not ready when no selection');

// ===== TEST 26: getSelectedWordsProgress with selection =====
console.log('\n=== TEST 26: SelectedWordsProgress with words ===');
WM.toggleSelection(0);
WM.toggleSelection(1);
WM.toggleSelection(2);
const sp2 = WM.getSelectedWordsProgress();
assert(sp2.total === 3, '3 words in progress');
assert(sp2.not_started === 3, 'All not started');
assert(sp2.pct === 0, '0% mastered');

// ===== TEST 27: Archive word =====
console.log('\n=== TEST 27: Archive ===');
localStorage.clear();
WM.init();
const preArchiveCount = WM.getCount();
const archWord = WM.getAll()[0];
const archResult = WM.archiveWord(archWord.id);
assert(archResult === true, 'archiveWord returns true');
assert(WM.getCount() === preArchiveCount - 1, 'Word count decreased');
assert(WM.getArchivedCount() === 1, 'Archive has 1 entry');
const archived = WM.getArchived();
assert(archived[0].word.english === archWord.english, 'Archived word matches');

// ===== TEST 28: Restore word =====
console.log('\n=== TEST 28: Restore ===');
const restored = WM.restoreWord(0);
assert(restored !== false, 'restoreWord returns word');
assert(restored.english === archWord.english, 'Restored word matches');
assert(WM.getCount() === preArchiveCount, 'Word count restored');
assert(WM.getArchivedCount() === 0, 'Archive empty after restore');

// ===== TEST 29: Archive multiple =====
console.log('\n=== TEST 29: Archive multiple ===');
localStorage.clear();
WM.init();
const archIds = WM.getAll().slice(0, 3).map(w => w.id);
const archCount = WM.archiveMultiple(archIds);
assert(archCount === 3, '3 words archived');
assert(WM.getArchivedCount() === 3, 'Archive has 3 entries');

// ===== TEST 30: Drip system =====
console.log('\n=== TEST 30: Drip ===');
localStorage.clear();
WM.init();
assert(!WM.hasDripActive(), 'No drip initially');
const dripIds = WM.getAll().slice(0, 12).map(w => w.id);
WM.startDrip(dripIds, 5);
assert(WM.hasDripActive(), 'Drip active after start');
const status = WM.getDripStatus();
assert(status.active === 5, '5 active in drip');
assert(status.queued === 7, '7 queued in drip');
assert(WM.getSelectionCount() === 5, '5 words auto-selected');

// ===== TEST 31: Drip promote (not ready) =====
console.log('\n=== TEST 31: Drip promote not ready ===');
const promoted1 = WM.promoteDrip();
assert(promoted1 === 0, 'No promotion when words not practiced enough');

// ===== TEST 32: Drip promote (ready) =====
console.log('\n=== TEST 32: Drip promote ready ===');
WM._drip.active.forEach(id => {
  WM._recentMistakes = {};
  for (let i = 0; i < 5; i++) { WM._recentMistakes = {}; WM.recordAnswer(id, true, 'lightning'); }
});
const promoted2 = WM.promoteDrip();
assert(promoted2 === 3, '3 new words promoted');
assert(WM.getDripStatus().active === 8, '8 active after promotion');
assert(WM.getDripStatus().queued === 4, '4 remaining in queue');
assert(WM.getSelectionCount() === 8, '8 words selected');

// ===== TEST 33: Clear drip =====
console.log('\n=== TEST 33: Clear drip ===');
WM.clearDrip();
assert(!WM.hasDripActive(), 'Drip cleared');

// ===== SUMMARY =====
console.log('\n=============================');
console.log(`RESULTS: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);
console.log('=============================');
process.exit(failed > 0 ? 1 : 0);
