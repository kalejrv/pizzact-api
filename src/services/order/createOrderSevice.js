import { Flavor, Order, Status } from "../../models/associations.js";

export const getPizzas = async () => {
  try {
    const pizzas = await Flavor.findAll();

    return pizzas;
  } catch (error) {
    console.log(error);
  };
};

export const createOrder = async (client) => {
  const { id_client } = client;
  const { id_status } = await Status.findOne({ where: { id_status: 1 } });

  try {
    const order = await Order.create({ id_client, id_status });

    return order;
  } catch (error) {
    console.log(error);
  };
};
