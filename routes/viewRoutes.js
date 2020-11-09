const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.route('/').get(viewController.getOverview);
router.route('/tour/:slug').get(viewController.getTour);

module.exports = router;
