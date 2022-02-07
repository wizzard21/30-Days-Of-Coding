const { ValidateName, ValidateEmail, ValidatePhone, ValidateUsername } = require("../validations/validation");
// const { connectDB } = require("../config/db");
// const connectDB = require("../config/db");

// connectDB();
// by calling its not working....check if possible

const mongoose = require("mongoose");
const { status, redirect } = require("express/lib/response");
mongoose.connect('mongodb://localhost:27017/webproject', {
        useNewUrlParser: true,
        useUnifiedTopology:true
});
const db = mongoose.connection;
    
db.on('error', () => console.log("Error in connecting to database"));
db.once('open', () => console.log("connected to Database"));
    

module.exports.renderHome = (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    console.log("check")
    return res.redirect('index.html');
}

module.exports.renderLogin = (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    console.log("check")
    return res.redirect('login.html');
}

module.exports.renderSignUp = (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    console.log("check")
    return res.redirect('signup.html');
}

module.exports.SignUp = async(req, res) => {
    // console.log("check")
    const {name, gender, email, password, username} = req.body;
    console.log(req.body);
    
    if (name.length == 0 || email.length == 0 || gender.length == 0 || username.length == 0 || password.length == 0) {
        console.log("Error: Input marked as * cannot be empty !");
    }
    else if (!ValidateName(name)) {
      console.log("Error: Invalid name..It must only contains (a-z, A-Z) !");
    }
    else if (!ValidateUsername(username)) {
      console.log("Error: Invalid username !");
    }
    else if (!ValidateEmail(email)) {
      console.log("Error: Invalid email..It must contains('@' and '.') !");
    }
    else {
      var data = {
          "name": name,
          "gender": gender,
	  	  "email": email,
	  	  "username":username,
          "pass": password,
          "level": 0
      }
      await db.collection('users').insertOne(data, (err, collection) => {
          if (err) {
              throw err;
          }
          console.log("inserted");

      });
      return res.redirect('login.html');
    }
}


const Schema = mongoose.Schema;

const User = mongoose.model('users', Schema({
    name: String,
    gender: String,
    email: String,
    username: String,
    pass: String,
    level:Number
}));
module.exports.LogIn = async (req, res) => {
    let username = req.body.username;
    let pass = req.body.password;
    const allData = await User.find({});
    let data={"level":-1};
    for (let i = 0; i < allData.length; i++){
        if (allData[i].username == username && allData[i].pass == pass) {
            data.level = allData[i].level;
            break;
        }
    }
    // console.log(data);
    if (data.level == -1) {
        console.log("User not found");
        // pop up message required.
        return res.redirect('signup.html');
    }
    else {
        // add a pop up message that user entered successfully..later.
        let red = "page" + (data.level.toString());
        return res.redirect(red);
    }
    // res.json(data);
    
}