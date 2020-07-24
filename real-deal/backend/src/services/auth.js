const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = async (data) => {
  return jwt.sign(data, process.env.JWT_SALT_KEY, { expiresIn: '1d' });
};

exports.decodeToken = async (token) => {
  const data = await jwt.verify(token, process.env.JWT_SALT_KEY);
  return data;
};

// Middleware
exports.isAuthenticated = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      message: 'Restrict access',
    });
  } else {
    jwt.verify(token, process.env.JWT_SALT_KEY, (error) => {
      if (error) {
        res.status(401).json({
          message: 'Invalid token',
        });
      } else {
        next();
      }
    });
  }
};

// Middleware
exports.isAuthenticatedAdmin = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      message: 'Restrict access',
    });
  } else {
    jwt.verify(token, process.env.JWT_SALT_KEY, (error, decoded) => {
      if (error) {
        res.status(401).json({
          message: 'Invalid token',
        });
      } else if (decoded.isAdmin) {
        next();
      } else {
        res.status(403).json({
          message: 'This functionality is restricted to admins only.',
        });
      }
    });
  }
};
