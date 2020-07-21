const { Router } = require('express');

const servicesController = {};

const router = Router();

// GET /services → read info from all services
router.get('/', servicesController.getAll);
// GET /services/:id → read info from a service
router.get('/:id', servicesController.getById);
// GET /services/group → read info from a group of services that match the specified
// params in the req body(ex: services that have a category of “shear”); a call
// to this endpoint with no params specified is equivalent to a GET call to /services.
router.get('/group', servicesController.getGroup);

// POST /services → create a service
router.post('/', servicesController.createOne);

// PUT /services/:id → update info from a service
router.put('/:id', servicesController.updateById);
// PUT /services/group → update info from a group of services that match the specified
// params in the req body(ex: change services that have the category “shear” to “grooming”);
// a call to this endpoint with no params specified is INVALID (i.e.it should not
// update all services in the database).
router.put('/group', servicesController.updateGroup);

// DELETE /services/:id → delete a service
router.delete('/:id', servicesController.deleteById);
// DELETE /services/group → delete a group of services that match the specified
// params in the req body; a call to this endpoint with no params specified is
// INVALID (i.e.it should not delete all services in the database).
router.delete('/group', servicesController.deleteGroup);

exports = router;
