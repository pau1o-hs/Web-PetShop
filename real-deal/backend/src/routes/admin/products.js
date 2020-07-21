const { Router } = require('express');

const productsController = require('../../controllers/products');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.get('/group', productsController.getGroup);

router.post('/', productsController.createOne);

router.put('/:id', productsController.updateById);
router.put('/group', productsController.updateGroup);

router.delete('/:id', productsController.deleteById);
router.delete('/group', productsController.deleteGroup);

exports = router;
