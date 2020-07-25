const { v4: uuid } = require('uuid');
const repository = require('../repositories/orders');
const authService = require('../services/auth');

// Used by: Admin
exports.getAll = async (req, res) => {
  try {
    const data = await repository.getAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.getById = async (req, res) => {
  try {
    const data = await repository.getById(req.params.orderId);
    // Guard clause
    if (!data) {
      res.status(404).send({
        message: 'Order not found',
      });
      return;
    }
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.getByCustomer = async (req, res) => {
  try {
    const data = await repository.getByCustomer(req.params.customerId);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Customer
exports.createOne = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.createOne({
      number: uuid(),
      customer: decoded.id,
      products: req.body.products,
      services: req.body.services,
    });
    res.status(201).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.updateById = async (req, res) => {
  try {
    await repository.updateById(req.params.id, req.body);
    res.status(200).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.deleteById = async (req, res) => {
  try {
    await repository.deleteById(req.params.id);
    res.status(200).send({ message: 'Order removed successfully.' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};
