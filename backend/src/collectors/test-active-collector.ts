import { CollectorManager } from "../services/collector-manager.js";
import { MockCollector } from "./mock.collector.js";
import { RemotiveCollector } from "./remotive.collector.js";

const manager = new CollectorManager();

manager.register(
  new MockCollector()
);

manager.register(
  new RemotiveCollector()
);

console.log("\n🚀 COLLECT ALL ACTIVE SOURCES\n");

const start = Date.now();

const jobs =
  await manager.collectAll();

const duration =
  Date.now() - start;

console.log("\n📦 RESULT\n");

console.log(
  `Total jobs: ${jobs.length}`
);

console.log(
  `Duration: ${duration} ms`
);

console.table(
  jobs.map(job => ({
    source: job.source,
    title: job.title,
    company: job.company,
    location: job.location
  }))
);