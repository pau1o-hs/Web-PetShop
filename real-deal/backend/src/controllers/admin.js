const repository = require('../repositories/admins');
const authService = require('../services/auth');
const passwordEncrypter = require('../services/password-crypt');

/*
  Testar no casos:
  - Token invalido
  - Id que nao existe no BD (admin not found)
  - Sucesso
*/
// Used by: Admin
exports.getMyInfo = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    const data = await repository.getById(decoded.id);
    // Guard clause
    if (!data) {
      res.status(404).send({
        message: 'Admin not found',
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
  Testar no casos:
  - Sucesso
*/
// Used by: Admin
exports.getAllAdminsInfo = async (req, res) => {
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
  Testar no casos:
  - Token invalido
  - Id que nao existe no BD (admin not found)
  - Sucesso
*/
// Used by: Admin
exports.getMyChildrenInfo = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    const data = await repository.getMyChildren(decoded.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar no casos:
  - CPF repetido
  - email repetido
  - password esta encriptado
  - adminName repetido
  - Sucesso
*/
// Used by: Admin
exports.createNewAdmin = async (req, res) => {
  try {
    await repository.createNewAdmin({
      CPF: req.body.cpf,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      adminName: req.body.adminName,
      password: passwordEncrypter.encrypt(req.body.password),
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
  Testar no casos:
  - Token invalido
  - Id que nao existe no BD (admin not found)
  - CPF, email, adminName repetidos (deve dar erro)
  - Sucesso
*/
// Used by: Admin
exports.updateMyInfo = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    await repository.updateById(decoded.id, {
      CPF: req.body.cpf,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      adminName: req.body.adminName,
      password: passwordEncrypter.encrypt(req.body.password),
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
  Testar no casos:
  - Id inválido
  - Sucesso
*/
// Used by: Admin
exports.deleteChildAdmin = async (req, res) => {
  try {
    await repository.deleteChildAdmin(req.params.id); // Child ID
    res.status(200).send({ message: 'Child admin removed successfully.' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

/*
  Testar no casos:
  - Admin-name invalido
  - Password invalido
  - Sucesso
*/
// Used by: Admin
exports.authenticate = async (req, res) => {
  try {
    const admin = await repository.getByAdminName({
      adminName: req.body.adminName,
    });
    // Guard clauses
    if (!admin) {
      res.status(404).send({
        message: 'Invalid admin-name.',
      });
      return;
    }
    if (!passwordEncrypter.isCorrect(req.body.password, admin.password)) {
      res.status(401).send({
        message: 'Invalid password.',
      });
      return;
    }

    const token = await authService.generateToken({
      id: admin._id,
      isAdmin: true,
    });

    res.status(200).send({
      token,
    });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};
