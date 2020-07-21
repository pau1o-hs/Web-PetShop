const { Router } = require('express');

const productsController = require('../../controllers/products');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:slug', productsController.getBySlug);
router.get('/group', productsController.getGroup);

exports = router;
