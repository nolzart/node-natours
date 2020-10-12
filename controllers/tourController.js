const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status('400').json({
            status: 'fail',
            message: 'Missing name or price',
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    res.status(200).send({
        status: 'sucess',
        // results: tours.length,
        // data: {
        //     tours,
        // },
    });
};

exports.getTour = (req, res) => {
    // const tour = tours.find((tour) => tour.id === req.params.id * 1);
    // res.status(200).json({
    //     status: 'sucess',
    //     data: {
    //         tour,
    //     },
    // });
};

exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'sucess',
        // data: {
        //     tour: newTour,
        // },
    });
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'sucess',
        data: {
            tour: '<Updated tour here...>',
        },
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
