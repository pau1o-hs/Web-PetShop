const { Router } = require('express');

const scheduleController = require('../../controllers/schedule');
const authService = require('../../services/auth');
const validator = require('../../validators/schedule');

const router = Router();

router.get('/', scheduleController.getCurrent);

// POST /schedule → associate a service with an empty slot; the req body, thus,
// must contain the date (e.g. 20/08/2020) and time (e.g. 10:00) of the slot
// that must be filled, the service slug (customers don’t have access to service ID)
// and the pet ID; if the year is not informed, it defaults to the current year.
router.post(
  '/',
  validator.rules(),
  validator.validate,
  authService.isAuthenticated,
  scheduleController.fillSlotByServiceSlug
);

module.exports = router;
