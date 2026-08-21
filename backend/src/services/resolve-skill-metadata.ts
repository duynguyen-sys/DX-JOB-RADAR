import {
  SKILL_METADATA,
  type SkillMetadata
} from "./skill-metadata.js";

export function getSkillMetadata(
  skill: string
): SkillMetadata | null {

  return SKILL_METADATA[
    skill.toUpperCase()
  ] ?? null;
}