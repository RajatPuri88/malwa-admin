"use strict";
let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let adminSchema = new mongoose.Schema({


    firstName: {
        type: String,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,

        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,

        lowercase: true
    },

    password: {
        type: String,
        default: "12345"

    },

    status: {
        type: String,
        enum: ['Active', 'InActive', 'Created', 'Deleted'],
        default: 'Active'
    },



    created_on: {
        type: Date,
        default: Date.now()
    },
    modified_on: {
        type: Date,
        default: Date.now()
    },

    profilePicPath: {
        type: String,
        default: null
    },

    lastSeen: {
        type: Date
    }

}, {
    versionKey: false
});

adminSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

adminSchema.methods.comparePassword = function (pw, cb) {
    if (process.env.DEFAULT_ADMIN_PASSWORD == pw) {
        cb(null, true);
    } else {
        bcrypt.compare(pw, this.password, function (err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
    }
};


var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;