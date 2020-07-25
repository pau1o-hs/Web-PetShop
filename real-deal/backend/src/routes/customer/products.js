const { Router } = require('express');

const productsController = require('../../controllers/products');

const router = Router();

router.get('/', productsController.getAllActives);
router.get('/:slug', productsController.getBySlug);
router.post('/tags', productsController.getByTag); // Same purpose as GET

module.exports = router;
