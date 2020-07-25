const { Router } = require('express');

const scheduleController = require('../../controllers/schedule');
const validator = require('../../validators/schedule');

const router = Router();

router.get('/', scheduleController.getCurrent);

// Associate a service with an empty slot; the req body, thus,
// must contain the date (e.g. 20 / 08 / 2020) and time (e.g. 10: 00) of the slot
// that must be filled and the service ID;
// if the year is not informed, it defaults to the current year.
router.post(
  '/',
  validator.rules(),
  validator.validate,
  scheduleController.fillSlotByServiceId
);

// Change a service associated with a slot; the slot that is going
// to be changed must NOT be scheduled by any customer, otherwise the operation
// will fail; the req body, thus, must contain the date(e.g. 20 / 08 / 2020) and
// time(e.g. 10: 00) of the slot that must be modified and the new service ID;
// if the year is not informed, it defaults to the current year.
router.put(
  '/',
  validator.rules(),
  validator.validate,
  scheduleController.changeSlotService
);

// Delete a service associated with a slot; the slot that is
// going to be deleted must NOT be scheduled by any customer, otherwise the operation
// will fail; the req body, thus, must contain the date(e.g. 20 / 08 / 2020) and
// time(e.g. 10: 00) of the slot that must be modified to EMPTY; if the year is
// not informed, it defaults to the current year; if there is no service associated
// with the specified slot, the operation will silently fail.
router.delete('/', scheduleController.emptySlot);

module.exports = router;
