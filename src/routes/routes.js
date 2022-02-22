const express = require("express");
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../../middleware');
const {renderHome, renderPage0, renderLogin, loginUser, logoutUser, renderSignUp, SignUp} = require("../controllers/home");

//set up express router
const router = express.Router();

router.route("/login")
    .get(renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), loginUser);
router.route("/logout").get(isLoggedIn, logoutUser);

router.route("/signup")
    .get(renderSignUp)
    .post(SignUp);

router.route("/page0").get(isLoggedIn, renderPage0);

router.route("/").get(renderHome);

module.exports = router;