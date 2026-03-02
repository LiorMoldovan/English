/* ============================================================
   WORD QUEST - מסע המילים
   Complete game engine: translations, sound, particles, state,
   progression, 5 games, screens, achievements
   ============================================================ */

// ===== TRANSLATIONS =====
const T = {
  _lang: 'en',
  en: {
    welcomeMessage: 'Ready to master 83 English words? Let\'s play!',
    startButton: 'Start!',
    dailyChallenge: 'Daily Challenge',
    gameBubble: 'Bubble Pop', gameMemory: 'Memory Match',
    gameLightning: 'Lightning Quiz', gameScramble: 'Word Scramble',
    gameFalling: 'Falling Words', gameTrueFalse: 'True or False',
    gameMatchUp: 'Match Up',
    sectionTranslation: 'Translation Games', sectionWriting: 'Writing Games',
    mastered: 'mastered', navHome: 'Home', navWords: 'Words',
    navAchievements: 'Trophies', findWord: 'Find:',
    moves: 'Moves', mixed: 'Mixed', clue: 'Clue:', hint: 'Hint',
    playAgain: 'Play Again', goHome: 'Home',
    wordsToReview: 'Words to review:',
    levelUp: 'Level Up!',
    searchWords: 'Search words...', filterAll: 'All', filterNew: 'New',
    filterLearning: 'Learning', filterMastered: 'Mastered',
    addEnglish: 'English', addHebrew: 'עברית', addWord: 'Add',
    fallingPlaceholder: 'Type the English word...',
    roundComplete: 'Round Complete!',
    gameOver: 'Game Over!',
    perfect: 'Perfect!', great: 'Great!', good: 'Good job!', nice: 'Nice try!',
    dailyPlay2: 'Play 2 different games',
    dailyStreak5: 'Get 5 correct in a row',
    dailyMaster: 'Master a new word',
    daily3Stars: 'Score 3 stars in any game',
    daily3Rounds: 'Complete 3 game rounds',
    dailyCombo3: 'Get a combo of 3 or more',
    dailyNewGame: 'Try a game you haven\'t played today',
    dailyComplete: 'Challenge Complete! 🎉',
    bonusPlay4: 'Play 4 different games',
    bonusStreak8: 'Get 8 correct in a row',
    bonusRounds5: 'Complete 5 game rounds',
    bonusStars3x2: 'Score 3 stars in 2 games',
    bonusCombo5: 'Get a combo of 5 or more',
    bonusPlay3modes: 'Play 3 different game types',
    bonusAccuracy80: 'Average 80%+ accuracy today (3+ games)',
    bonusChallenge: 'Bonus Challenge',
    bonusComplete: 'Bonus Done! 💫',
    dailyXpGoal: 'Daily XP Goal',
    dailyXpReached: '🏆 Daily XP Goal Reached!',
    highScore: 'High Score',
    startGame: 'Start Game',
    almostRemember: 'Almost! Remember this one',
    direction: 'Direction', speed: 'Speed', timePerQ: 'Time per question', time: 'Time',
    easy: 'Easy', medium: 'Medium', hard: 'Hard',
    noTimer: '😌 No Timer', easy15s: '😊 Easy · 15s', medium8s: '🙂 Medium · 8s', hard4s: '😤 Hard · 4s',
    easySpeed: '😊 Easy', mediumSpeed: '🙂 Medium', hardSpeed: '😤 Hard',
    easyRelaxed: '😊 Easy · Relaxed', hardFast: '😤 Hard · Fast',
    btnStart: '▶ Start',
    dirHeToEn: 'עברית → English', dirEnToHe: 'English → עברית',
    tfCorrect: '✓ Correct', tfWrong: '✗ Wrong',
    correctAnswer: 'Correct Answer', tryRemember: 'Try to remember this one!',
    wordOfDay: 'Word of the Day',
    wotdHint: ' letters · Try using this word today!',
    quickPractice: 'Quick Practice',
    qpNeedAttention: ' words need attention',
    qpReviewAll: 'Quick Practice · Review all words',
    parentDashboard: 'Parent Dashboard',
    dashTotalSessions: 'Total Sessions', dashActiveDays: 'Active Days',
    dashThisWeek: 'This Week', dashAvgAccuracy: 'Avg Accuracy',
    dashStreak: 'Current Streak', dashWordsMastered: 'Words Mastered',
    dashActivity: 'Activity — Last 14 Days', dashAccuracy: 'Accuracy Trend',
    dashPerGame: 'Per-Game Breakdown',
    dashNeedsWork: '⚠️ Needs Work — Focus On These',
    dashAllWords: 'All Words Status', dashRecentSessions: 'Recent Sessions',
    dashNoSessions: 'No sessions yet',
    dashNoStruggling: 'No struggling words found — great job!',
    dashNoCategory: 'No words in this category',
    dashNoHistory: 'No sessions recorded yet. Play some games!',
    dashSessions: 'sessions', dashAvg: 'Avg',
    dashFilterAll: 'All', dashStruggling: 'Struggling', dashLearning: 'Learning',
    dashGood: 'Good', dashMastered: 'Mastered', dashUnseen: 'Not Seen',
    dashToday: 'today', dashYesterday: 'yesterday', dashDaysAgo: 'd ago', dashNever: 'never',
    levelPrefix: 'Level ',
    deleteConfirm: 'Delete this word?', minWords: 'Need at least 20 words',
    selPracticing: 'Practicing selected words',
    selNone: 'None selected — using all words',
    selFocused: 'Select words for focused practice',
    selWordsSelected: ' words selected',
    selSelectAll: 'Select All', selClear: 'Clear',
    editWord: 'Edit', deleteWord: 'Delete', saveWord: 'Save', cancelWord: 'Cancel',
    practicingXWords: 'Practicing %d selected words',
    xpLabel: 'XP:',
    scoreLabel: 'Score',
    findInEnglish: 'Find in English:', findInHebrew: 'Find in Hebrew:',
    arrangeInEnglish: 'Arrange in English:', arrangeInHebrew: 'Arrange in Hebrew:',
    typeEnglish: 'Type the English word...', typeHebrew: 'Type the Hebrew word...',
    gameBingo: 'Word Bingo', gameSprint: 'Translation Sprint', gameWordSpy: 'Word Spy',
    gameCatSort: 'Category Sort', gameFillIn: 'Sentence Fill',
    bingoFind: 'Find:', bingoComplete: 'BINGO!',
    sprintGo: 'GO!',
    spyFindPairs: 'Find all matching pairs!',
    csWhichBucket: 'Which one is correct?',
    fiCompleteThe: 'Complete the sentence:',
    instrBubble: 'Pop the bubble with the correct translation!',
    instrMemory: 'Flip cards and find matching English-Hebrew pairs!',
    instrLightning: 'Choose the correct translation before time runs out!',
    instrScramble: 'Unscramble the letters to spell the translation!',
    instrFalling: 'Type the translation before the word hits the bottom!',
    instrTrueFalse: 'Is this translation correct? Tap Correct or Wrong!',
    instrMatchUp: 'Match each English word with its Hebrew translation!',
    instrBingo: 'Find the matching translation on the grid!',
    instrSprint: 'Pick the right translation — how long can you streak?',
    instrWordSpy: 'Find all English-Hebrew pairs hidden in the grid!',
    instrCatSort: 'Tap the correct translation from the 3 options!',
    instrFillIn: 'Read the Hebrew hint and pick the missing English word!',
    labelStars: 'Stars', labelAchievements: 'Achievements',
    wordProgress: 'Word Progress', wordReport: 'Word Report',
    reportFocus: '🔴 Focus on These', reportLearning: '🟡 Still Learning',
    reportGood: '🟢 Almost There', reportMastered: '⭐ Mastered',
    reportUnseen: '⬜ Not Practiced Yet',
    reportOverall: 'Overall Progress', reportPracticed: 'practiced',
    reportAccAvg: 'Average Accuracy', reportTotalPractice: 'Total Practices',
    reportLastActive: 'Last Active',
    reportNone: 'No words in this section',
    reportPracticeTip: 'Practice',
    legMastered: 'Mastered', legGood: 'Good', legLearning: 'Learning',
    legStruggling: 'Struggling', legUnseen: 'Unseen',
    reportTimes: 'times',
  },
  he: {
    welcomeMessage: '!מוכנה לשלוט ב-83 מילים באנגלית? בואי נשחק',
    startButton: '!התחלה',
    dailyChallenge: 'אתגר יומי',
    gameBubble: 'בועות קסם', gameMemory: 'זיכרון',
    gameLightning: 'משחק מילים', gameScramble: 'פאזל מילים',
    gameFalling: 'מילים נופלות', gameTrueFalse: 'נכון או לא',
    gameMatchUp: 'חיבור מילים',
    sectionTranslation: 'משחקי תרגום', sectionWriting: 'משחקי כתיבה',
    mastered: 'נשלטו', navHome: 'בית', navWords: 'מילים',
    navAchievements: 'גביעים', findWord: ':מצאי',
    moves: 'מהלכים', mixed: 'מעורב', clue: ':רמז', hint: 'רמז',
    playAgain: 'שחקי שוב', goHome: 'בית',
    wordsToReview: ':מילים לחזרה',
    levelUp: '!עלית רמה',
    searchWords: '...חיפוש מילים', filterAll: 'הכל', filterNew: 'חדשות',
    filterLearning: 'בלמידה', filterMastered: 'נשלטו',
    addEnglish: 'English', addHebrew: 'עברית', addWord: 'הוספה',
    fallingPlaceholder: '...הקלידי את המילה באנגלית',
    roundComplete: '!סיבוב הושלם',
    gameOver: '!המשחק נגמר',
    perfect: '!מושלם', great: '!מעולה', good: '!כל הכבוד', nice: '!ניסיון טוב',
    dailyPlay2: 'שחקי 2 משחקים שונים',
    dailyStreak5: 'ענו נכון 5 פעמים ברצף',
    dailyMaster: 'שלטי במילה חדשה',
    daily3Stars: 'קבלי 3 כוכבים במשחק כלשהו',
    daily3Rounds: 'השלימי 3 סיבובים',
    dailyCombo3: 'השיגי קומבו של 3 ומעלה',
    dailyNewGame: 'נסי משחק שלא שיחקת היום',
    dailyComplete: '🎉 !האתגר הושלם',
    bonusPlay4: 'שחקי 4 משחקים שונים',
    bonusStreak8: 'ענו נכון 8 פעמים ברצף',
    bonusRounds5: 'השלימי 5 סיבובים',
    bonusStars3x2: 'קבלי 3 כוכבים ב-2 משחקים',
    bonusCombo5: 'השיגי קומבו של 5 ומעלה',
    bonusPlay3modes: 'שחקי 3 סוגי משחקים שונים',
    bonusAccuracy80: 'ממוצע 80%+ דיוק היום (3+ משחקים)',
    bonusChallenge: 'אתגר בונוס',
    bonusComplete: '💫 !בונוס הושלם',
    dailyXpGoal: 'יעד נקודות יומי',
    dailyXpReached: '🏆 !יעד הנקודות היומי הושג',
    highScore: 'שיא',
    startGame: 'התחלה',
    almostRemember: 'כמעט! תזכרי את זה',
    direction: 'כיוון', speed: 'מהירות', timePerQ: 'זמן לכל שאלה', time: 'זמן',
    easy: 'קל', medium: 'בינוני', hard: 'קשה',
    noTimer: '😌 בלי זמן', easy15s: '😊 קל · 15 שניות', medium8s: '🙂 בינוני · 8 שניות', hard4s: '😤 קשה · 4 שניות',
    easySpeed: '😊 קל', mediumSpeed: '🙂 בינוני', hardSpeed: '😤 קשה',
    easyRelaxed: '😊 קל · רגוע', hardFast: '😤 קשה · מהיר',
    btnStart: '▶ התחלה',
    dirHeToEn: 'עברית → English', dirEnToHe: 'English → עברית',
    tfCorrect: '✓ נכון', tfWrong: '✗ לא נכון',
    correctAnswer: 'התשובה הנכונה', tryRemember: '!נסי לזכור את זה',
    wordOfDay: 'מילת היום',
    wotdHint: ' אותיות · נסי להשתמש במילה היום!',
    quickPractice: 'תרגול מהיר',
    qpNeedAttention: ' מילים דורשות תשומת לב',
    qpReviewAll: 'תרגול מהיר · חזרו על הכל',
    parentDashboard: 'לוח בקרה להורים',
    dashTotalSessions: 'סה"כ משחקים', dashActiveDays: 'ימים פעילים',
    dashThisWeek: 'השבוע', dashAvgAccuracy: 'דיוק ממוצע',
    dashStreak: 'רצף נוכחי', dashWordsMastered: 'מילים נשלטו',
    dashActivity: 'פעילות — 14 הימים האחרונים', dashAccuracy: 'מגמת דיוק',
    dashPerGame: 'פירוט לפי משחק',
    dashNeedsWork: '⚠️ דורש תרגול — התמקדי באלה',
    dashAllWords: 'סטטוס כל המילים', dashRecentSessions: 'משחקים אחרונים',
    dashNoSessions: 'אין משחקים עדיין',
    dashNoStruggling: '!אין מילים קשות — כל הכבוד',
    dashNoCategory: 'אין מילים בקטגוריה זו',
    dashNoHistory: '!עוד לא שיחקת. בואי נשחק',
    dashSessions: 'משחקים', dashAvg: 'ממוצע',
    dashFilterAll: 'הכל', dashStruggling: 'מתקשה', dashLearning: 'בלמידה',
    dashGood: 'טוב', dashMastered: 'נשלטו', dashUnseen: 'לא נראה',
    dashToday: 'היום', dashYesterday: 'אתמול', dashDaysAgo: ' ימים', dashNever: 'אף פעם',
    levelPrefix: 'רמה ',
    deleteConfirm: 'למחוק מילה זו?', minWords: 'צריך לפחות 20 מילים',
    selPracticing: 'תרגול מילים נבחרות',
    selNone: 'לא נבחרו — משתמשים בכל המילים',
    selFocused: 'בחרו מילים לתרגול ממוקד',
    selWordsSelected: ' מילים נבחרו',
    selSelectAll: 'בחר הכל', selClear: 'נקה',
    editWord: 'עריכה', deleteWord: 'מחיקה', saveWord: 'שמירה', cancelWord: 'ביטול',
    practicingXWords: 'מתרגלים %d מילים נבחרות',
    xpLabel: ':נקודות',
    scoreLabel: 'ניקוד',
    findInEnglish: ':מצאי באנגלית', findInHebrew: ':מצאי בעברית',
    arrangeInEnglish: ':סדרי באנגלית', arrangeInHebrew: ':סדרי בעברית',
    typeEnglish: '...הקלידי את המילה באנגלית', typeHebrew: '...הקלידי את המילה בעברית',
    gameBingo: 'בינגו מילים', gameSprint: 'ספרינט תרגום', gameWordSpy: 'מרגל מילים',
    gameCatSort: 'מיון מילים', gameFillIn: 'השלמת משפטים',
    bingoFind: ':מצאי', bingoComplete: '!בינגו',
    sprintGo: '!קדימה',
    spyFindPairs: '!מצאי את כל הזוגות',
    csWhichBucket: '?איזה תרגום נכון',
    fiCompleteThe: ':השלימי את המשפט',
    instrBubble: '!פוצצי את הבועה עם התרגום הנכון',
    instrMemory: '!הפכי קלפים ומצאי זוגות אנגלית-עברית',
    instrLightning: '!בחרי את התרגום הנכון לפני שהזמן נגמר',
    instrScramble: '!סדרי את האותיות כדי לאיית את התרגום',
    instrFalling: '!הקלידי את התרגום לפני שהמילה נופלת',
    instrTrueFalse: '!האם התרגום נכון? לחצי נכון או לא נכון',
    instrMatchUp: '!חברי כל מילה באנגלית לתרגום שלה בעברית',
    instrBingo: '!מצאי את התרגום המתאים על הלוח',
    instrSprint: '!בחרי את התרגום הנכון — כמה תצליחי ברצף',
    instrWordSpy: '!מצאי את כל הזוגות אנגלית-עברית בלוח',
    instrCatSort: '!לחצי על התרגום הנכון מבין 3 האפשרויות',
    instrFillIn: '!קראי את הרמז בעברית ובחרי את המילה החסרה',
    labelStars: 'כוכבים', labelAchievements: 'הישגים',
    wordProgress: 'התקדמות מילים', wordReport: 'דוח מילים',
    reportFocus: '🔴 להתמקד באלה', reportLearning: '🟡 עדיין בלמידה',
    reportGood: '🟢 כמעט שם', reportMastered: '⭐ נשלטו',
    reportUnseen: '⬜ עוד לא תורגלו',
    reportOverall: 'התקדמות כללית', reportPracticed: 'תורגלו',
    reportAccAvg: 'דיוק ממוצע', reportTotalPractice: 'סה"כ תרגולים',
    reportLastActive: 'פעילות אחרונה',
    reportNone: 'אין מילים בחלק זה',
    reportPracticeTip: 'תרגול',
    legMastered: 'נשלטו', legGood: 'טוב', legLearning: 'בלמידה',
    legStruggling: 'מתקשה', legUnseen: 'לא נראו',
    reportTimes: 'פעמים',
  },
  get(key) { return this[this._lang][key] || this.en[key] || key; },
  setLang(lang) {
    this._lang = lang;
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'he');
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (this[lang][key]) el.textContent = this.get(key);
    });
    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
      const key = el.getAttribute('data-t-placeholder');
      if (this[lang][key]) el.placeholder = this.get(key);
    });
    document.querySelectorAll('[data-t-title]').forEach(el => {
      const key = el.getAttribute('data-t-title');
      if (this[lang][key]) el.title = this.get(key);
    });
    try { localStorage.setItem('wordquest_lang', lang); } catch(e) {}
  }
};

// ===== SOUND ENGINE =====
const Sound = {
  _enabled: false,
  _ctx: null,

  _getCtx() {
    if (!this._ctx) {
      this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this._ctx.state === 'suspended') this._ctx.resume();
    return this._ctx;
  },

  _play(freq, duration, type = 'sine', volume = 0.15) {
    if (!this._enabled) return;
    try {
      const ctx = this._getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch(e) {}
  },

  correct() {
    this._play(523, 0.12); setTimeout(() => this._play(659, 0.15), 100);
  },
  wrong() { this._play(220, 0.25, 'triangle', 0.1); },
  combo(n) {
    const base = 523;
    this._play(base * (1 + n * 0.15), 0.1);
    setTimeout(() => this._play(base * (1.3 + n * 0.15), 0.12), 80);
  },
  pop() { this._play(800, 0.05, 'sine', 0.08); },
  levelUp() {
    [440, 554, 659, 880].forEach((f, i) => {
      setTimeout(() => this._play(f, 0.2, 'sine', 0.12), i * 120);
    });
  },
  achievement() {
    [659, 784, 988, 1319].forEach((f, i) => {
      setTimeout(() => this._play(f, 0.25, 'sine', 0.1), i * 150);
    });
  },

  toggle() {
    this._enabled = !this._enabled;
    if (this._enabled) this._getCtx();
    try { localStorage.setItem('wordquest_sound', this._enabled ? '1' : '0'); } catch(e) {}
    return this._enabled;
  }
};

// ===== PARTICLE SYSTEM =====
const Particles = {
  _canvas: null, _ctx: null, _particles: [], _animating: false,

  init() {
    this._canvas = document.getElementById('particle-canvas');
    this._ctx = this._canvas.getContext('2d');
    this._resize();
    window.addEventListener('resize', () => this._resize());
  },

  _resize() {
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
  },

  _createParticle(x, y, options = {}) {
    return {
      x, y,
      vx: (Math.random() - 0.5) * (options.spread || 8),
      vy: (Math.random() - 0.5) * (options.spread || 8) - (options.upward || 2),
      size: Math.random() * (options.maxSize || 6) + 2,
      color: options.colors ? options.colors[Math.floor(Math.random() * options.colors.length)]
        : ['#ff6b6b','#ffd93d','#4ecdc4','#a855f7','#f472b6','#6366f1'][Math.floor(Math.random()*6)],
      life: 1,
      decay: 0.015 + Math.random() * 0.01,
      gravity: options.gravity || 0.1,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
    };
  },

  confetti(x, y, count = 30) {
    for (let i = 0; i < count; i++) {
      if (this._particles.length < 200) {
        this._particles.push(this._createParticle(x, y, { spread: 10, upward: 4 }));
      }
    }
    if (!this._animating) this._animate();
  },

  sparkle(x, y) {
    for (let i = 0; i < 12; i++) {
      if (this._particles.length < 200) {
        this._particles.push(this._createParticle(x, y, {
          spread: 4, upward: 1, maxSize: 4,
          colors: ['#ffd93d', '#fff', '#fbbf24']
        }));
      }
    }
    if (!this._animating) this._animate();
  },

  celebration() {
    const w = this._canvas.width, h = this._canvas.height;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.confetti(Math.random() * w, Math.random() * h * 0.5, 25);
      }, i * 200);
    }
  },

  _animate() {
    this._animating = true;
    const ctx = this._ctx;
    const loop = () => {
      ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      for (let i = this._particles.length - 1; i >= 0; i--) {
        const p = this._particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.life -= p.decay;
        p.rotation += p.rotSpeed;
        if (p.life <= 0) { this._particles.splice(i, 1); continue; }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size * 0.6);
        ctx.restore();
      }
      if (this._particles.length > 0) {
        requestAnimationFrame(loop);
      } else {
        this._animating = false;
      }
    };
    requestAnimationFrame(loop);
  }
};

// ===== GAME STATE =====
const GameState = {
  KEY: 'wordquest_state',
  HISTORY_KEY: 'wordquest_history',
  data: null,

  defaults() {
    return {
      xp: 0, level: 1, totalStars: 0,
      streak: 0, lastPlayDate: null, streakShield: false,
      gamesPlayed: { bubble: 0, memory: 0, lightning: 0, scramble: 0, falling: 0, truefalse: 0, matchup: 0, bingo: 0, sprint: 0, wordspy: 0, catsort: 0, fillin: 0 },
      achievements: [],
      dailyChallenge: { date: null, type: null, progress: 0, completed: false },
      bonusChallenge: { date: null, xpTarget: 0, xpEarned: 0, completed: false, tier: 0 },
      todayGamesPlayed: { date: null, modes: [], rounds: 0, maxCombo: 0, maxStreak: 0, gotStars3: false, masteredNewWord: false },
      fallingHighScore: 0,
      sprintHighScore: 0,
      firstTime: true,
    };
  },

  load() {
    try {
      const saved = localStorage.getItem(this.KEY);
      if (saved) { this.data = { ...this.defaults(), ...JSON.parse(saved) }; }
      else { this.data = this.defaults(); }
    } catch(e) { this.data = this.defaults(); }
  },

  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); } catch(e) {}
  },

  logSession(gameMode, correct, total, stars, xp) {
    try {
      const history = this.getHistory();
      history.push({
        ts: Date.now(),
        game: gameMode,
        correct, total, stars, xp,
        accuracy: total > 0 ? Math.round((correct / total) * 100) : 0
      });
      if (history.length > 500) history.splice(0, history.length - 500);
      localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
    } catch(e) {}
  },

  getHistory() {
    try {
      const saved = localStorage.getItem(this.HISTORY_KEY);
      if (saved) { const h = JSON.parse(saved); if (Array.isArray(h)) return h; }
    } catch(e) {}
    return [];
  },

  getLevelThreshold(level) {
    return level * level * 50 + 50;
  },

  getLevelColor() {
    const l = this.data.level;
    if (l >= 15) return 'diamond';
    if (l >= 10) return 'gold';
    if (l >= 5) return 'silver';
    return '';
  }
};

// ===== PROGRESSION =====
const Progress = {
  _addingXP: false,
  addXP(amount) {
    GameState.data.xp += amount;
    if (!this._addingXP) {
      this._addingXP = true;
      DailyChallenge.recordXP(amount);
      this._addingXP = false;
    }
    const threshold = GameState.getLevelThreshold(GameState.data.level);
    if (GameState.data.xp >= threshold) {
      GameState.data.xp -= threshold;
      GameState.data.level++;
      GameState.save();
      UI.updateStats();
      this._showLevelUp();
      Sound.levelUp();
      return true;
    }
    GameState.save();
    UI.updateStats();
    return false;
  },

  _showLevelUp() {
    const overlay = document.getElementById('levelup-overlay');
    const badge = document.getElementById('levelup-badge');
    const num = document.getElementById('levelup-number');
    badge.textContent = GameState.data.level;
    badge.className = 'levelup-badge ' + GameState.getLevelColor();
    num.textContent = T.get('levelPrefix') + GameState.data.level;
    overlay.classList.remove('hidden');
    Particles.celebration();
    setTimeout(() => { overlay.classList.add('hidden'); }, 3000);
  },

  updateStreak() {
    const today = new Date().toDateString();
    const last = GameState.data.lastPlayDate;
    if (last === today) return;

    if (last) {
      const lastDate = new Date(last);
      const todayDate = new Date(today);
      const diff = Math.floor((todayDate - lastDate) / 86400000);
      if (diff === 1) {
        GameState.data.streak++;
      } else if (diff > 1) {
        if (GameState.data.streakShield) {
          GameState.data.streakShield = false;
          if (diff === 2) GameState.data.streak++;
          else GameState.data.streak = 1;
        } else {
          GameState.data.streak = 1;
        }
      }
    } else {
      GameState.data.streak = 1;
    }
    GameState.data.lastPlayDate = today;
    GameState.save();
  },

  recordGameComplete(gameMode, stars, xpEarned, missedWords, correct, total) {
    const d = GameState.data;
    d.gamesPlayed[gameMode] = (d.gamesPlayed[gameMode] || 0) + 1;
    d.totalStars += stars;

    const today = new Date().toDateString();
    if (d.todayGamesPlayed.date !== today) {
      d.todayGamesPlayed = { date: today, modes: [], rounds: 0, maxCombo: 0, maxStreak: 0, gotStars3: false, masteredNewWord: false };
    }
    if (!d.todayGamesPlayed.modes.includes(gameMode)) {
      d.todayGamesPlayed.modes.push(gameMode);
    }
    d.todayGamesPlayed.rounds++;
    if (stars === 3) d.todayGamesPlayed.gotStars3 = true;

    if (stars === 3) d.streakShield = true;

    GameState.logSession(gameMode, correct || 0, total || 0, stars, xpEarned);

    this.updateStreak();
    this.addXP(xpEarned);
    DailyChallenge.checkProgress();
    Achievements.checkAll();
    GameState.save();
    UI.updateStats();
  }
};

// ===== DAILY CHALLENGE =====
const DailyChallenge = {
  types: [
    { id: 'play2', textKey: 'dailyPlay2', target: 2 },
    { id: 'streak5', textKey: 'dailyStreak5', target: 5 },
    { id: 'master', textKey: 'dailyMaster', target: 1 },
    { id: 'stars3', textKey: 'daily3Stars', target: 1 },
    { id: 'rounds3', textKey: 'daily3Rounds', target: 3 },
    { id: 'combo3', textKey: 'dailyCombo3', target: 3 },
    { id: 'newGame', textKey: 'dailyNewGame', target: 1 },
  ],

  bonusTypes: [
    { id: 'play4', textKey: 'bonusPlay4', target: 4 },
    { id: 'streak8', textKey: 'bonusStreak8', target: 8 },
    { id: 'rounds5', textKey: 'bonusRounds5', target: 5 },
    { id: 'stars3x2', textKey: 'bonusStars3x2', target: 2 },
    { id: 'combo5', textKey: 'bonusCombo5', target: 5 },
    { id: 'play3modes', textKey: 'bonusPlay3modes', target: 3 },
    { id: 'accuracy80', textKey: 'bonusAccuracy80', target: 1 },
  ],

  generate() {
    const today = new Date().toDateString();
    const d = GameState.data.dailyChallenge;
    if (d.date === today) return;
    const dayIdx = new Date().getDay();
    const type = this.types[dayIdx];
    GameState.data.dailyChallenge = { date: today, type: type.id, progress: 0, completed: false };
    this._generateBonus(today);
    this._generateXpTarget(today);
    GameState.save();
  },

  _generateBonus(today) {
    const bonusIdx = (new Date().getDay() + 3) % this.bonusTypes.length;
    GameState.data.bonusChallenge = {
      date: today, type: this.bonusTypes[bonusIdx].id,
      progress: 0, completed: false, tier: 0
    };
  },

  _generateXpTarget(today) {
    const history = GameState.getHistory();
    const last7 = history.filter(s => s.ts > Date.now() - 7 * 86400000);

    let avgDailyXp = 80;
    if (last7.length > 0) {
      const days = new Set(last7.map(s => new Date(s.ts).toDateString()));
      const totalXp = last7.reduce((sum, s) => sum + s.xp, 0);
      avgDailyXp = Math.round(totalXp / Math.max(days.size, 1));
    }

    const target = Math.max(50, Math.round(avgDailyXp * 1.15 / 10) * 10);
    const b = GameState.data.bonusChallenge;
    b.xpTarget = target;
    b.xpEarned = 0;
  },

  getCurrent() {
    this.generate();
    const d = GameState.data.dailyChallenge;
    const type = this.types.find(t => t.id === d.type) || this.types[0];
    return { ...type, progress: d.progress, completed: d.completed };
  },

  getBonus() {
    const b = GameState.data.bonusChallenge;
    if (!b || !b.date) return null;
    const type = this.bonusTypes.find(t => t.id === b.type);
    return { ...type, progress: b.progress, completed: b.completed, tier: b.tier,
      xpTarget: b.xpTarget, xpEarned: b.xpEarned, xpCompleted: b.xpEarned >= b.xpTarget };
  },

  checkProgress() {
    const d = GameState.data.dailyChallenge;
    const td = GameState.data.todayGamesPlayed;

    if (!d.completed) {
      let progress = 0;
      switch (d.type) {
        case 'play2': progress = td.modes.length; break;
        case 'streak5': progress = Math.min(td.maxStreak, 5); break;
        case 'master': progress = td.masteredNewWord ? 1 : 0; break;
        case 'stars3': progress = td.gotStars3 ? 1 : 0; break;
        case 'rounds3': progress = td.rounds; break;
        case 'combo3': progress = td.maxCombo; break;
        case 'newGame': {
          const allModes = ['bubble','memory','lightning','scramble','falling','truefalse','matchup','bingo','sprint','wordspy','catsort','fillin'];
          const played = td.modes;
          progress = played.length > 0 && allModes.some(m => played.includes(m) && !(GameState.data.gamesPlayed[m] > 1)) ? 1 : 0;
          break;
        }
      }
      const type = this.types.find(t => t.id === d.type);
      d.progress = Math.min(progress, type ? type.target : 1);
      if (type && d.progress >= type.target) {
        d.completed = true;
        Progress.addXP(50);
        Sound.levelUp();
        Particles.celebration();
        UI.showDailyChallengeComplete();
      }
    }

    this._checkBonusProgress();
    GameState.save();
  },

  _checkBonusProgress() {
    const b = GameState.data.bonusChallenge;
    const td = GameState.data.todayGamesPlayed;
    if (!b || !b.date || !td) return;

    if (!b.completed) {
      let progress = 0;
      switch (b.type) {
        case 'play4': progress = td.modes.length; break;
        case 'streak8': progress = Math.min(td.maxStreak, 8); break;
        case 'rounds5': progress = td.rounds; break;
        case 'stars3x2': {
          const history = GameState.getHistory();
          const todayStr = new Date().toDateString();
          progress = history.filter(s => new Date(s.ts).toDateString() === todayStr && s.stars === 3).length;
          break;
        }
        case 'combo5': progress = td.maxCombo; break;
        case 'play3modes': progress = td.modes.length; break;
        case 'accuracy80': {
          const history = GameState.getHistory();
          const todayStr = new Date().toDateString();
          const todaySessions = history.filter(s => new Date(s.ts).toDateString() === todayStr);
          if (todaySessions.length >= 3) {
            const avg = todaySessions.reduce((s, h) => s + h.accuracy, 0) / todaySessions.length;
            progress = avg >= 80 ? 1 : 0;
          }
          break;
        }
      }
      const type = this.bonusTypes.find(t => t.id === b.type);
      b.progress = Math.min(progress, type ? type.target : 1);
      if (type && b.progress >= type.target && !b.completed) {
        b.completed = true;
        b.tier++;
        Progress.addXP(30);
        Sound.correct();
        Particles.celebration();
        UI.showBonusChallengeComplete();
      }
    }

    if (!b.xpCompleted && b.xpEarned >= b.xpTarget) {
      b.xpCompleted = true;
      Progress.addXP(40);
      Sound.levelUp();
      Particles.celebration();
      UI.showXpGoalComplete();
    }
  },

  recordXP(amount) {
    const b = GameState.data.bonusChallenge;
    const today = new Date().toDateString();
    if (b && b.date === today) {
      b.xpEarned += amount;
      this._checkBonusProgress();
    }
  },

  reportCombo(n) {
    const today = new Date().toDateString();
    const td = GameState.data.todayGamesPlayed;
    if (td.date !== today) return;
    if (n > td.maxCombo) td.maxCombo = n;
    GameState.save();
    this.checkProgress();
  },

  reportStreak(n) {
    const today = new Date().toDateString();
    const td = GameState.data.todayGamesPlayed;
    if (td.date !== today) return;
    if (n > td.maxStreak) td.maxStreak = n;
    GameState.save();
    this.checkProgress();
  },

  reportMastery() {
    const today = new Date().toDateString();
    const td = GameState.data.todayGamesPlayed;
    if (td.date !== today) return;
    td.masteredNewWord = true;
    GameState.save();
    this.checkProgress();
  }
};

// ===== ACHIEVEMENTS =====
const Achievements = {
  defs: [
    { id: 'first_steps', icon: '👣', name_en: 'First Steps', name_he: 'צעדים ראשונים',
      desc_en: 'Complete your first game', desc_he: 'השלימי את המשחק הראשון',
      check: () => Object.values(GameState.data.gamesPlayed).some(v => v > 0) },
    { id: 'sharp_memory', icon: '🧠', name_en: 'Sharp Memory', name_he: 'זיכרון חד',
      desc_en: 'Complete Memory Match in ≤10 moves', desc_he: 'השלימי זיכרון ב-10 מהלכים או פחות',
      check: () => Achievements._flags.memoryPerfect },
    { id: 'speed_demon', icon: '⚡', name_en: 'Speed Demon', name_he: 'שד מהירות',
      desc_en: 'Get 10/10 in Lightning Quiz', desc_he: 'קבלי 10/10 במשחק מילים',
      check: () => Achievements._flags.lightningPerfect },
    { id: 'combo_master', icon: '🔥', name_en: 'Combo Master', name_he: 'מאסטר קומבו',
      desc_en: 'Get a 5x combo in Bubble Pop', desc_he: 'השיגי קומבו של 5 בבועות',
      check: () => Achievements._flags.combo5 },
    { id: 'puzzle_solver', icon: '🧩', name_en: 'Puzzle Solver', name_he: 'פותרת פאזלים',
      desc_en: 'Complete Word Scramble with no hints', desc_he: 'השלימי פאזל מילים בלי רמזים',
      check: () => Achievements._flags.scrambleNoHints },
    { id: 'survivor', icon: '🛡️', name_en: 'Survivor', name_he: 'שורדת',
      desc_en: 'Score 20+ in Falling Words', desc_he: 'השיגי 20+ במילים נופלות',
      check: () => Achievements._flags.falling20 },
    { id: 'word_wizard', icon: '🪄', name_en: 'Word Wizard', name_he: 'קוסמת מילים',
      desc_en: 'Master 10 words', desc_he: 'שלטי ב-10 מילים',
      check: () => WordManager.getMasteredCount() >= 10 },
    { id: 'vocab_hero', icon: '⭐', name_en: 'Vocabulary Hero', name_he: 'גיבורת אוצר מילים',
      desc_en: 'Master 40 words', desc_he: 'שלטי ב-40 מילים',
      check: () => WordManager.getMasteredCount() >= 40 },
    { id: 'vocab_champ', icon: '🏆', name_en: 'Vocabulary Champion', name_he: 'אלופת אוצר מילים',
      desc_en: 'Master all words', desc_he: 'שלטי בכל המילים',
      check: () => WordManager.getMasteredCount() >= WordManager.getCount() },
    { id: 'week_warrior', icon: '📅', name_en: 'Week Warrior', name_he: 'לוחמת שבוע',
      desc_en: '7-day streak', desc_he: 'רצף של 7 ימים',
      check: () => GameState.data.streak >= 7 },
    { id: 'unstoppable', icon: '🚀', name_en: 'Unstoppable', name_he: 'בלתי ניתנת לעצירה',
      desc_en: '30-day streak', desc_he: 'רצף של 30 יום',
      check: () => GameState.data.streak >= 30 },
    { id: 'explorer', icon: '🧭', name_en: 'Explorer', name_he: 'חוקרת',
      desc_en: 'Play every game mode', desc_he: 'שחקי בכל סוגי המשחקים',
      check: () => Object.values(GameState.data.gamesPlayed).every(v => v > 0) },
  ],

  _flags: {},

  resetFlags() {
    this._flags = {
      memoryPerfect: false, lightningPerfect: false,
      combo5: false, scrambleNoHints: false, falling20: false,
    };
  },

  checkAll() {
    const unlocked = GameState.data.achievements;
    for (const a of this.defs) {
      if (unlocked.includes(a.id)) continue;
      if (a.check()) {
        unlocked.push(a.id);
        GameState.save();
        this._showUnlock(a);
      }
    }
  },

  _showUnlock(achievement) {
    const overlay = document.getElementById('achievement-overlay');
    document.getElementById('achievement-unlock-icon').textContent = achievement.icon;
    const lang = T._lang;
    document.getElementById('achievement-unlock-title').textContent =
      lang === 'he' ? achievement.name_he : achievement.name_en;
    document.getElementById('achievement-unlock-desc').textContent =
      lang === 'he' ? achievement.desc_he : achievement.desc_en;
    overlay.classList.remove('hidden');
    Particles.celebration();
    Sound.achievement();
    setTimeout(() => { overlay.classList.add('hidden'); }, 3500);
  },

  getUnlockedCount() {
    return GameState.data.achievements.length;
  }
};

// ===== UI CONTROLLER =====
const UI = {
  _currentScreen: null,
  _currentGame: null,

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const screen = document.getElementById('screen-' + id);
    if (screen) {
      screen.classList.remove('hidden');
      screen.style.animation = 'none';
      screen.offsetHeight;
      screen.style.animation = '';
    }
    this._currentScreen = id;

    const isHomeRelated = ['home', 'words', 'achievements'].includes(id);
    const nav = document.querySelector('.bottom-nav');
    if (nav) nav.classList.toggle('hidden', !isHomeRelated);
    if (isHomeRelated) {
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.nav === id);
      });
    }

    if (id === 'home') this.updateHomeScreen();
    if (id === 'words') WordManagerUI.render();
    if (id === 'achievements') AchievementsUI.render();
  },

  updateStats() {
    const d = GameState.data;
    const threshold = GameState.getLevelThreshold(d.level);
    const pct = Math.min((d.xp / threshold) * 100, 100);

    const levelBadge = document.getElementById('level-badge');
    document.getElementById('level-number').textContent = d.level;
    levelBadge.className = 'level-badge ' + GameState.getLevelColor();

    const xpBar = document.getElementById('xp-bar');
    if (xpBar) xpBar.style.width = pct + '%';
    const xpText = document.getElementById('xp-text');
    if (xpText) xpText.textContent = d.xp + ' / ' + threshold + ' XP';

    const streakCount = document.getElementById('streak-count');
    if (streakCount) streakCount.textContent = d.streak;
    const streakBadge = document.getElementById('streak-badge');
    if (streakBadge) streakBadge.classList.toggle('on-fire', d.streak >= 3);

    const words = WordManager.getAll();
    const totalWords = words.length;
    const counts = { mastered: 0, good: 0, learning: 0, struggling: 0, unseen: 0 };
    words.forEach(w => { counts[WordManager.getWordStrength(w.id).label]++; });

    const pcMastered = document.getElementById('pc-mastered');
    const pcGood = document.getElementById('pc-good');
    const pcLearning = document.getElementById('pc-learning');
    const pcStruggling = document.getElementById('pc-struggling');
    if (pcMastered && totalWords > 0) {
      pcMastered.style.width = (counts.mastered / totalWords * 100) + '%';
      pcGood.style.width = (counts.good / totalWords * 100) + '%';
      pcLearning.style.width = (counts.learning / totalWords * 100) + '%';
      pcStruggling.style.width = (counts.struggling / totalWords * 100) + '%';
    }
    const legend = document.getElementById('pc-legend');
    if (legend) {
      const items = [
        { cls: 'mastered', key: 'legMastered', count: counts.mastered },
        { cls: 'good', key: 'legGood', count: counts.good },
        { cls: 'learning', key: 'legLearning', count: counts.learning },
        { cls: 'struggling', key: 'legStruggling', count: counts.struggling },
        { cls: 'unseen', key: 'legUnseen', count: counts.unseen }
      ];
      legend.innerHTML = items.map(i =>
        '<span class="pc-leg-item"><span class="pc-leg-dot ' + i.cls + '"></span>' + T.get(i.key) + ' ' + i.count + '</span>'
      ).join('');
    }

    const totalStars = document.getElementById('total-stars');
    if (totalStars) totalStars.textContent = d.totalStars;
    const totalAch = document.getElementById('total-achievements');
    if (totalAch) totalAch.textContent = Achievements.getUnlockedCount();
  },

  updateHomeScreen() {
    this.updateStats();
    const ch = DailyChallenge.getCurrent();
    const dailyText = document.getElementById('daily-text');
    if (dailyText) dailyText.textContent = T.get(ch.textKey);
    const dailyProgress = document.getElementById('daily-progress');
    if (dailyProgress) dailyProgress.style.width = Math.min((ch.progress / ch.target) * 100, 100) + '%';
    const dailyCard = document.getElementById('daily-challenge');
    if (dailyCard) dailyCard.classList.toggle('completed', ch.completed);

    const bonus = DailyChallenge.getBonus();
    const bonusCard = document.getElementById('daily-bonus');
    if (bonusCard && bonus) {
      if (ch.completed) {
        bonusCard.classList.remove('hidden');
        document.getElementById('bonus-text').textContent =
          bonus.completed ? T.get('bonusComplete') : T.get(bonus.textKey);
        const bonusPct = bonus.target > 0 ? Math.min((bonus.progress / bonus.target) * 100, 100) : 0;
        document.getElementById('bonus-progress').style.width = bonusPct + '%';
        bonusCard.classList.toggle('completed', bonus.completed);
      } else {
        bonusCard.classList.add('hidden');
      }
    }

    const xpCard = document.getElementById('daily-xp-card');
    if (xpCard && bonus) {
      document.getElementById('daily-xp-earned').textContent = bonus.xpEarned;
      document.getElementById('daily-xp-target').textContent = bonus.xpTarget;
      const xpPct = bonus.xpTarget > 0 ? Math.min((bonus.xpEarned / bonus.xpTarget) * 100, 100) : 0;
      document.getElementById('daily-xp-progress').style.width = xpPct + '%';
      xpCard.classList.toggle('completed', bonus.xpCompleted);
    }

    this._renderWordOfDay();
    this._renderMotivation();
    this._renderQuickPractice();

    if (GameState.data.firstTime) {
      const firstCard = document.querySelector('[data-game="bubble"]');
      if (firstCard) firstCard.classList.add('suggested');
    }

    const selBadge = document.getElementById('home-selection-badge');
    if (selBadge) {
      const selCount = WordManager.getSelectionCount();
      if (selCount > 0) {
        selBadge.classList.remove('hidden');
        document.getElementById('home-selection-text').textContent =
          '🎯 ' + T.get('selPracticing') + ' · ' + selCount + T.get('selWordsSelected');
      } else {
        selBadge.classList.add('hidden');
      }
    }
  },

  showDailyChallengeComplete() {
    const dailyCard = document.getElementById('daily-challenge');
    if (dailyCard) {
      dailyCard.classList.add('completed');
      const dailyText = document.getElementById('daily-text');
      if (dailyText) dailyText.textContent = T.get('dailyComplete');
    }
    this._showChallengeToast(T.get('dailyComplete'), '+50 XP', 'gold');
    this.updateHomeScreen();
  },

  showBonusChallengeComplete() {
    this._showChallengeToast(T.get('bonusComplete'), '+30 XP', 'coral');
    this.updateHomeScreen();
  },

  showXpGoalComplete() {
    this._showChallengeToast(
      T.get('dailyXpReached'),
      '+40 XP', 'purple'
    );
    this.updateHomeScreen();
  },

  _showChallengeToast(text, reward, color) {
    const existing = document.querySelector('.challenge-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'challenge-toast challenge-toast-' + color;
    toast.innerHTML = '<div class="challenge-toast-text">' + text + '</div>' +
      '<div class="challenge-toast-reward">' + reward + '</div>';
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  },

  showResults(config) {
    const { title, score, xp, stars, missedWords, onPlayAgain, onHome } = config;
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-score').textContent = score || '';
    document.getElementById('results-xp').textContent = '+' + xp + ' XP';

    const starsEl = document.getElementById('results-stars');
    starsEl.textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

    const reviewSection = document.getElementById('results-review');
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    if (missedWords && missedWords.length > 0) {
      reviewSection.classList.remove('hidden');
      missedWords.forEach(w => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `<span>${w.english}</span><span>${w.hebrew}</span>`;
        reviewList.appendChild(item);
      });
    } else {
      reviewSection.classList.add('hidden');
    }

    document.getElementById('results-overlay').classList.remove('hidden');

    document.getElementById('btn-play-again').onclick = () => {
      document.getElementById('results-overlay').classList.add('hidden');
      if (onPlayAgain) onPlayAgain();
    };
    document.getElementById('btn-go-home').onclick = () => {
      document.getElementById('results-overlay').classList.add('hidden');
      if (onHome) onHome(); else UI.showScreen('home');
    };

    if (stars >= 2) Particles.celebration();
  },

  showCorrection(word, duration, callback) {
    const existing = document.querySelector('.correction-banner');
    if (existing) existing.remove();
    const isHe = T._lang === 'he';
    const banner = document.createElement('div');
    banner.className = 'correction-banner';
    banner.innerHTML =
      '<div class="correction-label">' + T.get('correctAnswer') + '</div>' +
      '<div class="correction-word">' + word.english + '</div>' +
      '<div class="correction-translation">' + word.hebrew + '</div>' +
      '<div class="correction-hint">' + T.get('tryRemember') + '</div>';
    document.body.appendChild(banner);
    setTimeout(() => {
      banner.classList.add('hiding');
      setTimeout(() => {
        banner.remove();
        if (callback) callback();
      }, 300);
    }, duration);
  },

  floatXP(x, y, amount) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = '+' + amount;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  },

  _renderWordOfDay() {
    const words = WordManager.getAll();
    const dayIndex = Math.floor(Date.now() / 86400000) % words.length;
    const word = words[dayIndex];
    if (!word) return;
    const engEl = document.getElementById('wotd-english');
    const hebEl = document.getElementById('wotd-hebrew');
    const hintEl = document.getElementById('wotd-hint');
    if (engEl) engEl.textContent = word.english;
    if (hebEl) hebEl.textContent = word.hebrew;
    if (hintEl) {
      const letters = word.english.length;
      hintEl.textContent = letters + T.get('wotdHint');
    }
  },

  _motivationalMessages: {
    en: {
      newUser: ['Welcome, future word master! 🌟', 'Your journey begins now! 🚀', 'Every expert was once a beginner! 💪'],
      lowStreak: ['Come back tomorrow to build your streak! 🔥', 'Consistency is key — play a little every day! 📅', 'Even 5 minutes of practice makes a difference! ⏰'],
      midStreak: ['You\'re on fire! Keep it going! 🔥', '{streak}-day streak — incredible! 🎯', 'Your dedication is amazing! ⭐'],
      highStreak: ['Unstoppable {streak}-day streak!! 🏆', 'You\'re a learning machine! 🤖💜', 'Legend status — keep crushing it! 👑'],
      struggling: ['Those tough words? You\'ll get them! 💪', 'Mistakes help you learn faster! 🧠', 'Practice makes progress, not perfect! 🌱'],
      improving: ['Your accuracy is getting better! 📈', 'You\'re improving every day! 🌟', 'Nice progress — keep going! 🎉'],
      mastering: ['Look at all those mastered words! ⭐', 'You know so many words now! 🏅', 'Almost there — master them all! 🎯'],
    },
    he: {
      newUser: ['!ברוכה הבאה, מאסטרית המילים העתידית 🌟', '!המסע שלך מתחיל עכשיו 🚀', '!כל מומחית הייתה פעם מתחילה 💪'],
      lowStreak: ['!חזרי מחר כדי לבנות את הרצף 🔥', '!עקביות היא המפתח — שחקי קצת כל יום 📅', '!אפילו 5 דקות תרגול עושות הבדל ⏰'],
      midStreak: ['!את בוערת! המשיכי ככה 🔥', '!ימים ברצף — מדהים {streak} 🎯', '!המסירות שלך מדהימה ⭐'],
      highStreak: ['!!ימים ברצף {streak} — בלתי ניתנת לעצירה 🏆', '!את מכונת למידה 🤖💜', '!סטטוס אגדה — המשיכי לרסק את זה 👑'],
      struggling: ['!המילים הקשות האלה? תשלטי בהן 💪', '!טעויות עוזרות ללמוד מהר יותר 🧠', '!תרגול מביא התקדמות 🌱'],
      improving: ['!הדיוק שלך משתפר 📈', '!את משתפרת כל יום 🌟', '!התקדמות יפה — המשיכי 🎉'],
      mastering: ['!תראי כמה מילים שלטת בהן ⭐', '!את יודעת כל כך הרבה מילים עכשיו 🏅', '!כמעט שם — שלטי בכולן 🎯'],
    }
  },

  _renderMotivation() {
    const isHe = T._lang === 'he';
    const msgs = this._motivationalMessages[isHe ? 'he' : 'en'];
    const streak = GameState.data.streak;
    const mastered = WordManager.getMasteredCount();
    const total = WordManager.getCount();
    const history = GameState.getHistory();

    let category;
    if (history.length === 0) category = 'newUser';
    else if (mastered >= total * 0.6) category = 'mastering';
    else if (streak >= 14) category = 'highStreak';
    else if (streak >= 3) category = 'midStreak';
    else {
      const recent = history.slice(-10);
      const avgAcc = recent.reduce((s, h) => s + h.accuracy, 0) / recent.length;
      if (avgAcc < 50) category = 'struggling';
      else if (avgAcc > 70) category = 'improving';
      else category = 'lowStreak';
    }

    const pool = msgs[category] || msgs.newUser;
    const dayIdx = Math.floor(Date.now() / 86400000) % pool.length;
    let msg = pool[dayIdx].replace('{streak}', streak);

    const iconEl = document.getElementById('motivation-icon');
    const textEl = document.getElementById('motivation-text');
    const emoji = msg.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u);
    if (iconEl) iconEl.textContent = emoji ? emoji[0] : '💬';
    if (textEl) textEl.textContent = msg;
  },

  _renderQuickPractice() {
    const textEl = document.getElementById('qp-text');
    if (!textEl) return;

    const words = WordManager.getAll();
    let weakCount = 0;
    words.forEach(w => {
      const s = WordManager.getWordStrength(w.id);
      if (s.label === 'struggling' || s.label === 'unseen') weakCount++;
    });

    if (weakCount > 0) {
      textEl.textContent = T.get('quickPractice') + ' · ' + weakCount + T.get('qpNeedAttention');
    } else {
      textEl.textContent = T.get('qpReviewAll');
    }
  }
};

// ===== BUBBLE POP GAME =====
const BubblePop = {
  _words: [], _currentIdx: 0, _bubbles: [], _score: 0,
  _combo: 0, _maxCombo: 0, _missed: [], _animId: null,
  _container: null, _active: false, _direction: 'en-to-he', _started: false,

  start() {
    this._container = document.getElementById('bubble-container');
    this._container.innerHTML = '';
    this._words = WordManager.getWeightedRandom(10);
    this._currentIdx = 0;
    this._score = 0;
    this._combo = 0;
    this._maxCombo = 0;
    this._missed = [];
    this._active = false;
    this._started = false;
    this._direction = 'en-to-he';

    document.getElementById('bubble-score').textContent = '0';
    document.getElementById('bubble-combo').classList.add('hidden');
    document.getElementById('bubble-dots').innerHTML = '';
    document.getElementById('bubble-target').textContent = '';

    const picker = document.getElementById('bubble-direction-picker');
    picker.classList.remove('hidden');
    picker.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
    document.getElementById('bubble-target-bar').classList.add('hidden');
  },

  _begin() {
    this._started = true;
    this._active = true;
    document.getElementById('bubble-direction-picker').classList.add('hidden');
    const targetBar = document.getElementById('bubble-target-bar');
    targetBar.classList.remove('hidden');
    const isHeToEn = this._direction !== 'en-to-he';
    targetBar.querySelector('[data-t="findWord"]').textContent =
      isHeToEn ? T.get('findInEnglish') : T.get('findInHebrew');
    this._createDots();
    this._nextWord();
  },

  _createDots() {
    const dots = document.getElementById('bubble-dots');
    dots.innerHTML = '';
    for (let i = 0; i < this._words.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' current' : '');
      dots.appendChild(dot);
    }
  },

  _nextWord() {
    if (this._currentIdx >= this._words.length) { this._endRound(); return; }

    this._container.innerHTML = '';
    this._bubbles = [];

    const correct = this._words[this._currentIdx];
    const distractors = WordManager.getRandom(4, [correct]);
    const allWords = [correct, ...distractors].sort(() => Math.random() - 0.5);

    const isHeToEn = this._direction !== 'en-to-he';
    const target = document.getElementById('bubble-target');
    target.textContent = isHeToEn ? correct.hebrew : correct.english;

    const cw = this._container.clientWidth;
    const ch = this._container.clientHeight;
    const colors = [
      'rgba(255,107,107,0.85)', 'rgba(78,205,196,0.85)', 'rgba(168,85,247,0.85)',
      'rgba(255,217,61,0.85)', 'rgba(244,114,182,0.85)'
    ];

    allWords.forEach((w, i) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const bubbleText = isHeToEn ? w.english : w.hebrew;
      bubble.textContent = bubbleText;
      bubble.style.background = colors[i % colors.length];
      bubble.dataset.wordId = w.id;

      const size = Math.max(90, bubbleText.length * 8 + 40);
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';

      const bData = {
        el: bubble, wordId: w.id, isCorrect: w.id === correct.id,
        x: Math.random() * (cw - size - 20) + 10,
        y: Math.random() * (ch - size - 20) + 10,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size
      };
      this._bubbles.push(bData);
      this._container.appendChild(bubble);

      bubble.addEventListener('click', (e) => this._onBubbleClick(bData, e));
    });

    this._animateBubbles();
  },

  _animateBubbles() {
    if (!this._active) return;
    const cw = this._container.clientWidth;
    const ch = this._container.clientHeight;

    this._bubbles.forEach(b => {
      b.x += b.vx;
      b.y += b.vy;
      if (b.x <= 0 || b.x >= cw - b.size) b.vx *= -1;
      if (b.y <= 0 || b.y >= ch - b.size) b.vy *= -1;
      b.x = Math.max(0, Math.min(b.x, cw - b.size));
      b.y = Math.max(0, Math.min(b.y, ch - b.size));
      b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
    });

    this._animId = requestAnimationFrame(() => this._animateBubbles());
  },

  _onBubbleClick(bData, event) {
    if (!this._active) return;

    if (bData.isCorrect) {
      this._combo++;
      if (this._combo > this._maxCombo) this._maxCombo = this._combo;
      const xpGain = 10 * Math.min(this._combo, 5);
      this._score += xpGain;

      bData.el.classList.add('pop');
      Sound.correct();
      const rect = bData.el.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width/2, rect.top + rect.height/2);
      UI.floatXP(rect.left + rect.width/2 - 20, rect.top, xpGain);

      if (this._combo >= 2) {
        const comboEl = document.getElementById('bubble-combo');
        comboEl.classList.remove('hidden');
        document.getElementById('bubble-combo-num').textContent = this._combo;
        comboEl.querySelector('.combo-text').style.animation = 'none';
        comboEl.offsetHeight;
        comboEl.querySelector('.combo-text').style.animation = '';
        Sound.combo(this._combo);
      }
      if (this._combo >= 5) Achievements._flags.combo5 = true;
      DailyChallenge.reportCombo(this._combo);

      document.getElementById('bubble-score').textContent = this._score;
      WordManager.recordAnswer(bData.wordId, true, 'bubble');

      const dots = document.querySelectorAll('#bubble-dots .dot');
      if (dots[this._currentIdx]) dots[this._currentIdx].className = 'dot correct';

      this._currentIdx++;
      if (this._currentIdx < this._words.length) {
        const nextDots = document.querySelectorAll('#bubble-dots .dot');
        if (nextDots[this._currentIdx]) nextDots[this._currentIdx].classList.add('current');
      }

      cancelAnimationFrame(this._animId);
      setTimeout(() => this._nextWord(), 500);
    } else {
      bData.el.classList.add('wrong-shake');
      Sound.wrong();
      this._combo = 0;
      document.getElementById('bubble-combo').classList.add('hidden');
      WordManager.recordAnswer(bData.wordId, false, 'bubble');
      const currentWord = this._words[this._currentIdx];
      if (currentWord && !this._missed.find(w => w.id === currentWord.id)) {
        this._missed.push(currentWord);
      }
      this._active = false;
      cancelAnimationFrame(this._animId);
      UI.showCorrection(currentWord, 3000, () => {
        this._active = true;
        this._animateBubbles();
      });
      setTimeout(() => bData.el.classList.remove('wrong-shake'), 400);
    }
  },

  _endRound() {
    this._active = false;
    cancelAnimationFrame(this._animId);
    this._container.innerHTML = '';

    const correct = this._words.length - this._missed.length;
    const stars = this._maxCombo >= 3 && correct >= 8 ? 3 : correct >= 6 ? 2 : 1;
    const bonusXP = correct === this._words.length ? 20 : 0;
    const totalXP = this._score + bonusXP;

    const titleKey = stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good';

    Progress.recordGameComplete('bubble', stars, totalXP, this._missed, correct, this._words.length);

    UI.showResults({
      title: T.get(titleKey),
      score: correct + '/' + this._words.length,
      xp: totalXP, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('bubble'); BubblePop.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() {
    this._active = false;
    cancelAnimationFrame(this._animId);
  }
};

// ===== MEMORY MATCH GAME =====
const MemoryMatch = {
  _cards: [], _flipped: [], _matched: 0, _moves: 0,
  _totalPairs: 6, _locked: false, _timer: null, _seconds: 0,

  start() {
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';
    this._cards = [];
    this._flipped = [];
    this._matched = 0;
    this._moves = 0;
    this._locked = false;
    this._seconds = 0;

    document.getElementById('memory-moves').textContent = '0';
    document.getElementById('memory-time').textContent = '0:00';

    const words = WordManager.getWeightedRandom(this._totalPairs);
    const cardData = [];
    words.forEach(w => {
      cardData.push({ id: w.id, text: w.english, lang: 'en', pairId: w.id });
      cardData.push({ id: w.id, text: w.hebrew, lang: 'he', pairId: w.id });
    });
    cardData.sort(() => Math.random() - 0.5);

    cardData.forEach((cd, idx) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.innerHTML = `
        <div class="memory-card-inner">
          <div class="memory-card-face memory-card-back"></div>
          <div class="memory-card-face memory-card-front">${cd.text}</div>
        </div>`;
      card.dataset.idx = idx;
      card.dataset.pairId = cd.pairId;
      card.dataset.lang = cd.lang;

      card.addEventListener('click', () => this._onCardClick(card, idx));
      grid.appendChild(card);
      this._cards.push({ el: card, ...cd, flipped: false, matched: false });
    });

    clearInterval(this._timer);
    this._timer = setInterval(() => {
      this._seconds++;
      const m = Math.floor(this._seconds / 60);
      const s = this._seconds % 60;
      document.getElementById('memory-time').textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }, 1000);
  },

  _onCardClick(cardEl, idx) {
    if (this._locked) return;
    const card = this._cards[idx];
    if (card.flipped || card.matched) return;

    card.flipped = true;
    cardEl.classList.add('flipped');
    Sound.pop();
    this._flipped.push(idx);

    if (this._flipped.length === 2) {
      this._moves++;
      document.getElementById('memory-moves').textContent = this._moves;
      this._locked = true;

      const [a, b] = this._flipped;
      const cardA = this._cards[a];
      const cardB = this._cards[b];

      if (cardA.pairId === cardB.pairId && cardA.lang !== cardB.lang) {
        cardA.matched = true;
        cardB.matched = true;
        cardA.el.classList.add('matched');
        cardB.el.classList.add('matched');
        this._matched++;
        Sound.correct();

        const rect = cardA.el.getBoundingClientRect();
        Particles.sparkle(rect.left + rect.width/2, rect.top + rect.height/2);

        WordManager.recordAnswer(cardA.pairId, true, 'memory');

        this._flipped = [];
        this._locked = false;

        if (this._matched === this._totalPairs) {
          this._endRound();
        }
      } else {
        setTimeout(() => {
          cardA.flipped = false;
          cardB.flipped = false;
          cardA.el.classList.remove('flipped');
          cardB.el.classList.remove('flipped');
          this._flipped = [];
          this._locked = false;
        }, 800);
      }
    }
  },

  _endRound() {
    clearInterval(this._timer);
    const stars = this._moves <= 10 ? 3 : this._moves <= 15 ? 2 : 1;
    const xp = this._totalPairs * 10 + (stars === 3 ? 20 : stars === 2 ? 10 : 0);

    if (this._moves <= 10) Achievements._flags.memoryPerfect = true;

    Progress.recordGameComplete('memory', stars, xp, [], this._totalPairs, this._totalPairs);

    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: this._moves + ' ' + T.get('moves').toLowerCase(),
      xp, stars, missedWords: [],
      onPlayAgain: () => { UI.showScreen('memory'); MemoryMatch.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { clearInterval(this._timer); }
};

// ===== LIGHTNING QUIZ =====
const LightningQuiz = {
  _words: [], _currentIdx: 0, _score: 0, _streak: 0,
  _maxStreak: 0, _missed: [], _direction: 'en-to-he',
  _timerInterval: null, _timeLeft: 0, _answered: false,
  _started: false, _level: 'medium',
  _timeLevels: { easy: 15000, medium: 8000, hard: 4000 },

  start() {
    this._words = WordManager.getWeightedRandom(10);
    this._currentIdx = 0;
    this._score = 0;
    this._streak = 0;
    this._maxStreak = 0;
    this._missed = [];
    this._answered = false;
    this._started = false;
    this._direction = 'en-to-he';
    this._level = 'medium';

    document.getElementById('lightning-score').textContent = '0';
    document.getElementById('lightning-progress').textContent = '1/10';
    document.getElementById('lightning-streak').classList.add('hidden');

    const setup = document.getElementById('lightning-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
    setup.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'medium'));

    const wordEl = document.getElementById('lightning-word');
    wordEl.textContent = '';
    document.getElementById('lightning-answers').innerHTML = '';
    document.getElementById('lightning-timer').style.width = '100%';
  },

  _begin() {
    this._started = true;
    document.getElementById('lightning-setup').classList.add('hidden');
    this._showQuestion();
  },

  _showQuestion() {
    if (this._currentIdx >= this._words.length) { this._endRound(); return; }

    this._answered = false;
    const word = this._words[this._currentIdx];
    const wordEl = document.getElementById('lightning-word');
    const answersEl = document.getElementById('lightning-answers');
    answersEl.innerHTML = '';

    let questionText, correctAnswer;
    const dir = this._direction === 'mixed'
      ? (Math.random() > 0.5 ? 'en-to-he' : 'he-to-en')
      : this._direction;

    if (dir === 'en-to-he') {
      questionText = word.english;
      correctAnswer = word.hebrew;
    } else {
      questionText = word.hebrew;
      correctAnswer = word.english;
    }

    wordEl.textContent = questionText;
    document.getElementById('lightning-progress').textContent =
      (this._currentIdx + 1) + '/' + this._words.length;

    const distractors = WordManager.getRandom(3, [word]);
    const options = [
      { text: correctAnswer, correct: true },
      ...distractors.map(d => ({
        text: dir === 'en-to-he' ? d.hebrew : d.english,
        correct: false
      }))
    ].sort(() => Math.random() - 0.5);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => this._onAnswer(btn, opt.correct, word));
      answersEl.appendChild(btn);
    });

    const timerEl = document.getElementById('lightning-timer');
    clearInterval(this._timerInterval);

    if (this._level === 'none') {
      this._timeLeft = 999999;
      timerEl.style.width = '100%';
      timerEl.className = 'lightning-timer-fill';
    } else {
      const totalTime = this._timeLevels[this._level] || 8000;
      this._timeLeft = totalTime;
      timerEl.style.width = '100%';
      timerEl.className = 'lightning-timer-fill';
      this._timerInterval = setInterval(() => {
        this._timeLeft -= 50;
        const pct = (this._timeLeft / totalTime) * 100;
        timerEl.style.width = pct + '%';
        if (pct < 25) timerEl.className = 'lightning-timer-fill danger';
        else if (pct < 50) timerEl.className = 'lightning-timer-fill warning';
        if (this._timeLeft <= 0) {
          clearInterval(this._timerInterval);
          if (!this._answered) this._onTimeout(word);
        }
      }, 50);
    }
  },

  _onAnswer(btn, correct, word) {
    if (this._answered) return;
    this._answered = true;
    clearInterval(this._timerInterval);

    const buttons = document.querySelectorAll('#lightning-answers .answer-btn');

    if (correct) {
      btn.classList.add('correct');
      this._streak++;
      if (this._streak > this._maxStreak) this._maxStreak = this._streak;
      DailyChallenge.reportStreak(this._streak);

      const speedBonus = this._level === 'none' ? 0 : Math.floor(this._timeLeft / ((this._timeLevels[this._level] || 8000) / 5));
      const xp = 10 + speedBonus;
      this._score += xp;

      Sound.correct();
      const rect = btn.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width/2, rect.top);
      UI.floatXP(rect.left + rect.width/2 - 20, rect.top - 20, xp);

      WordManager.recordAnswer(word.id, true, 'lightning');

      if (this._streak >= 5) {
        const streakEl = document.getElementById('lightning-streak');
        streakEl.classList.remove('hidden');
        document.getElementById('lightning-streak-num').textContent = this._streak;
      }
    } else {
      btn.classList.add('wrong');
      buttons.forEach(b => {
        if (b.textContent === (this._direction === 'he-to-en' ? word.english : word.hebrew) ||
            b.textContent === (this._direction === 'en-to-he' ? word.hebrew : word.english)) {
          b.classList.add('correct');
        }
      });
      this._streak = 0;
      document.getElementById('lightning-streak').classList.add('hidden');
      this._missed.push(word);
      Sound.wrong();
      WordManager.recordAnswer(word.id, false, 'lightning');
    }

    document.getElementById('lightning-score').textContent = this._score;
    this._currentIdx++;

    if (correct) {
      setTimeout(() => this._showQuestion(), 800);
    } else {
      UI.showCorrection(word, 3000, () => this._showQuestion());
    }
  },

  _onTimeout(word) {
    this._answered = true;
    this._streak = 0;
    this._missed.push(word);
    document.getElementById('lightning-streak').classList.add('hidden');
    WordManager.recordAnswer(word.id, false, 'lightning');

    const buttons = document.querySelectorAll('#lightning-answers .answer-btn');
    const dir = this._direction === 'mixed'
      ? (document.getElementById('lightning-word').textContent === word.english ? 'en-to-he' : 'he-to-en')
      : this._direction;
    const correctText = dir === 'en-to-he' ? word.hebrew : word.english;
    buttons.forEach(b => {
      if (b.textContent === correctText) b.classList.add('correct');
    });

    Sound.wrong();
    this._currentIdx++;
    UI.showCorrection(word, 3000, () => this._showQuestion());
  },

  _endRound() {
    clearInterval(this._timerInterval);
    const correct = this._words.length - this._missed.length;
    const stars = correct >= 9 ? 3 : correct >= 7 ? 2 : 1;
    const bonusXP = correct === 10 ? 20 : 0;
    const totalXP = this._score + bonusXP;

    if (correct === 10) Achievements._flags.lightningPerfect = true;

    Progress.recordGameComplete('lightning', stars, totalXP, this._missed, correct, this._words.length);

    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: correct + '/10',
      xp: totalXP, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('lightning'); LightningQuiz.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { clearInterval(this._timerInterval); }
};

// ===== WORD SCRAMBLE =====
const WordScramble = {
  _words: [], _currentIdx: 0, _score: 0, _hintsLeft: 0,
  _currentWord: null, _slots: [], _tiles: [], _missed: [],
  _correctFirstTry: 0, _attempted: false, _direction: 'en-to-he', _started: false,

  start() {
    this._words = WordManager.getWeightedRandom(8);
    this._currentIdx = 0;
    this._score = 0;
    this._hintsLeft = 2;
    this._missed = [];
    this._correctFirstTry = 0;
    this._started = false;
    this._direction = 'en-to-he';

    document.getElementById('scramble-score').textContent = '0';
    document.getElementById('scramble-progress').textContent = '1/8';
    document.getElementById('scramble-answer').innerHTML = '';
    document.getElementById('scramble-tiles').innerHTML = '';
    document.getElementById('scramble-clue-text').textContent = '';

    const picker = document.getElementById('scramble-direction-picker');
    picker.classList.remove('hidden');
    picker.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
    document.getElementById('scramble-clue-area').classList.add('hidden');
  },

  _begin() {
    this._started = true;
    document.getElementById('scramble-direction-picker').classList.add('hidden');
    const clueArea = document.getElementById('scramble-clue-area');
    clueArea.classList.remove('hidden');
    const isHeToEn = this._direction !== 'en-to-he';
    clueArea.querySelector('[data-t="clue"]').textContent =
      isHeToEn
        ? T.get('arrangeInEnglish') : T.get('arrangeInHebrew');
    this._updateHintBtn();
    this._showWord();
  },

  _showWord() {
    if (this._currentIdx >= this._words.length) { this._endRound(); return; }

    this._currentWord = this._words[this._currentIdx];
    this._attempted = false;
    const isHeToEn = this._direction !== 'en-to-he';
    const scrambleTarget = isHeToEn ? this._currentWord.english : this._currentWord.hebrew;
    const clueText = isHeToEn ? this._currentWord.hebrew : this._currentWord.english;

    document.getElementById('scramble-clue-text').textContent = clueText;
    document.getElementById('scramble-progress').textContent =
      (this._currentIdx + 1) + '/' + this._words.length;

    const answerZone = document.getElementById('scramble-answer');
    const tilesZone = document.getElementById('scramble-tiles');
    answerZone.innerHTML = '';
    tilesZone.innerHTML = '';
    this._slots = [];
    this._tiles = [];

    const chars = scrambleTarget.split('');
    chars.forEach((ch, i) => {
      const slot = document.createElement('div');
      slot.className = 'scramble-slot';
      if (ch === ' ' || ch === '\'') {
        slot.classList.add('fixed');
        slot.textContent = ch === ' ' ? '\u00A0' : ch;
        slot.dataset.fixed = ch;
      }
      slot.dataset.idx = i;
      answerZone.appendChild(slot);
      this._slots.push({ el: slot, expected: ch, filled: ch === ' ' || ch === '\'' ? ch : null, tileIdx: null });
    });

    const letterChars = chars.filter(ch => ch !== ' ' && ch !== '\'');
    const shuffled = [...letterChars].sort(() => Math.random() - 0.5);
    if (shuffled.join('') === letterChars.join('')) {
      shuffled.reverse();
    }

    shuffled.forEach((ch, i) => {
      const tile = document.createElement('button');
      tile.className = 'scramble-tile';
      tile.textContent = ch.toUpperCase();
      tile.dataset.letter = ch;
      tile.dataset.tileIdx = i;
      tile.addEventListener('click', () => this._onTileClick(i));
      tilesZone.appendChild(tile);
      this._tiles.push({ el: tile, letter: ch, used: false });
    });

    this._slots.forEach((slot, i) => {
      if (!slot.fixed) {
        slot.el.addEventListener('click', () => this._onSlotClick(i));
      }
    });
  },

  _onTileClick(tileIdx) {
    const tile = this._tiles[tileIdx];
    if (tile.used) return;

    const emptySlotIdx = this._slots.findIndex(s => !s.filled && !s.el.dataset.fixed);
    if (emptySlotIdx === -1) return;

    tile.used = true;
    tile.el.classList.add('used');
    Sound.pop();

    const slot = this._slots[emptySlotIdx];
    slot.filled = tile.letter;
    slot.tileIdx = tileIdx;
    slot.el.textContent = tile.letter.toUpperCase();
    slot.el.classList.add('filled');

    if (this._slots.every(s => s.filled)) {
      this._checkAnswer();
    }
  },

  _onSlotClick(slotIdx) {
    const slot = this._slots[slotIdx];
    if (!slot.filled || slot.el.dataset.fixed) return;

    const tile = this._tiles[slot.tileIdx];
    tile.used = false;
    tile.el.classList.remove('used');

    slot.filled = null;
    slot.tileIdx = null;
    slot.el.textContent = '';
    slot.el.classList.remove('filled');
  },

  _checkAnswer() {
    const answer = this._slots.map(s => s.filled).join('');
    const isHeToEn = this._direction !== 'en-to-he';
    const correct = isHeToEn ? this._currentWord.english : this._currentWord.hebrew;

    if (answer.toLowerCase() === correct.toLowerCase()) {
      const xp = 10;
      this._score += xp;
      if (!this._attempted) this._correctFirstTry++;

      this._slots.forEach(s => s.el.classList.add('correct-reveal'));
      Sound.correct();
      const answerZone = document.getElementById('scramble-answer');
      const rect = answerZone.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width/2, rect.top + rect.height/2);
      UI.floatXP(rect.left + rect.width/2, rect.top - 10, xp);

      document.getElementById('scramble-score').textContent = this._score;
      WordManager.recordAnswer(this._currentWord.id, true, 'scramble');

      this._currentIdx++;
      setTimeout(() => this._showWord(), 800);
    } else {
      this._attempted = true;
      this._slots.forEach(s => {
        if (!s.el.dataset.fixed) s.el.classList.add('wrong-reveal');
      });
      Sound.wrong();
      if (!this._missed.find(w => w.id === this._currentWord.id)) {
        this._missed.push(this._currentWord);
      }
      WordManager.recordAnswer(this._currentWord.id, false, 'scramble');

      UI.showCorrection(this._currentWord, 3000, () => {
        this._tiles.forEach(t => { t.used = false; t.el.classList.remove('used'); });
        this._slots.forEach(s => {
          if (!s.el.dataset.fixed) {
            s.filled = null;
            s.tileIdx = null;
            s.el.textContent = '';
            s.el.classList.remove('filled', 'wrong-reveal');
          }
        });
      });
    }
  },

  _useHint() {
    if (this._hintsLeft <= 0) return;

    const emptySlotIdx = this._slots.findIndex(s => !s.filled && !s.el.dataset.fixed);
    if (emptySlotIdx === -1) return;

    const slot = this._slots[emptySlotIdx];
    const neededLetter = slot.expected;

    const tileIdx = this._tiles.findIndex(t => !t.used && t.letter === neededLetter);
    if (tileIdx === -1) return;

    this._hintsLeft--;
    this._updateHintBtn();
    this._onTileClick(tileIdx);
  },

  _updateHintBtn() {
    const btn = document.getElementById('scramble-hint');
    btn.textContent = T.get('hint') + ' (' + this._hintsLeft + ')';
    btn.disabled = this._hintsLeft <= 0;
    btn.style.opacity = this._hintsLeft <= 0 ? '0.4' : '1';
  },

  _endRound() {
    const stars = this._correctFirstTry >= 7 ? 3 : this._correctFirstTry >= 5 ? 2 : 1;
    const bonusXP = this._correctFirstTry === 8 ? 20 : 0;
    const totalXP = this._score + bonusXP;

    if (this._hintsLeft === 2 && this._correctFirstTry === 8) {
      Achievements._flags.scrambleNoHints = true;
    }

    Progress.recordGameComplete('scramble', stars, totalXP, this._missed, this._correctFirstTry, 8);

    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: this._correctFirstTry + '/8',
      xp: totalXP, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('scramble'); WordScramble.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() {}
};

// ===== FALLING WORDS =====
const FallingWords = {
  _words: [], _fallingItems: [], _score: 0, _lives: 3,
  _wordsSpawned: 0, _active: false, _animId: null,
  _spawnInterval: null, _speed: 0.5, _xpTotal: 0,
  _inputEl: null, _areaEl: null, _direction: 'en-to-he', _started: false,
  _level: 'medium',
  _speedLevels: { none: 0.12, easy: 0.25, medium: 0.5, hard: 0.8 },
  _spawnRates: { none: 6000, easy: 4500, medium: 3000, hard: 2000 },

  start() {
    this._areaEl = document.getElementById('falling-area');
    this._inputEl = document.getElementById('falling-input');
    this._areaEl.innerHTML = '';
    this._inputEl.value = '';
    this._fallingItems = [];
    this._score = 0;
    this._lives = 3;
    this._wordsSpawned = 0;
    this._active = false;
    this._started = false;
    this._direction = 'en-to-he';
    this._level = 'medium';
    this._xpTotal = 0;

    document.getElementById('falling-score').textContent = '0';
    this._updateLives();

    this._words = WordManager.getWeightedRandom(Math.min(WordManager.getActiveCount(), 40));
    this._shuffleWords();

    const setup = document.getElementById('falling-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
    setup.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'medium'));
  },

  _begin() {
    this._started = true;
    this._active = true;
    document.getElementById('falling-setup').classList.add('hidden');
    const isHeToEn = this._direction !== 'en-to-he';
    this._inputEl.placeholder = isHeToEn
      ? T.get('typeEnglish') : T.get('typeHebrew');
    if (this._level === 'none') { this._lives = 99; this._updateLives(); }
    const mobile = window.innerWidth < 768;
    this._speed = (this._speedLevels[this._level] || 0.5) * (mobile ? 0.6 : 1);
    this._inputEl.focus();
    this._spawnWord();
    const rate = this._spawnRates[this._level] || 3000;
    this._spawnInterval = setInterval(() => this._spawnWord(), rate);
    this._animLoop();
  },

  _shuffleWords() {
    this._words.sort(() => Math.random() - 0.5);
  },

  _spawnWord() {
    if (!this._active) return;
    if (this._fallingItems.length >= 3) return;
    if (this._wordsSpawned >= this._words.length) {
      this._shuffleWords();
      this._wordsSpawned = 0;
    }

    const word = this._words[this._wordsSpawned % this._words.length];
    this._wordsSpawned++;

    const isHeToEn = this._direction !== 'en-to-he';
    const el = document.createElement('div');
    el.className = 'falling-word';
    el.textContent = isHeToEn ? word.hebrew : word.english;

    const areaW = this._areaEl.clientWidth;
    const x = Math.random() * (areaW - 150) + 10;
    el.style.left = x + 'px';
    el.style.top = '-50px';

    const hasPowerUp = this._wordsSpawned % 5 === 0;
    if (hasPowerUp) {
      const badge = document.createElement('span');
      badge.className = 'powerup-badge';
      badge.textContent = Math.random() > 0.5 ? '❄️' : '🐌';
      el.appendChild(badge);
    }

    this._areaEl.appendChild(el);
    this._fallingItems.push({
      el, word, y: -50, speed: this._speed + Math.random() * 0.2,
      powerUp: hasPowerUp ? (Math.random() > 0.5 ? 'freeze' : 'slow') : null,
      frozen: false
    });

    if (this._wordsSpawned % 5 === 0 && this._speed < 2) {
      this._speed += 0.05;
    }
    if (this._wordsSpawned % 10 === 0) {
      clearInterval(this._spawnInterval);
      const newRate = Math.max(1500, 3000 - this._wordsSpawned * 50);
      this._spawnInterval = setInterval(() => this._spawnWord(), newRate);
    }
  },

  _animLoop() {
    if (!this._active) return;

    const areaH = this._areaEl.clientHeight;

    for (let i = this._fallingItems.length - 1; i >= 0; i--) {
      const item = this._fallingItems[i];
      if (!item.frozen) {
        item.y += item.speed;
        item.el.style.top = item.y + 'px';
      }

      if (item.y >= areaH - 40) {
        item.el.classList.add('missed');

        this._lives--;
        this._updateLives();
        Sound.wrong();
        WordManager.recordAnswer(item.word.id, false, 'falling');

        const missedWord = item.word;
        setTimeout(() => { if (item.el.parentNode) item.el.remove(); }, 500);
        this._fallingItems.splice(i, 1);

        this._active = false;
        clearInterval(this._spawnInterval);
        cancelAnimationFrame(this._animId);

        if (this._lives <= 0) {
          UI.showCorrection(missedWord, 3000, () => this._endGame());
          return;
        }

        UI.showCorrection(missedWord, 2500, () => {
          this._active = true;
          const rate = this._spawnRates[this._level] || 3000;
          this._spawnInterval = setInterval(() => this._spawnWord(), rate);
          this._animLoop();
          this._inputEl.focus();
        });
        return;
      }
    }

    const input = this._inputEl.value.trim().toLowerCase();
    if (input.length > 0) {
      const isHeToEn = this._direction !== 'en-to-he';
      this._fallingItems.forEach(item => {
        const match = (isHeToEn ? item.word.english : item.word.hebrew).toLowerCase();
        item.el.classList.toggle('highlight', match.startsWith(input) && input.length >= 2);
      });
    }

    this._animId = requestAnimationFrame(() => this._animLoop());
  },

  _onSubmit() {
    const input = this._inputEl.value.trim().toLowerCase();
    if (!input) return;

    const isHeToEn = this._direction !== 'en-to-he';
    const matchIdx = this._fallingItems.findIndex(item =>
      (isHeToEn ? item.word.english : item.word.hebrew).toLowerCase() === input
    );

    if (matchIdx !== -1) {
      const item = this._fallingItems[matchIdx];
      item.el.classList.add('caught');
      const xp = 10;
      this._score++;
      this._xpTotal += xp;

      Sound.correct();
      const rect = item.el.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width/2, rect.top);
      UI.floatXP(rect.left + rect.width/2 - 20, rect.top - 20, xp);

      WordManager.recordAnswer(item.word.id, true, 'falling');

      if (item.powerUp === 'freeze') {
        this._fallingItems.forEach(fi => { fi.frozen = true; });
        setTimeout(() => { this._fallingItems.forEach(fi => { fi.frozen = false; }); }, 3000);
      } else if (item.powerUp === 'slow') {
        const origSpeeds = this._fallingItems.map(fi => fi.speed);
        this._fallingItems.forEach(fi => { fi.speed *= 0.5; });
        setTimeout(() => {
          this._fallingItems.forEach((fi, idx) => {
            if (origSpeeds[idx]) fi.speed = origSpeeds[idx];
          });
        }, 5000);
      }

      setTimeout(() => { if (item.el.parentNode) item.el.remove(); }, 500);
      this._fallingItems.splice(matchIdx, 1);

      document.getElementById('falling-score').textContent = this._score;
    }

    this._inputEl.value = '';
  },

  _updateLives() {
    const el = document.getElementById('falling-lives');
    el.textContent = this._level === 'none' ? '❤️ ∞' : '❤️'.repeat(Math.max(0, this._lives)) + '🖤'.repeat(Math.max(0, 3 - this._lives));
  },

  _endGame() {
    this._active = false;
    cancelAnimationFrame(this._animId);
    clearInterval(this._spawnInterval);

    if (this._score > GameState.data.fallingHighScore) {
      GameState.data.fallingHighScore = this._score;
    }

    if (this._score >= 20) Achievements._flags.falling20 = true;

    const stars = this._score >= 15 ? 3 : this._score >= 8 ? 2 : 1;
    const bonusXP = stars === 3 ? 20 : 0;
    const totalXP = this._xpTotal + bonusXP;

    Progress.recordGameComplete('falling', stars, totalXP, [], this._score, this._wordsSpawned);

    UI.showResults({
      title: T.get('gameOver'),
      score: T.get('highScore') + ': ' + GameState.data.fallingHighScore,
      xp: totalXP, stars, missedWords: [],
      onPlayAgain: () => { UI.showScreen('falling'); FallingWords.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() {
    this._active = false;
    cancelAnimationFrame(this._animId);
    clearInterval(this._spawnInterval);
  }
};

// ===== WORD MANAGER UI =====
const WordManagerUI = {
  _filter: 'all',
  _search: '',

  render() {
    const list = document.getElementById('words-list');
    list.innerHTML = '';

    let words = WordManager.getAll();

    if (this._search) {
      const q = this._search.toLowerCase();
      words = words.filter(w =>
        w.english.toLowerCase().includes(q) || w.hebrew.includes(q)
      );
    }

    if (this._filter === 'new') {
      words = words.filter(w => { const m = WordManager.getMastery(w.id); return m.masteryLevel === 0; });
    } else if (this._filter === 'learning') {
      words = words.filter(w => { const m = WordManager.getMastery(w.id); return m.masteryLevel > 0 && m.masteryLevel < 5; });
    } else if (this._filter === 'mastered') {
      words = words.filter(w => { const m = WordManager.getMastery(w.id); return m.masteryLevel >= 5; });
    }

    const counts = { all: WordManager.getCount(), new: 0, learning: 0, mastered: 0 };
    WordManager.getAll().forEach(w => {
      const m = WordManager.getMastery(w.id);
      if (m.masteryLevel === 0) counts.new++;
      else if (m.masteryLevel >= 5) counts.mastered++;
      else counts.learning++;
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      const f = btn.dataset.filter;
      btn.classList.toggle('active', f === this._filter);
      const countText = counts[f] !== undefined ? ' (' + counts[f] + ')' : '';
      btn.textContent = T.get('filter' + f.charAt(0).toUpperCase() + f.slice(1)) + countText;
    });

    this._updateSelectionBar();

    words.forEach(w => {
      const m = WordManager.getMastery(w.id);
      const isSelected = WordManager.isSelected(w.id);
      const row = document.createElement('div');
      row.className = 'word-row' + (isSelected ? ' selected' : '');
      row.innerHTML = `
        <label class="word-checkbox-wrapper">
          <input type="checkbox" class="word-checkbox" data-id="${w.id}" ${isSelected ? 'checked' : ''}>
          <span class="word-checkbox-custom"></span>
        </label>
        <span class="word-english">${w.english}</span>
        <span class="word-mastery">${'<span class="star filled">★</span>'.repeat(m.masteryLevel)}${'<span class="star">★</span>'.repeat(5 - m.masteryLevel)}</span>
        <span class="word-hebrew">${w.hebrew}</span>
        <div class="word-actions">
          <button class="word-edit" data-id="${w.id}" title="${T.get('editWord')}">✎</button>
          <button class="word-delete" data-id="${w.id}" title="${T.get('deleteWord')}">✕</button>
        </div>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll('.word-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const id = parseInt(cb.dataset.id);
        WordManager.toggleSelection(id);
        cb.closest('.word-row').classList.toggle('selected', cb.checked);
        this._updateSelectionBar();
      });
    });

    list.querySelectorAll('.word-edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        this._editWord(id, btn.closest('.word-row'));
      });
    });

    list.querySelectorAll('.word-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        if (WordManager.getCount() <= 20) {
          alert(T.get('minWords'));
          return;
        }
        if (confirm(T.get('deleteConfirm'))) {
          WordManager.deleteWord(id);
          this.render();
        }
      });
    });
  },

  _editWord(wordId, rowEl) {
    const word = WordManager.getAll().find(w => w.id === wordId);
    if (!word) return;

    const engSpan = rowEl.querySelector('.word-english');
    const hebSpan = rowEl.querySelector('.word-hebrew');
    const actionsEl = rowEl.querySelector('.word-actions');
    const masteryEl = rowEl.querySelector('.word-mastery');

    if (rowEl.classList.contains('editing')) return;
    rowEl.classList.add('editing');

    const origEng = word.english;
    const origHeb = word.hebrew;

    engSpan.innerHTML = `<input type="text" class="edit-input" value="${origEng}" id="edit-eng-${wordId}">`;
    hebSpan.innerHTML = `<input type="text" class="edit-input edit-input-he" value="${origHeb}" id="edit-heb-${wordId}">`;
    if (masteryEl) masteryEl.classList.add('hidden');

    actionsEl.innerHTML = `
      <button class="word-save" title="${T.get('saveWord')}">✓</button>
      <button class="word-cancel" title="${T.get('cancelWord')}">✕</button>
    `;

    const engInput = document.getElementById('edit-eng-' + wordId);
    engInput.focus();

    const save = () => {
      const newEng = engInput.value.trim();
      const newHeb = document.getElementById('edit-heb-' + wordId).value.trim();
      if (newEng && newHeb) {
        WordManager.editWord(wordId, newEng, newHeb);
      }
      this.render();
    };

    const cancel = () => { this.render(); };

    actionsEl.querySelector('.word-save').addEventListener('click', save);
    actionsEl.querySelector('.word-cancel').addEventListener('click', cancel);

    rowEl.querySelectorAll('.edit-input').forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') save();
        if (e.key === 'Escape') cancel();
      });
    });
  },

  _updateSelectionBar() {
    const count = WordManager.getSelectionCount();
    const countEl = document.getElementById('selection-count');
    const labelEl = document.getElementById('selection-label');

    if (count > 0) {
      countEl.textContent = count + T.get('selWordsSelected');
      countEl.classList.add('active');
      labelEl.textContent = T.get('selPracticing');
    } else {
      countEl.textContent = T.get('selNone');
      countEl.classList.remove('active');
      labelEl.textContent = T.get('selFocused');
    }

    document.getElementById('btn-select-all').textContent = T.get('selSelectAll');
    document.getElementById('btn-clear-selection').textContent = T.get('selClear');
  }
};

// ===== ACHIEVEMENTS UI =====
const AchievementsUI = {
  render() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';
    const unlocked = GameState.data.achievements;

    Achievements.defs.forEach(a => {
      const isUnlocked = unlocked.includes(a.id);
      const card = document.createElement('div');
      card.className = 'achievement-card ' + (isUnlocked ? 'unlocked' : 'locked');
      const name = T._lang === 'he' ? a.name_he : a.name_en;
      const desc = T._lang === 'he' ? a.desc_he : a.desc_en;
      card.innerHTML = `
        <div class="achievement-icon">${isUnlocked ? a.icon : '❓'}</div>
        <div class="achievement-name">${isUnlocked ? name : '???'}</div>
        <div class="achievement-desc">${isUnlocked ? desc : ''}</div>
      `;
      grid.appendChild(card);
    });
  }
};

// ===== TRUE OR FALSE =====
const TrueFalse = {
  _words: [], _currentIdx: 0, _score: 0, _streak: 0,
  _maxStreak: 0, _missed: [], _total: 15, _active: false,

  start() {
    this._words = WordManager.getWeightedRandom(this._total);
    this._currentIdx = 0;
    this._score = 0;
    this._streak = 0;
    this._maxStreak = 0;
    this._missed = [];
    this._active = true;

    document.getElementById('tf-score').textContent = '0';
    document.getElementById('tf-progress').textContent = '1/' + this._total;
    document.getElementById('tf-streak').classList.add('hidden');
    this._showPair();
  },

  _showPair() {
    if (this._currentIdx >= this._words.length) { this._endRound(); return; }

    const word = this._words[this._currentIdx];
    const strength = WordManager.getWordStrength(word.id);
    const correctChance = strength.label === 'struggling' ? 0.7 :
      strength.label === 'learning' ? 0.6 :
      strength.label === 'unseen' ? 0.65 : 0.4;
    const showCorrect = Math.random() < correctChance;

    let hebrewShown;
    if (showCorrect) {
      hebrewShown = word.hebrew;
    } else {
      const others = WordManager.getRandom(1, [word]);
      hebrewShown = others.length > 0 ? others[0].hebrew : word.hebrew;
    }

    this._currentCorrectAnswer = showCorrect;
    this._currentWord = word;
    this._currentShown = hebrewShown;

    const card = document.getElementById('tf-card');
    card.className = 'tf-card';
    document.getElementById('tf-english').textContent = word.english;
    document.getElementById('tf-hebrew').textContent = hebrewShown;
    document.getElementById('tf-progress').textContent =
      (this._currentIdx + 1) + '/' + this._total;

    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'fadeIn 0.3s ease';
  },

  _answer(playerSaidCorrect) {
    if (!this._active) return;
    const isRight = playerSaidCorrect === this._currentCorrectAnswer;

    const card = document.getElementById('tf-card');

    if (isRight) {
      this._streak++;
      if (this._streak > this._maxStreak) this._maxStreak = this._streak;
      const xp = 10 + Math.min(this._streak, 5) * 2;
      this._score += xp;
      card.classList.add('tf-correct');
      Sound.correct();

      const rect = card.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
      UI.floatXP(rect.left + rect.width / 2, rect.top, xp);

      if (this._streak >= 2) {
        const streakEl = document.getElementById('tf-streak');
        streakEl.classList.remove('hidden');
        document.getElementById('tf-streak-num').textContent = this._streak;
      }
      if (this._streak >= 5) Achievements._flags.combo5 = true;
      DailyChallenge.reportStreak(this._streak);

      WordManager.recordAnswer(this._currentWord.id, true, 'truefalse');
    } else {
      this._streak = 0;
      card.classList.add('tf-wrong');
      Sound.wrong();
      document.getElementById('tf-streak').classList.add('hidden');

      if (!this._missed.find(w => w.id === this._currentWord.id)) {
        this._missed.push(this._currentWord);
      }
      WordManager.recordAnswer(this._currentWord.id, false, 'truefalse');
    }

    document.getElementById('tf-score').textContent = this._score;
    this._currentIdx++;

    if (isRight) {
      setTimeout(() => this._showPair(), 600);
    } else {
      this._active = false;
      UI.showCorrection(this._currentWord, 3500, () => {
        this._active = true;
        this._showPair();
      });
    }
  },

  _endRound() {
    this._active = false;
    const correct = this._total - this._missed.length;
    const stars = correct >= 14 ? 3 : correct >= 11 ? 2 : 1;
    const bonusXP = correct === this._total ? 25 : 0;
    const totalXP = this._score + bonusXP;

    Progress.recordGameComplete('truefalse', stars, totalXP, this._missed, correct, this._total);

    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: correct + '/' + this._total,
      xp: totalXP, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('truefalse'); TrueFalse.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; }
};

// ===== MATCH UP =====
const MatchUp = {
  _words: [], _round: 0, _totalRounds: 3, _pairsPerRound: 5,
  _score: 0, _selectedLeft: null, _selectedRight: null,
  _matched: 0, _active: false, _mistakes: 0, _missed: [],
  _timerInterval: null, _timeLeft: 0, _totalCorrect: 0, _totalPairs: 0,
  _level: 'medium', _started: false,
  _drainRates: { easy: 0.25, medium: 0.5, hard: 1.0 },

  start() {
    this._round = 0;
    this._score = 0;
    this._mistakes = 0;
    this._missed = [];
    this._active = false;
    this._started = false;
    this._totalCorrect = 0;
    this._totalPairs = 0;
    this._level = 'medium';

    document.getElementById('mu-score').textContent = '0';
    document.getElementById('mu-round').textContent = '1/' + this._totalRounds;
    document.getElementById('mu-col-left').innerHTML = '';
    document.getElementById('mu-col-right').innerHTML = '';
    document.getElementById('mu-timer').style.width = '100%';

    const setup = document.getElementById('matchup-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'medium'));
  },

  _begin() {
    this._started = true;
    this._active = true;
    document.getElementById('matchup-setup').classList.add('hidden');
    this._startRound();
  },

  _startRound() {
    this._words = WordManager.getWeightedRandom(this._pairsPerRound);
    this._selectedLeft = null;
    this._selectedRight = null;
    this._matched = 0;

    document.getElementById('mu-round').textContent =
      (this._round + 1) + '/' + this._totalRounds;

    const leftCol = document.getElementById('mu-col-left');
    const rightCol = document.getElementById('mu-col-right');
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    const shuffledRight = [...this._words].sort(() => Math.random() - 0.5);

    this._words.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'mu-word mu-left';
      btn.textContent = w.english;
      btn.dataset.id = w.id;
      btn.addEventListener('click', () => this._onLeftClick(btn, w));
      leftCol.appendChild(btn);
    });

    shuffledRight.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'mu-word mu-right';
      btn.textContent = w.hebrew;
      btn.dataset.id = w.id;
      btn.addEventListener('click', () => this._onRightClick(btn, w));
      rightCol.appendChild(btn);
    });

    this._timeLeft = 100;
    const timerFill = document.getElementById('mu-timer');
    timerFill.style.width = '100%';
    timerFill.className = 'mu-timer-fill';
    clearInterval(this._timerInterval);
    if (this._level === 'none') {
      timerFill.style.width = '100%';
    } else {
      const drain = this._drainRates[this._level] || 0.5;
      this._timerInterval = setInterval(() => {
        this._timeLeft -= drain;
        timerFill.style.width = this._timeLeft + '%';
        if (this._timeLeft <= 30) timerFill.classList.add('warning');
        if (this._timeLeft <= 0) {
          this._words.forEach(w => {
            if (!this._missed.find(m => m.id === w.id)) {
              const leftBtn = document.querySelector(`.mu-left[data-id="${w.id}"]:not(.matched)`);
              if (leftBtn) this._missed.push(w);
            }
          });
          this._nextRound();
        }
      }, 100);
    }
  },

  _onLeftClick(btn, word) {
    if (!this._active || btn.classList.contains('matched')) return;
    document.querySelectorAll('.mu-left.selected').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    this._selectedLeft = { btn, word };
    this._checkPair();
  },

  _onRightClick(btn, word) {
    if (!this._active || btn.classList.contains('matched')) return;
    document.querySelectorAll('.mu-right.selected').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    this._selectedRight = { btn, word };
    this._checkPair();
  },

  _checkPair() {
    if (!this._selectedLeft || !this._selectedRight) return;
    const left = this._selectedLeft;
    const right = this._selectedRight;

    if (left.word.id === right.word.id) {
      left.btn.classList.add('matched');
      right.btn.classList.add('matched');
      left.btn.classList.remove('selected');
      right.btn.classList.remove('selected');
      Sound.correct();

      const xp = 10 + Math.max(0, Math.floor(this._timeLeft / 10));
      this._score += xp;

      const rect = left.btn.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width / 2, rect.top);
      UI.floatXP(rect.left + rect.width / 2, rect.top - 10, xp);

      document.getElementById('mu-score').textContent = this._score;
      WordManager.recordAnswer(left.word.id, true, 'matchup');
      this._totalCorrect++;

      this._matched++;
      if (this._matched >= this._pairsPerRound) {
        setTimeout(() => this._nextRound(), 600);
      }
    } else {
      left.btn.classList.add('wrong-flash');
      right.btn.classList.add('wrong-flash');
      Sound.wrong();
      this._mistakes++;
      this._active = false;
      clearInterval(this._timerInterval);

      if (!this._missed.find(m => m.id === left.word.id)) {
        this._missed.push(left.word);
      }
      WordManager.recordAnswer(left.word.id, false, 'matchup');

      UI.showCorrection(left.word, 3000, () => {
        left.btn.classList.remove('selected', 'wrong-flash');
        right.btn.classList.remove('selected', 'wrong-flash');
        this._active = true;
        if (this._level !== 'none') {
          const drain = this._drainRates[this._level] || 0.5;
          const timerFill = document.getElementById('mu-timer');
          this._timerInterval = setInterval(() => {
            this._timeLeft -= drain;
            timerFill.style.width = this._timeLeft + '%';
            if (this._timeLeft <= 30) timerFill.classList.add('warning');
            if (this._timeLeft <= 0) {
              this._words.forEach(w => {
                if (!this._missed.find(m => m.id === w.id)) {
                  const leftBtn = document.querySelector(`.mu-left[data-id="${w.id}"]:not(.matched)`);
                  if (leftBtn) this._missed.push(w);
                }
            });
            this._nextRound();
          }
        }, 100);
        }
      });
    }
    this._selectedLeft = null;
    this._selectedRight = null;
  },

  _nextRound() {
    clearInterval(this._timerInterval);
    this._totalPairs += this._pairsPerRound;
    this._round++;
    if (this._round >= this._totalRounds) {
      this._endGame();
    } else {
      this._startRound();
    }
  },

  _endGame() {
    this._active = false;
    clearInterval(this._timerInterval);
    const total = this._totalPairs;
    const correct = this._totalCorrect;
    const stars = this._mistakes === 0 ? 3 : this._mistakes <= 3 ? 2 : 1;
    const bonusXP = stars === 3 ? 20 : 0;
    const totalXP = this._score + bonusXP;

    Progress.recordGameComplete('matchup', stars, totalXP, this._missed, correct, total);

    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: correct + '/' + total,
      xp: totalXP, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('matchup'); MatchUp.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() {
    this._active = false;
    clearInterval(this._timerInterval);
  }
};

// ===== PARENT DASHBOARD =====
// ===== WORD BINGO =====
const WordBingo = {
  _words: [], _grid: [], _found: 0, _current: null, _queue: [],
  _active: false, _started: false, _direction: 'en-to-he', _missed: [],

  start() {
    this._words = WordManager.getWeightedRandom(16);
    this._grid = []; this._found = 0; this._queue = [];
    this._active = false; this._started = false;
    this._direction = 'en-to-he'; this._missed = [];
    document.getElementById('bingo-found').textContent = '0';
    document.getElementById('bingo-grid').innerHTML = '';
    document.getElementById('bingo-prompt').textContent = '';
    const setup = document.getElementById('bingo-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
  },

  _begin() {
    this._started = true; this._active = true;
    document.getElementById('bingo-setup').classList.add('hidden');
    const isHeToEn = this._direction === 'he-to-en';
    const gridEl = document.getElementById('bingo-grid');
    gridEl.innerHTML = '';
    const shuffled = [...this._words].sort(() => Math.random() - 0.5);
    this._grid = shuffled.map(w => ({ word: w, found: false }));
    this._grid.forEach((item, i) => {
      const cell = document.createElement('button');
      cell.className = 'bingo-cell';
      cell.textContent = isHeToEn ? item.word.english : item.word.hebrew;
      cell.addEventListener('click', () => this._onCellClick(i, cell));
      gridEl.appendChild(cell);
    });
    this._queue = [...this._words].sort(() => Math.random() - 0.5);
    this._nextPrompt();
  },

  _nextPrompt() {
    if (this._found >= 16) { this._endGame(); return; }
    while (this._queue.length === 0) this._queue = [...this._words.filter(w => !this._grid.find(g => g.word.id === w.id && g.found))].sort(() => Math.random() - 0.5);
    const unfound = this._queue.filter(w => !this._grid.find(g => g.word.id === w.id && g.found));
    if (unfound.length === 0) { this._endGame(); return; }
    this._current = unfound[0];
    this._queue = this._queue.filter(w => w.id !== this._current.id);
    const isHeToEn = this._direction === 'he-to-en';
    document.getElementById('bingo-prompt').textContent =
      T.get('bingoFind') + ' ' + (isHeToEn ? this._current.hebrew : this._current.english);
  },

  _onCellClick(i, cell) {
    if (!this._active || this._grid[i].found) return;
    if (this._grid[i].word.id === this._current.id) {
      cell.classList.add('found');
      this._grid[i].found = true;
      this._found++;
      document.getElementById('bingo-found').textContent = this._found;
      Sound.correct();
      WordManager.recordAnswer(this._current.id, true, 'bingo');
      const rect = cell.getBoundingClientRect();
      Particles.sparkle(rect.left + rect.width / 2, rect.top);
      this._checkBingoLine();
      this._nextPrompt();
    } else {
      cell.classList.add('wrong-flash');
      Sound.wrong();
      this._active = false;
      if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
      WordManager.recordAnswer(this._current.id, false, 'bingo');
      UI.showCorrection(this._current, 2500, () => {
        cell.classList.remove('wrong-flash');
        this._active = true;
        this._nextPrompt();
      });
    }
  },

  _checkBingoLine() {
    const lines = [
      [0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],
      [0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],
      [0,5,10,15],[3,6,9,12]
    ];
    for (const line of lines) {
      if (line.every(i => this._grid[i].found)) {
        line.forEach(i => {
          document.getElementById('bingo-grid').children[i].classList.add('bingo-line');
        });
        Particles.celebration();
        Sound.levelUp();
      }
    }
  },

  _endGame() {
    this._active = false;
    const correct = this._found;
    const stars = correct >= 16 ? 3 : correct >= 12 ? 2 : 1;
    const xp = correct * 5 + (correct >= 16 ? 20 : 0);
    Progress.addXP(xp);
    Progress.recordGameComplete('bingo', stars, correct, 16);
    if (correct >= 16) Particles.celebration();
    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: correct + '/16', xp, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('bingo'); WordBingo.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; }
};

// ===== TRANSLATION SPRINT =====
const TranslationSprint = {
  _active: false, _started: false, _direction: 'en-to-he',
  _level: 'medium', _streak: 0, _best: 0, _score: 0,
  _current: null, _missed: [], _total: 0, _correct: 0,
  _timerInterval: null, _timeLeft: 0,
  _timeLevels: { easy: 6000, medium: 4000, hard: 2000 },

  start() {
    this._active = false; this._started = false;
    this._direction = 'en-to-he'; this._level = 'medium';
    this._streak = 0; this._best = 0; this._score = 0;
    this._missed = []; this._total = 0; this._correct = 0;
    document.getElementById('sprint-streak').textContent = '0';
    document.getElementById('sprint-best').textContent = GameState.data.sprintHighScore || 0;
    document.getElementById('sprint-word').textContent = '';
    document.getElementById('sprint-choices').innerHTML = '';
    document.getElementById('sprint-timer').style.width = '100%';
    const setup = document.getElementById('sprint-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
    setup.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'medium'));
  },

  _begin() {
    this._started = true; this._active = true;
    document.getElementById('sprint-setup').classList.add('hidden');
    this._showWord();
  },

  _showWord() {
    if (!this._active) return;
    clearInterval(this._timerInterval);
    const words = WordManager.getWeightedRandom(1);
    if (words.length === 0) return;
    this._current = words[0];
    this._total++;
    const isHeToEn = this._direction === 'he-to-en';
    document.getElementById('sprint-word').textContent =
      isHeToEn ? this._current.hebrew : this._current.english;

    const distractors = WordManager.getRandom(1, [this._current.id]);
    const options = [this._current, distractors[0]].sort(() => Math.random() - 0.5);
    const choicesEl = document.getElementById('sprint-choices');
    choicesEl.innerHTML = '';
    options.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'sprint-btn';
      btn.textContent = isHeToEn ? w.english : w.hebrew;
      btn.addEventListener('click', () => this._onAnswer(btn, w.id === this._current.id, w));
      choicesEl.appendChild(btn);
    });

    const timerEl = document.getElementById('sprint-timer');
    if (this._level === 'none') {
      timerEl.style.width = '100%';
      timerEl.className = 'sprint-timer-fill';
    } else {
      const totalTime = this._timeLevels[this._level] || 4000;
      this._timeLeft = totalTime;
      timerEl.style.width = '100%';
      timerEl.className = 'sprint-timer-fill';
      this._timerInterval = setInterval(() => {
        this._timeLeft -= 50;
        const pct = (this._timeLeft / totalTime) * 100;
        timerEl.style.width = pct + '%';
        if (pct < 25) timerEl.className = 'sprint-timer-fill danger';
        else if (pct < 50) timerEl.className = 'sprint-timer-fill warning';
        if (this._timeLeft <= 0) {
          clearInterval(this._timerInterval);
          this._onTimeout();
        }
      }, 50);
    }
  },

  _onAnswer(btn, correct) {
    if (!this._active) return;
    this._active = false;
    clearInterval(this._timerInterval);
    document.querySelectorAll('.sprint-btn').forEach(b => b.style.pointerEvents = 'none');

    if (correct) {
      btn.classList.add('correct');
      this._streak++;
      this._correct++;
      this._score += 10 + Math.min(this._streak * 2, 20);
      if (this._streak > this._best) this._best = this._streak;
      DailyChallenge.reportStreak(this._streak);
      Sound.correct();
      WordManager.recordAnswer(this._current.id, true, 'sprint');
      document.getElementById('sprint-streak').textContent = this._streak;
      setTimeout(() => { this._active = true; this._showWord(); }, 500);
    } else {
      btn.classList.add('wrong');
      Sound.wrong();
      this._streak = 0;
      if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
      WordManager.recordAnswer(this._current.id, false, 'sprint');
      document.getElementById('sprint-streak').textContent = '0';
      UI.showCorrection(this._current, 2500, () => {
        if (this._total >= 20) { this._endGame(); return; }
        this._active = true; this._showWord();
      });
    }
    if (correct && this._total >= 20) {
      setTimeout(() => this._endGame(), 600);
    }
  },

  _onTimeout() {
    this._streak = 0;
    document.getElementById('sprint-streak').textContent = '0';
    if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
    WordManager.recordAnswer(this._current.id, false, 'sprint');
    Sound.wrong();
    UI.showCorrection(this._current, 2500, () => {
      if (this._total >= 20) { this._endGame(); return; }
      this._active = true; this._showWord();
    });
  },

  _endGame() {
    this._active = false;
    clearInterval(this._timerInterval);
    if (!GameState.data.sprintHighScore || this._best > GameState.data.sprintHighScore) {
      GameState.data.sprintHighScore = this._best;
      GameState.save();
    }
    const stars = this._correct >= 18 ? 3 : this._correct >= 14 ? 2 : 1;
    const xp = this._score;
    Progress.addXP(xp);
    Progress.recordGameComplete('sprint', stars, this._correct, this._total);
    if (stars === 3) Particles.celebration();
    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: this._correct + '/' + this._total + ' · ' + T.get('highScore') + ' ' + this._best + '🔥',
      xp, stars, missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('sprint'); TranslationSprint.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; clearInterval(this._timerInterval); }
};

// ===== WORD SPY =====
const WordSpy = {
  _pairs: [], _cells: [], _selected: null, _found: 0, _totalPairs: 8,
  _active: false, _started: false, _missed: [],
  _level: 'medium', _timerInterval: null, _timeLeft: 100,
  _drainRates: { easy: 0.15, medium: 0.35, hard: 0.7 },

  start() {
    this._found = 0; this._selected = null; this._active = false;
    this._started = false; this._missed = []; this._level = 'medium';
    document.getElementById('spy-found').textContent = '0';
    document.getElementById('spy-total').textContent = this._totalPairs;
    document.getElementById('spy-grid').innerHTML = '';
    document.getElementById('spy-timer').style.width = '100%';
    const setup = document.getElementById('wordspy-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'medium'));
  },

  _begin() {
    this._started = true; this._active = true;
    document.getElementById('wordspy-setup').classList.add('hidden');
    this._pairs = WordManager.getWeightedRandom(this._totalPairs);
    const cells = [];
    this._pairs.forEach(w => {
      cells.push({ word: w, text: w.english, lang: 'en', matched: false });
      cells.push({ word: w, text: w.hebrew, lang: 'he', matched: false });
    });
    this._cells = cells.sort(() => Math.random() - 0.5);

    const gridEl = document.getElementById('spy-grid');
    gridEl.innerHTML = '';
    this._cells.forEach((c, i) => {
      const cell = document.createElement('button');
      cell.className = 'spy-cell';
      cell.textContent = c.text;
      cell.addEventListener('click', () => this._onCellClick(i, cell));
      gridEl.appendChild(cell);
    });

    this._timeLeft = 100;
    const timerFill = document.getElementById('spy-timer');
    timerFill.style.width = '100%';
    timerFill.className = 'spy-timer-fill';
    clearInterval(this._timerInterval);
    if (this._level !== 'none') {
      const drain = this._drainRates[this._level] || 0.35;
      this._timerInterval = setInterval(() => {
        this._timeLeft -= drain;
        timerFill.style.width = this._timeLeft + '%';
        if (this._timeLeft <= 30) timerFill.classList.add('warning');
        if (this._timeLeft <= 0) { clearInterval(this._timerInterval); this._endGame(); }
      }, 100);
    }
  },

  _onCellClick(i, cell) {
    if (!this._active || this._cells[i].matched) return;
    if (this._selected !== null && this._selected.idx === i) {
      cell.classList.remove('selected');
      this._selected = null;
      return;
    }
    if (this._selected === null) {
      cell.classList.add('selected');
      this._selected = { idx: i, cell };
    } else {
      const prev = this._selected;
      const a = this._cells[prev.idx];
      const b = this._cells[i];
      if (a.word.id === b.word.id && a.lang !== b.lang) {
        prev.cell.classList.remove('selected');
        prev.cell.classList.add('matched');
        cell.classList.add('matched');
        a.matched = true; b.matched = true;
        this._found++;
        document.getElementById('spy-found').textContent = this._found;
        Sound.correct();
        WordManager.recordAnswer(a.word.id, true, 'wordspy');
        Particles.sparkle(cell.getBoundingClientRect().left + 30, cell.getBoundingClientRect().top);
        if (this._found >= this._totalPairs) { clearInterval(this._timerInterval); this._endGame(); }
      } else {
        prev.cell.classList.add('wrong-flash');
        cell.classList.add('wrong-flash');
        Sound.wrong();
        this._active = false;
        clearInterval(this._timerInterval);
        const missWord = a.word;
        if (!this._missed.find(m => m.id === missWord.id)) this._missed.push(missWord);
        WordManager.recordAnswer(missWord.id, false, 'wordspy');
        UI.showCorrection(missWord, 2500, () => {
          prev.cell.classList.remove('selected', 'wrong-flash');
          cell.classList.remove('wrong-flash');
          this._selected = null;
          this._active = true;
          if (this._level !== 'none') {
            const drain = this._drainRates[this._level] || 0.35;
            const timerFill = document.getElementById('spy-timer');
            this._timerInterval = setInterval(() => {
              this._timeLeft -= drain;
              timerFill.style.width = this._timeLeft + '%';
              if (this._timeLeft <= 30) timerFill.classList.add('warning');
              if (this._timeLeft <= 0) { clearInterval(this._timerInterval); this._endGame(); }
            }, 100);
          }
        });
        return;
      }
      this._selected = null;
    }
  },

  _endGame() {
    this._active = false;
    clearInterval(this._timerInterval);
    const correct = this._found;
    const stars = correct >= this._totalPairs ? 3 : correct >= this._totalPairs * 0.7 ? 2 : 1;
    const xp = correct * 8 + (correct >= this._totalPairs ? 25 : 0);
    Progress.addXP(xp);
    Progress.recordGameComplete('wordspy', stars, correct, this._totalPairs);
    if (stars === 3) Particles.celebration();
    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: correct + '/' + this._totalPairs, xp, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('wordspy'); WordSpy.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; clearInterval(this._timerInterval); }
};

// ===== CATEGORY SORT =====
const CategorySort = {
  _words: [], _round: 0, _totalRounds: 15, _score: 0,
  _current: null, _bucketWords: [], _active: false, _started: false,
  _direction: 'en-to-he', _missed: [], _correct: 0,

  start() {
    this._round = 0; this._score = 0; this._active = false;
    this._started = false; this._direction = 'en-to-he';
    this._missed = []; this._correct = 0;
    document.getElementById('cs-score').textContent = '0';
    document.getElementById('cs-prompt').textContent = '';
    document.getElementById('cs-buckets').innerHTML = '';
    document.getElementById('cs-progress').textContent = '';
    const setup = document.getElementById('catsort-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.dir-btn').forEach(b => b.classList.toggle('active', b.dataset.dir === 'en-to-he'));
  },

  _begin() {
    this._started = true; this._active = true;
    document.getElementById('catsort-setup').classList.add('hidden');
    this._words = WordManager.getWeightedRandom(Math.min(WordManager.getActiveCount(), 30));
    this._showRound();
  },

  _showRound() {
    if (this._round >= this._totalRounds) { this._endGame(); return; }
    const isHeToEn = this._direction === 'he-to-en';
    const correct = this._words[this._round % this._words.length];
    const distractors = WordManager.getRandom(2, [correct.id]);
    this._bucketWords = [correct, ...distractors].sort(() => Math.random() - 0.5);
    this._current = correct;

    document.getElementById('cs-prompt').textContent =
      isHeToEn ? correct.hebrew : correct.english;
    document.getElementById('cs-progress').textContent =
      (this._round + 1) + '/' + this._totalRounds;

    const bucketsEl = document.getElementById('cs-buckets');
    bucketsEl.innerHTML = '';
    this._bucketWords.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'cs-bucket';
      btn.textContent = isHeToEn ? w.english : w.hebrew;
      btn.addEventListener('click', () => this._onBucketClick(btn, w));
      bucketsEl.appendChild(btn);
    });
  },

  _onBucketClick(btn, word) {
    if (!this._active) return;
    this._active = false;
    document.querySelectorAll('.cs-bucket').forEach(b => b.style.pointerEvents = 'none');

    if (word.id === this._current.id) {
      btn.classList.add('correct');
      Sound.correct();
      this._correct++;
      this._score += 10;
      document.getElementById('cs-score').textContent = this._score;
      WordManager.recordAnswer(this._current.id, true, 'catsort');
      Particles.sparkle(btn.getBoundingClientRect().left + 40, btn.getBoundingClientRect().top);
      this._round++;
      setTimeout(() => { this._active = true; this._showRound(); }, 600);
    } else {
      btn.classList.add('wrong');
      Sound.wrong();
      if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
      WordManager.recordAnswer(this._current.id, false, 'catsort');
      this._round++;
      UI.showCorrection(this._current, 2500, () => {
        this._active = true;
        this._showRound();
      });
    }
  },

  _endGame() {
    this._active = false;
    const stars = this._correct >= 14 ? 3 : this._correct >= 10 ? 2 : 1;
    const xp = this._score + (this._correct >= 14 ? 20 : 0);
    Progress.addXP(xp);
    Progress.recordGameComplete('catsort', stars, this._correct, this._totalRounds);
    if (stars === 3) Particles.celebration();
    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: this._correct + '/' + this._totalRounds, xp, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('catsort'); CategorySort.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; }
};

// ===== SENTENCE FILL =====
const SentenceFill = {
  _words: [], _idx: 0, _score: 0, _current: null, _active: false,
  _started: false, _missed: [], _correct: 0, _total: 10,
  _level: 'easy', _timerInterval: null, _timeLeft: 0,
  _timeLevels: { easy: 15000, medium: 8000, hard: 4000 },
  _templates: [
    'I have a ___ at home.', 'The ___ is very nice.',
    'Can you see the ___?', 'She likes the ___ very much.',
    'We need a ___ for school.', 'This ___ is really big.',
    'He found a ___ outside.', 'Do you want a ___?',
    'The ___ looks beautiful.', 'I bought a new ___.',
    'There is a ___ on the table.', 'My ___ is the best.',
    'Please give me the ___.', 'Look at this ___!',
    'The ___ was very expensive.', 'I love my ___.',
    'Where is the ___?', 'A ___ is what I need.',
    'They have a ___ too.', 'What a nice ___!'
  ],

  start() {
    this._idx = 0; this._score = 0; this._active = false;
    this._started = false; this._missed = []; this._correct = 0;
    this._level = 'easy';
    document.getElementById('fi-progress').textContent = '1/' + this._total;
    document.getElementById('fi-score').textContent = '0';
    document.getElementById('fi-sentence').innerHTML = '';
    document.getElementById('fi-hint').textContent = '';
    document.getElementById('fi-choices').innerHTML = '';
    document.getElementById('fi-timer').style.width = '100%';
    const setup = document.getElementById('fillin-setup');
    setup.classList.remove('hidden');
    setup.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'easy'));
  },

  _begin() {
    this._started = true; this._active = true;
    document.getElementById('fillin-setup').classList.add('hidden');
    this._words = WordManager.getWeightedRandom(this._total);
    this._showQuestion();
  },

  _showQuestion() {
    if (this._idx >= this._words.length) { this._endGame(); return; }
    clearInterval(this._timerInterval);
    this._current = this._words[this._idx];
    document.getElementById('fi-progress').textContent = (this._idx + 1) + '/' + this._total;

    const template = this._templates[Math.floor(Math.random() * this._templates.length)];
    const sentence = template.replace('___', '<span class="fi-blank">?</span>');
    document.getElementById('fi-sentence').innerHTML = sentence;
    document.getElementById('fi-hint').textContent = '(' + this._current.hebrew + ')';

    const distractors = WordManager.getRandom(2, [this._current.id]);
    const options = [this._current, ...distractors].sort(() => Math.random() - 0.5);
    const choicesEl = document.getElementById('fi-choices');
    choicesEl.innerHTML = '';
    options.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'fi-btn';
      btn.textContent = w.english;
      btn.addEventListener('click', () => this._onAnswer(btn, w.id === this._current.id));
      choicesEl.appendChild(btn);
    });

    const timerEl = document.getElementById('fi-timer');
    if (this._level === 'none') {
      timerEl.style.width = '100%';
      timerEl.className = 'fi-timer-fill';
    } else {
      const totalTime = this._timeLevels[this._level] || 15000;
      this._timeLeft = totalTime;
      timerEl.style.width = '100%';
      timerEl.className = 'fi-timer-fill';
      this._timerInterval = setInterval(() => {
        this._timeLeft -= 50;
        const pct = (this._timeLeft / totalTime) * 100;
        timerEl.style.width = pct + '%';
        if (pct < 25) timerEl.className = 'fi-timer-fill danger';
        else if (pct < 50) timerEl.className = 'fi-timer-fill warning';
        if (this._timeLeft <= 0) {
          clearInterval(this._timerInterval);
          this._onTimeout();
        }
      }, 50);
    }
  },

  _onAnswer(btn, correct) {
    if (!this._active) return;
    this._active = false;
    clearInterval(this._timerInterval);
    document.querySelectorAll('.fi-btn').forEach(b => b.style.pointerEvents = 'none');

    if (correct) {
      btn.classList.add('correct');
      Sound.correct();
      this._correct++;
      this._score += 10;
      document.getElementById('fi-score').textContent = this._score;
      document.querySelector('.fi-blank').textContent = this._current.english;
      document.querySelector('.fi-blank').style.color = '#4ade80';
      WordManager.recordAnswer(this._current.id, true, 'fillin');
      Particles.sparkle(btn.getBoundingClientRect().left + 40, btn.getBoundingClientRect().top);
      this._idx++;
      setTimeout(() => { this._active = true; this._showQuestion(); }, 800);
    } else {
      btn.classList.add('wrong');
      Sound.wrong();
      if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
      WordManager.recordAnswer(this._current.id, false, 'fillin');
      this._idx++;
      UI.showCorrection(this._current, 3000, () => {
        this._active = true;
        this._showQuestion();
      });
    }
  },

  _onTimeout() {
    this._active = false;
    Sound.wrong();
    if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
    WordManager.recordAnswer(this._current.id, false, 'fillin');
    this._idx++;
    UI.showCorrection(this._current, 3000, () => {
      this._active = true;
      this._showQuestion();
    });
  },

  _endGame() {
    this._active = false;
    clearInterval(this._timerInterval);
    const stars = this._correct >= 9 ? 3 : this._correct >= 7 ? 2 : 1;
    const xp = this._score + (this._correct >= 9 ? 20 : 0);
    Progress.addXP(xp);
    Progress.recordGameComplete('fillin', stars, this._correct, this._total);
    if (stars === 3) Particles.celebration();
    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: this._correct + '/' + this._total, xp, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('fillin'); SentenceFill.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; clearInterval(this._timerInterval); }
};

const WordReport = {
  render() {
    const words = WordManager.getAll();
    const buckets = { mastered: [], good: [], learning: [], struggling: [], unseen: [] };

    words.forEach(w => {
      const s = WordManager.getWordStrength(w.id);
      const m = WordManager.getMastery(w.id);
      buckets[s.label].push({ word: w, strength: s, mastery: m });
    });

    buckets.struggling.sort((a, b) => a.strength.score - b.strength.score);
    buckets.learning.sort((a, b) => a.strength.score - b.strength.score);
    buckets.good.sort((a, b) => a.strength.score - b.strength.score);

    this._renderOverview(words, buckets);
    this._renderSection('report-focus-list', buckets.struggling, true);
    this._renderSection('report-learning-list', buckets.learning, false);
    this._renderSection('report-good-list', buckets.good, false);
    this._renderSection('report-mastered-list', buckets.mastered, false);
    this._renderSection('report-unseen-list', buckets.unseen, false);

    document.getElementById('report-focus').style.display = buckets.struggling.length ? '' : 'none';
    document.getElementById('report-learning-section').style.display = buckets.learning.length ? '' : 'none';
    document.getElementById('report-good-section').style.display = buckets.good.length ? '' : 'none';
    document.getElementById('report-mastered-section').style.display = buckets.mastered.length ? '' : 'none';
    document.getElementById('report-unseen-section').style.display = buckets.unseen.length ? '' : 'none';
  },

  _renderOverview(words, buckets) {
    const el = document.getElementById('report-overview');
    const total = words.length;
    const counts = {
      mastered: buckets.mastered.length,
      good: buckets.good.length,
      learning: buckets.learning.length,
      struggling: buckets.struggling.length,
      unseen: buckets.unseen.length
    };

    const practiced = total - counts.unseen;
    const pctDone = total > 0 ? Math.round((counts.mastered / total) * 100) : 0;
    const circ = 2 * Math.PI * 48;

    const allMastery = words.map(w => WordManager.getMastery(w.id));
    const totalAttempts = allMastery.reduce((s, m) => s + m.timesCorrect + m.timesWrong, 0);
    const totalCorrect = allMastery.reduce((s, m) => s + m.timesCorrect, 0);
    const avgAcc = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    const lastSeen = allMastery.reduce((max, m) => m.lastSeen && m.lastSeen > max ? m.lastSeen : max, 0);
    const locale = T._lang === 'he' ? 'he-IL' : 'en-GB';
    const lastStr = lastSeen ? new Date(lastSeen).toLocaleDateString(locale, { day: 'numeric', month: 'short' }) : '—';

    const segData = [
      { key: 'mastered', count: counts.mastered, color: '#eab308' },
      { key: 'good', count: counts.good, color: '#22c55e' },
      { key: 'learning', count: counts.learning, color: '#f59e0b' },
      { key: 'struggling', count: counts.struggling, color: '#ef4444' },
      { key: 'unseen', count: counts.unseen, color: 'rgba(255,255,255,0.1)' }
    ];

    let segs = '';
    let offset = 0;
    segData.forEach(s => {
      if (s.count === 0) return;
      const len = (s.count / total) * circ;
      segs += '<circle class="report-donut-seg" cx="55" cy="55" r="48" ' +
        'stroke="' + s.color + '" stroke-dasharray="' + len + ' ' + (circ - len) + '" ' +
        'stroke-dashoffset="' + (-offset) + '"/>';
      offset += len;
    });

    el.innerHTML =
      '<div class="report-donut-row">' +
        '<div class="report-donut-wrap">' +
          '<svg class="report-donut" viewBox="0 0 110 110">' +
            '<circle class="report-donut-bg" cx="55" cy="55" r="48"/>' +
            segs +
          '</svg>' +
          '<div class="report-donut-center">' +
            '<div class="report-donut-pct">' + pctDone + '%</div>' +
            '<div class="report-donut-sub">' + T.get('reportOverall') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="report-stats-col">' +
          '<div class="report-stat-row"><span class="report-stat-icon">📚</span><span class="report-stat-label">' + T.get('reportPracticed') + '</span><span class="report-stat-val">' + practiced + '/' + total + '</span></div>' +
          '<div class="report-stat-row"><span class="report-stat-icon">🎯</span><span class="report-stat-label">' + T.get('reportAccAvg') + '</span><span class="report-stat-val">' + avgAcc + '%</span></div>' +
          '<div class="report-stat-row"><span class="report-stat-icon">🔢</span><span class="report-stat-label">' + T.get('reportTotalPractice') + '</span><span class="report-stat-val">' + totalAttempts + '</span></div>' +
          '<div class="report-stat-row"><span class="report-stat-icon">📅</span><span class="report-stat-label">' + T.get('reportLastActive') + '</span><span class="report-stat-val">' + lastStr + '</span></div>' +
          this._statCountsHtml(counts) +
        '</div>' +
      '</div>';
  },

  _statCountsHtml(counts) {
    const items = [
      { key: 'mastered', icon: '⭐', count: counts.mastered },
      { key: 'good', icon: '🟢', count: counts.good },
      { key: 'learning', icon: '🟡', count: counts.learning },
      { key: 'struggling', icon: '🔴', count: counts.struggling },
      { key: 'unseen', icon: '⬜', count: counts.unseen }
    ];
    return items.map(i =>
      '<div class="report-stat-row"><span class="report-stat-icon">' + i.icon + '</span>' +
      '<span class="report-stat-label">' + T.get('leg' + i.key.charAt(0).toUpperCase() + i.key.slice(1)) + '</span>' +
      '<span class="report-stat-val ' + i.key + '">' + i.count + '</span></div>'
    ).join('');
  },

  _renderSection(containerId, items, showPractice) {
    const el = document.getElementById(containerId);
    el.innerHTML = '';

    if (items.length === 0) {
      el.innerHTML = '<div class="report-section-empty">' + T.get('reportNone') + '</div>';
      return;
    }

    items.forEach(item => {
      const w = item.word;
      const s = item.strength;
      const m = item.mastery;
      const total = m.timesCorrect + m.timesWrong;
      const accClass = s.accuracy >= 70 ? 'high' : s.accuracy >= 40 ? 'mid' : total === 0 ? 'none' : 'low';
      const row = document.createElement('div');
      row.className = 'rw-row';
      row.innerHTML =
        '<span class="rw-eng">' + w.english + '</span>' +
        '<span class="rw-heb">' + w.hebrew + '</span>' +
        '<span class="rw-acc ' + accClass + '">' + (total > 0 ? s.accuracy + '%' : '—') + '</span>' +
        '<span class="rw-bar"><span class="rw-bar-fill ' + s.label + '" style="width:' + s.score + '%"></span></span>';

      if (total > 0) {
        const detail = document.createElement('span');
        detail.className = 'rw-detail';
        detail.textContent = m.timesCorrect + '✓ ' + m.timesWrong + '✗ · ' + total + ' ' + T.get('reportTimes');
        row.appendChild(detail);
      }

      if (showPractice) {
        const btn = document.createElement('button');
        btn.className = 'rw-practice-btn';
        btn.textContent = '🎯 ' + T.get('reportPracticeTip');
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          WordManager.clearSelection();
          const weakWords = items.slice(0, Math.min(10, items.length));
          weakWords.forEach(iw => WordManager.toggleSelection(iw.word.id));
          const games = ['lightning', 'truefalse', 'sprint', 'catsort', 'fillin'];
          const pick = games[Math.floor(Math.random() * games.length)];
          UI.showScreen(pick);
          UI._startGame(pick);
        });
        row.appendChild(btn);
      }

      el.appendChild(row);
    });
  }
};

const Dashboard = {
  _gameKeys: { bubble: 'gameBubble', memory: 'gameMemory', lightning: 'gameLightning', scramble: 'gameScramble', falling: 'gameFalling', truefalse: 'gameTrueFalse', matchup: 'gameMatchUp', bingo: 'gameBingo', sprint: 'gameSprint', wordspy: 'gameWordSpy', catsort: 'gameCatSort', fillin: 'gameFillIn' },
  _gameIcons: { bubble: '🫧', memory: '🃏', lightning: '⚡', scramble: '🧩', falling: '🌧️', truefalse: '✅', matchup: '🔗', bingo: '🎱', sprint: '🏃', wordspy: '🔍', catsort: '🪣', fillin: '📝' },

  render() {
    const history = GameState.getHistory();
    this._renderSummary(history);
    this._renderActivityChart(history);
    this._renderAccuracyChart(history);
    this._renderGames(history);
    this._renderHardWords();
    this._renderSessions(history);
  },

  _renderSummary(history) {
    const el = document.getElementById('dash-summary');
    const totalSessions = history.length;
    const totalDays = new Set(history.map(s => new Date(s.ts).toDateString())).size;
    const avgAccuracy = totalSessions > 0 ? Math.round(history.reduce((s, h) => s + h.accuracy, 0) / totalSessions) : 0;
    const last7 = history.filter(s => s.ts > Date.now() - 7 * 86400000);
    const last7Sessions = last7.length;

    const streak = GameState.data.streak;
    const mastered = WordManager.getMasteredCount();
    const totalWords = WordManager.getCount();

    el.innerHTML = `
      <div class="dash-stat-card">
        <div class="dash-stat-value">${totalSessions}</div>
        <div class="dash-stat-label">${T.get('dashTotalSessions')}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-value">${totalDays}</div>
        <div class="dash-stat-label">${T.get('dashActiveDays')}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-value">${last7Sessions}</div>
        <div class="dash-stat-label">${T.get('dashThisWeek')}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-value">${avgAccuracy}%</div>
        <div class="dash-stat-label">${T.get('dashAvgAccuracy')}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-value">${streak}🔥</div>
        <div class="dash-stat-label">${T.get('dashStreak')}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-value">${mastered}/${totalWords}</div>
        <div class="dash-stat-label">${T.get('dashWordsMastered')}</div>
      </div>
    `;
  },

  _renderActivityChart(history) {
    const el = document.getElementById('dash-activity-chart');
    el.innerHTML = '';
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - i);
      days.push({ date: d, label: (d.getMonth()+1) + '/' + d.getDate(), dateStr: d.toDateString() });
    }

    const dayCounts = {};
    history.forEach(s => { const ds = new Date(s.ts).toDateString(); dayCounts[ds] = (dayCounts[ds] || 0) + 1; });
    const maxCount = Math.max(1, ...days.map(d => dayCounts[d.dateStr] || 0));

    days.forEach(d => {
      const count = dayCounts[d.dateStr] || 0;
      const pct = (count / maxCount) * 100;
      const bar = document.createElement('div');
      bar.className = 'dash-bar-col';
      bar.innerHTML = `
        <div class="dash-bar-value">${count || ''}</div>
        <div class="dash-bar-track"><div class="dash-bar-fill${count > 0 ? ' active' : ''}" style="height:${Math.max(pct, count > 0 ? 8 : 0)}%"></div></div>
        <div class="dash-bar-label">${d.label}</div>
      `;
      el.appendChild(bar);
    });
  },

  _renderAccuracyChart(history) {
    const el = document.getElementById('dash-accuracy-chart');
    el.innerHTML = '';

    if (history.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoSessions') + '</div>';
      return;
    }

    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - i);
      days.push({ date: d, label: (d.getMonth()+1) + '/' + d.getDate(), dateStr: d.toDateString() });
    }

    const dayAccuracy = {};
    const dayCount = {};
    history.forEach(s => {
      const ds = new Date(s.ts).toDateString();
      dayAccuracy[ds] = (dayAccuracy[ds] || 0) + s.accuracy;
      dayCount[ds] = (dayCount[ds] || 0) + 1;
    });

    const points = days.map(d => {
      const avg = dayCount[d.dateStr] ? Math.round(dayAccuracy[d.dateStr] / dayCount[d.dateStr]) : null;
      return { label: d.label, value: avg };
    });

    const svgNs = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute('viewBox', '0 0 420 120');
    svg.setAttribute('class', 'dash-line-chart');

    for (let y = 0; y <= 100; y += 25) {
      const ly = 110 - y * 1.0;
      const line = document.createElementNS(svgNs, 'line');
      line.setAttribute('x1', '30'); line.setAttribute('x2', '410');
      line.setAttribute('y1', ly); line.setAttribute('y2', ly);
      line.setAttribute('class', 'dash-grid-line');
      svg.appendChild(line);

      const txt = document.createElementNS(svgNs, 'text');
      txt.setAttribute('x', '26'); txt.setAttribute('y', ly + 3);
      txt.setAttribute('class', 'dash-axis-label');
      txt.textContent = y + '%';
      svg.appendChild(txt);
    }

    let pathD = '';
    let dotsSvg = '';
    const validPoints = [];
    points.forEach((p, i) => {
      if (p.value !== null) {
        const x = 35 + i * (375 / 13);
        const y = 110 - p.value * 1.0;
        validPoints.push({ x, y, value: p.value });
      }
    });

    if (validPoints.length >= 2) {
      pathD = 'M ' + validPoints.map(p => p.x + ' ' + p.y).join(' L ');
      const path = document.createElementNS(svgNs, 'path');
      path.setAttribute('d', pathD);
      path.setAttribute('class', 'dash-trend-line');
      svg.appendChild(path);
    }

    validPoints.forEach(p => {
      const circle = document.createElementNS(svgNs, 'circle');
      circle.setAttribute('cx', p.x); circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '3.5');
      circle.setAttribute('class', 'dash-dot');
      svg.appendChild(circle);

      const txt = document.createElementNS(svgNs, 'text');
      txt.setAttribute('x', p.x); txt.setAttribute('y', p.y - 7);
      txt.setAttribute('class', 'dash-dot-label');
      txt.textContent = p.value + '%';
      svg.appendChild(txt);
    });

    el.appendChild(svg);
  },

  _renderGames(history) {
    const el = document.getElementById('dash-games');
    el.innerHTML = '';
    const games = ['bubble', 'memory', 'lightning', 'scramble', 'falling', 'truefalse', 'matchup', 'bingo', 'sprint', 'wordspy', 'catsort', 'fillin'];

    games.forEach(g => {
      const sessions = history.filter(s => s.game === g);
      const count = sessions.length;
      const avgAcc = count > 0 ? Math.round(sessions.reduce((s, h) => s + h.accuracy, 0) / count) : 0;
      const avgStars = count > 0 ? (sessions.reduce((s, h) => s + h.stars, 0) / count).toFixed(1) : '—';
      const recent = sessions.slice(-5);
      const recentAcc = recent.length > 0 ? Math.round(recent.reduce((s, h) => s + h.accuracy, 0) / recent.length) : 0;
      const trend = recent.length >= 2 ? recentAcc - avgAcc : 0;
      const trendIcon = trend > 5 ? '📈' : trend < -5 ? '📉' : '➡️';

      const card = document.createElement('div');
      card.className = 'dash-game-card';
      card.innerHTML = `
        <div class="dash-game-icon">${this._gameIcons[g]}</div>
        <div class="dash-game-info">
          <div class="dash-game-name">${T.get(this._gameKeys[g])}</div>
          <div class="dash-game-stats">${count} ${T.get('dashSessions')} · ${T.get('dashAvg')} ${avgAcc}% · ★ ${avgStars}</div>
        </div>
        <div class="dash-game-trend">${trendIcon}</div>
      `;
      el.appendChild(card);
    });
  },

  _wordData: null,
  _wordFilter: 'all',

  _buildWordData() {
    const words = WordManager.getAll();
    this._wordData = words.map(w => {
      const m = WordManager.getMastery(w.id);
      const strength = WordManager.getWordStrength(w.id);
      const total = m.timesCorrect + m.timesWrong;
      return {
        word: w, mastery: m,
        correct: m.timesCorrect, wrong: m.timesWrong, total,
        accuracy: total > 0 ? Math.round((m.timesCorrect / total) * 100) : 0,
        strength: strength.score, label: strength.label,
        lastSeen: m.lastSeen, daysSince: strength.daysSinceSeen
      };
    });
  },

  _renderHardWords() {
    const el = document.getElementById('dash-hard-words');
    el.innerHTML = '';
    if (!this._wordData) this._buildWordData();

    const struggled = this._wordData
      .filter(w => w.total >= 2 && (w.label === 'struggling' || w.label === 'learning'))
      .sort((a, b) => a.strength - b.strength)
      .slice(0, 10);

    if (struggled.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoStruggling') + '</div>';
      return;
    }

    struggled.forEach(item => {
      const row = document.createElement('div');
      row.className = 'dash-hard-row';
      const accClass = item.accuracy < 40 ? 'low' : item.accuracy < 60 ? 'mid' : 'ok';
      row.innerHTML = `
        <span class="dash-hard-eng">${item.word.english}</span>
        <span class="dash-hard-heb">${item.word.hebrew}</span>
        <span class="dash-hard-acc ${accClass}">${item.accuracy}%</span>
        <span class="dash-hard-detail">${item.correct}✓ ${item.wrong}✗</span>
        <span class="dash-hard-bar"><span class="dash-hard-fill" style="width:${item.strength}%"></span></span>
      `;
      el.appendChild(row);
    });

    this._renderAllWords();
  },

  _renderAllWords() {
    const el = document.getElementById('dash-all-words');
    el.innerHTML = '';
    if (!this._wordData) this._buildWordData();

    const counts = { all: 0, struggling: 0, learning: 0, good: 0, mastered: 0, unseen: 0 };
    this._wordData.forEach(w => { counts.all++; counts[w.label]++; });

    document.querySelectorAll('.dash-filter-btn').forEach(btn => {
      const f = btn.dataset.wf;
      btn.classList.toggle('active', f === this._wordFilter);
      const c = counts[f] !== undefined ? ' (' + counts[f] + ')' : '';
      btn.textContent = this._filterLabel(f) + c;
    });

    let filtered = this._wordData;
    if (this._wordFilter !== 'all') {
      filtered = filtered.filter(w => w.label === this._wordFilter);
    }
    filtered.sort((a, b) => a.strength - b.strength);

    if (filtered.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoCategory') + '</div>';
      return;
    }

    filtered.forEach(item => {
      const row = document.createElement('div');
      row.className = 'dash-word-row dash-wlabel-' + item.label;
      const statusIcon = { unseen: '⬜', struggling: '🔴', learning: '🟡', good: '🟢', mastered: '⭐' }[item.label];
      const lastSeenStr = item.lastSeen
        ? (item.daysSince === 0 ? T.get('dashToday') : item.daysSince === 1 ? T.get('dashYesterday') : item.daysSince + T.get('dashDaysAgo'))
        : T.get('dashNever');
      row.innerHTML = `
        <span class="dash-w-status">${statusIcon}</span>
        <span class="dash-w-eng">${item.word.english}</span>
        <span class="dash-w-heb">${item.word.hebrew}</span>
        <span class="dash-w-stats">${item.total > 0 ? item.accuracy + '% · ' + item.correct + '✓ ' + item.wrong + '✗' : '—'}</span>
        <span class="dash-w-seen">${lastSeenStr}</span>
        <span class="dash-w-bar"><span class="dash-w-bar-fill dash-wlabel-${item.label}" style="width:${item.strength}%"></span></span>
      `;
      el.appendChild(row);
    });
  },

  _filterLabel(f) {
    const keys = { all: 'dashFilterAll', struggling: 'dashStruggling', learning: 'dashLearning', good: 'dashGood', mastered: 'dashMastered', unseen: 'dashUnseen' };
    return keys[f] ? T.get(keys[f]) : f;
  },

  _renderSessions(history) {
    const el = document.getElementById('dash-sessions');
    el.innerHTML = '';
    const recent = history.slice(-20).reverse();

    if (recent.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoHistory') + '</div>';
      return;
    }

    recent.forEach(s => {
      const date = new Date(s.ts);
      const locale = T._lang === 'he' ? 'he-IL' : 'en-GB';
      const timeStr = date.toLocaleDateString(locale, { day:'numeric', month:'short' }) +
        ' ' + date.toLocaleTimeString(locale, { hour:'2-digit', minute:'2-digit' });
      const row = document.createElement('div');
      row.className = 'dash-session-row';
      row.innerHTML = `
        <span class="dash-session-icon">${this._gameIcons[s.game] || '🎮'}</span>
        <span class="dash-session-game">${this._gameKeys[s.game] ? T.get(this._gameKeys[s.game]) : s.game}</span>
        <span class="dash-session-score">${s.correct}/${s.total}</span>
        <span class="dash-session-acc">${s.accuracy}%</span>
        <span class="dash-session-stars">${'★'.repeat(s.stars)}${'☆'.repeat(3 - s.stars)}</span>
        <span class="dash-session-time">${timeStr}</span>
      `;
      el.appendChild(row);
    });
  }
};

// ===== APP INIT =====
const App = {
  init() {
    WordManager.init();
    GameState.load();
    Particles.init();
    Achievements.resetFlags();
    DailyChallenge.generate();

    const savedLang = localStorage.getItem('wordquest_lang') || 'en';
    T.setLang(savedLang);
    document.getElementById('btn-lang').textContent = savedLang === 'en' ? 'עברית' : 'EN';

    const savedSound = localStorage.getItem('wordquest_sound');
    if (savedSound === '1') {
      Sound._enabled = true;
      document.getElementById('btn-sound').textContent = '🔊';
    }

    if (GameState.data.firstTime) {
      UI.showScreen('welcome');
    } else {
      Progress.updateStreak();
      UI.showScreen('home');
    }

    this._bindEvents();
  },

  _bindEvents() {
    document.getElementById('btn-start').addEventListener('click', () => {
      GameState.data.firstTime = false;
      Progress.updateStreak();
      GameState.save();
      UI.showScreen('home');
    });

    document.getElementById('btn-lang').addEventListener('click', () => {
      const newLang = T._lang === 'en' ? 'he' : 'en';
      T.setLang(newLang);
      document.getElementById('btn-lang').textContent = newLang === 'en' ? 'עברית' : 'EN';
      UI.updateStats();
      if (UI._currentScreen === 'home') UI.updateHomeScreen();
      if (UI._currentScreen === 'words') WordManagerUI.render();
      if (UI._currentScreen === 'achievements') AchievementsUI.render();
      if (UI._currentScreen === 'dashboard') { Dashboard._wordData = null; Dashboard.render(); }
      if (UI._currentScreen === 'report') WordReport.render();
    });

    document.getElementById('btn-sound').addEventListener('click', () => {
      const on = Sound.toggle();
      document.getElementById('btn-sound').textContent = on ? '🔊' : '🔇';
      if (on) Sound.pop();
    });

    document.getElementById('btn-dashboard').addEventListener('click', () => {
      UI.showScreen('dashboard');
      Dashboard._wordData = null;
      Dashboard._wordFilter = 'all';
      Dashboard.render();
    });

    document.getElementById('btn-word-report').addEventListener('click', () => {
      UI.showScreen('report');
      WordReport.render();
    });

    document.querySelectorAll('.dash-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Dashboard._wordFilter = btn.dataset.wf;
        Dashboard._renderAllWords();
      });
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const nav = btn.dataset.nav;
        UI.showScreen(nav);
      });
    });

    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const game = card.dataset.game;
        GameState.data.firstTime = false;
        GameState.save();
        document.querySelector('.game-card.suggested')?.classList.remove('suggested');
        UI.showScreen(game);
        this._startGame(game);
      });
    });

    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', () => {
        this._stopCurrentGame();
        UI.showScreen('home');
      });
    });

    document.querySelectorAll('.dir-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const picker = btn.closest('.direction-picker, .setup-group');
        if (picker) picker.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const game = btn.dataset.game || 'lightning';
        if (game === 'lightning') {
          LightningQuiz._direction = btn.dataset.dir;
        } else if (game === 'bubble') {
          BubblePop._direction = btn.dataset.dir;
          if (!BubblePop._started) BubblePop._begin();
        } else if (game === 'scramble') {
          WordScramble._direction = btn.dataset.dir;
          if (!WordScramble._started) WordScramble._begin();
        } else if (game === 'falling') {
          FallingWords._direction = btn.dataset.dir;
        } else if (game === 'bingo') {
          WordBingo._direction = btn.dataset.dir;
        } else if (game === 'sprint') {
          TranslationSprint._direction = btn.dataset.dir;
        } else if (game === 'catsort') {
          CategorySort._direction = btn.dataset.dir;
        }
      });
    });

    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const picker = btn.closest('.level-picker');
        if (picker) picker.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const game = btn.dataset.game;
        if (game === 'lightning') LightningQuiz._level = btn.dataset.level;
        else if (game === 'falling') FallingWords._level = btn.dataset.level;
        else if (game === 'matchup') MatchUp._level = btn.dataset.level;
        else if (game === 'sprint') TranslationSprint._level = btn.dataset.level;
        else if (game === 'wordspy') WordSpy._level = btn.dataset.level;
        else if (game === 'fillin') SentenceFill._level = btn.dataset.level;
      });
    });

    document.getElementById('lightning-start-btn').addEventListener('click', () => {
      if (!LightningQuiz._started) LightningQuiz._begin();
    });
    document.getElementById('falling-start-btn').addEventListener('click', () => {
      if (!FallingWords._started) FallingWords._begin();
    });
    document.getElementById('matchup-start-btn').addEventListener('click', () => {
      if (!MatchUp._started) MatchUp._begin();
    });
    document.getElementById('bingo-start-btn').addEventListener('click', () => {
      if (!WordBingo._started) WordBingo._begin();
    });
    document.getElementById('sprint-start-btn').addEventListener('click', () => {
      if (!TranslationSprint._started) TranslationSprint._begin();
    });
    document.getElementById('wordspy-start-btn').addEventListener('click', () => {
      if (!WordSpy._started) WordSpy._begin();
    });
    document.getElementById('catsort-start-btn').addEventListener('click', () => {
      if (!CategorySort._started) CategorySort._begin();
    });
    document.getElementById('fillin-start-btn').addEventListener('click', () => {
      if (!SentenceFill._started) SentenceFill._begin();
    });

    document.getElementById('scramble-hint').addEventListener('click', () => {
      WordScramble._useHint();
    });

    document.getElementById('tf-btn-correct').addEventListener('click', () => {
      TrueFalse._answer(true);
    });
    document.getElementById('tf-btn-wrong').addEventListener('click', () => {
      TrueFalse._answer(false);
    });

    document.addEventListener('keydown', (e) => {
      if (UI._currentScreen !== 'truefalse' || !TrueFalse._active) return;
      if (e.key === 'ArrowRight' || e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        TrueFalse._answer(true);
      } else if (e.key === 'ArrowLeft' || e.key === 'x' || e.key === 'X') {
        e.preventDefault();
        TrueFalse._answer(false);
      }
    });

    document.getElementById('falling-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        FallingWords._onSubmit();
      }
    });

    document.getElementById('words-search').addEventListener('input', (e) => {
      WordManagerUI._search = e.target.value;
      WordManagerUI.render();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        WordManagerUI._filter = btn.dataset.filter;
        WordManagerUI.render();
      });
    });

    document.getElementById('btn-select-all').addEventListener('click', () => {
      WordManager.selectAll();
      WordManagerUI.render();
    });

    document.getElementById('btn-clear-selection').addEventListener('click', () => {
      WordManager.clearSelection();
      WordManagerUI.render();
    });

    document.getElementById('home-clear-selection').addEventListener('click', () => {
      WordManager.clearSelection();
      UI.updateHomeScreen();
    });

    document.getElementById('btn-quick-practice').addEventListener('click', () => {
      const words = WordManager.getAll();
      const weak = words.filter(w => {
        const s = WordManager.getWordStrength(w.id);
        return s.label === 'struggling' || s.label === 'unseen' || s.label === 'learning';
      });

      if (weak.length >= 4) {
        WordManager.clearSelection();
        weak.slice(0, 20).forEach(w => WordManager.toggleSelection(w.id));
      } else {
        WordManager.clearSelection();
      }

      const translationGames = ['lightning', 'truefalse', 'matchup', 'bingo', 'sprint', 'wordspy', 'catsort', 'fillin'];
      const pick = translationGames[Math.floor(Math.random() * translationGames.length)];
      GameState.data.firstTime = false;
      GameState.save();
      UI.showScreen(pick);
      App._startGame(pick);
    });

    document.getElementById('btn-add-word').addEventListener('click', () => {
      const engInput = document.getElementById('add-english');
      const hebInput = document.getElementById('add-hebrew');
      const eng = engInput.value.trim();
      const heb = hebInput.value.trim();
      if (eng && heb) {
        WordManager.addWord(eng, heb);
        engInput.value = '';
        hebInput.value = '';
        WordManagerUI.render();
        UI.updateStats();
      }
    });

    window.addEventListener('popstate', () => {
      if (UI._currentScreen !== 'home') {
        this._stopCurrentGame();
        UI.showScreen('home');
      }
    });
  },

  _startGame(game) {
    this._stopCurrentGame();
    UI._currentGame = game;
    Achievements.resetFlags();
    switch(game) {
      case 'bubble': BubblePop.start(); break;
      case 'memory': MemoryMatch.start(); break;
      case 'lightning': LightningQuiz.start(); break;
      case 'scramble': WordScramble.start(); break;
      case 'falling': FallingWords.start(); break;
      case 'truefalse': TrueFalse.start(); break;
      case 'matchup': MatchUp.start(); break;
      case 'bingo': WordBingo.start(); break;
      case 'sprint': TranslationSprint.start(); break;
      case 'wordspy': WordSpy.start(); break;
      case 'catsort': CategorySort.start(); break;
      case 'fillin': SentenceFill.start(); break;
    }
  },

  _stopCurrentGame() {
    BubblePop.stop();
    MemoryMatch.stop();
    LightningQuiz.stop();
    FallingWords.stop();
    TrueFalse.stop();
    MatchUp.stop();
    WordBingo.stop();
    TranslationSprint.stop();
    WordSpy.stop();
    CategorySort.stop();
    SentenceFill.stop();
    UI._currentGame = null;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
