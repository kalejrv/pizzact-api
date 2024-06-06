import { Client } from "./client";
import { Order, OrderPizza, Status } from "./order";
import { Detail, Flavor, Pizza } from "./pizza";

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

/* Relationship 1:1 between Pizza and OrderPizza.
  Relationship 1:N between OrderPizza and Pizza. */
Pizza.belongsTo(OrderPizza, { foreignKey: "id_pizza" });
OrderPizza.hasMany(Pizza, { foreignKey: "id_pizza" });

/* Relationship 1:1 between Order and OrderPizza.
  Relationship 1:N between OrderPizza and Order. */
Order.belongsTo(OrderPizza, { foreignKey: "id_order" });
OrderPizza.hasMany(Order, { foreignKey: "id_order" });

export { Client, Status, Order, Detail, Flavor, Pizza, OrderPizza };
