module.exports = app =>{
    app.get("/", (req, res)=> {
        if(req.session.count == null){
            req.session.count = 0
        }
        req.session.count++
        res.render("index", {counter:req.session.count});
    })
    app.post("/add", (req, res)=> {
        req.session.count++
        res.redirect("/");
    })
    app.post("/reset", (req, res)=> {
        req.session.destroy()
        res.redirect("/");
    })
}