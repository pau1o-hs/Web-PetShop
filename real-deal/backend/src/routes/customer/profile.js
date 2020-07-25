const { Router } = require('express');
const customerController = require('../../controllers/customer');
const validator = require('../../validators/customer');
const authService = require('../../services/auth');

const petsRoute = require('./pets');

const router = Router();

router.get('/', authService.isAuthenticated, customerController.getMyInfo);
router.post(
  '/',
  validator.rules(),
  validator.validate,
  customerController.create
);
router.put(
  '/',
  authService.isAuthenticated,
  validator.rules(),
  validator.validate,
  customerController.updateMyInfo
);
router.delete(
  '/',
  authService.isAuthenticated,
  customerController.deleteMyself
);

router.use('/pets', authService.isAuthenticated, petsRoute);

module.exports = router;
