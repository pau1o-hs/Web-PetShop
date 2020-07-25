const { Router } = require('express');

const servicesController = require('../../controllers/services');

const router = Router();

router.get('/', servicesController.getAllActives);
router.get('/:slug', servicesController.getBySlug);
router.get('/tags', servicesController.getByTag);

module.exports = router;
