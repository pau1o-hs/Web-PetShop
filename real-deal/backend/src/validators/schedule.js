const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('date').isDate(),
    body('customer').optional().isMongoId(),
    body('service').optional().isMongoId(),
    body('serviceSlug').optional().isSlug(),
    body('pet').optional().isMongoId(),
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
