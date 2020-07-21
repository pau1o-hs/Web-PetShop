const { Router } = require('express');

const petsController = require('../../controllers/pets');

const router = Router();

// All of this actions are target ONLY to the customers pets!
// So, for instance, "getAll" means "get all pets owned by the customer", and so on...
router.get('/', petsController.getAll);
router.get('/:slug', petsController.getBySlug);
router.post('/', petsController.create);
router.put('/:slug', petsController.update);
router.delete('/:slug', petsController.delete);

exports = router;
