require("dotenv").config();

try {
  const pgp = require("pg-promise")();
  const db = pgp({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
  });

  module.exports = db;
  console.log("Database connection sucessfully established!");
} catch (e) {
  console.error("Database connection failed", e);
  process.exit(1);
}
