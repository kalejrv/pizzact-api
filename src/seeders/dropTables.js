import { Order, OrderPizza, Pizza, User } from "../models/associations.js";

const dropTables = async () => {
  try {
    await OrderPizza.drop();
    await Order.drop();
    await Pizza.drop();
    await User.drop();

    console.log(`
      |--------------------------------|
      |  Tables dropped successfully!  |
      |--------------------------------|
    `);

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  };
};

if (process.argv[2] === '-dt') dropTables();
