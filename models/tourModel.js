const mongoose = require('mongoose');
// const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true,
            trim: true,
        },
        slug: String,
        duration: {
            type: Number,
            required: [true, 'A tour must have a duration'],
        },
        maxGroupSize: {
            type: Number,
        },
        difficulty: {
            type: String,
            required: [true, 'A tour must have a difficulty'],
        },
        ratingsAverage: {
            type: Number,
            default: 4.5,
        },
        ratingsQuantity: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'A tour must have a price'],
        },
        priceDiscount: {
            type: Number,
        },
        summary: {
            type: String,
            trim: true,
            required: [true, 'A tour must have a summary'],
        },
        description: {
            type: String,
            tim: true,
        },
        imageCover: {
            type: String,
            required: [true, 'A tour must have a cover'],
        },
        images: [String],
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false,
        },
        startDates: [Date],
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
