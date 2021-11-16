var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ant_controller = require('../controllers/ant');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// ant ROUTES ///
// POST request for creating a ant.
router.post('/resource/ant', ant_controller.ant_create_post);
// DELETE request to delete ant.
router.delete('/resource/ant/:id', ant_controller.ant_delete);
// PUT request to update ant.
router.put('/resource/ant/:id', ant_controller.ant_update_put);
// GET request for one ant.
router.get('/resource/ant/:id', ant_controller.ant_detail);
// GET request for list of all ant items.
router.get('/resource/ant', ant_controller.ant_list);
module.exports = router;