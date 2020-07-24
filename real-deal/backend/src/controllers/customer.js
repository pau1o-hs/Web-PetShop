const repository = require('../repositories/customers');
const authService = require('../services/auth');
const passwordEncrypter = require('../services/password-crypt');

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
  try {
    const customer = await repository.getByAdminName({
      email: req.body.email,
    });
    // Guard clauses
    if (!customer) {
      res.status(404).send({
        message: 'Invalid email.',
      });
      return;
    }
    if (!passwordEncrypter.isCorrect(req.body.password, customer.password)) {
      res.status(401).send({
        message: 'Invalid password.',
      });
      return;
    }

    const token = await authService.generateToken({
      id: customer._id,
      isAdmin: false,
    });

    res.status(200).send({
      token,
    });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing request.',
      error: e,
    });
  }
};
