const mongoose = require('mongoose');

const Product = mongoose.model('products');

exports.getAll = async () => {
  const res = await Product.find({}, 'title price slug');
  return res;
};

exports.getById = async (id) => {
  const res = await Product.findById(id);
  return res;
};

exports.getBySlug = async (slug) => {
  const res = await Product.findOne({ slug }, 'title price slug');
  return res;
};

exports.getGroup = async (tag) => {
  const res = await Product.find({ tag }, 'title price slug');
  return res;
};

exports.createOne = async (data) => {
  const product = new Product(data);
  await product.save();
};

exports.updateById = async (data) => {
  await Product.findByIdAndUpdate(data.id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
      slug: data.slug,
    },
  });
};

exports.updateGroup = async (data) => {
  await Product.updateMany(data.tag, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
      slug: data.slug,
    },
  });
};

exports.deleteById = async (id) => {
	await Product.findByIdAndRemove({id});
};

exports.deleteGroup = async (tag) => {
	await Product.deleteMany(tag);
};
