import { Client } from "../models/associations.js";
import { verifyJWT } from "../helpers/index.js";

export const checkClientAuth = async (req, res, next) => {
  const path = "/api/v1/auth/login";

  const { _authToken } = req.cookies;
  if (!_authToken) return res.redirect(path);

  try {
    const dataDecoded = verifyJWT(_authToken);
    const { id_client } = dataDecoded;

    const client = await Client.findByPk(id_client);
    if (!client) return res.redirect(path);

    req.authClient = client;

    return next();
  } catch (error) {
    console.log(error);
    return res.clearCookie("_authToken").redirect(path);
  };
};
