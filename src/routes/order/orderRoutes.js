import express from "express";
import { editOrder, makeOrder, order } from "../../controllers/order/createOrderController.js";
import { checkClientAuth } from "../../middlewares/checkClientAuth.js";

const router = express.Router();

router.get("/", checkClientAuth, order);
router.get("/:order_id", checkClientAuth, editOrder);
router.post("/", checkClientAuth, makeOrder);

export const orderRouter = router;
