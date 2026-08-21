import type { JobCollector } from "../collectors/collector.interface.js";
import type { RawJob } from "../types/job.js";

export class CollectorManager {
  private collectors = new Map<string, JobCollector>();

  register(collector: JobCollector): void {
    const source = collector.source.toUpperCase();

    if (this.collectors.has(source)) {
      throw new Error(
        `Collector already registered: ${source}`
      );
    }

    this.collectors.set(source, collector);

    console.log(`📡 Collector registered: ${source}`);
  }

  getCollector(source: string): JobCollector | undefined {
    return this.collectors.get(source.toUpperCase());
  }

  getSources(): string[] {
    return [...this.collectors.keys()];
  }

  async collectOne(source: string): Promise<RawJob[]> {
    const collector = this.getCollector(source);

    if (!collector) {
      throw new Error(
        `Collector not found: ${source}`
      );
    }

    console.log(`🔎 Collecting jobs from: ${source}`);

    return collector.collect();
  }

  async collectAll(): Promise<RawJob[]> {
    const results: RawJob[] = [];

    for (const collector of this.collectors.values()) {
      try {
        console.log(
          `🔎 Collecting jobs from: ${collector.source}`
        );

        const jobs = await collector.collect();

        results.push(...jobs);

        console.log(
          `✅ ${collector.source}: ${jobs.length} jobs`
        );
      } catch (error) {
        console.error(
          `❌ ${collector.source} failed`,
          error
        );
      }
    }

    return results;
  }
}