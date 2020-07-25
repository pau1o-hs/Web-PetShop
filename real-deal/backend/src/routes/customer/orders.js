const { Router } = require('express');

const ordersController = require('../../controllers/orders');
const validator = require('../../validators/order');

const router = Router();

router.post(
  '/',
  validator.rules(),
  validator.validate,
  ordersController.createOne
);

module.exports = router;
