const repository = require('../repositories/products');
const authService = require('../services/auth');

// Used by: Admin
exports.getAll = async (req, res) => {
  try {
    const data = await repository.getAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Request Error, it was not possible to get All the products',
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
      message: 'Request Error, it was not possible to get All active products',
    });
  }
};

// Used by: Admin
exports.getById = async (req, res) => {
  try {
    const data = await repository.getById(req.params.id);
    if (!data) {
      res.status(404).send({
        message: 'Product not found',
      });
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Request Error,it was not possible to get the product',
    });
  }
};

// Used by: Customer
exports.getBySlug = async (req, res) => {
  try {
    const data = await repository.getBySlug(req.params.slug);
    if (!data) {
      res.status(404).send({
        message: 'Product not found',
      });
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: ' Request Error,it was not possible to get the product',
    });
  }
};

function filterData(prodArr) {
  // Customers cannot see quantity in stock, if the product is active or the total sold.
  const newProdArr = prodArr.map((prod) => {
    return {
      title: prod.title,
      slug: prod.slug,
      tags: prod.tags,
      photo: prod.photo,
      price: prod.price,
      description: prod.description,
    };
  });
  return newProdArr;
}

// Used by: Both
exports.getByTag = async (req, res) => {
  try {
    const prodArr = await repository.getByTag(req.body.tag);
    if (!prodArr) {
      res.status(404).send({
        message: 'Product not found',
      });
      return;
    }

    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
      // this is a customer not logged in
      res.status(200).send(filterData(prodArr));
      return;
    }

    const decoded = await authService.decodeToken(token);
    if (!decoded.isAdmin) {
      res.status(200).send(filterData(prodArr));
      return;
    }

    res.status(200).send(prodArr);
  } catch (error) {
    res.status(500).send({
      message: ' Request Error,it was not possible to get the product',
    });
  }
};

// Used by: Admin
exports.createOne = async (req, res) => {
  try {
    await repository.createOne(req.body);
    res.status(201).send({ message: 'Product registred' });
  } catch (error) {
    res.status(500).send({
      message: 'Request error, it was not possible to create a product. ',
    });
  }
};

// Used by: Admin
exports.updateById = async (req, res) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({ message: 'Product updated' });
  } catch (error) {
    res.status(500).send({
      message: 'Request error, it was not possible to update the product. ',
    });
  }
};

// Used by: Admin
exports.deleteById = async (req, res) => {
  try {
    await repository.deleteById(req.params.id);
    res.status(200).send({ message: 'Product removed' });
  } catch (error) {
    res.status(500).send({
      message: 'Request error, it was not possible to remove the product.',
    });
  }
};
