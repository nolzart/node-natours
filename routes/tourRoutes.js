const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// router.param('id', tourController.checkID);

router.use('/:tourId/reviews', reviewRouter);

router
    .route('/top-5-cheap')
    .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router
    .route('/montly-plan/:year')
    .get(
        authController.protect,
        authController.protectTo('lead-guide', 'guide', 'admin'),
        tourController.getMontlyPlan
    );

router
    .route('/')
    .get(tourController.getAllTours)
    .post(
        authController.protect,
        authController.protectTo('lead-guide', 'admin'),
        tourController.createTour
    );

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(
        authController.protect,
        authController.restrictTo('lead-guide', 'admin'),
        tourController.updateTour
    )
    .delete(
        authController.protect,
        authController.restrictTo('lead-guide', 'admin'),
        tourController.deleteTour
    );

module.exports = router;
