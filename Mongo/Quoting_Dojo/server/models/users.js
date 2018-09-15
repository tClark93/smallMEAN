const mongoose = require("mongoose");
// const User = mongoose.model("User");

var UserSchema = new mongoose.Schema({
    name:  { type: String, required: [true, "Name must be between 1 and 20 characters"], minlength: 1, maxlength: 20},
    quote: { type: String, required: [true, "Quotes must be between 10 and 450 characters"], minlength: 10, maxlength: 450},
}, {timestamps: true });

mongoose.model('User', UserSchema);

// module.exports = {
//     create: (req, res) => {
//         const user = new User();
//         user.name = 21;
//         user.save((err)=>{
//             if(err){
//                 console.log(err);
//             }
//             res.redirect("/");
//         });
//     }
// }