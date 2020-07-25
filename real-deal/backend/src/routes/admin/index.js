const { Router } = require('express');

const adminController = require('../../controllers/admin');
const adminValidator = require('../../validators/admin');
const authService = require('../../services/auth');

const customersRoute = require('./customers');
const productsRoute = require('./products');
const servicesRoute = require('./services');
const ordersRoute = require('./orders');
const scheduleRoute = require('./schedule');

const router = Router();

router.get('/', authService.isAuthenticatedAdmin, adminController.getMyInfo);
router.get(
  '/all',
  authService.isAuthenticatedAdmin,
  adminController.getAllAdminsInfo
);
router.get(
  '/children',
  authService.isAuthenticatedAdmin,
  adminController.getMyChildrenInfo
);
router.post(
  '/children',
  authService.isAuthenticatedAdmin,
  adminValidator.rules(),
  adminValidator.validate,
  adminController.createNewAdmin
);
router.post(
  '/auth',
  adminValidator.rules(),
  adminValidator.validate,
  adminController.authenticate
);
router.put(
  '/',
  authService.isAuthenticatedAdmin,
  adminValidator.rules(),
  adminValidator.validate,
  adminController.updateMyInfo
);
router.delete(
  '/children/:id',
  authService.isAuthenticatedAdmin,
  adminController.deleteChildAdmin
);

router.use('/customers', customersRoute);
router.use('/products', authService.isAuthenticatedAdmin, productsRoute);
router.use('/services', authService.isAuthenticatedAdmin, servicesRoute);
router.use('/orders', authService.isAuthenticatedAdmin, ordersRoute);
router.use('/schedule', authService.isAuthenticatedAdmin, scheduleRoute);

module.exports = router;
