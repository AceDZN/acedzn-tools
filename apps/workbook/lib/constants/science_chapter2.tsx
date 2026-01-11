import { ModuleId, Question } from "../types";

export const PARTICLE_MODEL_QUESTIONS: Question[] = [
  {
    id: "c2_pm_1",
    question: "מהי הטענה המרכזית של מודל החלקיקים?",
    options: [
      "חומרים הם גושים רציפים ללא רווחים",
      "כל החומרים בנויים מחלקיקים זעירים וביניהם ריק",
      "רק גזים בנויים מחלקיקים",
      "חלקיקים נעים רק כאשר מחממים אותם"
    ],
    correctAnswer: 1,
    explanation: "על פי המודל, כל חומר בנוי מחלקיקים וביניהם קיים ריק (רווח).",
    category: ModuleId.ParticleModel
  },
  {
    id: "c2_pm_2",
    question: "מה קיים ברווחים שבין חלקיקי החומר?",
    options: ["אוויר", "מים", "ריק (כלום)", "גז שקוף"],
    correctAnswer: 2,
    explanation: "בין החלקיקים אין כלום - זהו ריק.",
    category: ModuleId.ParticleModel
  },
  {
    id: "c2_pm_3",
    question: "באילו מצבי צבירה פועלים כוחות משיכה בין החלקיקים?",
    options: [
      "רק במוצק",
      "רק בנוזל",
      "בכל מצבי הצבירה (מוצק, נוזל וגז)",
      "אף פעם לא"
    ],
    correctAnswer: 2,
    explanation: "בכל מצבי הצבירה קיימים כוחות משיכה, אך עוצמתם משתנה.",
    category: ModuleId.ParticleModel
  },
  {
    id: "c2_pm_4",
    question: "תלמידים הניחו על שולחן למשך שבוע בקבוק סגור ומלא באוויר. מה נכון לומר על חלקיקי האוויר?",
    options: [
      "חלקיקי האוויר מפוזרים בכל נפח הבקבוק",
      "חלקיקי האוויר מצויים רק בחלק העליון",
      "חלקיקי האוויר מצויים רק על הקרקעית",
      "חלקיקי האוויר מצטופפים סמוך לפייה"
    ],
    correctAnswer: 0,
    explanation: "במצב גז, החלקיקים נעים בחופשיות וממלאים את כל נפח הכלי בו הם נמצאים.",
    category: ModuleId.ParticleModel
  },
  {
    id: "c2_pm_5",
    question: "כאשר חומר הנמצא בכלי סגור עובר ממצב צבירה אחד לאחר עקב קירור, אין שינוי ב:",
    options: [
      "כוחות המשיכה בין החלקיקים",
      "סוג התנועה של החלקיקים",
      "מהירות ממוצעת של החלקיקים",
      "מסה של החלקיקים"
    ],
    correctAnswer: 3,
    explanation: "במהלך שינוי מצב צבירה, כמות החומר (ומסת החלקיקים הבודדים) לא משתנה.",
    category: ModuleId.ParticleModel
  }
];

export const SURFACE_TENSION_QUESTIONS: Question[] = [
  {
    id: "c2_st_1",
    question: "מה גורם להיווצרות מתח פנים בנוזל?",
    options: [
      "לחץ האוויר מלמעלה",
      "כוחות המשיכה שבין חלקיקי הנוזל",
      "הטמפרטורה של הנוזל",
      "כוח המשיכה של כדור הארץ"
    ],
    correctAnswer: 1,
    explanation: "מתח פנים נוצר בגלל כוחות המשיכה שבין חלקיקי הנוזל המושכים זה את זה.",
    category: ModuleId.SurfaceTension
  },
  {
    id: "c2_st_2",
    question: "מדוע טיפות מים עגולות?",
    options: [
      "כי המים שקופים",
      "כי מתח הפנים מושך את פני השטח לצורה מינימלית",
      "כי המים קרים",
      "כי יש לחץ אוויר"
    ],
    correctAnswer: 1,
    explanation: "מתח הפנים גורם לנוזל לקבל את הצורה בעלת שטח הפנים המינימלי - כדור.",
    category: ModuleId.SurfaceTension
  },
  {
    id: "c2_st_3",
    question: "מדוע חרקים יכולים ללכת על פני המים?",
    options: [
      "כי הם קלים מאוד",
      "כי מתח הפנים יוצר 'קרום' שמחזיק אותם",
      "כי רגליהם שומניות",
      "כי המים קרים"
    ],
    correctAnswer: 1,
    explanation: "מתח הפנים יוצר 'קרום' בלתי נראה שיכול להחזיק עצמים קלים.",
    category: ModuleId.SurfaceTension
  },
  {
    id: "c2_st_4",
    question: "מה קורה כשמוסיפים סבון למים?",
    options: [
      "מתח הפנים גדל",
      "מתח הפנים קטן",
      "מתח הפנים לא משתנה",
      "המים מתאדים"
    ],
    correctAnswer: 1,
    explanation: "סבון מפחית את מתח הפנים על ידי הפרעה לכוחות המשיכה בין חלקיקי המים.",
    category: ModuleId.SurfaceTension
  }
];

export const COMPRESSION_QUESTIONS: Question[] = [
  {
    id: "c2_comp_1",
    question: "מדוע ניתן לדחוס גז בקלות אך נוזל כמעט ולא?",
    options: [
      "כי חלקיקי הגז קטנים יותר",
      "כי בנפח של גז יש הרבה ריק (רווחים גדולים)",
      "כי חלקיקי הנוזל דוחים זה את זה",
      "כי חלקיקי הגז קלים יותר"
    ],
    correctAnswer: 1,
    explanation: "בגז הרווחים גדולים מאוד, ולכן ניתן לקרב את החלקיקים זה לזה.",
    category: ModuleId.Compression
  },
  {
    id: "c2_comp_2",
    question: "מכיוון שיש מרווחים גדולים בין חלקיקי הגז, הרי שניתן:",
    options: [
      "לחמם אותו בקלות",
      "לדחוס אותו בקלות",
      "לשנות את צבעו",
      "להפוך אותו למוצק מיד"
    ],
    correctAnswer: 1,
    explanation: "האפשרות להקטין את המרווחים הגדולים היא המאפשרת דחיסה.",
    category: ModuleId.Compression
  },
  {
    id: "c2_comp_3",
    question: "כאשר שואבים אוויר מקופסת פח, דפנות הקופסה מתעוותים והקופסה נמעכת. מה ההסבר?",
    options: [
      "דפנות הקופסה נעשות גמישות מהשאיבה",
      "לחץ האוויר מחוץ לקופסה גדול מלחץ האוויר שבתוכה",
      "הריק שבקופסה מושך את הדפנות פנימה",
      "טמפרטורת האוויר בקופסה יורדת"
    ],
    correctAnswer: 1,
    explanation: "מעיכת הקופסה נגרמת מההפרש בין הלחץ החיצוני (החזק) לפני הלחץ הפנימי (שנחלש).",
    category: ModuleId.Compression
  },
  {
    id: "c2_comp_4",
    question: "מדוע מערכת הבלמים ברכב משתמשת בנוזל ולא בגז?",
    options: [
      "כי נוזל זול יותר",
      "כי נוזל לא נדחס ומעביר לחץ במדויק",
      "כי גז מסוכן",
      "כי נוזל קל יותר"
    ],
    correctAnswer: 1,
    explanation: "נוזל כמעט לא נדחס, לכן הלחץ מועבר מיידית וללא אובדן.",
    category: ModuleId.Compression
  }
];

export const DIFFUSION_QUESTIONS: Question[] = [
  {
    id: "c2_diff_1",
    question: "באיזה מצב צבירה תתרחש פעפוע (דיפוזיה) בצורה המהירה ביותר?",
    options: ["מוצק", "נוזל", "גז", "בכולם באותה מהירות"],
    correctAnswer: 2,
    explanation: "בגז החלקיקים נעים מהר יותר והמרחקים גדולים, לכן הערבוב מהיר יותר.",
    category: ModuleId.Diffusion
  },
  {
    id: "c2_diff_2",
    question: "דורון בדק בושם ב-25 מעלות וב-4 מעלות. עבור איזה בושם הזמן עד הרחתו היה קצר יותר?",
    options: ["הבושם שנשמר ב-25 מעלות", "הבושם שנשמר ב-4 מעלות"],
    correctAnswer: 0,
    explanation: "בטמפרטורה גבוהה החלקיקים נעים מהר יותר ולכן הפעפוע מהיר יותר.",
    category: ModuleId.Diffusion
  },
  {
    id: "c2_diff_3",
    question: "באיזה כלי פעפוע של גז צבעוני יהיה מהיר יותר?",
    options: ["כלי א: שיש בו ריק", "כלי ב: שיש בו אוויר"],
    correctAnswer: 0,
    explanation: "בריק אין חלקיקי אוויר שיתנגשו בחלקיקי הגז הצבעוני ויעכבו אותו.",
    category: ModuleId.Diffusion
  },
  {
    id: "c2_diff_4",
    question: "למה פעפוע בגז מהיר יותר מפעפוע בנוזל?",
    options: [
      "כי חלקיקי הגז קטנים יותר",
      "כי בגז החלקיקים נעים מהר יותר ויש יותר ריק",
      "כי נוזל כבד יותר",
      "כי גז שקוף"
    ],
    correctAnswer: 1,
    explanation: "בגז, החלקיקים נעים במהירות גבוהה והמרחקים ביניהם גדולים.",
    category: ModuleId.Diffusion
  }
];

export const PHASE_TRANSITIONS_QUESTIONS: Question[] = [
  {
    id: "c2_pt_1",
    question: "מה קורה לטמפרטורת המים בזמן שהם רותחים?",
    options: [
      "היא ממשיכה לעלות",
      "היא נשארת קבועה ב-100 מעלות",
      "היא יורדת",
      "היא משתנה לסירוגין"
    ],
    correctAnswer: 1,
    explanation: "במהלך מעבר פאזה, הטמפרטורה נשארת קבועה עד שכל החומר משנה את מצב צבירתו.",
    category: ModuleId.PhaseTransitions
  },
  {
    id: "c2_pt_2",
    question: "איך נקרא המעבר הישיר ממוצק לגז?",
    options: ["התאדות", "התעבות", "המראה (סובלימציה)", "היתוך"],
    correctAnswer: 2,
    explanation: "המראה היא תהליך בו חומר עובר ממוצק לגז מבלי להפוך לנוזל.",
    category: ModuleId.PhaseTransitions
  },
  {
    id: "c2_pt_3",
    question: "מהו תהליך הריבוץ (דפוזיציה)?",
    options: ["ממוצק לנוזל", "מנוזל לגז", "מגז למוצק", "מגז לנוזל"],
    correctAnswer: 2,
    explanation: "ריבוץ הוא התהליך ההפוך להמראה - מעבר ישיר מגז למוצק.",
    category: ModuleId.PhaseTransitions
  },
  {
    id: "c2_pt_4",
    question: "התיכו קוביית בדיל לבדיל נוזלי בכלי סגור. מה קרה למסת הבדיל?",
    options: ["המסה גדלה", "המסה קטנה", "המסה לא השתנתה"],
    correctAnswer: 2,
    explanation: "שינוי מצב צבירה לא משנה את כמות החומר, ולכן המסה נשארת קבועה.",
    category: ModuleId.PhaseTransitions
  },
  {
    id: "c2_pt_5",
    question: "מהו ההבדל בין התאדות לרתיחה?",
    options: [
      "אין הבדל - זה אותו דבר",
      "התאדות קורית רק בפני השטח ובכל טמפרטורה, רתיחה קורית בכל הנפח בטמפרטורה מסוימת",
      "רתיחה קורית רק במים",
      "התאדות מהירה יותר"
    ],
    correctAnswer: 1,
    explanation: "התאדות היא תהליך איטי מפני השטח, רתיחה היא תהליך אינטנסיבי בכל הנפח.",
    category: ModuleId.PhaseTransitions
  }
];

export const VOLUME_BASICS_QUESTIONS: Question[] = [
  {
    id: "c2_vb_1",
    question: "כיצד מומלץ למדוד נפח של נוזל?",
    options: ["בעזרת סרגל", "בעזרת משורה", "בעזרת מאזניים", "בעזרת טרמומטר"],
    correctAnswer: 1,
    explanation: "משורה היא הכלי המתאים למדידת נפח נוזלים. יש להסתכל בתחתית הקעור.",
    category: ModuleId.VolumeBasics
  },
  {
    id: "c2_vb_2",
    question: 'כמה מ"ל יש בליטר אחד?',
    options: ['10 מ"ל', '100 מ"ל', '1,000 מ"ל', '10,000 מ"ל'],
    correctAnswer: 2,
    explanation: '1 ליטר = 1,000 מ"ל = 1,000 סמ"ק',
    category: ModuleId.VolumeBasics
  },
  {
    id: "c2_vb_3",
    question: 'סנטימטר מעוקב (סמ"ק) אחד שווה בדיוק ל:',
    options: ["1 ליטר", '1 מ"ל', '10 מ"ל', '1 ק"ג'],
    correctAnswer: 1,
    explanation: 'זוהי יחידת מידה זהה: 1 סמ"ק = 1 מ"ל.',
    category: ModuleId.VolumeBasics
  }
];

export const AIR_COMPOSITION_QUESTIONS: Question[] = [
  {
    id: "c2_ac_1",
    question: "מהו הגז העיקרי באוויר?",
    options: ["חמצן", "חנקן", "פחמן דו-חמצני", "הליום"],
    correctAnswer: 1,
    explanation: "חנקן מהווה כ-78% מהאוויר, והוא הגז העיקרי.",
    category: ModuleId.AirComposition
  },
  {
    id: "c2_ac_2",
    question: "מהו אחוז החמצן באוויר?",
    options: ["כ-78%", "כ-21%", "כ-0.03%", "כ-50%"],
    correctAnswer: 1,
    explanation: "חמצן מהווה כ-21% מהאוויר.",
    category: ModuleId.AirComposition
  },
  {
    id: "c2_ac_3",
    question: "איזה גז הכרחי לתהליך הבעירה?",
    options: ["חנקן", "חמצן", "פחמן דו-חמצני", "הליום"],
    correctAnswer: 1,
    explanation: "חמצן הוא הגז ההכרחי לתהליך הבעירה.",
    category: ModuleId.AirComposition
  },
  {
    id: "c2_ac_4",
    question: "איזה גז משתמשים בו צמחים לפוטוסינתזה?",
    options: ["חמצן", "חנקן", "פחמן דו-חמצני", "אדי מים"],
    correctAnswer: 2,
    explanation: "צמחים קולטים פחמן דו-חמצני ומשחררים חמצן בתהליך הפוטוסינתזה.",
    category: ModuleId.AirComposition
  }
];

export const SUBLIMATION_QUESTIONS: Question[] = [
  {
    id: "c2_sub_1",
    question: "מהי המראה (סובלימציה)?",
    options: [
      "מעבר ממוצק לנוזל",
      "מעבר ישיר ממוצק לגז",
      "מעבר מנוזל לגז",
      "מעבר מגז לנוזל"
    ],
    correctAnswer: 1,
    explanation: "המראה היא מעבר ישיר ממוצק לגז ללא מעבר דרך מצב נוזלי.",
    category: ModuleId.Sublimation
  },
  {
    id: "c2_sub_2",
    question: "מה קורה ליוד מוצק כשמחממים אותו?",
    options: [
      "הוא נמס לנוזל כתום",
      "הוא עובר ישירות לגז סגול",
      "הוא נשאר מוצק",
      "הוא מתפוצץ"
    ],
    correctAnswer: 1,
    explanation: "יוד עובר המראה ויוצר גז בצבע סגול עמוק.",
    category: ModuleId.Sublimation
  },
  {
    id: "c2_sub_3",
    question: "מה קורה כשגז היוד הסגול נוגע במשטח קר?",
    options: [
      "הוא מתאדה",
      "הוא הופך לנוזל",
      "הוא חוזר להיות גבישים מוצקים (ריבוץ)",
      "הוא נעלם"
    ],
    correctAnswer: 2,
    explanation: "הגז עובר ריבוץ - מעבר ישיר מגז למוצק, ויוצר גבישים על המשטח הקר.",
    category: ModuleId.Sublimation
  },
  {
    id: "c2_sub_4",
    question: "מהי דוגמה נוספת להמראה בחיי היומיום?",
    options: [
      "קרח נמס",
      "מים רותחים",
      "קרח יבש (CO₂ מוצק) הופך לגז",
      "מים קופאים"
    ],
    correctAnswer: 2,
    explanation: "קרח יבש (פחמן דו-חמצני מוצק) עובר המראה בטמפרטורת החדר.",
    category: ModuleId.Sublimation
  }
];

export const CHAPTER2_SUMMARY_QUESTIONS: Question[] = [
  {
    id: "c2_sum_1",
    question: "מהם שלושת עקרונות היסוד של מודל החלקיקים?",
    options: [
      "צבע, ריח, טעם",
      "חלקיקים זעירים, ריק ביניהם, תנועה מתמדת",
      "מוצק, נוזל, גז",
      "מסה, נפח, צפיפות"
    ],
    correctAnswer: 1,
    explanation: "מודל החלקיקים מבוסס על: כל חומר בנוי מחלקיקים זעירים, ביניהם ריק, והם נעים תמיד.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_2",
    question: "באיזה מצב צבירה כוחות המשיכה בין החלקיקים הכי חזקים?",
    options: ["מוצק", "נוזל", "גז", "בכולם זהה"],
    correctAnswer: 0,
    explanation: "במוצק כוחות המשיכה הכי חזקים, לכן החלקיקים מסודרים ולא זזים ממקומם.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_3",
    question: "מה סוג התנועה של חלקיקים בגז?",
    options: [
      "תנודות במקום",
      "החלקה ותנודות",
      "תנועה אקראית מהירה לכל הכיוונים",
      "אין תנועה"
    ],
    correctAnswer: 2,
    explanation: "בגז החלקיקים נעים בתנועה אקראית מהירה לכל הכיוונים.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_4",
    question: "מה קורה למהירות החלקיקים כשמחממים חומר?",
    options: [
      "המהירות יורדת",
      "המהירות עולה",
      "המהירות לא משתנה",
      "החלקיקים נעצרים"
    ],
    correctAnswer: 1,
    explanation: "טמפרטורה גבוהה = אנרגיה קינטית גבוהה = מהירות חלקיקים גבוהה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_5",
    question: "מדוע גז ממלא את כל הכלי?",
    options: [
      "כי הוא כבד",
      "כי החלקיקים נעים לכל הכיוונים וכוחות המשיכה חלשים",
      "כי הוא שקוף",
      "כי הוא קל"
    ],
    correctAnswer: 1,
    explanation: "בגז כוחות המשיכה חלשים והחלקיקים נעים בחופשיות לכל הכיוונים.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_6",
    question: "מדוע נוזל מקבל את צורת הכלי אך לא ממלא אותו כולו?",
    options: [
      "כי הוא כבד מגז",
      "כי כוחות המשיכה מספיק חזקים לשמור על נפח קבוע אך חלשים מדי לשמור על צורה",
      "כי הוא שקוף",
      "כי יש בו אוויר"
    ],
    correctAnswer: 1,
    explanation: "בנוזל כוחות המשיכה מחזיקים את החלקיקים יחד (נפח קבוע) אך מאפשרים זרימה (צורה משתנה).",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_7",
    question: "מהו ההרכב העיקרי של האוויר?",
    options: [
      "רק חמצן",
      "כ-78% חנקן, כ-21% חמצן",
      "רק פחמן דו-חמצני",
      "מחצית חמצן ומחצית חנקן"
    ],
    correctAnswer: 1,
    explanation: "האוויר מורכב בעיקר מחנקן (78%) וחמצן (21%).",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_8",
    question: "מה גורם למתח פנים במים?",
    options: [
      "לחץ האוויר",
      "כוחות המשיכה בין חלקיקי המים בפני השטח",
      "הטמפרטורה",
      "כוח הכבידה"
    ],
    correctAnswer: 1,
    explanation: "חלקיקי המים בפני השטח נמשכים פנימה על ידי שכניהם, מה שיוצר מתח פנים.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_9",
    question: "מדוע טיפות מים עגולות?",
    options: [
      "כי המים שקופים",
      "כי מתח הפנים מקטין את שטח הפנים למינימום - צורת כדור",
      "כי המים קרים",
      "בגלל לחץ האוויר"
    ],
    correctAnswer: 1,
    explanation: "מתח הפנים גורם לנוזל לקבל את הצורה בעלת שטח הפנים המינימלי - כדור.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_10",
    question: "מה קורה כשמוסיפים סבון למים?",
    options: [
      "מתח הפנים גדל",
      "מתח הפנים קטן",
      "מתח הפנים לא משתנה",
      "המים מתקררים"
    ],
    correctAnswer: 1,
    explanation: "סבון מפחית את מתח הפנים על ידי הפרעה לכוחות המשיכה בין חלקיקי המים.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_11",
    question: "מדוע ניתן לדחוס גז בקלות?",
    options: [
      "כי חלקיקיו קטנים",
      "כי יש הרבה ריק (רווחים גדולים) בין החלקיקים",
      "כי הוא שקוף",
      "כי הוא קל"
    ],
    correctAnswer: 1,
    explanation: "בגז רוב הנפח הוא ריק, לכן ניתן לקרב את החלקיקים זה לזה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_12",
    question: "מדוע כמעט לא ניתן לדחוס נוזל?",
    options: [
      "כי הוא כבד מגז",
      "כי החלקיקים כבר קרובים מאוד זה לזה",
      "כי הוא שקוף פחות מגז",
      "כי הוא מתאדה"
    ],
    correctAnswer: 1,
    explanation: "בנוזל החלקיקים כבר קרובים מאוד, אין כמעט ריק לדחיסה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_13",
    question: "מהי פעפוע (דיפוזיה)?",
    options: [
      "מעבר ממוצק לנוזל",
      "התפשטות חלקיקי חומר אחד בתוך חומר אחר",
      "שינוי צבע",
      "שינוי טמפרטורה"
    ],
    correctAnswer: 1,
    explanation: "פעפוע הוא תהליך התפשטות ספונטנית של חלקיקי חומר אחד בתוך חומר אחר.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_14",
    question: "באיזה מצב צבירה פעפוע מהיר ביותר?",
    options: ["מוצק", "נוזל", "גז", "בכולם זהה"],
    correctAnswer: 2,
    explanation: "בגז החלקיקים נעים מהר ויש הרבה ריק, לכן הפעפוע מהיר ביותר.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_15",
    question: "מה משפיע על מהירות הפעפוע?",
    options: [
      "צבע החומר",
      "טמפרטורה - ככל שהיא גבוהה יותר, הפעפוע מהיר יותר",
      "גודל הכלי בלבד",
      "צורת הכלי"
    ],
    correctAnswer: 1,
    explanation: "בטמפרטורה גבוהה החלקיקים נעים מהר יותר, לכן הפעפוע מהיר יותר.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_16",
    question: "איך נקרא המעבר ממוצק לנוזל?",
    options: ["התאדות", "התעבות", "התכה (היתוך)", "המראה"],
    correctAnswer: 2,
    explanation: "התכה היא המעבר ממוצק לנוזל.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_17",
    question: "איך נקרא המעבר מנוזל לגז?",
    options: ["התכה", "קיפאון", "התאדות", "התעבות"],
    correctAnswer: 2,
    explanation: "התאדות היא המעבר מנוזל לגז.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_18",
    question: "איך נקרא המעבר מגז לנוזל?",
    options: ["התכה", "התעבות (עיבוי)", "התאדות", "קיפאון"],
    correctAnswer: 1,
    explanation: "התעבות (עיבוי) היא המעבר מגז לנוזל.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_19",
    question: "איך נקרא המעבר מנוזל למוצק?",
    options: ["התכה", "התעבות", "התאדות", "קיפאון"],
    correctAnswer: 3,
    explanation: "קיפאון היא המעבר מנוזל למוצק.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_20",
    question: "מהי המראה (סובלימציה)?",
    options: [
      "מעבר ממוצק לנוזל",
      "מעבר ישיר ממוצק לגז",
      "מעבר מנוזל לגז",
      "מעבר מגז לנוזל"
    ],
    correctAnswer: 1,
    explanation: "המראה היא מעבר ישיר ממוצק לגז ללא מעבר דרך נוזל.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_21",
    question: "מהו ריבוץ?",
    options: [
      "מעבר ממוצק לנוזל",
      "מעבר מנוזל לגז",
      "מעבר ישיר מגז למוצק",
      "מעבר מגז לנוזל"
    ],
    correctAnswer: 2,
    explanation: "ריבוץ הוא התהליך ההפוך להמראה - מעבר ישיר מגז למוצק.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_22",
    question: "מה קורה לטמפרטורה בזמן שינוי מצב צבירה?",
    options: [
      "היא עולה במהירות",
      "היא נשארת קבועה עד סיום השינוי",
      "היא יורדת",
      "היא משתנה לסירוגין"
    ],
    correctAnswer: 1,
    explanation: "במהלך שינוי מצב צבירה, האנרגיה משמשת לשינוי ולא לעליית/ירידת טמפרטורה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_23",
    question: "מה קורה למסה כאשר חומר משנה מצב צבירה?",
    options: [
      "המסה גדלה",
      "המסה קטנה",
      "המסה לא משתנה",
      "תלוי בסוג השינוי"
    ],
    correctAnswer: 2,
    explanation: "שינוי מצב צבירה לא משנה את כמות החומר, לכן המסה נשארת קבועה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_24",
    question: "מה קורה ליוד מוצק כשמחממים אותו?",
    options: [
      "הוא נמס לנוזל",
      "הוא עובר ישירות לגז סגול (המראה)",
      "הוא נשאר מוצק",
      "הוא מתפוצץ"
    ],
    correctAnswer: 1,
    explanation: "יוד עובר המראה - מעבר ישיר ממוצק לגז סגול.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_25",
    question: "מהי דוגמה להמראה בחיי היומיום?",
    options: [
      "קרח נמס",
      "מים רותחים",
      "קרח יבש הופך לגז",
      "מים קופאים"
    ],
    correctAnswer: 2,
    explanation: "קרח יבש (CO₂ מוצק) עובר המראה בטמפרטורת החדר.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_26",
    question: "מהו ההבדל בין התאדות לרתיחה?",
    options: [
      "אין הבדל",
      "התאדות מפני השטח בכל טמפרטורה, רתיחה בכל הנפח בטמפרטורה מסוימת",
      "רתיחה רק במים",
      "התאדות מהירה יותר"
    ],
    correctAnswer: 1,
    explanation: "התאדות קורית מפני השטח בכל טמפרטורה, רתיחה קורית בכל הנפח בנקודת הרתיחה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_27",
    question: "מדוע קרח צף על המים?",
    options: [
      "כי קרח קר יותר",
      "כי צפיפות הקרח נמוכה מצפיפות המים",
      "כי קרח לבן",
      "כי יש יותר חלקיקים במים"
    ],
    correctAnswer: 1,
    explanation: "כשמים קופאים, החלקיקים מתארגנים במבנה פתוח יותר, מה שמקטין את הצפיפות.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_28",
    question: "איזה גז חיוני לנשימה?",
    options: ["חנקן", "חמצן", "פחמן דו-חמצני", "הליום"],
    correctAnswer: 1,
    explanation: "חמצן הוא הגז החיוני לתהליכי נשימה בתאים.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_29",
    question: "איזה גז משתחרר בתהליך הנשימה?",
    options: ["חנקן", "חמצן", "פחמן דו-חמצני", "הליום"],
    correctAnswer: 2,
    explanation: "בנשימה אנו שואפים חמצן ונושפים פחמן דו-חמצני.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_30",
    question: "מה אחוז הפחמן הדו-חמצני באוויר?",
    options: ["כ-78%", "כ-21%", "כ-0.03%", "כ-1%"],
    correctAnswer: 2,
    explanation: "פחמן דו-חמצני מהווה רק כ-0.03% מהאוויר.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_31",
    question: "בלון מנופח הונח בשמש. מה יקרה?",
    options: [
      "יקטן",
      "יגדל כי החלקיקים נעים מהר יותר",
      "לא ישתנה",
      "יתפוצץ מיד"
    ],
    correctAnswer: 1,
    explanation: "חימום מגביר את מהירות החלקיקים, הם דוחפים את הדפנות והבלון מתרחב.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_32",
    question: "מה יקרה לבקבוק פלסטיק סגור עם אוויר חם אם נכניס אותו למקרר?",
    options: [
      "הבקבוק יתרחב",
      "הבקבוק יתכווץ פנימה",
      "לא ישתנה דבר",
      "הבקבוק יתפוצץ"
    ],
    correctAnswer: 1,
    explanation: "בקירור החלקיקים נעים לאט יותר, הלחץ יורד והבקבוק מתכווץ.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_33",
    question: "מדוע בושם מורגש בכל החדר?",
    options: [
      "כי הוא כבד",
      "כי חלקיקי הבושם מתפזרים באוויר (פעפוע)",
      "כי יש רוח",
      "כי הוא נוזלי"
    ],
    correctAnswer: 1,
    explanation: "חלקיקי הבושם מתפזרים באוויר בתהליך הפעפוע עד שהם מגיעים לאף.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_34",
    question: "מדוע חרק שצף על מים ישקע כשמוסיפים סבון?",
    options: [
      "כי הסבון כבד",
      "כי הסבון מחליש את מתח הפנים",
      "כי המים מתחממים",
      "כי הסבון רעיל"
    ],
    correctAnswer: 1,
    explanation: "סבון מחליש את מתח הפנים, והחרק כבר לא יכול להישען על ה'קרום'.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_35",
    question: "מזרק מלא אוויר ומזרק מלא מים. על איזה קל יותר ללחוץ?",
    options: [
      "מזרק המים",
      "מזרק האוויר",
      "שניהם באותה קושי",
      "תלוי בגודל"
    ],
    correctAnswer: 1,
    explanation: "באוויר (גז) יש הרבה ריק לדחיסה, במים (נוזל) כמעט אין.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_36",
    question: "'גז' הוא:",
    options: [
      "שם של חומר ספציפי",
      "שם של מצב צבירה",
      "סוג של אנרגיה",
      "יחידת מידה"
    ],
    correctAnswer: 1,
    explanation: "'גז' הוא מצב צבירה, לא שם של חומר. יש הרבה חומרים שונים במצב גזי.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_37",
    question: "מה משותף לכל שלושת מצבי הצבירה?",
    options: [
      "אותה צורה",
      "אותו נפח",
      "כולם בנויים מחלקיקים שנעים",
      "כולם שקופים"
    ],
    correctAnswer: 2,
    explanation: "בכל מצבי הצבירה החומר בנוי מחלקיקים שנמצאים בתנועה מתמדת.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_38",
    question: "מה קורה לחלקיקים כשמקררים גז?",
    options: [
      "הם נעים מהר יותר",
      "הם נעים לאט יותר ומתקרבים זה לזה",
      "הם נעלמים",
      "הם גדלים"
    ],
    correctAnswer: 1,
    explanation: "בקירור החלקיקים מאטים וכוחות המשיכה מצליחים לקרב אותם.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_39",
    question: "בכלי סגור יש גז. מה יקרה ללחץ אם נחמם?",
    options: [
      "הלחץ יירד",
      "הלחץ יעלה",
      "הלחץ לא ישתנה",
      "הגז יהפוך לנוזל"
    ],
    correctAnswer: 1,
    explanation: "בחימום החלקיקים נעים מהר יותר ומתנגשים בדפנות בחוזקה - הלחץ עולה.",
    category: ModuleId.Summary
  },
  {
    id: "c2_sum_40",
    question: "איזו תופעה מוכיחה שחלקיקים נעים כל הזמן?",
    options: [
      "קרח נמס",
      "פעפוע ריח בחדר",
      "מים מתאדים",
      "כל התשובות נכונות"
    ],
    correctAnswer: 3,
    explanation: "כל התופעות הללו מוכיחות תנועה מתמדת של חלקיקים.",
    category: ModuleId.Summary
  }
];

export const CHAPTER_QUESTIONS: Record<string, Question[]> = {
  [ModuleId.ParticleModel]: PARTICLE_MODEL_QUESTIONS,
  [ModuleId.SurfaceTension]: SURFACE_TENSION_QUESTIONS,
  [ModuleId.Compression]: COMPRESSION_QUESTIONS,
  [ModuleId.Diffusion]: DIFFUSION_QUESTIONS,
  [ModuleId.PhaseTransitions]: PHASE_TRANSITIONS_QUESTIONS,
  [ModuleId.VolumeBasics]: VOLUME_BASICS_QUESTIONS,
  [ModuleId.AirComposition]: AIR_COMPOSITION_QUESTIONS,
  [ModuleId.Sublimation]: SUBLIMATION_QUESTIONS,
  [ModuleId.Summary]: CHAPTER2_SUMMARY_QUESTIONS
};
