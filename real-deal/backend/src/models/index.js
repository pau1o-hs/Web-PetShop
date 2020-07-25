// const fs = require('fs');
// const path = require('path');
// const mongoose = require('mongoose');

// const basename = path.basename(__filename);

// const models = {};

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//     );
//   })
//   .forEach((file) => {
//     const modelPath = path.join(__dirname, file);
//     console.log(modelPath);
//     const model = require(modelPath);
//     models[model.name] = model;
//   });

// Object.keys(models).forEach((modelName) => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models);
//   }
// });

// module.exports = models;
