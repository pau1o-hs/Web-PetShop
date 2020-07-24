const { Router } = require('express');

const productsController = require('../../controllers/products');
const validator = require('../../validators/product');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.get('/tags', productsController.getByTag);

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

exports = router;
