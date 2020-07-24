const { Router } = require('express');

const ordersController = require('../../controllers/orders');

const router = Router();

router.get('/', ordersController.getAll);
router.get('/:orderId', ordersController.getById);
router.get('/:customerId', ordersController.getByCustomer);

router.put('/orders', ordersController.updateAll);
router.put('/:orderId', ordersController.updateById);

router.delete('/:orderId', ordersController.deleteByID);

exports = router;
