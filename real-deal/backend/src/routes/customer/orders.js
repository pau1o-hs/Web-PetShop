const { Router } = require('express');

const ordersController = require('../../controllers/orders');

const router = Router();

router.post('/', ordersController.create);

exports = router;
