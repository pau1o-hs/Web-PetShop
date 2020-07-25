const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('customer').isMongoId(),
    body('products').optional().isArray(),
    body('products.product').optional().isMongoId(),
    body('products.quantity').optional().isInt(),
    body('services').optional().isArray(),
    body('services.service').optional().isMongoId(),
    body('services.pet').optional().isMongoId(),
    body('services.date').optional().isDate(),
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
