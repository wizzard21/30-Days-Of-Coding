const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    level: {
        type: Number
    }
},
    {
        timestamps: true,
    }
);
UserSchema.plugin(passportLocalMongoose); //adds username and password

module.exports = mongoose.model('User', UserSchema);