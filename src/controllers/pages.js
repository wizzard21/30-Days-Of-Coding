const { db } = require('../models/users');
const User = require('../models/users');

module.exports.start = async(req, res) => {
    const level = req.user.level;
    res.redirect(`/page${level}`);
}

module.exports.renderPage0 = (req, res) => {
    res.render('page0');
}

module.exports.renderPage1 = (req, res) => {
    res.render('page1');
}

module.exports.renderPage2 = (req, res) => {
    res.render('page2');
}

module.exports.renderPage3 = (req, res) => {
    res.render('page3');
}

module.exports.submitPage1 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'Male'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 2, "score": 1}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page2');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page1');
    }
}

module.exports.submitPage2 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'Boy'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 3, "score": 2}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page3');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page2');
    }
}

module.exports.submitPage3 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'Sourav'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 4, "score": 3}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page0');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page3');
    }
}