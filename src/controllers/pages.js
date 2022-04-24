const { db } = require('../models/users');
const User = require('../models/users');

module.exports.start = async(req, res) => {
    const level = req.user.level;
    if(level==21){
        req.flash("success", "All levels completed !");
        res.redirect('/page0');
    }
    else{
        res.redirect(`/page${level}`);
    }
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
module.exports.renderPage4 = (req, res) => {
    res.render('page4');
}
module.exports.renderPage5 = (req, res) => {
    res.render('page5');
}
module.exports.renderPage6 = (req, res) => {
    res.render('page6');
}
module.exports.renderPage7 = (req, res) => {
    res.render('page7');
}
module.exports.renderPage8 = (req, res) => {
    res.render('page8');
}
module.exports.renderPage9 = (req, res) => {
    res.render('page9');
}
module.exports.renderPage10 = (req, res) => {
    res.render('page10');
}
module.exports.renderPage11 = (req, res) => {
    res.render('page11');
}
module.exports.renderPage12 = (req, res) => {
    res.render('page12');
}
module.exports.renderPage13 = (req, res) => {
    res.render('page13');
}
module.exports.renderPage14 = (req, res) => {
    res.render('page14');
}
module.exports.renderPage15 = (req, res) => {
    res.render('page15');
}
module.exports.renderPage16 = (req, res) => {
    res.render('page16');
}
module.exports.renderPage17 = (req, res) => {
    res.render('page17');
}
module.exports.renderPage18 = (req, res) => {
    res.render('page18');
}
module.exports.renderPage19 = (req, res) => {
    res.render('page19');
}
module.exports.renderPage20 = (req, res) => {
    res.render('page20');
}

module.exports.submitPage1 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'd'){
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
    if(answer == '7'){
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
    if(answer == 'b'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 4, "score": 3}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page4');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page3');
    }
}
module.exports.submitPage4 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '3'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 5, "score": 4}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page5');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page4');
    }
}
module.exports.submitPage5 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'd'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 6, "score": 5}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page6');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page5');
    }
}
module.exports.submitPage6 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '2'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 7, "score": 6}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page7');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page6');
    }
}
module.exports.submitPage7 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'a'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 8, "score": 7}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page8');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page7');
    }
}
module.exports.submitPage8 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '6'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 9, "score": 8}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page9');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page8');
    }
}
module.exports.submitPage9 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'd'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 10, "score": 9}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page10');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page9');
    }
}
module.exports.submitPage10 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '35'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 11, "score": 10}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page11');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page10');
    }
}
module.exports.submitPage11 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'c'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 12, "score": 11}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page12');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page11');
    }
}
module.exports.submitPage12 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '3'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 13, "score": 12}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page13');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page12');
    }
}
module.exports.submitPage13 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'b'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 14, "score": 13}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page14');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page13');
    }
}
module.exports.submitPage14 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '3'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 15, "score": 14}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page15');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page14');
    }
}
module.exports.submitPage15 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'c'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 16, "score": 15}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page16');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page15');
    }
}
module.exports.submitPage16 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '8'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 17, "score": 16}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page17');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page16');
    }
}
module.exports.submitPage17 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'a'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 18, "score": 17}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page18');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page17');
    }
}
module.exports.submitPage18 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '511'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 19, "score": 18}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page19');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page18');
    }
}
module.exports.submitPage19 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == 'b'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 20, "score": 19}});
        req.flash("success", "Correct Answer !");
        res.redirect('/page20');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page19');
    }
}
module.exports.submitPage20 = async(req, res) => {
    const answer = req.body.answer;
    console.log(answer);
    if(answer == '80'){
        await User.updateOne({"username": req.user.username}, {$set: {"level": 21, "score": 20}});
        req.flash("success", "Correct Answer ! All levels completed.");
        res.redirect('/page0');
    }
    else{
        req.flash("error", "Wrong Answer !");
        res.redirect('/page20');
    }
}