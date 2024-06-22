import { Client } from "../../models/associations.js";

export const createClientAccount = async (obj) => {
  const { name, address, phone, email, password } = obj;

  try {
    const newClient = await Client.create({ name, address, phone, email, password });
    return newClient;
  } catch (error) {
    console.log(error);
  };
};
