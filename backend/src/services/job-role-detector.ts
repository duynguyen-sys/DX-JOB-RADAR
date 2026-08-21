export type JobRole =
  | "BACKEND_DEVELOPER"
  | "FRONTEND_DEVELOPER"
  | "FULL_STACK_DEVELOPER"
  | "SOFTWARE_DEVELOPER"
  | "DATABASE_SPECIALIST"
  | "IT_SUPPORT"
  | "DEVOPS_ENGINEER"
  | "GIS_SPECIALIST"
  | "AI_ENGINEER"
  | "SALES_BUSINESS"
  | "GRAPHIC_DESIGNER"
  | "CONTENT_REVIEW"
  | "OTHER";


interface RoleRule {
  role: JobRole;
  keywords: string[];
}


const ROLE_RULES: RoleRule[] = [

  // =====================================================
  // FULL STACK
  // =====================================================

  {
    role: "FULL_STACK_DEVELOPER",

    keywords: [
      "FULL STACK",
      "FULL-STACK",
      "FULLSTACK"
    ]
  },


  // =====================================================
  // BACKEND
  // =====================================================

  {
    role: "BACKEND_DEVELOPER",

    keywords: [
      "BACKEND DEVELOPER",
      "BACK-END DEVELOPER",
      "BACK END DEVELOPER",

      "NODE.JS DEVELOPER",
      "NODEJS DEVELOPER",

      "BACKEND ENGINEER",
      "BACK-END ENGINEER",
      "BACK END ENGINEER",

      "NODE.JS ENGINEER",
      "NODEJS ENGINEER"
    ]
  },


  // =====================================================
  // FRONTEND
  // =====================================================

  {
    role: "FRONTEND_DEVELOPER",

    keywords: [
      "FRONTEND DEVELOPER",
      "FRONT-END DEVELOPER",
      "FRONT END DEVELOPER",

      "FRONTEND ENGINEER",
      "FRONT-END ENGINEER",
      "FRONT END ENGINEER",

      "REACT DEVELOPER",
      "REACT ENGINEER"
    ]
  },


  // =====================================================
  // DATABASE
  // =====================================================

  {
    role: "DATABASE_SPECIALIST",

    keywords: [
      "DATABASE ADMINISTRATOR",
      "DATABASE ADMIN",
      "DATABASE SPECIALIST",

      "DATABASE DEVELOPER",

      "SQL DEVELOPER",

      "DBA"
    ]
  },


  // =====================================================
  // IT SUPPORT
  // =====================================================

  {
    role: "IT_SUPPORT",

    keywords: [
      "IT SUPPORT",
      "SERVICE DESK",
      "HELP DESK",
      "TECHNICAL SUPPORT",
      "SYSTEM SUPPORT",
      "IT SUPPORT ENGINEER",
      "SUPPORT ENGINEER"
    ]
  },


  // =====================================================
  // DEVOPS
  // =====================================================

  {
    role: "DEVOPS_ENGINEER",

    keywords: [
      "DEVOPS ENGINEER",
      "DEVOPS",
      "SITE RELIABILITY ENGINEER",
      "SITE RELIABILITY",
      "SRE"
    ]
  },


  // =====================================================
  // GIS
  // =====================================================

  {
    role: "GIS_SPECIALIST",

    keywords: [
      "GIS SPECIALIST",
      "GIS ANALYST",
      "GIS ENGINEER",
      "GIS DEVELOPER",
      "GEOGRAPHIC INFORMATION"
    ]
  },


  // =====================================================
  // AI
  // =====================================================

  {
    role: "AI_ENGINEER",

    keywords: [
      "AI ENGINEER",
      "AI DEVELOPER",
      "AI ARCHITECT",
      "ARTIFICIAL INTELLIGENCE",
      "MACHINE LEARNING",
      "ML ENGINEER",
      "ML DEVELOPER"
    ]
  },


  // =====================================================
  // SALES / BUSINESS
  // =====================================================

  {
    role: "SALES_BUSINESS",

    keywords: [
      "SALES",
      "SALES REPRESENTATIVE",
      "SALES REPRESENTATIVE",
      "SALES MANAGER",
      "SALES SPECIALIST",
      "BUSINESS DEVELOPMENT",
      "BUSINESS DEVELOPMENT REPRESENTATIVE",
      "ACCOUNT EXECUTIVE",
      "ACCOUNT MANAGER"
    ]
  },


  // =====================================================
  // GRAPHIC DESIGN
  // =====================================================

  {
    role: "GRAPHIC_DESIGNER",

    keywords: [
      "GRAPHIC DESIGNER",
      "GRAPHIC DESIGN",
      "UI DESIGNER",
      "UX DESIGNER",
      "VISUAL DESIGNER"
    ]
  },


  // =====================================================
  // CONTENT
  // =====================================================

  {
    role: "CONTENT_REVIEW",

    keywords: [
      "CONTENT REVIEWER",
      "CONTENT REVIEW",
      "CONTENT MODERATOR",
      "CONTENT MODERATION",
      "MODERATOR"
    ]
  },


  // =====================================================
  // SOFTWARE DEVELOPER
  // =====================================================

  {
    role: "SOFTWARE_DEVELOPER",

    keywords: [
      "SOFTWARE DEVELOPER",
      "SOFTWARE ENGINEER",
      "APPLICATION DEVELOPER",
      "APPLICATION ENGINEER"
    ]
  }
];


function normalizeTitle(
  title: string
): string {

  return title
    .toUpperCase()
    .replace(/[^A-Z0-9.#]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


export function detectJobRole(
  title: string
): JobRole {

  const normalizedTitle =
    normalizeTitle(title);

  for (const rule of ROLE_RULES) {

    for (const keyword of rule.keywords) {

      const normalizedKeyword =
        normalizeTitle(keyword);

      if (
        normalizedTitle.includes(
          normalizedKeyword
        )
      ) {
        return rule.role;
      }
    }
  }

  return "OTHER";
}