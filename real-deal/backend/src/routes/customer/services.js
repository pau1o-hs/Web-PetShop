const { Router } = require('express');

const servicesController = require('../../controllers/services');

const router = Router();

router.get('/', servicesController.getAllActives);
router.get('/:slug', servicesController.getBySlug);
router.post('/tags', servicesController.getByTag); // Same purpose as GET

module.exports = router;
