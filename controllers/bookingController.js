const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
    const tour = await Tour.findById(req.params.tourId);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        // success_url: `${req.protocol}://${req.get('host')}?user=${
        //     req.user.id
        // }&tour=${req.params.tourId}&price=${tour.price}`,
        success_url: `${req.protocol}://${req.get(
            'host'
        )}/my-tours?alert=bookings`,
        cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
        customer_email: req.user.email,
        client_reference_id: req.params.tourId,
        line_items: [
            {
                name: `${tour.name} Tour`,
                description: tour.summary,
                images: [
                    `${req.protocol}://${req.get('host')}/img/tours/${
                        tour.imageCover
                    }`,
                    // `https://www.natours.dev/img/tours/${tour.imageCover}`,
                ],
                amount: tour.price * 100,
                currency: 'usd',
                quantity: 1,
            },
        ],
        metadata: {
            price: tour.price * 100,
        },
    });

    res.status(200).json({
        status: 'success',
        session,
    });
});

// exports.createBookingCheckout = async (req, res, next) => {
//     // Temporary solution, because that solution is not SECURE
//     const { tour, user, price } = req.query;

//     if (!tour && !user && !price) return next();
//     await Booking.create({ tour, user, price });

//     res.redirect('/');
// };

const createBookingCheckout = async session => {
    if (process.env.NODE_ENV === 'development') console.log(session);
    const tour = session.client_reference_id;
    const user = (await User.findOne({ email: session.customer_email })).id;
    const price = session.display_items
        ? session.display_items[0].amount / 100
        : session.metadata.price / 100;
    if (process.env.NODE_ENV === 'development') console.log(price);
    await Booking.create({ tour, user, price });
};

exports.webhookCheckout = (req, res, next) => {
    const signature = req.headers['stripe-signature'];

    let event;
    if (process.env.NODE_ENV === 'development') console.log(req.body);
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed')
        createBookingCheckout(event.data.object);

    res.status(200).json({ received: true });
};

exports.getAllBookings = factory.getAll(Booking);
exports.getBooking = factory.getAll(Booking);
exports.createBooking = factory.createOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
