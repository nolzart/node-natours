const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

// const setResCSP = res => {
//     if (process.env.NODE_ENV === 'development')
//         res.set(
//             'Content-Security-Policy',
//             `default-src 'self' https://*; connect-src 'self' https://* wss://*;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data: blob:;object-src 'none';worker-src 'self' blob:;script-src 'self' https://* 'unsafe-inline' 'unsafe-eval' blob:;script-src-attr 'none';style-src 'self'  https://* 'unsafe-inline';upgrade-insecure-requests`
//         );
// };

exports.alerts = (req, res, next) => {
    const { alert } = req.query;

    if (alert === 'booking')
        res.locals.alert =
            "Your booking was successful! Please check your email for a confirmation. If your booking doesn't show up here, please come back later";

    next();
};

exports.getOverview = catchAsync(async (req, res) => {
    const tours = await Tour.find();

    // only use this if you have trouble with the CSP to get external packages
    // setResCSP(res);

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

    // only use this if you have trouble with the CSP to get external packages
    // setResCSP(res);
    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour,
    });
});

exports.getMyTours = catchAsync(async (req, res, next) => {
    const bookings = await Booking.find({ user: req.user.id });
    const tourIDs = bookings.map(el => el.tour.id);

    const tours = await Tour.find({ _id: { $in: tourIDs } });

    // only use this if you have trouble with the CSP to get external packages
    // setResCSP(res);

    res.status(200).render('overview', {
        title: 'My tours',
        tours,
    });
});

exports.getLoginForm = (req, res) => {
    // only use this if you have trouble with the CSP to get external packages
    // setResCSP(res);
    res.status(200).render('login', {
        title: 'Log into your account',
    });
};

exports.getAccount = (req, res) => {
    // only use this if you have trouble with the CSP to get external packages
    // setResCSP(res);
    res.status(200).render('account', {
        title: 'Your account',
    });
};
