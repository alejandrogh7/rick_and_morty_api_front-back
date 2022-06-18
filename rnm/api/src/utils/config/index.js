require("dotenv").config();

module.exports = {
  db_user: process.env.DB_USER || "postgres",
  db_password: process.env.DB_PASSWORD || "password",
  db_host: process.env.DB_HOST,
  host: process.env.HOST,
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_NAME,
};
