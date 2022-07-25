if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');
const path = require("path");
const session = require('express-session');
const ExpressError = require('./src/utils/ExpressError');
const flash = require("connect-flash");
const routes = require("./src/routes/routes");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./src/models/users');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongo');
const mongoSanitize = require('express-mongo-sanitize');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/webproject';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});
const db = mongoose.connection;

db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("connected to Database"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));
app.use(
    mongoSanitize({
      replaceWith: '_',
    }),
);

const secret = process.env.SECRET || 'Ourlittlesecret';

const store = MongoDBStore.create({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});

store.on("error", function(e){
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    secret,
    resave: false,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + (1000 * 60 * 60 * 24 *7),
        maxAge: 1000 * 60 * 60 * 24 *7
    }
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

const port = process.env.PORT || 3000;

//connecting server
app.listen(port, function () {
    console.log(`Server Started on port: ${port}`);
});


