const models = require('../../src/models');

module.exports = () => {
  return Promise.all(
    Object.values(models).map((model) => {
      return model.deleteMany({});
    })
  );
};
