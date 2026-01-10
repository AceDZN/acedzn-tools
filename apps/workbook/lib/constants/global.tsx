import { Chapter, ChapterId, ModuleId, Subject } from "../types";

export const SITE_NAME = "מדעים+";

export const SCIENCE_CHAPTERS: Chapter[] = [
  {
    id: ChapterId.Chapter1,
    title: "פרק 1: עולם החומר",
    subtitle: "מודל החלקיקים ותופעות בחומר",
    description:
      "נלמד על מודל החלקיקים המסביר את מבנה החומר, מצבי צבירה, פעפוע ודחיסה.",
    icon: "test-tube",
    modules: [
      {
        id: ModuleId.MatterIntro,
        title: "מהו חומר?",
        description: "הכרת אבני הבניין היסודיות.",
        icon: "atom-symbol"
      },
      {
        id: ModuleId.ParticleModel,
        title: "מודל החלקיקים",
        description: "איך בנוי החומר ומה קורה בתוכו.",
        icon: "milky-way"
      },
      {
        id: ModuleId.Compression,
        title: "דחיסה בחומר",
        description: "למה גז נדחס ונוזל לא?",
        icon: "syringe"
      },
      {
        id: ModuleId.Diffusion,
        title: "פעפוע (דיפוזיה)",
        description: "איך חומרים מתערבבים מעצמם?",
        icon: "tornado"
      },
      {
        id: ModuleId.SurfaceTension,
        title: "מתח פנים",
        description: "מדוע חרקים הולכים על מים?",
        icon: "droplet"
      },
      {
        id: ModuleId.PhaseTransitions,
        title: "מצבי צבירה ומעברים",
        description: "איך חומר משנה את פניו?",
        icon: "thermometer"
      },
      {
        id: ModuleId.VolumeBasics,
        title: "מדידת נפח",
        description: "איך מודדים מקום?",
        icon: "straight-ruler"
      },
      {
        id: ModuleId.EngineeringMaterials,
        title: "הזאב ושלושת החזירונים",
        description: "הנדסה ובחירת חומרים.",
        icon: "house"
      },
      {
        id: ModuleId.Summary,
        title: "בחן את עצמך",
        description: "בדיקת ידע על עולם החומר.",
        icon: "graduation-cap"
      }
    ]
  },
  {
    id: ChapterId.Chapter2,
    title: "פרק 2: גוף וחומר",
    subtitle: "מדידות ותכונות פיזיקליות",
    description: "מסה, משקל, צפיפות וציפה. ההבדלים הקריטיים והנוסחאות.",
    icon: "building-construction",
    modules: [
      {
        id: ModuleId.Intro,
        title: "מהו גוף ומהו חומר?",
        description: "הבדלה בין העצם לחומר ממנו הוא עשוי.",
        icon: "building-construction"
      },
      {
        id: ModuleId.Volume,
        title: "נפח ומדידתו",
        description: "שיטות מדידה מתקדמות ויחידות.",
        icon: "straight-ruler"
      },
      {
        id: ModuleId.MassWeight,
        title: "מסה מול משקל",
        description: "כמות חומר מול כוח כבידה.",
        icon: "balance-scale"
      },
      {
        id: ModuleId.Density,
        title: "צפיפות וציפה",
        description: "למה דברים צפים? הנוסחה d=m/V.",
        icon: "ship"
      },
      {
        id: ModuleId.AirComposition,
        title: "הרכב האוויר",
        description: "ממה עשוי האוויר שאנחנו נושמים?",
        icon: "dashing-away"
      },
      {
        id: ModuleId.Sublimation,
        title: "סובלימציה",
        description: "מעבר ישיר ממוצק לגז.",
        icon: "cyclone"
      },
      {
        id: ModuleId.Summary,
        title: "בחן את עצמך",
        description: "בדיקת מוכנות למבחן הגדול.",
        icon: "graduation-cap"
      }
    ]
  },
  {
    id: ChapterId.Chapter3,
    title: "פרק 3: גדלים פיזיקליים ומדידות",
    subtitle: "נפח, מסה וצפיפות",
    description: "לומדים למדוד נפח ומסה, מחשבים צפיפות, ומבינים מתי גופים צפים או שוקעים.",
    icon: "straight-ruler",
    modules: [
      {
        id: ModuleId.Chapter3Intro,
        title: "מבוא למדידות",
        description: "מהם גדלים פיזיקליים ולמה מודדים?",
        icon: "straight-ruler"
      },
      {
        id: ModuleId.VolumeMeasurement,
        title: "מדידת נפח",
        description: "כלים ויחידות למדידת נפח.",
        icon: "test-tube"
      },
      {
        id: ModuleId.DisplacementMethod,
        title: "שיטת דחיקת המים",
        description: "איך מודדים נפח של גוף לא הנדסי?",
        icon: "droplet"
      },
      {
        id: ModuleId.MassIntro,
        title: "מסה",
        description: "כמות החומר בגוף.",
        icon: "balance-scale"
      },
      {
        id: ModuleId.MassVsWeight,
        title: "מסה מול משקל",
        description: "מה ההבדל בין מסה למשקל?",
        icon: "full-moon"
      },
      {
        id: ModuleId.AirHasMass,
        title: "לאוויר יש מסה",
        description: "הוכחה שלאוויר יש מסה.",
        icon: "balloon"
      },
      {
        id: ModuleId.DensityDeep,
        title: "צפיפות",
        description: "הקשר בין מסה לנפח.",
        icon: "package"
      },
      {
        id: ModuleId.Buoyancy,
        title: "ציפה ושקיעה",
        description: "מתי גוף צף ומתי שוקע?",
        icon: "ship"
      },
      {
        id: ModuleId.DensityTower,
        title: "מגדל הצפיפות",
        description: "ניסוי שכבות הנוזלים.",
        icon: "bento-box"
      },
      {
        id: ModuleId.Summary,
        title: "סיכום פרק 3",
        description: "חזרה על הנושאים העיקריים.",
        icon: "graduation-cap"
      }
    ]
  },
  {
    id: ChapterId.Chapter4,
    title: "פרק 4: אנרגיה",
    subtitle: "סוגי אנרגיה והמרות",
    description: "מהי אנרגיה, סוגיה השונים, וכיצד היא עוברת מצורה לצורה.",
    icon: "high-voltage",
    modules: [
      {
        id: ModuleId.EnergyIntro,
        title: "מהי אנרגיה?",
        description: "מבוא לעולם האנרגיה.",
        icon: "high-voltage"
      },
      {
        id: ModuleId.KineticEnergy,
        title: "אנרגיה קינטית",
        description: "אנרגיית התנועה.",
        icon: "automobile"
      },
      {
        id: ModuleId.PotentialEnergy,
        title: "אנרגיה פוטנציאלית",
        description: "אנרגיה מאוחסנת.",
        icon: "mountain"
      },
      {
        id: ModuleId.ElasticEnergy,
        title: "אנרגיה אלסטית",
        description: "קפיצים וגומיות.",
        icon: "bow-and-arrow"
      },
      {
        id: ModuleId.ElectricalEnergy,
        title: "אנרגיה חשמלית",
        description: "זרם וחשמל.",
        icon: "electric-plug"
      },
      {
        id: ModuleId.ChemicalEnergy,
        title: "אנרגיה כימית",
        description: "מזון, דלק וסוללות.",
        icon: "battery"
      },
      {
        id: ModuleId.ThermalEnergy,
        title: "אנרגיה תרמית",
        description: "חום וטמפרטורה.",
        icon: "fire"
      },
      {
        id: ModuleId.EnergyTransformations,
        title: "המרות אנרגיה",
        description: "כיצד אנרגיה משנה צורה.",
        icon: "counterclockwise-arrows-button"
      },
      {
        id: ModuleId.RubberBandCaseStudy,
        title: "אקדח הגומיות",
        description: "ניתוח מקרה של המרות אנרגיה.",
        icon: "bullseye"
      },
      {
        id: ModuleId.ConservationLaw,
        title: "חוק שימור האנרגיה",
        description: "אנרגיה לא נוצרת ולא נעלמת.",
        icon: "recycling-symbol"
      },
      {
        id: ModuleId.Summary,
        title: "סיכום פרק 4",
        description: "חזרה על נושאי האנרגיה.",
        icon: "graduation-cap"
      }
    ]
  }
];

export const SUBJECTS: Subject[] = [
  {
    id: "science",
    title: "מדעים",
    description: "פיזיקה, כימיה וביולוגיה לכיתות ז",
    icon: "microscope",
    chapters: SCIENCE_CHAPTERS
  }
  //   {
  //     id: "math",
  //     title: "מתמטיקה",
  //     description: "אלגברה, גיאומטריה וחשבון",
  //     icon: "abacus",
  //     chapters: []
  //   },
  //   {
  //     id: "history",
  //     title: "היסטוריה",
  //     description: "מסע בזמן אל העבר",
  //     icon: "scroll",
  //     chapters: []
  //   }
];
