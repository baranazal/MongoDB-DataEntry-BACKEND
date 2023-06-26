var express = require('express');

const { createIncident, 
    getIncidents, 
    getIncident, 
    updateIncident, 
    deleteIncident
} = require('../controllers/form');


const router = express.Router();

router.route('/')
    .post(createIncident)
    .get(getIncidents);

router.route('/:id')
    .get(getIncident)
    .put(updateIncident)
    .delete(deleteIncident);

module.exports = router;