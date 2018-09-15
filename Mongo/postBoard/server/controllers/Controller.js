const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");
mongoose.Promise = global.Promise;



module.exports = {
    index: (req, res) => {
        Post.find({}).populate("_comments").exec(function(err, postsFromDB){
            if(err) {
                console.log(err);
                console.log("Error at user.find, SealController line 11");
            } else {
                // console.log(sealsFromDB);
                // console.log("2");
                res.render("index", {posts: postsFromDB});
            }
        })
        console.log("1");
    },

    create: (req, res) => {

        console.log(req.body)
        const post = new Post(req.body);
        post.save((err)=>{
            if(err){
                console.log("Error creating seal, SealController line 32");               
                for(var key in err.errors){
                    req.flash('registration',err.errors[key].message)
                }               
                console.log(err); 
                res.redirect("/");
            }
            else{
                console.log("post success")
                res.redirect("/");
            }
        });
    },
    createComment: (req, res) => {
        console.log("begin commenting")
        console.log(req.body)
        
        Post.findOne({_id: req.params.id}, (err, messageFromDB) =>{
            console.log("inside comment function")
            if(err) {

                console.log(err);
                console.log("Error at user.find, SealController line 45");
            }
            else{
                const comment = new Comment(req.body);
                comment.save((err)=>{
                    if(err){
                        console.log("Error creating comment, SealController line 47");               
                        for(var key in err.errors){
                            req.flash('comment',err.errors[key].message)
                        }               
                        console.log(err); 
                        res.redirect("/");
                    }
                    else{
                        console.log(messageFromDB)
                        messageFromDB._comments.push(comment)
                        messageFromDB.save();
                        console.log("comment success")
                        res.redirect("/");
                    }
                });
            }
        })
    },
} 
