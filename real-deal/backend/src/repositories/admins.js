const mongoose = require('mongoose');

const Admin = mongoose.model('Admin');

exports.getById = async (id) => {
  const res = await Admin.findById(id, '-childAdmins -password');
  return res;
};

exports.getAll = async () => {
  const res = await Admin.find({}, 'name photo phone email');
  return res;
};

exports.getMyChildren = async (id) => {
  const res = (await Admin.findById(id, 'childAdmins')).populate('childAdmins');
  return res;
};

exports.getByAdminName = async (adminName) => {
  const res = await Admin.findOne({
    adminName,
  });
  return res;
};

exports.createNewAdmin = async (data) => {
  const admin = new Admin(data);
  await admin.save();
};

exports.updateById = async (id, data) => {
  await Admin.findByIdAndUpdate(id, {
    $set: {
      CPF: data.cpf,
      name: data.name,
      photo: data.photo,
      phone: data.phone,
      email: data.email,
      admin: data.admin,
      password: data.password,
    },
  });
};

exports.deleteChildAdmin = async (childId) => {
  await Admin.findByIdAndDelete(childId);
};
