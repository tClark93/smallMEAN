const mongoose = require("mongoose");
const Schema = mongoose.Schema


var commentSchema = new mongoose.Schema({
    author:  { type: String, required: [true, "Name must be between 1 and 30 characters"], minlength: 1, maxlength: 30},
    content:  { type: String, required: [true, "Content must be between 10 and 300 characters"], minlength: 10, maxlength: 300},
}, {timestamps: true });

var postSchema = new mongoose.Schema({
    author:  { type: String, required: [true, "Name must be between 1 and 30 characters"], minlength: 1, maxlength: 30},
    content:  { type: String, required: [true, "Content must be between 10 and 500 characters"], minlength: 10, maxlength: 500},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });

postSchema.pre("findOneAndUpdate", function(next){
    this.options.runValidators = true;
    next();
})

mongoose.model('Post', postSchema);
mongoose.model('Comment', commentSchema);

