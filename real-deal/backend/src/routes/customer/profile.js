const { Router } = require('express');
const petsRoute = require('./pets');

const customerController = require('../../controllers/customer');

const router = Router();

router.get('/', customerController.getMyInfo);
router.post('/', customerController.create);
router.put('/', customerController.updateMyInfo);
router.delete('/', customerController.deleteMyself);

router.use('/pets', petsRoute);

exports = router;
