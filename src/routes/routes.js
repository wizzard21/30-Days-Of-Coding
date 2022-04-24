const express = require("express");
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../../middleware');
const {renderHome, renderLeaderboard, renderLogin, loginUser, logoutUser, renderSignUp, SignUp} = require("../controllers/home");
const {start, renderPage0, renderPage1, renderPage2, renderPage3, renderPage4, renderPage5, renderPage6, renderPage7, renderPage8, renderPage9, renderPage10, renderPage11, renderPage12, renderPage13, renderPage14, renderPage15, renderPage16, renderPage17, renderPage18, renderPage19, renderPage20} = require("../controllers/pages");
const {submitPage1, submitPage2, submitPage3, submitPage4, submitPage5, submitPage6, submitPage7, submitPage8, submitPage9, submitPage10,submitPage11, submitPage12, submitPage13, submitPage14, submitPage15, submitPage16, submitPage17, submitPage18, submitPage19, submitPage20} = require("../controllers/pages");

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
router.route("/page4").get(isLoggedIn, renderPage4).post(isLoggedIn, submitPage4);
router.route("/page5").get(isLoggedIn, renderPage5).post(isLoggedIn, submitPage5);
router.route("/page6").get(isLoggedIn, renderPage6).post(isLoggedIn, submitPage6);
router.route("/page7").get(isLoggedIn, renderPage7).post(isLoggedIn, submitPage7);
router.route("/page8").get(isLoggedIn, renderPage8).post(isLoggedIn, submitPage8);
router.route("/page9").get(isLoggedIn, renderPage9).post(isLoggedIn, submitPage9);
router.route("/page10").get(isLoggedIn, renderPage10).post(isLoggedIn, submitPage10);
router.route("/page11").get(isLoggedIn, renderPage11).post(isLoggedIn, submitPage11);
router.route("/page12").get(isLoggedIn, renderPage12).post(isLoggedIn, submitPage12);
router.route("/page13").get(isLoggedIn, renderPage13).post(isLoggedIn, submitPage13);
router.route("/page14").get(isLoggedIn, renderPage14).post(isLoggedIn, submitPage14);
router.route("/page15").get(isLoggedIn, renderPage15).post(isLoggedIn, submitPage15);
router.route("/page16").get(isLoggedIn, renderPage16).post(isLoggedIn, submitPage16);
router.route("/page17").get(isLoggedIn, renderPage17).post(isLoggedIn, submitPage17);
router.route("/page18").get(isLoggedIn, renderPage18).post(isLoggedIn, submitPage18);
router.route("/page19").get(isLoggedIn, renderPage19).post(isLoggedIn, submitPage19);
router.route("/page20").get(isLoggedIn, renderPage20).post(isLoggedIn, submitPage20);

router.route("/").get(renderHome);

module.exports = router;