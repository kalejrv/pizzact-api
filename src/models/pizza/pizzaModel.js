import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

export const Pizza = db.define("tb_pizza", {
  id_pizza: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
  },
});
