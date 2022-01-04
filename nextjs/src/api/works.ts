import { getIndex } from "api/sheetson";
import Work from "interfaces/work";

export const getWorks = async (): Promise<Work[]> => {
  const result = await getIndex("works");
  return result.map((r) => ({
    id: Number(r.rowIndex),
    imageUrl: String(r.image_url),
    name: String(r.name),
    periodStart: new Date(r.period_start),
    periodEnd: new Date(r.period_end),
    role: String(r.role),
    summary: String(r.summary),
    technicalSkills: String(r.technical_skills),
    url: String(r.url),
  }));
};
