const repository = require('../repositories/products');

// Used by: Admin
exports.getAll = async (req, res) => {
  const data = await repository.getAll();
  res.status(200).send(data);
};

// Used by: Customer
exports.getAllActives = async (req, res) => {
  const data = await repository.getAll();
  res.status(200).send(data);
};

// Used by: Admin
exports.getById = async (req, res) => {
  const data = await repository.getById(req.params.id);
  res.status(200).send(data);
};

// Used by: Customer
exports.getBySlug = async (req, res) => {
  const data = await repository.getBySlug(req.params.slug);
  res.status(200).send(data);
};

// Used by: Both
exports.getByTag = async (req, res) => {
  const data = await repository.getByTag(req.params.tag);
  res.status(200).send(data);
};

exports.createOne = async (req, res) => {
  await repository
    .createOne(req.body)
    .then(() => {
      res.status(201).send({
        message: 'Produto cadastrado!',
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Falha no cadastrado',
        data: e,
      });
    });
};

// Used by: Admin
exports.updateById = async (req, res) => {
  await repository
    .updateById(req.params.id, req.body)
    .then(() => {
      res.status(200).send({
        message: 'Produto atualizado',
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Falha ao atualizar produto',
        data: e,
      });
    });
};

// Used by: Admin
exports.deleteById = async (req, res) => {
  await repository
    .deleteById(req.params.id)
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
