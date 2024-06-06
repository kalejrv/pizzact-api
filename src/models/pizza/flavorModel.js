import { DataTypes } from "sequelize";
import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

export const Flavor = db.define("flavor", {
  flavor: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(6, 2),
  },
});
