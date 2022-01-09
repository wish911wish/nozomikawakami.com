interface Work {
  id: number;
  imageUrl: string;
  name: string;
  periodStart: Date;
  periodEnd: Date | null;
  projectScale: string;
  role: string;
  summary: string;
  technicalSkills: string;
  url: string;
}

export default Work;
