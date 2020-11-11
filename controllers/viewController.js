const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
    const tours = await Tour.find();

    res.status(200).render('overview', {
        title: 'All tours',
        tours,
    });
});

exports.getTour = catchAsync(async (req, res) => {
    // Get data
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user',
    });
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

exports.getLoginForm = catchAsync(async (req, res) => {
    res.status(200).render('login', {
        title: 'Log into your account',
    });
});
