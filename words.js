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

  _words: null,
  _mastery: null,

  init() {
    this._words = this._loadWords();
    this._mastery = this._loadMastery();
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
        lastSeen: null
      };
    }
    return this._mastery[wordId];
  },

  getMasteredCount() {
    return this._words.filter(w => {
      const m = this._mastery[w.id];
      return m && m.masteryLevel >= 5;
    }).length;
  },

  recordAnswer(wordId, correct, gameMode) {
    const m = this.getMastery(wordId);
    m.lastSeen = Date.now();
    if (correct) {
      m.timesCorrect++;
      if (!m.gameModesCorrect.includes(gameMode)) {
        m.gameModesCorrect.push(gameMode);
      }
      this._checkMasteryLevelUp(m);
    } else {
      m.timesWrong++;
    }
    this._saveMastery();
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

  getWeightedRandom(count, exclude) {
    const excludeIds = new Set((exclude || []).map(w => w.id));
    const pool = this._words.filter(w => !excludeIds.has(w.id));
    if (pool.length <= count) return [...pool];

    const weighted = pool.map(w => {
      const m = this.getMastery(w.id);
      let weight = 1;
      if (m.masteryLevel <= 1) weight = 3;
      else if (m.masteryLevel <= 3) weight = 2;
      return { word: w, weight };
    });

    const selected = [];
    for (let i = 0; i < count && weighted.length > 0; i++) {
      const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
      let rand = Math.random() * totalWeight;
      let idx = 0;
      for (let j = 0; j < weighted.length; j++) {
        rand -= weighted[j].weight;
        if (rand <= 0) { idx = j; break; }
      }
      selected.push(weighted[idx].word);
      weighted.splice(idx, 1);
    }
    return selected;
  },

  getRandom(count, exclude) {
    const excludeIds = new Set((exclude || []).map(w => w.id));
    const pool = this._words.filter(w => !excludeIds.has(w.id));
    const shuffled = pool.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
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
    this._saveWords();
    this._saveMastery();
    return true;
  },

  resetProgress() {
    this._mastery = {};
    this._saveMastery();
  },

  resetAll() {
    this._words = DEFAULT_WORDS.map((w, i) => ({ id: i, ...w }));
    this._mastery = {};
    this._saveWords();
    this._saveMastery();
  }
};
