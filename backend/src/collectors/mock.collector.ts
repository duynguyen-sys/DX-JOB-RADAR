import type { JobCollector } from "./collector.interface.js";
import type { RawJob } from "../types/job.js";

export class MockCollector implements JobCollector {
  readonly source = "MOCK";

  async collect(): Promise<RawJob[]> {
    return [
      {
        source: this.source,
        externalId: "MOCK-001",

        title: "Senior Node.js Developer",
        company: "DX LAB Demo",

        location: "Remote",
        jobUrl: "https://example.com/jobs/mock-001",

        description:
          "Senior Node.js developer with SQL Server experience.",

        employmentType: "FULL_TIME",
        remoteType: "REMOTE",

        salaryMin: 2000,
        salaryMax: 3000,
        salaryCurrency: "USD",

        publishedAt: new Date().toISOString()
      }
    ];
  }
}