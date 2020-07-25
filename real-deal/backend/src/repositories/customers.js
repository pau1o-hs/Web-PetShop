const Customer = require('../models/customer');

exports.getAll = async () => {
  const res = await Customer.find({}, '-password');
  return res;
};

exports.getById = async (id) => {
  const res = await Customer.findById(id, '-password');
  return res;
};

exports.getByEmail = async (email) => {
  const res = await Customer.findOne({
    email,
  });
  console.log(res);
  return res;
};

exports.create = async (data) => {
  const customer = new Customer(data);
  await customer.save();
};

exports.updateById = async (id, data) => {
  await Customer.findByIdAndUpdate(id, {
    $set: data,
  });
};

exports.deleteById = async (id) => {
  await Customer.findByIdAndDelete(id);
};
