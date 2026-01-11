import { ModuleId, Question } from "../types";

// =============================================================================
// Chapter 1: Matter and Materials (עולם החומר - תכונות)
// Topics: What is matter, body vs material, material properties, engineering materials
// =============================================================================

export const MATTER_INTRO_QUESTIONS: Question[] = [
  {
    id: "c1_m1_1",
    question: "מהם שני התנאים שחייבים להתקיים כדי שמשהו ייחשב לחומר?",
    options: [
      "יש לו צבע ויש לו ריח",
      "יש לו מסה והוא תופס נפח",
      "אפשר לראות אותו ואפשר לגעת בו",
      "הוא קשה והוא כבד"
    ],
    correctAnswer: 1,
    explanation: "כל דבר שיש לו מסה (שוקל משהו) ותופס נפח (מקום במרחב) נקרא חומר.",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_2",
    question: "האם אוויר נחשב לחומר?",
    options: [
      "לא, כי אי אפשר לראות אותו",
      "כן, כי יש לו מסה והוא תופס מקום",
      "רק אם הוא נמצא בתוך בלון",
      "לא, אוויר הוא אנרגיה"
    ],
    correctAnswer: 1,
    explanation: "אוויר הוא תערובת של גזים, יש לו מסה והוא תופס נפח, לכן הוא חומר.",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_3",
    question: "מה ההבדל בין 'גוף' ל'חומר'?",
    options: [
      "אין הבדל - זה אותו דבר",
      "גוף הוא עצם מוגדר, חומר הוא מה שהגוף עשוי ממנו",
      "גוף הוא רק דבר חי, חומר הוא דבר דומם",
      "חומר גדול יותר מגוף"
    ],
    correctAnswer: 1,
    explanation: "גוף הוא עצם עם גבולות מוגדרים (כמו שולחן), וחומר הוא מה שהגוף עשוי ממנו (כמו עץ).",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_4",
    question: "האם אור נחשב לחומר?",
    options: [
      "כן, כי אפשר לראות אותו",
      "כן, כי הוא מגיע מהשמש",
      "לא, כי אין לו מסה והוא לא תופס נפח",
      "לא, כי הוא שקוף"
    ],
    correctAnswer: 2,
    explanation: "אור הוא אנרגיה, לא חומר. אין לו מסה והוא לא תופס מקום במרחב.",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_5",
    question: "שולחן עשוי מעץ. מה הגוף ומה החומר?",
    options: [
      "הגוף הוא העץ, החומר הוא השולחן",
      "הגוף הוא השולחן, החומר הוא העץ",
      "שניהם גופים",
      "שניהם חומרים"
    ],
    correctAnswer: 1,
    explanation: "השולחן הוא הגוף (העצם המוגדר), והעץ הוא החומר שממנו הוא עשוי.",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_6",
    question: "מה מהבאים הוא חומר?",
    options: ["אור", "צליל", "חום", "אוויר"],
    correctAnswer: 3,
    explanation: "אוויר הוא חומר כי יש לו מסה ונפח. אור, צליל וחום הם צורות של אנרגיה.",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_7",
    question: "בלון מנופח באוויר שוקל יותר מבלון ריק. מה זה מוכיח?",
    options: [
      "שהבלון גמיש",
      "שלאוויר יש מסה",
      "שהבלון עשוי מגומי",
      "שהאוויר חם"
    ],
    correctAnswer: 1,
    explanation: "העובדה שבלון מנופח כבד יותר מוכיחה שלאוויר שבתוכו יש מסה.",
    category: ModuleId.MatterIntro
  },
  {
    id: "c1_m1_8",
    question: "איזה מהמשפטים הבאים נכון?",
    options: [
      "מוצק, נוזל וגז הם שלושת מצבי הצבירה של חומר",
      "רק מוצקים הם חומר",
      "גזים אינם חומר כי לא רואים אותם",
      "חום הוא סוג של חומר"
    ],
    correctAnswer: 0,
    explanation: "חומר יכול להיות במצב מוצק, נוזלי או גזי - כולם חומר כי יש להם מסה ונפח.",
    category: ModuleId.MatterIntro
  }
];

export const MATERIAL_PROPERTIES_QUESTIONS: Question[] = [
  {
    id: "c1_mp_1",
    question: "איזה חומר הוא מוליך חשמל טוב?",
    options: ["עץ", "פלסטיק", "נחושת", "גומי"],
    correctAnswer: 2,
    explanation: "נחושת היא מתכת ומוליכה חשמל מצוין. מתכות הן מוליכות כי יש בהן אלקטרונים חופשיים.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_2",
    question: "מדוע ידיות של סירי בישול עשויות מפלסטיק או עץ?",
    options: [
      "כי הם זולים יותר",
      "כי הם יפים יותר",
      "כי הם מבודדי חום ומונעים כוויות",
      "כי הם חזקים יותר ממתכת"
    ],
    correctAnswer: 2,
    explanation: "פלסטיק ועץ הם מבודדי חום - הם לא מעבירים חום במהירות, ולכן לא נכווים כשאוחזים בהם.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_3",
    question: "איך בודקים איזה חומר קשה יותר?",
    options: [
      "שוקלים את שניהם",
      "בודקים מי מצליח לחרוץ את מי",
      "מודדים את הגודל שלהם",
      "בודקים איזה צבע יותר כהה"
    ],
    correctAnswer: 1,
    explanation: "חומר שמצליח לחרוץ חומר אחר הוא הקשה יותר. יהלום יכול לחרוץ כל חומר כי הוא הקשה ביותר.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_4",
    question: "מדוע כבל חשמלי בנוי מליבת נחושת ומעטפת פלסטיק?",
    options: [
      "כי נחושת זולה ופלסטיק יפה",
      "כי נחושת מוליכה חשמל והפלסטיק מבודד ומגן מהתחשמלות",
      "כי פלסטיק מוליך חשמל והנחושת מגינה",
      "כי שניהם מבודדים"
    ],
    correctAnswer: 1,
    explanation: "נחושת מוליכה את הזרם החשמלי, והפלסטיק מבודד ומונע מאיתנו להתחשמל.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_5",
    question: "איזה מהחומרים הבאים הוא שקוף?",
    options: ["עץ", "מתכת", "זכוכית חלון", "קרטון"],
    correctAnswer: 2,
    explanation: "זכוכית חלון היא שקופה - היא מאפשרת לאור לעבור דרכה לגמרי.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_6",
    question: "מהי מסיסות?",
    options: [
      "היכולת של חומר להתאדות",
      "היכולת של חומר להתמוסס בחומר אחר וליצור תמיסה",
      "היכולת של חומר לשקוע במים",
      "היכולת של חומר להוליך חשמל"
    ],
    correctAnswer: 1,
    explanation: "מסיסות היא היכולת של חומר (כמו סוכר) להתמוסס בחומר אחר (כמו מים) וליצור תערובת אחידה.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_7",
    question: "מה מיוחד ביהלום?",
    options: [
      "הוא מוליך חשמל מצוין",
      "הוא החומר הרך ביותר",
      "הוא החומר הקשה ביותר בטבע",
      "הוא מבודד חום"
    ],
    correctAnswer: 2,
    explanation: "יהלום הוא החומר הקשה ביותר בטבע. הוא יכול לחרוץ כל חומר אחר.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_8",
    question: "מהו ההבדל בין חומר שקוף לחומר אטום?",
    options: [
      "חומר שקוף כבד יותר",
      "חומר שקוף מאפשר לאור לעבור, חומר אטום חוסם אור",
      "חומר אטום יקר יותר",
      "אין הבדל"
    ],
    correctAnswer: 1,
    explanation: "חומר שקוף (כמו זכוכית) מאפשר לאור לעבור, בעוד חומר אטום (כמו עץ) חוסם את האור.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_9",
    question: "מהו חומר חצי-שקוף?",
    options: [
      "חומר שאור לא עובר דרכו",
      "חומר שאור עובר דרכו באופן חלקי",
      "חומר שמחזיר אור",
      "חומר מבריק"
    ],
    correctAnswer: 1,
    explanation: "חומר חצי-שקוף (כמו זכוכית חלבית או נייר דק) מאפשר לחלק מהאור לעבור.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_10",
    question: "מהו ברק מתכתי?",
    options: [
      "צליל שמתכות משמיעות",
      "האופן הייחודי שבו מתכות מחזירות אור",
      "הטמפרטורה של מתכת",
      "המשקל של מתכת"
    ],
    correctAnswer: 1,
    explanation: "ברק מתכתי הוא הזוהר והנצנוץ הייחודיים שמתכות מפגינות כשאור פוגע בהן.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_11",
    question: "האם סוכר מתמוסס במים?",
    options: [
      "לא, הוא שוקע לקרקעית",
      "כן, הוא מתמוסס ויוצר תמיסה שקופה",
      "רק במים רותחים",
      "לא, הוא צף על המים"
    ],
    correctAnswer: 1,
    explanation: "סוכר מתמוסס במים ויוצר תמיסה אחידה ושקופה.",
    category: ModuleId.MaterialProperties
  },
  {
    id: "c1_mp_12",
    question: "האם שמן מתמוסס במים?",
    options: [
      "כן, מיד",
      "לא, הוא צף מעל המים ולא מתערבב",
      "כן, אבל רק בחימום",
      "כן, בבחישה חזקה"
    ],
    correctAnswer: 1,
    explanation: "שמן אינו מתמוסס במים - הוא צף מעליהם כי הוא קל יותר ולא מתערבב איתם.",
    category: ModuleId.MaterialProperties
  }
];

export const ENGINEERING_MATERIALS_QUESTIONS: Question[] = [
  {
    id: "c1_em_1",
    question: "בסיפור 'הזאב ושלושת החזירונים', מדוע בית הלבנים לא נפל?",
    options: [
      "כי הזאב התעייף",
      "כי לבנים הן חומר קשה, יציב ועמיד ללחץ",
      "כי הבית היה קטן",
      "כי החזיר השלישי היה חזק"
    ],
    correctAnswer: 1,
    explanation: "לבנים הן חומר קשה, בעל מסה גבוהה (יציבות) ועמידות מצוינת ללחץ - תכונות שהפכו את הבית לחזק.",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_2",
    question: "מהנדסים בוחרים חומרים על פי:",
    options: [
      "הצבע שלהם בלבד",
      "המחיר שלהם בלבד",
      "התכונות הנדרשות לשימוש",
      "הגודל שלהם"
    ],
    correctAnswer: 2,
    explanation: "בחירת חומרים בהנדסה מתבססת על התכונות הנדרשות: חוזק, משקל, מוליכות, עמידות ועוד.",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_3",
    question: "מדוע גשרים בנויים מפלדה ולא מעץ?",
    options: [
      "כי פלדה יפה יותר",
      "כי פלדה חזקה וגמישה יותר ומתאימה לעומסים כבדים",
      "כי עץ יקר יותר",
      "כי פלדה קלה יותר"
    ],
    correctAnswer: 1,
    explanation: "פלדה חזקה מאוד וגמישה - היא יכולה לשאת עומסים כבדים בלי להישבר.",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_4",
    question: "מדוע לא בונים בתים מזהב?",
    options: [
      "כי זהב לא קיים בטבע",
      "כי זהב יקר מאוד, כבד, ומוליך חום",
      "כי זהב רך מדי",
      "כי זהב לא מבריק"
    ],
    correctAnswer: 1,
    explanation: "למרות שזהב חזק, הוא יקר מאוד, כבד, ומוליך חום (הבית יהיה חם בקיץ וקר בחורף).",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_5",
    question: "מדוע בית הקש של החזיר הראשון קרס בקלות?",
    options: [
      "כי הקש היה רטוב",
      "כי לקש יש חוזק מכני נמוך מאוד ומסה נמוכה",
      "כי הבית היה גדול מדי",
      "כי הזאב היה חזק במיוחד"
    ],
    correctAnswer: 1,
    explanation: "קש הוא חומר עם מסה נמוכה מאוד וחוזק מכני נמוך - לא יכול לעמוד בפני לחץ.",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_6",
    question: "מהו בטון מזוין?",
    options: [
      "בטון צבעוני",
      "שילוב של בטון (עמיד ללחץ) וברזל (עמיד למתיחה)",
      "בטון קל במיוחד",
      "בטון שקוף"
    ],
    correctAnswer: 1,
    explanation: "בטון מזוין משלב בטון (חזק בלחץ) עם מוטות ברזל (חזקים במתיחה) ליצירת חומר חזק במיוחד.",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_7",
    question: "מדוע גורדי שחקים בנויים מפלדה?",
    options: [
      "כי פלדה זולה",
      "כי פלדה חזקה מאוד וקלה יחסית למשקלה",
      "כי פלדה לא מחלידה",
      "כי פלדה שקופה"
    ],
    correctAnswer: 1,
    explanation: "פלדה היא חומר חזק מאוד ביחס למשקלה, מה שמאפשר לבנות מבנים גבוהים.",
    category: ModuleId.EngineeringMaterials
  },
  {
    id: "c1_em_8",
    question: "איזו תכונה חשובה יש לעץ כחומר בנייה?",
    options: [
      "הוא מוליך חשמל",
      "הוא גמיש וקל לעיבוד",
      "הוא לא דליק",
      "הוא הקשה ביותר"
    ],
    correctAnswer: 1,
    explanation: "עץ הוא חומר גמיש, קל לעיבוד וחיתוך, אך הוא דליק ופחות עמיד מחומרים אחרים.",
    category: ModuleId.EngineeringMaterials
  }
];

// =============================================================================
// Chapter 1 Summary Questions (50 questions - ONLY about Chapter 1 topics)
// =============================================================================

export const SUMMARY_QUESTIONS: Question[] = [
  // Matter basics (1-15)
  {
    id: "sum_1",
    question: "מהם שני התנאים להגדרת חומר?",
    options: [
      "צבע וריח",
      "מסה ונפח",
      "טמפרטורה ולחץ",
      "צורה וגודל"
    ],
    correctAnswer: 1,
    explanation: "חומר מוגדר כדבר שיש לו מסה (שוקל משהו) ותופס נפח (מקום במרחב).",
    category: ModuleId.Summary
  },
  {
    id: "sum_2",
    question: "מה ההבדל בין גוף לחומר?",
    options: [
      "אין הבדל",
      "גוף הוא עצם מוגדר, חומר הוא מה שהגוף עשוי ממנו",
      "גוף גדול יותר",
      "חומר תמיד נוזלי"
    ],
    correctAnswer: 1,
    explanation: "שולחן הוא גוף, עץ הוא החומר ממנו הוא עשוי.",
    category: ModuleId.Summary
  },
  {
    id: "sum_3",
    question: "האם אור נחשב לחומר?",
    options: [
      "כן, כי אפשר לראות אותו",
      "כן, כי הוא מגיע מהשמש",
      "לא, כי אין לו מסה ונפח",
      "תלוי בצבע האור"
    ],
    correctAnswer: 2,
    explanation: "אור הוא אנרגיה, לא חומר - אין לו מסה והוא לא תופס מקום.",
    category: ModuleId.Summary
  },
  {
    id: "sum_4",
    question: "האם צליל הוא חומר?",
    options: [
      "כן, כי אפשר לשמוע אותו",
      "לא, צליל הוא אנרגיה",
      "כן, צליל תופס מקום",
      "רק צלילים חזקים"
    ],
    correctAnswer: 1,
    explanation: "צליל הוא אנרגיה המתפשטת בגלים - אין לו מסה ונפח.",
    category: ModuleId.Summary
  },
  {
    id: "sum_5",
    question: "האם חום הוא חומר?",
    options: [
      "כן, כי מרגישים אותו",
      "לא, חום הוא אנרגיה",
      "כן, חום כבד",
      "רק חום גבוה"
    ],
    correctAnswer: 1,
    explanation: "חום הוא צורה של אנרגיה (אנרגיה תרמית), לא חומר.",
    category: ModuleId.Summary
  },
  {
    id: "sum_6",
    question: "כוס עשויה מזכוכית. מה הגוף ומה החומר?",
    options: [
      "הזכוכית היא הגוף, הכוס היא החומר",
      "הכוס היא הגוף, הזכוכית היא החומר",
      "שניהם גופים",
      "שניהם חומרים"
    ],
    correctAnswer: 1,
    explanation: "הכוס היא הגוף (העצם המוגדר), הזכוכית היא החומר שממנו היא עשויה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_7",
    question: "איזה מהבאים הוא חומר?",
    options: [
      "קול מוזיקה",
      "אור שמש",
      "מים",
      "חום האש"
    ],
    correctAnswer: 2,
    explanation: "מים הם חומר - יש להם מסה והם תופסים נפח. השאר הם סוגי אנרגיה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_8",
    question: "כיצד ניתן להוכיח שלאוויר יש מסה?",
    options: [
      "לנשום עמוק",
      "לשקול בלון לפני ואחרי ניפוח",
      "לראות את האוויר",
      "להריח את האוויר"
    ],
    correctAnswer: 1,
    explanation: "בלון מנופח שוקל יותר מבלון ריק, מה שמוכיח שלאוויר יש מסה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_9",
    question: "מהם שלושת מצבי הצבירה של חומר?",
    options: [
      "קשה, רך, גמיש",
      "מוצק, נוזל, גז",
      "חם, קר, פושר",
      "כבד, קל, בינוני"
    ],
    correctAnswer: 1,
    explanation: "חומר יכול להיות במצב מוצק, נוזלי או גזי.",
    category: ModuleId.Summary
  },
  {
    id: "sum_10",
    question: "מטבע עשוי מנחושת. מה הגוף ומה החומר?",
    options: [
      "הנחושת היא הגוף",
      "המטבע הוא הגוף, הנחושת היא החומר",
      "שניהם חומרים",
      "אין הבדל"
    ],
    correctAnswer: 1,
    explanation: "המטבע הוא הגוף, והנחושת היא החומר שממנו הוא עשוי.",
    category: ModuleId.Summary
  },
  {
    id: "sum_11",
    question: "דלת עשויה מעץ. מהו הגוף?",
    options: ["העץ", "הדלת", "שניהם", "אף אחד"],
    correctAnswer: 1,
    explanation: "הדלת היא הגוף - העצם המוגדר עם גבולות ברורים.",
    category: ModuleId.Summary
  },
  {
    id: "sum_12",
    question: "מהו חומר מוצק?",
    options: [
      "חומר שזורם",
      "חומר שיש לו צורה קבועה",
      "חומר שמתפשט לכל הכיוונים",
      "חומר שקוף"
    ],
    correctAnswer: 1,
    explanation: "חומר מוצק שומר על צורה קבועה ולא זורם.",
    category: ModuleId.Summary
  },
  {
    id: "sum_13",
    question: "מהו חומר נוזלי?",
    options: [
      "חומר עם צורה קבועה",
      "חומר שזורם ומקבל את צורת הכלי",
      "חומר שמתפשט לכל המרחב",
      "חומר קשה"
    ],
    correctAnswer: 1,
    explanation: "נוזל זורם ומקבל את צורת הכלי שבו הוא נמצא.",
    category: ModuleId.Summary
  },
  {
    id: "sum_14",
    question: "מהו חומר גזי?",
    options: [
      "חומר עם צורה קבועה",
      "חומר שזורם לקרקעית",
      "חומר שמתפשט וממלא את כל הכלי",
      "חומר כבד"
    ],
    correctAnswer: 2,
    explanation: "גז מתפשט לכל הכיוונים וממלא את כל הנפח הזמין.",
    category: ModuleId.Summary
  },
  {
    id: "sum_15",
    question: "קרח הוא מים במצב:",
    options: ["נוזלי", "גזי", "מוצק", "פלזמה"],
    correctAnswer: 2,
    explanation: "קרח הוא מים במצב מוצק - יש לו צורה קבועה.",
    category: ModuleId.Summary
  },

  // Material Properties (16-35)
  {
    id: "sum_16",
    question: "איזה חומר מוליך חשמל?",
    options: ["עץ", "גומי", "נחושת", "פלסטיק"],
    correctAnswer: 2,
    explanation: "נחושת היא מתכת ומוליכה חשמל מצוין בזכות האלקטרונים החופשיים בה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_17",
    question: "מדוע ידיות סירים עשויות מפלסטיק?",
    options: [
      "כי פלסטיק זול",
      "כי פלסטיק יפה",
      "כי פלסטיק מבודד חום",
      "כי פלסטיק חזק"
    ],
    correctAnswer: 2,
    explanation: "פלסטיק הוא מבודד חום - לא מעביר חום מהסיר ליד ומונע כוויות.",
    category: ModuleId.Summary
  },
  {
    id: "sum_18",
    question: "מהו החומר הקשה ביותר בטבע?",
    options: ["פלדה", "זכוכית", "יהלום", "ברזל"],
    correctAnswer: 2,
    explanation: "יהלום הוא החומר הקשה ביותר - יכול לחרוץ כל חומר אחר.",
    category: ModuleId.Summary
  },
  {
    id: "sum_19",
    question: "איך בודקים קשיות של חומר?",
    options: [
      "שוקלים אותו",
      "מודדים את הטמפרטורה",
      "בודקים איזה חומר מצליח לחרוץ את האחר",
      "מסתכלים על הצבע"
    ],
    correctAnswer: 2,
    explanation: "מבחן החריצה - חומר שמצליח לחרוץ חומר אחר הוא הקשה יותר.",
    category: ModuleId.Summary
  },
  {
    id: "sum_20",
    question: "מהי מסיסות?",
    options: [
      "היכולת להתאדות",
      "היכולת להתמוסס בחומר אחר",
      "היכולת לשקוע",
      "היכולת להוליך חשמל"
    ],
    correctAnswer: 1,
    explanation: "מסיסות היא היכולת של חומר להתמוסס בחומר אחר וליצור תמיסה אחידה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_21",
    question: "מדוע כבל חשמלי בנוי מנחושת ופלסטיק?",
    options: [
      "כי שניהם זולים",
      "נחושת מוליכה חשמל, פלסטיק מבודד ומגן",
      "שניהם מוליכים",
      "שניהם מבודדים"
    ],
    correctAnswer: 1,
    explanation: "הנחושת מוליכה את הזרם, והפלסטיק מבודד ומונע התחשמלות.",
    category: ModuleId.Summary
  },
  {
    id: "sum_22",
    question: "איזה חומר שקוף?",
    options: ["עץ", "מתכת", "זכוכית חלון", "קרטון"],
    correctAnswer: 2,
    explanation: "זכוכית חלון שקופה - מאפשרת לאור לעבור דרכה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_23",
    question: "מהו חומר אטום?",
    options: [
      "חומר שאור עובר דרכו",
      "חומר שחוסם אור לחלוטין",
      "חומר שקוף למחצה",
      "חומר מבריק"
    ],
    correctAnswer: 1,
    explanation: "חומר אטום (כמו עץ או מתכת) לא מאפשר לאור לעבור דרכו.",
    category: ModuleId.Summary
  },
  {
    id: "sum_24",
    question: "מהו חומר חצי-שקוף?",
    options: [
      "חומר שאור לא עובר דרכו כלל",
      "חומר שאור עובר דרכו באופן חלקי",
      "חומר שאור עובר דרכו לגמרי",
      "חומר שמחזיר אור"
    ],
    correctAnswer: 1,
    explanation: "חומר חצי-שקוף מאפשר לאור לעבור חלקית, כמו זכוכית חלבית.",
    category: ModuleId.Summary
  },
  {
    id: "sum_25",
    question: "מהו ברק מתכתי?",
    options: [
      "צליל שמתכות משמיעות",
      "האופן הייחודי שמתכות מחזירות אור",
      "הטמפרטורה של מתכת",
      "המשקל של מתכת"
    ],
    correctAnswer: 1,
    explanation: "ברק מתכתי הוא הזוהר הייחודי שמתכות מחזירות כשאור פוגע בהן.",
    category: ModuleId.Summary
  },
  {
    id: "sum_26",
    question: "איזה מהחומרים הבאים מבודד חשמל?",
    options: ["נחושת", "ברזל", "גומי", "אלומיניום"],
    correctAnswer: 2,
    explanation: "גומי הוא מבודד חשמלי - לא מאפשר לזרם חשמלי לעבור דרכו.",
    category: ModuleId.Summary
  },
  {
    id: "sum_27",
    question: "איזה חומר מוליך חום טוב?",
    options: ["עץ", "פלסטיק", "אלומיניום", "קלקר"],
    correctAnswer: 2,
    explanation: "אלומיניום (מתכת) מוליך חום מצוין, לכן משתמשים בו בסירי בישול.",
    category: ModuleId.Summary
  },
  {
    id: "sum_28",
    question: "איזה חומר מבודד חום?",
    options: ["נחושת", "ברזל", "צמר", "אלומיניום"],
    correctAnswer: 2,
    explanation: "צמר הוא מבודד חום מצוין - לא מעביר חום בקלות.",
    category: ModuleId.Summary
  },
  {
    id: "sum_29",
    question: "האם סוכר מתמוסס במים?",
    options: [
      "לא, הוא שוקע לקרקעית",
      "כן, הוא מתמוסס ויוצר תמיסה אחידה",
      "רק במים חמים",
      "רק במים קרים"
    ],
    correctAnswer: 1,
    explanation: "סוכר מתמוסס במים ויוצר תמיסה אחידה. חימום מאיץ את התהליך.",
    category: ModuleId.Summary
  },
  {
    id: "sum_30",
    question: "האם שמן מתמוסס במים?",
    options: [
      "כן, מיד",
      "לא, הוא צף מעל המים",
      "רק בחימום",
      "רק בקירור"
    ],
    correctAnswer: 1,
    explanation: "שמן לא מתמוסס במים וצף מעליהם.",
    category: ModuleId.Summary
  },
  {
    id: "sum_31",
    question: "האם חול מתמוסס במים?",
    options: [
      "כן, לגמרי",
      "לא, הוא שוקע לקרקעית",
      "כן, חלקית",
      "רק במים חמים"
    ],
    correctAnswer: 1,
    explanation: "חול אינו מתמוסס במים - הוא שוקע לקרקעית.",
    category: ModuleId.Summary
  },
  {
    id: "sum_32",
    question: "מדוע גוף סיר עשוי ממתכת וידיות מפלסטיק?",
    options: [
      "כי מתכת יפה יותר",
      "מתכת מוליכה חום למזון, פלסטיק מבודד את היד",
      "כי פלסטיק זול יותר",
      "כי מתכת קלה יותר"
    ],
    correctAnswer: 1,
    explanation: "המתכת מעבירה חום מהאש למזון, והפלסטיק מגן על היד מפני כוויות.",
    category: ModuleId.Summary
  },
  {
    id: "sum_33",
    question: "איזה חומר קשה יותר - זכוכית או ציפורן?",
    options: [
      "ציפורן",
      "זכוכית",
      "שניהם באותה קשיות",
      "לא ניתן לדעת"
    ],
    correctAnswer: 1,
    explanation: "זכוכית קשה יותר - היא יכולה לחרוץ ציפורן אבל ציפורן לא יכולה לחרוץ זכוכית.",
    category: ModuleId.Summary
  },
  {
    id: "sum_34",
    question: "מה מייחד את המתכות?",
    options: [
      "הן תמיד קלות",
      "מוליכות חשמל וחום, יש להן ברק מתכתי",
      "הן תמיד שקופות",
      "הן תמיד רכות"
    ],
    correctAnswer: 1,
    explanation: "מתכות מוליכות חשמל וחום, ויש להן ברק מתכתי ייחודי.",
    category: ModuleId.Summary
  },
  {
    id: "sum_35",
    question: "למה משתמשים ביהלום לחיתוך זכוכית?",
    options: [
      "כי הוא יפה",
      "כי הוא שקוף",
      "כי הוא הקשה ביותר ויכול לחרוץ כל חומר",
      "כי הוא זול"
    ],
    correctAnswer: 2,
    explanation: "יהלום הוא החומר הקשה ביותר בטבע ויכול לחרוץ כל חומר אחר.",
    category: ModuleId.Summary
  },

  // Engineering Materials (36-50)
  {
    id: "sum_36",
    question: "בסיפור הזאב והחזירונים, מדוע בית הלבנים שרד?",
    options: [
      "כי הזאב התעייף",
      "כי לבנים קשות, יציבות ועמידות ללחץ",
      "כי הבית היה קטן",
      "כי הייתה לו גג"
    ],
    correctAnswer: 1,
    explanation: "לבנים הן חומר קשה עם מסה גבוהה ועמידות מצוינת ללחץ.",
    category: ModuleId.Summary
  },
  {
    id: "sum_37",
    question: "מדוע לא בונים בתים מזהב?",
    options: [
      "זהב לא קיים",
      "זהב יקר מאוד, כבד, ומוליך חום",
      "זהב רך מדי",
      "זהב לא יפה"
    ],
    correctAnswer: 1,
    explanation: "זהב יקר, כבד מאוד, ומוליך חום - לא מתאים לבנייה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_38",
    question: "מהנדסים בוחרים חומרים על פי:",
    options: [
      "הצבע בלבד",
      "המחיר בלבד",
      "התכונות הנדרשות לשימוש",
      "הגודל בלבד"
    ],
    correctAnswer: 2,
    explanation: "בחירת חומרים מתבססת על התכונות הנדרשות: חוזק, משקל, מוליכות ועוד.",
    category: ModuleId.Summary
  },
  {
    id: "sum_39",
    question: "מדוע גשרים בנויים מפלדה?",
    options: [
      "כי פלדה זולה",
      "כי פלדה יפה",
      "כי פלדה חזקה וגמישה ומתאימה לעומסים כבדים",
      "כי פלדה קלה"
    ],
    correctAnswer: 2,
    explanation: "פלדה חזקה מאוד וגמישה - מתאימה לשאת עומסים כבדים.",
    category: ModuleId.Summary
  },
  {
    id: "sum_40",
    question: "מדוע בית הקש קרס בקלות?",
    options: [
      "כי הקש רטוב",
      "כי לקש חוזק מכני נמוך ומסה נמוכה",
      "כי הבית היה גדול",
      "כי הזאב חזק מאוד"
    ],
    correctAnswer: 1,
    explanation: "קש הוא חומר עם מסה נמוכה וחוזק מכני נמוך מאוד.",
    category: ModuleId.Summary
  },
  {
    id: "sum_41",
    question: "מהו בטון מזוין?",
    options: [
      "בטון עם צבע",
      "שילוב של בטון וברזל",
      "בטון קל",
      "בטון שקוף"
    ],
    correctAnswer: 1,
    explanation: "בטון מזוין משלב בטון (חזק בלחץ) עם מוטות ברזל (חזקים במתיחה).",
    category: ModuleId.Summary
  },
  {
    id: "sum_42",
    question: "מה החיסרון העיקרי של עץ כחומר בנייה?",
    options: [
      "הוא קשה מדי",
      "הוא דליק",
      "הוא יקר מדי",
      "הוא כבד מדי"
    ],
    correctAnswer: 1,
    explanation: "עץ דליק - זהו חיסרון משמעותי לבנייה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_43",
    question: "מה היתרון של לבנים על פני קש בבנייה?",
    options: [
      "לבנים זולות יותר",
      "לבנים קלות יותר",
      "לבנים עמידות יותר ללחץ ולא דליקות",
      "לבנים שקופות"
    ],
    correctAnswer: 2,
    explanation: "לבנים חזקות, עמידות ללחץ, ואינן דליקות - בניגוד לקש.",
    category: ModuleId.Summary
  },
  {
    id: "sum_44",
    question: "מדוע גורדי שחקים בנויים מפלדה?",
    options: [
      "כי פלדה זולה",
      "כי פלדה חזקה מאוד ביחס למשקלה",
      "כי פלדה שקופה",
      "כי פלדה לא מחלידה"
    ],
    correctAnswer: 1,
    explanation: "פלדה חזקה מאוד ביחס למשקלה - מאפשרת בניית מבנים גבוהים.",
    category: ModuleId.Summary
  },
  {
    id: "sum_45",
    question: "מדוע חלונות עשויים מזכוכית?",
    options: [
      "כי זכוכית זולה",
      "כי זכוכית שקופה ומאפשרת לאור להיכנס",
      "כי זכוכית חזקה יותר מפלדה",
      "כי זכוכית מבודדת חום"
    ],
    correctAnswer: 1,
    explanation: "זכוכית שקופה - מאפשרת לאור להיכנס לבית תוך הגנה מפני רוח וגשם.",
    category: ModuleId.Summary
  },
  {
    id: "sum_46",
    question: "מדוע צינורות מים עשויים מפלסטיק או מתכת ולא מנייר?",
    options: [
      "כי נייר יקר יותר",
      "כי נייר ספג מים ומתפרק",
      "כי נייר כבד יותר",
      "כי נייר מוליך חשמל"
    ],
    correctAnswer: 1,
    explanation: "נייר סופג מים ומתפרק - לא מתאים להעברת מים.",
    category: ModuleId.Summary
  },
  {
    id: "sum_47",
    question: "מהו העיקרון ההנדסי שלמדנו מסיפור החזירונים?",
    options: [
      "לבנות מהר",
      "לבנות בזול",
      "לבחור חומרים לפי התכונות הנדרשות",
      "לבנות בתים קטנים"
    ],
    correctAnswer: 2,
    explanation: "הסיפור מלמד שבחירת החומר הנכון לפי תכונותיו היא המפתח להצלחה.",
    category: ModuleId.Summary
  },
  {
    id: "sum_48",
    question: "מדוע משתמשים בזכוכית מחוזקת בגורדי שחקים?",
    options: [
      "כי היא זולה",
      "כי היא שקופה וחזקה מספיק לקירות",
      "כי היא מבודדת חום",
      "כי היא קלה"
    ],
    correctAnswer: 1,
    explanation: "זכוכית מחוזקת שקופה וחזקה - מאפשרת קירות שקופים ועמידים.",
    category: ModuleId.Summary
  },
  {
    id: "sum_49",
    question: "האם יש חומר 'טוב' או 'רע' באופן מוחלט?",
    options: [
      "כן, יהלום תמיד הכי טוב",
      "כן, קש תמיד הכי רע",
      "לא, יש רק חומר מתאים או לא מתאים לשימוש מסוים",
      "כן, מתכות תמיד הכי טובות"
    ],
    correctAnswer: 2,
    explanation: "אין חומר טוב או רע באופן מוחלט - יש רק חומר מתאים או לא מתאים לשימוש מסוים.",
    category: ModuleId.Summary
  },
  {
    id: "sum_50",
    question: "על פי מה צריך לבחור חומר לבניית מוצר?",
    options: [
      "רק לפי המחיר",
      "רק לפי הצבע",
      "לפי התכונות הנדרשות לשימוש",
      "רק לפי הזמינות"
    ],
    correctAnswer: 2,
    explanation: "בחירת חומרים צריכה להתבסס על התכונות הנדרשות לשימוש המתוכנן.",
    category: ModuleId.Summary
  }
];

// =============================================================================
// Chapter 1 Questions Record
// =============================================================================

export const CHAPTER_QUESTIONS: Record<string, Question[]> = {
  [ModuleId.MatterIntro]: MATTER_INTRO_QUESTIONS,
  [ModuleId.MaterialProperties]: MATERIAL_PROPERTIES_QUESTIONS,
  [ModuleId.EngineeringMaterials]: ENGINEERING_MATERIALS_QUESTIONS,
  [ModuleId.Summary]: SUMMARY_QUESTIONS
};
