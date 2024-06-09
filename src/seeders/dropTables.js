import { Order, OrderPizza, Pizza } from "../models/associations.js";

const dropTables = async () => {
  try {
    await Order.drop(),
    await Pizza.drop(),
    await OrderPizza.drop(),
    
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
