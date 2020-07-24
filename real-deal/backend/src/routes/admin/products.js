const { Router } = require('express');

const productsController = require('../../controllers/products');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.get('/tags', productsController.getByTag);

router.post('/', productsController.createOne);

router.put('/:id', productsController.updateById);

router.delete('/:id', productsController.deleteById);

exports = router;
