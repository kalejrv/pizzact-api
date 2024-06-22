import Client from "./client/clientModel.js";
import Admin from "./admin/adminModel.js";
import Role from "./role/roleModel.js";
import { Order, OrderPizza, Status } from "./order/index.js";
import { Detail, Flavor, Pizza } from "./pizza/index.js";

/* Relationship 1:1 between Order and Client.
  Relationship 1:N between Client and Order. */
Order.belongsTo(Client, { foreignKey: "id_client" });
Client.hasMany(Order, { foreignKey: "id_client" });

/* Relationship 1:1 between Order and Status.
  Relationship 1:N between Status and Order. */
Order.belongsTo(Status, { foreignKey: "id_status" });
Status.hasMany(Order, { foreignKey: "id_status" });

/* Relationship 1:1 between Pizza and Detail.
  Relationship 1:N between Detail and Pizza. */
Pizza.belongsTo(Detail, { foreignKey: "id_detail" });
Detail.hasMany(Pizza, { foreignKey: "id_detail" });

/* Relationship 1:1 between Pizza and Flavor.
  Relationship 1:N between Flavor and Pizza. */
Pizza.belongsTo(Flavor, { foreignKey: "id_flavor" });
Flavor.hasMany(Pizza, { foreignKey: "id_flavor" });

/* Relationship 1:1 between OrderPizza and Pizza.
  Relationship 1:N between Pizza and OrderPizza. */
OrderPizza.belongsTo(Pizza, { foreignKey: "id_pizza" });
Pizza.hasMany(OrderPizza, { foreignKey: "id_pizza" });

/* Relationship 1:1 between OrderPizza and Order.
  Relationship 1:N between Order and OrderPizza. */
OrderPizza.belongsTo(Order, { foreignKey: "id_order" });
Order.hasMany(OrderPizza, { foreignKey: "id_order" });

/* Relationship 1:1 between Client and Role.
  Relationship 1:N between Role and Client. */
Client.belongsTo(Role, { foreignKey: "id_role" });
Role.hasMany(Client, { foreignKey: "id_role" });

/* Relationship 1:1 between Admin and Role.
  Relationship 1:N between Role and Admin. */
Admin.belongsTo(Role, { foreignKey: "id_role" });
Role.hasMany(Admin, { foreignKey: "id_role" });

export { Client, Status, Order, Detail, Flavor, Pizza, OrderPizza, Admin, Role };
