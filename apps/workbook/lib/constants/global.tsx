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
        id: ModuleId.Summary,
        title: "מבחן פרק 1",
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
        id: ModuleId.Summary,
        title: "מבחן פרק 2",
        description: "בדיקת מוכנות למבחן הגדול.",
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
