import type { NormalizedJob } from "../types/normalized-job.js";

import {
  getSkillMetadata
} from "./resolve-skill-metadata.js";

export interface EnrichedSkill {
  skill: string;
  category: string;
  weight: number;
}

export interface EnrichedJob
  extends NormalizedJob {
  skillDetails: EnrichedSkill[];
}

export function enrichJobSkills(
  job: NormalizedJob
): EnrichedJob {

  const skillDetails = job.skills.map(
    skill => {

      const metadata =
        getSkillMetadata(skill);

      return {
        skill,

        category:
          metadata?.category ??
          "UNKNOWN",

        weight:
          metadata?.weight ??
          0
      };
    }
  );

  return {
    ...job,
    skillDetails
  };
}