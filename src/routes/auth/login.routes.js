import express from "express";
import { body } from "express-validator";
import { login, loginClient } from "../../controllers/auth/index.js";

const router = express.Router();

router.get("/login", login);
router.post("/login", 
  body('email').isEmail().withMessage("Put a valid E-mail account."),
  body("password").notEmpty().withMessage("Put your password."),
  loginClient,
);

export const loginRouter = router;
