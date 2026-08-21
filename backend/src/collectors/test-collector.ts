import { CollectorManager } from "../services/collector-manager.js";
import { MockCollector } from "./mock.collector.js";

const manager = new CollectorManager();

manager.register(new MockCollector());

console.log("\n📡 Registered sources:");
console.log(manager.getSources());

const jobs = await manager.collectOne("MOCK");

console.log("\n📦 Jobs collected:");
console.dir(jobs, { depth: null });