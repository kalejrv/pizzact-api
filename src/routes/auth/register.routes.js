import express from "express";
import { body } from "express-validator";
import { register, registerUser } from "../../controllers/auth/index.js";

const router = express.Router();

router.get("/register", register);
router.post("/register",
  body("name").notEmpty().withMessage("Ingrese su nombre y apellido."),
  body("address").notEmpty().withMessage("Ingrese su dirección de habitación."),
  body("email").isEmail().withMessage("Ingrese un correo electrónico válido."),
  body("phone").notEmpty().withMessage("Ingrese su número de teléfono."),
  body("password").isLength({ min: 6 }).withMessage("La contraseña es muy corta."),
  registerUser,
);

export const registerRouter = router;
