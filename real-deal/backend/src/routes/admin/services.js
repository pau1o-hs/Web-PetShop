const { Router } = require('express');

const servicesController = require('../../controllers/services');

const router = Router();

router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.get('/tags', servicesController.getByTag);

router.post('/', servicesController.createOne);

router.put('/:id', servicesController.updateById);

router.delete('/:id', servicesController.deleteById);

exports = router;
