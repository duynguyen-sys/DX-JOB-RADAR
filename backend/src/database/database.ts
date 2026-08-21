import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDirectory = path.resolve(process.cwd(), "../data");

if (!fs.existsSync(dataDirectory)) {
  fs.mkdirSync(dataDirectory, { recursive: true });
}

const databasePath = path.join(
  dataDirectory,
  "dx-job-radar.db"
);

export const db = new Database(databasePath);

db.pragma("journal_mode = WAL");

console.log(`🗄️ SQLite database: ${databasePath}`);