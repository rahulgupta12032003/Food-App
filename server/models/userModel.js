const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name:{
        type: String,
       required: true,
    },
    email:{
        type: String,
       required: true,
    },
    password:{
        type: String,
       required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, {timestamps : true});


const userSchema = mongoose.model("user" , userModel);
module.exports = userSchema;