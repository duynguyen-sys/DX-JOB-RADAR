import {
  SKILL_HIERARCHY
} from "./skill-hierarchy.js";

export function filterSpecificSkills(
  skills: string[]
): string[] {

  const skillSet =
    new Set(skills);

  return skills.filter(skill => {

    for (
      const [parent, children]
      of Object.entries(SKILL_HIERARCHY)
    ) {

      if (
        children.includes(skill) &&
        skillSet.has(parent)
      ) {
        return false;
      }
    }

    return true;
  });
}