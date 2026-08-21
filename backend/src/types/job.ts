export interface RawJob {
  source: string;
  externalId?: string | null;

  title: string;
  company?: string | null;

  location?: string | null;
  jobUrl: string;

  description?: string | null;

  employmentType?: string | null;
  remoteType?: string | null;

  salaryMin?: number | null;
  salaryMax?: number | null;
  salaryCurrency?: string | null;

  publishedAt?: string | null;
}