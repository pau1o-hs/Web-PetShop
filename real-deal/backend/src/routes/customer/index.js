const { Router } = require('express');
const profileRoute = require('./profile');
const authRoute = require('./auth');
const petsRoute = require('./pets');
const productsRoute = require('./products');
const servicesRoute = require('./services');
const ordersRoute = require('./orders');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({
    title: 'PetShop customer API',
    version: '1.0.0',
  });
});

router.use('/profile', profileRoute);
router.use('/auth', authRoute);
router.use('/pets', petsRoute);
router.use('/products', productsRoute);
router.use('/services', servicesRoute);
router.use('/orders', ordersRoute);

exports = router;
