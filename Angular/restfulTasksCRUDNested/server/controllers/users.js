const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = {
    // index: (req, res)=>{
    //     User.find({})
    //     .then(user => res.json(user))
    //     .catch(err => res.send(err))
    // },
    getAll: (req, res) => {
        User.find({},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    getUser: (req, res) => {
        User.find({_id:req.params.id},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                // console.log(usersFromDB);
                console.log("successfully retrieved user with id "+req.params.id)
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    create: (req, res) => {      
        user = new User({
            name :req.body.name,
            age :req.body.age
        })
       user.save({},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    update: (req, res) => {      
       User.update({_id:req.params.id},{$set:req.body},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
                console.log(usersFromDB);
               
                res.json({message:"Success", data:usersFromDB});
            }
        })
      
    },
    delete: (req, res) => {
       User.remove({_id:req.params.id},function(err,usersFromDB){
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err})
                
            } else {
               
                res.json({message:"Successfully removed", data:usersFromDB});
            }
        })
      
    },

    
    



}













