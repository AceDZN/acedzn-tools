import { ModuleId, Question } from "../types";

export const INTRO_QUESTIONS: Question[] = [
  {
    id: "i1",
    question: 'מה מהבאים הוא "גוף"?',
    options: ["ברזל", "כדורגל", "מים", "פלסטיק"],
    correctAnswer: 1,
    explanation:
      "כדורגל הוא גוף כי יש לו צורה מוגדרת והוא עשוי מחומר. ברזל, מים ופלסטיק הם שמות של חומרים.",
    category: ModuleId.Intro
  },
  {
    id: "i2",
    question: "מה ההבדל העיקרי בין גוף לחומר?",
    options: [
      "גוף הוא גדול וחומר הוא קטן",
      "גוף הוא בעל צורה וגבולות, וחומר הוא מרכיב הגוף",
      "חומר תמיד מוצק וגוף תמיד נוזל",
      "אין הבדל"
    ],
    correctAnswer: 1,
    explanation: "גוף הוא חפץ בעל צורה, וחומר הוא מה שהגוף עשוי ממנו.",
    category: ModuleId.Intro
  }
];

export const VOLUME_QUESTIONS: Question[] = [
  {
    id: "v1",
    question: "מהו נפח של גוף?",
    options: [
      "כמות החומר ממנו הוא עשוי",
      "המקום שהגוף תופס במרחב",
      "כוח המשיכה הפועל על הגוף",
      "הצורה החיצונית של הגוף"
    ],
    correctAnswer: 1,
    explanation: "נפח מוגדר בדיוק כמקום שגוף תופס במרחב.",
    category: ModuleId.Volume
  },
  {
    id: "v2",
    question: 'כמה מ"ל יש ב-2.5 ליטר?',
    options: ['25 מ"ל', '250 מ"ל', '2,500 מ"ל', '0.0025 מ"ל'],
    correctAnswer: 2,
    explanation: 'כדי לעבור מליטר למ"ל כופלים ב-1,000. לכן 2.5 * 1000 = 2,500.',
    category: ModuleId.Volume
  },
  {
    id: "v3",
    question: "מהי הדרך הנכונה למדוד נפח של מפתח מתכת?",
    options: [
      "אורך x רוחב x גובה",
      "שימוש במאזני כפות",
      "שיטת דחיקת המים במשורה",
      "מד כוח"
    ],
    correctAnswer: 2,
    explanation: "מפתח הוא גוף בעל צורה לא הנדסית, לכן משתמשים בדחיקת מים.",
    category: ModuleId.Volume
  },
  {
    id: "v4",
    question: 'סנטימטר מעוקב (סמ"ק) אחד שווה בדיוק ל:',
    options: ["1 ליטר", '1 מ"ל', '10 מ"ל', '1 ק"ג'],
    correctAnswer: 1,
    explanation: 'זוהי יחידת מידה זהה: 1 סמ"ק = 1 מ"ל.',
    category: ModuleId.Volume
  }
];

export const MASS_WEIGHT_QUESTIONS: Question[] = [
  {
    id: "mw1",
    question: "איפה המסה של אסטרונאוט תהיה גדולה יותר?",
    options: ["על כדור הארץ", "על הירח", "בחלל הריק", "המסה תהיה זהה בכל מקום"],
    correctAnswer: 3,
    explanation:
      "מסה היא כמות החומר והיא לא משתנה (אלא אם הורדנו או הוספנו חומר לגוף).",
    category: ModuleId.MassWeight
  },
  {
    id: "mw2",
    question: "מהו המכשיר למדידת משקל?",
    options: ["מאזני כפות", "משורה", "מאזני קפיץ (מד כוח)", "מולטימטר"],
    correctAnswer: 2,
    explanation: "משקל הוא כוח, ולכן מודדים אותו בעזרת מאזני קפיץ (דינמומטר).",
    category: ModuleId.MassWeight
  },
  {
    id: "mw3",
    question: "מהי יחידת המידה של משקל בפיזיקה?",
    options: ["קילוגרם", "גרם", "ניוטון", "ליטר"],
    correctAnswer: 2,
    explanation: "משקל הוא כוח הכבידה, ובפיזיקה כוח נמדד בניוטון (N).",
    category: ModuleId.MassWeight
  }
];

export const DENSITY_QUESTIONS: Question[] = [
  {
    id: "d1",
    question:
      'אם צפיפות המים היא 1 גרם/סמ"ק, מה יקרה לשמן שצפיפותו 0.9 גרם/סמ"ק?',
    options: [
      "הוא ישקע לקרקעית",
      "הוא יצוף על פני המים",
      "הוא יתמוסס מיד",
      "הוא יהפוך לגז"
    ],
    correctAnswer: 1,
    explanation: "גוף בעל צפיפות נמוכה יותר מהנוזל יצוף עליו.",
    category: ModuleId.Density
  },
  {
    id: "d2",
    question: "איך מחשבים צפיפות?",
    options: ["מסה כפול נפח", "נפח חלקי מסה", "מסה חלקי נפח", "אורך כפול רוחב"],
    correctAnswer: 2,
    explanation: "הנוסחה לצפיפות היא מסה חלקי נפח (d = m/V).",
    category: ModuleId.Density
  },
  {
    id: "d3",
    question: "לשני גופים העשויים מאותו חומר בדיוק יש:",
    options: [
      "אותה מסה תמיד",
      "אותו נפח תמיד",
      "אותה צפיפות תמיד",
      "אותו משקל תמיד"
    ],
    correctAnswer: 2,
    explanation:
      "צפיפות היא תכונה מזהה של חומר, לכן לכל כמות של אותו חומר תהיה אותה צפיפות.",
    category: ModuleId.Density
  }
];

export const CHAPTER2_SUMMARY_QUESTIONS: Question[] = [
  ...INTRO_QUESTIONS,
  ...VOLUME_QUESTIONS,
  ...MASS_WEIGHT_QUESTIONS,
  ...DENSITY_QUESTIONS,
  {
    id: "c2_sum_1",
    question: 'מה ההבדל המהותי בין "גוף" ל"חומר"?',
    options: [
      "אין הבדל - זה אותו דבר",
      "גוף הוא עצם בעל גבולות וצורה, חומר הוא מה שהגוף עשוי ממנו",
      "חומר תמיד נוזלי וגוף תמיד מוצק",
      "גוף גדול יותר מחומר"
    ],
    correctAnswer: 1,
    explanation:
      "כדור הוא גוף (יש לו צורה וגבולות), גומי הוא החומר ממנו הכדור עשוי.",
    category: ModuleId.Intro
  },
  {
    id: "c2_sum_2",
    question: "שלושה גופים עשויים מאותו חומר בדיוק. מה בוודאות זהה ביניהם?",
    options: ["המסה", "הנפח", "הצפיפות", "המשקל"],
    correctAnswer: 2,
    explanation:
      "צפיפות היא תכונה מזהה של חומר - לכל כמות של אותו חומר תהיה אותה צפיפות.",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_3",
    question: 'נפח של קוביה עם צלע 3 ס"מ הוא:',
    options: ['9 סמ"ק', '18 סמ"ק', '27 סמ"ק', '6 סמ"ק'],
    correctAnswer: 2,
    explanation: 'נפח קוביה = צלע³ = 3 × 3 × 3 = 27 סמ"ק',
    category: ModuleId.Volume
  },
  {
    id: "c2_sum_4",
    question: "אסטרונאוט במשקל 600 ניוטון על כדור הארץ טס לירח. מה ישתנה?",
    options: [
      "רק המסה תרד",
      "רק המשקל ירד (כי כוח הכבידה חלש יותר)",
      "גם המסה וגם המשקל ירדו",
      "שניהם יישארו זהים"
    ],
    correctAnswer: 1,
    explanation:
      "מסה היא כמות החומר ולא משתנה. משקל הוא כוח הכבידה ויורד בירח כי הכבידה שם חלשה יותר.",
    category: ModuleId.MassWeight
  },
  {
    id: "c2_sum_5",
    question: 'גוף מסתו 200 גרם ונפחו 100 סמ"ק. מה צפיפותו?',
    options: ['2 גרם/סמ"ק', '0.5 גרם/סמ"ק', '20,000 גרם/סמ"ק', '100 גרם/סמ"ק'],
    correctAnswer: 0,
    explanation: 'צפיפות = מסה ÷ נפח = 200 ÷ 100 = 2 גרם/סמ"ק',
    category: ModuleId.Density
  },
  {
    id: "c2_sum_6",
    question:
      'הכנסנו אבן למשורה עם 50 מ"ל מים. מפלס המים עלה ל-65 מ"ל. מה נפח האבן?',
    options: ['65 מ"ל', '50 מ"ל', '15 מ"ל', '115 מ"ל'],
    correctAnswer: 2,
    explanation: 'נפח הגוף = נפח אחרי - נפח לפני = 65 - 50 = 15 מ"ל',
    category: ModuleId.Volume
  },
  {
    id: "c2_sum_7",
    question:
      'גוף צפיפותו 0.7 גרם/סמ"ק הונח במים (צפיפות 1 גרם/סמ"ק). מה יקרה?',
    options: [
      "הגוף ישקע לקרקעית",
      "הגוף יצוף על פני המים",
      "הגוף ירחף באמצע",
      "הגוף יתמוסס"
    ],
    correctAnswer: 1,
    explanation:
      "גוף שצפיפותו נמוכה מצפיפות הנוזל - יצוף. גוף שצפיפותו גבוהה - ישקע.",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_8",
    question: "באיזה מכשיר מודדים מסה?",
    options: ["מד כוח", "משורה", "מאזני כפות", "טרמומטר"],
    correctAnswer: 2,
    explanation:
      "מאזני כפות משווים בין מסות (גוף מול משקולות ידועות). מד כוח מודד משקל.",
    category: ModuleId.MassWeight
  },
  {
    id: "c2_sum_9",
    question: "מהי יחידת הצפיפות הנפוצה?",
    options: ['ק"ג', "ניוטון", 'גרם לסמ"ק (או ק"ג/ליטר)', 'סמ"ק'],
    correctAnswer: 2,
    explanation: "צפיפות = מסה/נפח, לכן היחידות הן יחידות מסה חלקי יחידות נפח.",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_10",
    question: "למה ספינת מתכת ענקית צפה למרות שמתכת שוקעת במים?",
    options: [
      "כי הספינה צבועה",
      "כי הצפיפות הממוצעת של הספינה (כולל האוויר בתוכה) נמוכה מצפיפות המים",
      "כי יש לספינה מנוע",
      "כי המים במלוחים"
    ],
    correctAnswer: 1,
    explanation:
      "הספינה חלולה ומלאה אוויר, לכן הצפיפות הממוצעת שלה נמוכה מהמים והיא צפה.",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_11",
    question: 'כמה ניוטון שוקל גוף במסת 10 ק"ג על כדור הארץ?',
    options: ["10 N", "100 N", "1 N", "1000 N"],
    correctAnswer: 1,
    explanation: "משקל = מסה × תאוצת הכבידה. בכדור הארץ: 10 × 10 = 100 ניוטון.",
    category: ModuleId.MassWeight
  },
  {
    id: "c2_sum_12",
    question: 'גוף מסתו 500 גרם. כמה זה בק"ג?',
    options: ['5 ק"ג', '0.5 ק"ג', '50 ק"ג', '0.05 ק"ג'],
    correctAnswer: 1,
    explanation: 'לחלק ב-1000: 500 גרם ÷ 1000 = 0.5 ק"ג',
    category: ModuleId.MassWeight
  },
  {
    id: "c2_sum_13",
    question: "שני גופים זהים במסה אך שונים בנפח. לאיזה צפיפות גבוהה יותר?",
    options: [
      "לגוף הגדול יותר",
      "לגוף הקטן יותר",
      "שניהם בעלי אותה צפיפות",
      "אי אפשר לדעת"
    ],
    correctAnswer: 1,
    explanation:
      "צפיפות = מסה/נפח. אם המסה שווה ונפח קטן יותר, הצפיפות גבוהה יותר.",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_14",
    question: 'תיבה במידות 4 ס"מ × 5 ס"מ × 2 ס"מ. מה נפחה?',
    options: ['11 סמ"ק', '40 סמ"ק', '20 סמ"ק', '22 סמ"ק'],
    correctAnswer: 1,
    explanation: 'נפח תיבה = אורך × רוחב × גובה = 4 × 5 × 2 = 40 סמ"ק',
    category: ModuleId.Volume
  },
  {
    id: "c2_sum_15",
    question: 'גוף צפיפותו 8 גרם/סמ"ק ונפחו 10 סמ"ק. מה מסתו?',
    options: ["0.8 גרם", "80 גרם", "18 גרם", "800 גרם"],
    correctAnswer: 1,
    explanation: "מסה = צפיפות × נפח = 8 × 10 = 80 גרם",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_16",
    question: "איזו תכונה מאפשרת לזהות חומר לא ידוע?",
    options: ["המסה שלו", "הנפח שלו", "הצפיפות שלו", "המשקל שלו"],
    correctAnswer: 2,
    explanation:
      "צפיפות היא תכונה מזהה - לכל חומר יש צפיפות קבועה וייחודית (בתנאים מסוימים).",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_17",
    question: "2.5 ליטר שווים ל:",
    options: ['25 מ"ל', '250 מ"ל', '2,500 מ"ל', '25,000 מ"ל'],
    correctAnswer: 2,
    explanation: '1 ליטר = 1,000 מ"ל, לכן 2.5 ליטר = 2,500 מ"ל',
    category: ModuleId.Volume
  },
  {
    id: "c2_sum_18",
    question: "למה שמן צף על מים אבל דבש שוקע?",
    options: [
      "כי שמן יותר שקוף",
      "כי צפיפות השמן נמוכה מהמים וצפיפות הדבש גבוהה מהמים",
      "כי דבש כבד יותר",
      "כי שמן מסריח"
    ],
    correctAnswer: 1,
    explanation: "הכלל: צפיפות נמוכה מהנוזל = צף, צפיפות גבוהה מהנוזל = שוקע.",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_19",
    question: "מה הנוסחה לחישוב צפיפות?",
    options: [
      "d = m × V (מסה כפול נפח)",
      "d = m / V (מסה חלקי נפח)",
      "d = V / m (נפח חלקי מסה)",
      "d = m + V (מסה ועוד נפח)"
    ],
    correctAnswer: 1,
    explanation: "צפיפות (d) = מסה (m) חלקי נפח (V)",
    category: ModuleId.Density
  },
  {
    id: "c2_sum_20",
    question: 'גוף נפחו 50 סמ"ק ומסתו 150 גרם. האם הוא יצוף או ישקע במים?',
    options: [
      'יצוף (צפיפות 3 גרם/סמ"ק > 1)',
      'ישקע (צפיפות 3 גרם/סמ"ק > 1)',
      "ירחף",
      "אי אפשר לדעת"
    ],
    correctAnswer: 1,
    explanation:
      'צפיפות = 150/50 = 3 גרם/סמ"ק. זה יותר מ-1 (צפיפות המים), לכן הגוף ישקע.',
    category: ModuleId.Density
  }
];

export const CHAPTER2_QUESTIONS: Record<string, Question[]> = {
  [ModuleId.Intro]: INTRO_QUESTIONS,
  [ModuleId.Volume]: VOLUME_QUESTIONS,
  [ModuleId.MassWeight]: MASS_WEIGHT_QUESTIONS,
  [ModuleId.Density]: DENSITY_QUESTIONS,
  [ModuleId.Summary]: CHAPTER2_SUMMARY_QUESTIONS
};
