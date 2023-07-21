const express = require('express');
const { getUniqueSortedNumbers } = require('../controllers/numberManagementController');

const router = express.Router();

router.get('/', getUniqueSortedNumbers);

module.exports = router;
