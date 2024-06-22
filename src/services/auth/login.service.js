import { Client } from "../../models/associations.js";

export const checkIfClientAccountExist = async (email) => {
  try {
    const client = await Client.findOne({ where: { email } });
    return client;
  } catch (error) {
    console.log(error);
  };
};

