import { extractSkills } from "./skill-extractor.js";

const text = `
Senior Full Stack Developer
Node.js React TypeScript SQL Server
AWS Docker Git REST API
`;

console.log("\n🧠 DX SKILL EXTRACTOR\n");

const skills = extractSkills(text);

console.log("Detected skills:");
console.table(skills);

console.log(`\nTotal skills: ${skills.length}`);