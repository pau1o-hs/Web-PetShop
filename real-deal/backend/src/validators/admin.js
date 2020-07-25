const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('CPF').isNumeric().isLength({ min: 11, max: 11 }),
    body('name').isLength({ min: 5, max: 25 }),
    body('phone').isMobilePhone('pt-BR').isLength({
      min: 10,
    }),
    body('email').isEmail(),
    body('adminName').isAscii().isLowercase().not().contains(' '),
    body('password').isLength({ min: 8 }).not().contains(' '),
};

// Middleware
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
