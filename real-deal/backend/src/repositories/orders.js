const Order = require('../models/order');

exports.getAll = async () => {
  const res = await Order.find({})
    .populate('customer', 'CPF name email')
    .populate('products.product', 'title tags description price')
    .populate('services.service', 'title tags description responsible price');
  return res;
};

exports.getById = async (id) => {
  const res = await Order.findById(id);
  return res;
};

exports.getByCustomer = async (customerId) => {
  const res = await Order.find({ customer: customerId });
  return res;
};

exports.createOne = async (data) => {
  const order = new Order(data);
  await order.save();
};

exports.updateById = async (id, data) => {
  await Order.findByIdAndUpdate(id, { $set: data });
};

exports.deleteById = async (id) => {
  await Order.findByIdAndDelete(id);
};
