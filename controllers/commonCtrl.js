// third parties
let _ = require("lodash");
let moment = require("moment");

// models
let Admin = require("../models/Admin");

let getAdminById = (exports.getAdminById = async function (
  id,
  andCondition = {}
) {
  let existingUser = await Admin.findOne({
    $and: [{ _id: id }, andCondition]
  });
  return existingUser;
});


exports.seedAdmin = async function () {
  let newAdmin = new Admin({
    firstName : 'Malkit',
    lastName : 'Singh',
    email : 'malkitsingh01@gmail.com',
  })
  newAdmin.save();
};