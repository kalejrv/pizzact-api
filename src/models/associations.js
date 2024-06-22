import Role from "./role/role.model.js";
import User from "./user/user.model.js";
import { Order, OrderPizza, Status } from "./order/index.js";
import { Detail, Flavor, Pizza } from "./pizza/index.js";

/* Relationship 1:1 between Order and User.
  Relationship 1:N between User and Order. */
Order.belongsTo(User, { foreignKey: "id_user" });
User.hasMany(Order, { foreignKey: "id_user" });

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

/* Relationship 1:1 between User and Role.
  Relationship 1:N between Role and User. */
User.belongsTo(Role, { foreignKey: "id_role" });
Role.hasMany(User, { foreignKey: "id_role" });

export { User, Status, Order, Detail, Flavor, Pizza, OrderPizza, Role };
