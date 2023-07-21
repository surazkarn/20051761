const express = require('express');
const { getTrainSchedules } = require('../controllers/trainsController');

const router = express.Router();

router.get('/', getTrainSchedules);

module.exports = router;
