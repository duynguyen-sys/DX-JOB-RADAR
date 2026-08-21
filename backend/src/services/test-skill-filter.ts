import { extractSkills } from "./skill-extractor.js";
import { filterSpecificSkills } from "./filter-specific-skills.js";

const text = `
Senior Full Stack Developer
Node.js React TypeScript SQL Server
AWS Docker Git REST API
`;

const detected =
  extractSkills(text);

const filtered =
  filterSpecificSkills(detected);

console.log("\n🧠 RAW SKILLS");
console.table(detected);

console.log("\n🎯 SPECIFIC SKILLS");
console.table(filtered);

console.log(
  `\nRaw: ${detected.length}`
);

console.log(
  `Specific: ${filtered.length}`
);