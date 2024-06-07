import { validationResult } from "express-validator";
import { checkIfClientAccountExist, createClientAccount } from "../../services/auth/authService.js";
import { generateJWT } from "../../helpers/jwtHandler.js";

export const login = async (req, res) => {
  const formValidation = validationResult(req);
  if (!formValidation.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: formValidation.array(),
    });
  };

  const client = await checkIfClientAccountExist(req.body.email);
  if (!client) {
    return res.status(400).json({
      msg: "No existe una cuenta con este email.",
      ok: false,
    });
  };

  if (!client.checkPassword(req.body.password)) {
    return res.status(400).json({
      msg: "Contraseña incorrecta.",
      ok: false,
    });
  };

  const { id_client, name } = client;
  const authToken = generateJWT({ id_client, name });

  res.cookie("_authToken", authToken, { httpOnly: true }).redirect("/pizzas");
};

export const register = async (req, res) => {
  const formValidation = validationResult(req);
  if (!formValidation.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: formValidation.array(),
    });
  };

  const client = await checkIfClientAccountExist(req.body.email);
  if (client) {
    return res.status(200).json({
      msg: "Ya existe un cliente registrado con esta cuenta de email.",
      ok: true,
    });
  };

  await createClientAccount(req.body);

  res.status(200).json({
    msg: "Cuenta creada con éxito.",
    ok: true,
  });
};
