import { getIndex } from "api/sheetson";
import Work from "interfaces/work";

export const getWorks = async (): Promise<Work[]> => {
  const result = await getIndex("works");
  const works = result.map((r) => ({
    id: Number(r.rowIndex),
    imageUrl: String(r.image_url),
    name: String(r.name),
    periodStart: new Date(r.period_start),
    periodEnd: r.period_end ? new Date(r.period_end) : null,
    projectScale: String(r.project_scale),
    role: String(r.role).split(","),
    summary: String(r.summary),
    technicalSkills: String(r.technical_skills).split(","),
    url: String(r.url),
  }));
  works.sort((first, second) => {
    const firstEnd = first.periodEnd || new Date("9999-12-31");
    const secondEnd = second.periodEnd || new Date("9999-12-31");

    if (firstEnd >= secondEnd) {
      return -1;
    } else {
      return 1;
    }
  });

  return works;
};
