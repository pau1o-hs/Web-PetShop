const repository = require('../repositories/services');
const authService = require('../services/auth');

// Used by: Admin
exports.getAll = async (req, res) => {
  try {
    const data = await repository.getAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Error to get the services',
    });
  }
};

// Used by: Customer
exports.getAllActives = async (req, res) => {
  try {
    const data = await repository.getAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Error to get the active services',
    });
  }
};

// Used by: Admin
exports.getById = async (req, res) => {
  try {
    const data = await repository.getById(req.params.id);
    if (!data) {
      res.status(404).send({
        message: 'Service not found',
      });
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Error to get the active service',
    });
  }
};

// Used by: Customer
exports.getBySlug = async (req, res) => {
  try {
    const data = await repository.getBySlug(req.params.slug);
    if (!data) {
      res.status(404).send({
        message: 'Service not found',
      });
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Error to get the service',
    });
  }
};

function filterData(data) {
  // Customers cannot see quantity in stock, if the product is active or the total sold.
  return {
    title: data.title,
    slug: data.slug,
    tags: data.tags,
    photo: data.photo,
    price: data.price,
    description: data.description,
    responsible: data.responsible,
  };
}

// Used by: Both
exports.getByTag = async (req, res) => {
  try {
    const data = await repository.getByTag(req.body.tag);
    if (!data) {
      res.status(404).send({
        message: 'Service not found',
      });
      return;
    }

    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
      // this is a customer not logged in
      res.status(200).send(filterData(data));
      return;
    }

    const decoded = await authService.decodeToken(token);
    if (!decoded.isAdmin) {
      res.status(200).send(filterData(data));
      return;
    }

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: ' Request Error,it was not possible to get the service',
    });
  }
};

// Used by: Admin
exports.createOne = async (req, res) => {
  try {
    await repository.create(req.body);
    res.status(201).send({ message: 'Service registred' });
  } catch (error) {
    res.status(500).send({
      message: 'Error to create the service',
    });
  }
};

// Used by: Admin
exports.updateById = async (req, res) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({ message: 'Service updated' });
  } catch (error) {
    res.status(500).send({
      message: 'Error to update the service',
    });
  }
};

// Used by: Admin
exports.deleteById = async (req, res) => {
  try {
    await repository.delete(req.params.id);
    res.status(201).send({ message: 'Service removed' });
  } catch (error) {
    res.status(400).send({
      message: 'Error to remove the service',
    });
  }
};
