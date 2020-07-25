const { Router } = require('express');

const petsController = require('../../controllers/pets');
const validator = require('../../validators/pet');

const router = Router();

// All of this actions are target ONLY to the customers pets!
// So, for instance, "getAll" means "get all pets owned by the customer", and so on...
router.get('/', petsController.getAll);
router.get('/:slug', petsController.getBySlug);
router.post(
  '/',
  validator.rules(),
  validator.validate,
  petsController.createOne
);
router.put(
  '/:slug',
  validator.rules(),
  validator.validate,
  petsController.updateBySlug
);
router.delete('/:slug', petsController.deleteBySlug);

module.exports = router;
