import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../../config/dbConnection.js";

const Admin = db.define("tb_admin", {
  id_admin: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async function (admin) {
      const saltRoudns = 10;
      const salt = await bcrypt.genSalt(saltRoudns);
      admin.password = await bcrypt.hash(admin.password, salt);
    },
  },
});

Admin.prototype.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default Admin;
