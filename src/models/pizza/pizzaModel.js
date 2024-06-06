import { DataTypes } from "sequelize";
import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

export const Pizza = db.define("pizza", {
  quantity: {
    type: DataTypes.INTEGER(2),
    allowNull: false,
  },
});
