import { DataTypes } from "sequelize";
import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

export const Status = db.define("status", {
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});
