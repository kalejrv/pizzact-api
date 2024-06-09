import { hashPassword } from "../../../helpers/index.js";

export const admin = [
  { name: "Cargotrans", email: "cargotrans@correo.com", password: await hashPassword("cargotrans123") },
  { name: "Kevin Reyes", email: "kevin@correo.com", password: await hashPassword("kevin123") },
];
