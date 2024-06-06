import { DataTypes } from "sequelize";
import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

export const Detail = db.define("detail", {
  size: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
});
