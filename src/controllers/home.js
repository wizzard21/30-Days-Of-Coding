const { ValidateName, ValidateEmail, ValidatePhone, ValidateUsername } = require("../validations/validation");

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
          "pass": password
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