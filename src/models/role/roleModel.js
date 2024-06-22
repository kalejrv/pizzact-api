import { DataTypes } from "sequelize";
import db from "../../config/dbConnection.js";

const Role = db.define("tb_role", {
  id_role: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

export default Role;
