import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../../config/dbConnection.js";

const Client = db.define("tb_client", {
  id_client: {
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

export default Client;
