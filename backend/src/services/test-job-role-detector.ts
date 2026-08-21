import {
  detectJobRole
} from "./job-role-detector.js";

console.log("\n🎯 DX JOB ROLE DETECTOR V1\n");

const tests = [
  ["Senior Node.js Developer", "BACKEND_DEVELOPER"],
  ["Senior React Developer", "FRONTEND_DEVELOPER"],
  ["Tech Lead Full-Stack Rails Engineer", "FULL_STACK_DEVELOPER"],
  ["Senior Software Engineer", "SOFTWARE_DEVELOPER"],
  ["SQL Developer", "DATABASE_SPECIALIST"],
  ["Database Administrator", "DATABASE_SPECIALIST"],
  ["Tier III Service Desk Engineer", "IT_SUPPORT"],
  ["DevOps Engineer", "DEVOPS_ENGINEER"],
  ["GIS Specialist", "GIS_SPECIALIST"],
  ["Senior AI Engineer", "AI_ENGINEER"],
  ["Business Development Representative", "SALES_BUSINESS"],
  ["Senior Graphic Designer", "GRAPHIC_DESIGNER"],
  ["Content Reviewer", "CONTENT_REVIEW"],
  ["Patient Care Specialist", "OTHER"],
];

for (const [title, expected] of tests) {

  const actual =
    detectJobRole(title);

  if (actual !== expected) {
    throw new Error(
      `${title}: expected ${expected}, got ${actual}`
    );
  }

  console.log(
    `✅ ${title} → ${actual}`
  );
}

console.log(
  "\n🎯 ALL ROLE DETECTOR V1 TESTS PASSED"
);