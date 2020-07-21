const { Router } = require('express');

const petsController = {};

const router = Router();

// All of this actions are target ONLY to the customers pets!
// So, for instance, "getAll" means "get all pets owned by the customer", and so on...
router.get('/', petsController.getAll);
router.get('/:petId', petsController.getById);
router.post('/', petsController.create);
router.put('/:petId', petsController.update);
router.delete('/:petId', petsController.delete);

exports = router;
