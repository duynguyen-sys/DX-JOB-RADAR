import { getSkillMetadata } from "./resolve-skill-metadata.js";

const skills = [
  "NODE.JS",
  "REACT",
  "TYPESCRIPT",
  "SQL SERVER",
  "REST API",
  "GIT",
  "DOCKER",
  "AWS",
  "GIS",
  "MICROSOFT"
];

console.log("\n🧠 SKILL METADATA V1\n");

const result = skills.map(skill => {

  const metadata =
    getSkillMetadata(skill);

  return {
    skill,
    category:
      metadata?.category ?? "UNKNOWN",
    weight:
      metadata?.weight ?? 0
  };
});

console.table(result);