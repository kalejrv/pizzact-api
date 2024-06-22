import { validationResult } from "express-validator";
import { generateJWT } from "../../helpers/jwtHandler.js";
import { checkIfUserAccountExist, createUserAccount } from "../../services/auth/index.js";

export const register = (_req, res) => {
  res.status(200).json({
    msg: "Register page.",
    ok: true,
  });
};

export const registerUser = async (req, res) => {
  const formValidation = validationResult(req);
  if (!formValidation.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: formValidation.array(),
    });
  };

  const user = await checkIfUserAccountExist(req.body.email);
  if (user) {
    return res.status(200).json({
      msg: "There is exist an account with this E-mail.",
      ok: true,
    });
  };

  const newUser = await createUserAccount(req.body, req.url);
  const { id_user, name, id_role } = newUser;

  if (newUser.id_role === 2) {
    const authToken = generateJWT({ id_user, name, id_role });

    res.cookie("_authToken", authToken, { httpOnly: true }).redirect("/pizzas");
  };
};
