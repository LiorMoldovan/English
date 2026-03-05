// App logic tests for GameState, Progress, DailyChallenge, Achievements, T
// Run with: node tests/app-logic-tests.js

let passed = 0, failed = 0;
function assert(condition, name) {
  if (condition) { passed++; console.log(`  PASS: ${name}`); }
  else { failed++; console.error(`  FAIL: ${name}`); }
}

// ===== Mock environment =====
const storage = {};
const localStorage = {
  getItem(k) { return storage[k] || null; },
  setItem(k, v) { storage[k] = v; },
  removeItem(k) { delete storage[k]; },
  clear() { Object.keys(storage).forEach(k => delete storage[k]); }
};
global.localStorage = localStorage;

const mockCtx = {
  clearRect() {}, save() {}, restore() {}, translate() {}, rotate() {},
  fillRect() {}, fillStyle: '', globalAlpha: 1
};
const mockElements = {};
global.document = {
  _listeners: {},
  addEventListener(event, fn) { (this._listeners[event] = this._listeners[event] || []).push(fn); },
  getElementById(id) {
    if (!mockElements[id]) {
      const el = {
        textContent: '', className: '', innerHTML: '',
        style: { width: '', animation: '', visibility: '' },
        classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
        parentElement: { style: {} },
        offsetHeight: 0, width: 400, height: 800,
        setAttribute() {},
        addEventListener() {},
        querySelector() { return null; },
        querySelectorAll() { return []; },
        remove() {},
        getContext() { return mockCtx; }
      };
      mockElements[id] = el;
    }
    return mockElements[id];
  },
  querySelectorAll() { return []; },
  querySelector() { return null; },
  createElement(tag) {
    return { className: '', innerHTML: '', style: {}, classList: { add() {}, remove() {} }, remove() {},
      appendChild() {}, setAttribute() {}, addEventListener() {} };
  },
  body: { dir: 'ltr', classList: { toggle() {} }, appendChild() {} }
};

global.window = {
  location: { origin: 'https://word-quest-tau.vercel.app', pathname: '/', search: '' },
  addEventListener() {},
  matchMedia() { return { matches: false }; },
  speechSynthesis: { getVoices() { return []; }, speak() {}, cancel() {} },
  SpeechSynthesisUtterance: function() { this.lang=''; this.rate=1; this.text=''; },
  requestAnimationFrame() {},
  innerWidth: 400, innerHeight: 800
};

global.AudioContext = function() {
  this.createOscillator = () => ({ type:'', frequency: { setValueAtTime() {} }, connect() {}, start() {}, stop() {} });
  this.createGain = () => ({ gain: { setValueAtTime() {}, linearRampToValueAtTime() {} }, connect() {} });
  this.destination = {};
  this.currentTime = 0;
};

global.navigator = { userAgent: 'test' };
global.HTMLCanvasElement = function() {};
global.fetch = () => Promise.resolve({ json: () => Promise.resolve({ version: '0.0.0' }) });

// Load source files
const fs = require('fs');

const wordsSource = fs.readFileSync('words.js', 'utf8');
const wFactory = eval(`(function(localStorage) { ${wordsSource}; return { DEFAULT_WORDS, WordManager }; })`);
const { DEFAULT_WORDS, WordManager } = wFactory(localStorage);

const appSource = fs.readFileSync('app.js', 'utf8');
const appFactory = eval(`(function(localStorage, document, window, navigator, AudioContext, HTMLCanvasElement, WordManager) { ${appSource}; return { T, Sound, GameState, Progress, DailyChallenge, Achievements, Milestones, CloudSync, Particles, Speak }; })`);
const { T, GameState, DailyChallenge, Achievements, Milestones, CloudSync, Progress, Particles, Sound, Speak } = appFactory(localStorage, global.document, global.window, global.navigator, global.AudioContext, global.HTMLCanvasElement, WordManager);

// ============================================================
// T (TRANSLATION) TESTS
// ============================================================
console.log('\n========== TRANSLATION TESTS ==========');

console.log('\n=== T1: Translation keys match en<->he ===');
const enKeys = Object.keys(T.en).sort();
const heKeys = Object.keys(T.he).sort();
const missingInHe = enKeys.filter(k => !T.he.hasOwnProperty(k));
const missingInEn = heKeys.filter(k => !T.en.hasOwnProperty(k));
assert(missingInHe.length === 0, `All EN keys exist in HE (missing: ${missingInHe.join(', ') || 'none'})`);
assert(missingInEn.length === 0, `All HE keys exist in EN (extra in HE: ${missingInEn.join(', ') || 'none'})`);

console.log('\n=== T2: No empty translations ===');
let emptyEn = 0, emptyHe = 0;
enKeys.forEach(k => { if (T.en[k] === '') emptyEn++; });
heKeys.forEach(k => { if (T.he[k] === '') emptyHe++; });
assert(emptyEn === 0, `No empty EN translations (found ${emptyEn})`);
assert(emptyHe === 0, `No empty HE translations (found ${emptyHe})`);

console.log('\n=== T3: T.get returns correct language ===');
T._lang = 'en';
assert(T.get('gameBubble') === 'Bubble Pop', 'T.get EN returns English');
T._lang = 'he';
assert(T.get('gameBubble') === 'בועות קסם', 'T.get HE returns Hebrew');

console.log('\n=== T4: T.get falls back to EN for missing keys ===');
T._lang = 'he';
assert(T.get('nonexistent_key_xyz') === 'nonexistent_key_xyz', 'T.get returns key itself for missing');
T._lang = 'en';

console.log('\n=== T5: Level titles exist for levels 1-15 ===');
for (let l = 1; l <= 15; l++) {
  const enTitle = T.en['lvlTitle' + l];
  const heTitle = T.he['lvlTitle' + l];
  assert(enTitle && enTitle.length > 0, `lvlTitle${l} exists in EN`);
  assert(heTitle && heTitle.length > 0, `lvlTitle${l} exists in HE`);
}

console.log('\n=== T6: Game instruction keys exist ===');
const games = ['Bubble', 'Memory', 'Lightning', 'Scramble', 'Falling', 'TrueFalse', 'MatchUp', 'Bingo', 'Sprint', 'WordSpy', 'FillIn', 'Test'];
games.forEach(g => {
  const key = 'instr' + g;
  assert(T.en[key] && T.en[key].length > 0, `Instruction for ${g} exists in EN`);
  assert(T.he[key] && T.he[key].length > 0, `Instruction for ${g} exists in HE`);
});

console.log('\n=== T7: Greeting keys exist for all times of day ===');
['Morning', 'Afternoon', 'Evening', 'Night'].forEach(time => {
  const key = 'greet' + time;
  assert(T.en[key] && T.en[key].length > 0, `${key} exists in EN`);
  assert(T.he[key] && T.he[key].length > 0, `${key} exists in HE`);
});

console.log('\n=== T8: Milestone keys exist ===');
[10, 25, 50, 75].forEach(n => {
  const key = 'milestone' + n;
  assert(T.en[key] && T.en[key].length > 0, `${key} in EN`);
  assert(T.he[key] && T.he[key].length > 0, `${key} in HE`);
});
assert(T.en.milestoneAll && T.en.milestoneAll.length > 0, 'milestoneAll in EN');
assert(T.he.milestoneAll && T.he.milestoneAll.length > 0, 'milestoneAll in HE');

// ============================================================
// GAMESTATE TESTS
// ============================================================
console.log('\n\n========== GAMESTATE TESTS ==========');

console.log('\n=== GS1: GameState defaults ===');
localStorage.clear();
GameState.load();
const d = GameState.data;
assert(d.xp === 0, 'XP starts at 0');
assert(d.level === 1, 'Level starts at 1');
assert(d.totalStars === 0, 'Stars start at 0');
assert(d.streak === 0, 'Streak starts at 0');
assert(d.firstTime === true, 'firstTime is true');
assert(d.lastPlayDate === null, 'lastPlayDate is null');
assert(Array.isArray(d.achievements), 'achievements is array');
assert(d.achievements.length === 0, 'no achievements initially');
assert(typeof d.gamesPlayed === 'object', 'gamesPlayed is object');
assert(d.gamesPlayed.bubble === 0, 'bubble games start at 0');

console.log('\n=== GS2: GameState save and load persistence ===');
localStorage.clear();
GameState.load();
GameState.data.xp = 50;
GameState.data.level = 3;
GameState.data.streak = 5;
GameState.save();
const savedRaw = localStorage.getItem('wordquest_state');
assert(savedRaw !== null, 'State saved to localStorage');
const parsed = JSON.parse(savedRaw);
assert(parsed.xp === 50, 'XP persisted correctly');
assert(parsed.level === 3, 'Level persisted correctly');
GameState.load();
assert(GameState.data.xp === 50, 'XP loaded back');
assert(GameState.data.level === 3, 'Level loaded back');

console.log('\n=== GS3: Level threshold formula ===');
assert(GameState.getLevelThreshold(1) === 100, 'Level 1 threshold is 100');
assert(GameState.getLevelThreshold(2) === 250, 'Level 2 threshold is 250');
assert(GameState.getLevelThreshold(5) === 1300, 'Level 5 threshold is 1300');
assert(GameState.getLevelThreshold(10) === 5050, 'Level 10 threshold is 5050');

console.log('\n=== GS4: Level colors ===');
localStorage.clear();
GameState.load();
GameState.data.level = 3;
assert(GameState.getLevelColor() === '', 'Level 3 has no color');
GameState.data.level = 5;
assert(GameState.getLevelColor() === 'silver', 'Level 5 is silver');
GameState.data.level = 10;
assert(GameState.getLevelColor() === 'gold', 'Level 10 is gold');
GameState.data.level = 15;
assert(GameState.getLevelColor() === 'diamond', 'Level 15 is diamond');

console.log('\n=== GS5: Session history logging ===');
localStorage.clear();
GameState.load();
GameState.logSession('lightning', 8, 10, 2, 30, 120);
const history = GameState.getHistory();
assert(history.length === 1, 'History has 1 entry');
assert(history[0].game === 'lightning', 'Game mode logged');
assert(history[0].correct === 8, 'Correct count logged');
assert(history[0].total === 10, 'Total count logged');
assert(history[0].stars === 2, 'Stars logged');
assert(history[0].accuracy === 80, 'Accuracy calculated correctly');
assert(history[0].duration === 120, 'Duration logged');

console.log('\n=== GS6: Session history capped at 500 ===');
localStorage.clear();
GameState.load();
for (let i = 0; i < 510; i++) {
  GameState.logSession('bubble', 5, 10, 1, 10, 60);
}
const h = GameState.getHistory();
assert(h.length === 500, 'History capped at 500');

console.log('\n=== GS7: Test history ===');
localStorage.clear();
GameState.load();
GameState.addTestResult({ score: 8, total: 10, date: Date.now() });
assert(GameState.data.testHistory.length === 1, 'Test history has 1 entry');
const latest = GameState.getLatestTest();
assert(latest.score === 8, 'Latest test score correct');
assert(latest.total === 10, 'Latest test total correct');

console.log('\n=== GS8: Test history capped at 50 ===');
localStorage.clear();
GameState.load();
for (let i = 0; i < 55; i++) {
  GameState.addTestResult({ score: i, total: 10, date: Date.now() });
}
assert(GameState.data.testHistory.length === 50, 'Test history capped at 50');
const latestAfterCap = GameState.getLatestTest();
assert(latestAfterCap.score === 54, 'Latest test is the most recent');

console.log('\n=== GS9: Level title ===');
localStorage.clear();
GameState.load();
T._lang = 'en';
GameState.data.level = 1;
assert(GameState.getLevelTitle() === 'Beginner', 'Level 1 title is Beginner');
GameState.data.level = 10;
assert(GameState.getLevelTitle() === 'Gold Master', 'Level 10 title is Gold Master');
GameState.data.level = 15;
assert(GameState.getLevelTitle() === 'Diamond Legend', 'Level 15 title is Diamond Legend');
GameState.data.level = 20;
assert(GameState.getLevelTitle() === 'Diamond Legend', 'Level > 15 clamped to level 15 title');

console.log('\n=== GS10: GameState loads with merged defaults ===');
localStorage.clear();
localStorage.setItem('wordquest_state', JSON.stringify({ xp: 42, level: 3 }));
GameState.load();
assert(GameState.data.xp === 42, 'Loaded XP from storage');
assert(GameState.data.level === 3, 'Loaded level from storage');
assert(GameState.data.streak === 0, 'Defaults filled for missing fields');
assert(GameState.data.firstTime === true, 'firstTime default filled');

// ============================================================
// DAILY CHALLENGE TESTS
// ============================================================
console.log('\n\n========== DAILY CHALLENGE TESTS ==========');

console.log('\n=== DC1: Challenge generation ===');
localStorage.clear();
GameState.load();
WordManager.init();
DailyChallenge.generate();
const dc = GameState.data.dailyChallenge;
assert(dc.date !== null, 'Challenge date set');
assert(dc.type !== null, 'Challenge type set');
assert(dc.progress === 0, 'Progress starts at 0');
assert(dc.completed === false, 'Not completed initially');

console.log('\n=== DC2: Challenge type matches day of week ===');
const dayIdx = new Date().getDay();
const expectedType = DailyChallenge.types[dayIdx].id;
assert(dc.type === expectedType, `Type matches day index (day ${dayIdx} → ${expectedType})`);

console.log('\n=== DC3: Bonus challenge generated ===');
const bc = GameState.data.bonusChallenge;
assert(bc !== null && bc.date !== null, 'Bonus challenge generated');
assert(bc.xpTarget >= 50, 'XP target is at least 50');
assert(bc.xpEarned === 0, 'XP earned starts at 0');

console.log('\n=== DC4: Time goal generated ===');
const tg = GameState.data.dailyTimeGoal;
assert(tg !== null && tg.date !== null, 'Time goal generated');
assert(tg.targetMin >= 5, 'Time target at least 5 min');
assert(tg.targetMin <= 30, 'Time target at most 30 min');
assert(tg.playedSec === 0, 'Played seconds starts at 0');
assert(tg.completed === false, 'Time goal not completed initially');

console.log('\n=== DC5: getCurrent returns challenge info ===');
const current = DailyChallenge.getCurrent();
assert(current.id !== undefined, 'getCurrent has id');
assert(current.textKey !== undefined, 'getCurrent has textKey');
assert(current.target > 0, 'getCurrent has positive target');

console.log('\n=== DC6: getBonus returns bonus info ===');
const bonus = DailyChallenge.getBonus();
assert(bonus !== null, 'getBonus returns non-null');
assert(bonus.xpTarget >= 50, 'Bonus XP target valid');

console.log('\n=== DC7: recordXP accumulates ===');
localStorage.clear();
GameState.load();
DailyChallenge.generate();
const initialXpEarned = GameState.data.bonusChallenge.xpEarned;
DailyChallenge.recordXP(20);
assert(GameState.data.bonusChallenge.xpEarned === initialXpEarned + 20, 'XP recorded correctly');
DailyChallenge.recordXP(30);
assert(GameState.data.bonusChallenge.xpEarned === initialXpEarned + 50, 'XP accumulated');

console.log('\n=== DC8: reportStreak updates maxStreak ===');
localStorage.clear();
GameState.load();
DailyChallenge.generate();
const today = new Date().toDateString();
GameState.data.todayGamesPlayed.date = today;
DailyChallenge.reportStreak(3);
assert(GameState.data.todayGamesPlayed.maxStreak === 3, 'maxStreak set to 3');
DailyChallenge.reportStreak(7);
assert(GameState.data.todayGamesPlayed.maxStreak === 7, 'maxStreak updated to 7');
DailyChallenge.reportStreak(2);
assert(GameState.data.todayGamesPlayed.maxStreak === 7, 'maxStreak not lowered');

console.log('\n=== DC9: reportCombo updates maxCombo ===');
localStorage.clear();
GameState.load();
DailyChallenge.generate();
GameState.data.todayGamesPlayed.date = new Date().toDateString();
DailyChallenge.reportCombo(4);
assert(GameState.data.todayGamesPlayed.maxCombo === 4, 'maxCombo set to 4');
DailyChallenge.reportCombo(2);
assert(GameState.data.todayGamesPlayed.maxCombo === 4, 'maxCombo not lowered');

console.log('\n=== DC10: reportMastery flags masteredNewWord ===');
localStorage.clear();
GameState.load();
DailyChallenge.generate();
GameState.data.todayGamesPlayed.date = new Date().toDateString();
assert(GameState.data.todayGamesPlayed.masteredNewWord === false, 'masteredNewWord starts false');
DailyChallenge.reportMastery();
assert(GameState.data.todayGamesPlayed.masteredNewWord === true, 'masteredNewWord set to true');

console.log('\n=== DC11: Time goal motivation messages ===');
T._lang = 'en';
assert(DailyChallenge._getTimeMotivation(5).includes('5 min'), 'Motivation for 5 min');
assert(DailyChallenge._getTimeMotivation(10).includes('10 min'), 'Motivation for 10 min');
assert(DailyChallenge._getTimeMotivation(30).includes('30 min'), 'Motivation for 30 min');

console.log('\n=== DC12: getTimeGoal returns defaults when missing ===');
localStorage.clear();
GameState.load();
GameState.data.dailyTimeGoal = null;
const tgDefault = DailyChallenge.getTimeGoal();
assert(tgDefault.targetMin === 10, 'Default time target is 10');
assert(tgDefault.playedSec === 0, 'Default played seconds is 0');

console.log('\n=== DC13: Generate does not regenerate same day ===');
localStorage.clear();
GameState.load();
DailyChallenge.generate();
const firstType = GameState.data.dailyChallenge.type;
GameState.data.dailyChallenge.progress = 1;
DailyChallenge.generate();
assert(GameState.data.dailyChallenge.progress === 1, 'Challenge not regenerated same day');

// ============================================================
// ACHIEVEMENTS TESTS
// ============================================================
console.log('\n\n========== ACHIEVEMENTS TESTS ==========');

console.log('\n=== ACH1: Achievement definitions ===');
assert(Achievements.defs.length === 12, '12 achievement definitions');
Achievements.defs.forEach(a => {
  assert(a.id && a.id.length > 0, `Achievement ${a.id} has id`);
  assert(a.icon && a.icon.length > 0, `Achievement ${a.id} has icon`);
  assert(a.name_en && a.name_en.length > 0, `Achievement ${a.id} has EN name`);
  assert(a.name_he && a.name_he.length > 0, `Achievement ${a.id} has HE name`);
  assert(a.desc_en && a.desc_en.length > 0, `Achievement ${a.id} has EN desc`);
  assert(a.desc_he && a.desc_he.length > 0, `Achievement ${a.id} has HE desc`);
  assert(typeof a.check === 'function', `Achievement ${a.id} has check function`);
});

console.log('\n=== ACH2: resetFlags ===');
Achievements.resetFlags();
assert(Achievements._flags.memoryPerfect === false, 'memoryPerfect starts false');
assert(Achievements._flags.lightningPerfect === false, 'lightningPerfect starts false');
assert(Achievements._flags.combo5 === false, 'combo5 starts false');
assert(Achievements._flags.scrambleNoHints === false, 'scrambleNoHints starts false');
assert(Achievements._flags.falling20 === false, 'falling20 starts false');

Particles.init();

console.log('\n=== ACH3: first_steps unlocks after a game ===');
localStorage.clear();
GameState.load();
Achievements.resetFlags();
GameState.data.gamesPlayed.bubble = 1;
Achievements.checkAll();
assert(GameState.data.achievements.includes('first_steps'), 'first_steps unlocked');

console.log('\n=== ACH4: word_wizard needs 10 mastered ===');
localStorage.clear();
GameState.load();
WordManager.init();
Achievements.resetFlags();
const wizardCheck = Achievements.defs.find(a => a.id === 'word_wizard');
assert(!wizardCheck.check(), 'word_wizard not met with 0 mastered');

console.log('\n=== ACH5: explorer needs all game modes played ===');
localStorage.clear();
GameState.load();
Achievements.resetFlags();
const explorerCheck = Achievements.defs.find(a => a.id === 'explorer');
assert(!explorerCheck.check(), 'explorer not met with no games');
GameState.data.gamesPlayed = {
  bubble: 1, memory: 1, lightning: 1, scramble: 1, falling: 1,
  truefalse: 1, matchup: 1, bingo: 1, sprint: 1, wordspy: 1, fillin: 1
};
assert(explorerCheck.check(), 'explorer met with all modes played');

console.log('\n=== ACH6: week_warrior needs 7-day streak ===');
localStorage.clear();
GameState.load();
Achievements.resetFlags();
GameState.data.streak = 6;
const weekCheck = Achievements.defs.find(a => a.id === 'week_warrior');
assert(!weekCheck.check(), 'week_warrior not met at streak 6');
GameState.data.streak = 7;
assert(weekCheck.check(), 'week_warrior met at streak 7');

console.log('\n=== ACH7: Achievements not double-unlocked ===');
localStorage.clear();
GameState.load();
Achievements.resetFlags();
GameState.data.gamesPlayed.bubble = 1;
Achievements.checkAll();
const firstCount = GameState.data.achievements.length;
Achievements.checkAll();
assert(GameState.data.achievements.length === firstCount, 'No duplicate achievements');

console.log('\n=== ACH8: getUnlockedCount ===');
assert(Achievements.getUnlockedCount() === firstCount, 'getUnlockedCount matches');

// ============================================================
// MILESTONES TESTS
// ============================================================
console.log('\n\n========== MILESTONES TESTS ==========');

console.log('\n=== MS1: Milestone thresholds defined ===');
assert(Milestones.thresholds.length > 0, 'Has milestone thresholds');
const expectedThresholds = [10, 25, 50, 75];
expectedThresholds.forEach(n => {
  assert(Milestones.thresholds.some(t => t.count === n), `Threshold ${n} exists`);
});

// ============================================================
// CLOUD SYNC TESTS (snapshot building)
// ============================================================
console.log('\n\n========== CLOUD SYNC TESTS ==========');

console.log('\n=== CS1: _buildSnapshot ===');
localStorage.clear();
GameState.load();
WordManager.init();
CloudSync.init();
const snap = CloudSync._buildSnapshot();
assert(snap.ts > 0, 'Snapshot has timestamp');
assert(snap.xp === 0, 'Snapshot has XP');
assert(snap.level === 1, 'Snapshot has level');
assert(Array.isArray(snap.wordData), 'Snapshot has wordData array');
assert(snap.wordData.length === WordManager.getCount(), 'Snapshot wordData matches word count');
assert(snap.totalWords === WordManager.getCount(), 'totalWords correct');

console.log('\n=== CS2: _buildSnapshot word data structure ===');
const word0 = snap.wordData[0];
assert(word0.english !== undefined, 'Word has english');
assert(word0.hebrew !== undefined, 'Word has hebrew');
assert(word0.correct !== undefined, 'Word has correct count');
assert(word0.wrong !== undefined, 'Word has wrong count');
assert(word0.accuracy !== undefined, 'Word has accuracy');
assert(word0.strengthLabel !== undefined, 'Word has strengthLabel');
assert(word0.confidenceLevel !== undefined, 'Word has confidenceLevel');

console.log('\n=== CS3: _buildFullBackup ===');
const backup = CloudSync._buildFullBackup();
assert(backup.version === 2, 'Backup version is 2');
assert(backup.gameState !== undefined, 'Backup has gameState');
assert(Array.isArray(backup.words), 'Backup has words array');
assert(typeof backup.mastery === 'object', 'Backup has mastery');
assert(Array.isArray(backup.selection), 'Backup has selection');
assert(Array.isArray(backup.archive), 'Backup has archive');
assert(backup.syncBin !== undefined, 'Backup has syncBin');

console.log('\n=== CS4: getParentLink ===');
CloudSync._binId = null;
assert(CloudSync.getParentLink() === null, 'No link when no binId');
CloudSync._binId = 'test123';
const link = CloudSync.getParentLink();
assert(link.includes('?parent=test123'), 'Link includes binId');
assert(link.startsWith('https://'), 'Link is HTTPS');

console.log('\n=== CS5: ensureBin with existing bin ===');
CloudSync._binId = 'existing456';
CloudSync.ensureBin().then(id => {
  assert(id === 'existing456', 'ensureBin returns existing binId');
});

// ============================================================
// DEFAULT WORDS TESTS
// ============================================================
console.log('\n\n========== DEFAULT WORDS TESTS ==========');

console.log('\n=== DW1: Default words validation ===');
assert(DEFAULT_WORDS.length >= 80, `Default words count is ${DEFAULT_WORDS.length} (≥80)`);

let invalidWords = 0;
DEFAULT_WORDS.forEach((w, i) => {
  if (!w.english || !w.hebrew || w.english.trim() === '' || w.hebrew.trim() === '') {
    invalidWords++;
    console.error(`    Invalid word at index ${i}: en="${w.english}" he="${w.hebrew}"`);
  }
});
assert(invalidWords === 0, 'All default words have both english and hebrew');

console.log('\n=== DW2: No duplicate English words ===');
const engSet = new Set();
let dupes = 0;
DEFAULT_WORDS.forEach(w => {
  const lower = w.english.toLowerCase().trim();
  if (engSet.has(lower)) { dupes++; console.error(`    Duplicate: ${w.english}`); }
  engSet.add(lower);
});
assert(dupes === 0, 'No duplicate English words in defaults');

// ============================================================
// INTEGRATION: GameState + WordManager interaction
// ============================================================
console.log('\n\n========== INTEGRATION TESTS ==========');

console.log('\n=== INT1: Snapshot reflects mastery changes ===');
localStorage.clear();
GameState.load();
WordManager.init();
CloudSync.init();
WordManager._recentMistakes = {};
WordManager.recordAnswer(0, true, 'lightning');
WordManager.recordAnswer(0, true, 'truefalse');
const snap2 = CloudSync._buildSnapshot();
const w0snap = snap2.wordData.find(w => w.english === DEFAULT_WORDS[0].english);
assert(w0snap.correct >= 2, 'Snapshot reflects recorded correct answers');
assert(w0snap.modesCount >= 2, 'Snapshot reflects multiple game modes');

console.log('\n=== INT2: All daily challenge types have valid translation keys ===');
DailyChallenge.types.forEach(t => {
  assert(T.en[t.textKey] && T.en[t.textKey].length > 0, `Daily type ${t.id} has EN translation`);
  assert(T.he[t.textKey] && T.he[t.textKey].length > 0, `Daily type ${t.id} has HE translation`);
});

console.log('\n=== INT3: All bonus challenge types have valid translation keys ===');
DailyChallenge.bonusTypes.forEach(t => {
  assert(T.en[t.textKey] && T.en[t.textKey].length > 0, `Bonus type ${t.id} has EN translation`);
  assert(T.he[t.textKey] && T.he[t.textKey].length > 0, `Bonus type ${t.id} has HE translation`);
});

console.log('\n=== INT4: Achievement names in both languages ===');
Achievements.defs.forEach(a => {
  assert(a.name_en.length > 0 && a.name_he.length > 0, `Achievement ${a.id} bilingual name`);
  assert(a.desc_en.length > 0 && a.desc_he.length > 0, `Achievement ${a.id} bilingual desc`);
});

// ===== SUMMARY =====
console.log('\n=============================');
console.log(`APP LOGIC RESULTS: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);
console.log('=============================');
process.exit(failed > 0 ? 1 : 0);
