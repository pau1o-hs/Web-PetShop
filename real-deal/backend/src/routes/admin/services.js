const { Router } = require('express');

const servicesController = require('../../controllers/services');
const validator = require('../../validators/service');

const router = Router();

router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.post('/tags', servicesController.getByTag); // Same purpose as GET

router.post(
  '/',
  validator.rules(),
  validator.validate,
  servicesController.createOne
);

router.put(
  '/:id',
  validator.rules(),
  validator.validate,
  servicesController.updateById
);

router.delete('/:id', servicesController.deleteById);

module.exports = router;
