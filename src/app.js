import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/dbConnection.js";
import { authRouter } from "./routes/index.js";

/* Allow environment variables and create a express application. */
dotenv.config();
const app = express();

/* Configure express to use cors, response json data and allow data from html forms. */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Listen requests to the server. */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});

/* Make database connection. */
try {
  await db.authenticate();
  await db.sync();

  console.log(`${db.config.database} db connected successfully.`);
} catch (error) {
  console.log(error);
};

/* Routing. */
const apiVersion = "/api/v1";
app.use(`${apiVersion}/auth`, authRouter);