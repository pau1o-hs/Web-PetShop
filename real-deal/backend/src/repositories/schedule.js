const Slot = require('../models/slot');

exports.getCurrent = async () => {
  const res = await Slot.find({}) // get ALL open or booked slots
    .populate('service', 'name photo')
    .populate('pet', 'name photo');
  return res;
};

exports.getCustomerReservations = async (customerId) => {
  const res = await Slot.find({ customer: customerId }) // get ALL booked slots for that customer
    .populate('service', 'name price date photo')
    .populate('pet', 'name photo');
  return res;
};

exports.fillSlot = async (data) => {
  const slot = new Slot(data);
  await slot.save();
};

exports.changeSlot = async (date, data) => {
  await Slot.findOneAndUpdate({ date }, { $set: data });
};

exports.emptySlot = async (date) => {
  await Slot.findOneAndDelete({ date });
};
