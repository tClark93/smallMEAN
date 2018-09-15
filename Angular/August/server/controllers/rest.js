const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
const Review = mongoose.model('Review');


module.exports = {
    getAll: (req, res) => {
        Restaurant.find({},function(err, restaurantsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing all items: controller getAll notification')
                res.send(err)
            } else {
                // console.log(restaurantsFromDB);
                console.log('successfully grabbed all items: controller getAll notification')
                res.json({message:'Success', data: restaurantsFromDB});
            }
        })
    },

    getOne: (req, res) => {
        Restaurant.find({_id:req.params.id},function(err,restaurantsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing single item: controller getOne notification')
                res.send(err)
            } else {
                // console.log(restaurantsFromDB);
                console.log(`successfully retrieved item with id ${req.params.id}: controller getOne notification`)
                res.json({message:'Success', data: restaurantsFromDB});
            }
        }) 
    },

    create: (req, res) => {  
        console.log("in create inside product controller")    
        restaurant = new Restaurant(req.body)
        restaurant.save({},function(err,restaurantsFromDB){
            if(err) {
                // console.log(err);
                console.log('error creating item: controller create notification')
                res.json({message:"Error", data:err});
            } else {
                // console.log(restaurantsFromDB);
                console.log('successfully created item: controller getOne notification')
                res.json({message:'Success', data:restaurantsFromDB});
            }
        })
    },

    update: (req, res) => {    
        console.log("made it to update in controller")  
        Restaurant.update({_id:req.params.id},{$set:req.body},function(err,restaurantsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error editing item with id ${req.params.id}: controller update notification`)
                res.json({message:"Error", data:err});
            } else {
                console.log(restaurantsFromDB);
                console.log(`successfully updated item with id ${req.params.id}: controller Update notification`)
                res.json({message:"Success", data:restaurantsFromDB});
            }
        })   
    },

    review: (req, res) => {
        const review = new Review(req.body);
        review.save((err)=>{
            if(err){
                console.log(`Error rating item with id ${req.params.id}: controller rate notification - inside save statement`);                        
                // console.log(err); 
                res.json({message: 'Error', error: err})
            }
            else{
                Restaurant.find({_id:req.params.id},function(err,restaurantsFromDB){
                    if(err) {
                        // console.log(err);
                        console.log('error grabbing single item: controller getOne notification')
                        res.send(err)
                    } 
                    else {
                        restaurantsFromDB[0]['reviews'].push(review)
                        restaurantsFromDB[0].save();
                        console.log(`Success reviewing item with id ${req.params.id}: controller review notification`)
                        res.json({message:'Success', data:restaurantsFromDB});
                    }
                })
            }
        });
    },

    delete: (req, res) => {
       Restaurant.remove({_id:req.params.id},function(err,restaurantsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error deleting item with id ${req.params.id}: controller delete notification`)
                res.send(err)
            } else {
                console.log(`successfully deleted item with id ${req.params.id}: controller delete notification`)
                res.json({message:"Successfully removed", data:restaurantsFromDB});
            }
        })
    },

}













