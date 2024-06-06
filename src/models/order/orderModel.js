import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

export const Order = db.define("order", {});
