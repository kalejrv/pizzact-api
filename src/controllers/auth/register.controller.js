import { checkIfClientAccountExist, createClientAccount } from "../../services/auth/index.js";

export const register = (_req, res) => {
  res.status(200).json({
    msg: "Register page.",
    ok: true,
  });
};

export const registerClient = async (req, res) => {
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
      msg: "There is exist an account with this E-mail.",
      ok: true,
    });
  };

  const newClient = await createClientAccount(req.body);

  res.status(200).json({
    msg: "Cuenta creada con éxito.",
    ok: true,
    newClient,
  });
};
