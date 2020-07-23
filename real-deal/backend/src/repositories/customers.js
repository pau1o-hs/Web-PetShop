const mongoose = require('mongoose');

const Customer = mongoose.Model('Customer');

exports.getAll = async () => {
  const res = await Customer.find({}, '-password');
  return res;
};

exports.getById = async (id) => {
  const res = await Customer.findById(id, '-password');
  return res;
};

exports.create = async (data) => {
  const customer = new Customer(data);
  await customer.save();
};

exports.updateById = async (data) => {
  await Customer.findByIdAndUpdate(data.id, { $set: { data } });
};

exports.deleteMyself = async () => {
  return true;
};

exports.deleteById = async () => {
  return true;
};

exports.authenticate = async () => {
  return true;
};
