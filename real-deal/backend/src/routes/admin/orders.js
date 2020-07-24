const { Router } = require('express');

const ordersController = require('../../controllers/orders');
const validator = require('../../validators/order');

const router = Router();

router.get('/', ordersController.getAll);
router.get('/:orderId', ordersController.getById);
router.get('/:customerId', ordersController.getByCustomer);
router.put(
  '/orders',
  validator.rules(),
  validator.validate,
  ordersController.updateAll
);
router.put(
  '/:orderId',
  validator.rules(),
  validator.validate,
  ordersController.updateById
);
router.delete('/:orderId', ordersController.deleteByID);

exports = router;
