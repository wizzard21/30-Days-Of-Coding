const express = require("express");
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../../middleware');
const {renderHome, renderLeaderboard, renderLogin, loginUser, logoutUser, renderSignUp, SignUp} = require("../controllers/home");
const {start, renderPage0, renderPage1, renderPage2, renderPage3, submitPage1, submitPage2, submitPage3} = require("../controllers/pages");

//set up express router
const router = express.Router();

router.route("/login")
    .get(renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), loginUser);
router.route("/logout").get(isLoggedIn, logoutUser);

router.route("/signup")
    .get(renderSignUp)
    .post(SignUp);

router.route("/leaderboard").get(renderLeaderboard);

router.route("/start").get(isLoggedIn, start);

router.route("/page0").get(isLoggedIn, renderPage0);

router.route("/page1").get(isLoggedIn, renderPage1).post(isLoggedIn, submitPage1);

router.route("/page2").get(isLoggedIn, renderPage2).post(isLoggedIn, submitPage2);

router.route("/page3").get(isLoggedIn, renderPage3).post(isLoggedIn, submitPage3);

router.route("/").get(renderHome);

module.exports = router;