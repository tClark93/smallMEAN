const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, minlength:[4, "Product name must be at least 4 characters"], maxlength:[100, "Product name must be under 100 characters"], required: [true, "Please provide the product's name"]},  
    price: {type: Number, required: [true, "Please provide the product's price"], min:[0, "Price can't be negative"], max:[10000, "Items on this site are capped at $10000"],},
    image: {type: String},
   }, {timestamps: true})

ProductSchema.pre("update", function(next){
    this.options.runValidators = true;
    next();
})
mongoose.model('Product', ProductSchema);


