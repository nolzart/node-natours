const Review = require('../models/reviewModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const filterObj = require('../utils/filterObj');

exports.getAllReviews = catchAsync(async (req, res, next) => {
    if (req.params.tourId) req.query.tour = req.params.tourId;
    const features = new APIFeatures(Review.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const reviews = await Review.find(features.query);

    res.status(200).json({
        status: 'success',
        results: reviews.length,
        data: {
            reviews,
        },
    });
});

exports.getReview = catchAsync(async (req, res, next) => {
    const review = await Review.findById(req.params.id);

    if (!review) return next(new AppError('This review not exists!', 403));

    res.status(200).json({
        status: 'success',
        data: {
            review,
        },
    });
});

exports.createReview = catchAsync(async (req, res, next) => {
    if (!req.body.tour) req.body.tour = req.params.tourId;
    if (!req.body.user) req.body.user = req.user.id;

    const newReview = await Review.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            review: newReview,
        },
    });
});

exports.updateReview = catchAsync(async (req, res, next) => {
    const updateObj = filterObj(req.body, 'review', 'rating');
    const updatedReview = await Review.findById(req.params.id, updateObj);

    res.status(200).json({
        status: 'success',
        data: {
            review: updatedReview,
        },
    });
});

exports.deleteReview = catchAsync(async (req, res, next) => {
    await Review.findOneAndDelete(req.params.id);

    res.status(204).json({
        status: 'success',
        data: null,
    });
});
