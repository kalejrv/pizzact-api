import { Client } from "../../models/associations.js";

export const checkIfClientAccountExist = async (email) => {
  try {
    const client = await Client.findOne({ where: { email } });
    return client;
  } catch (error) {
    console.log(error);
  };
};

export const createClientAccount = async (obj) => {
  const { name, address, phone, email, password } = obj;

  try {
    await Client.create({ name, address, phone, email, password });
  } catch (error) {
    console.log(error);
  };
};
