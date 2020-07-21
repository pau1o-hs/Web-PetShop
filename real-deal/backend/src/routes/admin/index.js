const { Router } = require('express');
const adminController = require('../../controllers/admin');
const customersRoute = require('./customers');
const productsRoute = require('./products');
const servicesRoute = require('./services');
const ordersRoute = require('./orders');
const scheduleRoute = require('./schedule');

const router = Router();

router.get('/', adminController.getMyInfo);
router.get('/all', adminController.getAllAdminsInfo);
router.get('/children', adminController.getMyChildrenInfo);
router.post('/', adminController.createNewAdmin);
router.post('/auth', adminController.authenticate);
router.put('/', adminController.updateMyInfo);
router.delete('/children/:id', adminController.deleteChildAdmin);

router.use('/customers', customersRoute);
router.use('/products', productsRoute);
router.use('/services', servicesRoute);
router.use('/orders', ordersRoute);
router.use('/schedule', scheduleRoute);

exports = router;
