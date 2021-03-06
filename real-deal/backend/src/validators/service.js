const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('slug').optional().isSlug(),
    body('tags').optional().isArray(),
    body('price').optional().isDecimal(),
    body('totalBooked').optional().isInt(),
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
