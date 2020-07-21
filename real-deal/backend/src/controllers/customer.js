const repository = require('../repositories/customers');
const authService = require('../services/auth');
const passCryptService = require('../services/password-crypt');

// Used by: Customer
exports.getMyInfo = async (req, res) => {
  return true;
};

// Used by: Admin
exports.getAll = async (req, res) => {
  return true;
};

// Used by: Admin
exports.getById = async (req, res) => {
  return true;
};

// Used by: Customer
exports.create = async (req, res) => {
  return true;
};

// Used by: Customer
exports.updateMyInfo = async (req, res) => {
  return true;
};

// Used by: Admin
exports.updateById = async (req, res) => {
  return true;
};

// Used by: Customer
exports.deleteMyself = async (req, res) => {
  return true;
};

// Used by: Admin
exports.deleteById = async (req, res) => {
  return true;
};

// Used by: Customer
exports.authenticate = async (req, res) => {
  return true;
};
