import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const verifyPassword = (string, password) => {
  return bcrypt.compareSync(string, password);
};

export { hashPassword, verifyPassword };
