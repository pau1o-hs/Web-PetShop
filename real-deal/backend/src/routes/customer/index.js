const { Router } = require('express');
const customerController = require('../../controllers/customer');
const authService = require('../../services/auth');

const profileRoute = require('./profile');
const productsRoute = require('./products');
const servicesRoute = require('./services');
const ordersRoute = require('./orders');
const scheduleRoute = require('./schedule');

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
router.use('/orders', authService.isAuthenticated, ordersRoute);
router.use('/schedule', authService.isAuthenticated, scheduleRoute);

module.exports = router;
