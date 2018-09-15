module.exports = app =>{
    app.get("/", (req, res)=> {
        res.render("index");
    })
    app.get("/cars", (req, res)=>{
        res.render("cars");
    })
    app.get("/cats", (req, res)=>{
        res.render("cats");
    })
    app.get("/form", (req, res)=>{
        res.render("form");
    })
}