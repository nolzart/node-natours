const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getOverview = catchAsync(async (req, res) => {
    const tours = await Tour.find();

    res.status(200).render('overview', {
        title: 'All tours',
        tours,
    });
});

exports.getTour = catchAsync(async (req, res, next) => {
    // Get data
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user',
    });

    if (!tour)
        return next(new AppError('There is no tour with that name', 404));

    if (process.env.NODE_ENV === 'development')
        res.set(
            'Content-Security-Policy',
            `default-src 'self' https://*; connect-src 'self' https://* wss://*;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data: blob:;object-src 'none';worker-src 'self' blob:;script-src 'self' https://* 'unsafe-inline' 'unsafe-eval' blob:;script-src-attr 'none';style-src 'self'  https://* 'unsafe-inline';upgrade-insecure-requests`
        );
    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour,
    });
});

exports.getLoginForm = (req, res) =>
    res.status(200).render('login', {
        title: 'Log into your account',
    });

exports.getAccount = (req, res) =>
    res.status(200).render('account', {
        title: 'Your account',
    });
