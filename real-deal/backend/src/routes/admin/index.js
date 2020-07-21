const { Router } = require('express');
const adminController = require('../controllers/admin');
const customersRoute = require('./customers');
const productsRoute = require('./products');
const servicesRoute = require('./services');
const ordersRoute = require('./orders');

const router = Router();

router.get('/', adminController.getMyInfo);
router.get('/all', adminController.getAllAdminsInfo);
router.get('/children', adminController.getMyChildrenInfo);
router.post('/', adminController.createNewAdmin);
router.put('/', adminController.updateMyInfo);
router.delete('/children/:id', adminController.deleteChildAdmin);

router.use('/customers', customersRoute);
router.use('/products', productsRoute);
router.use('/services', servicesRoute);
router.use('/orders', ordersRoute);

exports = router;
