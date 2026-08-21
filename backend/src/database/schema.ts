import { db } from "./database.js";

db.exec(`
  CREATE TABLE IF NOT EXISTS JobSources (
    SourceId INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL UNIQUE,
    BaseUrl TEXT,
    IsActive INTEGER NOT NULL DEFAULT 1,
    CreatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Jobs (
    JobId INTEGER PRIMARY KEY AUTOINCREMENT,

    SourceId INTEGER NOT NULL,
    ExternalId TEXT,

    Title TEXT NOT NULL,
    Company TEXT,

    Location TEXT,
    JobUrl TEXT NOT NULL,

    Description TEXT,

    EmploymentType TEXT,
    RemoteType TEXT,

    SalaryMin REAL,
    SalaryMax REAL,
    SalaryCurrency TEXT,

    PublishedAt TEXT,
    CollectedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CreatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (SourceId)
      REFERENCES JobSources(SourceId),

    UNIQUE(SourceId, ExternalId)
  );

  CREATE TABLE IF NOT EXISTS UserSkills (
    SkillId INTEGER PRIMARY KEY AUTOINCREMENT,

    Skill TEXT NOT NULL UNIQUE,
    Category TEXT,

    Weight INTEGER NOT NULL DEFAULT 1,

    IsPreferred INTEGER NOT NULL DEFAULT 1,

    CreatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS JobScores (
    ScoreId INTEGER PRIMARY KEY AUTOINCREMENT,

    JobId INTEGER NOT NULL,

    MatchScore INTEGER NOT NULL DEFAULT 0,
    Priority TEXT,

    MatchedSkills TEXT,
    MissingSkills TEXT,

    ScoredAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (JobId)
      REFERENCES Jobs(JobId)
  );

  CREATE TABLE IF NOT EXISTS SearchRuns (
    SearchRunId INTEGER PRIMARY KEY AUTOINCREMENT,

    SourceName TEXT,

    StartedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FinishedAt TEXT,

    JobsFound INTEGER DEFAULT 0,
    JobsNew INTEGER DEFAULT 0,
    JobsDuplicate INTEGER DEFAULT 0,

    Status TEXT DEFAULT 'RUNNING',
    ErrorMessage TEXT
  );

  CREATE TABLE IF NOT EXISTS Applications (
    ApplicationId INTEGER PRIMARY KEY AUTOINCREMENT,

    JobId INTEGER NOT NULL,

    Status TEXT NOT NULL DEFAULT 'SAVED',

    Proposal TEXT,
    AppliedAt TEXT,

    Notes TEXT,

    CreatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (JobId)
      REFERENCES Jobs(JobId)
  );
`);

console.log("✅ Database schema initialized");