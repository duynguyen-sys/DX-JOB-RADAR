import { RemotiveCollector } from "./remotive.collector.js";

const collector =
  new RemotiveCollector();

console.log("\n🕷️ REMOTIVE COLLECTOR\n");

try {
  const start = Date.now();

  const jobs =
    await collector.collect();

  const duration =
    Date.now() - start;

  console.log(
    `HTTP: SUCCESS`
  );

  console.log(
    `Jobs received: ${jobs.length}`
  );

  console.log(
    `Duration: ${duration} ms`
  );

  console.log("\n📋 JOBS\n");

  console.table(
    jobs.slice(0, 10).map(job => ({
      title: job.title,
      company: job.company,
      location: job.location,
      publishedAt: job.publishedAt,
      url: job.jobUrl
    }))
  );

} catch (error) {

  console.error(
    "\n❌ REMOTIVE COLLECTOR FAILED\n"
  );

  console.error(error);
}