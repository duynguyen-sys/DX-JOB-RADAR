import type { JobCollector } from "../collectors/collector.interface.js";
import type { RawJob } from "../types/job.js";
import {
  JobSourceRepository
} from "../database/job-source.repository.js";

export class CollectorManager {
  private collectors = new Map<string, JobCollector>();

  private sourceRepository =
    new JobSourceRepository();

  register(collector: JobCollector): void {
    const source = collector.source.toUpperCase();

    if (this.collectors.has(source)) {
      throw new Error(
        `Collector already registered: ${source}`
      );
    }

    this.collectors.set(source, collector);

    console.log(
      `📡 Collector registered: ${source}`
    );
  }

  getCollector(
    source: string
  ): JobCollector | undefined {
    return this.collectors.get(
      source.toUpperCase()
    );
  }

  getSources(): string[] {
    return [...this.collectors.keys()];
  }

  async collectOne(
    source: string
  ): Promise<RawJob[]> {

    const collector =
      this.getCollector(source);

    if (!collector) {
      throw new Error(
        `Collector not found: ${source}`
      );
    }

    const dbSource =
      this.sourceRepository.findByName(source);

    if (!dbSource) {
      throw new Error(
        `Job source not registered in database: ${source}`
      );
    }

    if (!dbSource.IsActive) {
      console.log(
        `⏭️ Source disabled: ${source}`
      );

      return [];
    }

    console.log(
      `🔎 Collecting jobs from: ${source}`
    );

    return collector.collect();
  }

  async collectAll(): Promise<RawJob[]> {

    const activeSources =
      this.sourceRepository.findActive();

    const results: RawJob[] = [];

    for (const source of activeSources) {

      const collector =
        this.getCollector(source.Name);

      if (!collector) {
        console.log(
          `⚠️ No collector registered for: ${source.Name}`
        );

        continue;
      }

      try {

        console.log(
          `🔎 Collecting jobs from: ${source.Name}`
        );

        const jobs =
          await collector.collect();

        results.push(...jobs);

        console.log(
          `✅ ${source.Name}: ${jobs.length} jobs`
        );

      } catch (error) {

        console.error(
          `❌ ${source.Name} failed`,
          error
        );
      }
    }

    return results;
  }
}