const express = require('express');
const { getTrainSchedules } = require('../controllers/trainController');

const router = express.Router();

router.get('/', getTrainSchedules);

module.exports = router;
