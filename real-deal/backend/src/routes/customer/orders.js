const { Router } = require('express');

const ordersController = {};

const router = Router();

router.post('/', ordersController.create);

exports = router;
