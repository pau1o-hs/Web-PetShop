const { Router } = require('express');

const ordersController = {};

const router = Router();

// GET /orders → read info from all orders so far in the system
router.get('/', ordersController.getAll);
// GET /orders/:orderId → read info from a specific order
router.get('/:orderId', ordersController.getById);
// GET /orders/:customerId → read info from all orders made by a single customer so far
router.get('/:customerId', ordersController.getByCustomer);
// GET /orders/group → read info from a group of orders that match the specified
// params in the req body; a call to this endpoint with no params specified is
// equivalent to a GET call to /orders.
router.get('/group', ordersController.getGroup);

// PUT /orders → update info from all orders (SHOULD BE USED WITH CARE)
router.put('/orders', ordersController.updateAll);
// PUT /orders/:orderId → update info from a specific order
router.put('/:orderId', ordersController.updateById);
// PUT /orders/group → update info from a group of orders that match the specified
// params in the req body; a call to this endpoint with no params specified is
// equivalent to a PUT call to /orders (THUS, SHOULD BE USED WITH CARE).
router.put('/group', ordersController.updateGroup);

// DELETE /orders/:orderId → “delete” the specified order (marking it as “cancelled”)
router.delete('/:orderId', ordersController.deleteByID);
// DELETE /orders/group → “delete” info from a group of orders (marking each one
// of them as “cancelled”) that match the specified params in the req body; a call
// to this endpoint with no params specified will throw an error
router.delete('/group', ordersController.deleteGroup);

exports = router;
