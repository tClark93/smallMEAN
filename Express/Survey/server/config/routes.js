module.exports = app =>{
    app.get("/", (req, res)=> {
        res.render("index");
    })
    app.post("/submit", (req, res)=> {
        console.log('POST DATA', req.body)
        user = req.body
        res.redirect("/result");
    })
    app.get("/result", (req, res)=> {
        res.render("result", {user: user});
    })
}