import { ModuleId, Question } from "../types";

// =============================================================================
// Chapter 3: Physical Measurements (גדלים פיזיקליים ומדידות)
// Topics: Volume, Mass, Weight, Density, Buoyancy, Displacement Method
// =============================================================================

export const CHAPTER3_INTRO_QUESTIONS: Question[] = [
  {
    id: "c3_i1",
    question: 'מה מהבאים הוא "גוף"?',
    options: ["ברזל", "כדורגל", "מים", "פלסטיק"],
    correctAnswer: 1,
    explanation: "כדורגל הוא גוף כי יש לו צורה מוגדרת. ברזל, מים ופלסטיק הם שמות של חומרים.",
    category: ModuleId.Chapter3Intro
  },
  {
    id: "c3_i2",
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
  },
  {
    id: "c3_i3",
    question: "מהם הגדלים הפיזיקליים העיקריים שנלמד בפרק זה?",
    options: [
      "טמפרטורה ולחץ",
      "נפח, מסה, משקל וצפיפות",
      "מהירות ותאוצה",
      "צבע וריח"
    ],
    correctAnswer: 1,
    explanation: "בפרק זה נלמד על נפח, מסה, משקל וצפיפות.",
    category: ModuleId.Chapter3Intro
  },
  {
    id: "c3_i4",
    question: "מדוע חשוב למדוד גדלים פיזיקליים במדע?",
    options: [
      "רק כדי לקבל ציון",
      "כדי לתאר תופעות בצורה מדויקת ולהשוות ביניהן",
      "כי מדענים אוהבים מספרים",
      "כדי לחשב מחירים"
    ],
    correctAnswer: 1,
    explanation: "מדידות מאפשרות תיאור מדויק של תופעות והשוואה בין גופים שונים.",
    category: ModuleId.Chapter3Intro
  }
];

export const VOLUME_MEASUREMENT_QUESTIONS: Question[] = [
  {
    id: "c3_v1",
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
    id: "c3_v2",
    question: 'כמה מ"ל יש ב-2.5 ליטר?',
    options: ['25 מ"ל', '250 מ"ל', '2,500 מ"ל', '0.0025 מ"ל'],
    correctAnswer: 2,
    explanation: 'כדי לעבור מליטר למ"ל כופלים ב-1,000. לכן 2.5 × 1000 = 2,500.',
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_v3",
    question: 'סנטימטר מעוקב (סמ"ק) אחד שווה בדיוק ל:',
    options: ["1 ליטר", '1 מ"ל', '10 מ"ל', '1 ק"ג'],
    correctAnswer: 1,
    explanation: 'זוהי יחידת מידה זהה: 1 סמ"ק = 1 מ"ל.',
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_v4",
    question: 'כמה מ"ל יש בליטר אחד?',
    options: ['10 מ"ל', '100 מ"ל', '1,000 מ"ל', '10,000 מ"ל'],
    correctAnswer: 2,
    explanation: '1 ליטר = 1,000 מ"ל = 1,000 סמ"ק',
    category: ModuleId.VolumeMeasurement
  },
  {
    id: "c3_v5",
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
    id: "c3_v6",
    question: "באיזה כלי מודדים נפח של נוזל?",
    options: ["מאזניים", "משורה", "סרגל", "מד כוח"],
    correctAnswer: 1,
    explanation: "משורה היא כלי זכוכית עם סולם למדידת נפח נוזלים.",
    category: ModuleId.VolumeMeasurement
  }
];

export const DISPLACEMENT_METHOD_QUESTIONS: Question[] = [
  {
    id: "c3_dm1",
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
    id: "c3_dm2",
    question: "מהי הדרך הנכונה למדוד נפח של מפתח מתכת?",
    options: [
      "אורך × רוחב × גובה",
      "שימוש במאזני כפות",
      "שיטת דחיקת המים במשורה",
      "מד כוח"
    ],
    correctAnswer: 2,
    explanation: "מפתח הוא גוף בעל צורה לא הנדסית, לכן משתמשים בדחיקת מים.",
    category: ModuleId.DisplacementMethod
  },
  {
    id: "c3_dm3",
    question: 'הכנסנו אבן למשורה עם 50 מ"ל מים. מפלס המים עלה ל-65 מ"ל. מה נפח האבן?',
    options: ['65 מ"ל', '50 מ"ל', '15 מ"ל', '115 מ"ל'],
    correctAnswer: 2,
    explanation: 'נפח הגוף = נפח אחרי - נפח לפני = 65 - 50 = 15 מ"ל',
    category: ModuleId.DisplacementMethod
  },
  {
    id: "c3_dm4",
    question: "מי גילה את עיקרון דחיקת המים?",
    options: ["ניוטון", "אינשטיין", "ארכימדס", "גלילאו"],
    correctAnswer: 2,
    explanation: "ארכימדס גילה את עיקרון דחיקת המים, לפי האגדה, באמבטיה.",
    category: ModuleId.DisplacementMethod
  },
  {
    id: "c3_dm5",
    question: 'במשורה יש 80 מ"ל מים. טבלנו גוף ומפלס המים עלה ל-95 מ"ל. מה נפח הגוף?',
    options: ['80 מ"ל', '95 מ"ל', '15 מ"ל', '175 מ"ל'],
    correctAnswer: 2,
    explanation: 'נפח הגוף = 95 - 80 = 15 מ"ל',
    category: ModuleId.DisplacementMethod
  }
];

export const MASS_INTRO_QUESTIONS: Question[] = [
  {
    id: "c3_mi1",
    question: "מהי מסה?",
    options: [
      "כוח הכבידה על הגוף",
      "כמות החומר בגוף",
      "נפח הגוף",
      "צפיפות הגוף"
    ],
    correctAnswer: 1,
    explanation: "מסה היא כמות החומר שבגוף.",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_mi2",
    question: "באיזו יחידה מודדים מסה?",
    options: ["ניוטון", "קילוגרם או גרם", "ליטר", "מטר"],
    correctAnswer: 1,
    explanation: "מסה נמדדת בקילוגרם או בגרם.",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_mi3",
    question: "באיזה כלי מודדים מסה?",
    options: ["מד כוח", "משורה", "מאזני כפות", "טרמומטר"],
    correctAnswer: 2,
    explanation: "מאזני כפות משווים בין מסות (גוף מול משקולות ידועות).",
    category: ModuleId.MassIntro
  },
  {
    id: "c3_mi4",
    question: "כמה גרם יש בקילוגרם אחד?",
    options: ["10 גרם", "100 גרם", "1,000 גרם", "10,000 גרם"],
    correctAnswer: 2,
    explanation: '1 ק"ג = 1,000 גרם',
    category: ModuleId.MassIntro
  },
  {
    id: "c3_mi5",
    question: "האם מסה משתנה ממקום למקום?",
    options: [
      "כן, תלוי בטמפרטורה",
      "כן, תלוי בכבידה",
      "לא, מסה קבועה בכל מקום",
      "רק בחלל"
    ],
    correctAnswer: 2,
    explanation: "מסה היא כמות החומר ואינה משתנה ממקום למקום.",
    category: ModuleId.MassIntro
  }
];

export const MASS_VS_WEIGHT_QUESTIONS: Question[] = [
  {
    id: "c3_mw1",
    question: "איפה המסה של אסטרונאוט תהיה גדולה יותר?",
    options: ["על כדור הארץ", "על הירח", "בחלל הריק", "המסה תהיה זהה בכל מקום"],
    correctAnswer: 3,
    explanation: "מסה היא כמות החומר והיא לא משתנה ממקום למקום.",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_mw2",
    question: "מהו המכשיר למדידת משקל?",
    options: ["מאזני כפות", "משורה", "מאזני קפיץ (מד כוח)", "סרגל"],
    correctAnswer: 2,
    explanation: "משקל הוא כוח, ולכן מודדים אותו בעזרת מאזני קפיץ (דינמומטר).",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_mw3",
    question: "מהי יחידת המידה של משקל בפיזיקה?",
    options: ["קילוגרם", "גרם", "ניוטון", "ליטר"],
    correctAnswer: 2,
    explanation: "משקל הוא כוח הכבידה, ובפיזיקה כוח נמדד בניוטון (N).",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_mw4",
    question: "מהו משקל?",
    options: [
      "כמות החומר בגוף",
      "כוח הכבידה הפועל על הגוף",
      "נפח הגוף",
      "צפיפות הגוף"
    ],
    correctAnswer: 1,
    explanation: "משקל הוא כוח הכבידה הפועל על הגוף.",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_mw5",
    question: "אסטרונאוט במשקל 600 ניוטון על כדור הארץ טס לירח. מה ישתנה?",
    options: [
      "רק המסה תרד",
      "רק המשקל ירד (כי כוח הכבידה חלש יותר)",
      "גם המסה וגם המשקל ירדו",
      "שניהם יישארו זהים"
    ],
    correctAnswer: 1,
    explanation: "מסה לא משתנה. משקל ירד כי הכבידה בירח חלשה יותר.",
    category: ModuleId.MassVsWeight
  },
  {
    id: "c3_mw6",
    question: "חפץ מסתו 100 גרם על כדור הארץ. מה יהיה משקלו בניוטון? (g=10)",
    options: ["10 ניוטון", "1 ניוטון", "100 ניוטון", "1000 ניוטון"],
    correctAnswer: 1,
    explanation: 'משקל = מסה × תאוצת כבידה = 0.1 ק"ג × 10 = 1 ניוטון',
    category: ModuleId.MassVsWeight
  }
];

export const AIR_HAS_MASS_QUESTIONS: Question[] = [
  {
    id: "c3_ahm1",
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
    id: "c3_ahm2",
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
    id: "c3_ahm3",
    question: "מדוע בלון מנופח כבד יותר מבלון ריק?",
    options: [
      "כי הגומי נמתח",
      "כי האוויר שבתוכו מוסיף מסה",
      "כי הבלון מתחמם",
      "כי הבלון גדול יותר"
    ],
    correctAnswer: 1,
    explanation: "האוויר הוא חומר ויש לו מסה, לכן הוא מוסיף למשקל הבלון.",
    category: ModuleId.AirHasMass
  },
  {
    id: "c3_ahm4",
    question: "האם אוויר הוא חומר?",
    options: [
      "לא, כי לא רואים אותו",
      "כן, כי יש לו מסה והוא תופס נפח",
      "רק בתנאים מיוחדים",
      "רק כשהוא קר"
    ],
    correctAnswer: 1,
    explanation: "אוויר הוא חומר - יש לו מסה ונפח.",
    category: ModuleId.AirHasMass
  }
];

export const DENSITY_DEEP_QUESTIONS: Question[] = [
  {
    id: "c3_dd1",
    question: 'אם צפיפות המים היא 1 גרם/סמ"ק, מה יקרה לשמן שצפיפותו 0.9 גרם/סמ"ק?',
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
    id: "c3_dd2",
    question: "איך מחשבים צפיפות?",
    options: ["מסה כפול נפח", "נפח חלקי מסה", "מסה חלקי נפח", "אורך כפול רוחב"],
    correctAnswer: 2,
    explanation: "הנוסחה לצפיפות היא מסה חלקי נפח (d = m/V).",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_dd3",
    question: "לשני גופים העשויים מאותו חומר בדיוק יש:",
    options: [
      "אותה מסה תמיד",
      "אותו נפח תמיד",
      "אותה צפיפות תמיד",
      "אותו משקל תמיד"
    ],
    correctAnswer: 2,
    explanation: "צפיפות היא תכונה מזהה של חומר, לכן לכל כמות של אותו חומר תהיה אותה צפיפות.",
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_dd4",
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
    id: "c3_dd5",
    question: 'גוף מסתו 200 גרם ונפחו 100 סמ"ק. מה צפיפותו?',
    options: ['2 גרם/סמ"ק', '0.5 גרם/סמ"ק', '20,000 גרם/סמ"ק', '100 גרם/סמ"ק'],
    correctAnswer: 0,
    explanation: 'צפיפות = מסה ÷ נפח = 200 ÷ 100 = 2 גרם/סמ"ק',
    category: ModuleId.DensityDeep
  },
  {
    id: "c3_dd6",
    question: "מהי יחידת הצפיפות הנפוצה?",
    options: ['ק"ג', "ניוטון", 'גרם לסמ"ק (או ק"ג/ליטר)', 'סמ"ק'],
    correctAnswer: 2,
    explanation: "צפיפות = מסה/נפח, לכן היחידות הן יחידות מסה חלקי יחידות נפח.",
    category: ModuleId.DensityDeep
  }
];

export const BUOYANCY_QUESTIONS: Question[] = [
  {
    id: "c3_b1",
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
    id: "c3_b2",
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
    id: "c3_b3",
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
    id: "c3_b4",
    question: "למה ספינת מתכת ענקית צפה למרות שמתכת שוקעת במים?",
    options: [
      "כי הספינה צבועה",
      "כי הצפיפות הממוצעת של הספינה (כולל האוויר בתוכה) נמוכה מצפיפות המים",
      "כי יש לספינה מנוע",
      "כי המים מלוחים"
    ],
    correctAnswer: 1,
    explanation: "הספינה חלולה ומלאה אוויר, לכן הצפיפות הממוצעת שלה נמוכה מהמים והיא צפה.",
    category: ModuleId.Buoyancy
  },
  {
    id: "c3_b5",
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
    id: "c3_b6",
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

export const DENSITY_TOWER_QUESTIONS: Question[] = [
  {
    id: "c3_dt1",
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
    id: "c3_dt2",
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
    id: "c3_dt3",
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
    id: "c3_dt4",
    question: "מדוע השכבות במגדל צפיפות לא מתערבבות?",
    options: [
      "כי הן בצבעים שונים",
      "כי יש להן צפיפויות שונות והן לא מסיסות זו בזו",
      "כי הן קרות",
      "כי הן חמות"
    ],
    correctAnswer: 1,
    explanation: "הנוזלים לא מתערבבים כי יש להם צפיפויות שונות והם לא מסיסים זה בזה.",
    category: ModuleId.DensityTower
  },
  {
    id: "c3_dt5",
    question: "אם נזרוק גולה לתוך מגדל צפיפות, איפה היא תנוח?",
    options: [
      "תמיד בתחתית",
      "תמיד בראש",
      "על השכבה שצפיפותה קרובה לצפיפות הגולה",
      "באמצע בדיוק"
    ],
    correctAnswer: 2,
    explanation: "הגולה תשקע עד שתגיע לשכבה שצפיפותה גבוהה יותר מצפיפות הגולה.",
    category: ModuleId.DensityTower
  }
];

// =============================================================================
// Chapter 3 Summary Questions (40 questions)
// =============================================================================

export const CHAPTER3_SUMMARY_QUESTIONS: Question[] = [
  // Volume (1-8)
  {
    id: "c3_sum_1",
    question: "מהו נפח?",
    options: [
      "כמות החומר בגוף",
      "המקום שגוף תופס במרחב",
      "כוח המשיכה על הגוף",
      "מהירות התנועה של הגוף"
    ],
    correctAnswer: 1,
    explanation: "נפח הוא המקום התלת-ממדי שגוף תופס במרחב.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_2",
    question: 'כמה מ"ל יש בליטר אחד?',
    options: ['10 מ"ל', '100 מ"ל', '1,000 מ"ל', '10,000 מ"ל'],
    correctAnswer: 2,
    explanation: '1 ליטר = 1,000 מ"ל',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_3",
    question: 'נפח של קוביה עם צלע 3 ס"מ הוא:',
    options: ['9 סמ"ק', '18 סמ"ק', '27 סמ"ק', '6 סמ"ק'],
    correctAnswer: 2,
    explanation: 'נפח קוביה = צלע³ = 3 × 3 × 3 = 27 סמ"ק',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_4",
    question: "באיזה כלי מודדים נפח של נוזל?",
    options: ["מאזניים", "משורה", "סרגל", "מד כוח"],
    correctAnswer: 1,
    explanation: "משורה היא כלי למדידת נפח נוזלים.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_5",
    question: "כיצד קוראים מפלס מים במשורה?",
    options: [
      "מהחלק העליון",
      "מתחתית הקעור (מניסקוס), בגובה העיניים",
      "מלמעלה",
      "לא משנה"
    ],
    correctAnswer: 1,
    explanation: "יש להסתכל בתחתית הקעור בגובה העיניים.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_6",
    question: 'הכנסנו אבן למשורה עם 50 מ"ל מים. מפלס המים עלה ל-65 מ"ל. מה נפח האבן?',
    options: ['65 מ"ל', '50 מ"ל', '15 מ"ל', '115 מ"ל'],
    correctAnswer: 2,
    explanation: 'נפח = 65 - 50 = 15 מ"ל',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_7",
    question: "מתי משתמשים בשיטת דחיקת המים?",
    options: [
      "תמיד",
      "למדידת נפח גוף בצורה לא סדירה",
      "למדידת מסה",
      "למדידת משקל"
    ],
    correctAnswer: 1,
    explanation: "שיטת דחיקת המים מתאימה לגופים שלא ניתן למדוד אותם בסרגל.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_8",
    question: 'נפח קוביה עם צלע 2 ס"מ הוא:',
    options: ['4 סמ"ק', '6 סמ"ק', '8 סמ"ק', '2 סמ"ק'],
    correctAnswer: 2,
    explanation: 'נפח = 2 × 2 × 2 = 8 סמ"ק',
    category: ModuleId.Summary
  },

  // Mass (9-16)
  {
    id: "c3_sum_9",
    question: "מהי מסה?",
    options: [
      "כמות החומר בגוף",
      "כוח הכבידה על הגוף",
      "נפח הגוף",
      "צפיפות הגוף"
    ],
    correctAnswer: 0,
    explanation: "מסה היא כמות החומר שבגוף.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_10",
    question: "באיזו יחידה מודדים מסה?",
    options: ["ניוטון", "קילוגרם או גרם", "ליטר", "מטר"],
    correctAnswer: 1,
    explanation: "מסה נמדדת בקילוגרם או בגרם.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_11",
    question: "באיזה כלי מודדים מסה?",
    options: ["מד כוח", "משורה", "מאזני כפות", "טרמומטר"],
    correctAnswer: 2,
    explanation: "מאזני כפות משמשים למדידת מסה.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_12",
    question: "כמה גרם יש בקילוגרם אחד?",
    options: ["10 גרם", "100 גרם", "1,000 גרם", "10,000 גרם"],
    correctAnswer: 2,
    explanation: '1 ק"ג = 1,000 גרם',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_13",
    question: "האם מסה משתנה ממקום למקום?",
    options: ["כן", "לא, מסה קבועה", "רק בחלל", "תלוי בטמפרטורה"],
    correctAnswer: 1,
    explanation: "מסה היא כמות החומר ואינה משתנה ממקום למקום.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_14",
    question: "האם לאוויר יש מסה?",
    options: ["לא", "כן", "רק כשהוא דחוס", "רק כשהוא חם"],
    correctAnswer: 1,
    explanation: "לאוויר יש מסה - ניתן להוכיח זאת על ידי שקילת בלון מנופח.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_15",
    question: "איך מוכיחים שלאוויר יש מסה?",
    options: [
      "מסתכלים עליו",
      "שוקלים בלון מנופח מול בלון ריק",
      "מחממים אותו",
      "מקררים אותו"
    ],
    correctAnswer: 1,
    explanation: "בלון מנופח שוקל יותר מבלון ריק.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_16",
    question: "מהו משקל?",
    options: [
      "כמות החומר בגוף",
      "כוח הכבידה הפועל על הגוף",
      "נפח הגוף",
      "צפיפות הגוף"
    ],
    correctAnswer: 1,
    explanation: "משקל הוא כוח הכבידה הפועל על הגוף.",
    category: ModuleId.Summary
  },

  // Weight (17-22)
  {
    id: "c3_sum_17",
    question: "באיזו יחידה מודדים משקל?",
    options: ["קילוגרם", "ניוטון", "ליטר", 'סמ"ק'],
    correctAnswer: 1,
    explanation: "משקל הוא כוח, ולכן נמדד בניוטון.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_18",
    question: "באיזה כלי מודדים משקל?",
    options: ["מאזני כפות", "מד כוח (דינמומטר)", "משורה", "סרגל"],
    correctAnswer: 1,
    explanation: "מד כוח מודד את כוח הכבידה על הגוף.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_19",
    question: "האם משקל משתנה ממקום למקום?",
    options: ["לא", "כן, תלוי בכבידה", "רק על כדור הארץ", "תלוי במסה"],
    correctAnswer: 1,
    explanation: "משקל משתנה כי הוא תלוי בכוח הכבידה שמשתנה ממקום למקום.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_20",
    question: "אסטרונאוט על הירח - מה ישתנה?",
    options: [
      "רק המסה תרד",
      "רק המשקל ירד",
      "גם המסה וגם המשקל ירדו",
      "שום דבר"
    ],
    correctAnswer: 1,
    explanation: "מסה נשארת קבועה. משקל יורד כי הכבידה בירח חלשה יותר.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_21",
    question: "חפץ מסתו 100 גרם. מה משקלו בניוטון? (g=10)",
    options: ["10 ניוטון", "1 ניוטון", "100 ניוטון", "0.1 ניוטון"],
    correctAnswer: 1,
    explanation: 'משקל = 0.1 ק"ג × 10 = 1 ניוטון',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_22",
    question: "מה ההבדל בין מסה למשקל?",
    options: [
      "אין הבדל",
      "מסה היא כמות חומר (קבועה), משקל הוא כוח כבידה (משתנה)",
      "מסה נמדדת בניוטון",
      "משקל נמדד בגרם"
    ],
    correctAnswer: 1,
    explanation: "מסה היא כמות חומר וקבועה. משקל הוא כוח כבידה ומשתנה לפי המיקום.",
    category: ModuleId.Summary
  },

  // Density (23-32)
  {
    id: "c3_sum_23",
    question: "מהי צפיפות?",
    options: [
      "כמות החומר בגוף",
      "היחס בין המסה לנפח",
      "כוח הכבידה על הגוף",
      "המקום שגוף תופס"
    ],
    correctAnswer: 1,
    explanation: "צפיפות היא היחס בין המסה לנפח.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_24",
    question: "מה הנוסחה לחישוב צפיפות?",
    options: [
      "צפיפות = מסה × נפח",
      "צפיפות = מסה ÷ נפח",
      "צפיפות = נפח ÷ מסה",
      "צפיפות = מסה + נפח"
    ],
    correctAnswer: 1,
    explanation: "צפיפות = מסה חלקי נפח (ρ = m/V).",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_25",
    question: "מהי יחידת הצפיפות?",
    options: ['ק"ג', "ניוטון", 'גרם/סמ"ק', 'סמ"ק'],
    correctAnswer: 2,
    explanation: "צפיפות = מסה/נפח, לכן היחידות הן גרם/סמ\"ק.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_26",
    question: 'גוף מסתו 200 גרם ונפחו 100 סמ"ק. מה צפיפותו?',
    options: ['2 גרם/סמ"ק', '0.5 גרם/סמ"ק', '20,000 גרם/סמ"ק', '300 גרם/סמ"ק'],
    correctAnswer: 0,
    explanation: 'צפיפות = 200 ÷ 100 = 2 גרם/סמ"ק',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_27",
    question: 'גוף מסתו 60 גרם ונפחו 20 סמ"ק. מה צפיפותו?',
    options: ['3 גרם/סמ"ק', '40 גרם/סמ"ק', '80 גרם/סמ"ק', '0.33 גרם/סמ"ק'],
    correctAnswer: 0,
    explanation: 'צפיפות = 60 ÷ 20 = 3 גרם/סמ"ק',
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_28",
    question: "האם צפיפות משתנה לפי כמות החומר?",
    options: [
      "כן, יותר חומר = יותר צפיפות",
      "לא, צפיפות היא תכונה קבועה של החומר",
      "רק בנוזלים",
      "רק במוצקים"
    ],
    correctAnswer: 1,
    explanation: "צפיפות היא תכונה מזהה של חומר ולא תלויה בכמות.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_29",
    question: "שני גופים מאותו חומר. מה זהה ביניהם?",
    options: ["המסה", "הנפח", "הצפיפות", "המשקל"],
    correctAnswer: 2,
    explanation: "צפיפות היא תכונה מזהה של חומר.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_30",
    question: 'צפיפות המים היא 1 גרם/סמ"ק. גוף צפיפותו 0.8. מה יקרה?',
    options: ["הגוף ישקע", "הגוף יצוף", "הגוף ירחף", "הגוף יתמוסס"],
    correctAnswer: 1,
    explanation: "0.8 < 1, לכן הגוף פחות צפוף מהמים ויצוף.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_31",
    question: 'צפיפות המים היא 1 גרם/סמ"ק. גוף צפיפותו 1.5. מה יקרה?',
    options: ["הגוף יצוף", "הגוף ישקע", "הגוף ירחף", "הגוף יתמוסס"],
    correctAnswer: 1,
    explanation: "1.5 > 1, לכן הגוף צפוף יותר מהמים וישקע.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_32",
    question: "מתי גוף ירחף בנוזל?",
    options: [
      "כשצפיפותו גבוהה מהנוזל",
      "כשצפיפותו נמוכה מהנוזל",
      "כשצפיפותו שווה בדיוק לנוזל",
      "לעולם לא"
    ],
    correctAnswer: 2,
    explanation: "גוף ירחף כשצפיפותו שווה בדיוק לצפיפות הנוזל.",
    category: ModuleId.Summary
  },

  // Buoyancy and Density Tower (33-40)
  {
    id: "c3_sum_33",
    question: "מדוע שמן צף על מים?",
    options: [
      "כי שמן קל יותר",
      "כי צפיפות השמן נמוכה מצפיפות המים",
      "כי שמן שקוף",
      "כי המים כבדים"
    ],
    correctAnswer: 1,
    explanation: "שמן צף כי צפיפותו נמוכה מהמים.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_34",
    question: "מדוע קרח צף על מים?",
    options: [
      "כי קרח קר",
      "כי צפיפות הקרח נמוכה מהמים",
      "כי קרח לבן",
      "כי קרח מוצק"
    ],
    correctAnswer: 1,
    explanation: "כשמים קופאים, החלקיקים מתארגנים במבנה פתוח והצפיפות יורדת.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_35",
    question: "מדוע ספינת מתכת צפה?",
    options: [
      "כי היא צבועה",
      "כי הצפיפות הממוצעת שלה (כולל האוויר) נמוכה מהמים",
      "כי יש לה מנוע",
      "כי המים מלוחים"
    ],
    correctAnswer: 1,
    explanation: "הספינה חלולה ומלאה אוויר, לכן צפיפותה הממוצעת נמוכה מהמים.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_36",
    question: "מהו מגדל הצפיפות?",
    options: [
      "מגדל בנוי מנוזלים בצפיפויות שונות",
      "מגדל גבוה מאוד",
      "כלי מדידה",
      "מגדל מקוביות"
    ],
    correctAnswer: 0,
    explanation: "מגדל צפיפות נוצר כשמוזגים נוזלים בצפיפויות שונות.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_37",
    question: "במגדל צפיפות, איפה הנוזל הצפוף ביותר?",
    options: ["למעלה", "באמצע", "למטה", "לא משנה"],
    correctAnswer: 2,
    explanation: "הנוזל הצפוף ביותר שוקע לתחתית.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_38",
    question: "במגדל צפיפות, איפה הנוזל הפחות צפוף?",
    options: ["למעלה", "באמצע", "למטה", "לא משנה"],
    correctAnswer: 0,
    explanation: "הנוזל הפחות צפוף צף למעלה.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_39",
    question: 'גוף צפיפותו 0.7 גרם/סמ"ק הונח במים. מה יקרה?',
    options: ["ישקע", "יצוף", "ירחף", "יתמוסס"],
    correctAnswer: 1,
    explanation: "0.7 < 1, לכן הגוף יצוף.",
    category: ModuleId.Summary
  },
  {
    id: "c3_sum_40",
    question: 'גוף מסתו 500 גרם ונפחו 250 סמ"ק. מה צפיפותו?',
    options: ['0.5 גרם/סמ"ק', '2 גרם/סמ"ק', '125,000 גרם/סמ"ק', '750 גרם/סמ"ק'],
    correctAnswer: 1,
    explanation: 'צפיפות = 500 ÷ 250 = 2 גרם/סמ"ק',
    category: ModuleId.Summary
  }
];

// =============================================================================
// Chapter 3 Questions Record
// =============================================================================

export const CHAPTER3_QUESTIONS: Record<string, Question[]> = {
  [ModuleId.Chapter3Intro]: CHAPTER3_INTRO_QUESTIONS,
  [ModuleId.VolumeMeasurement]: VOLUME_MEASUREMENT_QUESTIONS,
  [ModuleId.DisplacementMethod]: DISPLACEMENT_METHOD_QUESTIONS,
  [ModuleId.MassIntro]: MASS_INTRO_QUESTIONS,
  [ModuleId.MassVsWeight]: MASS_VS_WEIGHT_QUESTIONS,
  [ModuleId.AirHasMass]: AIR_HAS_MASS_QUESTIONS,
  [ModuleId.DensityDeep]: DENSITY_DEEP_QUESTIONS,
  [ModuleId.Buoyancy]: BUOYANCY_QUESTIONS,
  [ModuleId.DensityTower]: DENSITY_TOWER_QUESTIONS,
  [ModuleId.Summary]: CHAPTER3_SUMMARY_QUESTIONS
};
