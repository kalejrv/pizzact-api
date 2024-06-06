import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import dbConnection from "../../config/dbConnection.js";

const db = await dbConnection();

const Client = db.define("client", {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(100),
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
    beforeCreate: async function (client) {
      const saltRoudns = 10;
      const salt = await bcrypt.genSalt(saltRoudns);
      client.password = await bcrypt.hash(client.password, salt);
    },
  },
});

Client.prototype.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export { Client };
