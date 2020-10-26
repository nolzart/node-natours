const AppError = require('../utils/AppError');

const handleCastErrorDB = err => {
    const message = `Invalid ${err.path}: ${err.value}`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
    const message = `Duplicate field value "${err.keyValue.name}". Please use another value!`;
    return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors)
        .map(el => el.message)
        .join('. ');
    const message = `Invalid input data. ${errors}`;
    return new AppError(message, 400);
};

const handleJWTError = () =>
    new AppError('Invalid token. Please log in again!', 401);

const handleTokenExpiredError = () =>
    new AppError('Your token has expired! Please log in again!', 401);

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        error: err,
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
};

const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development') sendErrorDev(err, res);
    if (process.env.NODE_ENV === 'production') {
        console.log('In production');
        const { name } = err;
        let error = { ...err };

        if (name === 'CastError') error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleDuplicateFieldsDB(error);
        if (name === 'ValidationError') error = handleValidationErrorDB(error);
        if (name === 'JsonWebTokenError') error = handleJWTError(error);
        if (name === 'TokenExpiredError')
            error = handleTokenExpiredError(error);

        sendErrorProd(error, res);
    }

    next();
};
