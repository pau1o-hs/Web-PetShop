const { Router } = require('express');
const customerController = require('../../controllers/customer');
const customerValidator = require('../../validators/customer');
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
    version: '1.0.1',
  });
});
router.post(
  '/auth',
  customerValidator.rules(),
  customerValidator.validate,
  customerController.authenticate
);

router.use('/profile', profileRoute);
router.use('/products', productsRoute);
router.use('/services', servicesRoute);
router.use('/orders', authService.isAuthenticated, ordersRoute);
router.use('/schedule', scheduleRoute);

module.exports = router;
