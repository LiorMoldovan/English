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
    gameFalling: 'Falling Words',
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
    dailyComplete: 'Challenge Complete!',
    highScore: 'High Score',
    startGame: 'Start Game',
    almostRemember: 'Almost! Remember this one',
  },
  he: {
    welcomeMessage: '!מוכנה לשלוט ב-83 מילים באנגלית? בואי נשחק',
    startButton: '!התחלה',
    dailyChallenge: 'אתגר יומי',
    gameBubble: 'בועות קסם', gameMemory: 'זיכרון',
    gameLightning: 'ברק', gameScramble: 'פאזל מילים',
    gameFalling: 'מילים נופלות',
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
    dailyComplete: '!האתגר הושלם',
    highScore: 'שיא',
    startGame: 'התחלה',
    almostRemember: 'כמעט! תזכרי את זה',
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
  data: null,

  defaults() {
    return {
      xp: 0, level: 1, totalStars: 0,
      streak: 0, lastPlayDate: null, streakShield: false,
      gamesPlayed: { bubble: 0, memory: 0, lightning: 0, scramble: 0, falling: 0 },
      achievements: [],
      dailyChallenge: { date: null, type: null, progress: 0, completed: false },
      todayGamesPlayed: { date: null, modes: [], rounds: 0, maxCombo: 0, maxStreak: 0, gotStars3: false, masteredNewWord: false },
      fallingHighScore: 0,
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
  addXP(amount) {
    GameState.data.xp += amount;
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
    num.textContent = 'Level ' + GameState.data.level;
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

  recordGameComplete(gameMode, stars, xpEarned, missedWords) {
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

  generate() {
    const today = new Date().toDateString();
    const d = GameState.data.dailyChallenge;
    if (d.date === today) return;
    const dayIdx = new Date().getDay();
    const type = this.types[dayIdx];
    GameState.data.dailyChallenge = { date: today, type: type.id, progress: 0, completed: false };
    GameState.save();
  },

  getCurrent() {
    this.generate();
    const d = GameState.data.dailyChallenge;
    const type = this.types.find(t => t.id === d.type) || this.types[0];
    return { ...type, progress: d.progress, completed: d.completed };
  },

  checkProgress() {
    const d = GameState.data.dailyChallenge;
    if (d.completed) return;
    const td = GameState.data.todayGamesPlayed;
    let progress = 0;
    switch (d.type) {
      case 'play2': progress = td.modes.length; break;
      case 'streak5': progress = Math.min(td.maxStreak, 5); break;
      case 'master': progress = td.masteredNewWord ? 1 : 0; break;
      case 'stars3': progress = td.gotStars3 ? 1 : 0; break;
      case 'rounds3': progress = td.rounds; break;
      case 'combo3': progress = td.maxCombo; break;
      case 'newGame': {
        const allModes = ['bubble','memory','lightning','scramble','falling'];
        const played = td.modes;
        progress = played.length > 0 && allModes.some(m => played.includes(m) && !(GameState.data.gamesPlayed[m] > 1)) ? 1 : 0;
        break;
      }
    }
    const type = this.types.find(t => t.id === d.type);
    d.progress = Math.min(progress, type ? type.target : 1);
    if (type && d.progress >= type.target && !d.completed) {
      d.completed = true;
      Progress.addXP(50);
      UI.showDailyChallengeComplete();
    }
    GameState.save();
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
      desc_en: 'Get 10/10 in Lightning Quiz', desc_he: 'קבלי 10/10 בברק',
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

    const masteryCount = document.getElementById('mastery-count');
    if (masteryCount) masteryCount.textContent = WordManager.getMasteredCount();

    const totalWords = WordManager.getCount();
    const mastered = WordManager.getMasteredCount();
    const ring = document.getElementById('mastery-ring');
    if (ring) {
      const circumference = 264;
      const offset = circumference - (mastered / totalWords) * circumference;
      ring.style.strokeDashoffset = offset;
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

    if (GameState.data.firstTime) {
      const firstCard = document.querySelector('[data-game="bubble"]');
      if (firstCard) firstCard.classList.add('suggested');
    }
  },

  showDailyChallengeComplete() {
    const dailyCard = document.getElementById('daily-challenge');
    if (dailyCard) {
      dailyCard.classList.add('completed');
      const dailyText = document.getElementById('daily-text');
      if (dailyText) dailyText.textContent = T.get('dailyComplete');
    }
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

  floatXP(x, y, amount) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = '+' + amount;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
};

// ===== BUBBLE POP GAME =====
const BubblePop = {
  _words: [], _currentIdx: 0, _bubbles: [], _score: 0,
  _combo: 0, _maxCombo: 0, _missed: [], _animId: null,
  _container: null, _active: false,

  start() {
    this._container = document.getElementById('bubble-container');
    this._container.innerHTML = '';
    this._words = WordManager.getWeightedRandom(10);
    this._currentIdx = 0;
    this._score = 0;
    this._combo = 0;
    this._maxCombo = 0;
    this._missed = [];
    this._active = true;

    document.getElementById('bubble-score').textContent = '0';
    document.getElementById('bubble-combo').classList.add('hidden');
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

    const target = document.getElementById('bubble-target');
    target.textContent = correct.hebrew;

    const cw = this._container.clientWidth;
    const ch = this._container.clientHeight;
    const colors = [
      'rgba(255,107,107,0.85)', 'rgba(78,205,196,0.85)', 'rgba(168,85,247,0.85)',
      'rgba(255,217,61,0.85)', 'rgba(244,114,182,0.85)'
    ];

    allWords.forEach((w, i) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.textContent = w.english;
      bubble.style.background = colors[i % colors.length];
      bubble.dataset.wordId = w.id;

      const size = Math.max(90, w.english.length * 8 + 40);
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

    Progress.recordGameComplete('bubble', stars, totalXP, this._missed);

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

    Progress.recordGameComplete('memory', stars, xp, []);

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
  _started: false,

  start() {
    this._words = WordManager.getWeightedRandom(10);
    this._currentIdx = 0;
    this._score = 0;
    this._streak = 0;
    this._maxStreak = 0;
    this._missed = [];
    this._answered = false;
    this._started = false;

    document.getElementById('lightning-score').textContent = '0';
    document.getElementById('lightning-progress').textContent = '1/10';
    document.getElementById('lightning-streak').classList.add('hidden');

    const dirPicker = document.getElementById('lightning-direction-picker');
    dirPicker.classList.remove('hidden');

    const wordEl = document.getElementById('lightning-word');
    wordEl.textContent = T.get('startGame');
    document.getElementById('lightning-answers').innerHTML = '';
    document.getElementById('lightning-timer').style.width = '100%';
  },

  _begin() {
    this._started = true;
    document.getElementById('lightning-direction-picker').classList.add('hidden');
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

    this._timeLeft = 800;
    const timerEl = document.getElementById('lightning-timer');
    timerEl.style.width = '100%';
    timerEl.className = 'lightning-timer-fill';

    clearInterval(this._timerInterval);
    this._timerInterval = setInterval(() => {
      this._timeLeft -= 10;
      const pct = (this._timeLeft / 800) * 100;
      timerEl.style.width = pct + '%';
      if (pct < 25) timerEl.className = 'lightning-timer-fill danger';
      else if (pct < 50) timerEl.className = 'lightning-timer-fill warning';
      if (this._timeLeft <= 0) {
        clearInterval(this._timerInterval);
        if (!this._answered) this._onTimeout(word);
      }
    }, 10);
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

      const speedBonus = Math.floor(this._timeLeft / 160);
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

    setTimeout(() => this._showQuestion(), correct ? 800 : 1500);
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
    setTimeout(() => this._showQuestion(), 1500);
  },

  _endRound() {
    clearInterval(this._timerInterval);
    const correct = this._words.length - this._missed.length;
    const stars = correct >= 9 ? 3 : correct >= 7 ? 2 : 1;
    const bonusXP = correct === 10 ? 20 : 0;
    const totalXP = this._score + bonusXP;

    if (correct === 10) Achievements._flags.lightningPerfect = true;

    Progress.recordGameComplete('lightning', stars, totalXP, this._missed);

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
  _correctFirstTry: 0, _attempted: false,

  start() {
    this._words = WordManager.getWeightedRandom(8);
    this._currentIdx = 0;
    this._score = 0;
    this._hintsLeft = 2;
    this._missed = [];
    this._correctFirstTry = 0;

    document.getElementById('scramble-score').textContent = '0';
    document.getElementById('scramble-progress').textContent = '1/8';
    this._updateHintBtn();
    this._showWord();
  },

  _showWord() {
    if (this._currentIdx >= this._words.length) { this._endRound(); return; }

    this._currentWord = this._words[this._currentIdx];
    this._attempted = false;
    const english = this._currentWord.english;

    document.getElementById('scramble-hebrew').textContent = this._currentWord.hebrew;
    document.getElementById('scramble-progress').textContent =
      (this._currentIdx + 1) + '/' + this._words.length;

    const answerZone = document.getElementById('scramble-answer');
    const tilesZone = document.getElementById('scramble-tiles');
    answerZone.innerHTML = '';
    tilesZone.innerHTML = '';
    this._slots = [];
    this._tiles = [];

    const chars = english.split('');
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
    const correct = this._currentWord.english;

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

      setTimeout(() => {
        this._tiles.forEach(t => { t.used = false; t.el.classList.remove('used'); });
        this._slots.forEach(s => {
          if (!s.el.dataset.fixed) {
            s.filled = null;
            s.tileIdx = null;
            s.el.textContent = '';
            s.el.classList.remove('filled', 'wrong-reveal');
          }
        });
      }, 600);
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

    Progress.recordGameComplete('scramble', stars, totalXP, this._missed);

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
  _inputEl: null, _areaEl: null,

  start() {
    this._areaEl = document.getElementById('falling-area');
    this._inputEl = document.getElementById('falling-input');
    this._areaEl.innerHTML = '';
    this._inputEl.value = '';
    this._fallingItems = [];
    this._score = 0;
    this._lives = 3;
    this._wordsSpawned = 0;
    this._active = true;
    this._speed = window.innerWidth < 768 ? 0.3 : 0.5;
    this._xpTotal = 0;

    document.getElementById('falling-score').textContent = '0';
    this._updateLives();

    this._words = WordManager.getWeightedRandom(Math.min(WordManager.getCount(), 40));
    this._shuffleWords();

    this._inputEl.focus();
    this._spawnWord();
    this._spawnInterval = setInterval(() => this._spawnWord(), 3000);
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

    const el = document.createElement('div');
    el.className = 'falling-word';
    el.textContent = word.hebrew;

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
        const eng = document.createElement('div');
        eng.style.cssText = 'font-size:0.75rem;color:var(--accent-coral);margin-top:4px;';
        eng.textContent = item.word.english;
        item.el.appendChild(eng);

        this._lives--;
        this._updateLives();
        Sound.wrong();
        WordManager.recordAnswer(item.word.id, false, 'falling');

        setTimeout(() => { if (item.el.parentNode) item.el.remove(); }, 1500);
        this._fallingItems.splice(i, 1);

        if (this._lives <= 0) { this._endGame(); return; }
      }
    }

    const input = this._inputEl.value.trim().toLowerCase();
    if (input.length > 0) {
      this._fallingItems.forEach(item => {
        const match = item.word.english.toLowerCase();
        item.el.classList.toggle('highlight', match.startsWith(input) && input.length >= 2);
      });
    }

    this._animId = requestAnimationFrame(() => this._animLoop());
  },

  _onSubmit() {
    const input = this._inputEl.value.trim().toLowerCase();
    if (!input) return;

    const matchIdx = this._fallingItems.findIndex(item =>
      item.word.english.toLowerCase() === input
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
    el.textContent = '❤️'.repeat(Math.max(0, this._lives)) + '🖤'.repeat(Math.max(0, 3 - this._lives));
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

    Progress.recordGameComplete('falling', stars, totalXP, []);

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

    words.forEach(w => {
      const m = WordManager.getMastery(w.id);
      const row = document.createElement('div');
      row.className = 'word-row';
      row.innerHTML = `
        <span class="word-english">${w.english}</span>
        <span class="word-mastery">${'<span class="star filled">★</span>'.repeat(m.masteryLevel)}${'<span class="star">★</span>'.repeat(5 - m.masteryLevel)}</span>
        <span class="word-hebrew">${w.hebrew}</span>
        <button class="word-delete" data-id="${w.id}">✕</button>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll('.word-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        if (WordManager.getCount() <= 20) {
          alert(T._lang === 'he' ? 'צריך לפחות 20 מילים' : 'Need at least 20 words');
          return;
        }
        if (confirm(T._lang === 'he' ? '?למחוק מילה זו' : 'Delete this word?')) {
          WordManager.deleteWord(id);
          this.render();
        }
      });
    });
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
    });

    document.getElementById('btn-sound').addEventListener('click', () => {
      const on = Sound.toggle();
      document.getElementById('btn-sound').textContent = on ? '🔊' : '🔇';
      if (on) Sound.pop();
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
        document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        LightningQuiz._direction = btn.dataset.dir;
        if (!LightningQuiz._started) LightningQuiz._begin();
      });
    });

    document.getElementById('scramble-hint').addEventListener('click', () => {
      WordScramble._useHint();
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
    }
  },

  _stopCurrentGame() {
    BubblePop.stop();
    MemoryMatch.stop();
    LightningQuiz.stop();
    FallingWords.stop();
    UI._currentGame = null;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
