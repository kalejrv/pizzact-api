import { validationResult } from "express-validator";
import { checkIfClientAccountExist } from "../../services/auth/index.js";
import { generateJWT } from "../../helpers/jwtHandler.js";

export const login = async (_req, res) => {
  res.status(200).json({
    msg: "Login page.",
    ok: true,
  });
};

export const loginClient = async (req, res) => {
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
      msg: "There is not exist an account with this E-mail.",
      ok: false,
    });
  };

  if (!client.checkPassword(req.body.password)) {
    return res.status(400).json({
      msg: "Invalid password.",
      ok: false,
    });
  };

  const { id_client, name } = client;
  const authToken = generateJWT({ id_client, name });

  if (client.id_role === 2) {
    res.json({
      msg: "Es client"
    })
  } else {
    res.json({
      msg: "Es admin"
    })
  };
  // res.cookie("_authToken", authToken, { httpOnly: true }).redirect("/pizzas");
};
