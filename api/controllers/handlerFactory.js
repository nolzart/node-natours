const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc)
            return next(new AppError('No document found with that ID', 404));

        res.status(204).json({
            status: 'success',
            data: null,
        });
    });

exports.updateOne = Model =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!doc)
            return next(new AppError('No document found with that ID', 404));

        res.status(200).json({
            status: 'sucess',
            data: {
                data: doc,
            },
        });
    });

exports.createOne = Model =>
    catchAsync(async (req, res, next) => {
        const newDoc = await Model.create(req.body);
        res.status(201).json({
            status: 'sucess',
            data: {
                data: newDoc,
            },
        });
    });

exports.getOne = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        let query = Model.findById(req.params.id);
        if (popOptions) query = query.populate(popOptions);
        const doc = await query;

        if (!doc)
            return next(new AppError('No document found with that ID', 404));

        res.status(200).json({
            status: 'sucess',
            data: {
                data: doc,
            },
        });
    });

exports.getAll = Model =>
    catchAsync(async (req, res, next) => {
        // allow GET all reviews from tours resources
        if (req.params.tourId) req.query.tour = req.params.tourId;
        // Execute query
        const features = new APIFeatures(Model.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        // const docs = await features.query.explain();
        const docs = await features.query;

        // Send Response
        res.status(200).send({
            status: 'sucess',
            results: docs.length,
            data: {
                data: docs,
            },
        });
    });