const { Router } = require('express');
const profileRoute = require('./profile');
const productsRoute = require('./products');
const servicesRoute = require('./services');
const ordersRoute = require('./orders');
const scheduleRoute = require('./schedule');
const customerController = require('../../controllers/customer');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({
    title: 'PetShop customer API',
    version: '1.0.0',
  });
});
router.post('/auth', customerController.authenticate);

router.use('/profile', profileRoute);
router.use('/products', productsRoute);
router.use('/services', servicesRoute);
router.use('/orders', ordersRoute);
router.use('/schedule', scheduleRoute);

exports = router;
