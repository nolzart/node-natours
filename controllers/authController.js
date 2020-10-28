const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { promisify } = require('util');

const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const sendEmail = require('../utils/email');

const signToken = id =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
}

exports.signup = catchAsync(async (req, res, next) => {
    // NOTE: SERIUS SECURITY FLAW --> const newUser = await User.creatE(req.body);
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role,
    });

    createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    // Check if email and password exists
    if (!email || !password)
        return next(new AppError('Please provide email and password', 400));
    // Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password)))
        return next(new AppError('Incorrect email or password', 401));

    // If everything ok, send token to client
    createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
    // Getting token and check of it's there
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    )
        token = req.headers.authorization.split(' ')[1];
    if (!token)
        return next(
            new AppError('You are not logged in! Please log in to get access'),
            401
        );

    // Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser)
        return next(
            new AppError(
                'The user belonging to this token does not longer exist.',
                401
            )
        );

    // Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat))
        return next(
            new AppError(
                'User recently changed password! Please log in again',
                401
            )
        );

    req.user = currentUser;
    next();
});

exports.restrictTo = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role))
        return next(
            new AppError(
                'You do not have permission to perform this action',
                403
            )
        );
    next();
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
    // Get user based POSTed email
    const user = await User.findOne({ email: req.body.email });

    if (!user)
        return next(
            new AppError('There is no user with that email address', 404)
        );
    // Generate random reset token
    const resetPassword = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/users/resetPassword/${resetPassword}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}. \n If you didn't forget your password please ignore this email!`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10m)',
            message,
        });

        res.status(200).json({
            status: 'success',
            message: 'Token sent to email!',
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordTokenExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return next(
            new AppError(
                'There was an error sending the email. Try again later',
                500
            )
        );
    }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
    // Get User based on the token
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });

    // If token has not expired and there is user, set the new password
    if (!user)
        return next(new AppError('Token is invalid or has expired!', 400));

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();
    //Log the user in, send JWT
    createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
    // Get user from collection
    const user = await User.findById(req.user.id).select('+password');

    // Check if POSTed current password is correct
    if (
        !user ||
        !(await user.correctPassword(req.body.currentPassword, user.password))
    )
        return next(new AppError('Your current password is wrong.', 401));

    // If so, update password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
    // User.findByIdAndUpdate wil NOT work as intended!
    // Log user in, send JWT
    createSendToken(user, 200, res);
});