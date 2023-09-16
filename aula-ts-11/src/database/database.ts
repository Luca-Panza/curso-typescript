import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "12341234",
  database: "lesson11",
});

export { db };
