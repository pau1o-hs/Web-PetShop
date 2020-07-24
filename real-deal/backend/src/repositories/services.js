const mongoose = require('mongoose');

const Service = mongoose.model('Service');

// Admin
exports.getAll = async () => {
  const res = await Service.find({});
  return res;
};

// Customer
exports.getAllActives = async () => {
  const res = await Service.find({ active: true }, '-totalBooked -active');
  return res;
};

exports.getById = async (id) => {
  const res = await Service.findById(id);
  return res;
};

exports.getBySlug = async (slug) => {
  const res = await Service.findOne(
    { slug, active: true },
    '-totalSold -active'
  );
  return res;
};

// Note that this function returns ALL information about the services.
// The controller is responsible for not showing sensible information to non-admins.
exports.getByTag = async (tag) => {
  const res = await Service.find({ tags: tag, active: true });
  return res;
};

exports.createOne = async (data) => {
  const product = new Service(data);
  await product.save();
};

exports.updateById = async (id, data) => {
  await Service.findByIdAndUpdate(id, {
    $set: data,
  });
};

exports.deleteById = async (id) => {
  await Service.findByIdAndDelete(id);
};
