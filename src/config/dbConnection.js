import { Sequelize } from "sequelize";
import dontenv from "dotenv";

dontenv.config();

/* Create a connection with mysql database. */
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  timezone: "-06:00",
  define: {
    timestamps: true,
  },
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});

export default db;
