import { MetadataRoute } from "next";
import { SUBJECTS } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const currentDate = new Date();

  // Home page
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Subject pages
  const subjectRoutes: MetadataRoute.Sitemap = SUBJECTS.map((subject) => ({
    url: `${baseUrl}/${subject.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Chapter pages and module pages
  const chapterAndModuleRoutes: MetadataRoute.Sitemap = SUBJECTS.flatMap(
    (subject) =>
      subject.chapters.flatMap((chapter) => {
        // Chapter summary page
        const chapterSummary = {
          url: `${baseUrl}/${subject.id}/${chapter.id}/summary`,
          lastModified: currentDate,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        };

        // Module pages
        const moduleRoutes = chapter.modules.map((module) => ({
          url: `${baseUrl}/${subject.id}/${chapter.id}/${module.id}`,
          lastModified: currentDate,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));

        return [chapterSummary, ...moduleRoutes];
      })
  );

  return [...staticRoutes, ...subjectRoutes, ...chapterAndModuleRoutes];
}
