export type SkillCategory =
  | "BACKEND"
  | "FRONTEND"
  | "DATABASE"
  | "DEVOPS"
  | "DEVELOPMENT"
  | "CLOUD"
  | "GIS"
  | "GENERAL";

export interface SkillMetadata {
  category: SkillCategory;
  weight: number;
  aliases?: string[];
}

export const SKILL_METADATA: Record<
  string,
  SkillMetadata
> = {

  // =========================
  // BACKEND
  // =========================

  "NODE.JS": {
    category: "BACKEND",
    weight: 5,
    aliases: [
      "NODE",
      "NODEJS"
    ]
  },

  ".NET": {
    category: "BACKEND",
    weight: 5,
    aliases: [
      "DOTNET",
      ".NET CORE"
    ]
  },

  "EXPRESS": {
    category: "BACKEND",
    weight: 4,
    aliases: [
      "EXPRESS.JS",
      "EXPRESSJS"
    ]
  },
"C#": {
  category: "BACKEND",
  weight: 5,
  aliases: [
    "CSHARP",
    "C SHARP"
  ]
},
  // =========================
  // FRONTEND
  // =========================

  "REACT": {
    category: "FRONTEND",
    weight: 5,
    aliases: [
      "REACT.JS",
      "REACTJS"
    ]
  },

  "TYPESCRIPT": {
    category: "FRONTEND",
    weight: 5,
    aliases: [
      "TS"
    ]
  },

  // =========================
  // DATABASE
  // =========================

  "SQL SERVER": {
    category: "DATABASE",
    weight: 5,
    aliases: [
      "MSSQL",
      "MS SQL",
      "MICROSOFT SQL SERVER"
    ]
  },

  "SQL": {
    category: "DATABASE",
    weight: 4,
    aliases: [
      "SQL QUERY"
    ]
  },

  "DATABASE": {
    category: "DATABASE",
    weight: 3,
    aliases: [
      "DB",
      "DATABASE SYSTEM"
    ]
  },

  // =========================
  // DEVELOPMENT
  // =========================

  "REST API": {
    category: "DEVELOPMENT",
    weight: 4,
    aliases: [
      "REST",
      "RESTFUL API"
    ]
  },

  "API": {
    category: "DEVELOPMENT",
    weight: 2,
    aliases: []
  },

  "GIT": {
    category: "DEVELOPMENT",
    weight: 3,
    aliases: [
      "GIT SCM"
    ]
  },

  "GITHUB": {
    category: "DEVELOPMENT",
    weight: 2,
    aliases: []
  },

  "FULL STACK": {
    category: "DEVELOPMENT",
    weight: 5,
    aliases: [
      "FULL-STACK",
      "FULLSTACK"
    ]
  },

  // =========================
  // DEVOPS
  // =========================

  "DOCKER": {
    category: "DEVOPS",
    weight: 4,
    aliases: []
  },

  "DEVOPS": {
    category: "DEVOPS",
    weight: 4,
    aliases: []
  },

  // =========================
  // CLOUD
  // =========================

  "AWS": {
    category: "CLOUD",
    weight: 3,
    aliases: [
      "AMAZON WEB SERVICES"
    ]
  },

  "AZURE": {
    category: "CLOUD",
    weight: 3,
    aliases: [
      "MICROSOFT AZURE"
    ]
  },

  // =========================
  // GIS
  // =========================

  "GIS": {
    category: "GIS",
    weight: 4,
    aliases: [
      "GEOGRAPHIC INFORMATION SYSTEM"
    ]
  },

  // =========================
  // GENERAL
  // =========================

  "MICROSOFT": {
    category: "GENERAL",
    weight: 0,
    aliases: []
  }
};