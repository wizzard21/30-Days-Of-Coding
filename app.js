const express = require('express');
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');
const path = require("path");
const session = require('express-session');
const ExpressError = require('./src/utils/ExpressError');
const connectDB = require("./src/config/db");
const flash = require("connect-flash");
const routes = require("./src/routes/routes");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./src/models/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));

const sessionConfig = {
    secret: "Ourlittlesecret",
    resave: false,
    saveUninitialized: false
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.use("/", routes);

app.all('*', (req, res, next) => {
    next(res.render("pageNotFound", {
        title: "Page Not Found"
    }))
})

app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    console.log(err);
    if(!err.message) err.message = "Something went wrong";
    res.status(statusCode).render('error', {err});
})

connectDB();

const port = process.env.PORT || 8000;

//connecting server
app.listen(port, function () {
    console.log(`Server Started on port: ${port}`);
});


