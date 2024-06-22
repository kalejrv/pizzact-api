import { validationResult } from "express-validator";
import { checkIfUserAccountExist } from "../../services/auth/index.js";
import { generateJWT } from "../../helpers/jwtHandler.js";

export const login = async (_req, res) => {
  res.status(200).json({
    msg: "Login page.",
    ok: true,
  });
};

export const loginUser = async (req, res) => {
  const formValidation = validationResult(req);
  if (!formValidation.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: formValidation.array(),
    });
  };

  const user = await checkIfUserAccountExist(req.body.email);
  if (!user) {
    return res.status(400).json({
      msg: "There is not exist an account with this E-mail.",
      ok: false,
    });
  };

  if (!user.checkPassword(req.body.password)) {
    return res.status(400).json({
      msg: "Invalid password.",
      ok: false,
    });
  };

  const { id_user, name, id_role } = user;
  const authToken = generateJWT({ id_user, name, id_role });

  if (user.id_role === 1) {
    res.cookie("_authToken", authToken, { httpOnly: true }).redirect("/admin");
  } else {
    res.cookie("_authToken", authToken, { httpOnly: true }).redirect("/pizzas");
  };
};
