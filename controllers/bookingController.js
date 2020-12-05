const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.tourId);

    const session = await stripe.checkout.sessions.create({
        success_url: `${req.protocol}://${req.get('host')}?user=${
            req.user.id
        }&tour=${req.params.tourId}&price=${tour.price}`,
        cancel_url: `${req.protocol}://${req.get('host')}/${tour.slug}`,
        customer_email: req.user.email,
        payment_method_types: ['card'],
        client_reference_id: req.params.id,
        line_items: [
            {
                name: tour.name,
                amount: tour.price * 100,
                currency: 'usd',
                quantity: 1,
                description: tour.summary,
                images: [
                    `${req.protocol}://${req.get('host')}/img/tours/${
                        tour.imageCover
                    }`,
                ],
            },
        ],
    });

    res.status(200).json({
        status: 'success',
        session,
    });
});

exports.createBookingCheckout = async (req, res, next) => {
    // Temporary solution, because that solution is not SECURE
    const { tour, user, price } = req.query;

    if (!tour && !user && !price) return next();
    await Booking.create({ tour, user, price });

    res.redirect('/');
};

exports.getAllBookings = factory.getAll(Booking);
exports.getBooking = factory.getAll(Booking);
exports.createBooking = factory.createOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
