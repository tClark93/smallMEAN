const mongoose = require("mongoose");
const Schema = mongoose.Schema
const UserSchema = new mongoose.Schema({
    name: {type: String, minlength:[2, "Name field must be at least 2 characters"], required: [true, "Name field is required"]},  
    age: {type: Number, required: [true, "Age field is required"]},  
   }, {timestamps: true})


   

mongoose.model('User', UserSchema);

