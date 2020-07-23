// CONTROLLER

const repository = require('../repositories/admins');
const authService = require('../services/auth');
const passCryptService = require('../services/password-crypt');

exports.getMyInfo = async (req, res) => {
  const data = await repository.getMyInfo(req.params.CPF);
  res.status(200).send(data);
};

exports.getAllAdminsInfo = async (req, res) => {
  const data = await repository.getAllAdminsInfo();
  res.status(200).send(data);
};

exports.getMyChildrenInfo = async (req, res) => {
  const data = await repository.getMyChildrenInfo(req.params.childAdmins);
  res.status(200).send(data);
};

exports.createNewAdmin = async (req, res) => {
  await repository
    .createNewAdmin(req.body)
    .then(() => {
      res.status(201).send({
        message: 'Admin cadastrado!',
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Falha no cadastrado',
        data: e,
      });
    });
};

exports.updateMyInfo = async (req, res) => {
  await repository
    .updateMyInfo(req.params.id, req.body)
    .then(() => {
      res.status(200).send({
        message: 'Admin atualizado',
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Falha ao atualizar Admin',
        data: e,
      });
    });
};

exports.deleteChildAdmin = async (req, res) => {
  await repository
    .deleteChildAdmin(req.params.childAdmins.id)
    .then(() => {
      res.status(200).send({
        message: 'Produto removido',
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Falha ao remover produto',
        data: e,
      });
    });
};

exports.authenticate = async (req, res) => {
  return true;
};
