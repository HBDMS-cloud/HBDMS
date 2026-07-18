const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "your_password",
  database: "hbdms",
});

module.exports = pool;
