const { Router } = require('express');

const servicesController = require('../../controllers/services');
const validator = require('../../validators/service');

const router = Router();

router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.get('/tags', servicesController.getByTag);

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

exports = router;
