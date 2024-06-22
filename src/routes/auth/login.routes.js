import express from "express";
import { body } from "express-validator";
import { login, loginUser } from "../../controllers/auth/index.js";

const router = express.Router();

router.get("/login", login);
router.post("/login", 
  body('email').isEmail().withMessage("Put a valid E-mail account."),
  body("password").notEmpty().withMessage("Put your password."),
  loginUser,
);

export const loginRouter = router;
