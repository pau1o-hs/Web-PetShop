const { Router } = require('express');

const servicesController = require('../../controllers/services');

const router = Router();

router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.get('/group', servicesController.getGroup);

router.post('/', servicesController.createOne);

router.put('/:id', servicesController.updateById);
router.put('/group', servicesController.updateGroup);

router.delete('/:id', servicesController.deleteById);
router.delete('/group', servicesController.deleteGroup);

exports = router;
