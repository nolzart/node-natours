const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');
// const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.use(viewController.alerts);

router.route('/').get(
    // bookingController.createBookingCheckout,
    authController.isLoggedIn,
    viewController.getOverview
);

router
    .route('/my-tours')
    .get(authController.protect, viewController.getMyTours);

router
    .route('/tour/:slug')
    .get(authController.isLoggedIn, viewController.getTour);

router.route('/me').get(authController.protect, viewController.getAccount);
router
    .route('/login')
    .get(authController.isLoggedIn, viewController.getLoginForm);

// router
//     .route('/submit-user-data')
//     .post(authController.protect, viewController.updateUserData);

module.exports = router;
