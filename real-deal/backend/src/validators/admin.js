const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('CPF').optional().isNumeric().isLength({ min: 11, max: 11 }),
    body('name').optional().isLength({ min: 5, max: 25 }),
    body('phone').optional().isNumeric().isLength({
      min: 10,
    }),
    body('email').optional().isEmail(),
    body('adminName').optional().isAscii().isLowercase().not().contains(' '),
    body('password').optional().not().contains(' '),
  ];
};

// Middleware
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
    return;
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
