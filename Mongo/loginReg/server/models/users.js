const mongoose = require("mongoose");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new mongoose.Schema({
    first:  { type: String, required: [true, "Please provide a first name"], minlength: [1, "Minimum length is 1"], maxlength: [30, "Maximum length is 30 characters"]},
    last:  { type: String, required: [true, "Please provide a last name"], minlength: 1, maxlength: [30, "Maximum length is 30 characters"]},
    email:  { type: String, required: [true, "Please provide an email address"], validate: [validateEmail, "Please provide a valid email"], unique: [true, "Email already exists"], minlength: 5, maxlength: 60},
    birthday:  { type: Date, required: [true, "Please provide a birthday"], max: Date.now()},
    password:  { type: String, required: [true, "Please provide a password"], minlength: 5, maxlength: 200},
}, {timestamps: true });

userSchema.pre("findOneAndUpdate", function(next){
    this.options.runValidators = true;
    next();
})

mongoose.model('User', userSchema);

