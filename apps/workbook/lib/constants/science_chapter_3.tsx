import { ModuleId, Question } from "../types";

export const CHAPTER3_INTRO_QUESTIONS: Question[] = [
  {
    id: "i1",
    question: 'מה מהבאים הוא "גוף"?',
    options: ["ברזל", "כדורגל", "מים", "פלסטיק"],
    correctAnswer: 1,
    explanation:
      "כדורגל הוא גוף כי יש לו צורה מוגדרת והוא עשוי מחומר. ברזל, מים ופלסטיק הם שמות של חומרים.",
    category: ModuleId.Chapter3Intro
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
    category: ModuleId.Chapter3Intro
  }
];

export const VOLUME_MEASUREMENT_QUESTIONS: Question[] = [
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
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "v2",
    question: 'כמה מ"ל יש ב-2.5 ליטר?',
    options: ['25 מ"ל', '250 מ"ל', '2,500 מ"ל', '0.0025 מ"ל'],
    correctAnswer: 2,
    explanation: 'כדי לעבור מליטר למ"ל כופלים ב-1,000. לכן 2.5 * 1000 = 2,500.',
    category: ModuleId.VolumeMeasurement
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
    category: ModuleId.DisplacementMethod
  },
  {
    id: "v4",
    question: 'סנטימטר מעוקב (סמ"ק) אחד שווה בדיוק ל:',
    options: ["1 ליטר", '1 מ"ל', '10 מ"ל', '1 ק"ג'],
    correctAnswer: 1,
    explanation: 'זוהי יחידת מידה זהה: 1 סמ"ק = 1 מ"ל.',
    category: ModuleId.VolumeMeasurement
  }
];

export const MASS_QUESTIONS: Question[] = [
  {
    id: "mw1",
    question: "איפה המסה של אסטרונאוט תהיה גדולה יותר?",
    options: ["על כדור הארץ", "על הירח", "בחלל הריק", "המסה תהיה זהה בכל מקום"],
    correctAnswer: 3,
    explanation:
      "מסה היא כמות החומר והיא לא משתנה (אלא אם הורדנו או הוספנו חומר לגוף).",
    category: ModuleId.MassVsWeight
  },
  {
    id: "mw2",
    question: "מהו המכשיר למדידת משקל?",
    options: ["מאזני כפות", "משורה", "מאזני קפיץ (מד כוח)", "מולטימטר"],
    correctAnswer: 2,
    explanation: "משקל הוא כוח, ולכן מודדים אותו בעזרת מאזני קפיץ (דינמומטר).",
    category: ModuleId.MassVsWeight
  },
  {
    id: "mw3",
    question: "מהי יחידת המידה של משקל בפיזיקה?",
    options: ["קילוגרם", "גרם", "ניוטון", "ליטר"],
    correctAnswer: 2,
    explanation: "משקל הוא כוח הכבידה, ובפיזיקה כוח נמדד בניוטון (N).",
    category: ModuleId.MassVsWeight
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
    category: ModuleId.DensityDeep
  },
  {
    id: "d2",
    question: "איך מחשבים צפיפות?",
    options: ["מסה כפול נפח", "נפח חלקי מסה", "מסה חלקי נפח", "אורך כפול רוחב"],
    correctAnswer: 2,
    explanation: "הנוסחה לצפיפות היא מסה חלקי נפח (d = m/V).",
    category: ModuleId.DensityDeep
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
    category: ModuleId.DensityDeep
  }
];

export const CHAPTER3_SUMMARY_QUESTIONS: Question[] = [
  ...CHAPTER3_INTRO_QUESTIONS,
  ...VOLUME_MEASUREMENT_QUESTIONS,
  ...MASS_QUESTIONS,
  ...DENSITY_QUESTIONS,
  {
    id: "c3_sum_1",
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
    category: ModuleId.Chapter3Intro
  },
  {
    id: "c3_sum_2",
    question: "שלושה גופים עשויים מאותו חומר בדיוק. מה בוודאות זהה ביניהם?",
    options: ["המסה", "הנפח", "הצפיפות", "המשקל"],
    correctAnswer: 2,
    explanation:
      "צפיפות היא תכונה מזהה של חומר - לכל כמות של אותו חומר תהיה אותה צפיפות.",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_3",
    question: 'נפח של קוביה עם צלע 3 ס"מ הוא:',
    options: ['9 סמ"ק', '18 סמ"ק', '27 סמ"ק', '6 סמ"ק'],
    correctAnswer: 2,
    explanation: 'נפח קוביה = צלע³ = 3 × 3 × 3 = 27 סמ"ק',
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_sum_4",
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
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_sum_5",
    question: 'גוף מסתו 200 גרם ונפחו 100 סמ"ק. מה צפיפותו?',
    options: ['2 גרם/סמ"ק', '0.5 גרם/סמ"ק', '20,000 גרם/סמ"ק', '100 גרם/סמ"ק'],
    correctAnswer: 0,
    explanation: 'צפיפות = מסה ÷ נפח = 200 ÷ 100 = 2 גרם/סמ"ק',
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_6",
    question:
      'הכנסנו אבן למשורה עם 50 מ"ל מים. מפלס המים עלה ל-65 מ"ל. מה נפח האבן?',
    options: ['65 מ"ל', '50 מ"ל', '15 מ"ל', '115 מ"ל'],
    correctAnswer: 2,
    explanation: 'נפח הגוף = נפח אחרי - נפח לפני = 65 - 50 = 15 מ"ל',
    category: ModuleId.DisplacementMethod
  },
  {
    id: "c3_sum_7",
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
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_sum_8",
    question: "באיזה מכשיר מודדים מסה?",
    options: ["מד כוח", "משורה", "מאזני כפות", "טרמומטר"],
    correctAnswer: 2,
    explanation:
      "מאזני כפות משווים בין מסות (גוף מול משקולות ידועות). מד כוח מודד משקל.",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_sum_9",
    question: "מהי יחידת הצפיפות הנפוצה?",
    options: ['ק"ג', "ניוטון", 'גרם לסמ"ק (או ק"ג/ליטר)', 'סמ"ק'],
    correctAnswer: 2,
    explanation: "צפיפות = מסה/נפח, לכן היחידות הן יחידות מסה חלקי יחידות נפח.",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_10",
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
    category: ModuleId.Buoyancy
  }
];

export const CHAPTER3_QUESTIONS: Record<string, Question[]> = {
  [ModuleId.Chapter3Intro]: CHAPTER3_INTRO_QUESTIONS,
  [ModuleId.VolumeMeasurement]: VOLUME_MEASUREMENT_QUESTIONS,
  [ModuleId.DisplacementMethod]: VOLUME_MEASUREMENT_QUESTIONS,
  [ModuleId.MassIntro]: MASS_QUESTIONS,
  [ModuleId.MassVsWeight]: MASS_QUESTIONS,
  [ModuleId.DensityDeep]: DENSITY_QUESTIONS,
  [ModuleId.Buoyancy]: DENSITY_QUESTIONS,
  [ModuleId.Summary]: CHAPTER3_SUMMARY_QUESTIONS
};
