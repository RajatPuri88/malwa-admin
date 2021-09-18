var express = require("express");
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

// controllers
let _CommonCtrl = require("../controllers/commonCtrl");

//models
var Admin = require("../models/Admin");

router.get("/register", function (req, res) {
  res.render("register");
});

router.get("/login", function (req, res) {
  res.render("login", { layout: null });
});
// router.get("/seedAdmin", function (req, res) {
//   _CommonCtrl.seedAdmin()
//   res.json({
//     'success': true
//   })
// });

passport.use(
  new LocalStrategy(function (username, password, done) {

    Admin.findOne(
      {
        email: username
      },
      function (err, user) {

        if (err) {

          return done(err);
        }

        if (!user) {

          return done(null, false);
        }

        user.comparePassword(password, async function (err, isMatch) {

          if (isMatch && !err) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    );
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Admin.findById(id, function (err, user) {
    done(err, user);
  });
});



router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login"
  }),
  function (req, res) {
    console.log("reaching....");
  }
);
router.get("/logout", function (req, res) {
  req.logout();

  res.redirect("/users/login");
});

module.exports = router;
