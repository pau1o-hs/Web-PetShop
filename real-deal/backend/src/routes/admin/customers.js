const { Router } = require('express');

const customersController = {};

const router = Router();

router.get('/', customersController.getAll);
router.get('/:id', customersController.getById);
router.put('/:id', customersController.updateById);
router.delete('/:id', customersController.deleteById);

exports = router;