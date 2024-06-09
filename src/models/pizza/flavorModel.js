import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

export const Flavor = db.define("tb_flavor", {
  id_flavor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
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
