const factory = require('./handlerFactory');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.aliasTopTours = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,difficulty';
    next();
};

exports.createTour = factory.createOne(Tour);
exports.getAllTours = factory.getAll(Tour);
exports.getTour = factory.getOne(Tour, { path: 'reviews' });
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

exports.getTourStats = catchAsync(async (req, res, next) => {
    const stats = await Tour.aggregate([
        {
            $match: { ratingsAverage: { $gte: 4.5 } },
        },
        {
            $group: {
                _id: { $toUpper: '$difficulty' },
                numTours: { $sum: 1 },
                numRatings: { $sum: '$ratingsQuantity' },
                avgRatings: { $avg: '$ratingsAverage' },
                avgPrice: { $avg: '$price' },
                minPrice: { $min: '$price' },
                maxPrice: { $max: '$price' },
            },
        },
        {
            $sort: { avgPrice: 1 },
        },
    ]);
    res.status(200).json({
        status: 'sucess',
        data: {
            stats,
        },
    });
});

exports.getMontlyPlan = catchAsync(async (req, res, next) => {
    const year = req.params.year * 1;
    const montlyPlan = await Tour.aggregate([
        {
            $unwind: '$startDates',
        },
        {
            $match: {
                startDates: {
                    $gte: new Date(`01-01-${year}`),
                    $lte: new Date(`12-31-${year}`),
                },
            },
        },
        {
            $group: {
                _id: { $month: '$startDates' },
                numTours: { $sum: 1 },
                tours: { $push: '$name' },
            },
        },
        {
            $addFields: {
                month: '$_id',
            },
        },
        {
            $project: {
                _id: 0,
            },
        },
        {
            $sort: { numTours: -1 },
        },
    ]);

    res.status(200).json({
        status: 'sucess',
        data: {
            montlyPlan,
        },
    });
});
