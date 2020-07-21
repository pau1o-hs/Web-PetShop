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
exports.authorize = (req, res, next) => {
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

// // Middleware
// exports.isAdmin = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers['x-access-token'];

//   if (!token) {
//     res.status(401).json({
//       message: 'Restrict access',
//     });
//   } else {
//     jwt.verify(token, process.env.JWT_SALT_KEY, function (error, decoded) {
//       if (error) {
//         res.status(401).json({
//           message: 'Invalid token',
//         });
//       } else if (decoded.roles.includes('admin')) {
//         next();
//       } else {
//         res.status(403).json({
//           message: 'Esta funcionalidade é restrita para administradores',
//         });
//       }
//     });
//   }
// };
