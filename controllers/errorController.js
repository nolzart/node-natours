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

const sendErrorDev = (err, req, res) => {
    console.log(req.originalUrl);
    if (req.originalUrl.startsWith('/api'))
        res.status(err.statusCode).json({
            error: err,
            status: err.status,
            message: err.message,
            stack: err.stack,
        });
    else
        res.status(err.statusCode).render('error', {
            title: 'Something went wrong!',
            message: err.message,
        });
};

const sendErrorProd = (err, req, res) => {
    // API
    if (req.originalUrl.startsWith('/api')) {
        if (err.isOperational)
            return res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
            });

        return res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        });
    }
    console.log(err);
    // RENDERED PAGE
    if (err.isOperational)
        return res.status(err.statusCode).render('error', {
            title: 'Something went wrong!',
            message: err.message,
        });
    return res.status(500).render({
        title: 'Something went wrong!',
        message: err.message,
    });
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') sendErrorDev(err, req, res);
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

        sendErrorProd(error, req, res);
    }

    next();
};
