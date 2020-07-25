const slugify = require('slugify');
const Pet = require('../models/pet');

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
      $set: data,
    }
  );
};

exports.deleteBySlug = async (ownerId, slug) => {
  await Pet.findOneAndDelete({ owner: ownerId, slug });
};
