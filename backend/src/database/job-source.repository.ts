import { db } from "./database.js";

export interface JobSource {
  SourceId: number;
  Name: string;
  BaseUrl: string | null;
  IsActive: number;
  CreatedAt: string;
}

export class JobSourceRepository {
  create(name: string, baseUrl?: string): JobSource {
    const statement = db.prepare(`
      INSERT INTO JobSources
        (Name, BaseUrl, IsActive)
      VALUES
        (?, ?, 1)
    `);

    const result = statement.run(
      name.toUpperCase(),
      baseUrl ?? null
    );

    return this.findById(Number(result.lastInsertRowid))!;
  }

  findById(id: number): JobSource | undefined {
    return db
      .prepare(`
        SELECT *
        FROM JobSources
        WHERE SourceId = ?
      `)
      .get(id) as JobSource | undefined;
  }

  findByName(name: string): JobSource | undefined {
    return db
      .prepare(`
        SELECT *
        FROM JobSources
        WHERE Name = ?
      `)
      .get(name.toUpperCase()) as JobSource | undefined;
  }

  findAll(): JobSource[] {
    return db
      .prepare(`
        SELECT *
        FROM JobSources
        ORDER BY SourceId
      `)
      .all() as JobSource[];
  }

  findActive(): JobSource[] {
    return db
      .prepare(`
        SELECT *
        FROM JobSources
        WHERE IsActive = 1
        ORDER BY SourceId
      `)
      .all() as JobSource[];
  }

  setActive(name: string, active: boolean): void {
    db.prepare(`
      UPDATE JobSources
      SET IsActive = ?
      WHERE Name = ?
    `).run(
      active ? 1 : 0,
      name.toUpperCase()
    );
  }
}