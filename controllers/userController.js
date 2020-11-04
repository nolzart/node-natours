const factory = require('./handlerFactory');
const User = require('../models/userModel');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const filterObj = require('../utils/filterObj');

exports.getMe = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
    // Create error if user POSTs password data
    if (req.body.password || req.body.passwordConfirm)
        return next(
            new AppError(
                'This route is not for password updates. Please use /updateMyPassword',
                400
            )
        );

    // Filtered out unwanted fields names that are not allowed to be updated
    const filteredBody = filterObj(req.body, 'name', 'email');

    // Update user document
    const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        filteredBody,
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser,
        },
    });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, { active: false });

    res.status(204).json({
        status: 'success',
        data: null,
    });
});

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not defined, Please go to /signup',
    });
};
