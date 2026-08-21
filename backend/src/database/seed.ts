import { db } from "./database.js";

const skills = [
  ["SQL Server", "Database", 10],
  ["T-SQL", "Database", 10],
  ["Database", "Database", 10],

  ["C#", ".NET", 9],
  [".NET", ".NET", 9],

  ["Node.js", "Backend", 9],
  ["Express", "Backend", 8],
  ["REST API", "Backend", 8],

  ["React", "Frontend", 8],
  ["JavaScript", "Frontend", 8],
  ["TypeScript", "Frontend", 7],

  ["Windows Server", "System", 9],
  ["IT Support", "System", 9],

  ["LAN", "Network", 8],
  ["Network", "Network", 8],

  ["Docker", "DevOps", 7]
];

const insert = db.prepare(`
  INSERT OR IGNORE INTO UserSkills
  (Skill, Category, Weight)
  VALUES (?, ?, ?)
`);

const transaction = db.transaction(() => {
  for (const skill of skills) {
    insert.run(...skill);
  }
});

transaction();

console.log(`🧠 ${skills.length} skills loaded`);