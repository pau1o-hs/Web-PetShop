const mongoose = require('mongoose');

const Order = mongoose.model('order');

// Used by: Admin
exports.getAll = async () => {
	const res = await Order.find({});
	return res;
};

  // Used by: Admin
  exports.getById = async (id) => {
	const res = await Order.findById(id);
	return res;
  };
  
  // Used by: Admin
  exports.getByCustomer = async (CPF) => {
	const res = await Product.find({ CPF });
	return res;
  };
  
  // Used by: Admin
  exports.getGroup = async (req, res) => {
	return true;
  };
  
  // Used by: Customer
  exports.createOne = async (data) => {
	const order = new Product(data);
	await Order.save();
  };
  
  // Used by: Admin
  exports.updateAll = async (req, res) => {
	return true;
  };
  
  // Used by: Admin
  exports.updateById = async (req, res) => {
	return true;
  };
  
  // Used by: Admin
  exports.deleteById = async (id) => {
	await Product.findByIdAndRemove({id});
};