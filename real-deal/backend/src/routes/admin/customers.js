const { Router } = require('express');

const customersController = require('../../controllers/customer');
const validator = require('../../validators/customer');

const router = Router();

router.get('/', customersController.getAll);
router.get('/:id', customersController.getById);
router.put(
  '/:id',
  validator.rules(),
  validator.validate,
  customersController.updateById
);
router.delete('/:id', customersController.deleteById);

module.exports = router;
