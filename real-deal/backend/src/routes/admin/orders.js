const { Router } = require('express');

const ordersController = require('../../controllers/orders');

const router = Router();

router.get('/', ordersController.getAll);
router.get('/:orderId', ordersController.getById);
router.get('/:customerId', ordersController.getByCustomer);
router.get('/group', ordersController.getGroup);

router.put('/orders', ordersController.updateAll);
router.put('/:orderId', ordersController.updateById);
router.put('/group', ordersController.updateGroup);

router.delete('/:orderId', ordersController.deleteByID);
router.delete('/group', ordersController.deleteGroup);

exports = router;
