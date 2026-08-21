import { extractSkills } from "./skill-extractor.js";

const tests = [
  {
    name: "Real REST API",
    text: "Experience building REST API services"
  },
  {
    name: "API integration",
    text: "API integration with third party systems"
  },
  {
    name: "Graphic Designer",
    text: "Senior Graphic Designer creating visual assets"
  },
  {
    name: "Microsoft Office",
    text: "Microsoft Office, Word and Excel"
  },
  {
    name: "SQL Server",
    text: "SQL Server database administration"
  }
];

console.log("\n🎯 SKILL PRECISION TEST\n");

for (const test of tests) {

  const skills =
    extractSkills(test.text);

  console.log(`\n${test.name}`);
  console.log("Skills:", skills);
}