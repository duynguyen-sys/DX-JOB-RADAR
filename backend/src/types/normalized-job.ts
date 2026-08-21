import type { JobRole } from "../services/job-role-detector.js";

export interface NormalizedJob {
  source: string;
  externalId: string;

  title: string;
  company: string;

  location: string;
  remote: boolean;

  jobUrl: string;
  description: string;

  employmentType: string | null;

  salaryMin: number | null;
  salaryMax: number | null;
  salaryCurrency: string | null;

  publishedAt: string | null;

  skills: string[];

  role: JobRole;

  normalizedText: string;
}
