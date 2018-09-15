module.exports = app =>{
    app.get("/", (req, res)=> {
        res.render("index");
    })

    app.get("/cats", (req, res)=>{
        res.render("cats");
    })

    app.get("/senorFancy", function (request, response){
        var cat = {
            name: "¡Senior Fancy!", 
            favfood: "Caviar",
            age: 4, 
            spots: ["The Budior", "Expensive Hotel Rooms"], 
            img: "/images/kitty3.jpg"
        }
        response.render('kitty', {cat: cat});
    })

    app.get("/theMajestic", function (request, response){
        var cat = {
            name: "The Magestic", 
            favfood: "Water",
            age: 2, 
            spots: ["Under the stars", "Heaven"], 
            img: "/images/kitty1.jpg"
        }
        response.render('kitty', {cat: cat});
    })

    app.get("/stu", function (request, response){
        var cat = {
            name: "Stu", 
            favfood: "Human children",
            age: 18, 
            spots: ["Lakes", "Baths"], 
            img: "/images/kitty4.jpg"
        }
        response.render('kitty', {cat: cat});
    })
}