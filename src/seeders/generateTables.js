import db from "../config/dbConnection.js";
import { Detail, Flavor, Order, OrderPizza, Pizza, Role, Status, User } from "../models/associations.js";
import { detail, flavor, order, orderPizza, pizza, role, status, user } from "./tables/index.js";

const generateTables = async () => {
	try {
		await db.authenticate();
		await db.sync();

		await Promise.all([
			Status.bulkCreate(status),
			Detail.bulkCreate(detail),
			Flavor.bulkCreate(flavor),
			Role.bulkCreate(role),
		]);
		await User.bulkCreate(user);
		await Order.bulkCreate(order);
		await Pizza.bulkCreate(pizza);
		await OrderPizza.bulkCreate(orderPizza);

		console.log(`
			|----------------------------------|
			|  Tables generated successfully!  |
			|----------------------------------|
		`);

		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	};
};

if (process.argv[2] === '-gt') generateTables();
