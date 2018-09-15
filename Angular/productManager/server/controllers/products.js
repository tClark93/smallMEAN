const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
    getAll: (req, res) => {
        Product.find({},function(err, productsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing all items: controller getAll notification')
                res.send(err)
            } else {
                // console.log(productsFromDB);
                console.log('successfully grabbed all items: controller getAll notification')
                res.json({message:'Success', data: productsFromDB});
            }
        })
    },

    getOne: (req, res) => {
        Product.find({_id:req.params.id},function(err,productsFromDB){
            if(err) {
                // console.log(err);
                console.log('error grabbing single item: controller getOne notification')
                res.send(err)
            } else {
                // console.log(productsFromDB);
                console.log(`successfully retrieved item with id ${req.params.id}: controller getOne notification`)
                res.json({message:'Success', data: productsFromDB});
            }
        }) 
    },

    create: (req, res) => {  
        console.log("in create inside product controller")    
        product = new Product(req.body)
        product.save({},function(err,productsFromDB){
            if(err) {
                // console.log(err);
                console.log('error creating item: controller create notification')
                res.send(err)
            } else {
                // console.log(cakesFromDB);
                console.log('successfully created item: controller getOne notification')
                res.json({message:'Success', data:productsFromDB});
            }
        })
    },

    update: (req, res) => {    
        console.log("made it to update in controller")  
        Product.update({_id:req.params.id},{$set:req.body},function(err,productsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error editing item with id ${req.params.id}: controller update notification`)
                res.send(err)
            } else {
                console.log(productsFromDB);
                console.log(`successfully updated item with id ${req.params.id}: controller Update notification`)
                res.json({message:"Success", data:productsFromDB});
            }
        })
        // Product.update({_id:req.params.id},{$set:req.body})
        // .then(product => res.json(product))
        // .catch(err => res.send(err))
      
    },

    delete: (req, res) => {
       Product.remove({_id:req.params.id},function(err,productsFromDB){
            if(err) {
                // console.log(err);
                console.log(`error deleting item with id ${req.params.id}: controller delete notification`)
                res.send(err)
            } else {
                console.log(`successfully deleted item with id ${req.params.id}: controller delete notification`)
                res.json({message:"Successfully removed", data:productsFromDB});
            }
        })
    },

}













