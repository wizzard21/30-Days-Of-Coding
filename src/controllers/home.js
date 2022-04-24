const { ValidateName, ValidateEmail, ValidateUsername } = require("../validations/validation");
const User = require('../models/users');
    

module.exports.renderHome = (req, res) => {
    res.render('index');
}

module.exports.renderEditor = (req, res) => {
    res.render('editor');
}

module.exports.renderLeaderboard = async(req, res) => {
    const users = await User.find().sort({"level": -1});
    console.log(users);
    res.render('leaderboard', {users});
}

module.exports.renderLogin = (req, res) => {
    if(!req.user){
        res.render('login');
    }
    else{
        req.flash('error', 'Logout first !');
        res.redirect('/');
    }
}

module.exports.loginUser = (req, res) => {
    req.flash("success", "Successfully logged in !");
    res.redirect('/page0');
}

module.exports.logoutUser = (req, res) => {
    req.logout();
    req.flash('success', 'Successfully logged out !');
    res.redirect('/');
}

module.exports.renderSignUp = (req, res) => {
    res.render('signup');
}

module.exports.SignUp = async(req, res) => {
    const {name, gender, email, password, username} = req.body;
    console.log(req.body);
    
    if (name.length == 0 || email.length == 0 || gender.length == 0 || username.length == 0 || password.length == 0) {
        req.flash("error", "Error: Input marked as * cannot be empty !");
        res.redirect("/signup");
    }
    else if (!ValidateName(name)) {
        req.flash("error", "Error: Invalid name..It must only contains (a-z, A-Z) !");
        res.redirect("/signup");
    }
    else if (!ValidateUsername(username)) {
        req.flash("error", "Error: Invalid username !");
        res.redirect("/signup");
    }
    else if (!ValidateEmail(email)) {
        req.flash("error", "Error: Invalid email..It must contains('@' and '.') !");
        res.redirect("/signup");
    }
    else {
        let user;
        const existingUser = await User.findOne({username: username});
        if(existingUser){
          req.flash("error", "Error: User already exists !");
          res.redirect("/signup");
        }
        else{
            user = new User({ name, gender, email, username, level: 1, score: 0 });
            await User.register(user, password);
            req.flash("success", "Success! New user created !");
            res.redirect("/login");
        }
    }
}