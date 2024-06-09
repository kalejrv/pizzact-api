import express from "express";
import { home } from "../../controllers/home/homeController.js";
import { checkClientAuth } from "../../middlewares/index.js";

const router = express.Router();

router.get("/", checkClientAuth, home);

export const homeRouter = router;
