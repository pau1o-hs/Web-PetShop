const serviceRepository = require('../repositories/services');
const scheduleRepository = require('../repositories/schedule');
const authService = require('../services/auth');

// Used by: Both
exports.getCurrent = async (req, res) => {
  try {
    const schedule = await scheduleRepository.getCurrent();
    res.status(200).send(schedule);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Customer
exports.getCustomerReservations = async (req, res) => {
  try {
    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const decoded = await authService.decodeToken(token);

    const schedule = await scheduleRepository.getCustomerReservations(
      decoded.id
    );
    res.status(200).send(schedule);
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Customer
exports.fillSlotByServiceSlug = async (req, res) => {
  // const token =
  //   req.body.token || req.query.token || req.headers['x-access-token'];
  // const decoded = await authService.decodeToken(token);

  // PetID is also given in req.body
  try {
    const service = await serviceRepository.getBySlug(req.body.serviceSlug);
    // Guard clause
    if (!service) {
      res.send(404).send({
        message: 'Service not found',
      });
    }

    await scheduleRepository.fillSlot({
      customer: req.body.customer,
      service: service._id,
      date: req.body.date,
      pet: req.body.pet,
      state: 'BOOKED',
    });

    res.status(201).send({ message: 'Service booked successfully!' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.fillSlotByServiceId = async (req, res) => {
  // ServiceID is given in req.body
  try {
    const service = await serviceRepository.getById(req.body.service);
    // Guard clause
    if (!service) {
      res.send(404).send({
        message: 'Service not found',
      });
    }

    await scheduleRepository.fillSlot({
      service: service._id,
      date: req.body.date,
    });

    res.status(201).send({ message: 'Service slot opened successfully!' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.changeSlotService = async (req, res) => {
  // the new ServiceID is given in req.body
  try {
    await scheduleRepository.changeSlot(req.body.date, {
      service: req.body.service,
    });
    res.status(200).send({ message: 'Service slot successfully update!' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};

// Used by: Admin
exports.emptySlot = async (req, res) => {
  try {
    await scheduleRepository.emptySlot(req.body.date);
    res.status(200).send({ message: 'Service slot successfully deleted!' });
  } catch (e) {
    res.status(500).send({
      message: 'Error while processing the request.',
      error: e,
    });
  }
};
