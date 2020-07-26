const Admin = require('../models/admin');

exports.getById = async (id) => {
  const res = await Admin.findById(id, '-childAdmins -password');
  return res;
};

exports.getAll = async () => {
  const res = await Admin.find({}, 'name photo phone email');
  return res;
};

exports.getMyChildren = async (id) => {
  const adm = await Admin.findById(id, 'childAdmins');

  const res = await Promise.all(
    adm.childAdmins.map((childId) => Admin.findById(childId, '-password'))
  );

  return res;
};

exports.getByAdminName = async (adminName) => {
  const res = await Admin.findOne({
    adminName,
  });
  return res;
};

exports.createNewAdmin = async (parentId, data) => {
  const admin = new Admin(data);
  await admin.save();
  if (parentId !== undefined) {
    await Admin.findByIdAndUpdate(parentId, {
      $push: { childAdmins: admin._id },
    });
  }
};

exports.updateById = async (id, data) => {
  await Admin.findByIdAndUpdate(id, {
    $set: data,
  });
};

exports.deleteChildAdmin = async (childId) => {
  await Admin.findByIdAndDelete(childId);
};
