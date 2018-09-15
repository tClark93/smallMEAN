const mongoose = require("mongoose");
// const User = mongoose.model("User");

var SealSchema = new mongoose.Schema({
    name:  { type: String, required: [true, "Name must be between 1 and 20 characters"], minlength: 1, maxlength: 20},
    age:  { type: Number, required: [true, "Please enter an age between and 30"], min: 1, max: 30},
    weight:  { type: Number, required: [true, "Please enter a a number 1 between and 3000"], min: 1, max: 3000},
    color:  { type: String, required: [true, "Color must be between 1 and 20 characters"], min: 1, max: 20},
    info: { type: String, maxlength: 450},
}, {timestamps: true });

SealSchema.pre("findOneAndUpdate", function(next){
    this.options.runValidators = true;
    next();
})

mongoose.model('Seal', SealSchema);

