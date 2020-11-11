const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.route('/').get(viewController.getOverview);
router.route('/tour/:slug').get(authController.protect, viewController.getTour);
router.route('/login').get(viewController.getLoginForm);

module.exports = router;
