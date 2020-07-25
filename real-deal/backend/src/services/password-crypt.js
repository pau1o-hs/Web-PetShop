require('dotenv').config();
const bcrypt = require('bcrypt');

exports.encrypt = async (plainPassword) => {
  const hashedPassword = await bcrypt.hash(
    plainPassword,
    process.env.SALT_ROUNDS
  );
  return hashedPassword;
};

exports.isCorrect = async (plainPassword, hashedPassword) => {
  const res = await bcrypt.compare(plainPassword, hashedPassword);
  return res;
};
