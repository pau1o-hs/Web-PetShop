const mongoose = require('mongoose');

const Admin = mongoose.model('Admin');

exports.getMyInfo = async (id) => {
  const res = await Admin.findById(id, '-childAdmins -password');
  return res;
};

exports.getAllAdminsInfo = async () => {
  const res = await Admin.find({}, 'name photo phone email');
  return res;
};

exports.getMyChildrenInfo = async (id) => {
  const res = (await Admin.findById(id, 'childAdmins')).populate(
    'childAdmins'
  );
  return res;
};

exports.createNewAdmin = async (data) => {
  const admin = new Admin(data);
  await admin.save();
};

exports.updateMyInfo = async (data) => {
  await Admin.findByIdAndUpdate(data.id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
      slug: data.slug,
    },
  });
};

exports.deleteChildAdmin = async (childId) => {
  await Admin.findByIdAndRemove(childId);
};
