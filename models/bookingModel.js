const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tour',
        required: [true, 'Booking must belong to a tour!'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Booking must belong to an user!'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    price: {
        type: Number,
        required: [true, 'Booking must have a price'],
    },
    paid: {
        type: Boolean,
        default: true,
    },
});

bookingSchema.pre(/^find/, function (next) {
    this.populate('user').populate({
        path: 'tour',
        select: 'name',
    });
    next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
