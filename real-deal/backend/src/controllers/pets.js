const repository = require('../repositories/pets');

exports.getAll = async (req, res) => {
	const data = await repository.getAll();
	res.status(200).send(data);
};

exports.getById = async (req, res) => {
const data = await repository.getById(req.params.id);
res.status(200).send(data);
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

exports.createOne = async (req, res) => {
  await repository
    .createOne(req.body)
    .then(() => {
      res.status(201).send({
        message: 'Product Registred!',
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: 'Error to register a product',
        data: e,
      });
    });
};

exports.updateBySlug = async (req, res) => {
	await repository
	  .updateBySlug(req.params.slug, req.body)
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

exports.deleteBySlug = async (req, res) => {
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