const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', err => {
    // eslint-disable-next-line no-console
    console.log('UNCAUGHT EXCEPTION! 💥 shutting down');
    // eslint-disable-next-line no-console
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE_URL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on  http://127.0.0.1:${port}`);
});

process.on('unhandledRejection', err => {
    // eslint-disable-next-line no-console
    console.log('UNHANDLED REJECTION! 💥 shutting down');
    // eslint-disable-next-line no-console
    console.log(err.name, err.message);
    server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
    console.log('🖐 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});
