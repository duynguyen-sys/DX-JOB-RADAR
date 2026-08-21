import { RemotiveCollector } from "../collectors/remotive.collector.js";
import { normalizeJob } from "./job-normalizer.js";
import {
  enrichJobSkills
} from "./enrich-job-skills.js";

console.log("\n🧠 REMOTIVE → NORMALIZER\n");

const collector =
  new RemotiveCollector();

const rawJobs =
  await collector.collect();

const normalizedJobs =
  rawJobs.map(normalizeJob);

const enrichedJobs =
  normalizedJobs.map(
    enrichJobSkills
  );

console.log(
  `Raw jobs: ${rawJobs.length}`
);

console.log(
  `Normalized jobs: ${normalizedJobs.length}`
);

console.log(
  `Enriched jobs: ${enrichedJobs.length}`
);


// =====================================================
// NORMALIZED JOBS
// =====================================================

console.log(
  "\n📋 NORMALIZED JOBS\n"
);

console.table(
  enrichedJobs.map(job => ({
    source: job.source,

    title: job.title,

    company: job.company,

    remote: job.remote,

    skills:
      job.skillDetails
        .map(
          skill =>
            `${skill.skill}(${skill.weight})`
        )
        .join(", "),

    publishedAt:
      job.publishedAt
  }))
);


// =====================================================
// RAW / SPECIFIC SKILL ANALYSIS
// =====================================================

console.log(
  "\n🧠 SKILL ANALYSIS\n"
);

const skillCount =
  new Map<string, number>();

for (
  const job of normalizedJobs
) {

  for (
    const skill of job.skills
  ) {

    skillCount.set(
      skill,
      (skillCount.get(skill) ?? 0) + 1
    );

  }
}

const skillSummary =
  [...skillCount.entries()]
    .sort(
      (a, b) =>
        b[1] - a[1]
    )
    .map(
      ([skill, count]) => ({
        skill,
        jobs: count
      })
    );

console.table(
  skillSummary
);


// =====================================================
// WEIGHTED SKILL FREQUENCY
// =====================================================

console.log(
  "\n📊 WEIGHTED SKILL FREQUENCY\n"
);

const weightedSkills =
  new Map<
    string,
    {
      jobs: number;
      totalWeight: number;
    }
  >();

for (
  const job of enrichedJobs
) {

  for (
    const skill of job.skillDetails
  ) {

    const current =
      weightedSkills.get(
        skill.skill
      ) ?? {
        jobs: 0,
        totalWeight: 0
      };

    current.jobs += 1;

    current.totalWeight +=
      skill.weight;

    weightedSkills.set(
      skill.skill,
      current
    );
  }
}

console.table(
  [...weightedSkills.entries()]
    .sort(
      (a, b) =>
        b[1].totalWeight -
        a[1].totalWeight
    )
    .map(
      ([skill, data]) => ({
        skill,
        jobs: data.jobs,
        totalWeight:
          data.totalWeight
      })
    )
);


// =====================================================
// CATEGORY DISTRIBUTION
// =====================================================

console.log(
  "\n📚 SKILL CATEGORY DISTRIBUTION\n"
);

const categories =
  new Map<
    string,
    {
      occurrences: number;
      totalWeight: number;
    }
  >();

for (
  const job of enrichedJobs
) {

  for (
    const skill of job.skillDetails
  ) {

    const current =
      categories.get(
        skill.category
      ) ?? {
        occurrences: 0,
        totalWeight: 0
      };

    current.occurrences += 1;

    current.totalWeight +=
      skill.weight;

    categories.set(
      skill.category,
      current
    );
  }
}

console.table(
  [...categories.entries()]
    .sort(
      (a, b) =>
        b[1].totalWeight -
        a[1].totalWeight
    )
    .map(
      ([category, data]) => ({
        category,

        occurrences:
          data.occurrences,

        totalWeight:
          data.totalWeight
      })
    )
);


// =====================================================
// DONE
// =====================================================

console.log(
  "\n✅ REMOTIVE NORMALIZATION + SKILL ENRICHMENT COMPLETE\n"
);