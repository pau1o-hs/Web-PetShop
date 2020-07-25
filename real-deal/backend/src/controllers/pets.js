const repository = require('../repositories/pets');
const authService = require('../services/auth');

// Used by: Customer
exports.getAll = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    const data = await repository.getAll(decoded.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Customer
exports.getBySlug = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    const data = await repository.getBySlug(decoded.id, req.body.slug);
    if (!data) {
      res.status(404).send({
        message: 'Pet not found',
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

// Used by: Customer
exports.createOne = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.createOne(decoded.id, req.body);
    res.status(201).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Customer
exports.updateBySlug = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.updateBySlug(decoded.id, req.body.slug, req.body);
    res.status(200).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Customer
exports.deleteBySlug = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.deleteBySlug(decoded.id, req.body.slug);
    res.status(204).send();
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};
