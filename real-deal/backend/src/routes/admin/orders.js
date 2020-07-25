const { Router } = require('express');

const ordersController = require('../../controllers/orders');
const validator = require('../../validators/order');

const router = Router();

router.get('/', ordersController.getAll);
router.get('/:orderId', ordersController.getById);
router.get('/customer/:customerId', ordersController.getByCustomer);
router.put(
  '/:orderId',
  validator.rules(),
  validator.validate,
  ordersController.updateById
);
router.delete('/:orderId', ordersController.deleteById);

module.exports = router;
