import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const sql = neon(process.env.DATABASE_URL);

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS consultations (
      id        SERIAL PRIMARY KEY,
      name      TEXT        NOT NULL,
      email     TEXT        NOT NULL,
      company   TEXT,
      phone     TEXT,
      inquiry_type TEXT     NOT NULL,
      message   TEXT        NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}
