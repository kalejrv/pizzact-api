import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

export const OrderPizza = db.define("tb_order_pizza", {
  id_order_pizza: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});
