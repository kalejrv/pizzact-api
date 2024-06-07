import db from "../config/dbConnection.js";
import { Client, Detail, Flavor, Order, OrderPizza, Pizza, Status } from "../models/associations.js";
import { admin, client, detail, flavor, order, orderPizza, pizza, status } from "./tables/index.js";
import Admin from "../models/admin/adminModel.js";

const generateTables = async () => {
	try {
		await db.authenticate();
		await db.sync();

		await Promise.all([
			Status.bulkCreate(status),
			Client.bulkCreate(client),
			Detail.bulkCreate(detail),
			Flavor.bulkCreate(flavor),
		]);
		await Order.bulkCreate(order);
		await Pizza.bulkCreate(pizza);
		await OrderPizza.bulkCreate(orderPizza)
		await Admin.bulkCreate(admin);

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
