const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body('owner').optional().isMongoId(),
    body('age').optional().isInt(),
    body('slug').optional().isSlug(),
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
