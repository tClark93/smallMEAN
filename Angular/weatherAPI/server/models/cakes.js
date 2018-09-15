const mongoose = require('mongoose');
const Schema = mongoose.Schema

const StarSchema = new mongoose.Schema({
    content: {type: String, minlength: [10, "comments have a minimum length of 10 characters"], maxlength: [200, "comments have a minimum length of 200 characters"],}, 
    rating: {type: Number, min: 1, max: 5}, 
}, {timestamps: true})


const CakeSchema = new mongoose.Schema({
    baker: {type: String, minlength:[2, "Baker's name must be more than one character"], required: [true, "Please provide the baker's name"]},  
    cake: {type: String, required: [true, "Please share what kind of cake this is"]},  
    description: {type: String, maxlength: [200, "Maximum description length is 200 characters"]},
    image: {type: String, required: [true, "An image of your cake is required"]},
    stars: [StarSchema]
   }, {timestamps: true})

mongoose.model('Cake', CakeSchema);
mongoose.model('Stars', StarSchema);

