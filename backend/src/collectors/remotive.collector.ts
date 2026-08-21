import axios from "axios";
import type { JobCollector } from "./collector.interface.js";
import type { RawJob } from "../types/job.js";

interface RemotiveJob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary?: string;
  description: string;
}

interface RemotiveResponse {
  jobs: RemotiveJob[];
  "job-count": number;
}

export class RemotiveCollector implements JobCollector {
  readonly source = "REMOTIVE";

  private readonly apiUrl =
    "https://remotive.com/api/remote-jobs";

  async collect(): Promise<RawJob[]> {
    const response =
      await axios.get<RemotiveResponse>(
        this.apiUrl,
        {
          params: {
            category: "software-dev",
            limit: 50
          },
          timeout: 15000,
          headers: {
            "User-Agent":
              "DX-JOB-RADAR/0.1.0"
          }
        }
      );

    return response.data.jobs.map(
      (job): RawJob => ({
        source: this.source,

        externalId:
          String(job.id),

        title:
          job.title,

        company:
          job.company_name,

        location:
          job.candidate_required_location,

        jobUrl:
          job.url,

        description:
          job.description,

        employmentType:
          job.job_type,

        remoteType:
          "REMOTE",

        salaryMin:
          null,

        salaryMax:
          null,

        salaryCurrency:
          null,

        publishedAt:
          job.publication_date
      })
    );
  }
}