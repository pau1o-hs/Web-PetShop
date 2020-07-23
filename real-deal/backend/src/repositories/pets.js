const mongoose = require('mongoose');

const Pet = mongoose.Model('Pet');

exports.getAll = async (ownerId) => {
  const res = await Pet.find({ owner: ownerId }, '-owner');
  return res;
};

exports.getBySlug = async (slug) => {
  const res = await Pet.findOne({ slug }, 'name race photo age');
  return res;
};

exports.createOne = async (data) => {
  const pet = new Pet(data);
  await pet.save();
};

exports.updateBySlug = async (slug, data) => {
  await Pet.findOneAndUpdate(slug, {
    $set: {
      name: data.name,
      photo: data.photo,
      race: data.race,
      age: data.age,
    },
  });
};

exports.deleteBySlug = async (slug) => {
  await Pet.findOneAndRemove(slug);
};
