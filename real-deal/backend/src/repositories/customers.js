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
  await Customer.findByIdAndUpdate(data.id, {
    $set: {
      CPF: data.cpf,
      name: data.name,
      email: data.email,
      password: data.password,
      photo: data.photo,
      address: data.address,
      phone: data.phone,
    },
  });
};

exports.deleteById = async (id) => {
  await Customer.findByIdAndDelete(id);
};

exports.authenticate = async (data) => {
  const res = await Customer.findOne({
    email: data.email,
    password: data.password,
  });
  return res;
};
