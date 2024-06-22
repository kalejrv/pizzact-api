import { User } from "../../models/associations.js";

export const createUserAccount = async (obj, url) => {
  const { name, address, phone, email, password } = obj;
  let id_role = null;

  if (url === "/register") {
    id_role = 2;
  } else if (url === "/admin/new-admin") {
    id_role = 1;
  };

  try {
    const newUser = await User.create({ name, address, phone, email, password, id_role });
    return newUser;
  } catch (error) {
    console.log(error);
  };
};
