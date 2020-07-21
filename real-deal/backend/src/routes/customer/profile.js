const { Router } = require('express');

const customerController = {};

const router = Router();

router.get('/', customerController.getMyInfo);
router.post('/', customerController.create);
router.put('/', customerController.updateMyInfo);
router.delete('/', customerController.deleteMyself);

exports = router;
