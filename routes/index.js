// third parties
let _ = require("lodash");
let moment = require("moment-timezone");
var express = require("express");
var router = express.Router();


// models


// controllers
// let _CommonCtrl = require("../controllers/commonCtrl");

router.get("/", ensureAuthenticated, async function (req, res) {


  try {


    res.render("dashboard");
  } catch (ex) {
    console.log("Error Occured " + ex);
    res.render("dashboard");
  }
});
router.get("/add-del-branch", ensureAuthenticated, async function (req, res) {


  try {


    res.render("add-del-branch");
  } catch (ex) {
    console.log("Error Occured " + ex);
    res.render("dashboard");
  }
});
router.get("/add-del-staff", ensureAuthenticated, async function (req, res) {


  try {


    res.render("add-del-staff");
  } catch (ex) {
    console.log("Error Occured " + ex);
    res.render("dashboard");
  }
});

router.get("/staff-on-leave", ensureAuthenticated, async function (req, res) {


  try {


    res.render("staff-on-leave");
  } catch (ex) {
    console.log("Error Occured " + ex);
    res.render("dashboard");
  }
});
router.get("/view-km-location", ensureAuthenticated, async function (req, res) {


  try {


    res.render("view-km-location");
  } catch (ex) {
    console.log("Error Occured " + ex);
    res.render("dashboard");
  }
});
router.get("/view-attendance", ensureAuthenticated, async function (req, res) {


  try {


    res.render("view-attendance");
  } catch (ex) {
    console.log("Error Occured " + ex);
    res.render("dashboard");
  }
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    //req.flash('error_msg','You are not logged in');
    res.redirect("/users/login");
  }
}

module.exports = router;
