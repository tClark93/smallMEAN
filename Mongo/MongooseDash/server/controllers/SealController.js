const mongoose = require("mongoose");
const Seal = mongoose.model("Seal");



module.exports = {
    index: (req, res) => {
        Seal.find({}, (err, sealsFromDB)=>{
            if(err) {
                console.log(err);
                console.log("Error at user.find, SealController line 11");
            } else {
                // console.log(sealsFromDB);
                // console.log("2");
                res.render("index", {seals: sealsFromDB});
            }
        })
        console.log("1");
    }, 

    addSeal: (req, res) => {
        Seal.find({}, (err, sealsFromDB)=>{
            if(err) {
                console.log(err);
                console.log("Error at user.find, SealController line 11");
                res.render("addSeal");
            } else {
                console.log(sealsFromDB);
                console.log("2");
                res.render("addSeal");
            }
        })
        console.log("1");
    }, 

    idSeal: (req, res) => {
        Seal.findOne({_id:req.params.id}, (err, sealsFromDB)=>{
            if(err) {
                console.log(err);
                console.log("Error at user.find, SealController line 11");
            } else {
                console.log(sealsFromDB);
                console.log("2");
                res.render("idSeal", {seal: sealsFromDB});
            }
        })
        console.log("1");
    }, 

    updateSeal: (req, res) => {
        Seal.findOne({_id:req.params.id}, (err, sealsFromDB)=>{
            if(err) {
                // console.log(err);
                // console.log("Error at user.find, SealController line 11");
            } else {
                // console.log(sealsFromDB);
                // console.log("2");
                res.render("updateSeal", {seal: sealsFromDB});
            }
        })
        console.log("1");
    }, 

    update: (req, res) => {
        Seal.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name, weight:req.body.weight, color:req.body.color, age:req.body.age, info: req.body.info}},{new:true},function(err,seal){
            if(err) {
                if(err){
                    console.log("Error creating seal, SealController line 32");               
                    for(var key in err.errors){
                        req.flash('registration',err.errors[key].message)
                    }               
                    console.log(err); 
                }
                console.log("failed validation");
                // console.log(err);
                console.log(err.message);

                res.redirect("/seals/edit/"+req.params.id);

            } else {
                console.log("edited dog*"+seal);

                console.log("NO ERRORS**");
                res.redirect("/");

            }
        })
        console.log("send me home");
    },

    destroySeal: (req, res) => {
        const seal = Seal.findOne({_id:req.params.id});
        seal.remove((err)=>{
            if(err){
                console.log("Error destroying seal, SealController line 32");                    
                console.log(err);  
            }
            res.redirect("/");
        });
    },

    create: (req, res) => {
        const seal = new Seal(req.body);
        seal.save((err)=>{
            if(err){
                console.log("Error creating seal, SealController line 32");               
                for(var key in err.errors){
                    req.flash('registration',err.errors[key].message)
                }               
                console.log(err); 
                res.redirect("/seals/new");
            }
            else{
                res.redirect("/");
            }
        });
    },
}