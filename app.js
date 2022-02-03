const express = require('express');
const app = express();
const ejs = require("ejs");
const bodyParser = require('body-parser');
const path = require("path");
const connectDB = require("./src/config/db");
const routes = require("./src/routes/routes");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));


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

const port = process.env.PORT || 3000;

//connecting server
app.listen(port, function () {
    console.log(`Server Started on port: ${port}`);
});
