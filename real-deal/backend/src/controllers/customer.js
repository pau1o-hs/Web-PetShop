const repository = require('../repositories/customers');
const authService = require('../services/auth');
const passwordEncrypter = require('../services/password-crypt');

/*
  Testar nos casos:
  - Token invalido
  - Id que nao existe no BD (customer not found)
  - Sucesso
*/
// Used by: Customer
exports.getMyInfo = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    const data = await repository.getById(decoded.id);
    // Guard clause
    if (!data) {
      res.status(404).send({
        message: 'Customer not found',
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

/*
  Testar nos casos:
  - Sucesso
*/
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

/*
  Testar nos casos:
  - Id que nao existe no BD (customer not found)
  - Sucesso
*/
// Used by: Admin
exports.getById = async (req, res) => {
  try {
    const data = await repository.getById(req.params.id);
    // Guard clause
    if (!data) {
      res.status(404).send({
        message: 'Customer not found',
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

/*
  Testar nos casos:
  - Erros que são pegos pelo middleware anterior
  - Sucesso
*/
// Used by: Customer
exports.create = async (req, res) => {
  try {
    await repository.create({
      password: await passwordEncrypter.encrypt(req.body.password),
      ...req.body,
    });
    res.status(201).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar nos casos:
  - Token invalido
  - Id que nao existe no BD (customer not found)
  - Erros que são pegos pelo middleware anterior
  - Sucesso
*/
// Used by: Customer
exports.updateMyInfo = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.updateById(decoded.id, {
      password: await passwordEncrypter.encrypt(req.body.password),
      ...req.body,
    });
    res.status(200).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar nos casos:
  - Token invalido
  - Id que nao existe no BD (customer not found)
  - Erros que são pegos pelo middleware anterior
  - Sucesso
*/
// Used by: Admin
exports.updateById = async (req, res) => {
  try {
    await repository.updateById(req.params.id, {
      password: await passwordEncrypter.encrypt(req.body.password),
      ...req.body,
    });
    res.status(200).send(req.body);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar nos casos:
  - Token invalido
  - Id que nao existe no BD (customer not found)
  - Sucesso
*/
// Used by: Customer
exports.deleteMyself = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.deleteById(decoded.id);
    res.status(204).send();
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar nos casos:
  - Id que nao existe no BD (customer not found)
  - Sucesso
*/
// Used by: Admin
exports.deleteById = async (req, res) => {
  try {
    await repository.deleteById(req.params.id);
    res.status(200).send({ message: 'Customer removed successfully.' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar no casos:
  - email invalido
  - Password invalido
  - Sucesso
*/
// Used by: Customer
exports.authenticate = async (req, res) => {
  try {
    const customer = await repository.getByEmail(req.body.email);
    // Guard clauses
    if (!customer) {
      res.status(404).send({
        message: 'Invalid email.',
      });
      return;
    }

    const isPasswordCorrect = await passwordEncrypter.isCorrect(
      req.body.password,
      customer.password
    );
    if (!isPasswordCorrect) {
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
