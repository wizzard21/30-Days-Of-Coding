const express = require("express");
const {renderHome, renderLogin, renderSignUp, SignUp, LogIn} = require("../controllers/home");

//set up express router
const router = express.Router();

router.route("/login").get(renderLogin).post(LogIn);

router.route("/signup").get(renderSignUp).post(SignUp);

router.route("/").get(renderHome);

module.exports = router;