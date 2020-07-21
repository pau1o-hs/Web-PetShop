const { Router } = require('express');

const authController = {};

const router = Router();

router.post('/', authController.authenticate);

exports = router;
