const { Router } = require('express');

const productsController = require('../../controllers/products');

const router = Router();

router.get('/', productsController.getAllActives);
router.get('/:slug', productsController.getBySlug);
router.get('/tags', productsController.getByTag);

exports = router;
