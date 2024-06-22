import { User } from "../../models/associations.js";

export const checkIfUserAccountExist = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.log(error);
  };
};
