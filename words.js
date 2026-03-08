const DEFAULT_WORDS = [
  { english: "wrong", hebrew: "לא נכון" },
  { english: "you're", hebrew: "אתה / את (קיצור של you are)" },
  { english: "welcome", hebrew: "ברוך הבא / בבקשה" },
  { english: "around", hebrew: "מסביב" },
  { english: "artist", hebrew: "אמן" },
  { english: "bridge", hebrew: "גשר" },
  { english: "castle", hebrew: "טירה" },
  { english: "celebration", hebrew: "חגיגה" },
  { english: "clothes", hebrew: "בגדים" },
  { english: "cousin", hebrew: "בן דוד / בת דודה" },
  { english: "cupboard", hebrew: "ארון מטבח" },
  { english: "desert", hebrew: "מדבר" },
  { english: "detective", hebrew: "בלש" },
  { english: "dining room", hebrew: "חדר אוכל" },
  { english: "fire", hebrew: "אש" },
  { english: "flag", hebrew: "דגל" },
  { english: "forest", hebrew: "יער" },
  { english: "mat", hebrew: "שטיחון" },
  { english: "mirror", hebrew: "מראה" },
  { english: "outside", hebrew: "בחוץ" },
  { english: "paint", hebrew: "לצבוע" },
  { english: "pull", hebrew: "למשוך" },
  { english: "refrigerator", hebrew: "מקרר" },
  { english: "rice", hebrew: "אורז" },
  { english: "river", hebrew: "נהר" },
  { english: "roof", hebrew: "גג" },
  { english: "servant", hebrew: "משרת" },
  { english: "ship", hebrew: "אונייה" },
  { english: "shower", hebrew: "מקלחת" },
  { english: "sink", hebrew: "כיור" },
  { english: "spoon", hebrew: "כף" },
  { english: "stove", hebrew: "כיריים / תנור" },
  { english: "straw", hebrew: "קש" },
  { english: "tent", hebrew: "אוהל" },
  { english: "thief", hebrew: "גנב" },
  { english: "throw", hebrew: "לזרוק" },
  { english: "toilet", hebrew: "שירותים" },
  { english: "travel", hebrew: "לטייל / לנסוע" },
  { english: "trip", hebrew: "טיול" },
  { english: "visit", hebrew: "לבקר" },
  { english: "weekend", hebrew: "סוף שבוע" },
  { english: "about", hebrew: "על" },
  { english: "after", hebrew: "אחרי" },
  { english: "afternoon", hebrew: "אחר הצהריים" },
  { english: "all", hebrew: "הכול" },
  { english: "another", hebrew: "אחר" },
  { english: "before", hebrew: "לפני" },
  { english: "breakfast", hebrew: "ארוחת בוקר" },
  { english: "call", hebrew: "להתקשר / קריאה" },
  { english: "catch", hebrew: "לתפוס" },
  { english: "clean", hebrew: "לנקות" },
  { english: "each", hebrew: "כל אחד" },
  { english: "evening", hebrew: "ערב" },
  { english: "everyone", hebrew: "כולם" },
  { english: "fall", hebrew: "ליפול" },
  { english: "get", hebrew: "לקבל / להשיג" },
  { english: "glass", hebrew: "כוס" },
  { english: "guess", hebrew: "לנחש" },
  { english: "home", hebrew: "בית" },
  { english: "kind of", hebrew: "סוג של" },
  { english: "late", hebrew: "מאוחר" },
  { english: "look at", hebrew: "להסתכל על" },
  { english: "lunch", hebrew: "ארוחת צהריים" },
  { english: "many", hebrew: "הרבה" },
  { english: "moon", hebrew: "ירח" },
  { english: "parents", hebrew: "הורים" },
  { english: "pick up", hebrew: "לאסוף" },
  { english: "quiet", hebrew: "שקט" },
  { english: "rich", hebrew: "עשיר" },
  { english: "sometimes", hebrew: "לפעמים" },
  { english: "sport", hebrew: "ספורט" },
  { english: "supper", hebrew: "ארוחת ערב" },
  { english: "thanks", hebrew: "תודה" },
  { english: "thing", hebrew: "דבר" },
  { english: "think", hebrew: "לחשוב" },
  { english: "too", hebrew: "גם / יותר מדי" },
  { english: "town", hebrew: "עיר / עיירה" },
  { english: "until", hebrew: "עד" },
  { english: "us", hebrew: "אותנו" },
  { english: "work", hebrew: "עבודה" },
  { english: "world", hebrew: "עולם" },
  { english: "wood", hebrew: "עץ / עץ (חומר)" },
  { english: "you're welcome", hebrew: "בבקשה (בתשובה לתודה)" }
];

const WordManager = {
  STORAGE_KEY: 'wordquest_words',
  MASTERY_KEY: 'wordquest_mastery',
  SELECTION_KEY: 'wordquest_selection',
  ARCHIVE_KEY: 'wordquest_archive',
  DRIP_KEY: 'wordquest_drip',

  _words: null,
  _mastery: null,
  _selection: null,
  _tempPool: null,
  _archive: null,
  _drip: null,

  init() {
    this._words = this._loadWords();
    this._mastery = this._loadMastery();
    this._selection = this._loadSelection();
    this._archive = this._loadArchive();
    this._drip = this._loadDrip();
  },

  _loadWords() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 10) return parsed;
      }
    } catch (e) { /* fall through to defaults */ }
    const words = DEFAULT_WORDS.map((w, i) => ({ id: i, ...w }));
    this._saveWords(words);
    return words;
  },

  _loadMastery() {
    try {
      const saved = localStorage.getItem(this.MASTERY_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { /* fall through */ }
    return {};
  },

  _loadSelection() {
    try {
      const saved = localStorage.getItem(this.SELECTION_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return new Set(parsed);
      }
    } catch (e) { /* fall through */ }
    return new Set();
  },

  _saveSelection() {
    try { localStorage.setItem(this.SELECTION_KEY, JSON.stringify([...this._selection])); } catch (e) {}
  },

  toggleSelection(wordId) {
    if (this._selection.has(wordId)) {
      this._selection.delete(wordId);
    } else {
      this._selection.add(wordId);
    }
    this._saveSelection();
  },

  isSelected(wordId) {
    return this._selection.has(wordId);
  },

  selectAll() {
    this._words.forEach(w => this._selection.add(w.id));
    this._saveSelection();
  },

  clearSelection() {
    this._selection.clear();
    this._saveSelection();
  },

  getSelectionCount() {
    return this._selection.size;
  },

  hasActiveSelection() {
    return this._selection.size > 0;
  },

  setTempPool(words) {
    this._tempPool = words && words.length > 0 ? words : null;
  },

  clearTempPool() {
    this._tempPool = null;
  },

  _getActivePool() {
    if (this._tempPool) return [...this._tempPool];
    if (this._selection.size > 0) return this._words.filter(w => this._selection.has(w.id));
    return this._words;
  },

  _saveWords(words) {
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(words || this._words)); } catch (e) {}
  },

  _saveMastery() {
    try { localStorage.setItem(this.MASTERY_KEY, JSON.stringify(this._mastery)); } catch (e) {}
  },

  getAll() {
    return [...this._words];
  },

  getCount() {
    return this._words.length;
  },

  getMastery(wordId) {
    if (!this._mastery[wordId]) {
      this._mastery[wordId] = {
        timesCorrect: 0,
        timesWrong: 0,
        masteryLevel: 0,
        gameModesCorrect: [],
        lastSeen: null,
        srsInterval: 1,
        srsNextReview: null,
        recentAnswers: []
      };
    }
    const m = this._mastery[wordId];
    if (m.srsInterval === undefined) { m.srsInterval = 1; m.srsNextReview = null; }
    if (!m.recentAnswers) m.recentAnswers = [];
    return m;
  },

  getMasteredCount() {
    return this._words.filter(w => this.getWordStrength(w.id).label === 'mastered').length;
  },

  _recentMistakes: {},

  recordAnswer(wordId, correct, gameMode) {
    const archivedIdx = this._archive.findIndex(e => e.word.id === wordId);
    if (archivedIdx !== -1) {
      this.recordArchivedAnswer(wordId, correct, gameMode);
      if (!correct) return this.getMastery(wordId);
      const ae = this._archive.find(e => e.word.id === wordId);
      return ae ? ae.mastery : this.getMastery(wordId);
    }

    const wasMastered = this.getWordConfidence(wordId).level === 'mastered';
    const m = this.getMastery(wordId);
    const now = Date.now();
    m.lastSeen = now;

    if (!correct) {
      this._recentMistakes[wordId] = now;
      m.timesWrong++;
      m.srsInterval = 1;
      m.recentAnswers.push(false);
      if (m.recentAnswers.length > 10) m.recentAnswers.shift();
      this._syncMasteryLevel(m);
    } else {
      const lastMistake = this._recentMistakes[wordId] || 0;
      const isFreebie = (now - lastMistake) < 30000;

      if (isFreebie) {
        delete this._recentMistakes[wordId];
      } else {
        m.timesCorrect++;
        m.recentAnswers.push(true);
        if (m.recentAnswers.length > 10) m.recentAnswers.shift();
        if (!m.gameModesCorrect.includes(gameMode)) {
          m.gameModesCorrect.push(gameMode);
        }
        this._syncMasteryLevel(m);
        m.srsInterval = Math.min((m.srsInterval || 1) * 2, 30);
      }
    }

    m.srsNextReview = now + (m.srsInterval * 86400000);
    this._saveMastery();
    const nowMastered = this.getWordConfidence(wordId).level === 'mastered';
    m.justMastered = !wasMastered && nowMastered;
    return m;
  },

  _syncMasteryLevel(m) {
    const tc = m.timesCorrect;
    const modes = m.gameModesCorrect.length;
    const recent = (m.recentAnswers || []).slice(-6);
    const recentCorrect = recent.filter(Boolean).length;

    let level = 0;
    if (tc >= 19 && modes >= 3) level = 5;
    else if (tc >= 14 && modes >= 2) level = 4;
    else if (tc >= 9) level = 3;
    else if (tc >= 5) level = 2;
    else if (tc >= 2) level = 1;

    if (recent.length >= 4 && recentCorrect <= 1) level = Math.min(level, 1);
    else if (recent.length >= 4 && recentCorrect <= 2) level = Math.min(level, 2);

    m.masteryLevel = level;
  },

  getActiveCount() {
    return this._getActivePool().length;
  },

  getWordsDueForReview() {
    const now = Date.now();
    return this._words.filter(w => {
      const m = this.getMastery(w.id);
      if (m.timesCorrect + m.timesWrong === 0) return false;
      if (!m.srsNextReview) return true;
      return now >= m.srsNextReview;
    });
  },

  getStaleWords(days) {
    const cutoff = Date.now() - (days * 86400000);
    return this._words.filter(w => {
      const m = this.getMastery(w.id);
      if (m.timesCorrect + m.timesWrong === 0) return false;
      return m.lastSeen && m.lastSeen < cutoff;
    });
  },

  getWordConfidence(wordId) {
    const m = this.getMastery(wordId);
    const total = m.timesCorrect + m.timesWrong;
    if (total === 0) return { level: 'not_started', streak: 0, modesCount: 0, accuracy: 0, recentAccuracy: 0, pctToMastery: 0 };

    const accuracy = Math.round((m.timesCorrect / total) * 100);
    const modes = m.gameModesCorrect.length;
    const recent = m.recentAnswers || [];
    const last6 = recent.slice(-6);
    const recentCorrect = last6.filter(Boolean).length;
    const recentAccuracy = last6.length > 0 ? Math.round((recentCorrect / last6.length) * 100) : accuracy;

    let level;
    if (recentCorrect >= 6) level = 'mastered';
    else if (recentCorrect >= 5) level = 'almost';
    else if (recentCorrect >= 3) level = 'learning';
    else level = 'struggling';

    if (level === 'mastered' && !m.masteredSince) {
      m.masteredSince = Date.now();
    } else if (level !== 'mastered' && m.masteredSince) {
      m.masteredSince = null;
    }

    const pct = level === 'mastered' ? 100 : Math.round(Math.min((recentCorrect / 6) * 100, 99));

    return { level, streak: recentCorrect, modesCount: modes, accuracy, recentAccuracy, pctToMastery: pct, total };
  },

  getSelectedWordsProgress() {
    const pool = this._selection.size > 0
      ? this._words.filter(w => this._selection.has(w.id))
      : [];
    if (pool.length === 0) return { total: 0, mastered: 0, almost: 0, learning: 0, struggling: 0, not_started: 0, ready: false, pct: 0, words: [] };

    const counts = { mastered: 0, almost: 0, learning: 0, struggling: 0, not_started: 0 };
    const words = pool.map(w => {
      const c = this.getWordConfidence(w.id);
      counts[c.level]++;
      return { word: w, confidence: c };
    });

    words.sort((a, b) => a.confidence.pctToMastery - b.confidence.pctToMastery);

    const pct = pool.length > 0 ? Math.round((counts.mastered / pool.length) * 100) : 0;
    const ready = counts.mastered === pool.length;

    return { total: pool.length, ...counts, ready, pct, words };
  },

  getWordStrength(wordId) {
    const m = this.getMastery(wordId);
    const total = m.timesCorrect + m.timesWrong;
    if (total === 0) return { score: 0, label: 'unseen', accuracy: 0 };
    const accuracy = Math.round((m.timesCorrect / total) * 100);
    const daysSinceSeen = m.lastSeen ? Math.floor((Date.now() - m.lastSeen) / 86400000) : 999;
    const conf = this.getWordConfidence(wordId);
    const score = conf.pctToMastery;
    const label = conf.level === 'not_started' ? 'unseen' : conf.level === 'almost' ? 'good' : conf.level;
    return { score, label, accuracy, total, daysSinceSeen };
  },

  getWeightedRandom(count, exclude) {
    const minCount = Math.max(count, 15);
    const excludeIds = new Set((exclude || []).map(e => typeof e === 'object' ? e.id : Number(e)));
    const pool = this._getActivePool().filter(w => !excludeIds.has(w.id));
    const archivedPool = this.getArchivedWordsForGame().filter(w => !excludeIds.has(w.id));

    const allAvailable = pool.length + archivedPool.length;
    const target = Math.min(minCount, allAvailable);
    if (allAvailable <= target) {
      return this._shuffleArray([...pool, ...archivedPool]);
    }

    const buckets = { not_started: [], struggling: [], learning: [], almost: [], mastered: [], archived: [] };
    pool.forEach(w => {
      const c = this.getWordConfidence(w.id);
      buckets[c.level].push({ w, recentCorrect: c.streak, accuracy: c.accuracy,
        lastSeen: this.getMastery(w.id).lastSeen || 0 });
    });
    archivedPool.forEach(w => {
      buckets.archived.push({ w, recentCorrect: 6, accuracy: 100, lastSeen: 0 });
    });

    const sortWeakFirst = arr => arr.sort((a, b) => a.recentCorrect - b.recentCorrect || a.accuracy - b.accuracy || a.lastSeen - b.lastSeen);
    sortWeakFirst(buckets.struggling);
    sortWeakFirst(buckets.learning);
    this._shuffleArray(buckets.not_started);
    this._shuffleArray(buckets.almost);
    this._shuffleArray(buckets.mastered);
    this._shuffleArray(buckets.archived);

    const selected = [];
    const pickFrom = (bucket, n) => {
      let picked = 0;
      while (picked < n && bucket.length > 0) {
        const item = bucket.shift();
        const w = item.w || item;
        if (!selected.find(s => s.id === w.id)) { selected.push(w); picked++; }
      }
      return picked;
    };

    const newCount = Math.max(1, Math.round(target * 0.20));
    const strugCount = Math.round(target * 0.40);
    const learnCount = Math.round(target * 0.20);
    const almostCount = Math.round(target * 0.10);
    const masteredCount = Math.round(target * 0.07);
    const archivedCount = target - newCount - strugCount - learnCount - almostCount - masteredCount;

    let left;
    left = newCount; left -= pickFrom(buckets.not_started, left);
    if (left > 0) pickFrom(buckets.struggling, left);

    left = strugCount; left -= pickFrom(buckets.struggling, left);
    if (left > 0) pickFrom(buckets.not_started, left);

    left = learnCount; left -= pickFrom(buckets.learning, left);

    left = almostCount; left -= pickFrom(buckets.almost, left);

    left = masteredCount; left -= pickFrom(buckets.mastered, left);

    left = archivedCount; left -= pickFrom(buckets.archived, left);

    const remaining = target - selected.length;
    if (remaining > 0) {
      const allLeft = [...buckets.not_started, ...buckets.struggling, ...buckets.learning,
        ...buckets.almost, ...buckets.mastered, ...buckets.archived]
        .map(item => item.w || item)
        .filter(w => !selected.find(s => s.id === w.id));
      this._shuffleArray(allLeft);
      pickFrom(allLeft, remaining);
    }

    return this._shuffleArray(selected);
  },

  _shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  getRandom(count, exclude) {
    const excludeIds = new Set((exclude || []).map(e => typeof e === 'object' ? e.id : Number(e)));
    const pool = this._words.filter(w => !excludeIds.has(w.id));
    if (pool.length <= count) return this._shuffleArray([...pool]);

    const firstExclude = exclude && exclude.length > 0 ? exclude[0] : null;
    const targetId = firstExclude ? (typeof firstExclude === 'object' ? firstExclude.id : Number(firstExclude)) : null;
    if (targetId !== null) {
      const target = this._words.find(w => w.id === targetId);
      if (target) {
        const scored = pool.map(w => {
          let similarity = 0;
          if (Math.abs(w.english.length - target.english.length) <= 2) similarity += 2;
          if (w.english[0] === target.english[0]) similarity += 1;
          similarity += Math.random() * 3;
          return { word: w, score: similarity };
        });
        scored.sort((a, b) => b.score - a.score);
        return scored.slice(0, count).map(s => s.word);
      }
    }
    return this._shuffleArray(pool).slice(0, count);
  },

  editWord(wordId, english, hebrew) {
    const eng = english.trim();
    const heb = hebrew.trim();
    if (!eng || !heb) return false;
    const word = this._words.find(w => w.id === wordId);
    if (!word) return false;
    word.english = eng;
    word.hebrew = heb;
    this._saveWords();
    return true;
  },

  addWord(english, hebrew) {
    const maxId = this._words.reduce((max, w) => Math.max(max, w.id), 0);
    const word = { id: maxId + 1, english: english.trim(), hebrew: hebrew.trim() };
    this._words.push(word);
    this._saveWords();
    return word;
  },

  deleteWord(wordId) {
    if (this._words.length <= 20) return false;
    this._words = this._words.filter(w => w.id !== wordId);
    delete this._mastery[wordId];
    this._selection.delete(wordId);
    this._saveWords();
    this._saveMastery();
    this._saveSelection();
    return true;
  },

  resetProgress() {
    this._mastery = {};
    this._saveMastery();
  },

  resetAll() {
    this._words = DEFAULT_WORDS.map((w, i) => ({ id: i, ...w }));
    this._mastery = {};
    this._selection = new Set();
    this._saveWords();
    this._saveMastery();
    this._saveSelection();
  },

  // ===== ARCHIVE =====
  _loadArchive() {
    try {
      const saved = localStorage.getItem(this.ARCHIVE_KEY);
      if (saved) { const a = JSON.parse(saved); if (Array.isArray(a)) return a; }
    } catch (e) {}
    return [];
  },

  _saveArchive() {
    try { localStorage.setItem(this.ARCHIVE_KEY, JSON.stringify(this._archive)); } catch (e) {}
  },

  getArchived() { return [...this._archive]; },
  getArchivedCount() { return this._archive.length; },

  archiveWord(wordId) {
    const word = this._words.find(w => w.id === wordId);
    if (!word) return false;
    const mastery = this._mastery[wordId] || null;
    this._archive.push({ word: { ...word }, mastery: mastery ? { ...mastery } : null, archivedAt: Date.now() });
    this._words = this._words.filter(w => w.id !== wordId);
    delete this._mastery[wordId];
    this._selection.delete(wordId);
    this._saveWords();
    this._saveMastery();
    this._saveSelection();
    this._saveArchive();
    return true;
  },

  archiveMultiple(wordIds) {
    let count = 0;
    wordIds.forEach(id => { if (this.archiveWord(id)) count++; });
    return count;
  },

  restoreWord(archiveIndex) {
    if (archiveIndex < 0 || archiveIndex >= this._archive.length) return false;
    const entry = this._archive[archiveIndex];
    const origId = entry.word.id;
    const idTaken = this._words.some(w => w.id === origId);
    const restoredId = idTaken ? this._words.reduce((max, w) => Math.max(max, w.id), 0) + 1 : origId;
    const restored = { id: restoredId, english: entry.word.english, hebrew: entry.word.hebrew };
    this._words.push(restored);
    if (entry.mastery) this._mastery[restoredId] = { ...entry.mastery };
    this._archive.splice(archiveIndex, 1);
    this._saveWords();
    this._saveMastery();
    this._saveArchive();
    return restored;
  },

  restoreAll() {
    let count = 0;
    while (this._archive.length > 0) { if (this.restoreWord(0)) count++; }
    return count;
  },

  _restoreArchivedOnWrong(wordId) {
    const idx = this._archive.findIndex(e => e.word.id === wordId);
    if (idx === -1) return;
    this.restoreWord(idx);
  },

  autoArchiveMastered() {
    const DAYS_30 = 30 * 86400000;
    const now = Date.now();
    const toArchive = [];
    this._words.forEach(w => {
      const m = this._mastery[w.id];
      if (m && m.masteredSince && (now - m.masteredSince) >= DAYS_30) {
        toArchive.push(w.id);
      }
    });
    if (toArchive.length > 0) this.archiveMultiple(toArchive);
    return toArchive.length;
  },

  getArchivedWordsForGame() {
    return this._archive
      .map(e => ({ id: e.word.id, english: e.word.english, hebrew: e.word.hebrew, _archived: true }));
  },

  recordArchivedAnswer(wordId, correct, gameMode) {
    const idx = this._archive.findIndex(e => e.word.id === wordId);
    if (idx === -1) return;
    const entry = this._archive[idx];
    if (!entry.mastery) entry.mastery = { timesCorrect: 0, timesWrong: 0, masteryLevel: 0, gameModesCorrect: [], lastSeen: null, srsInterval: 1, srsNextReview: null, recentAnswers: [] };
    const m = entry.mastery;
    if (!m.recentAnswers) m.recentAnswers = [];
    m.lastSeen = Date.now();
    if (correct) {
      m.timesCorrect++;
      m.recentAnswers.push(true);
    } else {
      m.timesWrong++;
      m.recentAnswers.push(false);
      this.restoreWord(idx);
      return;
    }
    if (m.recentAnswers.length > 10) m.recentAnswers.shift();
    this._saveArchive();
  },

  // ===== DRIP SYSTEM =====
  _loadDrip() {
    try {
      const saved = localStorage.getItem(this.DRIP_KEY);
      if (saved) { const d = JSON.parse(saved); if (d && Array.isArray(d.queue)) return d; }
    } catch (e) {}
    return { queue: [], active: [], batchSize: 5 };
  },

  _saveDrip() {
    try { localStorage.setItem(this.DRIP_KEY, JSON.stringify(this._drip)); } catch (e) {}
  },

  hasDripActive() { return this._drip.queue.length > 0 || this._drip.active.length > 0; },
  getDripStatus() {
    return {
      queued: this._drip.queue.length,
      active: this._drip.active.length,
      total: this._drip.queue.length + this._drip.active.length
    };
  },

  startDrip(wordIds, batchSize) {
    const bs = batchSize || 5;
    const first = wordIds.slice(0, bs);
    const rest = wordIds.slice(bs);
    this._drip = { queue: rest, active: first, batchSize: bs };
    first.forEach(id => this._selection.add(id));
    this._saveSelection();
    this._saveDrip();
  },

  promoteDrip() {
    if (this._drip.queue.length === 0) return 0;
    const readyForMore = this._drip.active.every(id => {
      const m = this.getMastery(id);
      const total = m.timesCorrect + m.timesWrong;
      if (total < 4) return false;
      const accuracy = Math.round((m.timesCorrect / total) * 100);
      return accuracy > 50;
    });
    if (!readyForMore) return 0;
    const addCount = Math.min(3, this._drip.queue.length);
    const newBatch = this._drip.queue.splice(0, addCount);
    this._drip.active.push(...newBatch);
    newBatch.forEach(id => this._selection.add(id));
    this._saveSelection();
    this._saveDrip();
    return addCount;
  },

  clearDrip() {
    this._drip = { queue: [], active: [], batchSize: 5 };
    this._saveDrip();
  },

  recordMappingResult(wordId, correct) {
    const m = this.getMastery(wordId);
    if (correct) {
      m.timesCorrect = 4;
      m.recentAnswers = [true, true, true, true];
      m.gameModesCorrect = [...new Set([...m.gameModesCorrect, 'mapping'])];
      m.lastSeen = Date.now();
      m.srsInterval = 2;
      m.srsNextReview = Date.now() + (2 * 86400000);
      this._syncMasteryLevel(m);
    } else {
      m.lastSeen = Date.now();
    }
    this._saveMastery();
  },

  getNotStartedWords() {
    return this._words.filter(w => this.getWordConfidence(w.id).level === 'not_started');
  }
};
