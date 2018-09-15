const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Stars = mongoose.model('Stars');


module.exports = {
    getAll: (req, res) => {
        Cake.find({},function(err, cakesFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing all items: controller getAll notification')
                res.json({message: 'Error', error: err})
            } else {
                // console.log(cakesFromDB);
                console.log('successfully grabbed all items: controller getAll notification')
                res.json({message:'Success', data: cakesFromDB});
            }
        })
    },

    getOne: (req, res) => {
        Cake.find({_id:req.params.id},function(err,cakesFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing single item: controller getOne notification')
                res.json({message: 'Error', error: err})
            } else {
                // console.log(cakesFromDB);
                console.log(`successfully retrieved item with id ${req.params.id}: controller getOne notification`)
                res.json({message:'Success', data: cakesFromDB});
            }
        }) 
    },

    create: (req, res) => {      
        cake = new Cake(req.body)
        cake.save({},function(err,cakesFromDB){
            if(err) {
                // console.log(err);
                console.log('error creating item: controller create notification')
                res.json({message: 'Error', error: err})
            } else {
                // console.log(cakesFromDB);
                console.log('successfully created item: controller getOne notification')
                res.json({message:'Success', data:cakesFromDB});
            }
        })
    },

    rate: (req, res) => {
        console.log("begin commenting")
        console.log(req.body)
        
        Cake.findOne({_id: req.params.id}, (err, cakesFromDB) =>{
            console.log("inside rating function")
            if(err){
                // console.log(err);
                console.log(`Error rating cake with id ${req.params.id}: controller rate notification`);
            }
            else{
                const rating = new Stars(req.body);
                rating.save((err)=>{
                    if(err){
                        console.log(`Error rating cake with id ${req.params.id}: controller rate notification - inside save statement`);               
                        for(var key in err.errors){
                            req.flash('rating', err.errors[key].message)
                        }               
                        // console.log(err); 
                        res.json({message: 'Error', error: err})
                    }
                    else{
                        // console.log(cakesFromDB)
                        cakesFromDB.stars.push(rating)
                        cakesFromDB.save();
                        console.log(`Error rating cake with id ${req.params.id}: controller rate notification`)
                        res.json({message:'Success', data:cakesFromDB});
                    }
                });
            }
        })
    },

    update: (req, res) => {      
       Cake.update({_id:req.params.id},{$set:req.body},function(err,cakesFromDB){
            if(err) {
                // console.log(err);
                console.log(`error editing item with id ${req.params.id}: controller update notification`)
                res.json({message: 'Error', error: err})
            } else {
                console.log(cakesFromDB);
                console.log(`successfully updated item with id ${req.params.id}: controller Update notification`)
                res.json({message:"Success", data:cakesFromDB});
            }
        })
      
    },

    delete: (req, res) => {
       Cake.remove({_id:req.params.id},function(err,cakesFromDB){
            if(err) {
                // console.log(err);
                console.log(`error deleting item with id ${req.params.id}: controller delete notification`)
                res.json({message: 'Error', error: err})
            } else {
                console.log(`successfully deleted item with id ${req.params.id}: controller delete notification`)
                res.json({message:"Successfully removed", data:cakesFromDB});
            }
        })
    },

}













