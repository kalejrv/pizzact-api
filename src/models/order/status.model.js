import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

export const Status = db.define("tb_status", {
  id_status: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});
