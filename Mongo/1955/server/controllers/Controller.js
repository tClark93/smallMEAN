const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var flash = require('express-flash');
const User = mongoose.model("User");
mongoose.Promise = global.Promise;



module.exports = {
    register: (req, res) => {
        console.log(req.body)
        const user = new User(req.body);
        user.validate(function (err){
            if(err){
                console.log(err)
                console.log("there was an error")
                for(var key in err.errors){
                    req.flash('registration',err.errors[key].message)
                }               
                
            }
            else{
                user.password = bcrypt.hashSync(user.password, 10)
                user.save({}, (err, userFromDB) =>{
                    if(err){
                        console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
                        console.log(err)
                        console.log(user)
                        console.log("error saving user")
                        res.redirect("index")
                    }
                    else{
                        console.log(user)
                        res.redirect("success")
                    }
                })
            }
        })
    },
    login: (req, res) => {
        console.log(req.body)
        User.findOne({email: req.body.email}, (err, userFromDB) =>{
            if(userFromDB == null){
                res.redirect("index")
            }
            else{
                console.log("right above validPass")
                validPass = bcrypt.compareSync(req.body.password, userFromDB.password)
                console.log(validPass)
                if(validPass){
                    res.redirect("success")
                }
                else{
                    res.redirect("index")
                }
            }
        });
    }
}
