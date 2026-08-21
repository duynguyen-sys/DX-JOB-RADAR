import { JobSourceRepository } from "./job-source.repository.js";

const repository = new JobSourceRepository();

function ensureSource(
  name: string,
  baseUrl: string
): void {
  const existing = repository.findByName(name);

  if (existing) {
    console.log(`ℹ️ Source already exists: ${name}`);
    return;
  }

  repository.create(name, baseUrl);

  console.log(`✅ Source created: ${name}`);
}

console.log("\n📡 Creating sources...\n");

ensureSource(
  "MOCK",
  "https://example.com"
);

ensureSource(
  "SOURCE-A",
  "https://source-a.example.com"
);

ensureSource(
  "REMOTIVE",
  "https://remotive.com/api/remote-jobs"
);

console.log("\n📋 ALL SOURCES");

console.table(
  repository.findAll()
);

console.log("\n🟢 ACTIVE SOURCES");

console.table(
  repository.findActive()
);

console.log("\n🔴 Disable SOURCE-A");

repository.setActive(
  "SOURCE-A",
  false
);

console.log("\n🟢 ACTIVE SOURCES AFTER DISABLE");

console.table(
  repository.findActive()
);