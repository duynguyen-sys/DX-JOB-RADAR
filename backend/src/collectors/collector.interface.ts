import type { RawJob } from "../types/job.js";

export interface JobCollector {
  readonly source: string;

  collect(): Promise<RawJob[]>;
}