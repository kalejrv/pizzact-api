import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

export const Detail = db.define("tb_detail", {
  id_detail: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
});
