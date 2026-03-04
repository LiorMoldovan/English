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

  _words: null,
  _mastery: null,
  _selection: null,

  init() {
    this._words = this._loadWords();
    this._mastery = this._loadMastery();
    this._selection = this._loadSelection();
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

  _getActivePool() {
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
    const wasMastered = this.getWordConfidence(wordId).level === 'mastered';
    const m = this.getMastery(wordId);
    const now = Date.now();
    m.lastSeen = now;

    if (!correct) {
      this._recentMistakes[wordId] = now;
      m.timesWrong++;
      m.srsInterval = 1;
      m.recentAnswers.push(false);
      if (m.recentAnswers.length > 8) m.recentAnswers.shift();
    } else {
      const lastMistake = this._recentMistakes[wordId] || 0;
      const isFreebie = (now - lastMistake) < 30000;

      if (isFreebie) {
        delete this._recentMistakes[wordId];
      } else {
        m.timesCorrect++;
        m.recentAnswers.push(true);
        if (m.recentAnswers.length > 8) m.recentAnswers.shift();
        if (!m.gameModesCorrect.includes(gameMode)) {
          m.gameModesCorrect.push(gameMode);
        }
        this._checkMasteryLevelUp(m);
        m.srsInterval = Math.min((m.srsInterval || 1) * 2, 30);
      }
    }

    m.srsNextReview = now + (m.srsInterval * 86400000);
    this._saveMastery();
    const nowMastered = this.getWordConfidence(wordId).level === 'mastered';
    m.justMastered = !wasMastered && nowMastered;
    return m;
  },

  _checkMasteryLevelUp(m) {
    const tc = m.timesCorrect;
    const modes = m.gameModesCorrect.length;
    if (m.masteryLevel === 0 && tc >= 2) m.masteryLevel = 1;
    else if (m.masteryLevel === 1 && tc >= 5) m.masteryLevel = 2;
    else if (m.masteryLevel === 2 && tc >= 9) m.masteryLevel = 3;
    else if (m.masteryLevel === 3 && tc >= 14 && modes >= 2) m.masteryLevel = 4;
    else if (m.masteryLevel === 4 && tc >= 19 && modes >= 3) m.masteryLevel = 5;
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
    if (total === 0) return { level: 'not_started', streak: 0, modesCount: 0, accuracy: 0, pctToMastery: 0 };

    const accuracy = Math.round((m.timesCorrect / total) * 100);
    const modes = m.gameModesCorrect.length;
    const recent = m.recentAnswers || [];
    let streak = 0;
    for (let i = recent.length - 1; i >= 0; i--) {
      if (recent[i]) streak++; else break;
    }

    const isMastered = streak >= 5 && modes >= 2 && accuracy >= 90;
    const isAlmost = (streak >= 3 && accuracy >= 80) || (streak >= 5 && modes < 2) || (modes >= 2 && accuracy >= 90 && streak < 5);
    const isLearning = accuracy >= 60 || streak >= 1;

    let level = 'struggling';
    if (isMastered) level = 'mastered';
    else if (isAlmost) level = 'almost';
    else if (isLearning) level = 'learning';

    let pct = 0;
    pct += Math.min(streak / 5, 1) * 50;
    pct += Math.min(modes / 2, 1) * 25;
    pct += Math.min(accuracy / 90, 1) * 25;
    pct = Math.round(Math.min(pct, 100));
    if (isMastered) pct = 100;

    return { level, streak, modesCount: modes, accuracy, pctToMastery: pct, total };
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
    const decayPenalty = Math.min(daysSinceSeen * 3, 20);
    const score = Math.max(0, Math.min(100, accuracy - decayPenalty + m.masteryLevel * 4));
    let label = 'struggling';
    if (score >= 100) label = 'mastered';
    else if (score >= 70) label = 'good';
    else if (score >= 40) label = 'learning';
    return { score, label, accuracy, total, daysSinceSeen };
  },

  getWeightedRandom(count, exclude) {
    const excludeIds = new Set((exclude || []).map(e => typeof e === 'object' ? e.id : Number(e)));
    const pool = this._getActivePool().filter(w => !excludeIds.has(w.id));
    if (pool.length <= count) return this._shuffleArray([...pool]);

    const buckets = { struggling: [], not_started: [], learning: [], almost: [], mastered: [] };
    pool.forEach(w => {
      const c = this.getWordConfidence(w.id);
      buckets[c.level].push({ w, streak: c.streak, accuracy: c.accuracy,
        lastSeen: this.getMastery(w.id).lastSeen || 0 });
    });

    const sortWeakFirst = arr => arr.sort((a, b) => a.streak - b.streak || a.accuracy - b.accuracy || a.lastSeen - b.lastSeen);
    sortWeakFirst(buckets.struggling);
    sortWeakFirst(buckets.learning);
    this._shuffleArray(buckets.not_started);
    this._shuffleArray(buckets.almost);
    this._shuffleArray(buckets.mastered);

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

    const weakCount = Math.max(1, Math.round(count * 0.60));
    const almostCount = Math.round(count * 0.25);
    const masteredCount = count - weakCount - almostCount;

    let weakLeft = weakCount;
    weakLeft -= pickFrom(buckets.struggling, weakLeft);
    weakLeft -= pickFrom(buckets.not_started, weakLeft);
    weakLeft -= pickFrom(buckets.learning, weakLeft);

    let almostLeft = almostCount;
    almostLeft -= pickFrom(buckets.almost, almostLeft);

    let masteredLeft = masteredCount;
    masteredLeft -= pickFrom(buckets.mastered, masteredLeft);

    const leftover = weakLeft + almostLeft + masteredLeft;
    if (leftover > 0) {
      const allLeft = [...buckets.struggling, ...buckets.not_started, ...buckets.learning,
        ...buckets.almost, ...buckets.mastered]
        .map(item => item.w || item)
        .filter(w => !selected.find(s => s.id === w.id));
      this._shuffleArray(allLeft);
      pickFrom(allLeft, leftover);
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
  }
};
