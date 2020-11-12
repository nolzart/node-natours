const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.route('/').get(authController.isLoggedIn, viewController.getOverview);
router
    .route('/tour/:slug')
    .get(authController.isLoggedIn, viewController.getTour);
router
    .route('/login')
    .get(authController.isLoggedIn, viewController.getLoginForm);

router.route('/me').get(authController.protect, viewController.getAccount);

module.exports = router;
