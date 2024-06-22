import { createOrder, getPizzas } from "../../services/order/index.js";

export const orderPage = async (_req, res) => {
  const pizzas = await getPizzas();

  res.status(200).json({
    msg: "Order page.",
    ok: true,
    pizzas,
  });
};

export const newOrder = async (req, res) => {
  const order = await createOrder(req.authClient);
  req.order = order;

  res.status(201).json({
    msg: "Order created successfully.",
    ok: true,
    order,
  });
};
