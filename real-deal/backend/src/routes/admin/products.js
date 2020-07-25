const { Router } = require('express');

const productsController = require('../../controllers/products');
const validator = require('../../validators/product');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/tags', productsController.getByTag); // Same purpose as GET

router.post(
  '/',
  validator.rules(),
  validator.validate,
  productsController.createOne
);

router.put(
  '/:id',
  validator.rules(),
  validator.validate,
  productsController.updateById
);

router.delete('/:id', productsController.deleteById);

module.exports = router;
