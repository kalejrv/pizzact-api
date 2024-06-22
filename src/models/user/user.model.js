import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../../config/dbConnection.js";

const User = db.define("tb_user", {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER(8),
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
    beforeCreate: async function (user) {
      const saltRoudns = 10;
      const salt = await bcrypt.genSalt(saltRoudns);
      user.password = await bcrypt.hash(user.password, salt);
    },
  },
});

User.prototype.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default User;
