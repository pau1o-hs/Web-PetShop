const { Router } = require('express');
const customerRoute = require('./customer');
const adminRoute = require('./admin');

const router = Router();

router.use('/', customerRoute);
router.use('/admin', adminRoute);

module.exports = router;
