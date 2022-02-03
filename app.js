const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb://localhost:27017/webproject', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});
var db = mongoose.connection;

db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("connected to Database"));

app.post("/signup", (req, res) => {
    // console.log("check")
    let name = req.body.name;
    let gender = req.body.gender;
    let email = req.body.email;
    let pass = req.body.password;
    let userName = req.body.username;
    var data = {
        "name": name,
        "gender": gender,
		"email": email,
		"username":userName,
        "pass": pass
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("inserted");
        
    });
    return res.redirect('login.html');
})


// console.log("check")
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    console.log("check")
    return res.redirect('index.html');
}).listen(3000);
