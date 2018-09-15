const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const ReviewSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Reviewer name must be at least 3 characters long"], maxlength: [50, "Name length must be shorter than 50 characters"],}, 
    rating: {type: Number, min: 1, max: 5}, 
    review: {type: String, maxlength: [250, "Reviews must be shorter than 250 characters"],},
}, {timestamps: true})

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, minlength:[3, "Establishment name must be at least 3 characters"], maxlength:[100, "Establishment name must be under 100 characters"], required: [true, "Please provide the product's name"], unique:[true, "An establishment under that name already exists"]},  
    cuisine: {type: String, required: [true, "Please tell us what type of cuisine your establishment serves"],  maxlength:[100, "Please keep it under 100 characters"],},
    reviews: [ReviewSchema]
   }, {timestamps: true})

RestaurantSchema.pre("update", function(next){
    this.options.runValidators = true;
    next();
})

RestaurantSchema.plugin(uniqueValidator, {message: "An establishment under that name already exists"});

mongoose.model('Restaurant', RestaurantSchema);
mongoose.model('Review', ReviewSchema);


