const mongoose = require('mongoose');
const slugify = require('slugify');

const Pet = mongoose.Model('Pet');

exports.getAll = async (ownerId) => {
  const res = await Pet.find({ owner: ownerId }, '-owner');
  return res;
};

exports.getBySlug = async (ownerId, slug) => {
  const res = await Pet.findOne(
    { owner: ownerId, slug },
    'name race photo age'
  );
  return res;
};

exports.createOne = async (ownerId, data) => {
  const pet = new Pet({
    owner: ownerId,
    slug: slugify(data.name, { lower: true, strict: true }),
    ...data,
  });
  await pet.save();
};

exports.updateBySlug = async (ownerId, slug, data) => {
  await Pet.findOneAndUpdate(
    { owner: ownerId, slug },
    {
      $set: {
        name: data.name,
        photo: data.photo,
        race: data.race,
        age: data.age,
      },
    }
  );
};

exports.deleteBySlug = async (ownerId, slug) => {
  await Pet.findOneAndDelete({ owner: ownerId, slug });
};
