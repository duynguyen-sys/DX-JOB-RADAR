import {
  SKILL_HIERARCHY
} from "./skill-hierarchy.js";

export function filterSpecificSkills(
  skills: string[]
): string[] {

  return skills.filter(skill => {

    for (const [parent, children] of Object.entries(
      SKILL_HIERARCHY
    )) {

      if (
        children.includes(skill) &&
        skills.includes(parent)
      ) {
        return false;
      }
    }

    return true;
  });
}