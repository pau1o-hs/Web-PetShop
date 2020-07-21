const { body, validationResult } = require('express-validator');

exports.rules = () => {
  return [
    body(
      'username',
      'Username must have no spaces or upper case characters. Also, it must have at least 6 and at most 8 characters.'
    )
      .not()
      .contains(' ')
      .not()
      .matches(/[A-Z]/)
      .isLength({ min: 6, max: 8 }),

    body('email', 'Email must be properly formatted (xpto@foo.bar).').isEmail(),

    body(
      'password',
      'Password must be, at least, 9 characters long and must have no spaces.'
    )
      .isLength({ min: 9 })
      .not()
      .contains(' '),

    body('address', 'Address must have, at least, 10 characters.').isLength({
      min: 10,
    }),
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
