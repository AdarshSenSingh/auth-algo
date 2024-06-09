const mongoose = require('mongoose');
const userSchema = new mongoose.userSchema({

    user_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile_no: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    }


});

// define model or collection name
const User= new mongoose.model("User",userSchema);
module.exports= User;