const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('customer').isMongoId(),
    body('products').isArray(),
    body('products.product').isMongoId(),
    body('products.quantity').isInt(),
    body('services').isArray(),
    body('services.service').isMongoId(),
    body('services.pet').isMongoId(),
    body('services.date').isDate(),
  ];
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
