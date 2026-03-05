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
    quickPractice: 'Quick Practice', quickPracticeDesc: 'Focuses on your weakest words',
    qpNeedAttention: ' words need attention',
    qpReviewAll: 'Quick Practice · Review all words',
    parentDashboard: 'Progress Report',
    rptSummary: 'Summary',
    rptWordsMastered: 'Mastered', rptAvgAccuracy: 'Avg Accuracy',
    rptTotalPractices: 'Practices', rptDayStreak: 'Day Streak',
    rptThisWeek: 'This Week', rptActiveDays: 'Active Days',
    rptTimeToday: 'Today', rptTimeTotal: 'Total Time',
    rptGamesPlayed: 'Games Played', rptWordsKnown: 'Mastered Words',
    rptMin: 'min', rptHr: 'hr',
    rptDailyUse: 'Daily Usage — Last 14 Days',
    rptDay: 'Day', rptSessions: 'Games', rptTimePlayed: 'Time', rptDayAccuracy: 'Accuracy',
    rptNoActivity: 'No activity',
    rptWordMastery: 'Word Mastery',
    rptVerdictGreat: '🌟 Doing great! Most words are mastered or in good shape.',
    rptVerdictGood: '👍 Good progress. Some words need more attention.',
    rptVerdictWork: '📚 Needs more practice. Focus on the words marked below.',
    rptVerdictStart: '🚀 Just getting started! Keep playing to build progress.',
    dashActivity: 'Activity — Last 14 Days', dashAccuracy: 'Accuracy Trend',
    dashNeedsWork: 'Words That Need Work',
    dashAllWords: 'All Words',
    dashNoSessions: 'No sessions yet',
    dashNoStruggling: 'No struggling words — great job!',
    dashNoCategory: 'No words in this category',
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
    wordExists: 'This word already exists!', wordAdded: 'Word added!',
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
    xpUnit: 'XP', speakListen: 'Listen', soundToggle: 'Sound',
    instrTest: 'Choose the correct translation for each word!',
    takeTest: 'Take a Test', takeTestDesc: 'Test your selected words', testTitle: 'Test',
    greetMorning: 'Good morning, Ofri! ☀️', greetAfternoon: 'Good afternoon, Ofri! 🌤️',
    greetEvening: 'Good evening, Ofri! 🌙', greetNight: 'Good night, Ofri! 🌟',
    almostStars: '%d more for 3 stars!', almostPerfect: 'Almost perfect! Keep going!',
    milestoneTitle: 'Milestone!',
    milestone10: '10 words mastered! 🎉', milestone25: '25 words mastered! 🌟',
    milestone50: '50 words mastered! 💫', milestone75: '75 words mastered! 🔥',
    milestoneAll: 'ALL words mastered! 🏆👑',
    decayWarning: '%d words need a refresher!', decayReview: 'Review Now',
    wordsDueReview: 'words due for review',
    bulkImport: 'Import Words', bulkImportHint: 'Paste words, one per line:\napple = תפוח\ndog = כלב',
    bulkImportBtn: 'Import', bulkImportDone: '%d words imported!',
    bulkImportClose: 'Close', bulkImportTitle: 'Import Words',
    importTabPaste: 'Paste', importTabPhoto: 'Photo', importTabFile: 'File',
    importPreview: '%d words detected', importAutoSelect: 'Auto-select for practice',
    importPhotoBtn: 'Take Photo or Choose', importPhotoProcessing: 'Reading text...',
    importFileBtn: 'Choose File (.txt / .csv)', importLearnNew: 'Learn new words first',
    archiveWord: 'Archive', restoreWord: 'Restore', archiveAll: 'Archive Mastered',
    archiveTab: 'Archived', activeTab: 'Active',
    archiveConfirm: 'Archive %d mastered words?', archiveDone: '%d words archived!',
    archiveRestored: 'Word restored!', archiveEmpty: 'No archived words',
    archiveSuggest: 'All words mastered! Archive and add new ones?',
    archiveAndNew: 'Archive & Add New', keepPracticing: 'Keep Practicing',
    flashcardTitle: 'New Words', flashcardInstruction: 'Tap the card to flip it. Swipe right for next word.',
    flashcardTapToFlip: 'Tap to see translation', flashcardDone: 'Ready to practice!',
    flashcardStart: 'Start Practicing', flashcardSkip: 'Skip',
    dripNewWords: '%d new words added to practice!',
    bulkSelectLabel: 'Select by level:',
    bulkSelAdded: '%d words selected',
    gameModeHint: 'Try a different game to master %d more words!',
    practiceMissed: 'Practice these words', missedSelected: '%d missed words selected for practice',
    suggestGame: 'Try %g — it could help master %d words!', trySuggested: 'Try suggested',
    wordMastered: '🎉 You mastered "%w"!',
    spPlayedIn: 'Played in:',
    dailyTimeGoal: 'Daily Time Goal',
    dailyTimeProgress: '%played / %target min',
    dailyTimeReached: '⏱️ Time goal reached!',
    dailyTimeReachedToast: '⏱️ Time goal reached! +30 XP',
    dailyTimeMsg5: 'Start small — 5 min of focus!',
    dailyTimeMsg10: 'Aim for 10 min today!',
    dailyTimeMsg15: 'Great pace — 15 min target!',
    dailyTimeMsg20: 'You\'re on fire — 20 min!',
    dailyTimeMsg25: 'Power learner — 25 min!',
    dailyTimeMsg30: 'Champion mode — 30 min!',
    testQuestion: 'Question', testOf: 'of',
    testTranslateToHe: 'Translate to Hebrew', testTranslateToEn: 'Translate to English',
    testResults: 'Test Results', testScore: 'Score',
    testCorrect: 'Correct', testWrong: 'Wrong',
    testGradeA: 'Excellent! Ready for new words!',
    testGradeB: 'Great job! A few more practice rounds to master them all',
    testGradeC: 'Good progress! Focus on the marked words before moving on',
    testGradeD: 'Needs more practice. Play a few more games with these words',
    testGradeF: 'Keep practicing! These words need more time',
    testMinWords: 'Need at least 4 words for a test',
    testRetry: 'Retry Mistakes', testBackHome: 'Back Home',
    testYourAnswer: 'Your answer', testCorrectAnswer: 'Correct answer',
    testLatest: 'Latest Test', testNoTests: 'No tests taken yet',
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
    lvlTitle1: 'Beginner', lvlTitle2: 'Explorer', lvlTitle3: 'Learner',
    lvlTitle4: 'Adventurer', lvlTitle5: 'Silver Scholar',
    lvlTitle6: 'Word Warrior', lvlTitle7: 'Smart Cookie',
    lvlTitle8: 'Knowledge Seeker', lvlTitle9: 'Rising Star',
    lvlTitle10: 'Gold Master', lvlTitle11: 'Word Wizard',
    lvlTitle12: 'Brain Power', lvlTitle13: 'Superstar',
    lvlTitle14: 'Language Hero', lvlTitle15: 'Diamond Legend',
    spTitle: 'Word Progress', spMastered: 'mastered',
    spSummary: '%m / %t words mastered',
    spReadyMsg: 'All words mastered! Ready for new words!',
    spNoSelection: 'Select words from the word bank to track progress.',
    spLegMastered: 'Mastered', spLegAlmost: 'Almost', spLegLearning: 'Learning',
    spLegStruggling: 'Struggling', spLegNew: 'New',
    spStreak: 'Streak', spModes: 'Modes', spAccuracy: 'Accuracy',
    spLvlMastered: 'Mastered', spLvlAlmost: 'Almost there',
    spLvlLearning: 'Learning', spLvlStruggling: 'Struggling', spLvlNew: 'New',
    parentLinkCopied: 'Link copied!',
    parentLinkError: 'Could not create link, try again later',
    restoreLink: 'Restore progress', restorePlaceholder: 'Paste your parent link here',
    restoreGo: 'Restore', restoreSuccess: 'Progress restored!', restoreFail: 'Could not restore, check the link',
    parentViewTitle: 'Progress Report (Live)',
    parentViewRefresh: 'Refresh', parentViewUpdated: 'Last updated',
    parentViewJustNow: 'just now', parentViewMinAgo: '%d min ago',
    parentViewHrAgo: '%d hr ago', parentViewLoading: 'Loading progress...',
    parentViewError: 'Could not load data. Check the link and try again.',
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
    quickPractice: 'תרגול מהיר', quickPracticeDesc: 'מתמקד במילים שצריך לחזק',
    qpNeedAttention: ' מילים דורשות תשומת לב',
    qpReviewAll: 'תרגול מהיר · חזרו על הכל',
    parentDashboard: 'דוח התקדמות',
    rptSummary: 'סיכום',
    rptWordsMastered: 'שולטת', rptAvgAccuracy: 'דיוק ממוצע',
    rptTotalPractices: 'תרגולים', rptDayStreak: 'ימים ברצף',
    rptThisWeek: 'השבוע', rptActiveDays: 'ימים פעילים',
    rptTimeToday: 'היום', rptTimeTotal: 'זמן כולל',
    rptGamesPlayed: 'משחקים', rptWordsKnown: 'מילים ששולטת',
    rptMin: 'דק׳', rptHr: 'שע׳',
    rptDailyUse: 'שימוש יומי — 14 ימים אחרונים',
    rptDay: 'יום', rptSessions: 'משחקים', rptTimePlayed: 'זמן', rptDayAccuracy: 'דיוק',
    rptNoActivity: 'אין פעילות',
    rptWordMastery: 'שליטה במילים',
    rptVerdictGreat: '🌟 מצוין! רוב המילים נשלטות או במצב טוב.',
    rptVerdictGood: '👍 התקדמות טובה. חלק מהמילים דורשות עוד תשומת לב.',
    rptVerdictWork: '📚 צריך עוד תרגול. התמקדי במילים המסומנות למטה.',
    rptVerdictStart: '🚀 רק מתחילים! המשיכי לשחק כדי להתקדם.',
    dashActivity: 'פעילות — 14 הימים האחרונים', dashAccuracy: 'מגמת דיוק',
    dashNeedsWork: 'מילים שדורשות עבודה',
    dashAllWords: 'כל המילים',
    dashNoSessions: 'אין משחקים עדיין',
    dashNoStruggling: '!אין מילים קשות — כל הכבוד',
    dashNoCategory: 'אין מילים בקטגוריה זו',
    dashFilterAll: 'הכל', dashStruggling: 'מתקשה', dashLearning: 'לומדת',
    dashGood: 'יודעת', dashMastered: 'שולטת', dashUnseen: 'לא נראה',
    dashToday: 'היום', dashYesterday: 'אתמול', dashDaysAgo: ' ימים', dashNever: 'אף פעם',
    levelPrefix: 'רמה ',
    deleteConfirm: 'למחוק מילה זו?', minWords: 'צריך לפחות 20 מילים',
    selPracticing: 'תרגול מילים נבחרות',
    selNone: 'לא נבחרו — משתמשים בכל המילים',
    selFocused: 'בחרו מילים לתרגול ממוקד',
    selWordsSelected: ' מילים נבחרו',
    selSelectAll: 'בחר הכל', selClear: 'נקה',
    editWord: 'עריכה', deleteWord: 'מחיקה', saveWord: 'שמירה', cancelWord: 'ביטול',
    wordExists: '!מילה זו כבר קיימת', wordAdded: '!מילה נוספה',
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
    xpUnit: 'נק׳', speakListen: 'השמע', soundToggle: 'צליל',
    instrTest: '!בחרי את התרגום הנכון לכל מילה',
    takeTest: 'מבחן', takeTestDesc: 'בחני את המילים שבחרת', testTitle: 'מבחן',
    greetMorning: '☀️ !בוקר טוב, עופרי', greetAfternoon: '🌤️ !צהריים טובים, עופרי',
    greetEvening: '🌙 !ערב טוב, עופרי', greetNight: '🌟 !לילה טוב, עופרי',
    almostStars: '!עוד %d ל-3 כוכבים', almostPerfect: '!כמעט מושלם! המשיכי',
    milestoneTitle: '!אבן דרך',
    milestone10: '!10 מילים נשלטו 🎉', milestone25: '!25 מילים נשלטו 🌟',
    milestone50: '!50 מילים נשלטו 💫', milestone75: '!75 מילים נשלטו 🔥',
    milestoneAll: '!כל המילים נשלטו 🏆👑',
    decayWarning: '!%d מילים צריכות רענון', decayReview: 'תרגול עכשיו',
    wordsDueReview: 'מילים לחזרה',
    bulkImport: 'ייבוא מילים', bulkImportHint: ':הדביקי מילים, אחת בכל שורה\napple = תפוח\ndog = כלב',
    bulkImportBtn: 'ייבוא', bulkImportDone: '!מילים יובאו %d',
    bulkImportClose: 'סגירה', bulkImportTitle: 'ייבוא מילים',
    importTabPaste: 'הדבקה', importTabPhoto: 'צילום', importTabFile: 'קובץ',
    importPreview: 'מילים זוהו %d', importAutoSelect: 'בחרי אוטומטית לתרגול',
    importPhotoBtn: 'צלמי או בחרי תמונה', importPhotoProcessing: '...קוראת טקסט',
    importFileBtn: 'csv. / txt. בחרי קובץ', importLearnNew: 'למדי מילים חדשות קודם',
    archiveWord: 'ארכיון', restoreWord: 'שחזור', archiveAll: 'ארכוב שליטה',
    archiveTab: 'ארכיון', activeTab: 'פעיל',
    archiveConfirm: 'לארכב %d מילים ששולטת בהן?', archiveDone: '!מילים עברו לארכיון %d',
    archiveRestored: '!המילה שוחזרה', archiveEmpty: 'אין מילים בארכיון',
    archiveSuggest: '!שולטת בכל המילים! לארכב ולהוסיף חדשות?',
    archiveAndNew: 'ארכוב והוספה', keepPracticing: 'המשיכי לתרגל',
    flashcardTitle: 'מילים חדשות', flashcardInstruction: '.לחצי על הכרטיס כדי להפוך אותו. החליקי ימינה למילה הבאה',
    flashcardTapToFlip: 'לחצי לראות תרגום', flashcardDone: '!מוכנה לתרגל',
    flashcardStart: 'התחילי לתרגל', flashcardSkip: 'דלגי',
    dripNewWords: '!מילים חדשות נוספו לתרגול %d',
    bulkSelectLabel: ':בחרי לפי רמה',
    bulkSelAdded: 'מילים נבחרו %d',
    gameModeHint: '!שחקי משחק אחר כדי לשלוט ב-%d מילים נוספות',
    practiceMissed: 'תרגלי מילים אלה', missedSelected: 'מילים שפספסת נבחרו לתרגול %d',
    suggestGame: '!נסי %g — זה יעזור לשלוט ב-%d מילים', trySuggested: 'נסי את המומלץ',
    wordMastered: '!🎉 שלטת במילה "%w"',
    spPlayedIn: ':שיחקת ב',
    dailyTimeGoal: 'יעד זמן יומי',
    dailyTimeProgress: '%target / %played דק׳',
    dailyTimeReached: '!⏱️ יעד הזמן הושג',
    dailyTimeReachedToast: '!⏱️ יעד הזמן הושג! +30 נק׳',
    dailyTimeMsg5: '!התחילי בקטן — 5 דקות של ריכוז',
    dailyTimeMsg10: '!כווני ל-10 דקות היום',
    dailyTimeMsg15: '!קצב מעולה — יעד 15 דקות',
    dailyTimeMsg20: '!את על אש — 20 דקות',
    dailyTimeMsg25: '!לומדת על — 25 דקות',
    dailyTimeMsg30: '!מצב אלופות — 30 דקות',
    testQuestion: 'שאלה', testOf: 'מתוך',
    testTranslateToHe: 'תרגמי לעברית', testTranslateToEn: 'תרגמי לאנגלית',
    testResults: 'תוצאות המבחן', testScore: 'ציון',
    testCorrect: 'נכון', testWrong: 'לא נכון',
    testGradeA: '!מצוין! מוכנה למילים חדשות',
    testGradeB: 'כל הכבוד! עוד קצת תרגול ותשלטי בהכל',
    testGradeC: 'התקדמות יפה! התמקדי במילים המסומנות לפני שממשיכים',
    testGradeD: 'צריך עוד תרגול. שחקי עוד כמה משחקים עם המילים האלה',
    testGradeF: '!המשיכי לתרגל! המילים האלה צריכות עוד זמן',
    testMinWords: 'צריך לפחות 4 מילים למבחן',
    testRetry: 'נסי שוב את הטעויות', testBackHome: 'חזרה הביתה',
    testYourAnswer: 'התשובה שלך', testCorrectAnswer: 'תשובה נכונה',
    testLatest: 'מבחן אחרון', testNoTests: 'עוד לא נעשו מבחנים',
    wordProgress: 'התקדמות מילים', wordReport: 'דוח מילים',
    reportFocus: '🔴 להתמקד באלה', reportLearning: '🟡 לומדת',
    reportGood: '🟢 יודעת', reportMastered: '⭐ שולטת',
    reportUnseen: '⬜ עוד לא תורגלו',
    reportOverall: 'התקדמות כללית', reportPracticed: 'תורגלו',
    reportAccAvg: 'דיוק ממוצע', reportTotalPractice: 'סה"כ תרגולים',
    reportLastActive: 'פעילות אחרונה',
    reportNone: 'אין מילים בחלק זה',
    reportPracticeTip: 'תרגול',
    legMastered: 'שולטת', legGood: 'יודעת', legLearning: 'לומדת',
    legStruggling: 'מתקשה', legUnseen: 'לא נראו',
    reportTimes: 'פעמים',
    lvlTitle1: 'מתחילה', lvlTitle2: 'חוקרת', lvlTitle3: 'לומדת',
    lvlTitle4: 'הרפתקנית', lvlTitle5: 'מלגאית כסף',
    lvlTitle6: 'לוחמת מילים', lvlTitle7: 'חכמולוגית',
    lvlTitle8: 'מחפשת ידע', lvlTitle9: 'כוכב עולה',
    lvlTitle10: 'אלופת זהב', lvlTitle11: 'קוסמת מילים',
    lvlTitle12: 'כוח מוחי', lvlTitle13: 'סופרסטאר',
    lvlTitle14: 'גיבורת שפה', lvlTitle15: 'אגדת יהלום',
    spTitle: 'התקדמות מילים', spMastered: 'שולטת',
    spSummary: '%m מתוך %t מילים שולטת',
    spReadyMsg: '!כל המילים נשלטו! מוכנה למילים חדשות',
    spNoSelection: '.בחרי מילים מבנק המילים כדי לעקוב אחרי ההתקדמות',
    spLegMastered: 'שולטת', spLegAlmost: 'כמעט', spLegLearning: 'לומדת',
    spLegStruggling: 'מתקשה', spLegNew: 'חדשה',
    spStreak: 'רצף', spModes: 'משחקים', spAccuracy: 'דיוק',
    spLvlMastered: 'שולטת', spLvlAlmost: 'כמעט שם',
    spLvlLearning: 'לומדת', spLvlStruggling: 'מתקשה', spLvlNew: 'חדשה',
    parentLinkCopied: '!הקישור הועתק',
    parentLinkError: 'לא ניתן ליצור קישור, נסי שוב מאוחר יותר',
    restoreLink: 'שחזור התקדמות', restorePlaceholder: 'הדביקי את הקישור כאן',
    restoreGo: 'שחזור', restoreSuccess: '!ההתקדמות שוחזרה', restoreFail: 'לא ניתן לשחזר, בדקי את הקישור',
    parentViewTitle: 'דוח התקדמות - לייב',
    parentViewRefresh: 'רענון', parentViewUpdated: 'עדכון אחרון',
    parentViewJustNow: 'עכשיו', parentViewMinAgo: 'לפני %d דק׳',
    parentViewHrAgo: 'לפני %d שע׳', parentViewLoading: '...טוען התקדמות',
    parentViewError: '.לא ניתן לטעון נתונים. בדקי את הקישור ונסי שוב',
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
    this._canvas.style.visibility = 'visible';
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
        this._canvas.style.visibility = 'hidden';
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
      dailyTimeGoal: { date: null, targetMin: 10, playedSec: 0, completed: false },
      todayGamesPlayed: { date: null, modes: [], rounds: 0, maxCombo: 0, maxStreak: 0, gotStars3: false, masteredNewWord: false },
      fallingHighScore: 0,
      sprintHighScore: 0,
      testHistory: [],
      firstTime: true,
      milestonesShown: [],
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

  logSession(gameMode, correct, total, stars, xp, durationSec) {
    try {
      const history = this.getHistory();
      history.push({
        ts: Date.now(),
        game: gameMode,
        correct, total, stars, xp,
        accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
        duration: durationSec || 0
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

  addTestResult(record) {
    if (!this.data.testHistory) this.data.testHistory = [];
    this.data.testHistory.push(record);
    if (this.data.testHistory.length > 50) this.data.testHistory.splice(0, this.data.testHistory.length - 50);
    this.save();
  },

  getLatestTest() {
    if (!this.data.testHistory || this.data.testHistory.length === 0) return null;
    return this.data.testHistory[this.data.testHistory.length - 1];
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
  },

  getLevelTitle() {
    const l = Math.min(this.data.level, 15);
    return T.get('lvlTitle' + l);
  }
};

// ===== SPEAK (Text-to-Speech) =====
const Speak = {
  say(text, lang) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'he' ? 'he-IL' : 'en-US';
    u.rate = 0.85;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  },

  english(text) { this.say(text, 'en'); },
  hebrew(text) { this.say(text, 'he'); },

  btn(text, lang) {
    const b = document.createElement('button');
    b.className = 'speak-btn';
    b.textContent = '🔊';
    b.title = T.get('speakListen');
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.say(text, lang);
      b.classList.add('speak-pulse');
      setTimeout(() => b.classList.remove('speak-pulse'), 400);
    });
    return b;
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
    const titleEl = document.getElementById('levelup-title');
    if (titleEl) titleEl.textContent = GameState.getLevelTitle();
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

    const durationSec = App._gameStartTs ? Math.round((Date.now() - App._gameStartTs) / 1000) : 0;
    GameState.logSession(gameMode, correct || 0, total || 0, stars, xpEarned, durationSec);
    DailyChallenge.recordPlayTime(durationSec);

    this.updateStreak();
    this.addXP(xpEarned);
    DailyChallenge.checkProgress();
    Achievements.checkAll();
    Milestones.check();
    GameState.save();
    UI.updateStats();
    CloudSync.push();
  }
};

// ===== MILESTONES =====
const Milestones = {
  thresholds: [
    { count: 10, key: 'milestone10' },
    { count: 25, key: 'milestone25' },
    { count: 50, key: 'milestone50' },
    { count: 75, key: 'milestone75' },
  ],

  check() {
    const mastered = WordManager.getMasteredCount();
    const total = WordManager.getCount();
    const shown = GameState.data.milestonesShown || [];

    for (const m of this.thresholds) {
      if (mastered >= m.count && !shown.includes(m.key)) {
        shown.push(m.key);
        GameState.data.milestonesShown = shown;
        GameState.save();
        this._celebrate(T.get(m.key));
        return;
      }
    }

    if (mastered >= total && total > 0 && !shown.includes('milestoneAll')) {
      shown.push('milestoneAll');
      GameState.data.milestonesShown = shown;
      GameState.save();
      this._celebrate(T.get('milestoneAll'));
    }
  },

  _celebrate(text) {
    const overlay = document.getElementById('milestone-overlay');
    if (!overlay) return;
    document.getElementById('milestone-text').textContent = text;
    overlay.classList.remove('hidden');
    Particles.celebration();
    Sound.achievement();
    setTimeout(() => overlay.classList.add('hidden'), 4000);
  }
};

// ===== SMART PROGRESS =====
const SmartProgress = {
  render() {
    const prog = WordManager.getSelectedWordsProgress();
    const summary = document.getElementById('sp-summary');
    const countsEl = document.getElementById('sp-summary-counts');
    const barFill = document.getElementById('sp-bar-fill');
    const pctEl = document.getElementById('sp-summary-pct');
    const readyEl = document.getElementById('sp-ready');
    const noSelEl = document.getElementById('sp-no-selection');
    const legendEl = document.getElementById('sp-legend');
    const listEl = document.getElementById('sp-word-list');

    if (prog.total === 0) {
      if (summary) summary.classList.add('hidden');
      if (readyEl) readyEl.classList.add('hidden');
      if (legendEl) legendEl.classList.add('hidden');
      if (noSelEl) noSelEl.classList.remove('hidden');
      if (listEl) listEl.innerHTML = '';
      return;
    }

    if (summary) summary.classList.remove('hidden');
    if (noSelEl) noSelEl.classList.add('hidden');
    if (legendEl) legendEl.classList.remove('hidden');

    if (countsEl) countsEl.textContent = T.get('spSummary').replace('%m', prog.mastered).replace('%t', prog.total);
    if (barFill) barFill.style.width = prog.pct + '%';
    if (pctEl) pctEl.textContent = prog.pct + '%';

    if (readyEl) {
      readyEl.classList.toggle('hidden', !prog.ready);
      if (prog.ready) {
        Particles.celebration();
        Sound.achievement();
        readyEl.innerHTML = '<div class="sp-ready-text">' + T.get('archiveSuggest') + '</div>' +
          '<div class="sp-ready-actions">' +
          '<button class="btn btn-primary btn-sm" id="sp-archive-btn">' + T.get('archiveAndNew') + '</button>' +
          '<button class="btn btn-secondary btn-sm" id="sp-keep-btn">' + T.get('keepPracticing') + '</button>' +
          '</div>';
        const archBtn = document.getElementById('sp-archive-btn');
        if (archBtn) archBtn.addEventListener('click', () => {
          const masteredIds = prog.words.filter(w => w.confidence.level === 'mastered').map(w => w.word.id);
          const count = WordManager.archiveMultiple(masteredIds);
          WordManager.clearSelection();
          UI.showToast(T.get('archiveDone').replace('%d', count), 'teal');
          UI.showScreen('words');
          WordManagerUI.render();
        });
        const keepBtn = document.getElementById('sp-keep-btn');
        if (keepBtn) keepBtn.addEventListener('click', () => readyEl.classList.add('hidden'));
      }
    }

    if (!listEl) return;
    listEl.innerHTML = '';

    const levelLabels = {
      mastered: T.get('spLvlMastered'),
      almost: T.get('spLvlAlmost'),
      learning: T.get('spLvlLearning'),
      struggling: T.get('spLvlStruggling'),
      not_started: T.get('spLvlNew')
    };

    prog.words.forEach(({ word, confidence }) => {
      const row = document.createElement('div');
      row.className = 'sp-word-row';
      row.setAttribute('data-level', confidence.level);

      const mastery = WordManager.getMastery(word.id);
      const modeNames = (mastery.gameModesCorrect || []).map(g => T.get(UI._gameNameKeys[g] || g)).join(', ');
      row.innerHTML = `
        <div class="sp-word-texts">
          <div class="sp-word-en">${word.english}</div>
          <div class="sp-word-he">${word.hebrew}</div>
        </div>
        <div class="sp-word-meta">
          <span class="sp-word-badge sp-badge-${confidence.level}">${levelLabels[confidence.level]}</span>
          <div class="sp-word-bar-track">
            <div class="sp-word-bar-fill" style="width:${confidence.pctToMastery}%"></div>
          </div>
        </div>
        <div class="sp-word-detail">
          <span class="sp-detail-item"><span class="sp-detail-label">${T.get('spStreak')}:</span> ${confidence.streak}/5</span>
          <span class="sp-detail-item"><span class="sp-detail-label">${T.get('spModes')}:</span> ${confidence.modesCount}/2</span>
          <span class="sp-detail-item"><span class="sp-detail-label">${T.get('spAccuracy')}:</span> ${confidence.accuracy}%</span>
          ${modeNames ? `<div class="sp-detail-modes"><span class="sp-detail-label">${T.get('spPlayedIn')}</span> ${modeNames}</div>` : ''}
        </div>
      `;

      row.addEventListener('click', () => row.classList.toggle('expanded'));
      listEl.appendChild(row);
    });
  },

  getBadgeText() {
    const prog = WordManager.getSelectedWordsProgress();
    if (prog.total === 0) return { text: '—', show: false };
    return { text: prog.mastered + ' / ' + prog.total, show: true };
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
    this._generateTimeTarget(today);
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

  _generateTimeTarget(today) {
    const history = GameState.getHistory();
    const last7 = history.filter(s => s.ts > Date.now() - 7 * 86400000);

    let avgDailyMin = 10;
    if (last7.length > 0) {
      const dayMap = {};
      last7.forEach(s => {
        const day = new Date(s.ts).toDateString();
        dayMap[day] = (dayMap[day] || 0) + (s.duration || 0);
      });
      const activeDays = Object.keys(dayMap).length;
      const totalSec = Object.values(dayMap).reduce((a, b) => a + b, 0);
      avgDailyMin = Math.round(totalSec / 60 / Math.max(activeDays, 1));
    }

    const streak = GameState.data.streak || 0;
    let boost = 1.15;
    if (streak >= 14) boost = 1.25;
    else if (streak >= 7) boost = 1.20;

    const raw = Math.round(avgDailyMin * boost);
    const target = Math.max(5, Math.min(30, Math.ceil(raw / 5) * 5));

    GameState.data.dailyTimeGoal = {
      date: today, targetMin: target, playedSec: 0, completed: false
    };
  },

  getTimeGoal() {
    const g = GameState.data.dailyTimeGoal;
    if (!g || !g.date) return { targetMin: 10, playedSec: 0, completed: false };
    return g;
  },

  _getTimeMotivation(targetMin) {
    if (targetMin <= 5) return T.get('dailyTimeMsg5');
    if (targetMin <= 10) return T.get('dailyTimeMsg10');
    if (targetMin <= 15) return T.get('dailyTimeMsg15');
    if (targetMin <= 20) return T.get('dailyTimeMsg20');
    if (targetMin <= 25) return T.get('dailyTimeMsg25');
    return T.get('dailyTimeMsg30');
  },

  recordPlayTime(durationSec) {
    const g = GameState.data.dailyTimeGoal;
    const today = new Date().toDateString();
    if (!g || g.date !== today) return;
    g.playedSec += durationSec;
    if (!g.completed && g.playedSec >= g.targetMin * 60) {
      g.completed = true;
      Progress.addXP(30);
      Sound.levelUp();
      Particles.celebration();
      UI._showChallengeToast(T.get('dailyTimeReachedToast'), '+30 ' + T.get('xpUnit'), 'teal');
    }
    GameState.save();
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

    if (id === 'home') { WordManager.clearTempPool(); this.updateHomeScreen(); }
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
    if (xpText) xpText.textContent = d.xp + ' / ' + threshold + ' ' + T.get('xpUnit');

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
    this._renderGreeting();
    this._renderDecayWarning();
    const levelTitle = document.getElementById('level-title');
    if (levelTitle) levelTitle.textContent = GameState.getLevelTitle();
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

    const timeGoal = DailyChallenge.getTimeGoal();
    const timeCard = document.getElementById('daily-time-card');
    if (timeCard) {
      const playedMin = Math.floor(timeGoal.playedSec / 60);
      const pct = timeGoal.targetMin > 0 ? Math.min((playedMin / timeGoal.targetMin) * 100, 100) : 0;
      document.getElementById('daily-time-played').textContent = playedMin;
      document.getElementById('daily-time-target').textContent = timeGoal.targetMin;
      document.getElementById('daily-time-progress').style.width = pct + '%';
      const motiv = document.getElementById('daily-time-motiv');
      if (motiv) motiv.textContent = timeGoal.completed
        ? T.get('dailyTimeReached')
        : DailyChallenge._getTimeMotivation(timeGoal.targetMin);
      timeCard.classList.toggle('completed', timeGoal.completed);
    }

    this._renderQuickPractice();
    this._renderSmartBadge();
    this._renderGameModeHint();

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
    this._showChallengeToast(T.get('dailyComplete'), '+50 ' + T.get('xpUnit'), 'gold');
    this.updateHomeScreen();
  },

  showBonusChallengeComplete() {
    this._showChallengeToast(T.get('bonusComplete'), '+30 ' + T.get('xpUnit'), 'coral');
    this.updateHomeScreen();
  },

  showXpGoalComplete() {
    this._showChallengeToast(
      T.get('dailyXpReached'),
      '+40 ' + T.get('xpUnit'), 'purple'
    );
    this.updateHomeScreen();
  },

  _showChallengeToast(text, reward, color) {
    const existing = document.querySelector('.challenge-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'challenge-toast challenge-toast-' + (color || 'gold');
    let html = '<div class="challenge-toast-text">' + text + '</div>';
    if (reward) html += '<div class="challenge-toast-reward">' + reward + '</div>';
    toast.innerHTML = html;
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
    document.getElementById('results-xp').textContent = '+' + xp + ' ' + T.get('xpUnit');

    const starsEl = document.getElementById('results-stars');
    starsEl.textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

    const reviewSection = document.getElementById('results-review');
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    const practiceMissedBtn = document.getElementById('btn-practice-missed');
    if (missedWords && missedWords.length > 0) {
      reviewSection.classList.remove('hidden');
      missedWords.forEach(w => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `<span>${w.english}</span><span>${w.hebrew}</span>`;
        reviewList.appendChild(item);
      });
      practiceMissedBtn.classList.remove('hidden');
      practiceMissedBtn.onclick = () => {
        const validWords = missedWords.filter(w => w.id !== undefined);
        if (validWords.length === 0) return;
        WordManager.setTempPool(validWords);
        document.getElementById('results-overlay').classList.add('hidden');
        UI.showScreen('home');
        UI.showToast(T.get('missedSelected').replace('%d', validWords.length), 'teal');
      };
    } else {
      reviewSection.classList.add('hidden');
      practiceMissedBtn.classList.add('hidden');
    }

    const suggestEl = document.getElementById('results-suggest');
    const suggestBtn = document.getElementById('btn-suggest-game');
    const suggested = this._getSuggestedGame();
    if (suggested) {
      suggestEl.classList.remove('hidden');
      suggestEl.textContent = suggested.reason;
      suggestBtn.classList.remove('hidden');
      suggestBtn.onclick = () => {
        document.getElementById('results-overlay').classList.add('hidden');
        UI.showScreen(suggested.game);
        App._startGame(suggested.game);
      };
    } else {
      suggestEl.classList.add('hidden');
      suggestBtn.classList.add('hidden');
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

  _gameNameKeys: {
    bubble: 'gameBubble', memory: 'gameMemory', lightning: 'gameLightning',
    scramble: 'gameScramble', falling: 'gameFalling', truefalse: 'gameTrueFalse',
    matchup: 'gameMatchUp', bingo: 'gameBingo', sprint: 'gameSprint',
    wordspy: 'gameWordSpy', catsort: 'gameCatSort', fillin: 'gameFillIn'
  },

  _getSuggestedGame() {
    const currentGame = this._currentGame;
    const allGames = ['bubble', 'memory', 'lightning', 'scramble', 'falling', 'truefalse', 'matchup', 'bingo', 'sprint', 'wordspy', 'catsort', 'fillin'];
    const pool = WordManager._getActivePool();

    const needModeDiversity = [];
    pool.forEach(w => {
      const c = WordManager.getWordConfidence(w.id);
      const m = WordManager.getMastery(w.id);
      if (c.level !== 'mastered' && c.level !== 'not_started' && m.gameModesCorrect.length < 2) {
        needModeDiversity.push(m.gameModesCorrect);
      }
    });

    if (needModeDiversity.length === 0) return null;

    const gameScores = {};
    allGames.forEach(g => { if (g !== currentGame) gameScores[g] = 0; });
    needModeDiversity.forEach(modes => {
      allGames.forEach(g => {
        if (g !== currentGame && !modes.includes(g)) {
          gameScores[g] = (gameScores[g] || 0) + 1;
        }
      });
    });

    let bestGame = null, bestScore = 0;
    Object.entries(gameScores).forEach(([g, s]) => {
      if (s > bestScore) { bestGame = g; bestScore = s; }
    });

    if (!bestGame || bestScore === 0) return null;

    const gameName = T.get(this._gameNameKeys[bestGame] || bestGame);
    return {
      game: bestGame,
      reason: T.get('suggestGame').replace('%g', gameName).replace('%d', needModeDiversity.length)
    };
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

  showToast(msg, color) {
    this._showChallengeToast(msg, '', color || 'gold');
  },

  checkWordMastered(result, wordId) {
    if (result && result.justMastered) {
      const w = WordManager.getAll().find(x => x.id === wordId);
      if (w) {
        this.showToast(T.get('wordMastered').replace('%w', w.english), 'green');
        Sound.achievement();
      }
    }
  },

  _getGreeting() {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return T.get('greetMorning');
    if (h >= 12 && h < 17) return T.get('greetAfternoon');
    if (h >= 17 && h < 21) return T.get('greetEvening');
    return T.get('greetNight');
  },

  _renderGreeting() {
    const el = document.getElementById('home-greeting');
    if (el) el.textContent = this._getGreeting();
  },

  _renderDecayWarning() {
    const el = document.getElementById('decay-warning');
    if (!el) return;
    const stale = WordManager.getStaleWords(7);
    if (stale.length >= 3) {
      el.classList.remove('hidden');
      el.querySelector('.decay-text').textContent = T.get('decayWarning').replace('%d', stale.length);
      el.querySelector('.decay-btn').textContent = T.get('decayReview');
    } else {
      el.classList.add('hidden');
    }
  },

  _renderQuickPractice() {},

  _renderSmartBadge() {
    const badge = document.getElementById('sp-badge');
    if (!badge) return;
    const info = SmartProgress.getBadgeText();
    const textEl = document.getElementById('sp-badge-text');
    if (textEl) textEl.textContent = info.text;
    badge.classList.toggle('hidden', !info.show);
  },

  _renderGameModeHint() {
    const el = document.getElementById('game-mode-hint');
    if (!el) return;
    const pool = WordManager.getAll();
    let needDiversity = 0;
    pool.forEach(w => {
      const c = WordManager.getWordConfidence(w.id);
      const m = WordManager.getMastery(w.id);
      if (c.level === 'almost' && m.gameModesCorrect.length < 2) {
        needDiversity++;
      }
    });
    if (needDiversity > 0) {
      el.classList.remove('hidden');
      document.getElementById('gm-hint-text').textContent =
        T.get('gameModeHint').replace('%d', needDiversity);
    } else {
      el.classList.add('hidden');
    }
  },

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
    const oldSpeak = target.parentNode.querySelector('.speak-btn');
    if (oldSpeak) oldSpeak.remove();
    target.after(Speak.btn(isHeToEn ? correct.hebrew : correct.english, isHeToEn ? 'he' : 'en'));

    const cw = this._container.clientWidth;
    const ch = this._container.clientHeight;

    const maxBubbleSize = Math.min(cw, ch) * 0.28;
    const minBubbleSize = Math.max(56, maxBubbleSize * 0.6);

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

      const size = Math.round(Math.min(maxBubbleSize, Math.max(minBubbleSize, bubbleText.length * 6 + 30)));
      bubble.style.width = size + 'px';
      bubble.style.height = size + 'px';
      bubble.style.fontSize = Math.max(11, Math.min(15, size * 0.16)) + 'px';

      const margin = 4;
      const bData = {
        el: bubble, wordId: w.id, isCorrect: w.id === correct.id,
        x: Math.random() * Math.max(1, cw - size - margin * 2) + margin,
        y: Math.random() * Math.max(1, ch - size - margin * 2) + margin,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
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
      const maxX = Math.max(0, cw - b.size);
      const maxY = Math.max(0, ch - b.size);
      if (b.x <= 0) { b.x = 0; b.vx = Math.abs(b.vx); }
      if (b.x >= maxX) { b.x = maxX; b.vx = -Math.abs(b.vx); }
      if (b.y <= 0) { b.y = 0; b.vy = Math.abs(b.vy); }
      if (b.y >= maxY) { b.y = maxY; b.vy = -Math.abs(b.vy); }
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
      const _br = WordManager.recordAnswer(bData.wordId, true, 'bubble');
      UI.checkWordMastered(_br, bData.wordId);

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

        const _mr = WordManager.recordAnswer(cardA.pairId, true, 'memory');
        UI.checkWordMastered(_mr, cardA.pairId);

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
    const oldSpk = wordEl.parentNode.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    wordEl.after(Speak.btn(questionText, dir === 'en-to-he' ? 'en' : 'he'));

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

      const _lr = WordManager.recordAnswer(word.id, true, 'lightning');
      UI.checkWordMastered(_lr, word.id);

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

    const clueEl = document.getElementById('scramble-clue-text');
    clueEl.textContent = clueText;
    const oldSpk = clueEl.parentNode.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    clueEl.after(Speak.btn(clueText, isHeToEn ? 'he' : 'en'));

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
      const _sr = WordManager.recordAnswer(this._currentWord.id, true, 'scramble');
      UI.checkWordMastered(_sr, this._currentWord.id);

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
    if (this._words.length === 0) { this._endGame(); return; }
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

        UI.showCorrection(missedWord, 3000, () => {
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

      const _fr = WordManager.recordAnswer(item.word.id, true, 'falling');
      UI.checkWordMastered(_fr, item.word.id);

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
      words = words.filter(w => WordManager.getWordConfidence(w.id).level === 'not_started');
    } else if (this._filter === 'learning') {
      words = words.filter(w => { const l = WordManager.getWordConfidence(w.id).level; return l === 'struggling' || l === 'learning' || l === 'almost'; });
    } else if (this._filter === 'mastered') {
      words = words.filter(w => WordManager.getWordConfidence(w.id).level === 'mastered');
    }

    words.sort((a, b) => a.english.localeCompare(b.english, 'en', { sensitivity: 'base' }));

    const counts = { all: WordManager.getCount(), new: 0, learning: 0, mastered: 0 };
    WordManager.getAll().forEach(w => {
      const l = WordManager.getWordConfidence(w.id).level;
      if (l === 'not_started') counts.new++;
      else if (l === 'mastered') counts.mastered++;
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
      const c = WordManager.getWordConfidence(w.id);
      const isSelected = WordManager.isSelected(w.id);
      const row = document.createElement('div');
      row.className = 'word-row' + (isSelected ? ' selected' : '');
      const levelLabels = {
        mastered: T.get('spLvlMastered'),
        almost: T.get('spLvlAlmost'),
        learning: T.get('spLvlLearning'),
        struggling: T.get('spLvlStruggling'),
        not_started: T.get('spLvlNew')
      };
      row.innerHTML = `
        <label class="word-checkbox-wrapper">
          <input type="checkbox" class="word-checkbox" data-id="${w.id}" ${isSelected ? 'checked' : ''}>
          <span class="word-checkbox-custom"></span>
        </label>
        <span class="word-english">${w.english}</span>
        <span class="word-confidence">
          <span class="conf-dot conf-${c.level}"></span>
          <span class="conf-label conf-label-${c.level}">${levelLabels[c.level]}</span>
        </span>
        <span class="word-hebrew">${w.hebrew}</span>
        <div class="word-actions">
          <button class="word-edit" data-id="${w.id}" title="${T.get('editWord')}">✎</button>
          <button class="word-archive" data-id="${w.id}" title="${T.get('archiveWord')}">📦</button>
          <button class="word-delete" data-id="${w.id}" title="${T.get('deleteWord')}">✕</button>
        </div>
      `;
      const engEl = row.querySelector('.word-english');
      engEl.parentNode.insertBefore(Speak.btn(w.english, 'en'), engEl.nextSibling);
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

    list.querySelectorAll('.word-archive').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        WordManager.archiveWord(id);
        this.render();
        UI.showToast(T.get('archiveDone').replace('%d', 1), 'teal');
      });
    });

    this._updateArchiveBadge();
  },

  _activeTab: 'active',

  switchTab(tab) {
    this._activeTab = tab;
    document.getElementById('wtab-active').classList.toggle('active', tab === 'active');
    document.getElementById('wtab-archived').classList.toggle('active', tab === 'archived');
    document.getElementById('words-active-panel').classList.toggle('hidden', tab !== 'active');
    document.getElementById('words-archive-panel').classList.toggle('hidden', tab !== 'archived');
    if (tab === 'archived') this.renderArchive();
  },

  renderArchive() {
    const list = document.getElementById('archive-list');
    const emptyEl = document.getElementById('archive-empty');
    const archived = WordManager.getArchived();
    list.innerHTML = '';
    if (archived.length === 0) {
      emptyEl.classList.remove('hidden');
      return;
    }
    emptyEl.classList.add('hidden');
    archived.forEach((entry, idx) => {
      const row = document.createElement('div');
      row.className = 'archive-row';
      row.innerHTML = `
        <span class="word-english">${entry.word.english}</span>
        <span class="word-hebrew">${entry.word.hebrew}</span>
        <button class="archive-restore-btn" data-idx="${idx}" data-t="restoreWord">${T.get('restoreWord')}</button>
      `;
      row.querySelector('.archive-restore-btn').addEventListener('click', () => {
        WordManager.restoreWord(idx);
        this.renderArchive();
        this._updateArchiveBadge();
        UI.showToast(T.get('archiveRestored'), 'teal');
      });
      list.appendChild(row);
    });
  },

  _updateArchiveBadge() {
    const count = WordManager.getArchivedCount();
    const badge = document.getElementById('archive-count-badge');
    if (badge) badge.textContent = count > 0 ? '(' + count + ')' : '';
  },

  _editWord(wordId, rowEl) {
    const word = WordManager.getAll().find(w => w.id === wordId);
    if (!word) return;

    const engSpan = rowEl.querySelector('.word-english');
    const hebSpan = rowEl.querySelector('.word-hebrew');
    const actionsEl = rowEl.querySelector('.word-actions');
    const masteryEl = rowEl.querySelector('.word-confidence');

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
    const engEl = document.getElementById('tf-english');
    engEl.textContent = word.english;
    const oldSpk = engEl.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    engEl.appendChild(Speak.btn(word.english, 'en'));

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

      const _tfr = WordManager.recordAnswer(this._currentWord.id, true, 'truefalse');
      UI.checkWordMastered(_tfr, this._currentWord.id);
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
      UI.showCorrection(this._currentWord, 3000, () => {
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

// ===== PARENT DASHBOARD =====
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
      const _mur = WordManager.recordAnswer(left.word.id, true, 'matchup');
      UI.checkWordMastered(_mur, left.word.id);
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
    const promptEl = document.getElementById('bingo-prompt');
    const promptWord = isHeToEn ? this._current.hebrew : this._current.english;
    promptEl.textContent = T.get('bingoFind') + ' ' + promptWord;
    const oldSpk = promptEl.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    promptEl.appendChild(Speak.btn(promptWord, isHeToEn ? 'he' : 'en'));
  },

  _onCellClick(i, cell) {
    if (!this._active || this._grid[i].found) return;
    if (this._grid[i].word.id === this._current.id) {
      cell.classList.add('found');
      this._grid[i].found = true;
      this._found++;
      document.getElementById('bingo-found').textContent = this._found;
      Sound.correct();
      const _bgr = WordManager.recordAnswer(this._current.id, true, 'bingo');
      UI.checkWordMastered(_bgr, this._current.id);
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
      UI.showCorrection(this._current, 3000, () => {
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
    Progress.recordGameComplete('bingo', stars, xp, [], correct, 16);
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
  _timerInterval: null, _timeLeft: 0, _ended: false,
  _timeLevels: { easy: 6000, medium: 4000, hard: 2000 },

  start() {
    this._active = false; this._started = false;
    this._direction = 'en-to-he'; this._level = 'medium';
    this._streak = 0; this._best = 0; this._score = 0;
    this._missed = []; this._total = 0; this._correct = 0; this._ended = false;
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
    if (words.length === 0) { this._endGame(); return; }
    this._current = words[0];
    this._total++;
    const isHeToEn = this._direction === 'he-to-en';
    const sprintWordEl = document.getElementById('sprint-word');
    const sprintText = isHeToEn ? this._current.hebrew : this._current.english;
    sprintWordEl.textContent = sprintText;
    const oldSpk = sprintWordEl.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    sprintWordEl.appendChild(Speak.btn(sprintText, isHeToEn ? 'he' : 'en'));

    const distractors = WordManager.getRandom(1, [this._current.id]);
    const options = distractors.length > 0
      ? [this._current, distractors[0]].sort(() => Math.random() - 0.5)
      : [this._current];
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
      const _spr = WordManager.recordAnswer(this._current.id, true, 'sprint');
      UI.checkWordMastered(_spr, this._current.id);
      document.getElementById('sprint-streak').textContent = this._streak;
      if (this._total >= 20) {
        setTimeout(() => this._endGame(), 600);
      } else {
        setTimeout(() => { this._active = true; this._showWord(); }, 500);
      }
    } else {
      btn.classList.add('wrong');
      Sound.wrong();
      this._streak = 0;
      if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
      WordManager.recordAnswer(this._current.id, false, 'sprint');
      document.getElementById('sprint-streak').textContent = '0';
      UI.showCorrection(this._current, 3000, () => {
        if (this._total >= 20) { this._endGame(); return; }
        this._active = true; this._showWord();
      });
    }
  },

  _onTimeout() {
    if (!this._current) return;
    this._streak = 0;
    document.getElementById('sprint-streak').textContent = '0';
    if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
    WordManager.recordAnswer(this._current.id, false, 'sprint');
    Sound.wrong();
    UI.showCorrection(this._current, 3000, () => {
      if (this._total >= 20) { this._endGame(); return; }
      this._active = true; this._showWord();
    });
  },

  _endGame() {
    if (this._ended) return;
    this._ended = true;
    this._active = false;
    clearInterval(this._timerInterval);
    if (!GameState.data.sprintHighScore || this._best > GameState.data.sprintHighScore) {
      GameState.data.sprintHighScore = this._best;
      GameState.save();
    }
    const stars = this._correct >= 18 ? 3 : this._correct >= 14 ? 2 : 1;
    const xp = this._score;
    Progress.recordGameComplete('sprint', stars, xp, [], this._correct, this._total);
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
        const _wsr = WordManager.recordAnswer(a.word.id, true, 'wordspy');
        UI.checkWordMastered(_wsr, a.word.id);
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
        UI.showCorrection(missWord, 3000, () => {
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
    Progress.recordGameComplete('wordspy', stars, xp, [], correct, this._totalPairs);
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

    const csPromptEl = document.getElementById('cs-prompt');
    const csText = isHeToEn ? correct.hebrew : correct.english;
    csPromptEl.textContent = csText;
    const oldSpk = csPromptEl.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    csPromptEl.appendChild(Speak.btn(csText, isHeToEn ? 'he' : 'en'));

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
      const _csr = WordManager.recordAnswer(this._current.id, true, 'catsort');
      UI.checkWordMastered(_csr, this._current.id);
      Particles.sparkle(btn.getBoundingClientRect().left + 40, btn.getBoundingClientRect().top);
      this._round++;
      setTimeout(() => { this._active = true; this._showRound(); }, 600);
    } else {
      btn.classList.add('wrong');
      Sound.wrong();
      if (!this._missed.find(m => m.id === this._current.id)) this._missed.push(this._current);
      WordManager.recordAnswer(this._current.id, false, 'catsort');
      this._round++;
      UI.showCorrection(this._current, 3000, () => {
        this._active = true;
        this._showRound();
      });
    }
  },

  _endGame() {
    this._active = false;
    const stars = this._correct >= 14 ? 3 : this._correct >= 10 ? 2 : 1;
    const xp = this._score + (this._correct >= 14 ? 20 : 0);
    Progress.recordGameComplete('catsort', stars, xp, [], this._correct, this._totalRounds);
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
    document.getElementById('fi-progress').textContent = (this._idx + 1) + '/' + this._words.length;

    const template = this._templates[Math.floor(Math.random() * this._templates.length)];
    const sentence = template.replace('___', '<span class="fi-blank">?</span>');
    document.getElementById('fi-sentence').innerHTML = sentence;
    const fiHintEl = document.getElementById('fi-hint');
    fiHintEl.textContent = '(' + this._current.hebrew + ')';
    const oldSpk = fiHintEl.querySelector('.speak-btn');
    if (oldSpk) oldSpk.remove();
    fiHintEl.appendChild(Speak.btn(this._current.hebrew, 'he'));

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
      const _fir = WordManager.recordAnswer(this._current.id, true, 'fillin');
      UI.checkWordMastered(_fir, this._current.id);
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
    const total = this._words.length;
    Progress.recordGameComplete('fillin', stars, xp, [], this._correct, total);
    if (stars === 3) Particles.celebration();
    UI.showResults({
      title: T.get(stars === 3 ? 'perfect' : stars === 2 ? 'great' : 'good'),
      score: this._correct + '/' + total, xp, stars,
      missedWords: this._missed,
      onPlayAgain: () => { UI.showScreen('fillin'); SentenceFill.start(); },
      onHome: () => UI.showScreen('home')
    });
  },

  stop() { this._active = false; clearInterval(this._timerInterval); }
};

// WordReport removed — unified into Dashboard

// ===== TEST MODE =====
const WordTest = {
  _words: [],
  _currentIdx: 0,
  _results: [],
  _customPool: null,
  _pendingTimeout: null,

  stop() {
    if (this._pendingTimeout) { clearTimeout(this._pendingTimeout); this._pendingTimeout = null; }
  },

  start(customPool) {
    this._customPool = customPool || null;
    const pool = customPool || WordManager._getActivePool();
    if (pool.length < 4) {
      UI.showToast(T.get('testMinWords'), 'coral');
      return;
    }
    this._words = WordManager._shuffleArray([...pool]);
    this._currentIdx = 0;
    this._results = [];
    UI.showScreen('test');
    this._showQuestion();
  },

  _showQuestion() {
    const total = this._words.length;
    const idx = this._currentIdx;
    if (idx >= total) { this._finish(); return; }

    document.getElementById('test-progress').textContent =
      T.get('testQuestion') + ' ' + (idx + 1) + ' ' + T.get('testOf') + ' ' + total;
    document.getElementById('test-progress-fill').style.width =
      ((idx / total) * 100) + '%';

    const word = this._words[idx];
    const isEnToHe = Math.random() < 0.5;
    const dirEl = document.getElementById('test-direction');
    dirEl.textContent = isEnToHe ? T.get('testTranslateToHe') : T.get('testTranslateToEn');

    const promptEl = document.getElementById('test-prompt');
    promptEl.textContent = isEnToHe ? word.english : word.hebrew;
    promptEl.appendChild(Speak.btn(isEnToHe ? word.english : word.hebrew, isEnToHe ? 'en' : 'he'));

    const distractors = WordManager.getRandom(5, [word]);
    const choices = WordManager._shuffleArray([word, ...distractors]);

    const choicesEl = document.getElementById('test-choices');
    choicesEl.innerHTML = '';
    choices.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'test-choice-btn';
      btn.textContent = isEnToHe ? c.hebrew : c.english;
      btn.dataset.wordId = c.id;
      btn.addEventListener('click', () => this._onAnswer(btn, word, c, isEnToHe, choicesEl));
      choicesEl.appendChild(btn);
    });

    this._currentDirection = isEnToHe;
  },

  _onAnswer(btn, correctWord, chosenWord, isEnToHe, choicesEl) {
    const isCorrect = chosenWord.id === correctWord.id;

    this._results.push({
      word: correctWord,
      correct: isCorrect,
      chosenWord: chosenWord,
      direction: isEnToHe ? 'en-to-he' : 'he-to-en'
    });

    const allBtns = choicesEl.querySelectorAll('.test-choice-btn');
    allBtns.forEach(b => {
      b.style.pointerEvents = 'none';
      if (Number(b.dataset.wordId) === correctWord.id) {
        b.classList.add('correct-reveal');
      }
    });
    if (!isCorrect) {
      btn.classList.add('wrong-reveal');
    }

    WordManager.recordAnswer(correctWord.id, isCorrect, 'test');

    this._pendingTimeout = setTimeout(() => {
      this._pendingTimeout = null;
      this._currentIdx++;
      this._showQuestion();
    }, isCorrect ? 400 : 1200);
  },

  _finish() {
    const total = this._results.length;
    const correct = this._results.filter(r => r.correct).length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const grade = this._getGrade(pct);

    const record = {
      date: Date.now(),
      totalWords: total,
      correct: correct,
      wrong: total - correct,
      grade: grade.letter,
      pct: pct,
      wrongWords: this._results.filter(r => !r.correct).map(r => ({
        english: r.word.english, hebrew: r.word.hebrew
      }))
    };
    GameState.addTestResult(record);

    UI.showScreen('test-results');
    document.getElementById('test-progress-fill').style.width = '100%';

    const card = document.getElementById('test-grade-card');
    card.className = 'test-grade-card grade-' + grade.letter.toLowerCase();
    document.getElementById('test-grade-letter').textContent = grade.letter;
    document.getElementById('test-grade-score').textContent = correct + ' / ' + total;
    document.getElementById('test-grade-pct').textContent = pct + '%';
    document.getElementById('test-grade-rec').textContent = grade.recommendation;

    const list = document.getElementById('test-word-list');
    list.innerHTML = '';
    this._results.forEach(r => {
      const row = document.createElement('div');
      row.className = 'test-word-row ' + (r.correct ? 'tw-correct' : 'tw-wrong');
      const icon = r.correct ? '✓' : '✗';
      const pair = r.word.english + ' = ' + r.word.hebrew;
      let correction = '';
      if (!r.correct) {
        const chosenText = r.direction === 'en-to-he' ? r.chosenWord.hebrew : r.chosenWord.english;
        correction = '<div class="tw-correction">' + T.get('testYourAnswer') + ': ' + chosenText + '</div>';
      }
      row.innerHTML =
        '<span class="tw-icon" style="color:' + (r.correct ? '#22c55e' : '#ef4444') + '">' + icon + '</span>' +
        '<div class="tw-words"><div class="tw-pair">' + pair + '</div>' + correction + '</div>';
      row.appendChild(Speak.btn(r.word.english, 'en'));
      list.appendChild(row);
    });

    const retryBtn = document.getElementById('test-retry-btn');
    const wrongOnes = this._results.filter(r => !r.correct);
    if (wrongOnes.length > 0) {
      retryBtn.style.display = '';
    } else {
      retryBtn.style.display = 'none';
    }
  },

  retryMistakes() {
    const wrongWords = this._results.filter(r => !r.correct).map(r => r.word);
    if (wrongWords.length === 0) return;
    this.start(wrongWords);
  },

  _getGrade(pct) {
    if (pct >= 90) return { letter: 'A', recommendation: T.get('testGradeA') };
    if (pct >= 80) return { letter: 'B', recommendation: T.get('testGradeB') };
    if (pct >= 70) return { letter: 'C', recommendation: T.get('testGradeC') };
    if (pct >= 60) return { letter: 'D', recommendation: T.get('testGradeD') };
    return { letter: 'F', recommendation: T.get('testGradeF') };
  }
};

const Dashboard = {
  render() {
    this._buildWordData();
    const history = GameState.getHistory();
    this._renderExecSummary(history);
    this._renderMasteryBar();
    this._renderTestHistory();
    this._renderDailyChart(history);
    this._renderAccuracyChart(history);
    this._renderHardWords();
    this._renderAllWords();
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

  _formatTime(totalSec) {
    if (totalSec < 60) return '<1 ' + T.get('rptMin');
    if (totalSec < 3600) return Math.round(totalSec / 60) + ' ' + T.get('rptMin');
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.round((totalSec % 3600) / 60);
    return hrs + ' ' + T.get('rptHr') + ' ' + mins + ' ' + T.get('rptMin');
  },

  _renderExecSummary(history) {
    const el = document.getElementById('rpt-exec');
    if (!el) return;

    const totalWords = this._wordData.length;
    const counts = { mastered: 0, good: 0, learning: 0, struggling: 0, unseen: 0 };
    this._wordData.forEach(w => counts[w.label]++);

    const mastered = counts.mastered;
    const totalSessions = history.length;
    const avgAcc = totalSessions > 0 ? Math.round(history.reduce((s, h) => s + h.accuracy, 0) / totalSessions) : 0;
    const streak = GameState.data.streak || 0;

    const todayStr = new Date().toDateString();
    const todaySessions = history.filter(s => new Date(s.ts).toDateString() === todayStr);
    const todayTimeSec = todaySessions.reduce((s, h) => s + (h.duration || 0), 0);
    const totalTimeSec = history.reduce((s, h) => s + (h.duration || 0), 0);

    const masteredPct = totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0;

    let verdictKey;
    if (masteredPct >= 70) verdictKey = 'rptVerdictGreat';
    else if (masteredPct >= 40) verdictKey = 'rptVerdictGood';
    else if (totalSessions > 0) verdictKey = 'rptVerdictWork';
    else verdictKey = 'rptVerdictStart';

    el.innerHTML =
      '<div class="rpt-exec-title">' + T.get('rptSummary') + '</div>' +
      '<div class="rpt-exec-grid">' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + mastered + '/' + totalWords + '</div><div class="rpt-kpi-label">' + T.get('rptWordsKnown') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + avgAcc + '%</div><div class="rpt-kpi-label">' + T.get('rptAvgAccuracy') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + this._formatTime(todayTimeSec) + '</div><div class="rpt-kpi-label">' + T.get('rptTimeToday') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + streak + '🔥</div><div class="rpt-kpi-label">' + T.get('rptDayStreak') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + totalSessions + '</div><div class="rpt-kpi-label">' + T.get('rptGamesPlayed') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + this._formatTime(totalTimeSec) + '</div><div class="rpt-kpi-label">' + T.get('rptTimeTotal') + '</div></div>' +
      '</div>' +
      '<div class="rpt-exec-verdict">' + T.get(verdictKey) + '</div>';
  },

  _renderMasteryBar() {
    const el = document.getElementById('rpt-mastery');
    if (!el) return;

    const total = this._wordData.length;
    const counts = { mastered: 0, good: 0, learning: 0, struggling: 0, unseen: 0 };
    this._wordData.forEach(w => counts[w.label]++);

    const colors = { mastered: '#a78bfa', good: '#22c55e', learning: '#fbbf24', struggling: '#ef4444', unseen: 'rgba(255,255,255,0.1)' };
    const labels = { mastered: T.get('dashMastered'), good: T.get('dashGood'), learning: T.get('dashLearning'), struggling: T.get('dashStruggling'), unseen: T.get('dashUnseen') };

    let bar = '<div class="rpt-mastery-bar">';
    ['mastered', 'good', 'learning', 'struggling', 'unseen'].forEach(k => {
      const pct = total > 0 ? (counts[k] / total) * 100 : 0;
      if (pct > 0) bar += '<div class="rpt-mastery-seg" style="width:' + pct + '%;background:' + colors[k] + '"></div>';
    });
    bar += '</div>';

    let legend = '<div class="rpt-mastery-legend">';
    ['mastered', 'good', 'learning', 'struggling', 'unseen'].forEach(k => {
      legend += '<div class="rpt-legend-item">' +
        '<span class="rpt-legend-dot" style="background:' + colors[k] + '"></span>' +
        '<span>' + labels[k] + '</span>' +
        '<span class="rpt-legend-count">' + counts[k] + '</span></div>';
    });
    legend += '</div>';

    el.innerHTML = bar + legend;
  },

  _renderTestHistory() {
    const el = document.getElementById('dash-test-history');
    if (!el) return;
    el.innerHTML = '';
    const latest = GameState.getLatestTest();
    if (!latest) {
      el.innerHTML = '<div class="dash-empty">' + T.get('testNoTests') + '</div>';
      return;
    }
    const date = new Date(latest.date);
    const locale = T._lang === 'he' ? 'he-IL' : 'en-GB';
    const dateStr = date.toLocaleDateString(locale, { day: 'numeric', month: 'short' }) + ' ' +
      date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    const gradeColors = { A: '#a78bfa', B: '#22c55e', C: '#fbbf24', D: '#f97316', F: '#ef4444' };
    const color = gradeColors[latest.grade] || '#888';
    el.innerHTML =
      '<div style="display:flex;align-items:center;gap:14px;padding:8px 0;">' +
        '<span style="font-size:2rem;font-weight:900;color:' + color + ';">' + latest.grade + '</span>' +
        '<div style="flex:1;">' +
          '<div style="font-size:0.88rem;font-weight:700;">' + latest.correct + '/' + latest.totalWords + ' (' + latest.pct + '%)</div>' +
          '<div style="font-size:0.7rem;color:var(--text-dim);">' + dateStr + '</div>' +
        '</div>' +
      '</div>';
  },

  _renderDailyChart(history) {
    const el = document.getElementById('rpt-daily-chart');
    if (!el) return;
    el.innerHTML = '';

    const todayStr = new Date().toDateString();
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - i);
      days.push({ date: d, dateStr: d.toDateString() });
    }

    const dayData = {};
    history.forEach(s => {
      const ds = new Date(s.ts).toDateString();
      if (!dayData[ds]) dayData[ds] = { time: 0, count: 0 };
      dayData[ds].time += (s.duration || 0);
      dayData[ds].count++;
    });

    const maxTime = Math.max(60, ...days.map(d => (dayData[d.dateStr] || {}).time || 0));

    days.forEach(d => {
      const data = dayData[d.dateStr];
      const timeSec = data ? data.time : 0;
      const count = data ? data.count : 0;
      const pct = (timeSec / maxTime) * 100;
      const isToday = d.dateStr === todayStr;
      const dayLabel = d.date.getDate() + '/' + (d.date.getMonth() + 1);

      let valText = '';
      if (timeSec > 0) {
        valText = timeSec < 60 ? '<1m' : Math.round(timeSec / 60) + 'm';
      }

      const col = document.createElement('div');
      col.className = 'rpt-daily-col';
      col.title = (isToday ? '★ ' : '') + dayLabel + ' — ' + count + ' games, ' + this._formatTime(timeSec);
      col.innerHTML =
        '<div class="rpt-daily-val">' + valText + '</div>' +
        '<div class="rpt-daily-track"><div class="rpt-daily-fill' +
          (timeSec > 0 ? (isToday ? ' today' : ' active') : '') +
          '" style="height:' + Math.max(pct, timeSec > 0 ? 6 : 0) + '%"></div></div>' +
        '<div class="rpt-daily-day' + (isToday ? ' today' : '') + '">' + dayLabel + '</div>';
      el.appendChild(col);
    });
  },

  _renderAccuracyChart(history) {
    const el = document.getElementById('dash-accuracy-chart');
    if (!el) return;
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
    const dayAccuracy = {}, dayCount = {};
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
    const validPoints = [];
    points.forEach((p, i) => {
      if (p.value !== null) {
        validPoints.push({ x: 35 + i * (375 / 13), y: 110 - p.value * 1.0, value: p.value });
      }
    });
    if (validPoints.length >= 2) {
      const path = document.createElementNS(svgNs, 'path');
      path.setAttribute('d', 'M ' + validPoints.map(p => p.x + ' ' + p.y).join(' L '));
      path.setAttribute('class', 'dash-trend-line');
      svg.appendChild(path);
    }
    validPoints.forEach(p => {
      const circle = document.createElementNS(svgNs, 'circle');
      circle.setAttribute('cx', p.x); circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '3.5'); circle.setAttribute('class', 'dash-dot');
      svg.appendChild(circle);
      const txt = document.createElementNS(svgNs, 'text');
      txt.setAttribute('x', p.x); txt.setAttribute('y', p.y - 7);
      txt.setAttribute('class', 'dash-dot-label');
      txt.textContent = p.value + '%';
      svg.appendChild(txt);
    });
    el.appendChild(svg);
  },

  _renderHardWords() {
    const el = document.getElementById('dash-hard-words');
    if (!el) return;
    el.innerHTML = '';

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
      row.innerHTML =
        '<span class="dash-hard-eng">' + item.word.english + '</span>' +
        '<span class="dash-hard-heb">' + item.word.hebrew + '</span>' +
        '<span class="dash-hard-acc ' + accClass + '">' + item.accuracy + '%</span>' +
        '<span class="dash-hard-detail">' + item.correct + '✓ ' + item.wrong + '✗</span>' +
        '<span class="dash-hard-bar"><span class="dash-hard-fill" style="width:' + item.strength + '%"></span></span>';
      row.appendChild(Speak.btn(item.word.english, 'en'));
      el.appendChild(row);
    });
  },

  _renderAllWords() {
    const el = document.getElementById('dash-all-words');
    if (!el) return;
    el.innerHTML = '';

    const counts = { all: 0, struggling: 0, learning: 0, good: 0, mastered: 0, unseen: 0 };
    this._wordData.forEach(w => { counts.all++; counts[w.label]++; });

    document.querySelectorAll('#screen-dashboard .rpt-filter').forEach(btn => {
      const f = btn.dataset.wf;
      btn.classList.toggle('active', f === this._wordFilter);
      const c = counts[f] !== undefined ? ' (' + counts[f] + ')' : '';
      btn.textContent = this._filterLabel(f) + c;
    });

    let filtered = this._wordData;
    if (this._wordFilter !== 'all') {
      filtered = filtered.filter(w => w.label === this._wordFilter);
    }
    filtered.sort((a, b) => a.word.english.localeCompare(b.word.english, 'en', { sensitivity: 'base' }));

    const titleEl = el.closest('.rpt-section')?.querySelector('.rpt-section-title');
    if (titleEl) {
      const countStr = this._wordFilter === 'all' ? '(' + counts.all + ')' : '(' + filtered.length + '/' + counts.all + ')';
      titleEl.textContent = T.get('dashAllWords') + ' ' + countStr;
    }

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
      row.innerHTML =
        '<span class="dash-w-status">' + statusIcon + '</span>' +
        '<span class="dash-w-eng">' + item.word.english + '</span>' +
        '<span class="dash-w-heb">' + item.word.hebrew + '</span>' +
        '<span class="dash-w-stats">' + (item.total > 0 ? item.accuracy + '% · ' + item.correct + '✓ ' + item.wrong + '✗' : '—') + '</span>' +
        '<span class="dash-w-seen">' + lastSeenStr + '</span>' +
        '<span class="dash-w-bar"><span class="dash-w-bar-fill dash-wlabel-' + item.label + '" style="width:' + item.strength + '%"></span></span>';
      row.appendChild(Speak.btn(item.word.english, 'en'));
      el.appendChild(row);
    });
  },

  _filterLabel(f) {
    const keys = { all: 'dashFilterAll', struggling: 'dashStruggling', learning: 'dashLearning', good: 'dashGood', mastered: 'dashMastered', unseen: 'dashUnseen' };
    return keys[f] ? T.get(keys[f]) : f;
  }
};

// ===== CLOUD SYNC =====
const CloudSync = {
  ENDPOINT: '/api/sync',
  BIN_KEY: 'wordquest_sync_bin',
  _binId: null,

  init() {
    this._binId = localStorage.getItem(this.BIN_KEY) || null;
  },

  _buildSnapshot() {
    const d = GameState.data;
    const history = GameState.getHistory();
    const words = WordManager.getAll();
    const wordData = words.map(w => {
      const m = WordManager.getMastery(w.id);
      const s = WordManager.getWordStrength(w.id);
      const c = WordManager.getWordConfidence(w.id);
      const total = m.timesCorrect + m.timesWrong;
      return {
        english: w.english, hebrew: w.hebrew,
        correct: m.timesCorrect, wrong: m.timesWrong,
        accuracy: total > 0 ? Math.round((m.timesCorrect / total) * 100) : 0,
        strengthLabel: s.label, strengthScore: s.score,
        confidenceLevel: c.level, pctToMastery: c.pctToMastery,
        streak: c.streak, modesCount: c.modesCount,
        gameModesCorrect: m.gameModesCorrect,
        lastSeen: m.lastSeen, daysSince: s.daysSinceSeen
      };
    });

    return {
      ts: Date.now(),
      xp: d.xp, level: d.level, totalStars: d.totalStars,
      streak: d.streak, gamesPlayed: d.gamesPlayed,
      testHistory: d.testHistory || [],
      latestTest: GameState.getLatestTest(),
      history: history.slice(-200),
      wordData,
      totalWords: words.length,
      archivedCount: WordManager.getArchivedCount(),
      lang: T._lang
    };
  },

  _buildFullBackup() {
    const words = WordManager.getAll();
    const wordData = words.map(w => {
      const m = WordManager.getMastery(w.id);
      const s = WordManager.getWordStrength(w.id);
      const c = WordManager.getWordConfidence(w.id);
      const total = m.timesCorrect + m.timesWrong;
      return {
        english: w.english, hebrew: w.hebrew,
        correct: m.timesCorrect, wrong: m.timesWrong,
        accuracy: total > 0 ? Math.round((m.timesCorrect / total) * 100) : 0,
        strengthLabel: s.label, strengthScore: s.score,
        confidenceLevel: c.level, pctToMastery: c.pctToMastery,
        streak: c.streak, modesCount: c.modesCount,
        gameModesCorrect: m.gameModesCorrect,
        lastSeen: m.lastSeen, daysSince: s.daysSinceSeen
      };
    });
    return {
      ts: Date.now(),
      version: 2,
      gameState: GameState.data,
      history: GameState.getHistory(),
      words, mastery: WordManager._mastery,
      selection: [...WordManager._selection],
      archive: WordManager.getArchived(),
      drip: WordManager._drip,
      syncBin: this._binId,
      wordData, totalWords: words.length,
      streak: GameState.data.streak,
      latestTest: GameState.getLatestTest(),
      lang: T._lang
    };
  },

  async _createBin() {
    try {
      const data = this._buildFullBackup();
      const resp = await fetch(this.ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!resp.ok) return null;
      const result = await resp.json();
      if (result && result.id) {
        this._binId = result.id;
        localStorage.setItem(this.BIN_KEY, result.id);
        return result.id;
      }
      return null;
    } catch (e) { return null; }
  },

  async push() {
    if (!this._binId) return;
    try {
      const data = this._buildFullBackup();
      await fetch(this.ENDPOINT + '?id=' + this._binId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (e) {}
  },

  async pull(binId) {
    try {
      const resp = await fetch(this.ENDPOINT + '?id=' + binId);
      if (!resp.ok) return null;
      return await resp.json();
    } catch (e) { return null; }
  },

  getParentLink() {
    if (!this._binId) return null;
    const base = window.location.origin + window.location.pathname;
    return base + '?parent=' + this._binId;
  },

  async ensureBin() {
    if (this._binId) return this._binId;
    return await this._createBin();
  },

  async restore(input) {
    const id = (input || '').trim().split('parent=').pop().split('&')[0].split('#')[0];
    if (!id || id.length < 10) return false;
    try {
      const data = await this.pull(id);
      if (!data) return false;
      if (data.version >= 2 && data.gameState) {
        GameState.data = { ...GameState.defaults(), ...data.gameState };
        GameState.save();
        if (data.history) {
          localStorage.setItem(GameState.HISTORY_KEY, JSON.stringify(data.history));
        }
        if (Array.isArray(data.words) && data.words.length > 0) {
          WordManager._words = data.words;
          WordManager._saveWords();
        }
        if (data.mastery && typeof data.mastery === 'object' && !Array.isArray(data.mastery)) {
          WordManager._mastery = data.mastery;
          WordManager._saveMastery();
        }
        if (Array.isArray(data.selection)) {
          WordManager._selection = new Set(data.selection);
          WordManager._saveSelection();
        }
        if (Array.isArray(data.archive)) {
          WordManager._archive = data.archive;
          WordManager._saveArchive();
        }
        if (data.drip && Array.isArray(data.drip.queue)) {
          WordManager._drip = data.drip;
          WordManager._saveDrip();
        }
        if (data.syncBin) {
          this._binId = data.syncBin;
          localStorage.setItem(this.BIN_KEY, data.syncBin);
        }
        return true;
      }
      return false;
    } catch (e) { return false; }
  }
};

// ===== PARENT VIEW =====
const ParentView = {
  _data: null,
  _binId: null,
  _wordFilter: 'all',

  isActive() {
    return new URLSearchParams(window.location.search).has('parent');
  },

  getBinId() {
    return new URLSearchParams(window.location.search).get('parent');
  },

  async init() {
    this._binId = this.getBinId();
    document.getElementById('app-main').classList.add('hidden');
    document.getElementById('parent-view').classList.remove('hidden');

    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
      const m = { name: 'Word Quest - דוח הורים', short_name: 'WQ Report', description: 'Parent progress report', start_url: './index.html?parent=' + this._binId, display: 'standalone', orientation: 'portrait', background_color: '#0f0c29', theme_color: '#1a1a3e', icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] };
      const blob = new Blob([JSON.stringify(m)], { type: 'application/json' });
      manifestLink.setAttribute('href', URL.createObjectURL(blob));
    }

    const savedLang = localStorage.getItem('wordquest_lang') || 'en';
    T.setLang(savedLang);

    document.getElementById('pv-lang-btn').textContent = savedLang === 'en' ? 'עברית' : 'EN';
    document.getElementById('pv-lang-btn').addEventListener('click', () => {
      const newLang = T._lang === 'en' ? 'he' : 'en';
      T.setLang(newLang);
      document.getElementById('pv-lang-btn').textContent = newLang === 'en' ? 'עברית' : 'EN';
      this._renderAll();
    });

    document.getElementById('pv-refresh-btn').addEventListener('click', () => this.refresh());

    document.querySelectorAll('#pv-filters .rpt-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        this._wordFilter = btn.dataset.wf;
        this._renderAllWords();
      });
    });

    await this.refresh();
  },

  async refresh() {
    const loadingEl = document.getElementById('pv-loading');
    const contentEl = document.getElementById('pv-content');
    const errorEl = document.getElementById('pv-error');

    loadingEl.classList.remove('hidden');
    contentEl.classList.add('hidden');
    errorEl.classList.add('hidden');

    const data = await CloudSync.pull(this._binId);
    if (!data || !data.ts) {
      loadingEl.classList.add('hidden');
      errorEl.classList.remove('hidden');
      errorEl.textContent = T.get('parentViewError');
      return;
    }

    this._data = data;
    this._wordData = (data.wordData || []).map(w => {
      const label = w.strengthLabel || 'unseen';
      const hasBeenSeen = label !== 'unseen';
      const correct = w.correct || 0;
      const wrong = w.wrong || 0;
      const total = correct + wrong;
      const accuracy = w.accuracy || 0;
      const strength = w.strengthScore || (hasBeenSeen ? Math.max(accuracy, 1) : 0);
      return {
        word: { english: w.english, hebrew: w.hebrew },
        correct, wrong, total, accuracy, strength, label,
        lastSeen: w.lastSeen, daysSince: w.daysSince,
        hasBeenSeen
      };
    });
    loadingEl.classList.add('hidden');
    contentEl.classList.remove('hidden');
    this._renderAll();
  },

  _fmt(sec) {
    if (sec < 60) return '<1 ' + T.get('rptMin');
    if (sec < 3600) return Math.round(sec / 60) + ' ' + T.get('rptMin');
    return Math.floor(sec / 3600) + ' ' + T.get('rptHr') + ' ' + Math.round((sec % 3600) / 60) + ' ' + T.get('rptMin');
  },

  _renderAll() {
    document.getElementById('pv-title').textContent = T.get('parentViewTitle');
    document.getElementById('pv-refresh-btn').textContent = T.get('parentViewRefresh');
    this._renderUpdatedTime();
    this._renderExec();
    this._renderMastery();
    this._renderTestHistory();
    this._renderDailyChart();
    this._renderAccuracyChart();
    this._renderHardWords();
    this._renderAllWords();
  },

  _renderUpdatedTime() {
    const el = document.getElementById('pv-updated');
    const diff = Date.now() - this._data.ts;
    const min = Math.floor(diff / 60000);
    const hr = Math.floor(diff / 3600000);
    let timeText;
    if (min < 1) timeText = T.get('parentViewJustNow');
    else if (min < 60) timeText = T.get('parentViewMinAgo').replace('%d', min);
    else timeText = T.get('parentViewHrAgo').replace('%d', hr);
    el.textContent = T.get('parentViewUpdated') + ': ' + timeText;
  },

  _renderExec() {
    const el = document.getElementById('pv-exec');
    const d = this._data;
    const counts = { mastered: 0, good: 0, learning: 0, struggling: 0, unseen: 0 };
    this._wordData.forEach(w => counts[w.label]++);
    const mastered = counts.mastered;
    const totalWords = d.totalWords || this._wordData.length;
    const hist = d.history || [];
    const totalSessions = hist.length;
    const avgAcc = totalSessions > 0 ? Math.round(hist.reduce((s, h) => s + h.accuracy, 0) / totalSessions) : 0;

    const todayStr = new Date().toDateString();
    const todaySessions = hist.filter(s => new Date(s.ts).toDateString() === todayStr);
    const todayTimeSec = todaySessions.reduce((s, h) => s + (h.duration || 0), 0);
    const totalTimeSec = hist.reduce((s, h) => s + (h.duration || 0), 0);

    const masteredPct = totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0;
    let verdictKey;
    if (masteredPct >= 70) verdictKey = 'rptVerdictGreat';
    else if (masteredPct >= 40) verdictKey = 'rptVerdictGood';
    else if (totalSessions > 0) verdictKey = 'rptVerdictWork';
    else verdictKey = 'rptVerdictStart';

    el.innerHTML =
      '<div class="rpt-exec-title">' + T.get('rptSummary') + '</div>' +
      '<div class="rpt-exec-grid">' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + mastered + '/' + totalWords + '</div><div class="rpt-kpi-label">' + T.get('rptWordsKnown') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + avgAcc + '%</div><div class="rpt-kpi-label">' + T.get('rptAvgAccuracy') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + this._fmt(todayTimeSec) + '</div><div class="rpt-kpi-label">' + T.get('rptTimeToday') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + (d.streak || 0) + '🔥</div><div class="rpt-kpi-label">' + T.get('rptDayStreak') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + totalSessions + '</div><div class="rpt-kpi-label">' + T.get('rptGamesPlayed') + '</div></div>' +
        '<div class="rpt-kpi"><div class="rpt-kpi-val">' + this._fmt(totalTimeSec) + '</div><div class="rpt-kpi-label">' + T.get('rptTimeTotal') + '</div></div>' +
      '</div>' +
      '<div class="rpt-exec-verdict">' + T.get(verdictKey) + '</div>';
  },

  _renderMastery() {
    const el = document.getElementById('pv-mastery');
    const total = this._wordData.length;
    const counts = { mastered: 0, good: 0, learning: 0, struggling: 0, unseen: 0 };
    this._wordData.forEach(w => counts[w.label]++);
    const colors = { mastered: '#a78bfa', good: '#22c55e', learning: '#fbbf24', struggling: '#ef4444', unseen: 'rgba(255,255,255,0.1)' };
    const labels = { mastered: T.get('dashMastered'), good: T.get('dashGood'), learning: T.get('dashLearning'), struggling: T.get('dashStruggling'), unseen: T.get('dashUnseen') };

    let bar = '<div class="rpt-mastery-bar">';
    ['mastered', 'good', 'learning', 'struggling', 'unseen'].forEach(k => {
      const pct = total > 0 ? (counts[k] / total) * 100 : 0;
      if (pct > 0) bar += '<div class="rpt-mastery-seg" style="width:' + pct + '%;background:' + colors[k] + '"></div>';
    });
    bar += '</div>';

    let legend = '<div class="rpt-mastery-legend">';
    ['mastered', 'good', 'learning', 'struggling', 'unseen'].forEach(k => {
      legend += '<div class="rpt-legend-item"><span class="rpt-legend-dot" style="background:' + colors[k] + '"></span><span>' + labels[k] + '</span><span class="rpt-legend-count">' + counts[k] + '</span></div>';
    });
    legend += '</div>';
    el.innerHTML = bar + legend;
  },

  _renderTestHistory() {
    const el = document.getElementById('pv-test');
    if (!el) return;
    const latest = this._data.latestTest;
    if (!latest) {
      el.innerHTML = '<div class="dash-empty">' + T.get('testNoTests') + '</div>';
      return;
    }
    const date = new Date(latest.date);
    const locale = T._lang === 'he' ? 'he-IL' : 'en-GB';
    const dateStr = date.toLocaleDateString(locale, { day: 'numeric', month: 'short' }) + ' ' +
      date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    const gradeColors = { A: '#a78bfa', B: '#22c55e', C: '#fbbf24', D: '#f97316', F: '#ef4444' };
    const color = gradeColors[latest.grade] || '#888';
    el.innerHTML =
      '<div style="display:flex;align-items:center;gap:14px;padding:8px 0;">' +
        '<span style="font-size:2rem;font-weight:900;color:' + color + ';">' + latest.grade + '</span>' +
        '<div style="flex:1;">' +
          '<div style="font-size:0.88rem;font-weight:700;">' + latest.correct + '/' + latest.totalWords + ' (' + latest.pct + '%)</div>' +
          '<div style="font-size:0.7rem;color:var(--text-dim);">' + dateStr + '</div>' +
        '</div>' +
      '</div>';
  },

  _renderDailyChart() {
    const el = document.getElementById('pv-daily');
    if (!el) return;
    el.innerHTML = '';
    const hist = this._data.history || [];
    const todayStr = new Date().toDateString();
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - i);
      days.push({ date: d, dateStr: d.toDateString() });
    }
    const dayData = {};
    hist.forEach(s => {
      const ds = new Date(s.ts).toDateString();
      if (!dayData[ds]) dayData[ds] = { time: 0, count: 0 };
      dayData[ds].time += (s.duration || 0);
      dayData[ds].count++;
    });
    const maxTime = Math.max(60, ...days.map(d => (dayData[d.dateStr] || {}).time || 0));

    days.forEach(d => {
      const data = dayData[d.dateStr];
      const timeSec = data ? data.time : 0;
      const count = data ? data.count : 0;
      const pct = (timeSec / maxTime) * 100;
      const isToday = d.dateStr === todayStr;
      const dayLabel = d.date.getDate() + '/' + (d.date.getMonth() + 1);
      let valText = '';
      if (timeSec > 0) valText = timeSec < 60 ? '<1m' : Math.round(timeSec / 60) + 'm';

      const col = document.createElement('div');
      col.className = 'rpt-daily-col';
      col.title = (isToday ? '★ ' : '') + dayLabel + ' — ' + count + ' games, ' + this._fmt(timeSec);
      col.innerHTML =
        '<div class="rpt-daily-val">' + valText + '</div>' +
        '<div class="rpt-daily-track"><div class="rpt-daily-fill' +
          (timeSec > 0 ? (isToday ? ' today' : ' active') : '') +
          '" style="height:' + Math.max(pct, timeSec > 0 ? 6 : 0) + '%"></div></div>' +
        '<div class="rpt-daily-day' + (isToday ? ' today' : '') + '">' + dayLabel + '</div>';
      el.appendChild(col);
    });
  },

  _renderAccuracyChart() {
    const el = document.getElementById('pv-accuracy');
    if (!el) return;
    el.innerHTML = '';
    const hist = this._data.history || [];
    if (hist.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoSessions') + '</div>';
      return;
    }
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate() - i);
      days.push({ date: d, label: (d.getMonth()+1) + '/' + d.getDate(), dateStr: d.toDateString() });
    }
    const dayAccuracy = {}, dayCount = {};
    hist.forEach(s => {
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
    const validPoints = [];
    points.forEach((p, i) => {
      if (p.value !== null) {
        validPoints.push({ x: 35 + i * (375 / 13), y: 110 - p.value * 1.0, value: p.value });
      }
    });
    if (validPoints.length >= 2) {
      const path = document.createElementNS(svgNs, 'path');
      path.setAttribute('d', 'M ' + validPoints.map(p => p.x + ' ' + p.y).join(' L '));
      path.setAttribute('class', 'dash-trend-line');
      svg.appendChild(path);
    }
    validPoints.forEach(p => {
      const circle = document.createElementNS(svgNs, 'circle');
      circle.setAttribute('cx', p.x); circle.setAttribute('cy', p.y);
      circle.setAttribute('r', '3.5'); circle.setAttribute('class', 'dash-dot');
      svg.appendChild(circle);
      const txt = document.createElementNS(svgNs, 'text');
      txt.setAttribute('x', p.x); txt.setAttribute('y', p.y - 7);
      txt.setAttribute('class', 'dash-dot-label');
      txt.textContent = p.value + '%';
      svg.appendChild(txt);
    });
    el.appendChild(svg);
  },

  _renderHardWords() {
    const el = document.getElementById('pv-hard');
    if (!el) return;
    el.innerHTML = '';
    const struggled = this._wordData
      .filter(w => w.label === 'struggling' || w.label === 'learning')
      .sort((a, b) => a.strength - b.strength)
      .slice(0, 10);

    if (struggled.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoStruggling') + '</div>';
      return;
    }
    struggled.forEach(item => {
      const accClass = item.accuracy < 40 ? 'low' : item.accuracy < 60 ? 'mid' : 'ok';
      const row = document.createElement('div');
      row.className = 'dash-hard-row';
      row.innerHTML =
        '<span class="dash-hard-eng">' + item.word.english + '</span>' +
        '<span class="dash-hard-heb">' + item.word.hebrew + '</span>' +
        '<span class="dash-hard-acc ' + accClass + '">' + item.accuracy + '%</span>' +
        (item.total > 0
          ? '<span class="dash-hard-detail">' + item.correct + '✓ ' + item.wrong + '✗</span>'
          : '') +
        '<span class="dash-hard-bar"><span class="dash-hard-fill" style="width:' + item.strength + '%"></span></span>';
      el.appendChild(row);
    });
  },

  _renderAllWords() {
    const el = document.getElementById('pv-all-words');
    if (!el) return;
    el.innerHTML = '';

    const counts = { all: 0, struggling: 0, learning: 0, good: 0, mastered: 0, unseen: 0 };
    this._wordData.forEach(w => { counts.all++; counts[w.label]++; });

    document.querySelectorAll('#pv-filters .rpt-filter').forEach(btn => {
      const f = btn.dataset.wf;
      btn.classList.toggle('active', f === this._wordFilter);
      const c = counts[f] !== undefined ? ' (' + counts[f] + ')' : '';
      const keys = { all: 'dashFilterAll', struggling: 'dashStruggling', learning: 'dashLearning', good: 'dashGood', mastered: 'dashMastered', unseen: 'dashUnseen' };
      btn.textContent = (keys[f] ? T.get(keys[f]) : f) + c;
    });

    let filtered = this._wordData;
    if (this._wordFilter !== 'all') {
      filtered = filtered.filter(w => w.label === this._wordFilter);
    }
    filtered.sort((a, b) => a.word.english.localeCompare(b.word.english, 'en', { sensitivity: 'base' }));

    const titleEl = el.closest('.rpt-section')?.querySelector('.rpt-section-title');
    if (titleEl) {
      const countStr = this._wordFilter === 'all' ? '(' + counts.all + ')' : '(' + filtered.length + '/' + counts.all + ')';
      titleEl.textContent = T.get('dashAllWords') + ' ' + countStr;
    }

    if (filtered.length === 0) {
      el.innerHTML = '<div class="dash-empty">' + T.get('dashNoCategory') + '</div>';
      return;
    }

    filtered.forEach(item => {
      const row = document.createElement('div');
      row.className = 'dash-word-row dash-wlabel-' + item.label;
      const statusIcon = { unseen: '⬜', struggling: '🔴', learning: '🟡', good: '🟢', mastered: '⭐' }[item.label];
      let lastSeenStr;
      if (item.lastSeen) {
        lastSeenStr = item.daysSince === 0 ? T.get('dashToday') : item.daysSince === 1 ? T.get('dashYesterday') : item.daysSince + T.get('dashDaysAgo');
      } else {
        lastSeenStr = item.hasBeenSeen ? '—' : T.get('dashNever');
      }
      const statsStr = item.total > 0
        ? item.accuracy + '% · ' + item.correct + '✓ ' + item.wrong + '✗'
        : (item.hasBeenSeen ? item.accuracy + '%' : '—');
      row.innerHTML =
        '<span class="dash-w-status">' + statusIcon + '</span>' +
        '<span class="dash-w-eng">' + item.word.english + '</span>' +
        '<span class="dash-w-heb">' + item.word.hebrew + '</span>' +
        '<span class="dash-w-stats">' + statsStr + '</span>' +
        '<span class="dash-w-seen">' + lastSeenStr + '</span>' +
        '<span class="dash-w-bar"><span class="dash-w-bar-fill dash-wlabel-' + item.label + '" style="width:' + item.strength + '%"></span></span>';
      el.appendChild(row);
    });
  }
};

// ===== FLASHCARD INTRO =====
const FlashcardIntro = {
  _words: [],
  _idx: 0,
  _flipped: false,
  _startX: 0,

  start(words) {
    this._words = words || [];
    this._idx = 0;
    this._flipped = false;
    if (this._words.length === 0) { UI.showScreen('home'); return; }
    UI.showScreen('flashcards');
    this._render();
    this._bindEvents();
  },

  _render() {
    const card = document.getElementById('fc-card');
    card.classList.remove('flipped');
    this._flipped = false;
    const w = this._words[this._idx];
    document.getElementById('fc-front-word').textContent = w.english;
    const frontWord = document.getElementById('fc-front-word');
    const oldSpk1 = frontWord.parentNode.querySelector('.speak-btn');
    if (oldSpk1) oldSpk1.remove();
    frontWord.parentNode.insertBefore(Speak.btn(w.english, 'en'), frontWord.nextSibling);
    document.getElementById('fc-back-word').textContent = w.hebrew;
    const backWord = document.getElementById('fc-back-word');
    const oldSpk2 = backWord.parentNode.querySelector('.speak-btn');
    if (oldSpk2) oldSpk2.remove();
    backWord.parentNode.insertBefore(Speak.btn(w.hebrew, 'he'), backWord.nextSibling);
    document.getElementById('fc-progress').textContent = (this._idx + 1) + ' / ' + this._words.length;
    document.getElementById('fc-done').classList.add('hidden');
    document.getElementById('fc-card-container').classList.remove('hidden');
    document.getElementById('fc-instruction').classList.remove('hidden');
  },

  _bindEvents() {
    const card = document.getElementById('fc-card');
    const container = document.getElementById('fc-card-container');

    card.onclick = () => {
      this._flipped = !this._flipped;
      card.classList.toggle('flipped', this._flipped);
    };

    container.ontouchstart = (e) => { this._startX = e.touches[0].clientX; };
    container.ontouchend = (e) => {
      const dx = e.changedTouches[0].clientX - this._startX;
      if (Math.abs(dx) > 50) {
        if (dx > 0) this._next();
        else this._prev();
      }
    };

    const skipBtn = document.getElementById('btn-fc-skip');
    if (skipBtn) skipBtn.onclick = () => UI.showScreen('home');

    const startBtn = document.getElementById('btn-fc-start');
    if (startBtn) startBtn.onclick = () => UI.showScreen('home');
  },

  _next() {
    if (this._idx < this._words.length - 1) {
      this._idx++;
      this._render();
    } else {
      document.getElementById('fc-card-container').classList.add('hidden');
      document.getElementById('fc-instruction').classList.add('hidden');
      document.getElementById('fc-done').classList.remove('hidden');
    }
  },

  _prev() {
    if (this._idx > 0) {
      this._idx--;
      this._render();
    }
  }
};

// ===== APP INIT =====
const App = {
  init() {
    if (ParentView.isActive()) {
      ParentView.init();
      return;
    }

    WordManager.init();
    GameState.load();
    Particles.init();
    Achievements.resetFlags();
    DailyChallenge.generate();
    CloudSync.init();
    setTimeout(() => CloudSync.push(), 2000);

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

    document.getElementById('btn-restore-toggle').addEventListener('click', () => {
      document.getElementById('restore-box').classList.toggle('hidden');
      document.getElementById('restore-input').focus();
    });

    document.getElementById('btn-restore-go').addEventListener('click', async () => {
      const input = document.getElementById('restore-input').value;
      if (!input.trim()) return;
      const btn = document.getElementById('btn-restore-go');
      btn.disabled = true;
      const ok = await CloudSync.restore(input);
      btn.disabled = false;
      if (ok) {
        UI.showToast(T.get('restoreSuccess'), 'teal');
        GameState.data.firstTime = false;
        GameState.save();
        WordManager.init();
        setTimeout(() => { UI.showScreen('home'); UI.updateHomeScreen(); UI.updateStats(); }, 600);
      } else {
        UI.showToast(T.get('restoreFail'), 'danger');
      }
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
      UI.showScreen('dashboard');
      Dashboard._wordData = null;
      Dashboard._wordFilter = 'all';
      Dashboard.render();
    });

    document.getElementById('btn-take-test').addEventListener('click', () => {
      WordTest.start();
    });

    const spBadge = document.getElementById('sp-badge');
    if (spBadge) {
      spBadge.addEventListener('click', () => {
        UI.showScreen('smart-progress');
        SmartProgress.render();
      });
    }

    document.getElementById('test-retry-btn').addEventListener('click', () => {
      WordTest.retryMistakes();
    });

    document.getElementById('test-home-btn').addEventListener('click', () => {
      UI.showScreen('home');
    });

    const parentLinkBtn = document.getElementById('btn-parent-link');
    if (parentLinkBtn) {
      parentLinkBtn.addEventListener('click', async () => {
        const link = CloudSync.getParentLink();
        if (link) {
          try { await navigator.clipboard.writeText(link); } catch (e) {}
          UI.showToast(T.get('parentLinkCopied'), 'teal');
        } else {
          parentLinkBtn.disabled = true;
          const binId = await CloudSync.ensureBin();
          parentLinkBtn.disabled = false;
          if (binId) {
            const newLink = CloudSync.getParentLink();
            try { await navigator.clipboard.writeText(newLink); } catch (e) {}
            UI.showToast(T.get('parentLinkCopied'), 'teal');
          } else {
            UI.showToast(T.get('parentLinkError'), 'danger');
          }
        }
      });
    }

    document.querySelectorAll('.rpt-filter').forEach(btn => {
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

    document.querySelectorAll('.bulk-sel-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const level = btn.dataset.conf;
        const all = WordManager.getAll();
        let added = 0;
        all.forEach(w => {
          const c = WordManager.getWordConfidence(w.id);
          if (c.level === level && !WordManager.isSelected(w.id)) {
            WordManager.toggleSelection(w.id);
            added++;
          }
        });
        if (added > 0) {
          UI.showToast(T.get('bulkSelAdded').replace('%d', added), 'teal');
        }
        WordManagerUI.render();
      });
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
      if (!eng || !heb) return;
      const exists = WordManager.getAll().some(w =>
        w.english.toLowerCase() === eng.toLowerCase()
      );
      if (exists) {
        UI.showToast(T.get('wordExists'), 'coral');
        return;
      }
      WordManager.addWord(eng, heb);
      engInput.value = '';
      hebInput.value = '';
      WordManagerUI.render();
      UI.updateStats();
      UI.showToast(T.get('wordAdded'), 'teal');
    });

    window.addEventListener('popstate', () => {
      if (UI._currentScreen !== 'home') {
        this._stopCurrentGame();
        UI.showScreen('home');
      }
    });

    const decayBtn = document.getElementById('decay-review-btn');
    if (decayBtn) {
      decayBtn.addEventListener('click', () => {
        const stale = WordManager.getStaleWords(7);
        if (stale.length >= 4) {
          WordTest.start(stale);
        } else {
          App._startGame('lightning');
        }
      });
    }

    // Archive tab switching
    document.querySelectorAll('.words-tab').forEach(tab => {
      tab.addEventListener('click', () => WordManagerUI.switchTab(tab.dataset.wtab));
    });

    // Archive mastered button
    const archMasteredBtn = document.getElementById('btn-archive-mastered');
    if (archMasteredBtn) {
      archMasteredBtn.addEventListener('click', () => {
        const all = WordManager.getAll();
        const masteredIds = all.filter(w => WordManager.getWordConfidence(w.id).level === 'mastered').map(w => w.id);
        if (masteredIds.length === 0) { UI.showToast('No mastered words', 'coral'); return; }
        if (confirm(T.get('archiveConfirm').replace('%d', masteredIds.length))) {
          const count = WordManager.archiveMultiple(masteredIds);
          WordManagerUI.render();
          UI.updateStats();
          UI.showToast(T.get('archiveDone').replace('%d', count), 'teal');
        }
      });
    }

    // Import modal open
    const bulkBtn = document.getElementById('btn-bulk-import');
    if (bulkBtn) {
      bulkBtn.addEventListener('click', () => {
        document.getElementById('bulk-import-modal').classList.remove('hidden');
        document.getElementById('bulk-import-area').value = '';
        document.getElementById('bulk-import-area').placeholder = T.get('bulkImportHint');
        document.getElementById('import-preview').classList.add('hidden');
        document.querySelectorAll('.import-tab').forEach(t => t.classList.toggle('active', t.dataset.itab === 'paste'));
        document.getElementById('import-paste-panel').classList.remove('hidden');
        document.getElementById('import-photo-panel').classList.add('hidden');
        document.getElementById('import-file-panel').classList.add('hidden');
      });
    }

    // Import tab switching
    document.querySelectorAll('.import-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.import-tab').forEach(t => t.classList.toggle('active', t === tab));
        document.getElementById('import-paste-panel').classList.toggle('hidden', tab.dataset.itab !== 'paste');
        document.getElementById('import-photo-panel').classList.toggle('hidden', tab.dataset.itab !== 'photo');
        document.getElementById('import-file-panel').classList.toggle('hidden', tab.dataset.itab !== 'file');
      });
    });

    // Parse helper for import
    const _parseImportText = (text) => {
      const lines = text.split('\n').map(l => l.trim()).filter(l => l);
      const pairs = [];
      lines.forEach(line => {
        const sep = line.includes('=') ? '=' : line.includes('\t') ? '\t' : line.includes(':') ? ':' : line.includes('-') ? '-' : line.includes(',') ? ',' : null;
        if (!sep) return;
        const parts = line.split(sep).map(p => p.trim());
        if (parts.length >= 2 && parts[0] && parts[1]) pairs.push({ english: parts[0], hebrew: parts[1] });
      });
      return pairs;
    };

    // Live preview on paste
    const importArea = document.getElementById('bulk-import-area');
    if (importArea) {
      importArea.addEventListener('input', () => {
        const pairs = _parseImportText(importArea.value);
        const previewEl = document.getElementById('import-preview');
        if (pairs.length > 0) {
          previewEl.textContent = T.get('importPreview').replace('%d', pairs.length);
          previewEl.classList.remove('hidden');
        } else {
          previewEl.classList.add('hidden');
        }
      });
    }

    // Photo import
    const photoBtn = document.getElementById('btn-import-photo');
    const photoInput = document.getElementById('import-photo-input');
    if (photoBtn && photoInput) {
      photoBtn.addEventListener('click', () => photoInput.click());
      photoInput.addEventListener('change', async () => {
        const file = photoInput.files[0];
        if (!file) return;
        const statusEl = document.getElementById('import-photo-status');
        statusEl.classList.remove('hidden');
        try {
          if (!window.Tesseract) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
            document.head.appendChild(script);
            await new Promise((resolve, reject) => { script.onload = resolve; script.onerror = reject; });
          }
          const result = await Tesseract.recognize(file, 'eng+heb');
          const text = result.data.text;
          document.getElementById('bulk-import-area').value = text;
          document.querySelectorAll('.import-tab').forEach(t => t.classList.toggle('active', t.dataset.itab === 'paste'));
          document.getElementById('import-paste-panel').classList.remove('hidden');
          document.getElementById('import-photo-panel').classList.add('hidden');
          const pairs = _parseImportText(text);
          const previewEl = document.getElementById('import-preview');
          if (pairs.length > 0) { previewEl.textContent = T.get('importPreview').replace('%d', pairs.length); previewEl.classList.remove('hidden'); }
        } catch (e) {
          UI.showToast('OCR failed — please paste manually', 'coral');
        }
        statusEl.classList.add('hidden');
        photoInput.value = '';
      });
    }

    // File import
    const fileBtn = document.getElementById('btn-import-file');
    const fileInput = document.getElementById('import-file-input');
    if (fileBtn && fileInput) {
      fileBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target.result;
          document.getElementById('bulk-import-area').value = text;
          document.querySelectorAll('.import-tab').forEach(t => t.classList.toggle('active', t.dataset.itab === 'paste'));
          document.getElementById('import-paste-panel').classList.remove('hidden');
          document.getElementById('import-file-panel').classList.add('hidden');
          const pairs = _parseImportText(text);
          const previewEl = document.getElementById('import-preview');
          if (pairs.length > 0) { previewEl.textContent = T.get('importPreview').replace('%d', pairs.length); previewEl.classList.remove('hidden'); }
        };
        reader.readAsText(file);
        fileInput.value = '';
      });
    }

    // Import execute
    const bulkDoBtn = document.getElementById('btn-bulk-do');
    if (bulkDoBtn) {
      bulkDoBtn.addEventListener('click', () => {
        const text = document.getElementById('bulk-import-area').value;
        const pairs = _parseImportText(text);
        const importedWords = [];
        pairs.forEach(p => {
          const exists = WordManager.getAll().some(w => w.english.toLowerCase() === p.english.toLowerCase());
          if (!exists) {
            const w = WordManager.addWord(p.english, p.hebrew);
            importedWords.push(w);
          }
        });
        document.getElementById('bulk-import-modal').classList.add('hidden');
        if (importedWords.length > 0) {
          const autoSelect = document.getElementById('import-auto-select').checked;
          const learnFirst = document.getElementById('import-learn-first').checked;
          if (autoSelect) {
            const ids = importedWords.map(w => w.id);
            WordManager.startDrip(ids, 5);
          }
          WordManagerUI.render();
          UI.updateStats();
          UI.showToast(T.get('bulkImportDone').replace('%d', importedWords.length), 'teal');
          if (learnFirst && importedWords.length > 0) {
            setTimeout(() => FlashcardIntro.start(importedWords), 400);
          }
        }
      });
    }

    const bulkCloseBtn = document.getElementById('btn-bulk-close');
    if (bulkCloseBtn) {
      bulkCloseBtn.addEventListener('click', () => {
        document.getElementById('bulk-import-modal').classList.add('hidden');
      });
    }

  },

  _gameStartTs: 0,

  _startGame(game) {
    this._stopCurrentGame();
    this._gameStartTs = Date.now();
    UI._currentGame = game;
    Achievements.resetFlags();
    if (WordManager.hasDripActive()) {
      const added = WordManager.promoteDrip();
      if (added > 0) UI.showToast(T.get('dripNewWords').replace('%d', added), 'teal');
    }
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
    WordScramble.stop();
    FallingWords.stop();
    TrueFalse.stop();
    MatchUp.stop();
    WordBingo.stop();
    TranslationSprint.stop();
    WordSpy.stop();
    CategorySort.stop();
    SentenceFill.stop();
    WordTest.stop();
    UI._currentGame = null;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
