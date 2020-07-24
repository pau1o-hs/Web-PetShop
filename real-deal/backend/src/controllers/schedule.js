const mongoose = require('mongoose');

const Schedule = mongoose.Model('Schedule');

// Used by: Both
exports.getCurrent = async (req, res) => {
  return true;
};

// Used by: Customer
exports.fillSlotByServiceSlug = async (req, res) => {
  return true;
};

// Used by: Admin
exports.fillSlotByServiceId = async (req, res) => {
  return true;
};

// Used by: Admin
exports.changeSlotService = async (req, res) => {
  return true;
};

// Used by: Admin
exports.emptySlot = async (req, res) => {
  return true;
};
