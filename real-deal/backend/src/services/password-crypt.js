require('dotenv').config();
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.encrypt = async (plainPassword) => {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

exports.isCorrect = async (plainPassword, hashedPassword) => {
  const res = await bcrypt.compare(plainPassword, hashedPassword);
  return res;
};
