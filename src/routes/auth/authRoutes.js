import express from "express";
import { body } from "express-validator";
import { login, register } from "../../controllers/auth/authController.js";

const router = express.Router();

router.post("/login", 
  body('email').isEmail().withMessage("Ingrese un correo electrónico válido"),
  body("password").notEmpty().withMessage("Ingrese su contraseña"),
  
  login,
);

router.post("/register",
  body("name").notEmpty().withMessage("Ingrese su nombre y apellido."),
  body("address").notEmpty().withMessage("Ingrese su dirección de habitación."),
  body("email").isEmail().withMessage("Ingrese un correo electrónico válido."),
  body("phone").notEmpty().withMessage("Ingrese su número de teléfono."),
  body("password").isLength({ min: 6 }).withMessage("La contraseña es muy corta."),

  register,
);

export const authRouter = router;
