import { normalizeJob } from "./job-normalizer.js";

const rawJob = {
  source: "REMOTIVE",
  externalId: "TEST-001",

  title:
    "  Senior Node.js   Full Stack Developer  ",

  company:
    "  DX LAB   ",

  location:
    "Worldwide",

  jobUrl:
    "https://example.com/job/test-001",

  description: `
    Senior developer with
    Node.js, React, TypeScript,
    SQL Server, REST API,
    Docker and AWS experience.
  `,

  employmentType:
    "FULL_TIME",

  remoteType:
    "REMOTE",

  salaryMin:
    3000,

  salaryMax:
    5000,

  salaryCurrency:
    "USD",

  publishedAt:
    "2026-08-21T00:00:00Z"
};

console.log("\n🧠 DX JOB NORMALIZER V1\n");

const normalized =
  normalizeJob(rawJob);

console.dir(
  normalized,
  { depth: null }
);