import { CollectorManager } from "../services/collector-manager.js";
import { MockCollector } from "./mock.collector.js";

const manager = new CollectorManager();

manager.register(
  new MockCollector()
);

console.log("\n🚀 COLLECT ALL ACTIVE SOURCES\n");

const jobs =
  await manager.collectAll();

console.log("\n📦 RESULT\n");

console.dir(
  jobs,
  { depth: null }
);