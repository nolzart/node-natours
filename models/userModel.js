const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    photo: String,
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    passwordConfirm: {
        type: String,
        validate: {
            // This only works on SAVE and CREATE
            validator: function (val) {
                return val === this.password;
            },
            message: 'Password are not the same',
        },
    },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;

    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
