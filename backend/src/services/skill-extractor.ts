import {
  SKILL_DICTIONARY
} from "./skill-dictionary.js";

export function extractSkills(
  text: string
): string[] {

  const normalized =
    text.toUpperCase();

  return SKILL_DICTIONARY.filter(
    skill => normalized.includes(skill)
  );
}