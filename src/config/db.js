const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/webproject', {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    const db = mongoose.connection;
    
    db.on('error', () => console.log("Error in connecting to database"));
    db.once('open', () => console.log("connected to Database"));
};

module.exports = connectDB;