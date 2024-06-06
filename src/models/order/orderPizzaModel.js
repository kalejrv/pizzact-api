import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

export const OrderPizza = db.define("order_pizza", {});
