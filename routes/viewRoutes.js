const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(authController.isLoggedIn, viewController.getOverview);
router
    .route('/tour/:slug')
    .get(authController.isLoggedIn, viewController.getTour);

router.route('/me').get(authController.protect, viewController.getAccount);

router
    .route('/login')
    .get(authController.isLoggedIn, viewController.getLoginForm);

router
    .route('/submit-user-data')
    .post(authController.protect, viewController.updateUserData);

module.exports = router;
