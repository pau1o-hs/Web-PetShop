const repository = require('../repositories/pets');

exports.getAll = async (req, res) => {
  return true;
};

exports.getBySlug = async (req, res) => {
  try {
    const data = await repository.getBySlug(req.params.slug);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: '',
    });
  }
};

exports.getBySlug = async (req, res) => {
  return true;
};

exports.create = async (req, res) => {
  return true;
};

exports.update = async (req, res) => {
  return true;
};

exports.delete = async (req, res) => {
  return true;
};
