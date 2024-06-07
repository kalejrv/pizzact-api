import jwt from "jsonwebtoken";

const JWTKEY = process.env.JWT_SECRET_KEY;

export const generateJWT = (data) => jwt.sign(data, JWTKEY, { expiresIn: "2h" });
export const verifyJWT = (token) => jwt.verify(token, JWTKEY);
