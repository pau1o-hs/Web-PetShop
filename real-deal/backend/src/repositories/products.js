const slugify = require('slugify');
const Product = require('../models/product');

// Admin
exports.getAll = async () => {
  const res = await Product.find({});
  return res;
};

// Customer
exports.getAllActives = async () => {
  const res = await Product.find(
    { active: true },
    '-inStock -totalSold -active'
  );
  return res;
};

exports.getById = async (id) => {
  const res = await Product.findById(id);
  return res;
};

exports.getBySlug = async (slug) => {
  const res = await Product.findOne(
    { slug, active: true },
    '-inStock -totalSold -active'
  );
  return res;
};

// Note that this function returns ALL information about the products.
// The controller is responsible for not showing sensible information to non-admins.
exports.getByTag = async (tag) => {
  const res = await Product.find({ tags: tag, active: true });
  return res;
};

exports.createOne = async (data) => {
  const product = new Product({
    slug: slugify(data.name, { lower: true, strict: true }),
    ...data,
  });
  await product.save();
};

exports.updateById = async (id, data) => {
  await Product.findByIdAndUpdate(id, {
    $set: data,
  });
};

exports.deleteById = async (id) => {
  await Product.findByIdAndDelete(id);
};
