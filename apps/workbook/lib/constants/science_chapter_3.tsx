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
  },
  {
    id: "c3_sum_11",
    question: "מהו נפח?",
    options: [
      "כמות החומר בגוף",
      "המקום שגוף תופס במרחב",
      "כוח המשיכה על הגוף",
      "מהירות התנועה של הגוף"
    ],
    correctAnswer: 1,
    explanation: "נפח הוא המקום התלת-ממדי שגוף תופס במרחב.",
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_sum_12",
    question: "מהי מסה?",
    options: [
      "כמות החומר בגוף",
      "כוח הכבידה על הגוף",
      "נפח הגוף",
      "צפיפות הגוף"
    ],
    correctAnswer: 0,
    explanation: "מסה היא כמות החומר שבגוף.",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_sum_13",
    question: "מהו משקל?",
    options: [
      "כמות החומר בגוף",
      "כוח הכבידה הפועל על הגוף",
      "נפח הגוף",
      "צפיפות הגוף"
    ],
    correctAnswer: 1,
    explanation: "משקל הוא כוח הכבידה הפועל על הגוף, ונמדד בניוטון.",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_sum_14",
    question: "באיזו יחידה מודדים משקל?",
    options: ["קילוגרם", "ניוטון", "ליטר", 'סמ"ק'],
    correctAnswer: 1,
    explanation: "משקל הוא כוח, ולכן נמדד בניוטון.",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_sum_15",
    question: "באיזו יחידה מודדים מסה?",
    options: ["ניוטון", "קילוגרם או גרם", "ליטר", "מטר"],
    correctAnswer: 1,
    explanation: "מסה נמדדת בקילוגרם או בגרם.",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_sum_16",
    question: 'כמה גרם יש בקילוגרם אחד?',
    options: ["10 גרם", "100 גרם", "1,000 גרם", "10,000 גרם"],
    correctAnswer: 2,
    explanation: "1 ק\"ג = 1,000 גרם",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_sum_17",
    question: 'כמה מ"ל יש בליטר אחד?',
    options: ['10 מ"ל', '100 מ"ל', '1,000 מ"ל', '10,000 מ"ל'],
    correctAnswer: 2,
    explanation: '1 ליטר = 1,000 מ"ל = 1,000 סמ"ק',
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_sum_18",
    question: "מה הנוסחה לחישוב צפיפות?",
    options: [
      "צפיפות = מסה × נפח",
      "צפיפות = מסה ÷ נפח",
      "צפיפות = נפח ÷ מסה",
      "צפיפות = מסה + נפח"
    ],
    correctAnswer: 1,
    explanation: "צפיפות = מסה חלקי נפח (ρ = m/V).",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_19",
    question: 'גוף מסתו 500 גרם ונפחו 250 סמ"ק. מה צפיפותו?',
    options: ['0.5 גרם/סמ"ק', '2 גרם/סמ"ק', '125,000 גרם/סמ"ק', '750 גרם/סמ"ק'],
    correctAnswer: 1,
    explanation: 'צפיפות = 500 ÷ 250 = 2 גרם/סמ"ק',
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_20",
    question: "האם לאוויר יש מסה?",
    options: [
      "לא, אוויר לא שוקל כלום",
      "כן, לאוויר יש מסה",
      "רק כשהוא חם",
      "רק כשהוא דחוס"
    ],
    correctAnswer: 1,
    explanation: "לאוויר יש מסה. ניתן להוכיח זאת על ידי שקילת בלון מנופח מול בלון ריק.",
    category: ModuleId.AirHasMass
  },
  {
    id: "c3_sum_21",
    question: "איך מוכיחים שלאוויר יש מסה?",
    options: [
      "מסתכלים עליו",
      "שוקלים בלון מנופח מול בלון ריק",
      "מחממים אותו",
      "מקררים אותו"
    ],
    correctAnswer: 1,
    explanation: "בלון מנופח שוקל יותר מבלון ריק כי האוויר שבתוכו מוסיף מסה.",
    category: ModuleId.AirHasMass
  },
  {
    id: "c3_sum_22",
    question: "מתי גוף יצוף על נוזל?",
    options: [
      "כשצפיפותו גבוהה מצפיפות הנוזל",
      "כשצפיפותו נמוכה מצפיפות הנוזל",
      "כשצפיפותו שווה לצפיפות הנוזל",
      "תמיד"
    ],
    correctAnswer: 1,
    explanation: "גוף יצוף כשצפיפותו נמוכה מצפיפות הנוזל.",
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_sum_23",
    question: "מתי גוף ישקע בנוזל?",
    options: [
      "כשצפיפותו גבוהה מצפיפות הנוזל",
      "כשצפיפותו נמוכה מצפיפות הנוזל",
      "כשצפיפותו שווה לצפיפות הנוזל",
      "לעולם לא"
    ],
    correctAnswer: 0,
    explanation: "גוף ישקע כשצפיפותו גבוהה מצפיפות הנוזל.",
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_sum_24",
    question: "מתי גוף ירחף בתוך נוזל (לא יצוף ולא ישקע)?",
    options: [
      "כשצפיפותו גבוהה מצפיפות הנוזל",
      "כשצפיפותו נמוכה מצפיפות הנוזל",
      "כשצפיפותו שווה בדיוק לצפיפות הנוזל",
      "זה בלתי אפשרי"
    ],
    correctAnswer: 2,
    explanation: "גוף ירחף כשצפיפותו שווה בדיוק לצפיפות הנוזל.",
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_sum_25",
    question: "מהי שיטת דחיקת המים?",
    options: [
      "שיטה לחימום מים",
      "שיטה למדידת נפח של גוף בעל צורה לא הנדסית",
      "שיטה לקירור מים",
      "שיטה לסינון מים"
    ],
    correctAnswer: 1,
    explanation: "שיטת דחיקת המים מאפשרת למדוד נפח של גופים בצורה לא סדירה.",
    category: ModuleId.DisplacementMethod
  },
  {
    id: "c3_sum_26",
    question: "כיצד קוראים נכון מפלס מים במשורה?",
    options: [
      "מהחלק העליון של פני המים",
      "מתחתית הקעור (מניסקוס), בגובה העיניים",
      "מלמעלה",
      "לא משנה מאיפה"
    ],
    correctAnswer: 1,
    explanation: "יש להסתכל בתחתית הקעור (מניסקוס) בגובה העיניים לקריאה מדויקת.",
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_sum_27",
    question: "מהו מגדל הצפיפות?",
    options: [
      "מגדל בנוי מנוזלים בצפיפויות שונות שלא מתערבבים",
      "מגדל גבוה מאוד",
      "כלי למדידת צפיפות",
      "מגדל בנוי מקוביות"
    ],
    correctAnswer: 0,
    explanation: "מגדל צפיפות נוצר כשמוזגים נוזלים בצפיפויות שונות - הם מסתדרים בשכבות.",
    category: ModuleId.DensityTower
  },
  {
    id: "c3_sum_28",
    question: "במגדל צפיפות, איפה יהיה הנוזל הצפוף ביותר?",
    options: [
      "למעלה",
      "באמצע",
      "למטה",
      "לא משנה"
    ],
    correctAnswer: 2,
    explanation: "הנוזל הצפוף ביותר ישקע לתחתית המגדל.",
    category: ModuleId.DensityTower
  },
  {
    id: "c3_sum_29",
    question: "במגדל צפיפות, איפה יהיה הנוזל הפחות צפוף?",
    options: [
      "למעלה",
      "באמצע",
      "למטה",
      "לא משנה"
    ],
    correctAnswer: 0,
    explanation: "הנוזל הפחות צפוף יצוף למעלה.",
    category: ModuleId.DensityTower
  },
  {
    id: "c3_sum_30",
    question: 'צפיפות המים היא 1 גרם/סמ"ק. גוף צפיפותו 1.5 גרם/סמ"ק. מה יקרה?',
    options: [
      "הגוף יצוף",
      "הגוף ישקע",
      "הגוף ירחף",
      "הגוף יתמוסס"
    ],
    correctAnswer: 1,
    explanation: "1.5 > 1, לכן הגוף צפוף יותר מהמים וישקע.",
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_sum_31",
    question: 'גוף מסתו 60 גרם ונפחו 20 סמ"ק. מה צפיפותו?',
    options: ['3 גרם/סמ"ק', '40 גרם/סמ"ק', '80 גרם/סמ"ק', '0.33 גרם/סמ"ק'],
    correctAnswer: 0,
    explanation: 'צפיפות = 60 ÷ 20 = 3 גרם/סמ"ק',
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_32",
    question: "מדוע שמן צף על מים?",
    options: [
      "כי שמן קל יותר",
      "כי צפיפות השמן נמוכה מצפיפות המים",
      "כי שמן שקוף",
      "כי המים כבדים יותר"
    ],
    correctAnswer: 1,
    explanation: "שמן צף כי צפיפותו נמוכה יותר מצפיפות המים.",
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_sum_33",
    question: "איזה כלי משמש למדידת נפח נוזלים?",
    options: ["מאזניים", "משורה", "סרגל", "מד כוח"],
    correctAnswer: 1,
    explanation: "משורה היא כלי זכוכית עם סולם למדידת נפח נוזלים.",
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_sum_34",
    question: "איזה כלי משמש למדידת מסה?",
    options: ["משורה", "מאזני כפות", "סרגל", "טרמומטר"],
    correctAnswer: 1,
    explanation: "מאזני כפות משמשים למדידת מסה על ידי השוואה למשקולות ידועות.",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_sum_35",
    question: "איזה כלי משמש למדידת משקל?",
    options: ["מאזני כפות", "מד כוח (דינמומטר)", "משורה", "סרגל"],
    correctAnswer: 1,
    explanation: "מד כוח (דינמומטר) מודד את כוח הכבידה על הגוף - המשקל.",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_sum_36",
    question: "מהי צפיפות?",
    options: [
      "כמות החומר בגוף",
      "היחס בין המסה לנפח",
      "כוח הכבידה על הגוף",
      "המקום שגוף תופס"
    ],
    correctAnswer: 1,
    explanation: "צפיפות היא היחס בין המסה לנפח - כמה מסה דחוסה בכל יחידת נפח.",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_37",
    question: "האם צפיפות משתנה לפי כמות החומר?",
    options: [
      "כן, יותר חומר = יותר צפיפות",
      "לא, צפיפות היא תכונה של החומר ולא תלויה בכמות",
      "רק בנוזלים",
      "רק במוצקים"
    ],
    correctAnswer: 1,
    explanation: "צפיפות היא תכונה מזהה של חומר - כל כמות מאותו חומר תהיה באותה צפיפות.",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_sum_38",
    question: "חפץ מסתו 100 גרם על כדור הארץ. מה יהיה משקלו בניוטון? (g=10)",
    options: ["10 ניוטון", "1 ניוטון", "100 ניוטון", "1000 ניוטון"],
    correctAnswer: 1,
    explanation: "משקל = מסה × תאוצת כבידה = 0.1 ק\"ג × 10 = 1 ניוטון",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_sum_39",
    question: 'נפח קוביה עם צלע 2 ס"מ הוא:',
    options: ['4 סמ"ק', '6 סמ"ק', '8 סמ"ק', '2 סמ"ק'],
    correctAnswer: 2,
    explanation: 'נפח קוביה = צלע³ = 2 × 2 × 2 = 8 סמ"ק',
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_sum_40",
    question: "מדוע קרח צף על מים?",
    options: [
      "כי קרח קר יותר",
      "כי צפיפות הקרח נמוכה מצפיפות המים",
      "כי קרח לבן",
      "כי קרח מוצק"
    ],
    correctAnswer: 1,
    explanation: "כשמים קופאים, החלקיקים מתארגנים במבנה פתוח יותר והצפיפות יורדת.",
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
