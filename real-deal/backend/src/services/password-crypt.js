require('dotenv').config();
const bcrypt = require('bcrypt');

const saltRounds = process.env.SALT_ROUNDS;

exports.encrypt = async (plainPassword) => {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

exports.isCorrect = async (plainPassword, hashedPassword) => {
  const res = await bcrypt.compare(plainPassword, hashedPassword);
  return res;
};
