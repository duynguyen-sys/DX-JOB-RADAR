import type { RawJob } from "../types/job.js";
import type { NormalizedJob } from "../types/normalized-job.js";
import { detectJobRole } from "./job-role-detector.js";
import { extractSkills } from "./skill-extractor.js";
import { filterSpecificSkills } from "./filter-specific-skills.js";

function cleanText(value: string | null | undefined): string {
  return (value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function detectRemote(
  location: string,
  remoteType: string | null | undefined
): boolean {

  const text =
    `${location} ${remoteType ?? ""}`.toUpperCase();

  return (
    text.includes("REMOTE") ||
    text.includes("WORLDWIDE") ||
    text.includes("ANYWHERE")
  );
}

export function normalizeJob(
  job: RawJob
): NormalizedJob {

  const title =
    cleanText(job.title);

  const company =
    cleanText(job.company);

  const location =
    cleanText(job.location);

  const description =
    cleanText(job.description);

  const normalizedText = [
    title,
    company,
    location,
    description
  ]
    .filter(Boolean)
    .join(" ");

  const detectedSkills =
    extractSkills(normalizedText);

  const skills =
    filterSpecificSkills(
      detectedSkills
    );
const role =
  detectJobRole(title);
  return {
    source: cleanText(job.source),
    
    externalId:
      cleanText(job.externalId),

    title,

    company,

    location,

    remote:
      detectRemote(
        location,
        job.remoteType
      ),

    jobUrl:
      cleanText(job.jobUrl),

    description,

    employmentType:
      job.employmentType
        ? cleanText(job.employmentType)
        : null,

    salaryMin:
      job.salaryMin ?? null,

    salaryMax:
      job.salaryMax ?? null,

    salaryCurrency:
      job.salaryCurrency
        ? cleanText(job.salaryCurrency)
        : null,

    publishedAt:
      job.publishedAt ?? null,

    skills,
    role,
    normalizedText
  };
}