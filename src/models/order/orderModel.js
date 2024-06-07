import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

export const Order = db.define("tb_order", {
  id_order: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});
