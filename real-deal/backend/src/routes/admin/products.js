const { Router } = require('express');

const productsController = {};

const router = Router();

// GET /products → read info from all products
router.get('/', productsController.getAll);
// GET /products/:id → read info from a product
router.get('/:id', productsController.getById);
// GET /products/group → get info from a group of products that match the specified
// params in the req body (ex: products that have a price of 29,90); a call to this
// endpoint with no params specified is equivalent to a GET call to /products.
router.get('/group', productsController.getGroup);

// POST /products → create a product
router.post('/', productsController.createOne);

// PUT /products/:id → update info from a product
router.put('/:id', productsController.updateById);
// PUT /products/group → update info from a group of products that match the specified
// params in the req body (ex: change products that have the category “games” to “videogames”);
// a call to this endpoint with no params specified is INVALID (i.e. it should not update all
// products in the database).
router.put('/group', productsController.updateGroup);

// DELETE /products/:id → delete a product
router.delete('/:id', productsController.deleteById);
// DELETE /products/group → delete a group of products that match the specified params
// in the req body; a call to this endpoint with no params specified is INVALID
// (i.e. it should not delete all products in the database).
router.delete('/group', productsController.deleteGroup);

exports = router;
