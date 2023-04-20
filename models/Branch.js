"use strict";
let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

let branchSchema = new mongoose.Schema({


    name: {
        type: String,
        trim: true,
        lowercase: true
    },
    state: {
        type: String,

        trim: true,
        lowercase: true
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

    created_By: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
      },
    modified_By: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
      },

   

}, {
    versionKey: false
});



var Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;